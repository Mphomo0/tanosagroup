import Link from 'next/link'
import React from 'react'

export default function ServicesSection() {
  return (
    <div
      className='py-12 bg-url("/images/woman-phone.jpg") sm:py-16 lg:py-20'
      style={{ backgroundImage: 'url("/images/104038.jpg")' }}
    >
      <h1 className='mt-4 text-3xl font-bold text-blue-900 sm:text-4xl xl:text-5xl text-center'>
        Our Services
      </h1>
      <div className='max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          <div className='bg-white rounded-2xl hover:shadow-lg transition-all duration-300 p-6'>
            1
          </div>
          <div className='bg-white rounded-2xl hover:shadow-lg transition-all duration-300 p-6'>
            2
          </div>
          <div className='bg-white rounded-2xl hover:shadow-lg transition-all duration-300 p-6'>
            3
          </div>
        </div>
      </div>
      <div>
        <Link href='/services' className='flex justify-center'>
          <button className='rounded-lg px-6 py-3 font-medium bg-blue-600 text-white hover:bg-black ml-2'>
            View More
          </button>
        </Link>
      </div>
    </div>
  )
}
