'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Send } from 'lucide-react'
import { contactFormSchema } from '@/lib/zodSchemas'

type ContactFormData = z.infer<typeof contactFormSchema>

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({ resolver: zodResolver(contactFormSchema) })

  const onSubmit = async (data: ContactFormData) => {
    console.log(data)
    reset()
  }
  return (
    <div className='min-h-screen'>
      <div className='bg-white rounded-lg shadow-xl overflow-hidden'>
        {/* Form */}
        <div className='p-8 space-y-6'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            {/* Name Field */}
            <div>
              <label className='block text-sm font-medium text-gray-700 mb-2'>
                Your Name *
              </label>
              <input
                type='text'
                {...register('name')}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${
                  errors.name ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder='Enter Name'
              />
              {errors.name && (
                <p className='text-red-500 text-sm mt-1'>
                  {errors.name.message}
                </p>
              )}
            </div>

            {/* Email Field */}
            <div>
              <label className='block text-sm font-medium text-gray-700 mb-2'>
                Your Email *
              </label>
              <input
                type='email'
                {...register('email')}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${
                  errors.email ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder='Enter Email'
              />
              {errors.email && (
                <p className='text-red-500 text-sm mt-1'>
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Phone Field */}
            <div>
              <label className='block text-sm font-medium text-gray-700 mb-2'>
                Your Number
              </label>
              <input
                type='tel'
                {...register('phone')}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${
                  errors.phone ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder='Enter Phone No.'
              />
              {errors.phone && (
                <p className='text-red-500 text-sm mt-1'>
                  {errors.phone.message}
                </p>
              )}
            </div>

            {/* Website Field */}
            <div>
              <label className='block text-sm font-medium text-gray-700 mb-2'>
                Website
              </label>
              <input
                type='url'
                {...register('website')}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${
                  errors.website ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder='Enter Website'
              />
              {errors.website && (
                <p className='text-red-500 text-sm mt-1'>
                  {errors.website.message}
                </p>
              )}
            </div>

            {/* Company Field */}
            <div>
              <label className='block text-sm font-medium text-gray-700 mb-2'>
                Company
              </label>
              <input
                type='text'
                {...register('company')}
                className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all'
                placeholder='Enter Company'
              />
            </div>

            {/* Subject Field */}
            <div>
              <label className='block text-sm font-medium text-gray-700 mb-2'>
                Subject *
              </label>
              <input
                type='text'
                {...register('subject')}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${
                  errors.subject ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder='Enter Subject'
              />
              {errors.subject && (
                <p className='text-red-500 text-sm mt-1'>
                  {errors.subject.message}
                </p>
              )}
            </div>
          </div>

          {/* Message Field */}
          <div>
            <label className='block text-sm font-medium text-gray-700 mb-2'>
              Message *
            </label>
            <textarea
              {...register('message')}
              rows={6}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none ${
                errors.message ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder='Enter Message'
            />
            {errors.message && (
              <p className='text-red-500 text-sm mt-1'>
                {errors.message.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <div className='pt-4'>
            <button
              type='button'
              onClick={handleSubmit(onSubmit)}
              disabled={isSubmitting}
              className='inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all'
            >
              <Send className='w-4 h-4 mr-2' />
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
