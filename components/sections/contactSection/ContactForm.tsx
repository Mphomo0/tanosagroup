'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Send } from 'lucide-react'
import { motion } from 'motion/react'
import { contactFormSchema } from '@/lib/zodSchemas'

type ContactFormData = z.infer<typeof contactFormSchema>

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({ resolver: zodResolver(contactFormSchema) })

  const onSubmit = async (data: ContactFormData) => {
    try {
      const response = await fetch('/api/send-mail', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      const result = await response.json()
      if (!response.ok) {
        alert(`Error: ${result.error || 'Unknown error'}`)
      } else {
        alert('Your message has been sent successfully!')
      }
    } catch {
      alert('There was an error sending your message. Please try again.')
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-2xl shadow-sm border border-surface-100 overflow-hidden"
    >
      <div className="gradient-brand px-8 py-6">
        <h3 className="text-xl font-semibold text-white">Send Us a Message</h3>
        <p className="text-brand-100 text-sm mt-1">
          Fill out the form below and we&apos;ll get back to you promptly.
        </p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="p-8 space-y-6">
        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-sm font-medium text-surface-700 mb-1.5">
              Your Name *
            </label>
            <input
              type="text"
              {...register('name')}
              className={`w-full px-4 py-2.5 rounded-xl border text-sm transition-all focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none ${
                errors.name ? 'border-red-400 bg-red-50' : 'border-surface-200 bg-surface-50'
              }`}
              placeholder="Enter Name"
            />
            {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-surface-700 mb-1.5">
              Your Email *
            </label>
            <input
              type="email"
              {...register('email')}
              className={`w-full px-4 py-2.5 rounded-xl border text-sm transition-all focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none ${
                errors.email ? 'border-red-400 bg-red-50' : 'border-surface-200 bg-surface-50'
              }`}
              placeholder="Enter Email"
            />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-surface-700 mb-1.5">
              Phone Number
            </label>
            <input
              type="tel"
              {...register('phone')}
              className={`w-full px-4 py-2.5 rounded-xl border text-sm transition-all focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none ${
                errors.phone ? 'border-red-400 bg-red-50' : 'border-surface-200 bg-surface-50'
              }`}
              placeholder="Enter Phone No."
            />
            {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-surface-700 mb-1.5">Website</label>
            <input
              type="url"
              {...register('website')}
              className={`w-full px-4 py-2.5 rounded-xl border text-sm transition-all focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none ${
                errors.website ? 'border-red-400 bg-red-50' : 'border-surface-200 bg-surface-50'
              }`}
              placeholder="Enter Website"
            />
            {errors.website && <p className="text-red-500 text-xs mt-1">{errors.website.message}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-surface-700 mb-1.5">Company</label>
            <input
              type="text"
              {...register('company')}
              className="w-full px-4 py-2.5 rounded-xl border border-surface-200 bg-surface-50 text-sm transition-all focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none"
              placeholder="Enter Company"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-surface-700 mb-1.5">Subject *</label>
            <input
              type="text"
              {...register('subject')}
              className={`w-full px-4 py-2.5 rounded-xl border text-sm transition-all focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none ${
                errors.subject ? 'border-red-400 bg-red-50' : 'border-surface-200 bg-surface-50'
              }`}
              placeholder="Enter Subject"
            />
            {errors.subject && <p className="text-red-500 text-xs mt-1">{errors.subject.message}</p>}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-surface-700 mb-1.5">Message *</label>
          <textarea
            {...register('message')}
            rows={5}
            className={`w-full px-4 py-2.5 rounded-xl border text-sm transition-all focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none resize-none ${
              errors.message ? 'border-red-400 bg-red-50' : 'border-surface-200 bg-surface-50'
            }`}
            placeholder="Enter Message"
          />
          {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
        </div>

        <div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-medium text-white gradient-brand hover:shadow-lg hover:shadow-brand-600/25 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Send className="w-4 h-4" />
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </div>
      </form>
    </motion.div>
  )
}
