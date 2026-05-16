'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'motion/react'
import { ArrowRight, Briefcase, GraduationCap, Palette, ArrowUpRight, Sparkles } from 'lucide-react'

const services = [
  {
    title: 'Consulting Services',
    description:
      'Expert analytical reviews of annual reports and performance information, ensuring MPACs are equipped for effective oversight.',
    image: '/images/consulting.jpg',
    icon: Briefcase,
    href: '/services',
  },
  {
    title: 'Business Development and Training',
    description:
      'Strategic planning, financial services, mentoring, and tailored programs to enhance business performance.',
    image: '/images/training.jpg',
    icon: GraduationCap,
    href: '/services',
  },
  {
    title: 'Branding and Marketing',
    description:
      'Strong brand identity and effective strategies to reach target audiences. Market research, brand development, and more.',
    image: '/images/branding.jpg',
    icon: Palette,
    href: '/services',
  },
]

export default function ServicesSection() {
  return (
    <section className="section-padding relative">
      <div className="absolute inset-0 bg-pattern opacity-30 -z-10" />

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
            What We Offer
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-surface-900 mb-6">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-lg text-surface-600 max-w-2xl mx-auto">
            Comprehensive solutions tailored to drive your business forward with
            expertise across multiple domains.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="group premium-card premium-card-hover"
              >
                <div className="relative h-56 overflow-hidden rounded-t-2xl">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface-900/80 via-surface-900/20 to-transparent" />
                  <div className="absolute bottom-4 left-4 w-14 h-14 rounded-2xl bg-white/95 backdrop-blur-sm flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-7 h-7 text-brand-600" />
                  </div>
                  <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                    <ArrowUpRight className="w-5 h-5 text-brand-600" />
                  </div>
                </div>
                <div className="p-7">
                  <h3 className="text-xl font-bold text-surface-900 mb-3 group-hover:text-brand-700 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-surface-600 text-sm leading-relaxed mb-5">
                    {service.description}
                  </p>
                  <Link
                    href={service.href}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-brand-600 hover:text-brand-700 transition-colors group"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Link
            href="/services"
            className="btn-premium rounded-2xl"
          >
            <span className="flex items-center gap-2">
              View All Services
              <ArrowRight className="w-4 h-4" />
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}