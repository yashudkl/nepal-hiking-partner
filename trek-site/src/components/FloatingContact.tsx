'use client'

import  { useState } from 'react'

export default function FloatingContact() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <style>{`
        .floating-contact-btn {
          position: fixed;
          bottom: 24px;
          right: 24px;
          z-index: 50;
        }

        .contact-toggle {
          width: 56px;
          height: 56px;
          border-radius: 50%;
          background: linear-gradient(135deg, #00c8e0 0%, #0d8ea6 100%);
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 24px;
          box-shadow: 0 4px 12px rgba(0, 200, 224, 0.4);
          transition: all 0.3s ease;
          color: #fff;
        }

        .contact-toggle:hover {
          transform: scale(1.1);
          box-shadow: 0 6px 20px rgba(0, 200, 224, 0.6);
        }

        .contact-toggle:active {
          transform: scale(0.95);
        }

        /* Contact Menu */
        .contact-menu {
          position: absolute;
          bottom: 70px;
          right: 0;
          background: rgba(8, 20, 36, 0.95);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(0, 200, 224, 0.3);
          border-radius: 12px;
          overflow: hidden;
          opacity: 0;
          visibility: hidden;
          transform: translateY(10px) scale(0.9);
          transition: all 0.3s ease;
          min-width: 200px;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
        }

        .contact-menu.open {
          opacity: 1;
          visibility: visible;
          transform: translateY(0) scale(1);
        }

        .contact-menu-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 14px 16px;
          border: none;
          background: transparent;
          color: #fff;
          cursor: pointer;
          font-size: 13px;
          font-weight: 500;
          text-decoration: none;
          transition: all 0.2s ease;
          font-family: 'DM Sans', sans-serif;
          border-bottom: 1px solid rgba(0, 200, 224, 0.1);
        }

        .contact-menu-item:last-child {
          border-bottom: none;
        }

        .contact-menu-item:hover {
          background: rgba(0, 200, 224, 0.1);
          color: #00c8e0;
        }

        .contact-menu-item:active {
          background: rgba(0, 200, 224, 0.15);
        }

        .contact-menu-icon {
          font-size: 16px;
          min-width: 20px;
        }

        /* Backdrop */
        .contact-backdrop {
          position: fixed;
          inset: 0;
          opacity: 0;
          visibility: hidden;
          z-index: 49;
          transition: all 0.3s ease;
        }

        .contact-backdrop.open {
          opacity: 1;
          visibility: visible;
        }

        @media (max-width: 640px) {
          .floating-contact-btn {
            bottom: 16px;
            right: 16px;
          }

          .contact-toggle {
            width: 48px;
            height: 48px;
            font-size: 20px;
          }
        }
      `}</style>

      {/* Backdrop */}
      <div
        className={`contact-backdrop ${isOpen ? 'open' : ''}`}
        onClick={() => setIsOpen(false)}
      />

      {/* Floating Button */}
      <div className="floating-contact-btn">
        <button
          className="contact-toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Contact us"
          title="Contact us"
        >
          💬
        </button>

        {/* Contact Menu */}
        <div className={`contact-menu ${isOpen ? 'open' : ''}`}>
          <a
            href="https://wa.me/977984375646"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-menu-item"
            onClick={() => setIsOpen(false)}
          >
            <span className="contact-menu-icon">📱</span>
            <span>WhatsApp</span>
          </a>
          <a
            href="https://www.instagram.com/nepal_hikingpartner/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-menu-item"
            onClick={() => setIsOpen(false)}
          >
            <span className="contact-menu-icon">📸</span>
            <span>Instagram</span>
          </a>
        </div>
      </div>
    </>
  )
}
