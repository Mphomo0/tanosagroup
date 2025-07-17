import { Star } from 'lucide-react'
import Image from 'next/image'

const review = [
  {
    id: 1,
    name: 'Leslie Alexander',
    position: 'Freelance React Developer',
    avatar: '/images/avatar/man-avatar.png',
    rating: 5,
    review:
      '“You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change.”',
  },
  {
    id: 2,
    name: 'Jacob Jones',
    position: 'Digital Marketer',
    avatar: '/images/avatar/man-avatar.png',
    rating: 3,
    review:
      '“Simply the best. Better than all the rest. I’d recommend this product to beginners and advanced users.”',
  },
  {
    id: 3,
    name: 'Jenny Wilson',
    position: 'Graphic Designer',
    avatar: '/images/avatar/woman-avatar.png',
    rating: 4,
    review:
      '“I cannot believe that I have got a brand new landing page after getting Omega. It was super easy to edit and publish.”',
  },
]
export default function Testimonials() {
  return (
    <section className='py-12 bg-gray-50 sm:py-16 lg:py-20'>
      <div className='px-4 mx-auto max-w-7xl sm:px-6 lg:px-8'>
        <div className='flex flex-col items-center'>
          <div className='text-center'>
            <h2 className='mt-4 text-3xl font-bold text-blue-900 sm:text-4xl xl:text-5xl font-pj'>
              Our happy clients say about us
            </h2>
          </div>

          <div className='relative mt-10 md:mt-24 md:order-2'>
            <div className='absolute -inset-x-1 inset-y-16 md:-inset-x-2 md:-inset-y-6'>
              <div className='w-full h-full max-w-5xl mx-auto rounded-3xl opacity-30 blur-lg filter'></div>
            </div>

            <div className='relative grid grid-cols-1 gap-6 md:grid-cols-3'>
              {review.map((item) => (
                <div
                  key={item.id}
                  className='p-8 bg-white rounded-3xl hover:shadow-2xl transition-all duration-300'
                >
                  <div className='flex space-x-1 text-yellow-500'>
                    {[...Array(item.rating)].map((_, index) => (
                      <Star key={index} size={18} fill='yellow' />
                    ))}
                  </div>

                  <p className='mt-4 text-gray-600'>{item.review}</p>

                  <div className='flex items-center mt-6'>
                    <Image
                      className='w-10 h-10 rounded-full'
                      src={item.avatar}
                      alt={item.name}
                      width={40}
                      height={40}
                    />
                    <div className='ml-4'>
                      <p className='text-lg font-medium text-gray-900'>
                        {item.name}
                      </p>
                      <p className='text-sm text-gray-600'>{item.position}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
