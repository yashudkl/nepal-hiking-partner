'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import logo from '@/assets/logo.webp'

const links = [
  { name: 'Home', path: '/' },
  { name: 'Treks', path: '/trek' },
  { name: 'Farm Stay', path: '/farm-stay' },
  { name: 'About', path: '/about' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  return (
    <header className={`fixed inset-x-0 top-0 z-50 border-b transition-colors ${scrolled ? 'border-neutral-200 bg-white' : 'border-neutral-100 bg-white/95 backdrop-blur'}`}>
      <nav className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 lg:px-8" aria-label="Main navigation">
        <Link href="/" className="flex items-center" aria-label="Nepal Hiking Partner home">
          <Image
            src={logo}
            alt="Nepal Hiking Partner"
            className="h-16 w-auto object-contain"
            priority
          />
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => {
            const active = pathname === link.path
            return (
              <Link
                key={link.path}
                href={link.path}
                className={`text-sm font-semibold transition-colors ${active ? 'text-primary-700' : 'text-neutral-600 hover:text-neutral-900'}`}
              >
                {link.name}
              </Link>
            )
          })}
          <Link href="/book-trek" className="border border-primary-600 bg-primary-600 px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-primary-700">
            Book a Trek
          </Link>
        </div>

        <button
          type="button"
          className="grid h-11 w-11 place-items-center border border-neutral-300 text-neutral-900 md:hidden"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          <span className="text-xl leading-none">{menuOpen ? 'x' : '='}</span>
        </button>
      </nav>

      {menuOpen && (
        <div className="border-t border-neutral-200 bg-white px-5 py-5 md:hidden">
          <div className="flex flex-col gap-4">
            {links.map((link) => (
              <Link key={link.path} href={link.path} className="border-b border-neutral-100 pb-3 text-sm font-semibold text-neutral-700">
                {link.name}
              </Link>
            ))}
            <Link href="/book-trek" className="bg-primary-600 px-5 py-3 text-center text-sm font-bold text-white">
              Book a Trek
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
