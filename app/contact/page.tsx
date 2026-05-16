import type { Metadata } from 'next'
import PageHero from '@/components/global/PageHero'
import Address from '@/components/sections/contactSection/Address'
import ContactForm from '@/components/sections/contactSection/ContactForm'

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Get in touch with Tanosa Group. Contact our team in Bloemfontein for consulting inquiries, quotes, and collaboration opportunities.',
  openGraph: {
    title: 'Contact Us — Tanosa Group',
    description:
      'Reach out to Tanosa Group for municipal governance consulting, business development, and plant hire services.',
  },
}

export default function Contact() {
  return (
    <>
      <PageHero 
        badge="Get in Touch"
        title={<><span className="text-gradient">Contact</span> Us</>}
        subtitle="Have a question or want to discuss how we can help? We'd love to hear from you."
      />

      <div className="container-page pb-16 lg:pb-20">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-10 items-start">
          <Address />
          <ContactForm />
        </div>
      </div>
    </>
  )
}