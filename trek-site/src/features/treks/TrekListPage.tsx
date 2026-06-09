'use client'

import { useRouter } from 'next/navigation'
import { treks } from '@/data/treks'

export default function TrekListPage() {
  const router = useRouter()

  return (
    <div className="bg-white">
      <section className="border-b border-neutral-200 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-5 py-14 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-neutral-500">Trek Catalogue</p>
          <div className="mt-4 grid gap-6 lg:grid-cols-[0.65fr_0.35fr] lg:items-end">
            <h1 className="text-5xl font-bold tracking-tight text-neutral-900 md:text-6xl">Choose the right Himalayan route.</h1>
            <p className="text-base leading-7 text-neutral-600">
              Scan difficulty, duration, altitude, and season without visual noise. Every route is guided by local mountain professionals.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-12 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {treks.map((trek) => (
            <article key={trek.id} className="group border border-neutral-200 bg-white">
              <button type="button" onClick={() => router.push(`/trek/${trek.id}`)} className="block w-full text-left">
                <div className="relative">
                  <img src={trek.image} alt={trek.title} className="aspect-[4/3] w-full object-cover" />
                  <div className="absolute left-4 top-4 bg-white px-3 py-2 text-xs font-bold uppercase tracking-[0.16em] text-neutral-700">
                    {trek.difficulty}
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
                    <span className="text-sm font-semibold text-neutral-500">{trek.rating} rating ({trek.reviews})</span>
                    <span className="text-sm font-bold text-neutral-900">View Details</span>
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
