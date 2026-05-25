'use client'

import React from 'react'

const teamMembers = [
  {
    name: 'Raj Sharma',
    role: 'Founder & Lead Guide',
    desc: 'With 18+ years of Himalayan trekking experience, Raj founded Nepal Hiking Partner to share his passion for authentic mountain adventures.',
    image: '👨‍🏔️'
  },
  {
    name: 'Priya Thapa',
    role: 'Operations Manager',
    desc: 'Priya ensures every trek runs seamlessly, from logistics to guest comfort. Her attention to detail creates unforgettable experiences.',
    image: '👩‍💼'
  },
  {
    name: 'Ankit Paudel',
    role: 'Senior Guide',
    desc: 'Ankit\'s deep knowledge of Nepal\'s hidden trails and local cultures makes every trek educational and meaningful.',
    image: '👨‍🎓'
  },
  {
    name: 'Maya Kumari',
    role: 'Safety Coordinator',
    desc: 'Maya prioritizes every trekker\'s wellbeing with rigorous safety protocols and emergency preparedness training.',
    image: '👩‍⚕️'
  },
]

const values = [
  {
    icon: '🏔️',
    title: 'Authentic Experience',
    desc: 'We believe in genuine connections with Nepal\'s mountains and people, not cookie-cutter tourist routes.',
  },
  {
    icon: '🤝',
    title: 'Community First',
    desc: 'Supporting local guides, homestays, and businesses is core to our mission of sustainable tourism.',
  },
  {
    icon: '🛡️',
    title: 'Safety Excellence',
    desc: 'Your well-being matters most. We invest in training, equipment, and protocols that exceed industry standards.',
  },
  {
    icon: '🌍',
    title: 'Environmental Care',
    desc: 'We\'re committed to preserving Nepal\'s pristine mountains for future generations through responsible tourism.',
  },
]

