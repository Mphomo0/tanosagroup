'use client'

import { Mail, Phone, MapPin, User } from 'lucide-react'
import { motion } from 'motion/react'

const contacts = [
  {
    name: 'Vormmia Sikaundi',
    position: 'Managing Director',
    phone: '084 256 4559',
    email: 'tanosatrading@gmail.com',
  },
  {
    name: 'Elizabeth Motsilili',
    position: 'Director',
    phone: '061 172 3709',
    email: 'tanosabloem@gmail.com',
  },
]

export default function Address() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      <div>
        <h2 className="text-2xl font-bold text-surface-900 mb-2">Get in Touch</h2>
        <p className="text-surface-600">
          We are available for questions, feedback, or collaboration opportunities.
          Let us know how we can help.
        </p>
      </div>

      <div className="bg-white rounded-2xl p-6 shadow-sm border border-surface-100 space-y-4">
        <h3 className="font-semibold text-surface-900">Our Address</h3>
        <div className="space-y-3 text-sm">
          <p className="flex items-start gap-3 text-surface-600">
            <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-brand-500" />
            <span className="break-words">789 Business Park, Bloemfontein, South Africa</span>
          </p>
          <p className="flex items-center gap-3 text-surface-600">
            <Phone className="w-4 h-4 shrink-0 text-brand-500" />
            <span>079 596 6442</span>
          </p>
        </div>
      </div>

      {contacts.map((contact, index) => (
        <div
          key={index}
          className="bg-white rounded-2xl p-6 shadow-sm border border-surface-100 space-y-3"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full gradient-brand flex items-center justify-center text-white text-sm font-bold">
              <User className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-semibold text-surface-900">{contact.name}</h3>
              <p className="text-xs text-surface-500">{contact.position}</p>
            </div>
          </div>
          <div className="space-y-2 text-sm pl-[3.25rem]">
            <p className="flex items-center gap-3 text-surface-600">
              <Phone className="w-4 h-4 shrink-0 text-brand-500" />
              <span>{contact.phone}</span>
            </p>
            <p className="flex items-center gap-3 text-surface-600">
              <Mail className="w-4 h-4 shrink-0 text-brand-500" />
              <a href={`mailto:${contact.email}`} className="hover:text-brand-600 transition-colors break-all">
                {contact.email}
              </a>
            </p>
          </div>
        </div>
      ))}
    </motion.div>
  )
}
