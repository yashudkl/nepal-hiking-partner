import type { Collection } from 'mongodb'
import getClientPromise from '@/lib/mongodb'

function buildDates(start: string, days: number) {
  if (!start || !Number.isFinite(days) || days < 1) return []
  const [year, month, day] = start.split('-').map(Number)
  if (!year || !month || !day) return []

  return Array.from({ length: days }, (_, index) => {
    const date = new Date(Date.UTC(year, month - 1, day + index))
    return date.toISOString().split('T')[0]
  })
}

function getErrorMessage(error: unknown) {
  return error instanceof Error ? error.message : 'Failed'
}

const MIN_FARM_STAY_DAYS = 7

async function persistBookingDates(
  coll: Collection,
  bookingDocs: Array<{
    name: string
    email: string
    phone: string
    date: string
    price: string
    notes: string
    createdAt: Date
  }>,
) {
  for (const doc of bookingDocs) {
    await coll.updateOne(
      { date: doc.date },
      {
        $set: {
          name: doc.name,
          email: doc.email,
          phone: doc.phone,
          price: doc.price,
          notes: doc.notes,
          createdAt: doc.createdAt,
          updatedAt: new Date(),
        },
      },
      { upsert: true },
    )
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { name, email, phone, date, start, days, price, notes } = body
    // support either single-date `date` or multi-day `start`+`days`
    if (!name || !email || (!(date || start))) return new Response(JSON.stringify({ error: 'Missing required fields' }), { status: 400 })
    const to = process.env.BOOKING_RECIPIENT || 'yashudkl@gmail.com'

    // build date(s) list and friendly subject/text
    let dates: string[] = []
    if (start && days) {
      dates = buildDates(start, Number(days))
    } else if (date) {
      dates = [date]
    }
    if (dates.length === 0) return new Response(JSON.stringify({ error: 'Invalid booking dates' }), { status: 400 })
    if (start && Number(days) < MIN_FARM_STAY_DAYS) {
      return new Response(JSON.stringify({ error: `Minimum stay is ${MIN_FARM_STAY_DAYS} days` }), { status: 400 })
    }

    const subject = `Farm Stay Booking - ${name} - ${dates[0]}${dates.length > 1 ? ` to ${dates[dates.length - 1]}` : ''}`
    const text = [`New farm stay booking:`, `Name: ${name}`, `Email: ${email}`, `Phone: ${phone || ''}`, `Dates: ${dates.join(', ')}`, `Price: ${price || ''}`, `Notes: ${notes || ''}`].join('\n')

    // Prepare DB and booking object
    const client = await getClientPromise()
    const db = client.db('nepalhikingpartner')
    const coll = db.collection('bookings')

    // Check existing booking(s) first for any overlapping date
    const existing = await coll.findOne({ date: { $in: dates } })
    if (existing) {
      return new Response(JSON.stringify({ error: 'Date already booked' }), { status: 409 })
    }

    // create one booking document per day so each booked date is blocked immediately
    const bookingDocs = dates.map(d => ({
      name,
      email,
      phone: phone || '',
      date: d,
      price: price || '',
      notes: notes || '',
      createdAt: new Date(),
    }))

    // Send email first. Only persist booking if email sending succeeds.
    if (process.env.RESEND_API_KEY) {
      const from = process.env.FROM_EMAIL || email
      const resp = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from,
          to,
          subject,
          text,
        }),
      })
      if (!resp.ok) {
        const data = await resp.json().catch(() => ({}))
        throw new Error(data?.error || `Resend responded with ${resp.status}`)
      }

      await persistBookingDates(coll, bookingDocs)
      return new Response(JSON.stringify({ ok: true }), { status: 201 })
    }

    if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
      const nodemailer = (await import('nodemailer')).default
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT || 587),
        secure: process.env.SMTP_SECURE === 'true',
        auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
      })

      await transporter.sendMail({
        from: process.env.FROM_EMAIL || email,
        to,
        subject,
        text,
      })

      await persistBookingDates(coll, bookingDocs)
      return new Response(JSON.stringify({ ok: true }), { status: 201 })
    }

    return new Response(JSON.stringify({ error: 'No email provider configured. Set RESEND_API_KEY or SMTP_* env vars.' }), { status: 500 })
  } catch (err: unknown) {
    console.error('Booking API error:', err)
    return new Response(JSON.stringify({ error: getErrorMessage(err) || 'Failed to send' }), { status: 500 })
  }
}

export async function GET(req: Request) {
  try {
    const url = new URL(req.url)
    const date = url.searchParams.get('date')
    const start = url.searchParams.get('start')
    const days = Number(url.searchParams.get('days') || '0')

    if (!date && !(start && days)) return new Response(JSON.stringify({ error: 'Missing date' }), { status: 400 })

    const getClientPromise = (await import('@/lib/mongodb')).default
    const client = await getClientPromise()
    const db = client.db('nepalhikingpartner')
    const coll = db.collection('bookings')

    let dates: string[] = []
    if (start && days) {
      dates = buildDates(start, Number(days))
    } else if (date) {
      dates = [date]
    }
    if (dates.length === 0) return new Response(JSON.stringify({ error: 'Invalid booking dates' }), { status: 400 })
    if (start && Number(days) < MIN_FARM_STAY_DAYS) {
      return new Response(JSON.stringify({ error: `Minimum stay is ${MIN_FARM_STAY_DAYS} days` }), { status: 400 })
    }

    const existing = await coll.findOne({ date: { $in: dates } })
    return new Response(JSON.stringify({ booked: !!existing }), { status: 200 })
  } catch (err: unknown) {
    return new Response(JSON.stringify({ error: getErrorMessage(err) || 'Failed' }), { status: 500 })
  }
}
