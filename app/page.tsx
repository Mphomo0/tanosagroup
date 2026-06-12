import type { Metadata } from 'next'
import Hero from '@/components/sections/home/Hero'
import AboutSection from '@/components/global/AboutSection'
import ServicesSection from '@/components/global/ServicesSection'
import Testimonials from '@/components/global/Testimonials'
import CTA from '@/components/global/CTA'

const baseUrl = 'https://www.tanosagroup.com'

export const metadata: Metadata = {
  title: { absolute: 'Municipal Governance Consulting | Tanosa Group' },
  description:
    'Municipal governance consultancy in Bloemfontein, South Africa. Expert MPAC support, risk management, accountability, business development, and plant hire.',
  alternates: { canonical: baseUrl },
  openGraph: {
    title: 'Municipal Governance Consulting | Tanosa Group',
    description:
      'Municipal governance consultancy in Bloemfontein, South Africa. Expert MPAC support, risk management, accountability, business development, and plant hire.',
    url: baseUrl,
    siteName: 'Tanosa Group',
    locale: 'en_ZA',
    type: 'website',
    images: [{ url: `${baseUrl}/images/Tanosa_Group_logo.png`, alt: 'Tanosa Group' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Municipal Governance Consulting | Tanosa Group',
    description:
      'Municipal governance consultancy in Bloemfontein, South Africa. Expert MPAC support, risk management, accountability, business development, and plant hire.',
    images: [`${baseUrl}/images/Tanosa_Group_logo.png`],
  },
}

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <ServicesSection />
      <CTA />
      <Testimonials />
    </>
  )
}
