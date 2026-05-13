import React, { useEffect, useRef } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { treks } from '../data/treks'

export default function Trek() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const trek = treks.find(t => t.id === id)
  const heroRef = useRef<HTMLDivElement>(null)

  if (!trek) {
    return (
      <div style={{ minHeight: '100vh', background: '#081422', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '20px' }}>
        Trek not found
      </div>
    )
  }

  useEffect(() => {
    const onScroll = () => {
      if (heroRef.current) {
        heroRef.current.style.transform = `translateY(${window.scrollY * 0.35}px)`
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
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

        /* ─── TREK HERO ─────────────────────────────────────────── */
        .trek-hero {
          position: relative;
          min-height: 600px;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          margin-top: 80px;
        }

        .trek-hero::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url(${trek.image}) center / cover;
          z-index: -1;
          filter: brightness(0.5);
        }

        .trek-hero-content {
          text-align: center;
          z-index: 2;
          animation: fadeInUp 1s ease-out;
        }

        .trek-hero h1 {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 64px;
          font-weight: 700;
          margin-bottom: 16px;
          letter-spacing: 2px;
          color: var(--cyan);
          text-shadow: 0 2px 20px rgba(0, 200, 224, 0.5);
        }

        .trek-hero p {
          font-size: 24px;
          color: #fff;
          font-weight: 300;
          letter-spacing: 1px;
        }

        /* ─── TREK DETAILS ─────────────────────────────────────────── */
        .trek-details-section {
          max-width: 1200px;
          margin: 80px auto;
          padding: 0 20px;
        }

        .trek-quick-info {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 20px;
          margin-bottom: 80px;
        }

        .info-card {
          background: var(--light-cyan);
          border: 1px solid var(--cyan);
          border-radius: 8px;
          padding: 24px;
          text-align: center;
          transition: all 0.3s ease;
        }

        .info-card:hover {
          background: rgba(0, 200, 224, 0.2);
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(0, 200, 224, 0.2);
        }

        .info-label {
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          color: var(--cyan);
          margin-bottom: 8px;
          font-weight: 500;
        }

        .info-value {
          font-size: 28px;
          font-weight: 600;
          color: #fff;
        }

        /* ─── SECTION HEADING ─────────────────────────────────────────── */
        .trek-section {
          margin-bottom: 80px;
        }

        .trek-section h2 {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 42px;
          margin-bottom: 32px;
          color: var(--cyan);
          letter-spacing: 1px;
        }

        .trek-section p {
          font-size: 16px;
          line-height: 1.8;
          color: #e5e7eb;
          margin-bottom: 24px;
        }

        /* ─── HIGHLIGHTS ─────────────────────────────────────────── */
        .highlights-list {
          display: grid;
          gap: 16px;
        }

        .highlight-item {
          display: flex;
          align-items: flex-start;
          gap: 16px;
          padding: 16px;
          background: rgba(13, 58, 92, 0.5);
          border-left: 3px solid var(--cyan);
          border-radius: 4px;
          transition: all 0.3s ease;
        }

        .highlight-item:hover {
          background: rgba(13, 58, 92, 0.8);
          transform: translateX(8px);
        }

        .highlight-icon {
          color: var(--cyan);
          font-size: 20px;
          flex-shrink: 0;
          margin-top: 2px;
        }

        .highlight-text {
          font-size: 15px;
          line-height: 1.6;
          color: #e5e7eb;
        }

        /* ─── ITINERARY ─────────────────────────────────────────── */
        .itinerary-timeline {
          position: relative;
          padding: 40px 0;
        }

        .itinerary-timeline::before {
          content: '';
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          top: 0;
          bottom: 0;
          width: 2px;
          background: var(--cyan);
        }

        .itinerary-item {
          margin-bottom: 50px;
          position: relative;
        }

        .itinerary-item:nth-child(odd) {
          margin-left: 0;
          margin-right: 50%;
          text-align: right;
          padding-right: 40px;
        }

        .itinerary-item:nth-child(even) {
          margin-left: 50%;
          margin-right: 0;
          text-align: left;
          padding-left: 40px;
        }

        .itinerary-dot {
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          width: 16px;
          height: 16px;
          background: var(--cyan);
          border: 3px solid var(--deep);
          border-radius: 50%;
          top: 8px;
          z-index: 2;
          box-shadow: 0 0 20px rgba(0, 200, 224, 0.5);
        }

        .itinerary-card {
          background: rgba(13, 58, 92, 0.5);
          border: 1px solid var(--cyan);
          border-radius: 8px;
          padding: 24px;
          transition: all 0.3s ease;
        }

        .itinerary-card:hover {
          background: rgba(13, 58, 92, 0.8);
          box-shadow: 0 10px 30px rgba(0, 200, 224, 0.2);
        }

        .itinerary-day {
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          color: var(--cyan);
          font-weight: 600;
          margin-bottom: 8px;
        }

        .itinerary-location {
          font-size: 20px;
          font-weight: 600;
          margin-bottom: 12px;
          color: #fff;
        }

        .itinerary-description {
          font-size: 14px;
          line-height: 1.6;
          color: #d1d5db;
        }

        /* ─── MOBILE TIMELINE ─────────────────────────────────────────── */
        @media (max-width: 768px) {
          .itinerary-timeline::before {
            left: 0;
          }

          .itinerary-item:nth-child(odd),
          .itinerary-item:nth-child(even) {
            margin-left: 0;
            margin-right: 0;
            text-align: left;
            padding-left: 40px;
            padding-right: 0;
          }

          .itinerary-dot {
            left: 0;
          }
        }

        /* ─── INCLUSIONS & EXCLUSIONS ─────────────────────────────────────────── */
        .details-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
          margin-bottom: 80px;
        }

        .details-box {
          background: rgba(13, 58, 92, 0.5);
          border: 1px solid var(--cyan);
          border-radius: 8px;
          padding: 32px;
        }

        .details-box h3 {
          font-size: 20px;
          color: var(--cyan);
          margin-bottom: 24px;
          font-weight: 600;
        }

        .details-list {
          list-style: none;
        }

        .details-list li {
          padding: 12px 0;
          padding-left: 24px;
          position: relative;
          font-size: 15px;
          line-height: 1.6;
          color: #e5e7eb;
          border-bottom: 1px solid rgba(0, 200, 224, 0.1);
        }

        .details-list li::before {
          content: '✓';
          position: absolute;
          left: 0;
          color: var(--cyan);
          font-weight: bold;
        }

        @media (max-width: 768px) {
          .details-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .trek-hero h1 {
            font-size: 42px;
          }

          .trek-hero p {
            font-size: 18px;
          }

          .trek-section h2 {
            font-size: 32px;
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

      <div style={{ background: 'var(--deep)', minHeight: '100vh' }}>
        {/* Hero Section */}
        <div className="trek-hero" ref={heroRef}>
          <div className="trek-hero-content">
            <h1>{trek.title}</h1>
            <p>{trek.subtitle}</p>
          </div>
        </div>

        {/* Quick Info */}
        <div className="trek-details-section">
          <div className="trek-quick-info">
            <div className="info-card">
              <div className="info-label">Difficulty</div>
              <div className="info-value">{trek.difficulty}</div>
            </div>
            <div className="info-card">
              <div className="info-label">Duration</div>
              <div className="info-value">{trek.duration}</div>
            </div>
            <div className="info-card">
              <div className="info-label">Max Altitude</div>
              <div className="info-value">{trek.altitude}</div>
            </div>
            <div className="info-card">
              <div className="info-label">Distance</div>
              <div className="info-value">{trek.distance}</div>
            </div>
          </div>

          {/* Overview */}
          <div className="trek-section">
            <h2>Overview</h2>
            <p>{trek.overview}</p>
          </div>

          {/* Highlights */}
          <div className="trek-section">
            <h2>Trek Highlights</h2>
            <div className="highlights-list">
              {trek.highlights.map((highlight, idx) => (
                <div key={idx} className="highlight-item">
                  <div className="highlight-icon">⛰️</div>
                  <div className="highlight-text">{highlight}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Itinerary */}
          <div className="trek-section">
            <h2>Detailed Itinerary</h2>
            <div className="itinerary-timeline">
              {trek.itinerary.map((item, idx) => (
                <div key={idx} className="itinerary-item">
                  <div className="itinerary-dot"></div>
                  <div className="itinerary-card">
                    <div className="itinerary-day">{item.day}</div>
                    <div className="itinerary-location">{item.location}</div>
                    <div className="itinerary-description">{item.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Inclusions & Exclusions */}
          <div className="trek-section">
            <h2>What's Included & What's Not</h2>
            <div className="details-grid">
              <div className="details-box">
                <h3>✓ Inclusions</h3>
                <ul className="details-list">
                  {trek.inclusions.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="details-box">
                <h3>✗ Exclusions</h3>
                <ul className="details-list">
                  {trek.exclusions.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Back Button */}
          <div style={{ textAlign: 'center', marginTop: '80px', marginBottom: '40px' }}>
            <button
              onClick={() => navigate('/trek')}
              style={{
                background: 'var(--cyan)',
                color: 'var(--deep)',
                border: 'none',
                padding: '12px 32px',
                borderRadius: '6px',
                fontSize: '14px',
                fontWeight: '600',
                cursor: 'pointer',
                letterSpacing: '0.5px',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLButtonElement).style.background = '#00b3cc'
                ;(e.target as HTMLButtonElement).style.transform = 'scale(1.05)'
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLButtonElement).style.background = 'var(--cyan)'
                ;(e.target as HTMLButtonElement).style.transform = 'scale(1)'
              }}
            >
              ← Back to Treks
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
