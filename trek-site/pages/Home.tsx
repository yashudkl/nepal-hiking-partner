'use client'

import React, { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import { treks } from '../src/data/treks';
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
    desc: 'Expert guides lead you through Nepal\'s most iconic trails, from Everest Base Camp to hidden valleys.',
  },
  {
    number: '02',
    title: 'Authentic Local Experience',
    desc: 'Stay with local families, learn their stories, and experience genuine Himalayan hospitality.',
  },
  {
    number: '03',
    title: 'Well-Planned Itineraries',
    desc: 'Custom routes designed for your pace, fitness level, and interests — zero rushing.',
  },
  {
    number: '04',
    title: 'Safety & Support',
    desc: 'Professional guides, proper acclimatization, and emergency protocols for peace of mind.',
  },
]

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null)
  const router = useRouter()
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  // Subtle parallax on scroll
  useEffect(() => {
    const onScroll = () => {
      if (heroRef.current) {
        heroRef.current.style.transform = `translateY(${window.scrollY * 0.35}px)`
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Preload all trek images
  useEffect(() => {
    treks.forEach((trek) => {
      const img = new Image()
      img.src = trek.image
    })
  }, [])

  // Auto-rotate slideshow with smooth transition
  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true)
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % treks.length)
      }, 250)
      setTimeout(() => {
        setIsTransitioning(false)
      }, 750)
    }, 4000) // Change slide every 4 seconds
    return () => clearInterval(interval)
  }, [])

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:ital,wght@0,400;0,500;1,400&display=swap');

        :root {
          --cyan: #00c8e0;
          --deep: #081422;
          --mid: #0d3a5c;
          --light-cyan: rgba(0,200,224,0.12);
        }

        * { box-sizing: border-box; margin: 0; padding: 0; }

        body {
          background: var(--deep);
          color: #fff;
          font-family: 'DM Sans', sans-serif;
          overflow-x: hidden;
        }

        /* ─── HERO ─────────────────────────────────────────── */
        .hero {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          padding: 0 24px;
        }

        .hero-bg {
          position: absolute;
          inset: 0;
          background-color: #081422;
          background-size: cover;
          background-position: center center;
          background-repeat: no-repeat;
          filter: brightness(0.88) contrast(1.08) saturate(1.05);
          transform: scale(1.04);
          will-change: transform;
        }

        .hero-grid {
          position: absolute;
          inset: 0;
          background-image: linear-gradient(rgba(0,200,224,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,200,224,0.03) 1px, transparent 1px);
          background-size: 60px 60px;
          pointer-events: none;
        }

        .hero-fade-overlay {
          position: absolute;
          inset: 0;
          background: rgba(8, 20, 34, 0.95);
          pointer-events: none;
          opacity: 0;
          transition: opacity 0.3s ease-in-out;
          z-index: 1;
        }

        .hero-fade-overlay.active {
          opacity: 1;
        }

        .hero-content {
          position: relative;
          z-index: 2;
          text-align: left;
          max-width: 620px;
          animation: fadeUp 1s ease both;
          padding-left: 24px;
        }

        .trek-name-badge {
          display: inline-block;
          font-family: 'Bebas Neue', sans-serif;
          font-size: 18px;
          letter-spacing: 2px;
          color: var(--cyan);
          background: rgba(0, 200, 224, 0.1);
          border: 1px solid rgba(0, 200, 224, 0.3);
          padding: 8px 20px;
          border-radius: 999px;
          margin-bottom: 24px;
          animation: fadeUp 1s 0.05s ease both;
        }

        .hero-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 11px;
          letter-spacing: 3.5px;
          text-transform: uppercase;
          color: var(--cyan);
          margin-bottom: 20px;
          animation: fadeUp 1s 0.1s ease both;
        }

        .hero-eyebrow::before {
          content: '';
          display: block;
          width: 28px;
          height: 1px;
          background: var(--cyan);
          opacity: 0.6;
        }

        .hero-eyebrow::after {
          content: '';
          display: block;
          width: 28px;
          height: 1px;
          background: var(--cyan);
          opacity: 0.6;
        }

        .hero-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(48px, 8vw, 88px);
          line-height: 0.95;
          letter-spacing: 2px;
          color: #fff;
          animation: fadeUp 1s 0.2s ease both;
        }

        .hero-title .accent {
          color: var(--cyan);
          display: block;
        }

        .hero-sub {
          margin-top: 24px;
          font-size: clamp(15px, 2vw, 18px);
          color: rgba(255,255,255,0.62);
          line-height: 1.7;
          max-width: 620px;
          animation: fadeUp 1s 0.3s ease both;
        }

        .hero-actions {
          margin-top: 36px;
          display: flex;
          align-items: center;
          justify-content: flex-start;
          gap: 14px;
          flex-wrap: wrap;
          animation: fadeUp 1s 0.4s ease both;
        }

        .btn-primary {
          background: var(--cyan);
          color: var(--deep);
          border: none;
          font-family: 'DM Sans', sans-serif;
          font-size: 14px;
          font-weight: 500;
          padding: 13px 28px;
          border-radius: 999px;
          cursor: pointer;
          letter-spacing: 0.3px;
          transition: opacity 0.18s, transform 0.18s;
        }

        .btn-primary:hover { 
          opacity: 0.88; 
          transform: translateY(-1px); 
        }

        .btn-ghost {
          background: rgba(255,255,255,0.04);
          color: rgba(255,255,255,0.82);
          border: 0.5px solid rgba(255,255,255,0.18);
          backdrop-filter: blur(8px);
          font-family: 'DM Sans', sans-serif;
          font-size: 14px;
          font-weight: 500;
          padding: 13px 28px;
          border-radius: 999px;
          cursor: pointer;
          letter-spacing: 0.3px;
          transition: border-color 0.18s, color 0.18s, transform 0.18s;
        }

        .btn-ghost:hover {
          border-color: rgba(255,255,255,0.5);
          color: #fff;
          transform: translateY(-1px);
        }

        .scroll-hint {
          position: absolute;
          bottom: 36px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
          color: rgba(255,255,255,0.3);
          font-size: 10px;
          letter-spacing: 2px;
          text-transform: uppercase;
          animation: fadeUp 1s 0.8s ease both;
          z-index: 2;
        }

        .scroll-line {
          width: 1px;
          height: 40px;
          background: linear-gradient(to bottom, rgba(0,200,224,0.6), transparent);
          animation: scrollPulse 2s ease-in-out infinite;
        }

        .slide-controls {
          position: absolute;
          bottom: 80px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 8px;
          z-index: 3;
        }

        .slide-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.4);
          cursor: pointer;
          transition: background 0.3s, transform 0.3s;
        }

        .slide-dot.active {
          background: var(--cyan);
          transform: scale(1.3);
        }

        @keyframes fadeUp {
          from { 
            opacity: 0; 
            transform: translateY(32px); 
          }
          to {   
            opacity: 1; 
            transform: translateY(0); 
          }
        }

        @keyframes scrollPulse {
          0%, 100% { 
            opacity: 0.3; 
            transform: scaleY(1); 
          }
          50% { 
            opacity: 1; 
            transform: scaleY(1.15); 
          }
        }

        @media (max-width: 1024px) {
          .hero {
            flex-direction: column;
            gap: 40px;
            padding: 0 24px;
            padding-left: 0;
          }
          .hero-eyebrow {
            justify-content: center;
          }
          .hero-eyebrow::before,
          .hero-eyebrow::after {
            display: none;
          }
          .hero-actions {
            justify-content: centernt: center;
          }
          .hero-slideshow {
            max-width: 100%;
            height: 350px;
          }
        }

        /* ─── STATS ─────────────────────────────────────────── */
        .stats-bar {
          position: relative;
          z-index: 3;
          background: rgba(13, 58, 92, 0.4);
          border-top: 0.5px solid rgba(0,200,224,0.15);
          border-bottom: 0.5px solid rgba(0,200,224,0.15);
          backdrop-filter: blur(10px);
        }

        .stats-inner {
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 24px;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 0;
        }

        @media (max-width: 600px) {
          .stats-inner { grid-template-columns: repeat(2, 1fr); }
        }

        .stat-item {
          padding: 28px 24px;
          text-align: center;
          border-right: 0.5px solid rgba(255,255,255,0.07);
        }

        .stat-item:last-child { border-right: none; }

        .stat-value {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 38px;
          letter-spacing: 1px;
          color: var(--cyan);
          line-height: 1;
        }

        .stat-label {
          font-size: 11px;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: rgba(255,255,255,0.4);
          margin-top: 4px;
        }

        /* ─── FEATURES ───────────────────────────────────────── */
        .section {
          max-width: 1100px;
          margin: 0 auto;
          padding: 96px 24px;
        }

        .section-label {
          font-size: 11px;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: var(--cyan);
          margin-bottom: 12px;
        }

        .section-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(36px, 5vw, 56px);
          letter-spacing: 1px;
          color: #fff;
          line-height: 1.05;
          max-width: 480px;
        }

        .features-grid {
          margin-top: 56px;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 48px;
          max-width: 1100px;
          margin-left: auto;
          margin-right: auto;
        }

        .feature-card {
          background: transparent;
          border: none;
          border-radius: 0;
          padding: 0;
          transition: transform 0.2s;
          cursor: default;
          display: flex;
          flex-direction: column;
        }

        .feature-card:hover {
          background: transparent;
          border-color: transparent;
          transform: none;
        }

        .feature-icon {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 48px;
          letter-spacing: 2px;
          margin-bottom: 20px;
          color: var(--cyan);
          font-weight: 700;
        }

        .feature-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 20px;
          letter-spacing: 1px;
          color: #fff;
          margin-bottom: 12px;
        }

        .feature-desc {
          font-size: 15px;
          color: rgba(255,255,255,0.65);
          line-height: 1.7;
        }

        /* ─── CTA BANNER ─────────────────────────────────────── */
        .cta-banner {
          margin: 0 24px 96px;
          max-width: 1052px;
          margin-left: auto;
          margin-right: auto;
          background: linear-gradient(120deg, rgba(0,200,224,0.12) 0%, rgba(13,58,92,0.35) 100%);
          border: 0.5px solid rgba(0,200,224,0.2);
          border-radius: 20px;
          padding: 56px 48px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 32px;
          flex-wrap: wrap;
        }

        .cta-banner-text h2 {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(28px, 4vw, 44px);
          letter-spacing: 1px;
          color: #fff;
          line-height: 1.05;
        }

        .cta-banner-text p {
          margin-top: 8px;
          font-size: 14px;
          color: rgba(255,255,255,0.45);
        }

        @media (max-width: 600px) {
          .cta-banner { padding: 36px 24px; }
          .cta-banner-text h2 { font-size: 28px; }
        }
      `}</style>

      {/* ── HERO ── */}
      <section className="hero">
       <div
  className="hero-bg"
  ref={heroRef}
  style={{
    backgroundImage: `
      linear-gradient(
        to bottom,
        rgba(2, 10, 18, 0.35),
        rgba(2, 10, 18, 0.72)
      ),
      radial-gradient(
        circle at top,
        rgba(0,200,224,0.08),
        transparent 45%
      ),
              url(${treks[currentSlide].image})
            `
          }}
        />
        <div className="hero-grid" />
        <div className={`hero-fade-overlay ${isTransitioning ? 'active' : ''}`} />

        <div className="hero-content">
          <div className="trek-name-badge">{treks[currentSlide].title}</div>
          <div className="hero-eyebrow">Nepal Hiking Partner</div>
          <h1 className="hero-title">
            Where Every
            <span className="accent">Peak Calls</span>
            Your Name
          </h1>
          <p className="hero-sub">
            Curated treks, mindful retreats, and unforgettable adventures — guided by locals who live and breathe the Himalayas.
          </p>
          <div className="hero-actions">
            <button className="btn-primary" onClick={() => router.push('/trek')}>Explore Treks</button>
            <button className="btn-ghost">Watch Film ▶</button>
          </div>
        </div>

        <div className="slide-controls">
          {treks.map((_, index) => (
            <div
              key={index}
              className={`slide-dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => {
                setIsTransitioning(true)
                setTimeout(() => {
                  setCurrentSlide(index)
                  setIsTransitioning(false)
                }, 300)
              }}
            />
          ))}
        </div>

        <div className="scroll-hint">
          <span>Scroll</span>
          <div className="scroll-line" />
        </div>
      </section>

      {/* ── STATS ── */}
      <div className="stats-bar">
        <div className="stats-inner">
          {stats.map((s) => (
            <div className="stat-item" key={s.label}>
              <div className="stat-value">{s.value}</div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── FEATURES ── */}
      <div className="section">
        <p className="section-label">What We Offer</p>
        <h2 className="section-title">Adventures Built Around You</h2>
        <div className="features-grid">
          {features.map((f) => (
            <div className="feature-card" key={f.title}>
              <div className="feature-icon">{f.number}</div>
              <div className="feature-title">{f.title}</div>
              <p className="feature-desc">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── CTA BANNER ── */}
      <div className="cta-banner">
        <div className="cta-banner-text">
          <h2>Ready to Hit the Trail?</h2>
          <p>Custom itineraries, expert guides, zero hassle.</p>
        </div>
        <button className="btn-primary" style={{ flexShrink: 0, padding: '14px 36px', fontSize: '15px' }}>
          Book a Trek
        </button>
      </div>
    </>
  )
}
