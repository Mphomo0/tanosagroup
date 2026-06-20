import type { Metadata } from 'next'
import Image from 'next/image'
import { CheckCircle2, Building2, FileCheck, UserPlus, ScrollText, Shield } from 'lucide-react'
import PageHero from '@/components/global/PageHero'
import Breadcrumbs from '@/components/global/Breadcrumbs'
import CTA from '@/components/global/CTA'
import FAQSection from '@/components/global/FAQSection'

const pageUrl = 'https://www.tanosagroup.com/services/business-registration'
const baseUrl = 'https://www.tanosagroup.com'

export const metadata: Metadata = {
  title: { absolute: 'Business Registration Services | Tanosa Group' },
  description:
    'Company and business registration in South Africa. CIPC, close corporation, non-profit, tax registration, and B-BBEE consulting in Bloemfontein and Free State.',
  alternates: { canonical: pageUrl },
  openGraph: {
    title: 'Business Registration Services | Tanosa Group',
    description:
      'Company and business registration in South Africa. CIPC, close corporation, non-profit, tax registration, and B-BBEE consulting in Bloemfontein and Free State.',
    url: pageUrl,
    siteName: 'Tanosa Group',
    locale: 'en_ZA',
    type: 'website',
    images: [{ url: `${baseUrl}/images/Tanosa_Group_logo.webp`, alt: 'Tanosa Group Business Registration' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Business Registration Services | Tanosa Group',
    description:
      'Business and company registration in South Africa. CIPC registration, close corporation, non-profit, and tax registration.',
    images: [`${baseUrl}/images/Tanosa_Group_logo.webp`],
  },
}

const pageSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      name: 'Business Registration Services',
      serviceType: 'Business Registration',
      provider: { '@id': `${baseUrl}/#organization` },
      areaServed: ['Bloemfontein', 'Botshabelo', 'Thaba Nchu', 'Zastron', 'QwaQwa', 'Free State', 'South Africa'],
      url: pageUrl,
      description: 'Company registration, CIPC compliance, close corporation registration, non-profit registration, and tax registration in South Africa.',
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: baseUrl },
        { '@type': 'ListItem', position: 2, name: 'Services', item: `${baseUrl}/services` },
        { '@type': 'ListItem', position: 3, name: 'Business Registration', item: pageUrl },
      ],
    },
  ],
}

const faqItems = [
  {
    question: 'How long does it take to register a company in South Africa?',
    answer: 'CIPC company registration typically takes 1-5 business days. We handle the entire process including name reservation, registration, and tax number application.',
  },
  {
    question: 'What documents are needed to register a business?',
    answer: 'You need a valid ID or passport, proof of residential address, and a proposed company name. We guide you through the full document checklist.',
  },
  {
    question: 'How much does business registration cost in South Africa?',
    answer: 'CIPC registration fees vary by entity type. Contact us for a detailed quote including our professional service fee and all statutory costs.',
  },
  {
    question: 'Can you register a non-profit company (NPC)?',
    answer: 'Yes. We handle the registration of non-profit companies, trusts, and Section 18A status applications with CIPC and SARS.',
  },
]

export default function BusinessRegistrationPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <PageHero
        badge="Business Registration"
        title={<><span className="text-gradient">Business Registration</span> Services</>}
        subtitle="Register your company, close corporation, or non-profit with CIPC. Fast, reliable, and hassle-free."
      />
      <div className="container-page py-8">
        <Breadcrumbs items={[
          { name: 'Services', href: '/services' },
          { name: 'Business Registration' },
        ]} />
      </div>

      <section className="container-page pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="order-2 lg:order-none">
            <Image
              src="/images/woman.webp"
              alt="Business registration services South Africa"
              width={600}
              height={400}
              className="w-full h-auto object-cover rounded-2xl shadow-lg"
            />
          </div>
          <div className="order-1 lg:order-none">
            <h2 className="text-2xl sm:text-3xl font-bold text-surface-900 mb-6">
              Start Your Business the <span className="text-gradient">Right Way</span>
            </h2>
            <p className="text-surface-600 leading-relaxed mb-4">
              Starting a business in South Africa involves navigating CIPC, SARS, and other
              regulatory bodies. Let Tanosa Group handle all the paperwork so you can focus
              on building your dream.
            </p>
            <p className="text-surface-600 leading-relaxed">
              We assist entrepreneurs across Bloemfontein, Botshabelo, Thaba Nchu, Zastron,
              and QwaQwa with fast, professional business registration.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: Building2,
              title: 'Company Registration',
              items: ['Private Company (Pty) Ltd', 'Name reservation', 'Memorandum of Incorporation', 'Director appointments', 'Share issuance', 'CIPC compliance'],
            },
            {
              icon: FileCheck,
              title: 'CC & NPC Registration',
              items: ['Close Corporation reinstatement', 'Non-Profit Company (NPC)', 'Trust registration', 'Section 18A status', 'Amendments and changes', 'Annual returns filing'],
            },
            {
              icon: UserPlus,
              title: 'Tax Registration',
              items: ['Income tax registration', 'VAT registration', 'PAYE, UIF, SDL registration', 'Tax number application', 'Tax clearance certificate', 'SARS compliance'],
            },
            {
              icon: ScrollText,
              title: 'Business Licenses',
              items: ['Municipal business licenses', 'Health and safety certificates', 'FSCA licenses', 'Sector-specific permits', 'License renewals', 'Compliance audits'],
            },
            {
              icon: Shield,
              title: 'B-BBEE Consulting',
              items: ['B-BBEE certificate application', 'Level 1 to 4 contributions', 'Skills development planning', 'Enterprise development', 'Supplier development', 'B-BBEE verification support'],
            },
            {
              icon: CheckCircle2,
              title: 'Post-Registration Services',
              items: ['Company secretarial services', 'Registered address', 'Annual return filing', 'Director changes', 'Share transfers', 'Company deregistration'],
            },
          ].map((service, index) => {
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
        title="Business Registration FAQs"
        subtitle="Common questions about registering a business in South Africa."
        items={faqItems}
      />

      <CTA />
    </>
  )
}
