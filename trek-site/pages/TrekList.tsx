'use client'


import { useRouter } from 'next/navigation'
import { treks } from '../src/data/treks'
export default function TrekList() {
  const router = useRouter()

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

        .trek-list-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 100px 20px 80px;
          background: var(--deep);
          min-height: 100vh;
        }

        .trek-list-header {
          text-align: center;
          margin-bottom: 80px;
          animation: fadeInUp 0.8s ease-out;
        }

        .trek-list-header h1 {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 56px;
          letter-spacing: 2px;
          color: var(--cyan);
          margin-bottom: 16px;
        }

        .trek-list-header p {
          font-size: 18px;
          color: #d1d5db;
          letter-spacing: 0.5px;
        }

        .trek-cards-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 32px;
          margin-bottom: 60px;
        }

        .trek-card {
          background: linear-gradient(135deg, rgba(13, 58, 92, 0.6) 0%, rgba(8, 20, 36, 0.8) 100%);
          border: 1px solid rgba(0, 200, 224, 0.3);
          border-radius: 12px;
          overflow: hidden;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          flex-direction: column;
        }

        .trek-card:hover {
          transform: translateY(-8px);
          border-color: var(--cyan);
        }

        .trek-card-image {
          width: 100%;
          height: 200px;
          background: linear-gradient(135deg, #0d3a5c 0%, #081422 100%);
          position: relative;
          overflow: hidden;
        }

        .trek-card-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0.9;
        }

        .trek-card-badge {
          position: absolute;
          top: 12px;
          right: 12px;
          background: var(--cyan);
          color: var(--deep);
          padding: 6px 12px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .trek-card-content {
          padding: 24px;
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .trek-card-title {
          font-size: 20px;
          font-weight: 600;
          color: #fff;
          margin-bottom: 6px;
          line-height: 1.3;
        }

        .trek-card-subtitle {
          font-size: 13px;
          color: var(--cyan);
          margin-bottom: 16px;
          letter-spacing: 0.5px;
        }

        .trek-card-description {
          font-size: 14px;
          color: #d1d5db;
          line-height: 1.6;
          margin-bottom: 20px;
          flex: 1;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .trek-card-meta {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
          margin-bottom: 20px;
          padding-bottom: 20px;
          border-bottom: 1px solid rgba(0, 200, 224, 0.1);
        }

        .trek-card-meta-item {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .trek-card-meta-label {
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: var(--cyan);
          font-weight: 600;
        }

        .trek-card-meta-value {
          font-size: 14px;
          color: #fff;
          font-weight: 500;
        }

        .trek-card-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 12px;
        }

        .trek-card-rating {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 13px;
        }

        .trek-card-star {
          color: var(--cyan);
        }

        .trek-card-rating-value {
          color: var(--cyan);
        }

        .trek-card-reviews {
          color: #9ca3af;
          font-size: 12px;
        }

        .trek-card-button {
          background: var(--cyan);
          color: var(--deep);
          border: none;
          padding: 10px 20px;
          border-radius: 6px;
          font-size: 13px;
          font-weight: 600;
          cursor: pointer;
          letter-spacing: 0.5px;
          transition: all 0.3s ease;
          white-space: nowrap;
        }

        .trek-card-button:hover {
          background: #00b3cc;
          transform: scale(1.05);
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

        .trek-cards-grid > * {
          animation: fadeInUp 0.8s ease-out;
          animation-fill-mode: both;
        }

        .trek-cards-grid > :nth-child(1) { animation-delay: 0.1s; }
        .trek-cards-grid > :nth-child(2) { animation-delay: 0.2s; }
        .trek-cards-grid > :nth-child(3) { animation-delay: 0.3s; }
        .trek-cards-grid > :nth-child(4) { animation-delay: 0.4s; }
        .trek-cards-grid > :nth-child(5) { animation-delay: 0.5s; }

        @media (max-width: 768px) {
          .trek-list-container {
            padding: 80px 16px 60px;
          }

          .trek-list-header h1 {
            font-size: 36px;
          }

          .trek-cards-grid {
            grid-template-columns: 1fr;
            gap: 24px;
          }
        }
      `}</style>

      <div className="trek-list-container">
        <div className="trek-list-header">
          <h1>Explore Our Treks</h1>
          <p>Choose from our curated collection of Himalayan adventures</p>
        </div>

        <div className="trek-cards-grid">
          {treks.map((trek) => (
            <div
              key={trek.id}
              className="trek-card"
              onClick={() => router.push(`/trek/${trek.id}`)}
            >
              <div className="trek-card-image">
                <img src={trek.image} alt={trek.title} />
                <div className="trek-card-badge">{trek.difficulty}</div>
              </div>

              <div className="trek-card-content">
                <h3 className="trek-card-title">{trek.title}</h3>
                <p className="trek-card-subtitle">{trek.subtitle}</p>
                <p className="trek-card-description">
                  {trek.overview}
                </p>

                <div className="trek-card-meta">
                  <div className="trek-card-meta-item">
                    <span className="trek-card-meta-label">Duration</span>
                    <span className="trek-card-meta-value">{trek.duration}</span>
                  </div>
                  <div className="trek-card-meta-item">
                    <span className="trek-card-meta-label">Max Altitude</span>
                    <span className="trek-card-meta-value">{trek.altitude}</span>
                  </div>
                </div>

                <div className="trek-card-footer">
                  <div className="trek-card-rating">
                    <span className="trek-card-star">★</span>
                    <span className="trek-card-rating-value">{trek.rating}</span>
                    <span className="trek-card-reviews">({trek.reviews})</span>
                  </div>
                  <button className="trek-card-button">View Details</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
