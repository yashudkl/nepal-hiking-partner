'use client'

import { useState } from 'react'

export default function FloatingContact() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {isOpen && (
        <div className="mb-3 w-56 border border-neutral-200 bg-white shadow-lg">
          <a
            href="https://wa.me/977984375646"
            target="_blank"
            rel="noopener noreferrer"
            className="block border-b border-neutral-100 px-4 py-3 text-sm font-semibold text-neutral-700 hover:bg-neutral-50 hover:text-neutral-900"
          >
            WhatsApp
          </a>
          <a
            href="https://www.instagram.com/nepal_hikingpartner/"
            target="_blank"
            rel="noopener noreferrer"
            className="block px-4 py-3 text-sm font-semibold text-neutral-700 hover:bg-neutral-50 hover:text-neutral-900"
          >
            Instagram
          </a>
        </div>
      )}
      <button
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        className="border border-neutral-900 bg-neutral-900 px-5 py-3 text-sm font-bold text-white shadow-lg hover:bg-neutral-700"
        aria-expanded={isOpen}
      >
        Contact
      </button>
    </div>
  )
}
