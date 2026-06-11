'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { treks } from '@/data/treks'

const stats = [
  { value: '200+', label: 'Treks & Tours' },
  { value: '15K+', label: 'Happy Trekkers' },
  { value: '8848m', label: 'Highest Point' },
  { value: '18+', label: 'Years Experience' },
]

const features = [
  {
    number: '01',
    title: 'Guided Himalayan Treks',
    desc: "Expert guides lead you through Nepal's most iconic trails, from Everest Base Camp to hidden valleys.",
  },
  {
    number: '02',
    title: 'Authentic Local Experience',
    desc: 'Stay with local families, learn their stories, and experience genuine Himalayan hospitality.',
  },
  {
    number: '03',
    title: 'Well-Planned Itineraries',
    desc: 'Custom routes designed for your pace, fitness level, and interests with no rushing.',
  },
  {
    number: '04',
    title: 'Safety & Support',
    desc: 'Professional guides, proper acclimatization, and emergency protocols for peace of mind.',
  },
]

export default function HomePage() {
  const router = useRouter()
  const [currentSlide, setCurrentSlide] = useState(0)
  const activeTrek = treks[currentSlide]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % treks.length)
    }, 6000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="bg-white">
      <section className="relative min-h-[calc(100vh-72px)] overflow-hidden border-b border-neutral-200 bg-white">
        <div className="mx-auto grid min-h-[calc(100vh-72px)] max-w-7xl items-center gap-10 px-5 py-8 lg:grid-cols-2 lg:px-8 lg:py-16">
          <div className="order-1 max-w-3xl lg:order-1">
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-neutral-500">Nepal Hiking Partner</p>
            <div className="mt-6 border border-neutral-200 bg-neutral-50 p-5 lg:hidden">
              <div className="border border-neutral-200 bg-white p-3">
                <img src={activeTrek.image} alt={activeTrek.title} className="aspect-[4/3] w-full object-cover" />
              </div>
            </div>
            <div className="mt-5 inline-block border-l-4 border-neutral-300 bg-neutral-50 px-4 py-3">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-neutral-500">Featured Treks</p>
              <p className="mt-1 text-xl font-bold text-neutral-900">{activeTrek.title}</p>
            </div>
            <h1 className="mt-5 text-5xl font-bold leading-[0.95] tracking-tight text-neutral-900 md:text-7xl">
              Precise Himalayan trips for serious travelers.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-600">
              Curated treks, mindful retreats, and mountain and himalayan journeys across Nepal with clear planning and dependable support.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={() => router.push('/trek')}
                className="border border-primary-600 bg-primary-600 px-7 py-4 text-sm font-bold text-white hover:bg-primary-700"
              >
                Explore Treks
              </button>
              <button
                type="button"
                onClick={() => router.push('/book-trek')}
                className="border border-neutral-300 bg-white px-7 py-4 text-sm font-bold text-neutral-900 hover:border-neutral-500"
              >
                Plan My Trip
              </button>
            </div>
          </div>

          <div className="order-2 hidden border border-neutral-200 bg-neutral-50 p-5 lg:block lg:mt-0">
            <div className="border border-neutral-200 bg-white p-3">
              <img src={activeTrek.image} alt={activeTrek.title} className="aspect-[4/3] w-full object-cover lg:aspect-[3/4]" />
            </div>
          </div>
        </div>

        <div className="absolute bottom-6 left-5 right-5 mx-auto flex max-w-7xl gap-2 lg:px-3">
          {treks.map((trek, index) => (
            <button
              key={trek.id}
              type="button"
              onClick={() => setCurrentSlide(index)}
              className={`h-1.5 flex-1 ${index === currentSlide ? 'bg-primary-600' : 'bg-neutral-300'}`}
              aria-label={`Show ${trek.title}`}
            />
          ))}
        </div>
      </section>

      <section className="border-b border-neutral-200 bg-neutral-50">
        <div className="mx-auto grid max-w-7xl grid-cols-2 px-5 py-8 md:grid-cols-4 lg:px-8">
          {stats.map((stat) => (
            <div key={stat.label} className="border-l border-neutral-200 px-5 py-3 first:border-l-0">
              <div className="text-3xl font-bold text-neutral-900">{stat.value}</div>
              <div className="mt-1 text-sm font-medium text-neutral-500">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-neutral-500">What We Offer</p>
          <h2 className="mt-3 text-4xl font-bold tracking-tight text-neutral-900">Adventures built around clarity and control.</h2>
        </div>
        <div className="mt-10 grid gap-px bg-neutral-200 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <article key={feature.title} className="bg-white p-7">
              <div className="text-sm font-bold text-neutral-400">{feature.number}</div>
              <h3 className="mt-8 text-xl font-bold text-neutral-900">{feature.title}</h3>
              <p className="mt-4 text-sm leading-6 text-neutral-600">{feature.desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-16 lg:px-8">
        <div className="grid border border-neutral-200 bg-neutral-50 p-8 md:grid-cols-[1fr_auto] md:items-center md:gap-8">
          <div>
            <h2 className="text-3xl font-bold text-neutral-900">Ready to choose a trail?</h2>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-neutral-600">
              Compare duration, difficulty, altitude, and season before sending a booking request.
            </p>
          </div>
          <button
            type="button"
            onClick={() => router.push('/trek')}
            className="mt-6 border border-primary-600 bg-primary-600 px-7 py-4 text-sm font-bold text-white hover:bg-primary-700 md:mt-0"
          >
            View Trek Catalogue
          </button>
        </div>
      </section>
    </div>
  )
}
