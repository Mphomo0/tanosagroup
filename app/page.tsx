import type { Metadata } from 'next'
import Hero from '@/components/sections/home/Hero'
import AboutSection from '@/components/global/AboutSection'
import ServicesSection from '@/components/global/ServicesSection'
import Testimonials from '@/components/global/Testimonials'
import CTA from '@/components/global/CTA'

export const metadata: Metadata = {
  title: 'Tanosa Group — Municipal Governance & Business Solutions, Bloemfontein',
  description:
    'Premier South African consultancy specializing in municipal governance, accountability, operational improvement, business development, and plant hire services in Bloemfontein and across South Africa.',
  openGraph: {
    title: 'Tanosa Group — Municipal Governance & Business Solutions',
    description:
      'Premier South African consultancy specializing in governance, accountability, and operational improvement for municipalities.',
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
