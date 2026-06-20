import type { Metadata } from 'next'
import { CheckCircle2, Palette, Megaphone, Globe, Camera, PenTool, TrendingUp } from 'lucide-react'
import PageHero from '@/components/global/PageHero'
import Breadcrumbs from '@/components/global/Breadcrumbs'
import CTA from '@/components/global/CTA'
import FAQSection from '@/components/global/FAQSection'

const pageUrl = 'https://www.tanosagroup.com/services/branding-marketing'
const baseUrl = 'https://www.tanosagroup.com'

export const metadata: Metadata = {
  title: { absolute: 'Branding & Marketing Services | Tanosa Group' },
  description:
    'Professional branding, graphic design, digital marketing, and web development services in Bloemfontein, Free State. Build your brand with Tanosa Group.',
  alternates: { canonical: pageUrl },
  openGraph: {
    title: 'Branding & Marketing Services | Tanosa Group',
    description:
      'Professional branding, graphic design, digital marketing, and web development services in Bloemfontein, Free State.',
    url: pageUrl,
    siteName: 'Tanosa Group',
    locale: 'en_ZA',
    type: 'website',
    images: [{ url: `${baseUrl}/images/Tanosa_Group_logo.webp` }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Branding & Marketing Services | Tanosa Group',
    description:
      'Professional branding, graphic design, digital marketing, and web development services in Bloemfontein, Free State.',
    images: [`${baseUrl}/images/Tanosa_Group_logo.webp`],
  },
}

const pageSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      name: 'Branding and Marketing Services',
      serviceType: 'Branding and Marketing',
      provider: { '@id': `${baseUrl}/#organization` },
      areaServed: ['Bloemfontein', 'Free State', 'South Africa'],
      url: pageUrl,
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: baseUrl },
        { '@type': 'ListItem', position: 2, name: 'Services', item: `${baseUrl}/services` },
        { '@type': 'ListItem', position: 3, name: 'Branding & Marketing', item: pageUrl },
      ],
    },
  ],
}

const faqItems = [
  {
    question: 'What branding services do you offer?',
    answer: 'We offer logo design, brand identity development, graphic design, web design and development, social media management, SEO, digital marketing, and content creation.',
  },
  {
    question: 'Do you offer website design for small businesses?',
    answer: 'Yes. We design and develop professional websites for small businesses across Bloemfontein and the Free State. We build on platforms like Next.js, WordPress, and Shopify.',
  },
  {
    question: 'How can digital marketing help my business?',
    answer: 'Digital marketing helps you reach more customers online through SEO, social media, paid ads, and content marketing. We create strategies tailored to your business goals.',
  },
]

export default function BrandingMarketingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <PageHero
        badge="Branding & Marketing"
        title={<><span className="text-gradient">Branding & Marketing</span> Services</>}
        subtitle="Build your brand and reach more customers with professional branding, design, and digital marketing."
      />
      <div className="container-page py-8">
        <Breadcrumbs items={[
          { name: 'Services', href: '/services' },
          { name: 'Branding & Marketing' },
        ]} />
      </div>

      <section className="container-page pb-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { icon: Palette, title: 'Brand Identity', items: ['Logo design', 'Brand guidelines', 'Stationery design', 'Brand strategy', 'Visual identity', 'Brand messaging'] },
            { icon: PenTool, title: 'Graphic Design', items: ['Brochures & flyers', 'Business cards', 'Social media graphics', 'Presentation design', 'Signage design', 'Corporate identity'] },
            { icon: Globe, title: 'Web Development', items: ['Website design', 'E-commerce development', 'SEO optimization', 'Mobile responsive', 'CMS integration', 'Website maintenance'] },
            { icon: Megaphone, title: 'Digital Marketing', items: ['Social media management', 'Paid advertising', 'Email marketing', 'Content marketing', 'Influencer marketing', 'Analytics & reporting'] },
            { icon: Camera, title: 'Content Creation', items: ['Photography', 'Video production', 'Copywriting', 'Content strategy', 'Blog writing', 'Brand storytelling'] },
            { icon: TrendingUp, title: 'SEO & Growth', items: ['Search engine optimization', 'Local SEO', 'Keyword research', 'Google Business Profile', 'Performance tracking', 'Conversion optimization'] },
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
        title="Branding & Marketing FAQs"
        items={faqItems}
      />

      <CTA />
    </>
  )
}
