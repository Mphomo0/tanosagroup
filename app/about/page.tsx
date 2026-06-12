import type { Metadata } from 'next'
import PageHero from '@/components/global/PageHero'
import AboutSection from '@/components/global/AboutSection'
import CTA from '@/components/global/CTA'
import Testimonials from '@/components/global/Testimonials'

const pageUrl = 'https://www.tanosagroup.com/about'
const baseUrl = 'https://www.tanosagroup.com'

export const metadata: Metadata = {
  title: { absolute: 'About Tanosa Group | Governance Consultants' },
  description:
    'Learn about Tanosa Group — our journey, mission, and vision. Founded to deliver impactful solutions in municipal governance and operational improvement, SA.',
  alternates: { canonical: pageUrl },
  openGraph: {
    title: 'About Tanosa Group | Governance Consultants',
    description:
      'Learn about Tanosa Group — our journey, mission, and vision. Founded to deliver impactful solutions in municipal governance and operational improvement, SA.',
    url: pageUrl,
    siteName: 'Tanosa Group',
    locale: 'en_ZA',
    type: 'website',
    images: [{ url: `${baseUrl}/images/Tanosa_Group_logo.png`, alt: 'Tanosa Group' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Tanosa Group | Governance Consultants',
    description:
      'Learn about Tanosa Group — our journey, mission, and vision. Founded to deliver impactful solutions in municipal governance and operational improvement, SA.',
    images: [`${baseUrl}/images/Tanosa_Group_logo.png`],
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: baseUrl },
    { '@type': 'ListItem', position: 2, name: 'About Us', item: pageUrl },
  ],
}

export default function About() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
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