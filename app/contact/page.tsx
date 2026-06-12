import type { Metadata } from 'next'
import PageHero from '@/components/global/PageHero'
import Address from '@/components/sections/contactSection/Address'
import ContactForm from '@/components/sections/contactSection/ContactForm'

const pageUrl = 'https://www.tanosagroup.com/contact'
const baseUrl = 'https://www.tanosagroup.com'

export const metadata: Metadata = {
  title: { absolute: 'Contact Tanosa Group | Bloemfontein, SA' },
  description:
    'Get in touch with Tanosa Group. Contact our team in Bloemfontein for consulting inquiries, quotes, and collaboration opportunities.',
  alternates: { canonical: pageUrl },
  openGraph: {
    title: 'Contact Tanosa Group | Bloemfontein, SA',
    description:
      'Get in touch with Tanosa Group. Contact our team in Bloemfontein for consulting inquiries, quotes, and collaboration opportunities.',
    url: pageUrl,
    siteName: 'Tanosa Group',
    locale: 'en_ZA',
    type: 'website',
    images: [{ url: `${baseUrl}/images/Tanosa_Group_logo.png`, alt: 'Tanosa Group' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Tanosa Group | Bloemfontein, SA',
    description:
      'Get in touch with Tanosa Group. Contact our team in Bloemfontein for consulting inquiries, quotes, and collaboration opportunities.',
    images: [`${baseUrl}/images/Tanosa_Group_logo.png`],
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: baseUrl },
    { '@type': 'ListItem', position: 2, name: 'Contact Us', item: pageUrl },
  ],
}

export default function Contact() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <PageHero
        badge="Get in Touch"
        title={
          <>
            <span className="text-gradient">Contact</span> Us
          </>
        }
        subtitle="Have a question or want to discuss how we can help? We'd love to hear from you."
      />

      <div className="container-page pb-16 lg:pb-20">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-10 items-start py-8 lg:py-36">
          <Address />
          <ContactForm />
        </div>
      </div>
    </>
  )
}
