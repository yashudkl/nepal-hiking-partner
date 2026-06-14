function getErrorMessage(error: unknown) {
  return error instanceof Error ? error.message : 'Failed'
}

function joinDates(dates: string[]) {
  return dates.filter(Boolean).join(', ')
}

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { name, email, phone, trekId, trekTitle, dates, participants, message } = body as {
      name?: string
      email?: string
      phone?: string
      trekId?: string
      trekTitle?: string
      dates?: string[]
      participants?: string
      message?: string
    }

    if (!name || !email || !phone || !trekId || !Array.isArray(dates) || dates.length === 0) {
      return new Response(JSON.stringify({ error: 'Missing required fields' }), { status: 400 })
    }

    const to = process.env.BOOKING_RECIPIENT || 'dhurbapanthi@gmail.com'
    const subject = `Trek Booking Request - ${name} - ${trekTitle || trekId}`
    const text = [
      'New trek booking request:',
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone}`,
      `Trek: ${trekTitle || trekId}`,
      `Trek ID: ${trekId}`,
      `Dates: ${joinDates(dates)}`,
      `Participants: ${participants || ''}`,
      `Message: ${message || ''}`,
    ].join('\n')

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
        const errorText = await resp.text().catch(() => '')
        const data = errorText ? (() => { try { return JSON.parse(errorText) } catch { return null } })() : null
        const detail = data?.message || data?.error || errorText || resp.statusText || `Resend responded with ${resp.status}`

        if (resp.status !== 403 && process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
          const nodemailer = (await import('nodemailer')).default
          const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: Number(process.env.SMTP_PORT || 587),
            secure: process.env.SMTP_SECURE === 'true',
            auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
          })

          await transporter.sendMail({
            from,
            to,
            subject,
            text,
          })

          return new Response(JSON.stringify({ ok: true, fallback: 'smtp' }), { status: 201 })
        }

        throw new Error(`Resend responded with ${resp.status}: ${detail}`)
      }
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

      return new Response(JSON.stringify({ ok: true }), { status: 201 })
    }

    return new Response(JSON.stringify({ error: 'No email provider configured. Set RESEND_API_KEY or SMTP_* env vars.' }), { status: 500 })
  } catch (err: unknown) {
    console.error('Trek booking API error:', err)
    return new Response(JSON.stringify({ error: getErrorMessage(err) || 'Failed to send' }), { status: 500 })
  }
}
