import React from 'react'

interface CardProps {
  number: number
  title: string
  description: string
  icon: React.ComponentType<{ size?: number; className?: string }>
}

export default function Card({
  number,
  title,
  description,
  icon: Icon,
}: CardProps) {
  return (
    <div className='bg-white hover:shadow-lg transition-all duration-300 p-9 space-y-5 relative overflow-hidden rounded-2xl'>
      {/* Number Bubble */}
      <div className='w-24 h-24 bg-blue-700 rounded-full absolute -right-5 -top-7 flex items-center justify-center'>
        <p className='text-white text-2xl font-bold'>
          {String(number).padStart(2, '0')}
        </p>
      </div>

      {/* Icon */}
      <div className='text-blue-700'>
        <Icon size={48} className='w-12 h-12' />
      </div>

      {/* Title and Description */}
      <div className='space-y-2'>
        <h1 className='font-bold text-xl'>{title}</h1>
        <p className='text-sm text-zinc-500 leading-6'>{description}</p>
      </div>
    </div>
  )
}
