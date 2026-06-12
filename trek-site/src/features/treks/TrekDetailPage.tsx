'use client'

import { use, useState } from 'react'
import { useRouter } from 'next/navigation'
import { treks } from '@/data/treks'
import trekAssetGallery from './galleryImages'

interface TrekProps {
  params: Promise<{ id: string }>
}

const galleryMap: Record<string, string[]> = {
  'everest-three-pass': ['everest_threepass.webp'],
  'everest-base-camp': ['everestbasecamp.webp'],
  'langtang-trek': ['langtang.webp'],
  'narphu-valley': ['narphu_valley.webp'],
  'mardi-himal': ['mardi.webp'],
  'annapurna-base-camp': ['annapurna_base_camp.webp'],
  gosaikunda: ['gosaikunda.webp'],
  'annapurna-circuit': ['annapurna_circuit.webp'],
  'manaslu-circuit': ['manaslu.webp'],
}

export default function TrekDetailPage({ params }: TrekProps) {
  const router = useRouter()
  const { id } = use(params)
  const trek = treks.find((item) => item.id === id)
  const [expandedDay, setExpandedDay] = useState<number | null>(0)
  const [selectedImage, setSelectedImage] = useState(0)
  const [isLightboxOpen, setIsLightboxOpen] = useState(false)

  if (!trek) {
    return (
      <div className="grid min-h-[50vh] place-items-center bg-white px-5">
        <div className="border border-neutral-200 bg-neutral-50 p-8 text-center">
          <h1 className="text-2xl font-bold text-neutral-900">Trek not found</h1>
          <button type="button" onClick={() => router.push('/trek')} className="mt-5 border border-primary-600 bg-primary-600 px-5 py-3 text-sm font-bold text-white">
            Back to Treks
          </button>
        </div>
      </div>
    )
  }

  const assetImages = trekAssetGallery[id] || []
  const galleryImages = assetImages.length > 0 ? assetImages : (galleryMap[id] || []).map((name) => `/assets/${id}/${name}`)
  const images = galleryImages.length > 0 ? galleryImages : [trek.image]
  const normalizedImages = images.map((img) => (typeof img === 'string' ? img : (img as any)?.src || (img as any)?.default || ''))

  return (
    <div className="bg-white">
      <section className="border-b border-neutral-200 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-5 py-10 lg:px-8">
          <button type="button" onClick={() => router.push('/trek')} className="text-sm font-bold text-neutral-700 hover:text-neutral-900">
            Back to trek catalogue
          </button>
          <div className="mt-6 grid gap-8 lg:grid-cols-[0.55fr_0.45fr] lg:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-neutral-500">{trek.difficulty}</p>
              <h1 className="mt-3 text-5xl font-bold tracking-tight text-neutral-900 md:text-6xl">{trek.title}</h1>
              <p className="mt-4 text-lg font-medium text-neutral-600">{trek.subtitle}</p>
            </div>
            <div className="grid grid-cols-2 border border-neutral-200 bg-white">
              {[
                ['Duration', trek.duration],
                ['Altitude', trek.altitude],
                ['Distance', trek.distance],
                ['Best Season', trek.bestSeason],
              ].map(([label, value], index) => (
                <div key={label} className={`p-4 ${index < 2 ? 'border-b border-neutral-200' : ''} ${index % 2 === 0 ? 'border-r border-neutral-200' : ''}`}>
                  <div className="text-xs font-bold uppercase tracking-[0.14em] text-neutral-500">{label}</div>
                  <div className="mt-1 text-sm font-bold text-neutral-900">{value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {isLightboxOpen && (
        <div className="fixed inset-0 z-[70] grid place-items-center bg-white/95 p-5">
          <div className="w-full max-w-5xl border border-neutral-700 bg-white p-4">
            <div className="mb-4 flex items-center justify-between">
              <p className="text-sm font-bold text-neutral-700">{selectedImage + 1} / {normalizedImages.length}</p>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setSelectedImage((s) => (s - 1 + images.length) % images.length)}
                  className="border border-neutral-300 px-3 py-2 text-sm font-bold text-neutral-900"
                >
                  ‹
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedImage((s) => (s + 1) % images.length)}
                  className="border border-neutral-300 px-3 py-2 text-sm font-bold text-neutral-900"
                >
                  ›
                </button>
                <button type="button" onClick={() => setIsLightboxOpen(false)} className="border border-neutral-300 px-4 py-2 text-sm font-bold text-neutral-900">
                  Close
                </button>
              </div>
            </div>
            <img src={normalizedImages[selectedImage]} alt={`Selected ${selectedImage + 1}`} className="max-h-[70vh] w-full object-contain" />
          </div>
        </div>
      )}

      <section className="mx-auto max-w-7xl px-5 py-12 lg:px-8">
        <div className="grid gap-4 md:grid-cols-4">
          {normalizedImages.slice(0, 5).map((image, index) => (
            <button
              key={String(image) + index}
              type="button"
              onClick={() => {
                setSelectedImage(index)
                setIsLightboxOpen(true)
              }}
              className={`relative border border-neutral-200 bg-neutral-100 ${index === 0 ? 'md:col-span-2 md:row-span-2' : ''}`}
            >
              <img src={image} alt={`${trek.title} view ${index + 1}`} className="aspect-[4/3] h-full w-full object-cover" />
              {index === 4 && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="rounded-lg bg-black/65 px-4 py-2 text-white font-bold text-sm shadow-lg backdrop-blur-sm">
                    View all {Math.min(normalizedImages.length, 10)} photos
                  </div>
                </div>
              )}
            </button>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-5 pb-16 lg:grid-cols-[0.68fr_0.32fr] lg:px-8">
        <div className="space-y-12">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-neutral-500">Overview</p>
            <p className="mt-4 text-lg leading-8 text-neutral-700">{trek.overview}</p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-neutral-900">Highlights</h2>
            <div className="mt-6 grid gap-px bg-neutral-200 sm:grid-cols-2">
              {trek.highlights.map((highlight) => (
                <div key={highlight} className="bg-white p-5 text-sm font-semibold leading-6 text-neutral-700">
                  <span className="mr-2 text-neutral-400">|</span>
                  {highlight}
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-neutral-900">Day-by-Day Itinerary</h2>
            <div className="mt-6 border border-neutral-200">
              {trek.itinerary.map((item, index) => {
                const expanded = expandedDay === index
                return (
                  <div key={`${item.day}-${item.location}`} className="border-b border-neutral-200 last:border-b-0">
                    <button
                      type="button"
                      onClick={() => setExpandedDay(expanded ? null : index)}
                      className="grid w-full gap-3 bg-white p-5 text-left hover:bg-neutral-50 md:grid-cols-[7rem_1fr_auto]"
                    >
                      <span className="text-sm font-bold text-neutral-500">{item.day}</span>
                      <span className="text-base font-bold text-neutral-900">{item.location}</span>
                      <span className="text-sm font-semibold text-neutral-500">{item.duration || ''}</span>
                    </button>
                    {expanded && <p className="border-t border-neutral-100 bg-neutral-50 p-5 text-sm leading-7 text-neutral-600">{item.description}</p>}
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        <aside className="space-y-6">
          <div className="border border-neutral-200 bg-neutral-50 p-6">
            <h2 className="text-xl font-bold text-neutral-900">Plan this trek</h2>
            <p className="mt-3 text-sm leading-6 text-neutral-600">Send your travel dates and group size. We will confirm route details and availability.</p>
            <button
              type="button"
              onClick={() => router.push('/book-trek')}
              className="mt-6 w-full border border-primary-600 bg-primary-600 px-5 py-3 text-sm font-bold text-white hover:bg-primary-700"
            >
              Book This Trek
            </button>
          </div>

          <div className="border border-neutral-200 bg-white p-6">
            <h3 className="text-lg font-bold text-neutral-900">Included</h3>
            <ul className="mt-4 space-y-3">
              {trek.inclusions.map((item) => (
                <li key={item} className="text-sm leading-6 text-neutral-600">
                  <span className="mr-2 font-bold text-neutral-500">+</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="border border-neutral-200 bg-white p-6">
            <h3 className="text-lg font-bold text-neutral-900">Not Included</h3>
            <ul className="mt-4 space-y-3">
              {trek.exclusions.map((item) => (
                <li key={item} className="text-sm leading-6 text-neutral-600">
                  <span className="mr-2 font-bold text-neutral-400">-</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </section>
    </div>
  )
}
