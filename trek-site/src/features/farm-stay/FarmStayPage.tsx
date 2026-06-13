'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

const amenities = [
  { title: 'Spacious Rooms', desc: 'Comfortable accommodation with mountain views' },
  { title: 'Farm-to-Table Meals', desc: 'Fresh, organic food prepared daily' },
  { title: 'Organic Farm', desc: 'Explore and participate in farm activities' },
  { title: 'Hiking Trails', desc: 'Guided nature walks through scenic paths' },
  { title: 'Yoga & Meditation', desc: 'Daily sessions for peace and wellness' },
  { title: 'Bonfire Nights', desc: 'Evening gatherings with local stories' },
  { title: 'Photography Tours', desc: 'Capture landscape and village life' },
  { title: 'Garden Walks', desc: 'Learn about local plants and herbs' },
]

const galleryImages = [
  // keep the existing resunga farm stay hero image (located in public/assets)
  '/assets/resunga-farm-stay-and-retreat.webp',
  // use only images from the farmstay gallery copied into public/assets/farmstay
  '/assets/farmstay/IMG_2721.webp',
  '/assets/farmstay/IMG_2723.webp',
  '/assets/farmstay/IMG_2724.webp',
  '/assets/farmstay/IMG_2725.webp',
]

export default function FarmStayPage() {
  const MIN_DAYS = 7
  const [selectedImage, setSelectedImage] = useState(0)
  const [isLightboxOpen, setIsLightboxOpen] = useState(false)
  const [startDate, setStartDate] = useState<string>('')
  const [endDate, setEndDate] = useState<string>('')
  const [isBooked, setIsBooked] = useState<boolean>(false)
  const [checking, setChecking] = useState(false)

  function getDaysInRange(start: string, end: string) {
    if (!start || !end) return 0
    const startTime = new Date(`${start}T00:00:00`).getTime()
    const endTime = new Date(`${end}T00:00:00`).getTime()
    if (Number.isNaN(startTime) || Number.isNaN(endTime) || endTime < startTime) return 0
    return Math.floor((endTime - startTime) / 86400000) + 1
  }

  const days = getDaysInRange(startDate, endDate)
  const price = days * 30
  const router = useRouter()

  useEffect(() => {
    let mounted = true
    async function check() {
      setIsBooked(false)
      if (!startDate || !days) return
      setChecking(true)
      try {
        const res = await fetch(`/api/bookings?start=${encodeURIComponent(startDate)}&days=${encodeURIComponent(String(days))}`)
        if (!mounted) return
        if (res.ok) {
          const data = await res.json()
          setIsBooked(Boolean(data.booked))
        } else {
          setIsBooked(false)
        }
      } catch {
        setIsBooked(false)
      } finally {
        if (mounted) setChecking(false)
      }
    }
    check()
    return () => {
      mounted = false
    }
  }, [startDate, days])

  const hasValidRange = Boolean(startDate && endDate && days >= MIN_DAYS)

  return (
    <div className="bg-white">
      <section className="border-b border-neutral-200 bg-neutral-50">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 lg:grid-cols-[0.48fr_0.52fr] lg:items-center lg:px-8">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-neutral-500">Resunga Farm Stay & Retreat</p>
            <h1 className="mt-4 text-5xl font-bold tracking-tight text-neutral-900 md:text-6xl">A quiet rural stay with practical comfort.</h1>
            <p className="mt-5 text-base leading-7 text-neutral-600">
              Experience crisp countryside air, local meals, farm life, and calm views in Gulmi, Nepal.
            </p>
            <div className="mt-8 grid grid-cols-2 border border-neutral-200 bg-white">
              {[
                ['Location', 'Gulmi, Nepal'],
                ['Travel', '10 hrs by jeep'],
                ['Season', 'Oct - May'],
                ['Type', 'Farm Stay'],
              ].map(([label, value], index) => (
                <div key={label} className={`p-4 ${index < 2 ? 'border-b border-neutral-200' : ''} ${index % 2 === 0 ? 'border-r border-neutral-200' : ''}`}>
                  <div className="text-xs font-bold uppercase tracking-[0.14em] text-neutral-500">{label}</div>
                  <div className="mt-1 text-sm font-bold text-neutral-900">{value}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="border border-neutral-200 bg-white p-3">
            <img src={galleryImages[0]} alt="Resunga Farm Stay and Retreat" className="aspect-[4/3] w-full object-cover" />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-12 lg:px-8">
        <div className="grid gap-4 md:grid-cols-4">
          {galleryImages.map((image, index) => (
            <button
              key={image}
              type="button"
              onClick={() => {
                setSelectedImage(index)
                setIsLightboxOpen(true)
              }}
              className={`relative border border-neutral-200 bg-neutral-100 ${index === 0 ? 'md:col-span-2 md:row-span-2' : ''}`}
            >
              <img src={image} alt={`Farm stay view ${index + 1}`} className="aspect-[4/3] h-full w-full object-cover" />
              {index === galleryImages.length - 1 && (
                <span className="absolute inset-0 grid place-items-center bg-white/80 text-sm font-bold uppercase tracking-[0.18em] text-neutral-900">
                  View All
                </span>
              )}
            </button>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-5 pb-16 lg:grid-cols-[0.66fr_0.34fr] lg:px-8">
        <div className="space-y-10">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-neutral-500">The Stay</p>
            <h2 className="mt-3 text-3xl font-bold text-neutral-900">Local ingredients, simple rooms, and slow mornings.</h2>
            <p className="mt-5 text-base leading-8 text-neutral-600">
              At Resunga Farm Stay & Retreat, guests settle into a rural setting that blends practical comfort with authentic local living. Meals are prepared with seasonal ingredients, and the surrounding trails make it easy to add light hikes, photography, or quiet rest days.
            </p>
          </div>

          <div className="border-l-4 border-neutral-300 bg-neutral-50 p-6">
            <p className="text-base font-semibold leading-7 text-neutral-800">
              Best for travelers who want a grounded countryside experience before or after a Himalayan trek.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-neutral-900">Amenities</h2>
            <div className="mt-6 grid gap-px bg-neutral-200 sm:grid-cols-2 lg:grid-cols-4">
              {amenities.map((amenity, index) => (
                <article key={amenity.title} className="bg-white p-5">
                  <div className="text-sm font-bold text-neutral-400">{String(index + 1).padStart(2, '0')}</div>
                  <h3 className="mt-5 text-base font-bold text-neutral-900">{amenity.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-neutral-600">{amenity.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </div>

        <aside className="border border-neutral-200 bg-neutral-50 p-6">
          <h2 className="text-xl font-bold text-neutral-900">Contact</h2>
          <div className="mt-6 space-y-5">
            <div>
              <div className="text-xs font-bold uppercase tracking-[0.14em] text-neutral-500">Phone</div>
              <div className="mt-1 text-sm font-bold text-neutral-900">+977-9843756464</div>
            </div>
            <div>
              <div className="text-xs font-bold uppercase tracking-[0.14em] text-neutral-500">Email</div>
              <div className="mt-1 break-all text-sm font-bold text-neutral-900">dhurbapanthi@gmail.com</div>
            </div>
            <div>
              <div className="text-xs font-bold uppercase tracking-[0.14em] text-neutral-500">Services</div>
              <p className="mt-1 text-sm leading-6 text-neutral-600">Accommodation, meals, farm visits, hikes, yoga, meditation, and local cultural experiences.</p>
            </div>
            <div className="pt-3 border-t border-neutral-200">
              <h3 className="text-sm font-bold text-neutral-700">Book a stay</h3>
              <label className="mt-2 mb-1 block text-xs text-neutral-500">Start date</label>
              <input
                type="date"
                value={startDate}
                onChange={(e) => {
                  const nextStart = e.target.value
                  setStartDate(nextStart)
                  if (endDate && nextStart && endDate < nextStart) setEndDate(nextStart)
                }}
                className="w-full rounded-md border border-neutral-300 px-3 py-2 text-sm"
              />

              <label className="mt-3 mb-1 block text-xs text-neutral-500">End date</label>
              <input
                type="date"
                value={endDate}
                min={startDate || undefined}
                onChange={(e) => setEndDate(e.target.value)}
                className="w-full rounded-md border border-neutral-300 px-3 py-2 text-sm"
              />

              <div className="hidden">
                <div className="text-sm text-neutral-600">Selected</div>
                <div className="text-sm font-bold text-neutral-900">{startDate ? new Date(startDate).toLocaleDateString() : '—'}</div>
              </div>

              <div className="mt-3 flex items-center justify-between gap-3">
                <div className="text-sm text-neutral-600">Selected</div>
                <div className="text-right text-sm font-bold text-neutral-900">
                  {hasValidRange ? `${new Date(`${startDate}T00:00:00`).toLocaleDateString()} - ${new Date(`${endDate}T00:00:00`).toLocaleDateString()}` : '-'}
                </div>
              </div>

              <div className="mt-2 flex items-center justify-between">
                <div className="text-sm text-neutral-600">Number of days</div>
                <div className="text-sm font-bold text-neutral-900">{hasValidRange ? days : '-'}</div>
              </div>

              {!hasValidRange && startDate && endDate && days > 0 && (
                <div className="mt-2 text-sm text-red-600">Minimum stay is {MIN_DAYS} days.</div>
              )}

              <div className="mt-2 flex items-center justify-between">
                <div className="text-sm text-neutral-600">Price</div>
                <div className="text-sm font-bold text-neutral-900">{price > 0 ? `$${price}` : '—'}</div>
              </div>

              <div className="mt-2">
                {checking ? (
                  <div className="text-sm text-neutral-500">Checking availability…</div>
                ) : isBooked ? (
                  <div className="text-sm font-bold text-red-600">Booked</div>
                ) : (
                  hasValidRange && <div className="text-sm text-neutral-600">We'll reach out to the contact details you provide soon.</div>
                )}
              </div>

              <button
                type="button"
                disabled={!hasValidRange || isBooked}
                className="mt-4 w-full rounded bg-neutral-900 px-4 py-2 text-sm font-bold text-white disabled:opacity-50"
                onClick={() => {
                  if (!hasValidRange || isBooked) return
                  const params = new URLSearchParams({ start: startDate, days: String(days), price: String(price) })
                  router.push(`/farm-stay/confirm?${params.toString()}`)
                }}
              >
                Book Now
              </button>
            </div>
          </div>
        </aside>
      </section>

      {isLightboxOpen && (
        <div className="fixed inset-0 z-[70] grid place-items-center bg-white/95 p-5">
          <div className="w-full max-w-5xl border border-neutral-700 bg-white p-4">
            <div className="mb-4 flex items-center justify-between">
              <p className="text-sm font-bold text-neutral-700">{selectedImage + 1} / {galleryImages.length}</p>
              <button type="button" onClick={() => setIsLightboxOpen(false)} className="border border-neutral-300 px-4 py-2 text-sm font-bold text-neutral-900">
                Close
              </button>
            </div>
            <img src={galleryImages[selectedImage]} alt={`Farm stay selected view ${selectedImage + 1}`} className="max-h-[70vh] w-full object-contain" />
          </div>
        </div>
      )}
    </div>
  )
}
