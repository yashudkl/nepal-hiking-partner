"use client"

import React, { useState } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'

export default function ConfirmClient() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const start = searchParams.get('start') || ''
  const daysParam = Number(searchParams.get('days') || '0')
  const price = searchParams.get('price') || ''
  const days = daysParam || 0

  function formatRange(startDate: string, daysCount: number) {
    if (!startDate || !daysCount) return ''
    const s = new Date(`${startDate}T00:00:00`)
    const end = new Date(s)
    end.setDate(s.getDate() + daysCount - 1)
    return `${s.toLocaleDateString()} — ${end.toLocaleDateString()} (${daysCount} days)`
  }

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [notes, setNotes] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError(null)
    if (!name || !email) return setError('Name and email are required')
    setSending(true)
    try {
      const res = await fetch('/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, phone, start, days, price, notes }),
      })
      if (!res.ok) {
        const data = await res.json()
        throw new Error(data?.error || 'Failed to send')
      }
      await res.json()
      setSubmitted(true)
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Failed to send booking')
    } finally {
      setSending(false)
    }
  }

  if (!start || !days) {
    return (
      <div className="mx-auto max-w-3xl px-5 py-20 text-center">
        <p className="text-lg font-bold">No booking found</p>
        <p className="mt-3 text-sm text-neutral-600">Please select a start date and number of days on the Farm Stay page.</p>
        <div className="mt-6">
          <button className="rounded bg-neutral-900 px-4 py-2 text-sm font-bold text-white" onClick={() => router.push('/farm-stay')}>Back to Farm Stay</button>
        </div>
      </div>
    )
  }

  if (submitted) {
    return (
      <div className="mx-auto max-w-3xl px-5 py-20 text-center">
        <h1 className="text-2xl font-bold">Thanks for booking</h1>
        <p className="mt-3 text-sm text-neutral-600">We'll reach out to you at the contact details you provided soon.</p>
        <div className="mt-6 text-left">
          <div className="text-sm text-neutral-600">Name</div>
          <div className="font-bold text-neutral-900">{name}</div>
          <div className="mt-3 text-sm text-neutral-600">Dates</div>
          <div className="font-bold text-neutral-900">{formatRange(start, days)}</div>
          <div className="mt-3 text-sm text-neutral-600">Price</div>
          <div className="font-bold text-neutral-900">${price}</div>
        </div>

        <div className="mt-6">
          <button className="rounded bg-neutral-900 px-4 py-2 text-sm font-bold text-white" onClick={() => router.push('/farm-stay')}>Back</button>
        </div>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-3xl px-5 py-12">
      <h1 className="text-2xl font-bold">Confirm your booking</h1>
      <p className="mt-2 text-sm text-neutral-600">Dates: <span className="font-bold text-neutral-900">{formatRange(start, days)}</span> — Price: <span className="font-bold text-neutral-900">${price}</span></p>

      <form onSubmit={handleSubmit} className="mt-6 space-y-4">
        <div>
          <label className="block text-xs font-bold text-neutral-500">Full name</label>
          <input required value={name} onChange={(e) => setName(e.target.value)} className="mt-1 w-full rounded border border-neutral-300 px-3 py-2 text-sm" />
        </div>

        <div>
          <label className="block text-xs font-bold text-neutral-500">Email</label>
          <input required value={email} onChange={(e) => setEmail(e.target.value)} type="email" className="mt-1 w-full rounded border border-neutral-300 px-3 py-2 text-sm" />
        </div>

        <div>
          <label className="block text-xs font-bold text-neutral-500">Phone</label>
          <input value={phone} onChange={(e) => setPhone(e.target.value)} className="mt-1 w-full rounded border border-neutral-300 px-3 py-2 text-sm" />
        </div>

        <div>
          <label className="block text-xs font-bold text-neutral-500">Notes (optional)</label>
          <textarea value={notes} onChange={(e) => setNotes(e.target.value)} className="mt-1 w-full rounded border border-neutral-300 px-3 py-2 text-sm" rows={3} />
        </div>

        {error && <div className="text-sm text-red-600">{error}</div>}
        <div className="flex items-center gap-3">
          <button disabled={sending} type="submit" className="rounded bg-neutral-900 px-4 py-2 text-sm font-bold text-white disabled:opacity-50">{sending ? 'Sending...' : 'Confirm Booking'}</button>
          <button type="button" className="text-sm text-neutral-600" onClick={() => router.back()}>Cancel</button>
        </div>
      </form>
    </div>
  )
}
