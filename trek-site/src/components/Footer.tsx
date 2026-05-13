import React from 'react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <>
      <style>{`
        .footer {
          background: rgba(8, 20, 36, 0.8);
          border-top: 1px solid rgba(0, 200, 224, 0.2);
          padding: 40px 20px;
          margin-top: 80px;
          font-family: 'DM Sans', sans-serif;
        }

        .footer-inner {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 20px;
        }

        .footer-content {
          text-align: center;
          flex: 1;
          min-width: 300px;
        }

        .footer-copyright {
          font-size: 14px;
          color: #9ca3af;
          letter-spacing: 0.3px;
        }

        .footer-copyright strong {
          color: #00c8e0;
        }

        .footer-links {
          display: flex;
          gap: 24px;
          justify-content: center;
          flex-wrap: wrap;
        }

        .footer-link {
          color: #9ca3af;
          text-decoration: none;
          font-size: 13px;
          transition: color 0.3s ease;
        }

        .footer-link:hover {
          color: #00c8e0;
        }

        @media (max-width: 768px) {
          .footer-inner {
            flex-direction: column;
            text-align: center;
          }

          .footer-links {
            order: -1;
            width: 100%;
          }
        }
      `}</style>

      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-content">
            <p className="footer-copyright">
              © {currentYear} <strong>Nepal Hiking Partner</strong>. All rights reserved.
            </p>
          </div>
          <div className="footer-links">
            <a href="#" className="footer-link">Privacy Policy</a>
            <a href="#" className="footer-link">Terms of Service</a>
            <a href="#" className="footer-link">Contact Us</a>
          </div>
        </div>
      </footer>
    </>
  )
}
