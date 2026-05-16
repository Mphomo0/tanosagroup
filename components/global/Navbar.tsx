'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import { usePathname } from 'next/navigation'

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => {
      document.body.style.overflow = prev ? 'unset' : 'hidden'
      return !prev
    })
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
    document.body.style.overflow = 'unset'
  }

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/'
    return pathname.startsWith(href)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-2xl shadow-sm border-b border-surface-200/40 py-3'
          : 'bg-white/80 backdrop-blur-md py-4'
      }`}
    >
      <nav className="container-page flex items-center justify-between">
        <Link href="/" className="flex items-center shrink-0" aria-label="Tanosa Group Home">
          <Image
            src="/images/Tanosa_Group_logo.png"
            alt="Tanosa Group logo"
            width={200}
            height={70}
            priority
            className="h-11 w-auto lg:h-14 transition-all duration-300"
          />
        </Link>

        <div className="hidden lg:flex items-center gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`relative px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                isActive(link.href)
                  ? 'text-brand-700'
                  : 'text-surface-600 hover:text-surface-900'
              }`}
              aria-current={isActive(link.href) ? 'page' : undefined}
            >
              <span className="relative z-10">{link.name}</span>
              {isActive(link.href) && (
                <span className="absolute inset-0 bg-brand-50 rounded-full border border-brand-100" />
              )}
              {!isActive(link.href) && (
                <span className="absolute inset-0 hover:bg-surface-50 rounded-full transition-colors" />
              )}
            </Link>
          ))}
          <Link
            href="/contact"
            className="ml-4 inline-flex items-center px-6 py-2.5 rounded-full text-sm font-medium text-white transition-all duration-300 hover:shadow-lg hover:shadow-brand-500/20 hover:-translate-y-0.5"
          >
            <span className="relative z-10">Get a Quote</span>
          </Link>
        </div>

        <div className="lg:hidden flex items-center gap-3">
          <Link
            href="/contact"
            className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium text-white transition-all duration-300"
          >
            Get a Quote
          </Link>
          <button
            onClick={toggleMobileMenu}
            className="p-2.5 rounded-full text-surface-600 hover:text-surface-900 hover:bg-surface-100 transition-all duration-200"
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div className="lg:hidden border-t border-surface-200/40 bg-white/98 backdrop-blur-2xl">
          <div className="container-page py-5 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={closeMobileMenu}
                className={`block px-5 py-3 rounded-xl text-base font-medium transition-all duration-200 ${
                  isActive(link.href)
                    ? 'text-brand-700 bg-brand-50'
                    : 'text-surface-600 hover:text-surface-900 hover:bg-surface-50'
                }`}
                aria-current={isActive(link.href) ? 'page' : undefined}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}