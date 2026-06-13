'use client'

import { Phone, MessageCircle } from 'lucide-react'

const phoneNumber = '+27795966442'
const whatsappNumber = '27795966442'
const whatsappMessage = 'Hi%20Tanosa%20Group%2C%20I%27d%20like%20to%20inquire%20about%20your%20services.'

export default function WhatsAppButton() {
  const trackClick = (label: string) => {
    if (typeof window !== 'undefined' && typeof (window as Window & { gtag?: (...args: unknown[]) => void }).gtag === 'function') {
      ;(window as Window & { gtag?: (...args: unknown[]) => void }).gtag?.('event', 'click', {
        event_category: 'engagement',
        event_label: label,
      })
    }
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      <a
        href={`tel:${phoneNumber}`}
        onClick={() => trackClick('click_phone')}
        aria-label="Call Tanosa Group"
        className="w-14 h-14 rounded-full bg-brand-600 text-white shadow-lg shadow-brand-600/30 hover:bg-brand-700 hover:shadow-xl hover:shadow-brand-600/40 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center"
      >
        <Phone className="w-6 h-6" />
      </a>
      <a
        href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackClick('click_whatsapp')}
        aria-label="Chat on WhatsApp"
        className="w-14 h-14 rounded-full bg-green-500 text-white shadow-lg shadow-green-500/30 hover:bg-green-600 hover:shadow-xl hover:shadow-green-500/40 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center"
      >
        <MessageCircle className="w-6 h-6" />
      </a>
    </div>
  )
}
