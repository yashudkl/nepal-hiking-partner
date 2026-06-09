'use client'

import { useState } from 'react'

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
  '/assets/resunga-farm-stay-and-retreat.jpeg',
  '/assets/annapurna-base-camp/annapurna_base_camp.png',
  '/assets/annapurna-circuit/annapurna_circuit.png',
  '/assets/gosaikunda/gosaikunda.jpg',
  '/assets/langtang-trek/langtang.png',
]

export default function FarmStayPage() {
  const [selectedImage, setSelectedImage] = useState(0)
  const [isLightboxOpen, setIsLightboxOpen] = useState(false)

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
