import type { Metadata } from 'next'
import PageHero from '@/components/global/PageHero'
import AboutSection from '@/components/global/AboutSection'
import CTA from '@/components/global/CTA'
import Testimonials from '@/components/global/Testimonials'

const pageUrl = 'https://www.tanosagroup.com/about'
const baseUrl = 'https://www.tanosagroup.com'

export const metadata: Metadata = {
  title: { absolute: 'About Tanosa Group | Accounting & Business Consulting' },
  description:
    'Learn about Tanosa Group — accounting, tax, business registration, and consulting services in Bloemfontein, Free State. Founded to deliver impactful financial and governance solutions.',
  alternates: { canonical: pageUrl },
  openGraph: {
    title: 'About Tanosa Group | Accounting & Business Consulting',
    description:
      'Learn about Tanosa Group — accounting, tax, business registration, and consulting services in Bloemfontein, Free State.',
    url: pageUrl,
    siteName: 'Tanosa Group',
    locale: 'en_ZA',
    type: 'website',
    images: [{ url: `${baseUrl}/images/Tanosa_Group_logo.png`, alt: 'Tanosa Group' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Tanosa Group | Accounting & Business Consulting',
    description:
      'Learn about Tanosa Group — accounting, tax, business registration, and consulting services in Bloemfontein, Free State.',
    images: [`${baseUrl}/images/Tanosa_Group_logo.png`],
  },
}

const aboutSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: baseUrl },
        { '@type': 'ListItem', position: 2, name: 'About Us', item: pageUrl },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What does Tanosa Group do?',
          acceptedAnswer: { '@type': 'Answer', text: 'Tanosa Group provides accounting, tax returns, business registration, consulting, training, and branding services to businesses and municipalities across Bloemfontein and the Free State.' },
        },
        {
          '@type': 'Question',
          name: 'Where is Tanosa Group located?',
          acceptedAnswer: { '@type': 'Answer', text: 'Our office is at 37 Zastron Street, Bloemfontein Central, Bloemfontein, 9301, South Africa.' },
        },
        {
          '@type': 'Question',
          name: 'How long has Tanosa Group been in business?',
          acceptedAnswer: { '@type': 'Answer', text: 'Tanosa Group has been serving clients since 2009, with over 15 years of experience.' },
        },
      ],
    },
  ],
}

export default function About() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
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