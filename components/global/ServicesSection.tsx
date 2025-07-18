import Link from 'next/link'
import Image from 'next/image'

export default function ServicesSection() {
  return (
    <div className='py-12 bg-gray-200 sm:py-16 lg:py-20'>
      <h1 className='mt-4 text-3xl font-bold text-blue-900 sm:text-4xl xl:text-5xl text-center'>
        Our Services
      </h1>
      <div className='max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          {/* first */}
          <div className='p-4 bg-white rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300 ease-in-out'>
            <Image
              className='w-full h-40 object-cover rounded-t-lg'
              alt='Card Image'
              src='/images/consulting.jpg'
              width={200}
              height={200}
            />
            <div className='p-4'>
              <h2 className='text-xl font-semibold'>Consulting Services</h2>
              <p className='text-gray-600'>
                Tanosa Group provides expert analytical reviews of annual
                reports and performance information, ensuring MPAC&lsquo;s are
                equipped for effective oversight.
              </p>
              <div className='flex justify-between items-center mt-4'>
                <Link
                  href='/services'
                  className='bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-700'
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>

          {/* second */}
          <div className='p-4 bg-white rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300 ease-in-out'>
            <Image
              className='w-full h-40 object-cover rounded-t-lg'
              alt='Card Image'
              src='/images/training.jpg'
              width={200}
              height={200}
            />
            <div className='p-4'>
              <h2 className='text-xl  font-semibold'>
                Business Development and Training
              </h2>
              <p className='text-gray-600'>
                Business Development and Training offers strategic planning,
                financial services, mentoring, and tailored programs to enhance
                business performance...
              </p>
              <div className='flex justify-between items-center mt-4'>
                <Link
                  href='/services'
                  className='bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-700'
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>

          {/* third */}
          <div className='p-4 bg-white rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300 ease-in-out'>
            <Image
              className='w-full h-40 object-cover rounded-t-lg'
              alt='Card Image'
              src='/images/marketing.jpg'
              width={200}
              height={200}
            />
            <div className='p-4'>
              <h2 className='text-xl  font-semibold'>Branding and Marketing</h2>
              <p className='text-gray-600'>
                Branding and Marketing services focus on building a strong brand
                identity and executing effective strategies to reach target
                audiences. This includes market research, brand development...
              </p>
              <div className='flex justify-between items-center mt-4'>
                <Link
                  href='/services'
                  className='bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-700'
                >
                  Learn More
                </Link>
              </div>
            </div>
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
