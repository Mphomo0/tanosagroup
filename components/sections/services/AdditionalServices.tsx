import React from 'react'
import Image from 'next/image'

export default function AdditionalServices() {
  return (
    <div className='py-12 bg-gray-50 sm:py-16 lg:py-20'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
        <div className='bg-white rounded-2xl border border-black hover:shadow-lg transition-all duration-300 p-6 lg:h-fit'>
          <h1 className='text-xl font-bold text-blue-700 sm:text-2xl xl:text-2xl my-4 '>
            Additional Services
          </h1>
          <ul className='space-y-2 sm:space-y-3 lg:space-y-4'>
            <li>
              <span className='font-bold'>Drain Cleaning Services:</span> We
              provide drainage solutions using high-pressure jetting machines
              that effectively clear blockages and maintain efficient drainage
              systems.
            </li>
            <li>
              <span className='font-bold'>Honeysucker Services:</span>{' '}
              Specialized vehicles equipped with suction capabilities to
              efficiently remove liquid waste, sludge and debris from various
              sites.
            </li>
          </ul>
        </div>
        <div className='hover:shadow-xl transition-all duration-300'>
          <Image
            src='/images/cleaning.jpg'
            alt='Drain Cleaning Services'
            width={500}
            height={500}
            className='h-auto w-auto rounded-2xl'
          />
        </div>
      </div>
    </div>
  )
}
