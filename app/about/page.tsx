import type { Metadata } from 'next'
import PageHero from '@/components/global/PageHero'
import AboutSection from '@/components/global/AboutSection'
import CTA from '@/components/global/CTA'
import Testimonials from '@/components/global/Testimonials'

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about Tanosa Group — our journey, mission, and vision. Founded to deliver impactful solutions in municipal governance, accountability, and operational improvement across South Africa.',
  openGraph: {
    title: 'About Us — Tanosa Group',
    description:
      'Our journey of growth and innovation in municipal governance and business solutions across South Africa.',
  },
}

export default function About() {
  return (
    <>
      <PageHero 
        badge="About Us"
        title={<><span className="text-gradient">Story</span></>}
        subtitle="Learn about Tanosa Group — our journey, mission, and vision. Founded to deliver impactful solutions in municipal governance, accountability, and operational improvement across South Africa."
      />
      <AboutSection />
      <CTA />
      <Testimonials />
    </>
  )
}