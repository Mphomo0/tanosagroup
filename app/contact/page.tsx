import Address from '@/components/sections/contactSection/Address'
import ContactForm from '@/components/sections/contactSection/ContactForm'
import React from 'react'

export default function Contact() {
  return (
    <section className='bg-gray-100'>
      <div className='max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8'>
        <div className='flex flex-col md:flex-row gap-8 mt-8'>
          {/* Address - Smaller width on larger screens */}
          <div className='md:basis-1/3 md:max-w-[33%]'>
            <Address />
          </div>

          {/* ContactForm - Larger width on larger screens */}
          <div className='md:basis-2/3 md:max-w-[67%]'>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  )
}
