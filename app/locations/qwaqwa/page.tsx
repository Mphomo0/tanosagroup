import type { Metadata } from 'next'
import { CheckCircle2 } from 'lucide-react'
import PageHero from '@/components/global/PageHero'
import Breadcrumbs from '@/components/global/Breadcrumbs'
import CTA from '@/components/global/CTA'
import FAQSection from '@/components/global/FAQSection'

const pageUrl = 'https://www.tanosagroup.com/locations/qwaqwa'
const baseUrl = 'https://www.tanosagroup.com'

export const metadata: Metadata = {
  title: { absolute: 'Accountant in QwaQwa | Tanosa Group' },
  description:
    'Professional accounting, tax returns, and business registration services in QwaQwa, Free State. Trusted accountants serving the QwaQwa community.',
  alternates: { canonical: pageUrl },
  openGraph: {
    title: 'Accountant in QwaQwa | Tanosa Group',
    description:
      'Professional accounting, tax returns, and business registration services in QwaQwa, Free State.',
    url: pageUrl,
    siteName: 'Tanosa Group',
    locale: 'en_ZA',
    type: 'website',
    images: [{ url: `${baseUrl}/images/Tanosa_Group_logo.png` }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Accountant in QwaQwa | Tanosa Group',
    description:
      'Professional accounting, tax returns, and business registration services in QwaQwa, Free State.',
    images: [`${baseUrl}/images/Tanosa_Group_logo.png`],
  },
}

const pageSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      name: 'Accounting and Tax Services in QwaQwa',
      serviceType: 'Accounting and Tax Services',
      provider: { '@id': `${baseUrl}/#organization` },
      areaServed: 'QwaQwa',
      url: pageUrl,
    },
    { '@type': 'BreadcrumbList', itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: baseUrl },
      { '@type': 'ListItem', position: 2, name: 'Locations', item: baseUrl },
      { '@type': 'ListItem', position: 3, name: 'QwaQwa', item: pageUrl },
    ]},
  ],
}

const faqItems = [
  {
    question: 'Do you serve clients in QwaQwa?',
    answer: 'Yes. We provide accounting, tax, and business registration services to clients in QwaQwa from our Bloemfontein office at 37 Zastron Street.',
  },
  {
    question: 'What services do you offer in QwaQwa?',
    answer: 'Tax returns, bookkeeping, payroll, financial statements, business registration, and consulting for individuals and businesses.',
  },
]

export default function QwaQwaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <PageHero badge="QwaQwa" title={<><span className="text-gradient">Accountant</span> in QwaQwa</>} subtitle="Professional accounting, tax, and business services for QwaQwa, Free State." />
      <div className="container-page py-8">
        <Breadcrumbs items={[{ name: 'Locations', href: '/' }, { name: 'QwaQwa' }]} />
      </div>
      <section className="container-page pb-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-surface-900 mb-6">Serving <span className="text-gradient">QwaQwa</span> with Professional Accounting</h2>
          <p className="text-surface-600 leading-relaxed mb-8">Tanosa Group provides professional accounting, tax compliance, and business registration services to QwaQwa and surrounding areas. Our team is committed to helping you meet your financial goals.</p>
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
                    <li key={i} className="flex items-start gap-2 text-surface-600 text-sm"><CheckCircle2 className="w-4 h-4 mt-0.5 shrink-0 text-brand-500" /><span>{item}</span></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
      <FAQSection title="QwaQwa FAQs" items={faqItems} />
      <CTA />
    </>
  )
}
