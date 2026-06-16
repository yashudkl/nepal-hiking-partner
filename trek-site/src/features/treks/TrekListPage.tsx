'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { treks } from '@/data/treks'

const featuredTrekOrder = ['manaslu-circuit', 'narphu-valley']

export default function TrekListPage() {
  const router = useRouter()
  const [query, setQuery] = useState('')

  const filtered = treks
    .map((trek, index) => ({ trek, index }))
    .filter(({ trek }) => {
      if (!query) return true
      const q = query.toLowerCase()
      return trek.title.toLowerCase().includes(q) || trek.subtitle.toLowerCase().includes(q)
    })
    .sort((a, b) => {
      const aFeatured = featuredTrekOrder.indexOf(a.trek.id)
      const bFeatured = featuredTrekOrder.indexOf(b.trek.id)

      if (aFeatured !== bFeatured) {
        const safeA = aFeatured === -1 ? Number.POSITIVE_INFINITY : aFeatured
        const safeB = bFeatured === -1 ? Number.POSITIVE_INFINITY : bFeatured
        if (safeA !== safeB) return safeA - safeB
      }

      return a.index - b.index
    })
    .map(({ trek }) => trek)

  return (
    <div className="bg-white">
      <section className="border-b border-neutral-200 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-5 py-14 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-neutral-500">Trek Catalogue</p>
          <div className="mt-4 grid gap-6 lg:grid-cols-[0.65fr_0.35fr] lg:items-end">
            <h1 className="text-5xl font-bold tracking-tight text-neutral-900 md:text-6xl">Explore our available treks.</h1>
            <div className="w-full">
              <label htmlFor="trek-search" className="sr-only">Search treks</label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
                    <path fillRule="evenodd" d="M12.9 14.32a8 8 0 111.414-1.414l4.387 4.387a1 1 0 01-1.414 1.414l-4.387-4.387zM14 8a6 6 0 11-12 0 6 6 0 0112 0z" clipRule="evenodd" />
                  </svg>
                </span>

                <input
                  id="trek-search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search treks by name or subtitle"
                  className="w-full rounded-lg border border-neutral-200 bg-white px-12 py-3 text-sm placeholder:text-neutral-400 shadow-sm transition focus:shadow-md focus:outline-none focus:border-primary-600 focus:ring-2 focus:ring-primary-100"
                />

                {query && (
                  <button
                    type="button"
                    onClick={() => setQuery('')}
                    aria-label="Clear search"
                    className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-neutral-100 p-1 text-neutral-600 hover:bg-neutral-200"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 011.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                )}
              </div>

              <div className="mt-2 flex justify-end">
                <p className="text-sm font-semibold text-neutral-700">Showing {filtered.length} results</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-12 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filtered.map((trek) => (
            <article key={trek.id} className="group border border-neutral-200 bg-white">
              <button type="button" onClick={() => router.push(`/trek/${trek.id}`)} className="block w-full text-left">
                <div className="relative">
                  <img src={trek.image} alt={trek.title} className="aspect-[4/3] w-full object-cover" />
                  <div className="absolute left-4 right-4 top-4 flex items-start justify-between gap-3">
                    <div className="bg-white px-3 py-2 text-xs font-bold uppercase tracking-[0.16em] text-neutral-700">
                      {trek.difficulty}
                    </div>
                    <div className="flex flex-wrap justify-end gap-2">
                      {trek.badges?.map((badge) => (
                        <div key={badge} className="bg-primary-600 px-3 py-2 text-[10px] font-bold uppercase tracking-[0.16em] text-white">
                          {badge}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-neutral-900 group-hover:text-neutral-700">{trek.title}</h2>
                  <p className="mt-2 text-sm font-semibold text-neutral-500">{trek.subtitle}</p>
                  <p className="mt-4 line-clamp-3 text-sm leading-6 text-neutral-600">{trek.overview}</p>

                  <div className="mt-6 grid grid-cols-2 border border-neutral-200">
                    <div className="border-b border-r border-neutral-200 p-4">
                      <div className="text-xs font-bold uppercase tracking-[0.14em] text-neutral-500">Duration</div>
                      <div className="mt-1 text-sm font-bold text-neutral-900">{trek.duration}</div>
                    </div>
                    <div className="border-b border-neutral-200 p-4">
                      <div className="text-xs font-bold uppercase tracking-[0.14em] text-neutral-500">Altitude</div>
                      <div className="mt-1 text-sm font-bold text-neutral-900">{trek.altitude}</div>
                    </div>
                    <div className="border-r border-neutral-200 p-4">
                      <div className="text-xs font-bold uppercase tracking-[0.14em] text-neutral-500">Distance</div>
                      <div className="mt-1 text-sm font-bold text-neutral-900">{trek.distance}</div>
                    </div>
                    <div className="p-4">
                      <div className="text-xs font-bold uppercase tracking-[0.14em] text-neutral-500">Season</div>
                      <div className="mt-1 text-sm font-bold text-neutral-900">{trek.bestSeason}</div>
                    </div>
                  </div>

                  <div className="mt-6 flex items-center justify-between">
                    <span className="text-sm font-semibold text-primary-600">{trek.rating} rating ({trek.reviews})</span>
                    <span className="text-sm font-bold text-primary-600">View Details</span>
                  </div>
                </div>
              </button>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
