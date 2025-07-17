import React from 'react'
import Image from 'next/image'

export default function BrandingMarketing() {
  return (
    <div className='py-8 px-4 bg-gray-50 sm:py-12 sm:px-6 lg:py-16 lg:px-8 xl:py-20'>
      <div className='max-w-7xl mx-auto'>
        <h1 className='text-lg font-bold text-blue-700 sm:text-xl lg:text-2xl xl:text-3xl mb-3 sm:mb-4'>
          Branding Services
        </h1>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12'>
          {/* Content Section */}
          <div className='bg-white rounded-2xl border border-black hover:shadow-lg transition-all duration-300 p-4 sm:p-6 lg:p-8 order-2 lg:order-1'>
            <ul className='list-disc space-y-2 sm:space-y-3 lg:space-y-4'>
              <li className='text-sm sm:text-base lg:text-lg'>
                <span className='font-bold'>Objective:</span> Create a cohesive
                brand identity that resonates with your target audiences.
              </li>
              <li className='text-sm sm:text-base lg:text-lg'>
                <span className='font-bold'>Components:</span>

                <ul className='list-disc ml-6 marker:text-black marker:text-xl'>
                  <li className=''>
                    <span className='font-bold'>Brand Strategy:</span>
                    <span>
                      Define your brand&lsquo;s vision and objectives.
                    </span>
                  </li>
                  <li>
                    <span className='font-bold'>Visual Identity:</span> Develop
                    essential elements such as logo design, color palette,
                    typography, and brand guidelines to ensure consistency.
                  </li>
                  <li>
                    <span className='font-bold'>Branding Material Supply:</span>{' '}
                    <span>Provide high-quality materials, including:</span>
                    <ul className='list-disc ml-6 marker:text-black marker:text-xl'>
                      <li>Logos</li>
                      <li>Prints</li>
                      <li>Posters</li>
                      <li>Brochures</li>
                      <li>Business Cards</li>
                    </ul>
                  </li>
                  <li></li>
                  <li></li>
                  <li></li>
                </ul>
              </li>
              <li className='text-sm sm:text-base lg:text-lg'>
                <span className='font-bold'>Bulldozers:</span> Powerful machines
                designed for moving large quantities of earth, grading surfaces,
                and clearing land.
              </li>
              <li className='text-sm sm:text-base lg:text-lg'>
                <span className='font-bold'>Graders:</span> Essential for
                precise grading and leveling of surfaces, particularly in road
                construction and maintenance.
              </li>
              <li className='text-sm sm:text-base lg:text-lg'>
                <span className='font-bold'>Excavators:</span> Used for digging,
                lifting, and moving heavy materials with a variety of
                attachments available.
              </li>
              <li className='text-sm sm:text-base lg:text-lg'>
                <span className='font-bold'>Compactors:</span> Ensure proper
                soil compaction for foundations, roads, and landscaped areas.
              </li>
              <li className='text-sm sm:text-base lg:text-lg'>
                <span className='font-bold'>Lowbeds:</span> Heavy-duty trailers
                designed for transporting large and heavy equipment safely and
                efficiently.
              </li>
            </ul>
          </div>

          {/* Images Section */}
          <div className='order-1 lg:order-2'>
            <div className='flex flex-col gap-4 sm:gap-6'>
              {/* Main Image */}
              <div className='w-full'>
                <Image
                  src='/images/planthire.jpg'
                  alt='Plant Hire Equipment'
                  width={600}
                  height={500}
                  className='w-full h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px] object-cover rounded-2xl'
                />
              </div>

              {/* Two Smaller Images Side by Side */}
              <div className='grid grid-cols-2 gap-3 sm:gap-4'>
                <Image
                  src='/images/plant2.jpg'
                  alt='Plant Hire Thumbnail 1'
                  width={210}
                  height={200}
                  className='rounded-2xl object-cover w-full h-[120px] sm:h-[140px] md:h-[160px] lg:h-[180px]'
                />
                <Image
                  src='/images/plant3.jpg'
                  alt='Plant Hire Thumbnail 2'
                  width={210}
                  height={200}
                  className='rounded-2xl object-cover w-full h-[120px] sm:h-[140px] md:h-[160px] lg:h-[180px]'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
