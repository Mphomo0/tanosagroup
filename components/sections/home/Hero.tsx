'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'motion/react'
import { ArrowRight, ChevronRight, CheckCircle2 } from 'lucide-react'

const trustBadges = ['Municipal Experts', 'Trusted Partner', 'Proven Results']

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden pt-24 pb-16 lg:pt-28 lg:pb-20">
      <div className="absolute inset-0 bg-gradient-to-br from-surface-50 via-brand-50/30 to-surface-100 -z-10" />
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-100/40 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-200/30 rounded-full blur-[100px] -z-10" />
      <div className="absolute inset-0 bg-pattern opacity-40 -z-10" />

      <div className="container-page w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-surface-200/60 text-sm font-medium text-surface-700 mb-8 shadow-sm"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-500 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-500" />
              </span>
              <span className="text-surface-600">
                Trusted by businesses &amp; municipalities across South Africa
              </span>
            </motion.div>

            <h1 className="text-6xl sm:text-6xl lg:text-5xl xl:text-6xl font-bold text-surface-900 leading-[1.15] text-balance mb-6">
              <span className="block">
                Tanosa <span className=" text-gradient">Group</span>
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-surface-600 max-w-2xl leading-relaxed mb-8">
              Accounting, tax, business registration, and consulting services
              for businesses and municipalities across Bloemfontein and the
              Free State. Let us help you grow.
            </p>

            <div className="flex flex-wrap gap-2 sm:gap-3 mb-8">
              {trustBadges.map((badge, index) => (
                <motion.div
                  key={badge}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white/70 backdrop-blur-sm border border-surface-200/50 text-xs sm:text-sm font-medium text-surface-700 whitespace-nowrap"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-brand-500" />
                  <span className="hidden xs:inline">{badge}</span>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
              <Link
                href="/contact"
                className="btn-premium rounded-2xl text-base w-full sm:w-auto justify-center"
              >
                <span className="flex items-center justify-center gap-2">
                  Get Started
                  <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
              <Link
                href="/services"
                className="btn-outline rounded-2xl text-base w-full sm:w-auto justify-center"
              >
                <span className="flex items-center justify-center gap-2">
                  Explore Services
                  <ChevronRight className="w-4 h-4" />
                </span>
              </Link>
            </div>
          </motion.div>

          <motion.div
            className="lg:col-span-5 hidden lg:block"
            initial={{ opacity: 0, scale: 0.95, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-brand-200/50 via-brand-100/30 to-transparent rounded-3xl blur-2xl" />
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/50">
                <Image
                  src="/images/transparent.webp"
                  alt="Tanosa Group — Municipal governance and business solutions"
                  width={800}
                  height={800}
                  priority
                  className="w-full h-auto object-contain"
                />
              </div>
              <motion.div
                className="absolute -bottom-6 -left-6 w-32 h-32 bg-white rounded-2xl shadow-xl border border-surface-100 p-4"
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <div className="text-3xl font-bold text-brand-600">15+</div>
                <div className="text-sm text-surface-500">Years Experience</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
