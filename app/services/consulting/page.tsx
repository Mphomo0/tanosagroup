import type { Metadata } from 'next'
import { CheckCircle2 } from 'lucide-react'
import PageHero from '@/components/global/PageHero'
import Breadcrumbs from '@/components/global/Breadcrumbs'
import CTA from '@/components/global/CTA'
import FAQSection from '@/components/global/FAQSection'

const pageUrl = 'https://www.tanosagroup.com/services/consulting'
const baseUrl = 'https://www.tanosagroup.com'

export const metadata: Metadata = {
  title: { absolute: 'Business Consulting Services Bloemfontein | Tanosa Group' },
  description:
    'Business consulting, project management, and municipal advisory services in Bloemfontein and Free State. Strategic planning and operational improvement.',
  alternates: { canonical: pageUrl },
  openGraph: {
    title: 'Business Consulting Services Bloemfontein | Tanosa Group',
    description:
      'Business consulting, project management, risk management, and municipal advisory services in Bloemfontein and Free State.',
    url: pageUrl,
    siteName: 'Tanosa Group',
    locale: 'en_ZA',
    type: 'website',
    images: [{ url: `${baseUrl}/images/Tanosa_Group_logo.webp` }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Business Consulting Services Bloemfontein | Tanosa Group',
    description:
      'Business consulting, project management, risk management, and municipal advisory services in Bloemfontein and Free State.',
    images: [`${baseUrl}/images/Tanosa_Group_logo.webp`],
  },
}

const pageSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      name: 'Business and Municipal Consulting',
      serviceType: 'Consulting',
      provider: { '@id': `${baseUrl}/#organization` },
      areaServed: ['Bloemfontein', 'Free State', 'South Africa'],
      url: pageUrl,
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: baseUrl },
        { '@type': 'ListItem', position: 2, name: 'Services', item: `${baseUrl}/services` },
        { '@type': 'ListItem', position: 3, name: 'Consulting', item: pageUrl },
      ],
    },
  ],
}

const faqItems = [
  {
    question: 'What consulting services does Tanosa Group offer?',
    answer: 'We offer business consulting, project management, risk management, compliance monitoring, market research, MPAC support, fraud investigations, and turnaround solutions for businesses and municipalities.',
  },
  {
    question: 'Do you consult for small businesses in Bloemfontein?',
    answer: 'Yes. We provide affordable consulting services tailored to small and medium businesses in Bloemfontein, Botshabelo, Thaba Nchu, Zastron, QwaQwa, and across the Free State.',
  },
  {
    question: 'What is MPAC support?',
    answer: 'MPAC (Municipal Public Accounts Committee) support involves expert analytical reviews of annual reports and performance information to ensure effective oversight and accountability in municipalities.',
  },
]

export default function ConsultingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <PageHero
        badge="Consulting"
        title={<><span className="text-gradient">Consulting</span> Services</>}
        subtitle="Expert business and municipal consulting to drive growth, efficiency, and accountability."
      />
      <div className="container-page py-8">
        <Breadcrumbs items={[
          { name: 'Services', href: '/services' },
          { name: 'Consulting' },
        ]} />
      </div>

      <section className="container-page pb-16">
        <div className="max-w-3xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-surface-900 mb-6">
            Strategic Consulting for <span className="text-gradient">Business & Government</span>
          </h2>
          <p className="text-surface-600 leading-relaxed mb-4">
            Tanosa Group delivers practical consulting solutions that help businesses and
            municipalities achieve measurable results. From strategic planning to operational
            execution, our team brings decades of combined experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            { title: 'Technical Support to MPAC', items: ['Analytical review of annual reports', 'Performance information assessment', 'Oversight committee support', 'Recommendation reports'] },
            { title: 'Business Development', items: ['Feasibility studies', 'Strategic planning', 'Economic development strategies', 'Growth planning'] },
            { title: 'Risk Management & Compliance', items: ['Risk assessments', 'Internal audits', 'Compliance monitoring', 'Policy development'] },
            { title: 'Project Management', items: ['End-to-end project management', 'Planning and execution', 'Monitoring and reporting', 'Risk management'] },
            { title: 'Fraud Investigations', items: ['Forensic audits', 'Expenditure analysis', 'Fraud prevention', 'Recovery strategies'] },
            { title: 'Crisis Management', items: ['Turnaround strategies', 'Change management', 'Business continuity', 'Crisis communication'] },
          ].map((service, index) => (
            <div key={index} className="premium-card p-8 hover:-translate-y-1 transition-all duration-300">
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
          ))}
        </div>
      </section>

      <FAQSection
        title="Consulting FAQs"
        items={faqItems}
      />

      <CTA />
    </>
  )
}
