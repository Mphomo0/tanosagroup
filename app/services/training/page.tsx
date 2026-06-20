import type { Metadata } from 'next'
import { CheckCircle2, GraduationCap, Users, BookOpen, Award, Target, TrendingUp } from 'lucide-react'
import PageHero from '@/components/global/PageHero'
import Breadcrumbs from '@/components/global/Breadcrumbs'
import CTA from '@/components/global/CTA'
import FAQSection from '@/components/global/FAQSection'

const pageUrl = 'https://www.tanosagroup.com/services/training'
const baseUrl = 'https://www.tanosagroup.com'

export const metadata: Metadata = {
  title: { absolute: 'Training & Capacity Building | Tanosa Group' },
  description:
    'Professional training and capacity building in Bloemfontein, Free State. Business management, financial oversight, and leadership workshops.',
  alternates: { canonical: pageUrl },
  openGraph: {
    title: 'Training & Capacity Building | Tanosa Group',
    description:
      'Professional training and capacity building programs in Bloemfontein, Free State. Business management, financial oversight, and leadership workshops.',
    url: pageUrl,
    siteName: 'Tanosa Group',
    locale: 'en_ZA',
    type: 'website',
    images: [{ url: `${baseUrl}/images/Tanosa_Group_logo.webp` }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Training & Capacity Building | Tanosa Group',
    description:
      'Professional training and capacity building programs in Bloemfontein, Free State.',
    images: [`${baseUrl}/images/Tanosa_Group_logo.webp`],
  },
}

const pageSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      name: 'Training and Capacity Building',
      serviceType: 'Professional Training',
      provider: { '@id': `${baseUrl}/#organization` },
      areaServed: ['Bloemfontein', 'Free State', 'South Africa'],
      url: pageUrl,
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: baseUrl },
        { '@type': 'ListItem', position: 2, name: 'Services', item: `${baseUrl}/services` },
        { '@type': 'ListItem', position: 3, name: 'Training', item: pageUrl },
      ],
    },
  ],
}

const faqItems = [
  {
    question: 'What training programs do you offer?',
    answer: 'We offer business development training, project management, financial oversight, leadership workshops, governance training, and custom programs tailored to your organization.',
  },
  {
    question: 'Do you offer on-site training in Bloemfontein?',
    answer: 'Yes. We conduct training at our Bloemfontein office, at your premises, or online. We serve clients across the Free State including Botshabelo, Thaba Nchu, Zastron, and QwaQwa.',
  },
  {
    question: 'Can training be customized for my organization?',
    answer: 'Absolutely. We design tailored training programs based on your specific needs, industry, and skill gaps. Contact us for a consultation.',
  },
]

export default function TrainingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <PageHero
        badge="Training"
        title={<><span className="text-gradient">Training</span> Programs</>}
        subtitle="Empower your team with professional training and capacity building programs."
      />
      <div className="container-page py-8">
        <Breadcrumbs items={[
          { name: 'Services', href: '/services' },
          { name: 'Training' },
        ]} />
      </div>

      <section className="container-page pb-16">
        <div className="max-w-3xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-surface-900 mb-6">
            Build Skills, Drive <span className="text-gradient">Performance</span>
          </h2>
          <p className="text-surface-600 leading-relaxed">
            Tanosa Group offers professional training programs designed to build capacity
            and improve performance across organizations. Our workshops are practical,
            engaging, and tailored to your needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { icon: GraduationCap, title: 'Business Management', items: ['Strategic planning', 'Financial management', 'Operations management', 'Business writing', 'Customer service excellence'] },
            { icon: Target, title: 'Project Management', items: ['Project planning', 'Risk management', 'Monitoring & evaluation', 'Stakeholder engagement', 'Reporting'] },
            { icon: Users, title: 'Leadership Development', items: ['Team leadership', 'Change management', 'Conflict resolution', 'Decision making', 'Coaching skills'] },
            { icon: BookOpen, title: 'Financial Oversight', items: ['Budget management', 'Financial reporting', 'Audit preparation', 'MPAC training', 'Supply chain management'] },
            { icon: TrendingUp, title: 'Business Development', items: ['Entrepreneurship skills', 'Business planning', 'Marketing strategy', 'Sales skills', 'Client management'] },
            { icon: Award, title: 'Governance & Compliance', items: ['Corporate governance', 'Regulatory compliance', 'Ethics training', 'Risk awareness', 'Policy development'] },
          ].map((program, index) => {
            const Icon = program.icon
            return (
              <div key={index} className="premium-card p-8 hover:-translate-y-1 transition-all duration-300">
                <div className="w-14 h-14 rounded-2xl bg-brand-100 flex items-center justify-center mb-5">
                  <Icon className="w-7 h-7 text-brand-600" />
                </div>
                <h3 className="text-xl font-bold text-surface-900 mb-4">{program.title}</h3>
                <ul className="space-y-3">
                  {program.items.map((item, i) => (
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
        title="Training FAQs"
        items={faqItems}
      />

      <CTA />
    </>
  )
}
