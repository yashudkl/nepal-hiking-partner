import getClientPromise from '@/lib/mongodb'

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { name, email, phone, date, price, notes } = body
    if (!name || !email || !date) return new Response(JSON.stringify({ error: 'Missing required fields' }), { status: 400 })
    const to = process.env.BOOKING_RECIPIENT || 'yashudkl@gmail.com'
    const subject = `Farm Stay Booking - ${name} - ${date}`
    const text = [`New farm stay booking:`, `Name: ${name}`, `Email: ${email}`, `Phone: ${phone || ''}`, `Date: ${date}`, `Price: ${price || ''}`, `Notes: ${notes || ''}`].join('\n')

    // Prepare DB and booking object
    const client = await getClientPromise()
    const db = client.db('nepalhikingpartner')
    const coll = db.collection('bookings')

    // Check existing booking first
    const existing = await coll.findOne({ date })
    if (existing) {
      return new Response(JSON.stringify({ error: 'Date already booked' }), { status: 409 })
    }

    const booking = {
      name,
      email,
      phone: phone || '',
      date,
      price: price || '',
      notes: notes || '',
      createdAt: new Date(),
    }

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

      try {
        await coll.createIndex({ date: 1 }, { unique: true })
        await coll.insertOne(booking)
        return new Response(JSON.stringify({ ok: true }), { status: 201 })
      } catch (err: any) {
        if (err?.code === 11000) return new Response(JSON.stringify({ error: 'Date already booked' }), { status: 409 })
        throw err
      }
    }

    if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
      const nodemailer = (await import('nodemailer')).then(m => m.default)
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

      try {
        await coll.createIndex({ date: 1 }, { unique: true })
        await coll.insertOne(booking)
        return new Response(JSON.stringify({ ok: true }), { status: 201 })
      } catch (err: any) {
        if (err?.code === 11000) return new Response(JSON.stringify({ error: 'Date already booked' }), { status: 409 })
        throw err
      }
    }

    return new Response(JSON.stringify({ error: 'No email provider configured. Set RESEND_API_KEY or SMTP_* env vars.' }), { status: 500 })
  } catch (err: any) {
    console.error('Booking API error:', err)
    return new Response(JSON.stringify({ error: err.message || 'Failed to send' }), { status: 500 })
  }
}

export async function GET(req: Request) {
  try {
    const url = new URL(req.url)
    const date = url.searchParams.get('date')
    if (!date) return new Response(JSON.stringify({ error: 'Missing date' }), { status: 400 })

    const getClientPromise = (await import('@/lib/mongodb')).default
    const client = await getClientPromise()
    const db = client.db('nepalhikingpartner')
    const coll = db.collection('bookings')
    const existing = await coll.findOne({ date })
    return new Response(JSON.stringify({ booked: !!existing }), { status: 200 })
  } catch (err: any) {
    return new Response(JSON.stringify({ error: err.message || 'Failed' }), { status: 500 })
  }
}
