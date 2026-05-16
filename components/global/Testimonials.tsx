'use client'

import { Star, Quote, Sparkles } from 'lucide-react'
import { motion } from 'motion/react'

const reviews = [
  {
    id: 1,
    name: 'Bataung Masike',
    position: 'Business Owner',
    rating: 5,
    review: '"Best accountants in town and wonderful service rendered."',
  },
  {
    id: 2,
    name: 'Tshese Ralepoma',
    position: 'Business Owner',
    rating: 5,
    review: '',
  },
]

export default function Testimonials() {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-surface-50 -z-10" />
      <div className="absolute top-20 right-0 w-72 h-72 bg-brand-100/50 rounded-full blur-[80px] -z-10" />
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-brand-50/60 rounded-full blur-[100px] -z-10" />

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
            Testimonials
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-surface-900 mb-6">
            What Our <span className="text-gradient">Clients Say</span>
          </h2>
          <p className="text-lg text-surface-600 max-w-2xl mx-auto">
            Trusted by businesses and municipalities across South Africa.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {reviews.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="relative premium-card p-8 hover:-translate-y-1"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-brand-100/50 to-brand-50/30 rounded-bl-3xl -z-10" />
              <Quote className="w-10 h-10 text-brand-200 mb-4" />
              <div className="flex gap-1 mb-4">
                {[...Array(item.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              {item.review ? (
                <p className="text-surface-600 leading-relaxed mb-6 text-base">
                  {item.review}
                </p>
              ) : (
                <p className="text-surface-600 leading-relaxed mb-6 italic text-base">
                  Excellent service provider with professional and reliable delivery.
                </p>
              )}
              <div className="flex items-center gap-4 pt-4 border-t border-surface-100">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-brand-500 to-brand-600 flex items-center justify-center text-white text-lg font-bold shadow-lg shadow-brand-500/20">
                  {item.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-surface-900">{item.name}</p>
                  <p className="text-surface-500 text-sm">{item.position}</p>
                </div>
              </div>
            </motion.div>
          ))}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="relative premium-card p-8 flex flex-col items-center justify-center text-center"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-brand-50/50 to-surface-50/50 rounded-2xl -z-10" />
            <div className="w-16 h-16 rounded-2xl bg-brand-100 flex items-center justify-center mb-4">
              <Sparkles className="w-8 h-8 text-brand-600" />
            </div>
            <h3 className="text-xl font-bold text-surface-900 mb-2">Join Our Happy Clients</h3>
            <p className="text-surface-600 mb-6">Experience the difference with Tanosa Group</p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-brand-600 hover:bg-brand-700 transition-colors w-full sm:w-auto"
            >
              Get in Touch
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}