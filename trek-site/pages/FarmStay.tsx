'use client'

import React, { useState } from 'react'

const amenities = [
  { icon: '🏠', title: 'Spacious Rooms', desc: 'Comfortable accommodation with mountain views' },
  { icon: '👨‍🍳', title: 'Farm-to-Table Meals', desc: 'Fresh, organic food prepared daily' },
  { icon: '🌾', title: 'Organic Farm', desc: 'Explore and participate in farm activities' },
  { icon: '🥾', title: 'Hiking Trails', desc: 'Guided nature walks through scenic paths' },
  { icon: '🧘', title: 'Yoga & Meditation', desc: 'Daily sessions for peace and wellness' },
  { icon: '🔥', title: 'Bonfire Nights', desc: 'Evening gatherings with local stories' },
  { icon: '📸', title: 'Photography Tours', desc: 'Capture stunning landscape moments' },
  { icon: '🌳', title: 'Garden Walks', desc: 'Learn about local plants and herbs' },
]

const galleryImages = [
  '/assets/resunga-farm-stay-and-retreat.jpeg',
  '/assets/annapurna_base_camp.png',
  '/assets/annapurna_circuit.png',
  '/assets/gosaikunda.jpg',
  '/assets/langtang.png',
]

export default function FarmStay() {
  const [selectedImage, setSelectedImage] = useState(0)
  const [isLightboxOpen, setIsLightboxOpen] = useState(false)

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

        .farmstay-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 60px 20px 80px;
          background: var(--deep);
          min-height: 100vh;
        }

        /* Header */
        .farmstay-header {
          margin-bottom: 60px;
          animation: fadeInUp 0.8s ease-out;
        }

        .farmstay-header h1 {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 48px;
          letter-spacing: 2px;
          color: var(--cyan);
          margin-bottom: 12px;
        }

        .farmstay-header .subtitle {
          font-size: 16px;
          color: #9ca3af;
          letter-spacing: 0.5px;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .rating {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          margin-top: 12px;
          color: var(--cyan);
          font-size: 14px;
        }

        /* Main Gallery - Airbnb Style */
        .gallery-section {
          margin-bottom: 60px;
        }

        .gallery-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr;
          grid-template-rows: 350px 350px;
          gap: 8px;
          border-radius: 12px;
          overflow: hidden;
          cursor: pointer;
        }

        .gallery-item {
          position: relative;
          overflow: hidden;
          border-radius: 8px;
          background: linear-gradient(135deg, #0d3a5c 0%, #081422 100%);
          transition: all 0.3s ease;
        }

        .gallery-item:hover img {
          transform: scale(1.05);
        }

        .gallery-item:nth-child(1) {
          grid-column: 1;
          grid-row: 1 / 3;
        }

        .gallery-item img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .gallery-overlay {
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0);
          transition: background 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .gallery-item:hover .gallery-overlay {
          background: rgba(0, 0, 0, 0.3);
        }

        .view-all-btn {
          position: absolute;
          bottom: 16px;
          right: 16px;
          background: #fff;
          color: var(--deep);
          padding: 10px 20px;
          border-radius: 6px;
          font-weight: 600;
          font-size: 13px;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .view-all-btn:hover {
          transform: scale(1.05);
          box-shadow: 0 4px 12px rgba(0, 200, 224, 0.3);
        }

        /* Lightbox */
        .lightbox {
          display: none;
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.95);
          z-index: 1000;
          animation: fadeIn 0.3s ease;
        }

        .lightbox.open {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .lightbox-content {
          position: relative;
          max-width: 90vw;
          max-height: 90vh;
          border-radius: 12px;
          overflow: hidden;
        }

        .lightbox-image {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }

        .lightbox-close {
          position: absolute;
          top: 20px;
          right: 20px;
          background: rgba(255, 255, 255, 0.2);
          border: 1px solid #fff;
          color: #fff;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 24px;
          transition: all 0.3s ease;
          z-index: 1001;
        }

        .lightbox-close:hover {
          background: rgba(255, 255, 255, 0.3);
        }

        .lightbox-nav {
          position: absolute;
          bottom: 20px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 8px;
          z-index: 1001;
        }

        .thumbnail {
          width: 50px;
          height: 50px;
          border-radius: 4px;
          cursor: pointer;
          border: 2px solid transparent;
          overflow: hidden;
          transition: all 0.3s ease;
        }

        .thumbnail.active {
          border-color: var(--cyan);
        }

        .thumbnail:hover {
          transform: scale(1.05);
        }

        .thumbnail img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        /* Details Section */
        .details-container {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 48px;
          margin-bottom: 60px;
        }

        .details-content h2 {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 32px;
          color: var(--cyan);
          margin-bottom: 16px;
          letter-spacing: 1px;
        }

        .details-content p {
          font-size: 15px;
          color: #d1d5db;
          line-height: 1.8;
          margin-bottom: 20px;
        }

        .highlight-box {
          background: rgba(0, 200, 224, 0.08);
          border-left: 3px solid var(--cyan);
          padding: 16px 20px;
          border-radius: 6px;
          margin: 24px 0;
          color: #e5e7eb;
          font-size: 14px;
          line-height: 1.7;
        }

        /* Side Info Card */
        .info-card {
          background: linear-gradient(135deg, rgba(13, 58, 92, 0.4) 0%, rgba(8, 20, 36, 0.6) 100%);
          border: 1px solid rgba(0, 200, 224, 0.2);
          border-radius: 12px;
          padding: 32px;
          position: sticky;
          top: 120px;
        }

        .info-card h3 {
          font-size: 18px;
          color: #fff;
          margin-bottom: 20px;
          padding-bottom: 12px;
          border-bottom: 1px solid rgba(0, 200, 224, 0.2);
        }

        .info-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 12px 0;
          border-bottom: 1px solid rgba(0, 200, 224, 0.1);
        }

        .info-item:last-child {
          border: none;
        }

        .info-label {
          font-size: 13px;
          color: #9ca3af;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .info-value {
          font-size: 14px;
          color: var(--cyan);
          font-weight: 600;
        }

        /* Amenities Grid */
        .amenities-section {
          margin-bottom: 60px;
        }

        .amenities-section h2 {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 32px;
          color: var(--cyan);
          margin-bottom: 40px;
          letter-spacing: 1px;
        }

        .amenities-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 24px;
        }

        .amenity-card {
          background: linear-gradient(135deg, rgba(13, 58, 92, 0.3) 0%, rgba(8, 20, 36, 0.5) 100%);
          border: 1px solid rgba(0, 200, 224, 0.2);
          border-radius: 10px;
          padding: 24px;
          text-align: center;
          transition: all 0.3s ease;
        }

        .amenity-card:hover {
          transform: translateY(-6px);
          border-color: var(--cyan);
          background: linear-gradient(135deg, rgba(13, 58, 92, 0.5) 0%, rgba(8, 20, 36, 0.7) 100%);
        }

        .amenity-icon {
          font-size: 32px;
          margin-bottom: 12px;
        }

        .amenity-title {
          font-size: 15px;
          font-weight: 600;
          color: #fff;
          margin-bottom: 8px;
        }

        .amenity-desc {
          font-size: 13px;
          color: #9ca3af;
          line-height: 1.5;
        }

        /* Description Section */
        .description-section {
          margin-bottom: 60px;
        }

        .description-section h2 {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 32px;
          color: var(--cyan);
          margin-bottom: 24px;
          letter-spacing: 1px;
        }

        .description-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 32px;
        }

        .desc-block {
          background: rgba(0, 200, 224, 0.05);
          border: 1px solid rgba(0, 200, 224, 0.15);
          border-radius: 10px;
          padding: 24px;
        }

        .desc-block h3 {
          color: var(--cyan);
          font-size: 16px;
          margin-bottom: 12px;
          font-weight: 600;
        }

        .desc-block p {
          color: #d1d5db;
          font-size: 14px;
          line-height: 1.7;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 768px) {
          .gallery-grid {
            grid-template-columns: 1fr;
            grid-template-rows: auto;
          }

          .gallery-item:nth-child(1) {
            grid-column: 1;
            grid-row: auto;
          }

          .details-container {
            grid-template-columns: 1fr;
            gap: 32px;
          }

          .info-card {
            position: static;
            top: auto;
          }

          .farmstay-header h1 {
            font-size: 36px;
          }

          .details-content h2 {
            font-size: 24px;
          }

          .amenities-grid {
            grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
          }
        }
      `}</style>

      <div className="farmstay-container">
        {/* Header */}
        <div className="farmstay-header">
          <h1>Resunga Farm Stay Resort</h1>
          <p className="subtitle">📍 Tanahu District, Gandaki Province · Your Gateway to Rural Nepal</p>
          <div className="rating">
            <span>★★★★★</span>
            <span>4.9 (128 reviews)</span>
          </div>
        </div>

        {/* Gallery Section */}
        <div className="gallery-section">
          <div className="gallery-grid">
            {galleryImages.map((img, idx) => (
              <div
                key={idx}
                className="gallery-item"
                onClick={() => {
                  setSelectedImage(idx)
                  setIsLightboxOpen(true)
                }}
              >
                <img src={img} alt={`Farm stay view ${idx + 1}`} loading="lazy" />
                {idx === 0 && (
                  <div className="gallery-overlay">
                    <button className="view-all-btn">View All</button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="details-container">
          <div className="details-content">
            <h2>Experience Authentic Mountain Living</h2>
            <p>
              Welcome to Resunga Farm Stay Resort, a serene escape nestled in the heart of Tanahu District. This
              unique retreat combines authentic farm life with modern comfort, offering guests a genuine window
              into rural Nepali culture and sustainability.
            </p>

            <h2 style={{ marginTop: '32px' }}>About the Property</h2>
            <p>
              Resunga Farm Stay Resort spans across lush agricultural lands with panoramic views of the Himalayas.
              Our property features traditional architecture blended with contemporary amenities, creating a warm
              and welcoming atmosphere. Each room is thoughtfully designed to provide comfort while maintaining the
              authentic charm of a traditional Nepali homestay.
            </p>

            <div className="highlight-box">
              ✓ Traditional farm activities · Fresh organic meals · Authentic hospitality · Mountain views ·
              Sustainable tourism practices
            </div>

            <h2 style={{ marginTop: '32px' }}>Why Choose Resunga?</h2>
            <p>
              We believe in creating meaningful connections between guests and the local community. Unlike
              conventional resorts, every aspect of your stay supports local farmers and sustainable practices.
              You'll interact with family members, learn traditional cooking, participate in farm work, and
              understand the rhythms of rural life in Nepal.
            </p>
          </div>

          <div className="info-card">
            <h3>Property Details</h3>
            <div className="info-item">
              <span className="info-label">Rooms</span>
              <span className="info-value">12 Rooms</span>
            </div>
            <div className="info-item">
              <span className="info-label">Guests</span>
              <span className="info-value">2-4 per room</span>
            </div>
            <div className="info-item">
              <span className="info-label">Elevation</span>
              <span className="info-value">1,200m</span>
            </div>
            <div className="info-item">
              <span className="info-label">Facilities</span>
              <span className="info-value">8 Amenities</span>
            </div>
            <div className="info-item">
              <span className="info-label">Best Season</span>
              <span className="info-value">Oct - May</span>
            </div>
            <div className="info-item">
              <span className="info-label">Contact</span>
              <span className="info-value" style={{ cursor: 'pointer' }}>
                Email · Call
              </span>
            </div>
          </div>
        </div>

        {/* Amenities Section */}
        <div className="amenities-section">
          <h2>What We Offer</h2>
          <div className="amenities-grid">
            {amenities.map((amenity, idx) => (
              <div key={idx} className="amenity-card">
                <div className="amenity-icon">{amenity.icon}</div>
                <div className="amenity-title">{amenity.title}</div>
                <div className="amenity-desc">{amenity.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Description Section */}
        <div className="description-section">
          <h2>The Farm Stay Experience</h2>
          <div className="description-grid">
            <div className="desc-block">
              <h3>🌾 Daily Farm Activities</h3>
              <p>
                Participate in seasonal farm work like planting, harvesting, and tending to crops. Learn traditional
                Nepali farming techniques from local farmers and understand sustainable agriculture practices.
              </p>
            </div>
            <div className="desc-block">
              <h3>🍲 Culinary Experiences</h3>
              <p>
                Enjoy meals prepared with fresh ingredients from our farm. Take cooking classes with local cooks to
                learn authentic Nepali recipes using organic produce grown right here at Resunga.
              </p>
            </div>
            <div className="desc-block">
              <h3>🏔️ Mountain Exploration</h3>
              <p>
                Explore the surrounding hills on guided nature walks. Visit nearby villages, waterfalls, and temples.
                Capture stunning sunrise and sunset views with panoramic Himalayan backdrops.
              </p>
            </div>
            <div className="desc-block">
              <h3>🎭 Cultural Immersion</h3>
              <p>
                Learn about local traditions, music, and dance. Participate in community events and celebrations.
                Connect with friendly locals and gain insights into rural Nepali life and values.
              </p>
            </div>
            <div className="desc-block">
              <h3>🧘 Wellness Activities</h3>
              <p>
                Start your day with yoga and meditation sessions. Enjoy herbal tea made from homegrown plants. Relax
                in peaceful settings surrounded by nature and fresh mountain air.
              </p>
            </div>
            <div className="desc-block">
              <h3>🌍 Sustainable Tourism</h3>
              <p>
                All profits directly support local farmers and community development. Our eco-friendly practices
                minimize environmental impact. Be part of responsible tourism that benefits local communities.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      <div className={`lightbox ${isLightboxOpen ? 'open' : ''}`}>
        <div className="lightbox-content">
          <button
            className="lightbox-close"
            onClick={() => setIsLightboxOpen(false)}
          >
            ✕
          </button>
          <img
            src={galleryImages[selectedImage]}
            alt="Full view"
            className="lightbox-image"
          />
          <div className="lightbox-nav">
            {galleryImages.map((img, idx) => (
              <div
                key={idx}
                className={`thumbnail ${idx === selectedImage ? 'active' : ''}`}
                onClick={() => setSelectedImage(idx)}
              >
                <img src={img} alt={`Thumbnail ${idx + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
