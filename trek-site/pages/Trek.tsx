'use client'

import  {  useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import { treks } from '../src/data/treks'

interface TrekProps {
  params: { id: string }
}

export default function Trek({ params }: TrekProps) {
  const router = useRouter()
  const { id } = params
  const trek = treks.find(t => t.id === id)
  const heroRef = useRef<HTMLDivElement>(null)
  const [expandedDay, setExpandedDay] = useState<number | null>(0)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  // Gallery images - using placeholder service
  const galleryImages = [
    `https://picsum.photos/1200/600?random=${id}1`,
    `https://picsum.photos/1200/600?random=${id}2`,
    `https://picsum.photos/1200/600?random=${id}3`,
    `https://picsum.photos/1200/600?random=${id}4`,
    `https://picsum.photos/1200/600?random=${id}5`,
  ]

  if (!trek) {
    return (
      <div style={{ minHeight: '100vh', background: '#081422', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '20px' }}>
        Trek not found
      </div>
    )
  }



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

        /* ─── TREK GALLERY ─────────────────────────────────────────── */
        .trek-hero {
          position: relative;
          max-width: 1200px;
          margin: 80px auto 0;
          padding: 0 20px;
          background: var(--deep);
        }

        .trek-header {
          margin-bottom: 40px;
        }

        .trek-header h1 {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 56px;
          font-weight: 700;
          margin-bottom: 12px;
          letter-spacing: 2px;
          color: var(--cyan);
        }

        .trek-header p {
          font-size: 20px;
          color: rgba(255, 255, 255, 0.8);
          letter-spacing: 0.5px;
        }

        .gallery-container {
          position: relative;
          border-radius: 12px;
          overflow: hidden;
          margin-bottom: 60px;
          background: var(--mid);
          contain: layout style paint;
        }

        .gallery-main {
          position: relative;
          width: 100%;
          padding-bottom: 56.25%;
          overflow: hidden;
        }

        .gallery-main img {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: opacity 0.3s ease;
          opacity: 1;
        }

        .gallery-main img.fade-out {
          opacity: 0;
        }

        .gallery-nav {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(0, 200, 224, 0.3);
          border: none;
          color: white;
          font-size: 24px;
          padding: 12px 16px;
          cursor: pointer;
          z-index: 10;
          transition: background 0.1s;;
          will-change: background-color;
        }

        .gallery-nav:hover {
          background: rgba(0, 200, 224, 0.6);
        }

        .gallery-nav.prev {
          left: 20px;
        }

        .gallery-nav.next {
          right: 20px;
        }

        .gallery-counter {
          position: absolute;
          bottom: 16px;
          right: 16px;
          background: rgba(8, 20, 34, 0.8);
          padding: 6px 12px;
          border-radius: 4px;
          font-size: 12px;
          color: var(--cyan);
          z-index: 10;
        }

        .gallery-thumbs {
          display: flex;
          gap: 12px;
          overflow-x: auto;
          padding: 16px;
          background: rgba(13, 58, 92, 0.4);
        }

        .gallery-thumb {
          min-width: 100px;
          height: 70px;
          border: 2px solid transparent;
          border-radius: 6px;
          cursor: pointer;
          overflow: hidden;
          opacity: 0.7;
          transition: opacity 0.15s;;
          will-change: opacity;
        }

        .gallery-thumb:hover {
          opacity: 1;
        }

        .gallery-thumb.active {
          border-color: var(--cyan);
          opacity: 1;
        }

        .gallery-thumb img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        /* ─── TREK DETAILS ─────────────────────────────────────────── */
        .trek-details-section {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .trek-quick-info {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 20px;
          margin-bottom: 60px;
          padding: 32px 0;
          background: var(--deep);
          border-bottom: 1px solid rgba(0, 200, 224, 0.2);
        }

        .info-card {
          background: var(--light-cyan);
          border: 1px solid var(--cyan);
          border-radius: 8px;
          padding: 24px;
          text-align: center;
          transition: background 0.1s;
          will-change: background-color;
        }

        .info-card:hover {
          background: rgba(0, 200, 224, 0.2);
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
          margin-top: 40px;
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
          display: flex;
          flex-direction: column;
          gap: 0;
        }

        .highlight-item {
          padding: 20px 0;
          border-bottom: 1px solid rgba(0, 200, 224, 0.15);
          font-size: 16px;
          line-height: 1.7;
          color: #e5e7eb;
          transition: color 0.1s;
          will-change: color;
        }

        .highlight-item:last-child {
          border-bottom: none;
        }

        .highlight-item:hover {
          color: var(--cyan);
        }

        /* ─── ITINERARY ─────────────────────────────────────────── */
        .itinerary-timeline {
          position: relative;
          padding: 40px 0;
        }

        .itinerary-item {
          margin-bottom: 24px;
          position: relative;
        }

        .itinerary-header {
          background: rgba(13, 58, 92, 0.6);
          border: 1px solid rgba(0, 200, 224, 0.5);
          border-radius: 8px;
          padding: 20px 24px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: space-between;
          transition: background 0.1s, border-color 0.1s;
          will-change: background-color, border-color;
        }

        .itinerary-header:hover {
          background: rgba(13, 58, 92, 0.8);
          border-color: rgba(0, 200, 224, 0.8);
        }

        .itinerary-header-content {
          flex: 1;
        }

        .itinerary-day {
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          color: var(--cyan);
          font-weight: 600;
          margin-bottom: 6px;
        }

        .itinerary-location {
          font-size: 18px;
          font-weight: 600;
          color: #fff;
          margin-bottom: 4px;
        }

        .itinerary-duration {
          font-size: 13px;
          color: rgba(255, 255, 255, 0.6);
        }

        .itinerary-toggle {
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--cyan);
          font-size: 20px;
          transition: transform 0.3s ease;
          flex-shrink: 0;
          margin-left: 20px;
        }

        .itinerary-toggle.expanded {
          transform: rotate(180deg);
        }

        .itinerary-body {
          overflow: hidden;
          transition: max-height 0.3s ease, opacity 0.3s ease;
          max-height: 0;
          opacity: 0;
        }

        .itinerary-body.expanded {
          max-height: 500px;
          opacity: 1;
        }

        .itinerary-description {
          background: rgba(8, 20, 34, 0.8);
          border: 1px solid rgba(0, 200, 224, 0.3);
          border-top: none;
          border-radius: 0 0 8px 8px;
          padding: 24px;
          font-size: 15px;
          line-height: 1.8;
          color: #d1d5db;
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
        {/* Gallery Section */}
        <div className="trek-hero" ref={heroRef}>
          <div className="trek-header">
            <h1>{trek.title}</h1>
            <p>{trek.subtitle}</p>
          </div>

          <div className="gallery-container">
            <div className="gallery-main">
              <img 
                src={galleryImages[currentImageIndex]} 
                alt={`${trek.title} - Image ${currentImageIndex + 1}`}
                decoding="async"
              />
              
              <button 
                className="gallery-nav prev" 
                onClick={() => setCurrentImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)}
              >
                ❮
              </button>
              <button 
                className="gallery-nav next" 
                onClick={() => setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length)}
              >
                ❯
              </button>
              
              <div className="gallery-counter">
                {currentImageIndex + 1} / {galleryImages.length}
              </div>
            </div>

            <div className="gallery-thumbs">
              {galleryImages.map((img, idx) => (
                <div
                  key={idx}
                  className={`gallery-thumb ${currentImageIndex === idx ? 'active' : ''}`}
                  onClick={() => setCurrentImageIndex(idx)}
                >
                  <img 
                    src={img.replace('1200/600', '120/80')} 
                    alt={`Thumbnail ${idx + 1}`}
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
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
                  {highlight}
                </div>
              ))}
            </div>
          </div>

          {/* Itinerary */}
          <div className="trek-section">
            <h2>Day-by-Day Itinerary</h2>
            <div className="itinerary-timeline">
              {trek.itinerary.map((item, idx) => (
                <div key={idx} className="itinerary-item">
                  <div 
                    className="itinerary-header"
                    onClick={() => setExpandedDay(expandedDay === idx ? null : idx)}
                  >
                    <div className="itinerary-header-content">
                      <div className="itinerary-day">{item.day}</div>
                      <div className="itinerary-location">{item.location}</div>
                      {item.duration && <div className="itinerary-duration">{item.duration}</div>}
                    </div>
                    <div className={`itinerary-toggle ${expandedDay === idx ? 'expanded' : ''}`}>
                      ▼
                    </div>
                  </div>
                  <div className={`itinerary-body ${expandedDay === idx ? 'expanded' : ''}`}>
                    <div className="itinerary-description">
                      {item.description}
                    </div>
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
              onClick={() => router.push('/trek')}
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
