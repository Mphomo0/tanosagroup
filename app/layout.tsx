import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/global/Navbar'
import Footer from '@/components/global/Footer'
import WhatsAppButton from '@/components/global/WhatsAppButton'
import Analytics from '@/components/global/Analytics'

const inter = Inter({ subsets: ['latin'] })

const baseUrl = 'https://www.tanosagroup.com'

export const viewport: Viewport = {
  themeColor: '#1e3a8a',
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Accounting, Tax & Business Consulting | Tanosa Group',
    template: '%s | Tanosa Group',
  },
  description:
    'Accounting services, tax returns, business registration, and consulting in Bloemfontein, Free State. Serving startups, SMEs, and municipalities across South Africa.',
  keywords: [
    'accounting services Bloemfontein',
    'tax return South Africa',
    'business registration South Africa',
    'accountant Bloemfontein',
    'municipal consulting South Africa',
    'business consulting Free State',
    'tax consultant Bloemfontein',
    'small business accounting',
    'startup business registration',
    'project management',
    'training and capacity building',
    'Tanosa Group',
    'bookkeeping Bloemfontein',
    'SARS tax return',
    'CIPC business registration',
  ],
  openGraph: {
    title: 'Accounting, Tax & Business Consulting | Tanosa Group',
    description:
      'Accounting services, tax returns, business registration, and consulting in Bloemfontein, Free State. Serving startups, SMEs, and municipalities across South Africa.',
    url: baseUrl,
    siteName: 'Tanosa Group',
    locale: 'en_ZA',
    type: 'website',
    images: [{ url: '/images/Tanosa_Group_logo.png', alt: 'Tanosa Group' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Accounting, Tax & Business Consulting | Tanosa Group',
    description:
      'Accounting services, tax returns, business registration, and consulting in Bloemfontein, Free State. Serving startups, SMEs, and municipalities across South Africa.',
    images: ['/images/Tanosa_Group_logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: baseUrl,
  },
  other: {
    'google-site-verification': 'JNGImAA3SJhPN6t7BHUfUXiGjsA-olnCds9ZhWXkMXY',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${baseUrl}/#organization`,
      name: 'Tanosa Group',
      url: baseUrl,
      logo: `${baseUrl}/images/Tanosa_Group_logo.png`,
      foundingDate: '2009',
      description:
        'Accounting, tax, business registration, and consulting services in Bloemfontein, Free State. Serving startups, SMEs, and municipalities across South Africa.',
      sameAs: [
        'https://www.facebook.com/tanosagroup/',
        'https://www.linkedin.com/company/tanosa-group/',
      ],
      address: {
        '@type': 'PostalAddress',
        streetAddress: '37 Zastron Street, Bloemfontein Central',
        addressLocality: 'Bloemfontein',
        addressRegion: 'Free State',
        postalCode: '9301',
        addressCountry: 'ZA',
      },
      contactPoint: [
        {
          '@type': 'ContactPoint',
          telephone: '+27-79-596-6442',
          contactType: 'general',
          email: 'tanosatrading@gmail.com',
        },
        {
          '@type': 'ContactPoint',
          telephone: '+27-84-256-4559',
          contactType: 'sales',
          name: 'Vormmia Sikaundi',
        },
        {
          '@type': 'ContactPoint',
          telephone: '+27-61-172-3709',
          contactType: 'sales',
          name: 'Elizabeth Motsilili',
        },
      ],
      founder: [
        {
          '@type': 'Person',
          name: 'Vormmia Sikaundi',
          jobTitle: 'Managing Director',
        },
        {
          '@type': 'Person',
          name: 'Elizabeth Motsilili',
          jobTitle: 'Director',
        },
      ],
      knowsAbout: [
        'Accounting Services',
        'Tax Returns',
        'Business Registration',
        'Bookkeeping',
        'Payroll',
        'Municipal Governance',
        'Public Accounts Committee Support',
        'Risk Management',
        'Internal Audit',
        'Financial Accounting',
        'Business Development',
        'Project Management',
        'Training and Capacity Building',
        'Fraud Investigations',
        'Crisis Management',
        'ICT Systems',
        'Plant Hire',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': `${baseUrl}/#website`,
      name: 'Tanosa Group',
      url: baseUrl,
      publisher: { '@id': `${baseUrl}/#organization` },
    },
    {
      '@type': 'LocalBusiness',
      '@id': `${baseUrl}/#business`,
      parentOrganization: { '@id': `${baseUrl}/#organization` },
      name: 'Tanosa Group',
      image: `${baseUrl}/images/Tanosa_Group_logo.png`,
      url: baseUrl,
      telephone: '+27-79-596-6442',
      email: 'tanosatrading@gmail.com',
      priceRange: 'R',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '37 Zastron Street, Bloemfontein Central',
        addressLocality: 'Bloemfontein',
        addressRegion: 'Free State',
        postalCode: '9301',
        addressCountry: 'ZA',
      },
      areaServed: [
        {
          '@type': 'City',
          name: 'Bloemfontein',
          sameAs: 'https://en.wikipedia.org/wiki/Bloemfontein',
        },
        {
          '@type': 'City',
          name: 'Botshabelo',
          sameAs: 'https://en.wikipedia.org/wiki/Botshabelo',
        },
        {
          '@type': 'City',
          name: 'Thaba Nchu',
          sameAs: 'https://en.wikipedia.org/wiki/Thaba_Nchu',
        },
        {
          '@type': 'City',
          name: 'Zastron',
          sameAs: 'https://en.wikipedia.org/wiki/Zastron',
        },
        {
          '@type': 'City',
          name: 'QwaQwa',
          sameAs: 'https://en.wikipedia.org/wiki/QwaQwa',
        },
      ],
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: '08:00',
          closes: '17:00',
        },
      ],
    },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-ZA">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.className} bg-surface-50`}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <WhatsAppButton />
        <Analytics />
      </body>
    </html>
  )
}
