import Image from 'next/image'
import React from 'react'

export default function Hero() {
  return (
    <div className='relative h-screen overflow-hidden'>
      {/* Background Pattern */}
      <div className='absolute inset-0'>
        <div className='relative h-full w-full [&>div]:absolute [&>div]:bottom-0 [&>div]:right-0 [&>div]:z-[-2] [&>div]:h-full [&>div]:w-full [&>div]:bg-gradient-to-b [&>div]:from-blue-200 [&>div]:to-white'>
          <div></div>
        </div>
      </div>

      {/* Hero Content */}
      <div className='relative z-10 flex h-screen md:h-full items-center justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex flex-col md:flex-row items-center justify-between w-full max-w-7xl mx-auto gap-8'>
          {/* Left - Text Content */}
          <div className='flex-1'>
            <h1 className='mb-8 text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl text-slate-900'>
              Tanosa&nbsp;
              <span className='text-sky-900'>Group</span>
            </h1>
            <p className='mb-8 text-lg text-slate-700'>
              We specialize in tailored solutions that drive growth and
              efficiency. Discover how our expertise in consulting, project
              management, and training can elevate your business.
            </p>
            <div className='flex flex-wrap gap-4'>
              <button className='rounded-lg px-6 py-3 font-medium bg-blue-600 text-white hover:bg-black'>
                Get Started
              </button>
              <button className='rounded-lg border px-6 py-3 font-medium border-slate-200 bg-black text-white hover:bg-sky-800'>
                Learn More
              </button>
            </div>
          </div>

          {/* Right - Image */}
          <div className='flex-1'>
            <Image
              src='/images/transparent.png'
              alt='Hero Illustration'
              className='w-auto h-auto object-contain float-right'
              width={800}
              height={800}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
