'use client'

import React from 'react'
import { MailOpen, Phone, MapPin } from 'lucide-react'
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

const companyAddress = {
  title: 'Our Address',
  address: '789 Business Park, Bloemfontein, South Africa',
  phone: '079 596 6442',
}

export default function Address() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        duration: 0.6,
        ease: [0.42, 0, 1, 1],
      }}
    >
      <h2 className="text-2xl font-bold mb-4">Contact</h2>
      <p className="mb-6">
        We are available for questions, feedback, or collaboration
        opportunities. Let us know how we can help!
      </p>

      <div className="grid grid-cols-1 gap-6">
        {/* Address Card */}
        <div className="w-full bg-white rounded-lg shadow-md p-6 flex items-start">
          <div>
            <h3 className="text-lg font-bold">{companyAddress.title}</h3>
            <p className="flex items-center gap-2 mt-4">
              <MapPin className="w-4 h-4" />
              <span>{companyAddress.address}</span>
            </p>
            <p className="flex items-center gap-2 mt-2">
              <Phone className="w-4 h-4" />
              <span>{companyAddress.phone}</span>
            </p>
          </div>
        </div>

        {/* Contact Cards */}
        {contacts.map((contact, index) => (
          <div
            key={index}
            className="w-full bg-white rounded-lg shadow-md p-6 flex items-start"
          >
            <div>
              <h3 className="text-lg font-bold">{contact.name}</h3>
              <p className="text-sm text-gray-600">{contact.position}</p>
              <p className="flex items-center gap-2 mt-4">
                <Phone className="w-4 h-4" />
                <span>{contact.phone}</span>
              </p>
              <p className="flex items-center gap-2">
                <MailOpen className="w-4 h-4" />
                <span>{contact.email}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  )
}
