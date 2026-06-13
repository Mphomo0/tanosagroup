'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'motion/react'
import { Target, Eye, BookOpen, Download, Sparkles } from 'lucide-react'

const tabs = [
  { id: 'Our Mission', icon: Target, label: 'Mission' },
  { id: 'Our Vision', icon: Eye, label: 'Vision' },
  { id: 'Our Story', icon: BookOpen, label: 'Story' },
]

const tabContent: Record<string, { title: string; content: string }> = {
  'Our Mission': {
    title: 'Shaping the Future of Digital Excellence',
    content:
      'Our mission is to be the catalyst for change and progress in municipal governance. We aim to provide municipalities with the consultancy and strategic insights necessary to achieve growth, accountability, and positive change collaboratively.',
  },
  'Our Vision': {
    title: 'Driving Success Through Innovation and Sustainable, Customer-Focused Solutions',
    content:
      'Our vision is to facilitate transformative growth and innovation within the municipal landscape by embodying excellence and integrity. We strive to exceed client expectations and secure our position as the trusted partner for success across all engagements.',
  },
  'Our Story': {
    title: 'Our Journey of Growth and Innovation',
    content:
      'Founded with a vision to deliver impactful solutions, Tanosa Group has earned a reputation for reliability and innovation. Our dedicated team combines industry expertise with practical solutions in accounting, tax, business registration, consulting, and municipal governance to serve clients across the Private Sector, Government Departments, and Municipalities.',
  },
}

export default function AboutSection() {
  const [activeTab, setActiveTab] = useState('Our Mission')
  const current = tabContent[activeTab]

  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-surface-100/50 -z-10" />
      <div className="absolute top-40 left-0 w-72 h-72 bg-brand-200/30 rounded-full blur-[80px] -z-10" />
      <div className="absolute bottom-40 right-0 w-96 h-96 bg-brand-100/40 rounded-full blur-[100px] -z-10" />

      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-100 text-brand-700 text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4" />
            About Us
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-surface-900 mb-6">
            Who We <span className="text-gradient">Are</span>
          </h2>
          <p className="text-base sm:text-lg text-surface-600 max-w-3xl mx-auto leading-relaxed">
            Tanosa Group is a premier service provider specializing in accounting,
            tax, business registration, consulting, and municipal governance across
            South Africa. With a multifaceted approach, we deliver an extensive
            array of professional services to businesses and government clients.
          </p>
        </motion.div>

        <div className="overflow-x-auto pb-2 mb-10 -mx-4 px-4 sm:mx-0 sm:px-0">
          <div className="inline-flex bg-white rounded-2xl p-1.5 gap-1 shadow-lg shadow-surface-200/30 border border-surface-200/50 min-w-max">
            {tabs.map((tab) => {
              const Icon = tab.icon
              const isActive = activeTab === tab.id
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`inline-flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl text-xs sm:text-sm font-medium transition-all duration-300 whitespace-nowrap ${
                    isActive
                      ? 'bg-brand-600 text-white shadow-md'
                      : 'text-surface-500 hover:text-surface-700 hover:bg-surface-50'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {tab.label}
                </button>
              )
            })}
          </div>
        </div>

        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
        >
          <div className="relative order-2 lg:order-none">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-brand-200/40 to-brand-100/20 rounded-3xl blur-2xl" />
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/50">
                <Image
                  src="/images/about1.jpg"
                  alt="Tanosa Group team collaboration"
                  width={600}
                  height={450}
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-brand-600 rounded-2xl shadow-lg flex items-center justify-center">
                <span className="text-white text-xl font-bold">15+</span>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-none space-y-6">
            <h3 className="text-2xl sm:text-3xl font-bold text-surface-900 leading-tight">
              {current.title}
            </h3>
            <p className="text-surface-600 text-base sm:text-lg leading-relaxed">
              {current.content}
            </p>
            <div className="pt-4">
              <a
                href="/about"
                className="btn-premium rounded-xl w-full sm:w-auto justify-center"
              >
                <span className="flex items-center justify-center gap-2">
                  <Download className="w-4 h-4" />
                  Download Company Profile
                </span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}