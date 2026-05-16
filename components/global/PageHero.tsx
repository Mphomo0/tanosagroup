'use client'

import { motion } from 'motion/react'
import { Sparkles } from 'lucide-react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

interface PageHeroProps {
  badge?: string
  title: React.ReactNode
  subtitle: string
  ctaText?: string
  ctaHref?: string
}

export default function PageHero({ badge, title, subtitle, ctaText, ctaHref }: PageHeroProps) {
  return (
    <section className="relative pt-28 pb-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-surface-50 via-brand-50/30 to-surface-100 -z-10" />
      <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-brand-200/30 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-100/40 rounded-full blur-[80px] -z-10" />
      
      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          {badge && (
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-100 text-brand-700 text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              {badge}
            </div>
          )}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-surface-900 mb-6">
            {title}
          </h1>
          <p className="text-lg text-surface-600 leading-relaxed mb-8">
            {subtitle}
          </p>
          {ctaText && ctaHref && (
            <Link href={ctaHref} className="btn-premium rounded-xl">
              <span className="flex items-center gap-2">
                {ctaText}
                <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          )}
        </motion.div>
      </div>
    </section>
  )
}