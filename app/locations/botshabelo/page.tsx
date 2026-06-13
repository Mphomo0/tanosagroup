import type { Metadata } from 'next'
import { CheckCircle2 } from 'lucide-react'
import PageHero from '@/components/global/PageHero'
import Breadcrumbs from '@/components/global/Breadcrumbs'
import CTA from '@/components/global/CTA'
import FAQSection from '@/components/global/FAQSection'

const pageUrl = 'https://www.tanosagroup.com/locations/botshabelo'
const baseUrl = 'https://www.tanosagroup.com'

export const metadata: Metadata = {
  title: { absolute: 'Accountant in Botshabelo | Tanosa Group' },
  description:
    'Professional accounting, tax returns, and business registration services in Botshabelo, Free State. Trusted accountants serving the Botshabelo community.',
  alternates: { canonical: pageUrl },
  openGraph: {
    title: 'Accountant in Botshabelo | Tanosa Group',
    description:
      'Professional accounting, tax returns, and business registration services in Botshabelo, Free State.',
    url: pageUrl,
    siteName: 'Tanosa Group',
    locale: 'en_ZA',
    type: 'website',
    images: [{ url: `${baseUrl}/images/Tanosa_Group_logo.png` }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Accountant in Botshabelo | Tanosa Group',
    description:
      'Professional accounting, tax returns, and business registration services in Botshabelo, Free State.',
    images: [`${baseUrl}/images/Tanosa_Group_logo.png`],
  },
}

const pageSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      name: 'Accounting and Tax Services in Botshabelo',
      serviceType: 'Accounting and Tax Services',
      provider: { '@id': `${baseUrl}/#organization` },
      areaServed: 'Botshabelo',
      url: pageUrl,
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: baseUrl },
        { '@type': 'ListItem', position: 2, name: 'Locations', item: baseUrl },
        { '@type': 'ListItem', position: 3, name: 'Botshabelo', item: pageUrl },
      ],
    },
  ],
}

const faqItems = [
  {
    question: 'Do you serve clients in Botshabelo?',
    answer: 'Yes. Tanosa Group provides accounting, tax, and business registration services to clients in Botshabelo. Visit our Bloemfontein office or contact us for a consultation.',
  },
  {
    question: 'What accounting services are available in Botshabelo?',
    answer: 'We offer tax returns, bookkeeping, financial statements, payroll, business registration, and consulting services to Botshabelo residents and businesses.',
  },
  {
    question: 'How do I get a tax return done in Botshabelo?',
    answer: 'Contact us by phone, WhatsApp, or email. We can handle your tax return remotely or schedule an appointment at our Bloemfontein office at 37 Zastron Street.',
  },
]

export default function BotshabeloPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <PageHero
        badge="Botshabelo"
        title={<><span className="text-gradient">Accountant</span> in Botshabelo</>}
        subtitle="Professional accounting, tax, and business services for Botshabelo, Free State."
      />
      <div className="container-page py-8">
        <Breadcrumbs items={[
          { name: 'Locations', href: '/' },
          { name: 'Botshabelo' },
        ]} />
      </div>

      <section className="container-page pb-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-surface-900 mb-6">
            Your Trusted Accountants Serving <span className="text-gradient">Botshabelo</span>
          </h2>
          <p className="text-surface-600 leading-relaxed mb-4">
            Tanosa Group provides professional accounting, tax compliance, and business
            registration services to the Botshabelo community. We understand the unique
            financial needs of businesses and individuals in the area.
          </p>
          <p className="text-surface-600 leading-relaxed mb-8">
            Whether you need a tax return filed, a business registered, or bookkeeping
            support, our team is here to help. We serve Botshabelo from our Bloemfontein
            office at 37 Zastron Street.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {[
              { title: 'Tax Returns', items: ['Personal tax returns', 'Business tax returns', 'VAT submissions', 'Tax planning'] },
              { title: 'Business Registration', items: ['Company registration', 'Close corporation', 'Tax registration', 'B-BBEE consulting'] },
              { title: 'Bookkeeping', items: ['Monthly bookkeeping', 'Financial records', 'Payroll processing', 'Bank reconciliations'] },
              { title: 'Consulting', items: ['Business advisory', 'Feasibility studies', 'Project management', 'Training programs'] },
            ].map((service, index) => (
              <div key={index} className="premium-card p-6">
                <h3 className="text-lg font-bold text-surface-900 mb-3">{service.title}</h3>
                <ul className="space-y-2">
                  {service.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-surface-600 text-sm">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 shrink-0 text-brand-500" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQSection
        title="Botshabelo FAQs"
        items={faqItems}
      />

      <CTA />
    </>
  )
}
