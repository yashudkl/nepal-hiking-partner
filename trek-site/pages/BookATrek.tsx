'use client'

import React, { useState } from 'react'
import { treks } from '../src/data/treks'

export default function BookATrek() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    trekId: '',
    startDate: '',
    participants: '1',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would send the data to your backend
    console.log('Booking Data:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({
        name: '',
        email: '',
        phone: '',
        trekId: '',
        startDate: '',
        participants: '1',
        message: '',
      })
    }, 3000)
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

        .book-trek-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 60px 20px 80px;
          background: var(--deep);
          min-height: 100vh;
        }

        .book-trek-header {
          margin-bottom: 60px;
          text-align: center;
          animation: fadeInUp 0.8s ease-out;
        }

        .book-trek-header h1 {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 48px;
          letter-spacing: 2px;
          color: var(--cyan);
          margin-bottom: 16px;
        }

        .book-trek-header p {
          font-size: 16px;
          color: #9ca3af;
          letter-spacing: 0.5px;
        }

        /* Main Layout */
        .booking-layout {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 48px;
          margin-bottom: 60px;
        }

        /* Booking Form */
        .booking-form-section {
          background: linear-gradient(135deg, rgba(13, 58, 92, 0.3) 0%, rgba(8, 20, 36, 0.5) 100%);
          border: 1px solid rgba(0, 200, 224, 0.2);
          border-radius: 12px;
          padding: 40px;
          height: fit-content;
          position: sticky;
          top: 120px;
        }

        .form-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 24px;
          color: var(--cyan);
          margin-bottom: 24px;
          letter-spacing: 1px;
        }

        .form-group {
          margin-bottom: 20px;
          display: flex;
          flex-direction: column;
        }

        .form-label {
          font-size: 13px;
          font-weight: 600;
          color: #e5e7eb;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 8px;
        }

        .form-input,
        .form-select,
        .form-textarea {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(0, 200, 224, 0.2);
          border-radius: 6px;
          padding: 12px 14px;
          color: #fff;
          font-family: 'DM Sans', sans-serif;
          font-size: 14px;
          transition: all 0.3s ease;
        }

        .form-input::placeholder,
        .form-textarea::placeholder {
          color: rgba(255, 255, 255, 0.4);
        }

        .form-input:focus,
        .form-select:focus,
        .form-textarea:focus {
          outline: none;
          background: rgba(255, 255, 255, 0.08);
          border-color: var(--cyan);
          box-shadow: 0 0 0 3px rgba(0, 200, 224, 0.1);
        }

        .form-select option {
          background: var(--deep);
          color: #fff;
        }

        .form-textarea {
          resize: vertical;
          min-height: 100px;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }

        .submit-btn {
          background: linear-gradient(135deg, #00c8e0 0%, #0d8ea6 100%);
          border: none;
          color: #fff;
          padding: 14px 28px;
          border-radius: 6px;
          font-weight: 600;
          font-size: 14px;
          letter-spacing: 0.5px;
          cursor: pointer;
          transition: all 0.3s ease;
          margin-top: 8px;
          width: 100%;
        }

        .submit-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(0, 200, 224, 0.3);
        }

        .submit-btn:active {
          transform: translateY(0);
        }

        .success-message {
          background: rgba(74, 222, 128, 0.15);
          border: 1px solid rgba(74, 222, 128, 0.5);
          color: #86efac;
          padding: 14px;
          border-radius: 6px;
          font-size: 13px;
          text-align: center;
          margin-bottom: 16px;
          animation: slideDown 0.3s ease;
        }

        /* Trek Cards */
        .treks-listing {
          display: grid;
          grid-template-columns: 1fr;
          gap: 20px;
        }

        .trek-list-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 24px;
          color: var(--cyan);
          margin-bottom: 24px;
          letter-spacing: 1px;
        }

        .trek-booking-card {
          background: linear-gradient(135deg, rgba(13, 58, 92, 0.3) 0%, rgba(8, 20, 36, 0.5) 100%);
          border: 1px solid rgba(0, 200, 224, 0.2);
          border-radius: 10px;
          overflow: hidden;
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .trek-booking-card:hover {
          transform: translateY(-4px);
          border-color: var(--cyan);
          background: linear-gradient(135deg, rgba(13, 58, 92, 0.5) 0%, rgba(8, 20, 36, 0.7) 100%);
        }

        .trek-card-inner {
          display: flex;
          gap: 20px;
          padding: 20px;
        }

        .trek-card-image {
          width: 140px;
          height: 140px;
          border-radius: 8px;
          overflow: hidden;
          flex-shrink: 0;
        }

        .trek-card-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .trek-card-content {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .trek-card-title {
          font-size: 18px;
          font-weight: 600;
          color: #fff;
          margin-bottom: 6px;
        }

        .trek-card-subtitle {
          font-size: 12px;
          color: var(--cyan);
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 12px;
        }

        .trek-card-stats {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 12px;
          margin-bottom: 12px;
          font-size: 12px;
        }

        .trek-stat {
          background: rgba(0, 200, 224, 0.05);
          border: 1px solid rgba(0, 200, 224, 0.15);
          padding: 8px;
          border-radius: 4px;
          text-align: center;
        }

        .trek-stat-label {
          color: #9ca3af;
          font-size: 10px;
          text-transform: uppercase;
          letter-spacing: 0.3px;
          margin-bottom: 4px;
        }

        .trek-stat-value {
          color: var(--cyan);
          font-weight: 600;
        }

        .trek-card-rating {
          font-size: 12px;
          color: #d1d5db;
        }

        .trek-card-rating strong {
          color: var(--cyan);
        }

        .select-trek-btn {
          background: rgba(0, 200, 224, 0.12);
          border: 1px solid rgba(0, 200, 224, 0.5);
          color: var(--cyan);
          padding: 8px 16px;
          border-radius: 4px;
          font-size: 12px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
          align-self: flex-start;
        }

        .select-trek-btn:hover {
          background: rgba(0, 200, 224, 0.25);
          border-color: var(--cyan);
        }

        /* Responsive */
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

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 1024px) {
          .booking-layout {
            grid-template-columns: 1fr;
            gap: 32px;
          }

          .booking-form-section {
            position: static;
            top: auto;
          }
        }

        @media (max-width: 768px) {
          .book-trek-header h1 {
            font-size: 36px;
          }

          .form-row {
            grid-template-columns: 1fr;
          }

          .trek-card-stats {
            grid-template-columns: repeat(2, 1fr);
          }

          .trek-card-inner {
            flex-direction: column;
          }

          .trek-card-image {
            width: 100%;
            height: 200px;
          }
        }
      `}</style>

      <div className="book-trek-container">
        {/* Header */}
        <div className="book-trek-header">
          <h1>Book Your Trek</h1>
          <p>Choose from our amazing treks and start your Himalayan adventure</p>
        </div>

        {/* Main Layout */}
        <div className="booking-layout">
          {/* Booking Form */}
          <div className="booking-form-section">
            <h3 className="form-title">Booking Form</h3>

            {submitted && (
              <div className="success-message">
                ✓ Booking request submitted! We'll contact you soon.
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label">Full Name *</label>
                <input
                  type="text"
                  name="name"
                  className="form-input"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Email *</label>
                  <input
                    type="email"
                    name="email"
                    className="form-input"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Phone *</label>
                  <input
                    type="tel"
                    name="phone"
                    className="form-input"
                    placeholder="+977 98..."
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Select Trek *</label>
                <select
                  name="trekId"
                  className="form-select"
                  value={formData.trekId}
                  onChange={handleChange}
                  required
                >
                  <option value="">Choose a trek...</option>
                  {treks.map((trek) => (
                    <option key={trek.id} value={trek.id}>
                      {trek.title}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Start Date *</label>
                  <input
                    type="date"
                    name="startDate"
                    className="form-input"
                    value={formData.startDate}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Participants *</label>
                  <select
                    name="participants"
                    className="form-select"
                    value={formData.participants}
                    onChange={handleChange}
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                      <option key={num} value={num}>
                        {num} {num === 1 ? 'Person' : 'People'}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Additional Info</label>
                <textarea
                  name="message"
                  className="form-textarea"
                  placeholder="Any special requests or questions?"
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>

              <button type="submit" className="submit-btn">
                Submit Booking Request
              </button>
            </form>
          </div>

          {/* Trek Listings */}
          <div className="treks-listing">
            <h3 className="trek-list-title">Available Treks</h3>
            {treks.map((trek) => (
              <div key={trek.id} className="trek-booking-card">
                <div className="trek-card-inner">
                  <div className="trek-card-image">
                    <img src={trek.image} alt={trek.title} loading="lazy" />
                  </div>
                  <div className="trek-card-content">
                    <div>
                      <h4 className="trek-card-title">{trek.title}</h4>
                      <p className="trek-card-subtitle">{trek.subtitle}</p>
                      <div className="trek-card-stats">
                        <div className="trek-stat">
                          <div className="trek-stat-label">Duration</div>
                          <div className="trek-stat-value">{trek.duration}</div>
                        </div>
                        <div className="trek-stat">
                          <div className="trek-stat-label">Altitude</div>
                          <div className="trek-stat-value">{trek.altitude}</div>
                        </div>
                        <div className="trek-stat">
                          <div className="trek-stat-label">Difficulty</div>
                          <div className="trek-stat-value">{trek.difficulty}</div>
                        </div>
                        <div className="trek-stat">
                          <div className="trek-stat-label">Season</div>
                          <div className="trek-stat-value">{trek.bestSeason.split('&')[0].trim()}</div>
                        </div>
                      </div>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span className="trek-card-rating">
                        ★★★★★ <strong>{trek.rating}</strong> ({trek.reviews} reviews)
                      </span>
                      <button
                        className="select-trek-btn"
                        onClick={() => {
                          setFormData((prev) => ({ ...prev, trekId: trek.id }))
                          document.querySelector('[name="trekId"]')?.focus()
                        }}
                      >
                        Select Trek
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
