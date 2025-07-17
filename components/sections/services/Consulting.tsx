import React from 'react'

import { consultingServices } from '@/lib/services'
import Card from './Card'

export default function Consulting() {
  return (
    <div className='py-8 px-4 bg-gray-50 sm:py-12 sm:px-6 lg:py-16 lg:px-8 xl:py-20'>
      <div className='max-w-7xl mx-auto'>
        <h1 className='text-lg font-bold text-blue-700 sm:text-xl lg:text-2xl xl:text-3xl mb-3 sm:mb-4'>
          Branding Services
        </h1>
      </div>

      <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-4'>
        {consultingServices.map((service) => (
          <Card
            key={service.number}
            number={service.number}
            title={service.title}
            description={service.description}
            icon={service.icon}
          />
        ))}
      </div>
    </div>
  )
}
