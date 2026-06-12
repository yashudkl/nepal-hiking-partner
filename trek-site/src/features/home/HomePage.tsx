'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { treks } from '@/data/treks'

// stats removed as requested

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

const defaultTestimonials = [
  {
    name: 'Alex P.',
    rating: 5,
    comment:
      'An unforgettable experience — the guide was knowledgeable, patient, and kept our group safe. Logistics were seamless.',
  },
  {
    name: 'Maria S.',
    rating: 5,
    comment: 'Fantastic local knowledge and warm hospitality. The itinerary was thoughtfully paced.',
  },
  {
    name: 'Tom R.',
    rating: 5,
    comment: 'Highly recommended — great communication, and the team handled everything professionally.',
  },
]

export default function HomePage() {
  const router = useRouter()
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isReviewOpen, setIsReviewOpen] = useState(false)
  const [reviewerName, setReviewerName] = useState('')
  const [reviewerRating, setReviewerRating] = useState('5')
  const [reviewerComment, setReviewerComment] = useState('')
  const [reviewStatus, setReviewStatus] = useState<'idle' | 'saved' | 'saved-local' | 'error'>('idle')
  const [reviews, setReviews] = useState<any[]>([])
  const activeTrek = treks[currentSlide]
  const timerRef = typeof window !== 'undefined' ? { current: 0 } : { current: 0 }

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % treks.length)
    }, 6000)

    // fetch reviews on mount
    fetchReviews()

    return () => clearInterval(interval)
  }, [])

  async function fetchReviews() {
    try {
      const res = await fetch('/api/reviews')
      let server = []
      if (res.ok) server = await res.json()

      // local fallback reviews saved when API fails
      const localKey = 'local_reviews'
      const local = JSON.parse(localStorage.getItem(localKey) || '[]')

      // normalize and merge (local first)
      const merged = [
        ...local.map((r: any) => ({ name: r.name || 'Anonymous', rating: Number(r.rating || 5), comment: r.comment, createdAt: r.createdAt })),
        ...server.map((r: any) => ({ name: r.name || 'Anonymous', rating: Number(r.rating || 5), comment: r.comment, createdAt: r.createdAt })),
      ]

      setReviews(merged)
    } catch (err) {
      // if fetch fails, at least load local
      const localKey = 'local_reviews'
      const local = JSON.parse(localStorage.getItem(localKey) || '[]')
      setReviews(local)
    }
  }

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

      {/* stats section removed */}

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

      <section className="border-t border-neutral-200 bg-white">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-neutral-500">Testimonials</p>
            <h2 className="mt-3 text-4xl font-bold tracking-tight text-neutral-900">See what our happy trekkers say</h2>
            <p className="mt-4 text-sm text-neutral-600">Real feedback from guests who travelled with Nepal Hiking Partner.</p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {(reviews.length ? reviews : defaultTestimonials).slice(0, 6).map((r, i) => (
              <blockquote key={i} className="border border-neutral-200 bg-neutral-50 p-6">
                <p className="text-sm leading-7 text-neutral-700">{r.comment}</p>
                <div className="mt-4 flex items-center gap-3">
                  <div className="flex items-center gap-1" aria-hidden>
                    {Array.from({ length: 5 }).map((_, k) => {
                      const filled = k < Math.round(r.rating || 5)
                      return (
                        <svg
                          key={k}
                          className={`${filled ? 'text-primary-600' : 'text-neutral-300'} h-4 w-4`}
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden
                        >
                          <path
                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.176 0l-3.37 2.448c-.784.57-1.84-.197-1.54-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.063 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.957z"
                            fill={filled ? 'currentColor' : 'none'}
                            stroke={filled ? 'none' : 'currentColor'}
                            strokeWidth={filled ? 0 : 1}
                          />
                        </svg>
                      )
                    })}
                  </div>
                  <div className="text-sm font-medium text-neutral-700">{Number(r.rating || 5).toFixed(1)}</div>
                </div>
                <div className="mt-4 text-sm font-bold text-neutral-900">— {r.name}</div>
              </blockquote>
            ))}
          </div>

          <div className="mt-8 flex items-center justify-center">
            <div className="inline-flex items-center gap-4">
              <a
                href="https://www.tripadvisor.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-md border border-neutral-300 bg-white px-5 py-3 text-sm font-bold text-neutral-900 shadow-sm hover:bg-neutral-50"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                  <circle cx="12" cy="12" r="10" stroke="#111827" strokeWidth="0.5" />
                  <path d="M7 12h10" stroke="#111827" strokeWidth="1.2" strokeLinecap="round" />
                  <path d="M7 16h6" stroke="#111827" strokeWidth="1.2" strokeLinecap="round" />
                </svg>
                <span>Read reviews on Tripadvisor</span>
              </a>

              <button
                type="button"
                onClick={() => {
                  setIsReviewOpen(true)
                }}
                className="inline-flex items-center gap-2 rounded-md border border-primary-600 bg-primary-600 px-4 py-3 text-sm font-bold text-white hover:bg-primary-700"
              >
                Write a review
              </button>
            </div>
          </div>

          {/* show brief status messages when review saved */}
          <div className="mt-4 flex items-center justify-center">
            {reviewStatus === 'saved' && (
              <div className="rounded bg-green-100 px-4 py-2 text-sm font-medium text-green-800">Thanks — your review was saved to the server.</div>
            )}
            {reviewStatus === 'saved-local' && (
              <div className="rounded bg-yellow-100 px-4 py-2 text-sm font-medium text-yellow-800">Saved locally — will sync when server is available.</div>
            )}
            {reviewStatus === 'error' && (
              <div className="rounded bg-red-100 px-4 py-2 text-sm font-medium text-red-800">Failed to save review.</div>
            )}
          </div>

          {isReviewOpen && (
            <div className="fixed inset-0 z-[70] grid place-items-center bg-black/50 p-5">
              <form
                onSubmit={async (e) => {
                  e.preventDefault()
                  const payload = {
                    name: reviewerName,
                    rating: reviewerRating,
                    comment: reviewerComment,
                    trekId: 'home',
                  }

                  // try posting to server API first
                  try {
                    const res = await fetch('/api/reviews', {
                      method: 'POST',
                      headers: { 'Content-Type': 'application/json' },
                      body: JSON.stringify(payload),
                    })

                    if (!res.ok) throw new Error('API error')

                    setIsReviewOpen(false)
                    setReviewStatus('saved')
                    setReviewerName('')
                    setReviewerRating('5')
                    setReviewerComment('')
                    await fetchReviews()
                    // auto-hide status
                    clearTimeout(timerRef.current)
                    timerRef.current = window.setTimeout(() => setReviewStatus('idle'), 4000)
                    return
                  } catch (err) {
                    // fallback: save to localStorage
                    try {
                      const key = 'local_reviews'
                      const existing = JSON.parse(localStorage.getItem(key) || '[]')
                      existing.unshift({ ...payload, createdAt: new Date().toISOString() })
                      localStorage.setItem(key, JSON.stringify(existing))
                      setIsReviewOpen(false)
                      setReviewStatus('saved-local')
                      setReviewerName('')
                      setReviewerRating('5')
                      setReviewerComment('')
                      await fetchReviews()
                      clearTimeout(timerRef.current)
                      timerRef.current = window.setTimeout(() => setReviewStatus('idle'), 4000)
                      return
                    } catch (e) {
                      console.error('Failed saving review', e)
                      setReviewStatus('error')
                      clearTimeout(timerRef.current)
                      timerRef.current = window.setTimeout(() => setReviewStatus('idle'), 4000)
                      alert('Failed saving review')
                    }
                  }
                }}
                className="w-full max-w-xl rounded bg-white p-6 shadow-lg"
              >
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="text-lg font-bold text-neutral-900">Write a review</h3>
                  <button type="button" onClick={() => setIsReviewOpen(false)} className="text-sm font-medium text-neutral-700">Close</button>
                </div>

                <label className="mb-2 block text-sm font-medium text-neutral-700">Name</label>
                <input value={reviewerName} onChange={(e) => setReviewerName(e.target.value)} className="mb-4 w-full rounded border px-3 py-2" placeholder="Your name" />

                <label className="mb-2 block text-sm font-medium text-neutral-700">Rating</label>
                <select value={reviewerRating} onChange={(e) => setReviewerRating(e.target.value)} className="mb-4 w-32 rounded border px-3 py-2">
                  <option value="5">5 - Excellent</option>
                  <option value="4">4 - Very good</option>
                  <option value="3">3 - Good</option>
                  <option value="2">2 - Fair</option>
                  <option value="1">1 - Poor</option>
                </select>

                <label className="mb-2 block text-sm font-medium text-neutral-700">Review</label>
                <textarea value={reviewerComment} onChange={(e) => setReviewerComment(e.target.value)} className="mb-4 w-full rounded border px-3 py-2" rows={4} placeholder="Share your experience" />

                <div className="mt-4 flex items-center gap-3">
                  <button type="submit" className="rounded bg-primary-600 px-4 py-2 text-sm font-bold text-white hover:bg-primary-700">Submit</button>
                  <button type="button" onClick={() => setIsReviewOpen(false)} className="rounded border px-4 py-2 text-sm font-bold text-neutral-900">Cancel</button>
                </div>
              </form>
            </div>
          )}

          {/* reviewSuccess message removed as requested */}
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
