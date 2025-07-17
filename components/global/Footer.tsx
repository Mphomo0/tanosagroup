import React from 'react'
import { Phone } from 'lucide-react'
import Link from 'next/link'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  return (
    <footer className='bg-[#222] px-8 pt-12 pb-8 tracking-wide'>
      <div className='max-w-screen-xl mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
          <div className='sm:col-span-2 max-w-sm'>
            <h4 className='text-base font-medium mb-6 text-white'>About Us</h4>
            <p className='text-slate-400 text-sm leading-relaxed'>
              We provide high-quality, ready-to-use UI components and templates
              designed with modern web standards. Our goal is to help developers
              and designers build beautiful websites.
            </p>
          </div>

          <div>
            <h4 className='text-base font-medium mb-6 text-white'>Services</h4>
            <ul className='space-y-4'>
              {[
                'Business Development and Training',
                'Project Management',
                'Risk Management and Compliance',
                'Web Design and Development',
                'Branding and Marketing',
                'Plant Hire',
              ].map((service, index) => (
                <li key={index}>
                  <Link
                    href='/services'
                    className='text-slate-400 hover:text-white text-sm'
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className='space-y-4'>
            <h4 className='text-base font-medium mb-6 text-white'>
              Contact Us
            </h4>
            <p className='text-white text-sm'>
              149 President Reitz Ave, Westdene
            </p>
            <p className='text-white text-sm'>Blomfontein, 9301</p>
            <p className=' flex items-center gap-2 text-white text-sm'>
              <Phone className='w-4 h-4' />
              084 256 4559
            </p>
            <p className='text-white text-sm'>tanosatrading@gmail.com</p>
          </div>
        </div>

        <div className='mt-16'>
          <p className='text-slate-400 text-sm'>
            © {currentYear} Tanosa Group. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
