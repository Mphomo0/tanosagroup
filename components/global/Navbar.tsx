'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'

const NavLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
    document.body.style.overflow = !isMobileMenuOpen ? 'hidden' : 'unset'
  }

  return (
    <header className='bg-white shadow-lg sticky top-0 z-50'>
      <nav>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16'>
          {/* logo */}
          <div>
            <Link href='/' className='flex items-center'>
              <Image
                src='/images/logo.png'
                alt='Logo'
                width={250}
                height={60}
                priority
                className='h-auto w-auto'
              />
              {/* <h1 className='text-2xl font-bold text-gray-800'>Tanosa Group</h1> */}
            </Link>
          </div>

          {/* desktop menu */}
          <div className='hidden md:flex items-center'>
            <ul className='flex items-center space-x-4'>
              {NavLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className='hover:text-blue-600'>
                    {link.name}
                  </Link>
                </li>
              ))}
              <Link
                href='/contact'
                className='border border-blue-600 ml-4 p-2 rounded-md hover:bg-blue-700 hover:text-white transition-colors duration-200'
              >
                Get A Quote
              </Link>
            </ul>
          </div>

          {/* mobile menu button */}
          <div className='md:hidden flex items-center'>
            <Link
              href='/contact'
              className='border border-blue-600 mr-6 p-2 rounded-md hover:bg-blue-700 hover:text-white transition-colors duration-200'
            >
              Get A Quote
            </Link>
            <button className='text-gray-800' onClick={toggleMobileMenu}>
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* mobile menu */}
          {isMobileMenuOpen && (
            <div className='md:hidden absolute top-16 right-0 w-full bg-white shadow-md z-50'>
              <div className='flex flex-col items-center space-y-4 px-4 py-2'>
                {NavLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className='hover:text-blue-600'
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  )
}
