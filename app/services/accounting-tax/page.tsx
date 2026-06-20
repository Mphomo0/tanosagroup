import type { Metadata } from 'next'
import Image from 'next/image'
import { CheckCircle2, FileText, Calculator, Receipt, BarChart3, Landmark } from 'lucide-react'
import PageHero from '@/components/global/PageHero'
import Breadcrumbs from '@/components/global/Breadcrumbs'
import CTA from '@/components/global/CTA'
import FAQSection from '@/components/global/FAQSection'

const pageUrl = 'https://www.tanosagroup.com/services/accounting-tax'
const baseUrl = 'https://www.tanosagroup.com'

export const metadata: Metadata = {
  title: { absolute: 'Accounting & Tax Services Bloemfontein | Tanosa Group' },
  description:
    'Professional accounting, tax returns, bookkeeping, and payroll in Bloemfontein, Free State. SARS tax compliance, financial statements, and CFO advisory.',
  alternates: { canonical: pageUrl },
  openGraph: {
    title: 'Accounting & Tax Services Bloemfontein | Tanosa Group',
    description:
      'Professional accounting, tax returns, bookkeeping, and payroll in Bloemfontein, Free State. SARS tax compliance, financial statements, and CFO advisory.',
    url: pageUrl,
    siteName: 'Tanosa Group',
    locale: 'en_ZA',
    type: 'website',
    images: [{ url: `${baseUrl}/images/Tanosa_Group_logo.webp`, alt: 'Tanosa Group Accounting Services' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Accounting & Tax Services Bloemfontein | Tanosa Group',
    description:
      'Professional accounting, tax returns, bookkeeping, and payroll services in Bloemfontein, Free State.',
    images: [`${baseUrl}/images/Tanosa_Group_logo.webp`],
  },
}

const pageSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      name: 'Accounting and Tax Services',
      serviceType: 'Accounting and Tax Services',
      provider: { '@id': `${baseUrl}/#organization` },
      areaServed: ['Bloemfontein', 'Botshabelo', 'Thaba Nchu', 'Zastron', 'QwaQwa', 'Free State'],
      url: pageUrl,
      description: 'Professional accounting, tax returns, bookkeeping, payroll, and financial services in Bloemfontein, Free State.',
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: baseUrl },
        { '@type': 'ListItem', position: 2, name: 'Services', item: `${baseUrl}/services` },
        { '@type': 'ListItem', position: 3, name: 'Accounting & Tax', item: pageUrl },
      ],
    },
  ],
}

const services = [
  {
    icon: Receipt,
    title: 'Tax Returns & SARS Compliance',
    items: [
      'Personal income tax returns (ITR12)',
      'Provisional tax calculations',
      'Company tax returns (ITR14)',
      'VAT submissions',
      'PAYE, UIF, SDL submissions',
      'Tax planning and advisory',
    ],
  },
  {
    icon: FileText,
    title: 'Financial Statements',
    items: [
      'Annual financial statements',
      'Management accounts',
      'Cash flow statements',
      'Income and expense reports',
      'Balance sheet preparation',
      'IFRS compliance',
    ],
  },
  {
    icon: Calculator,
    title: 'Bookkeeping Services',
    items: [
      'Monthly bookkeeping',
      'Bank reconciliations',
      'Debtors and creditors management',
      'Invoice processing',
      'Financial record keeping',
      'Cloud accounting setup',
    ],
  },
  {
    icon: BarChart3,
    title: 'Payroll Services',
    items: [
      'Monthly payroll processing',
      'EMP201 and EMP501 submissions',
      'IRP5 certificates',
      'UIF declarations',
      'Payslip generation',
      'Payroll reconciliation',
    ],
  },
  {
    icon: Landmark,
    title: 'Business Advisory',
    items: [
      'Cash flow forecasting',
      'Budget preparation',
      'Financial strategy',
      'Business feasibility studies',
      'Cost reduction analysis',
      'Profitability analysis',
    ],
  },
]

const faqItems = [
  {
    question: 'What accounting services do you offer in Bloemfontein?',
    answer: 'We offer comprehensive accounting services including tax returns, bookkeeping, payroll, financial statements, and business advisory. We serve clients across Bloemfontein, Botshabelo, Thaba Nchu, Zastron, QwaQwa, and the wider Free State region.',
  },
  {
    question: 'How much does it cost to file a tax return in South Africa?',
    answer: 'Our tax return fees vary depending on complexity. For simple individual returns, we offer competitive flat rates. Contact us for a free quote tailored to your specific needs. We ensure full SARS compliance.',
  },
  {
    question: 'Can you help with backlog SARS submissions?',
    answer: 'Yes. We assist with outstanding tax returns, penalty waivers, voluntary disclosure, and SARS dispute resolution. Our team handles communication with SARS on your behalf.',
  },
  {
    question: 'Do you offer bookkeeping for small businesses in Bloemfontein?',
    answer: 'Absolutely. We provide monthly bookkeeping services for startups, SMEs, and established businesses. We can set up cloud-based accounting so you can access your finances anytime.',
  },
  {
    question: 'What is the process to register a business in South Africa?',
    answer: 'We handle full CIPC business registration including company name reservation, registration of companies and close corporations, tax registration with SARS, and UIF registration. Visit our Business Registration page for details.',
  },
]

export default function AccountingTaxPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <PageHero
        badge="Accounting & Tax"
        title={<><span className="text-gradient">Accounting & Tax</span> Services</>}
        subtitle="Professional accounting, tax compliance, and financial services for businesses and individuals across the Free State."
      />
      <div className="container-page py-8">
        <Breadcrumbs items={[
          { name: 'Services', href: '/services' },
          { name: 'Accounting & Tax' },
        ]} />
      </div>

      <section className="container-page pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-surface-900 mb-6">
              Your Trusted Accountants in <span className="text-gradient">Bloemfontein</span>
            </h2>
            <p className="text-surface-600 leading-relaxed mb-4">
              At Tanosa Group, we provide end-to-end accounting and tax services tailored to
              small businesses, startups, and individuals across Bloemfontein and the Free State.
              Whether you need a simple tax return or full outsourced finance function, our team
              delivers accuracy, compliance, and peace of mind.
            </p>
            <p className="text-surface-600 leading-relaxed">
              We are registered with SARS and stay up to date with all tax law changes so you
              don&apos;t have to. Let us handle the numbers while you focus on growing your business.
            </p>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-brand-200/40 to-brand-100/20 rounded-3xl blur-2xl" />
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/50">
              <Image
                src="/images/lady-image.webp"
                alt="Accounting and tax services Bloemfontein"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div key={index} className="premium-card p-8 hover:-translate-y-1 transition-all duration-300">
                <div className="w-14 h-14 rounded-2xl bg-brand-100 flex items-center justify-center mb-5">
                  <Icon className="w-7 h-7 text-brand-600" />
                </div>
                <h3 className="text-xl font-bold text-surface-900 mb-4">{service.title}</h3>
                <ul className="space-y-3">
                  {service.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-surface-600 text-sm">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 shrink-0 text-brand-500" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </section>

      <FAQSection
        title="Frequently Asked Questions"
        subtitle="Common questions about our accounting and tax services."
        items={faqItems}
      />

      <CTA />
    </>
  )
}
