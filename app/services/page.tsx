import type { Metadata } from 'next'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
  UsersRound,
  BriefcaseBusiness,
  Presentation,
  Tractor,
  BrushCleaning,
} from 'lucide-react'
import PageHero from '@/components/global/PageHero'
import CTA from '@/components/global/CTA'
import Testimonials from '@/components/global/Testimonials'
import Consulting from '@/components/sections/services/Consulting'
import BusinessDevelopment from '@/components/sections/services/BusinessDevelopment'
import BrandingMarketing from '@/components/sections/services/BrandingMarketing'
import PlantHire from '@/components/sections/services/PlantHire'
import AdditionalServices from '@/components/sections/services/AdditionalServices'

const pageUrl = 'https://www.tanosagroup.com/services'
const baseUrl = 'https://www.tanosagroup.com'

export const metadata: Metadata = {
  title: { absolute: 'Consulting & Municipal Services | Tanosa Group' },
  description:
    'Expert consulting, business development, branding, and plant hire from Tanosa Group. Serving municipalities and businesses across South Africa.',
  alternates: { canonical: pageUrl },
  openGraph: {
    title: 'Consulting & Municipal Services | Tanosa Group',
    description:
      'Expert consulting, business development, branding, and plant hire from Tanosa Group. Serving municipalities and businesses across South Africa.',
    url: pageUrl,
    siteName: 'Tanosa Group',
    locale: 'en_ZA',
    type: 'website',
    images: [{ url: `${baseUrl}/images/Tanosa_Group_logo.png`, alt: 'Tanosa Group' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Consulting & Municipal Services | Tanosa Group',
    description:
      'Expert consulting, business development, branding, and plant hire from Tanosa Group. Serving municipalities and businesses across South Africa.',
    images: [`${baseUrl}/images/Tanosa_Group_logo.png`],
  },
}

const pageSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      name: 'Municipal Governance Consulting',
      serviceType: 'Municipal Governance Consulting',
      provider: { '@id': `${baseUrl}/#organization` },
      areaServed: 'South Africa',
      url: pageUrl,
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: baseUrl },
        { '@type': 'ListItem', position: 2, name: 'Services', item: pageUrl },
      ],
    },
  ],
}

const tabsData = [
  { value: 'consulting', label: 'Consulting', icon: UsersRound },
  { value: 'business-development', label: 'Business Development & Training', icon: BriefcaseBusiness },
  { value: 'branding-marketing', label: 'Branding & Marketing', icon: Presentation },
  { value: 'plant-hire', label: 'Plant Hire', icon: Tractor },
  { value: 'additional-services', label: 'Additional Services', icon: BrushCleaning },
]

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />
      <PageHero
        badge="What We Offer"
        title={<><span className="text-gradient">Services</span></>}
        subtitle="Comprehensive solutions tailored to drive your business forward with expertise across multiple domains."
      />

      <div className="container-page pb-16">
        <Tabs defaultValue="consulting" className="w-full">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-5 h-auto p-2 bg-white shadow-lg shadow-surface-200/30 border border-surface-200/50 rounded-2xl">
            {tabsData.map((tab) => {
              const Icon = tab.icon
              return (
                <TabsTrigger
                  key={tab.value}
                  value={tab.value}
                  className="flex flex-col items-center gap-2 p-4 rounded-xl data-[state=active]:bg-brand-600 data-[state=active]:text-white data-[state=active]:shadow-md transition-all duration-300 text-surface-600 hover:text-surface-900"
                >
                  <Icon className="!h-5 !w-5" />
                  <span className="text-xs font-medium leading-tight text-center">
                    {tab.label}
                  </span>
                </TabsTrigger>
              )
            })}
          </TabsList>

          <TabsContent value="consulting" className="mt-8">
            <Consulting />
          </TabsContent>
          <TabsContent value="business-development" className="mt-8">
            <BusinessDevelopment />
          </TabsContent>
          <TabsContent value="branding-marketing" className="mt-8">
            <BrandingMarketing />
          </TabsContent>
          <TabsContent value="plant-hire" className="mt-8">
            <PlantHire />
          </TabsContent>
          <TabsContent value="additional-services" className="mt-8">
            <AdditionalServices />
          </TabsContent>
        </Tabs>
      </div>

      <CTA />
      <Testimonials />
    </>
  )
}