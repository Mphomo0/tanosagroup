'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { DownloadIcon } from 'lucide-react'
import { motion } from 'motion/react'

export default function AboutSection() {
  const [activeTab, setActiveTab] = useState('Our Mission')

  const tabs = ['Our Story', 'Our Mission', 'Our Vision']

  const getTabContent = () => {
    switch (activeTab) {
      case 'Our Story':
        return {
          title: 'Our Journey of Growth and Innovation',
          content:
            'Founded with a vision to deliver impactful solutions, Tanosa Group has earned a reputation for reliability and innovation. Our dedicated team combines industry expertise with practical solutions to serve clients effectively in the Private Sector, Government Department and Municipalities.',
        }
      case 'Our Vision':
        return {
          title:
            'Driving Success Through Innovation and Sustainable, Customer-Focused Solutions',
          content:
            'Our vision is to facilitate transformative growth and innovation within the municipal landscape by embodying excellence and integrity. We strive to exceed client expectations and secure our position as the trusted partner for success across all engagements.',
        }
      case 'Our Mission':
        return {
          title: 'Shaping the Future of Digital Excellence',
          content:
            'Our mission is to be the catalyst for change and progress in municipal governance. We aim to provide municipalities with the consultancy and strategic insights necessary to achieve growth, accountability, and positive change collaboratively.',
        }
      default:
        return {
          title:
            'Driving Success Through Innovation and Sustainable, Customer-Focused Solutions',
          content:
            'Our vision is to facilitate transformative growth and innovation within the municipal landscape by embodying excellence and integrity. We strive to exceed client expectations and secure our position as the trusted partner for success across all engagements.',
        }
    }
  }

  const currentContent = getTabContent()

  return (
    <section className='py-16 px-4 max-w-7xl mx-auto mb-24'>
      {/* Header */}
      <motion.div
        className='text-center mb-12'
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.6,
          ease: [0.42, 0, 1, 1], // You can also use custom Bezier: [0.42, 0, 1, 1]
        }}
      >
        <h2 className='text-4xl md:text-5xl font-bold text-blue-900 mb-6'>
          About Us
        </h2>
        <p className='text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed'>
          Tanosa Group is a premier service provider specializing in governance,
          accountability, and operational improvement for municipalities across
          South Africa. With a multifaceted approach, we deliver an extensive
          array of professional services.
        </p>
      </motion.div>

      {/* Tab Navigation */}
      <div className='flex justify-center mb-12'>
        <motion.div
          className='flex space-x-8 border-b border-gray-200'
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            ease: [0.42, 0, 1, 1], // You can also use custom Bezier: [0.42, 0, 1, 1]
          }}
        >
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-3 px-1 text-lg font-medium transition-colors duration-200 ${
                activeTab === tab
                  ? 'text-red-600 border-b-2 border-red-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              {tab}
            </button>
          ))}
        </motion.div>
      </div>

      {/* Content Section */}
      <motion.div
        className='grid lg:grid-cols-2 gap-12 items-center'
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.6,
          ease: [0.42, 0, 1, 1], // You can also use custom Bezier: [0.42, 0, 1, 1]
        }}
      >
        {/* Image */}
        <div className='order-2 lg:order-none relative'>
          <div className='rounded-2xl overflow-hidden shadow-xl'>
            <Image
              src='/images/about1.jpg'
              alt='Team collaboration meeting with laptops and discussion'
              width={600}
              height={400}
              className='w-full h-auto object-cover'
            />
          </div>
        </div>

        {/* Text Content */}
        <div className='order-1 lg:order-none space-y-6'>
          <h3 className='text-3xl md:text-4xl font-bold text-blue-900 leading-tight'>
            {currentContent.title}
          </h3>
          <p className='text-gray-600 text-lg leading-relaxed'>
            {currentContent.content}
          </p>
          <div className='pt-4'>
            <Link
              href='/about'
              className='inline-flex items-center rounded-lg px-6 py-3 font-medium bg-blue-600 text-white hover:bg-black ml-2'
            >
              Download &nbsp;&nbsp;
              <DownloadIcon className='h-6 w-6' />
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