export default function About() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:ital,wght@0,400;0,500;1,400&display=swap');

        :root {
          --primary: #00c8e0;
          --primary-light: rgba(0, 200, 224, 0.12);
          --primary-border: rgba(0, 200, 224, 0.3);
          --deep: #081422;
          --mid: #0d3a5c;
          --text-light: rgba(255,255,255,0.72);
          --text-lighter: #d1d5db;
        }

        * { box-sizing: border-box; }

        .about-container {
          background: var(--deep);
          color: #fff;
          font-family: 'DM Sans', sans-serif;
          overflow-x: hidden;
        }

        /* Hero Section */
        .about-hero {
          padding: 100px 24px 80px;
          text-align: center;
          max-width: 900px;
          margin: 0 auto;
          animation: fadeInDown 0.8s ease-out;
        }

        .about-hero h1 {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(42px, 8vw, 72px);
          letter-spacing: 2px;
          margin-bottom: 24px;
          line-height: 1.1;
        }

        .about-hero h1 .accent {
          color: var(--primary);
        }

        .about-hero p {
          font-size: 18px;
          color: var(--text-light);
          line-height: 1.7;
          margin-bottom: 0;
        }

        /* Mission Section */
        .mission-section {
          padding: 80px 24px;
          background: linear-gradient(135deg, rgba(37, 99, 235, 0.08) 0%, rgba(8, 20, 34, 0.5) 100%);
          border: 1px solid var(--primary-border);
          margin: 60px 24px;
          border-radius: 16px;
          max-width: 1200px;
          margin-left: auto;
          margin-right: auto;
        }

        .mission-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
        }

        .mission-text h2 {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 44px;
          letter-spacing: 1.5px;
          margin-bottom: 24px;
          color: #fff;
        }

        .mission-text h2 .accent {
          color: var(--primary);
        }

        .mission-text p {
          font-size: 16px;
          color: var(--text-light);
          line-height: 1.8;
          margin-bottom: 16px;
        }

        .mission-highlight {
          background: var(--primary-light);
          border-left: 3px solid var(--primary);
          padding: 20px;
          border-radius: 8px;
          margin-top: 24px;
        }

        .mission-highlight p {
          margin: 0;
          font-weight: 500;
          color: #fff;
        }

        @media (max-width: 768px) {
          .mission-content {
            grid-template-columns: 1fr;
            gap: 40px;
          }

          .mission-text h2 {
            font-size: 32px;
          }
        }

        /* Values Section */
        .values-section {
          padding: 100px 24px;
          max-width: 1200px;
          margin: 0 auto;
        }

        .values-header {
          text-align: center;
          margin-bottom: 80px;
        }

        .values-header h2 {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 52px;
          letter-spacing: 2px;
          margin-bottom: 16px;
        }

        .values-header h2 .accent {
          color: var(--primary);
        }

        .values-header p {
          font-size: 18px;
          color: var(--text-light);
        }

        .values-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 32px;
        }

        .value-card {
          background: linear-gradient(135deg, rgba(37, 99, 235, 0.05) 0%, rgba(13, 58, 92, 0.3) 100%);
          border: 1px solid var(--primary-border);
          padding: 40px 24px;
          border-radius: 12px;
          text-align: center;
          transition: all 0.3s ease;
          animation: fadeInUp 0.8s ease-out both;
        }

        .value-card:nth-child(1) { animation-delay: 0.1s; }
        .value-card:nth-child(2) { animation-delay: 0.2s; }
        .value-card:nth-child(3) { animation-delay: 0.3s; }
        .value-card:nth-child(4) { animation-delay: 0.4s; }

        .value-card:hover {
          transform: translateY(-8px);
          border-color: var(--primary);
          background: linear-gradient(135deg, rgba(37, 99, 235, 0.12) 0%, rgba(13, 58, 92, 0.4) 100%);
        }

        .value-icon {
          font-size: 48px;
          margin-bottom: 16px;
        }

        .value-card h3 {
          font-size: 20px;
          font-weight: 600;
          margin-bottom: 12px;
          color: var(--primary);
        }

        .value-card p {
          font-size: 15px;
          color: var(--text-light);
          line-height: 1.6;
          margin: 0;
        }

        /* Team Section */
        .team-section {
          padding: 100px 24px;
          background: linear-gradient(135deg, rgba(37, 99, 235, 0.05) 0%, rgba(8, 20, 34, 0.3) 100%);
        }

        .team-section-inner {
          max-width: 1200px;
          margin: 0 auto;
        }

        .team-header {
          text-align: center;
          margin-bottom: 80px;
        }

        .team-header h2 {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 52px;
          letter-spacing: 2px;
          margin-bottom: 16px;
        }

        .team-header h2 .accent {
          color: var(--primary);
        }

        .team-header p {
          font-size: 18px;
          color: var(--text-light);
        }

        .team-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 36px;
        }

        .team-card {
          background: linear-gradient(135deg, rgba(13, 58, 92, 0.6) 0%, rgba(8, 20, 34, 0.8) 100%);
          border: 1px solid var(--primary-border);
          border-radius: 12px;
          padding: 32px 24px;
          text-align: center;
          transition: all 0.3s ease;
          animation: fadeInUp 0.8s ease-out both;
        }

        .team-card:nth-child(1) { animation-delay: 0.1s; }
        .team-card:nth-child(2) { animation-delay: 0.2s; }
        .team-card:nth-child(3) { animation-delay: 0.3s; }
        .team-card:nth-child(4) { animation-delay: 0.4s; }

        .team-card:hover {
          transform: translateY(-8px);
          border-color: var(--primary);
          background: linear-gradient(135deg, rgba(37, 99, 235, 0.1) 0%, rgba(13, 58, 92, 0.7) 100%);
        }

        .team-avatar {
          font-size: 56px;
          margin-bottom: 16px;
        }

        .team-card h3 {
          font-size: 20px;
          font-weight: 600;
          color: #fff;
          margin-bottom: 4px;
        }

        .team-card .role {
          font-size: 13px;
          color: var(--primary);
          letter-spacing: 1px;
          text-transform: uppercase;
          font-weight: 600;
          margin-bottom: 12px;
        }

        .team-card p {
          font-size: 14px;
          color: var(--text-light);
          line-height: 1.6;
          margin: 0;
        }

        /* Stats Section */
        .stats-section {
          padding: 80px 24px;
          max-width: 1200px;
          margin: 0 auto;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 40px;
          text-align: center;
        }

        .stat-item h3 {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 48px;
          color: var(--primary);
          margin-bottom: 8px;
        }

        .stat-item p {
          font-size: 16px;
          color: var(--text-light);
          letter-spacing: 0.5px;
        }

        /* CTA Section */
        .about-cta {
          padding: 80px 24px;
          text-align: center;
          background: linear-gradient(135deg, rgba(37, 99, 235, 0.1) 0%, rgba(13, 58, 92, 0.3) 100%);
          border-top: 1px solid var(--primary-border);
          border-bottom: 1px solid var(--primary-border);
          max-width: 900px;
          margin: 60px auto;
          border-radius: 12px;
        }

        .about-cta h2 {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 42px;
          letter-spacing: 1.5px;
          margin-bottom: 16px;
        }

        .about-cta p {
          font-size: 18px;
          color: var(--text-light);
          margin-bottom: 28px;
          line-height: 1.6;
        }

        .cta-button {
          background: var(--primary);
          color: #fff;
          border: none;
          padding: 14px 32px;
          border-radius: 999px;
          font-size: 15px;
          font-weight: 600;
          cursor: pointer;
          letter-spacing: 0.5px;
          transition: all 0.3s ease;
        }

        .cta-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(37, 99, 235, 0.3);
        }

        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
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

        @media (max-width: 768px) {
          .about-hero {
            padding: 80px 20px 60px;
          }

          .mission-section {
            margin: 40px 16px;
            padding: 40px 24px;
          }

          .values-section,
          .team-section {
            padding: 60px 20px;
          }

          .values-header h2,
          .team-header h2 {
            font-size: 36px;
          }

          .stats-grid {
            gap: 30px;
          }

          .stat-item h3 {
            font-size: 36px;
          }

          .about-cta h2 {
            font-size: 32px;
          }
        }
      `}</style>

      <div className="about-container">
        {/* Hero */}
        <section className="about-hero">
          <h1>About <span className="accent">Nepal Hiking Partner</span></h1>
          <p>Crafting unforgettable Himalayan adventures since 2006. We believe in authentic experiences, sustainable tourism, and creating memories that last a lifetime.</p>
        </section>

        {/* Mission */}
        <section className="mission-section">
          <div className="mission-content">
            <div className="mission-text">
              <h2>Our <span className="accent">Mission</span></h2>
              <p>
                We're on a mission to share the breathtaking beauty and rich culture of Nepal's Himalayas with travelers who crave authentic, transformative adventures.
              </p>
              <p>
                Every trek is carefully designed to balance your physical capabilities with meaningful interactions with local communities, pristine nature, and your own personal growth.
              </p>
              <div className="mission-highlight">
                <p>✨ We don't just guide treks—we create life-changing journeys that connect people to mountains and each other.</p>
              </div>
            </div>
            <div className="mission-text">
              <h2>Why <span className="accent">Choose Us?</span></h2>
              <p>
                <strong>Experienced Guides:</strong> Our team has 200+ combined years of Himalayan experience.
              </p>
              <p>
                <strong>Small Groups:</strong> We keep groups intimate (8-12 people) for personalized attention and genuine connections.
              </p>
              <p>
                <strong>Community-Focused:</strong> 40% of our revenue goes directly to local communities and homestays.
              </p>
              <p>
                <strong>Safety First:</strong> Rigorous protocols, professional training, and emergency preparedness at every step.
              </p>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="values-section">
          <div className="values-header">
            <h2>Our Core <span className="accent">Values</span></h2>
            <p>These principles guide every decision we make</p>
          </div>
          <div className="values-grid">
            {values.map((value, idx) => (
              <div key={idx} className="value-card">
                <div className="value-icon">{value.icon}</div>
                <h3>{value.title}</h3>
                <p>{value.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Stats */}
        <section className="stats-section">
          <div className="stats-grid">
            <div className="stat-item">
              <h3>18+</h3>
              <p>Years in Business</p>
            </div>
            <div className="stat-item">
              <h3>15K+</h3>
              <p>Happy Trekkers</p>
            </div>
            <div className="stat-item">
              <h3>25+</h3>
              <p>Unique Treks</p>
            </div>
            <div className="stat-item">
              <h3>98%</h3>
              <p>Satisfaction Rate</p>
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="team-section">
          <div className="team-section-inner">
            <div className="team-header">
              <h2>Meet Our <span className="accent">Team</span></h2>
              <p>Passionate adventurers committed to your journey</p>
            </div>
            <div className="team-grid">
              {teamMembers.map((member, idx) => (
                <div key={idx} className="team-card">
                  <div className="team-avatar">{member.image}</div>
                  <h3>{member.name}</h3>
                  <div className="role">{member.role}</div>
                  <p>{member.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="about-cta">
          <h2>Ready for Your Adventure?</h2>
          <p>Join thousands of trekkers who've discovered the magic of the Himalayas with Nepal Hiking Partner.</p>
          <button className="cta-button">Explore Our Treks</button>
        </section>
      </div>
    </>
  )
}
