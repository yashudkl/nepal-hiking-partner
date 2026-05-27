'use client'

import  { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'

const links = [
  { name: 'Home', path: '/' },
  { name: 'Treks', path: '/trek' },
  { name: 'Farm Stay Retreat', path: '/farm-stay' },
  { name: 'About', path: '/about' },
]

function MountainLogo() {
  return (
    <svg width="50" height="50" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <polygon points="12,62 32,28 40,44 52,22 68,62" fill="#0d3a5c" />
      <polygon points="12,62 32,28 40,44 52,22 68,62" fill="url(#mtnGrad)" opacity="0.95" />
      <polygon points="12,62 36,36 40,44 44,36 68,62" fill="rgba(255,255,255,0.92)" />
      <polygon points="36,44 40,32 44,44 40,52" fill="#1a6b8a" opacity="0.7" />
      <defs>
        <linearGradient id="mtnGrad" x1="12" y1="20" x2="68" y2="65" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#00c8e0" />
          <stop offset="100%" stopColor="#0d8ea6" />
        </linearGradient>
      </defs>
    </svg>
  )
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()
  const router = useRouter()
  const [activeLink, setActiveLink] = useState('Home')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMenuOpen(false) }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@400;500&display=swap');

        .nhp-nav {
          position: fixed !important;
          top: 0 !important; left: 0 !important; right: 0 !important;
          z-index: 100 !important;
          font-family: 'DM Sans', sans-serif;
          transition: background 0.35s ease, border-color 0.35s ease, box-shadow 0.35s ease;
          background: none !important;
          backdrop-filter: blur(8px) !important;
          -webkit-backdrop-filter: blur(8px) !important;
          border: none !important;
          box-shadow: none !important;
        }

        .nhp-nav.scrolled {
          background: rgba(8, 20, 36, 0.92) !important;
          backdrop-filter: blur(18px) !important;
          -webkit-backdrop-filter: blur(18px) !important;
          border-bottom: 0.5px solid rgba(0, 200, 224, 0.2) !important;
          box-shadow: 0 4px 24px rgba(0,0,0,0.3) !important;
        }

        .nhp-nav.top {
          background: none !important;
          backdrop-filter: blur(8px) !important;
          -webkit-backdrop-filter: blur(8px) !important;
          border: none !important;
          box-shadow: none !important;
        }

        .nhp-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 28px;
          height: 80px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        /* Logo */
        .nhp-logo {
          display: flex;
          align-items: center;
          gap: 10px;
          text-decoration: none;
          flex-shrink: 0;
        }

        .nhp-logo-text {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 22px;
          letter-spacing: 3px;
          color: #fff;
          line-height: 1;
        }

        .nhp-logo-text span {
          color: #00c8e0;
        }

        .nhp-logo-sub {
          display: block;
          font-family: 'DM Sans', sans-serif;
          font-size: 9px;
          letter-spacing: 2.5px;
          color: rgba(255,255,255,0.45);
          text-transform: uppercase;
          margin-top: 1px;
        }

        /* Desktop links */
        .nhp-links {
          display: flex;
          align-items: center;
          gap: 2px;
          list-style: none;
        }

        @media (max-width: 767px) {
          .nhp-links { display: none; }
          .nhp-cta-desktop { display: none; }
        }

        .nhp-links a {
          color: rgba(255,255,255,0.68);
          font-size: 13.5px;
          font-weight: 500;
          text-decoration: none;
          padding: 6px 13px;
          border-radius: 6px;
          letter-spacing: 0.2px;
          transition: background 0.15s, color 0.15s;
          position: relative;
        }

        .nhp-links a:hover {
          background: rgba(255,255,255,0.08);
          color: #fff;
        }

        .nhp-links a.active {
          color: #00c8e0;
        }

        .nhp-links a.active::after {
          content: '';
          position: absolute;
          bottom: -2px; left: 50%;
          transform: translateX(-50%);
          width: 16px; height: 2px;
          background: #00c8e0;
          border-radius: 999px;
        }

        /* CTA button */
        .nhp-cta {
          background: rgba(0, 200, 224, 0.12);
          border: 0.5px solid rgba(0, 200, 224, 0.55);
          color: #00c8e0;
          font-family: 'DM Sans', sans-serif;
          font-size: 13px;
          font-weight: 500;
          padding: 8px 20px;
          border-radius: 999px;
          cursor: pointer;
          letter-spacing: 0.3px;
          transition: background 0.18s, border-color 0.18s;
          white-space: nowrap;
        }

        .nhp-cta:hover {
          background: rgba(0, 200, 224, 0.25);
          border-color: rgba(0, 200, 224, 0.8);
        }

        /* Hamburger */
        .nhp-hamburger {
          display: none;
          background: rgba(255,255,255,0.08);
          border: 0.5px solid rgba(255,255,255,0.15);
          border-radius: 8px;
          padding: 7px 9px;
          cursor: pointer;
          flex-direction: column;
          gap: 4px;
        }

        @media (max-width: 767px) {
          .nhp-hamburger { display: flex; }
        }

        .nhp-hamburger span {
          display: block;
          width: 20px; height: 1.5px;
          background: #fff;
          border-radius: 999px;
          transition: transform 0.25s, opacity 0.25s;
        }

        .nhp-hamburger.open span:nth-child(1) { transform: translateY(5.5px) rotate(45deg); }
        .nhp-hamburger.open span:nth-child(2) { opacity: 0; }
        .nhp-hamburger.open span:nth-child(3) { transform: translateY(-5.5px) rotate(-45deg); }

        /* Mobile menu */
        .nhp-mobile-menu {
          position: fixed;
          top: 80px;
          left: 0;
          right: 0;
          z-index: 99;
          overflow: hidden;
          max-height: 0;
          transition: max-height 0.35s ease;
          background: rgba(6, 16, 30, 0.97);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-bottom: 0.5px solid rgba(0, 200, 224, 0.15);
        }

        .nhp-mobile-menu.open {
          max-height: 500px;
        }

        .nhp-mobile-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 12px 24px 20px;
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .nhp-mobile-menu a {
          color: rgba(255,255,255,0.72);
          font-size: 15px;
          font-weight: 500;
          text-decoration: none;
          padding: 10px 14px;
          border-radius: 8px;
          transition: background 0.15s, color 0.15s;
        }

        .nhp-mobile-menu a:hover,
        .nhp-mobile-menu a.active {
          background: rgba(0,200,224,0.08);
          color: #00c8e0;
        }

        .nhp-mobile-cta {
          margin-top: 10px;
          width: 100%;
          padding: 11px;
          border-radius: 999px;
          text-align: center;
          font-size: 14px;
        }
      `}</style>

      <header>
        <nav className={`nhp-nav ${scrolled ? 'scrolled' : 'top'}`} role="navigation" aria-label="Main navigation">
          <div className="nhp-inner">

            {/* Logo */}
            <Link className="nhp-logo" href="/" aria-label="Nepal Hiking Partner – Home">
              <MountainLogo />
              <div>
                <span className="nhp-logo-text">
                  NEPAL <span>HIKING</span>
                </span>
                <span className="nhp-logo-sub">Partner</span>
              </div>
            </Link>

            {/* Desktop nav links */}
            <ul className="nhp-links" role="list">
              {links.map((l) => (
                <li key={l.name}>
                  {l.path.startsWith('/') ? (
                    <Link
                      href={l.path}
                      className={pathname === l.path ? 'active' : ''}
                      onClick={() => setActiveLink(l.name)}
                    >
                      {l.name}
                    </Link>
                  ) : (
                    <a
                      href={l.path}
                      className={activeLink === l.name ? 'active' : ''}
                      onClick={(e) => { e.preventDefault(); setActiveLink(l.name) }}
                    >
                      {l.name}
                    </a>
                  )}
                </li>
              ))}
            </ul>

            {/* Desktop CTA */}
            <button 
              className="nhp-cta nhp-cta-desktop" 
              onClick={() => router.push('/book-trek')}
              aria-label="Book a trek"
            >
              Book a Trek
            </button>

            {/* Hamburger */}
            <button
              className={`nhp-hamburger ${menuOpen ? 'open' : ''}`}
              onClick={() => setMenuOpen((v) => !v)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </nav>

        {/* Mobile menu */}
        <div className={`nhp-mobile-menu ${menuOpen ? 'open' : ''}`} aria-hidden={!menuOpen}>
          <div className="nhp-mobile-inner">
            {links.map((l) => (
              l.path.startsWith('/') ? (
                <Link
                  key={l.name}
                  href={l.path}
                  className={pathname === l.path ? 'active' : ''}
                  onClick={() => { setActiveLink(l.name); setMenuOpen(false) }}
                >
                  {l.name}
                </Link>
              ) : (
                <a
                  key={l.name}
                  href={l.path}
                  className={activeLink === l.name ? 'active' : ''}
                  onClick={(e) => { e.preventDefault(); setActiveLink(l.name); setMenuOpen(false) }}
                >
                  {l.name}
                </a>
              )
            ))}
            <button 
              className="nhp-cta nhp-mobile-cta"
              onClick={() => { router.push('/book-trek'); setMenuOpen(false) }}
            >
              Book a Trek
            </button>
          </div>
        </div>
      </header>
    </>
  )
}