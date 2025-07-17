import React from 'react'
import { MailOpen, Phone } from 'lucide-react'

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
    <div>
      <h2 className='text-2xl font-bold mb-4'>Contact</h2>
      <p className='mb-6'>
        We are available for questions, feedback, or collaboration
        opportunities. Let us know how we can help!
      </p>
      <div className='grid grid-cols-1 gap-6'>
        {contacts.map((contact, index) => (
          <div
            key={index}
            className='w-full bg-white rounded-lg shadow-md p-6 flex items-center'
          >
            <div>
              <h3 className='text-lg font-bold'>{contact.name}</h3>
              <p className='text-sm text-gray-600'>{contact.position}</p>
              <p className='flex items-center gap-2 mt-4'>
                <Phone className='w-4 h-4' />
                <span>{contact.phone}</span>
              </p>
              <p className='flex items-center gap-2'>
                <MailOpen className='w-4 h-4' />
                <span>{contact.email}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
