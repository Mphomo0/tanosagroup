import React from 'react'

export default function CTA() {
  return (
    <section className='relative min-h-[600px] w-full overflow-hidden'>
      {/* Background Image with Overlay */}
      <div
        className='absolute inset-0 bg-cover bg-center bg-no-repeat'
        style={{
          backgroundImage: "url('/images/woman-phone.jpg')",
        }}
      >
        <div className='absolute inset-0 bg-black/60' />
      </div>

      {/* Content */}
      <div className='relative z-10 max-w-7xl mx-auto px-4 py-16 md:py-24'>
        <div className='grid lg:grid-cols-2 gap-12 items-center min-h-[400px]'>
          {/* Left Column - Text and Form */}
          <div className='space-y-8'>
            <div className='bg-black inset-0 bg-cover bg-center bg-no-repeat' />
            <div className='space-y-4'>
              <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight'>
                Ready for Accountability
                <br />
                Excellence?
              </h1>
              <p className='text-lg text-gray-200 max-w-md leading-relaxed'>
                Have Questions? We&lsquo;re Here to Help.
              </p>
            </div>

            <div className='flex flex-col sm:flex-row gap-3 max-w-md'>
              <button className='h-12 px-6 py-3 bg-blue-600 hover:bg-black text-white font-medium whitespace-nowrap rounded-lg'>
                Let&lsquo;s Talk
              </button>
            </div>
          </div>

          {/* Right Column - Image space (image is in background) */}
          <div className='hidden lg:block' />
        </div>
      </div>
    </section>
  )
}
