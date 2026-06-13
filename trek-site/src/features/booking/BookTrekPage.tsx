'use client'

import React, { useState } from 'react'
import { treks } from '@/data/treks'

const weekDays = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']

function formatDateKey(date: Date) {
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  return `${year}-${month}-${day}`
}

function formatDisplayDate(dateKey: string) {
  return new Date(`${dateKey}T00:00:00`).toLocaleDateString(undefined, {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  })
}

export default function BookTrekPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    trekId: '',
    dates: [] as string[],
    participants: '1',
    message: '',
  })
  const today = new Date()
  const [visibleMonth, setVisibleMonth] = useState(new Date(today.getFullYear(), today.getMonth(), 1))
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const toggleDate = (dateKey: string) => {
    setFormData((prev) => {
      const dates = prev.dates.includes(dateKey)
        ? prev.dates.filter((date) => date !== dateKey)
        : [...prev.dates, dateKey].sort()

      return { ...prev, dates }
    })
  }

  const calendarDays = (() => {
    const firstDay = new Date(visibleMonth.getFullYear(), visibleMonth.getMonth(), 1)
    const firstCalendarDay = new Date(firstDay)
    firstCalendarDay.setDate(firstDay.getDate() - firstDay.getDay())

    return Array.from({ length: 42 }, (_, index) => {
      const date = new Date(firstCalendarDay)
      date.setDate(firstCalendarDay.getDate() + index)
      return date
    })
  })()

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="bg-white">
      <section className="border-b border-neutral-200 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-5 py-14 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-neutral-500">Booking Request</p>
          <h1 className="mt-4 max-w-4xl text-5xl font-bold tracking-tight text-neutral-900 md:text-6xl">Start with clear dates, route, and group size.</h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-neutral-600">
            This form sends the basic trip details needed to prepare a practical trekking plan.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-5 py-12 lg:grid-cols-[0.58fr_0.42fr] lg:px-8">
        <form onSubmit={handleSubmit} className="border border-neutral-200 bg-white p-6 md:p-8">
          <h2 className="text-2xl font-bold text-neutral-900">Trip Details</h2>
          {submitted && (
            <div className="mt-6 border border-neutral-200 bg-neutral-50 p-4 text-sm font-semibold text-neutral-700">
              Request received. We will contact you with availability and next steps.
            </div>
          )}

          <div className="mt-8 grid gap-5">
            <label className="grid gap-2">
              <span className="text-sm font-bold text-neutral-700">Full Name *</span>
              <input required name="name" value={formData.name} onChange={handleChange} className="border border-neutral-300 px-4 py-3 text-neutral-900 outline-none focus:border-neutral-600" />
            </label>

            <div className="grid gap-5 md:grid-cols-2">
              <label className="grid gap-2">
                <span className="text-sm font-bold text-neutral-700">Email *</span>
                <input required type="email" name="email" value={formData.email} onChange={handleChange} className="border border-neutral-300 px-4 py-3 text-neutral-900 outline-none focus:border-neutral-600" />
              </label>
              <label className="grid gap-2">
                <span className="text-sm font-bold text-neutral-700">Phone *</span>
                <input required name="phone" value={formData.phone} onChange={handleChange} className="border border-neutral-300 px-4 py-3 text-neutral-900 outline-none focus:border-neutral-600" />
              </label>
            </div>

            <label className="grid gap-2">
              <span className="text-sm font-bold text-neutral-700">Select Trek *</span>
              <select required name="trekId" value={formData.trekId} onChange={handleChange} className="border border-neutral-300 bg-white px-4 py-3 text-neutral-900 outline-none focus:border-neutral-600">
                <option value="">Choose a trek</option>
                {treks.map((trek) => (
                  <option key={trek.id} value={trek.id}>{trek.title}</option>
                ))}
              </select>
            </label>

            <div className="grid gap-5 md:grid-cols-2">
              <div className="grid gap-2">
                <span className="text-sm font-bold text-neutral-700">Travel Dates *</span>
                <div className="border border-neutral-300 p-4">
                  <div className="flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => setVisibleMonth((month) => new Date(month.getFullYear(), month.getMonth() - 1, 1))}
                      className="grid h-9 w-9 place-items-center border border-neutral-300 text-lg font-bold text-neutral-700 hover:border-neutral-600"
                      aria-label="Previous month"
                    >
                      ‹
                    </button>
                    <div className="text-sm font-bold text-neutral-900">
                      {visibleMonth.toLocaleDateString(undefined, { month: 'long', year: 'numeric' })}
                    </div>
                    <button
                      type="button"
                      onClick={() => setVisibleMonth((month) => new Date(month.getFullYear(), month.getMonth() + 1, 1))}
                      className="grid h-9 w-9 place-items-center border border-neutral-300 text-lg font-bold text-neutral-700 hover:border-neutral-600"
                      aria-label="Next month"
                    >
                      ›
                    </button>
                  </div>
                  <div className="mt-4 grid grid-cols-7 gap-1 text-center text-xs font-bold text-neutral-500">
                    {weekDays.map((day) => (
                      <div key={day}>{day}</div>
                    ))}
                  </div>
                  <div className="mt-2 grid grid-cols-7 gap-1">
                    {calendarDays.map((date) => {
                      const dateKey = formatDateKey(date)
                      const isCurrentMonth = date.getMonth() === visibleMonth.getMonth()
                      const isSelected = formData.dates.includes(dateKey)

                      return (
                        <button
                          key={dateKey}
                          type="button"
                          onClick={() => toggleDate(dateKey)}
                          className={`grid aspect-square place-items-center border text-sm font-semibold ${
                            isSelected
                              ? 'border-neutral-900 bg-neutral-900 text-white'
                              : isCurrentMonth
                                ? 'border-transparent text-neutral-900 hover:border-neutral-400'
                                : 'border-transparent text-neutral-400 hover:border-neutral-300'
                          }`}
                          aria-pressed={isSelected}
                        >
                          {date.getDate()}
                        </button>
                      )
                    })}
                  </div>
                  <div className="mt-4 flex items-center justify-between gap-3 border-t border-neutral-200 pt-3">
                    <button
                      type="button"
                      onClick={() => setFormData((prev) => ({ ...prev, dates: [] }))}
                      className="text-sm font-bold text-neutral-600 hover:text-neutral-900"
                    >
                      Clear
                    </button>
                    <button
                      type="button"
                      onClick={() => setVisibleMonth(new Date(today.getFullYear(), today.getMonth(), 1))}
                      className="text-sm font-bold text-primary-700 hover:text-primary-900"
                    >
                      Today
                    </button>
                  </div>
                </div>
                <input required className="sr-only" value={formData.dates.join(',')} onChange={() => {}} />
                <div className="min-h-6 text-sm text-neutral-600">
                  {formData.dates.length > 0 ? formData.dates.map(formatDisplayDate).join(', ') : 'Select one or more dates.'}
                </div>
              </div>
              <label className="grid gap-2">
                <span className="text-sm font-bold text-neutral-700">Participants *</span>
                <select required name="participants" value={formData.participants} onChange={handleChange} className="border border-neutral-300 bg-white px-4 py-3 text-neutral-900 outline-none focus:border-neutral-600">
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((count) => (
                    <option key={count} value={count}>{count}</option>
                  ))}
                </select>
              </label>
            </div>

            <label className="grid gap-2">
              <span className="text-sm font-bold text-neutral-700">Additional Info</span>
              <textarea name="message" value={formData.message} onChange={handleChange} rows={5} className="border border-neutral-300 px-4 py-3 text-neutral-900 outline-none focus:border-neutral-600" />
            </label>

            <button type="submit" className="border border-primary-600 bg-primary-600 px-6 py-4 text-sm font-bold text-white hover:bg-primary-700">
              Submit Booking Request
            </button>
          </div>
        </form>

        <aside className="space-y-4">
          <h2 className="text-2xl font-bold text-neutral-900">Available Treks</h2>
          {treks.slice(0, 6).map((trek) => (
            <button
              key={trek.id}
              type="button"
              onClick={() => setFormData((prev) => ({ ...prev, trekId: trek.id }))}
              className={`grid w-full grid-cols-[96px_1fr] border p-3 text-left ${formData.trekId === trek.id ? 'border-neutral-900 bg-white' : 'border-neutral-200 bg-white hover:border-neutral-300'}`}
            >
              <img src={trek.image} alt={trek.title} className="h-24 w-24 object-cover" />
              <span className="px-4 py-1">
                <span className="block text-base font-bold text-neutral-900">{trek.title}</span>
                <span className="mt-1 block text-sm text-neutral-500">{trek.duration} / {trek.altitude}</span>
                <span className="mt-3 block text-xs font-bold uppercase tracking-[0.14em] text-neutral-500">{trek.difficulty}</span>
              </span>
            </button>
          ))}
        </aside>
      </section>
    </div>
  )
}
