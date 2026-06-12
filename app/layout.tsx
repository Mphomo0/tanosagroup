import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/global/Navbar'
import Footer from '@/components/global/Footer'

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
    default: 'Municipal Governance & Business Solutions | Tanosa Group',
    template: '%s | Tanosa Group',
  },
  description:
    'Municipal governance consultancy in Bloemfontein, South Africa. Expert MPAC support, risk management, accountability, business development, and plant hire.',
  keywords: [
    'municipal consulting South Africa',
    'MPAC support',
    'governance consulting Bloemfontein',
    'business development',
    'project management',
    'plant hire',
    'risk management',
    'municipal finance',
    'training and capacity building',
    'Tanosa Group',
  ],
  openGraph: {
    title: 'Municipal Governance Consulting | Tanosa Group',
    description:
      'Municipal governance consultancy in Bloemfontein, South Africa. Expert MPAC support, risk management, accountability, business development, and plant hire.',
    url: baseUrl,
    siteName: 'Tanosa Group',
    locale: 'en_ZA',
    type: 'website',
    images: [{ url: '/images/Tanosa_Group_logo.png', alt: 'Tanosa Group' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Municipal Governance Consulting | Tanosa Group',
    description:
      'Municipal governance consultancy in Bloemfontein, South Africa. Expert MPAC support, risk management, accountability, business development, and plant hire.',
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
        'Premier service provider specializing in governance, accountability, and operational improvement for municipalities across South Africa.',
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
      address: {
        '@type': 'PostalAddress',
        streetAddress: '37 Zastron Street, Bloemfontein Central',
        addressLocality: 'Bloemfontein',
        addressRegion: 'Free State',
        postalCode: '9301',
        addressCountry: 'ZA',
      },
      areaServed: 'South Africa',
      priceRange: 'R',
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
      </body>
    </html>
  )
}
