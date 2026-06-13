import type { Metadata } from 'next'
import Hero from '@/components/sections/home/Hero'
import AboutSection from '@/components/global/AboutSection'
import ServicesSection from '@/components/global/ServicesSection'
import Testimonials from '@/components/global/Testimonials'
import CTA from '@/components/global/CTA'

const baseUrl = 'https://www.tanosagroup.com'

export const metadata: Metadata = {
  title: { absolute: 'Accounting, Tax & Business Consulting | Tanosa Group' },
  description:
    'Expert accounting, tax returns, business registration, and consulting in Bloemfontein, Free State. Serving startups, SMEs, and municipalities since 2009.',
  alternates: { canonical: baseUrl },
  openGraph: {
    title: 'Accounting, Tax & Business Consulting | Tanosa Group',
    description:
      'Expert accounting, tax returns, business registration, and consulting in Bloemfontein, Free State. Serving startups, SMEs, and municipalities since 2009.',
    url: baseUrl,
    siteName: 'Tanosa Group',
    locale: 'en_ZA',
    type: 'website',
    images: [{ url: `${baseUrl}/images/Tanosa_Group_logo.png`, alt: 'Tanosa Group' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Accounting, Tax & Business Consulting | Tanosa Group',
    description:
      'Expert accounting, tax returns, business registration, and consulting in Bloemfontein, Free State. Serving startups, SMEs, and municipalities since 2009.',
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
