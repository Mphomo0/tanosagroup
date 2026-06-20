import type { Metadata } from 'next'
import Breadcrumbs from '@/components/global/Breadcrumbs'
import CTA from '@/components/global/CTA'

const baseUrl = 'https://www.tanosagroup.com'
const pageUrl = 'https://www.tanosagroup.com/blog/choosing-business-structure-south-africa'

export const metadata: Metadata = {
  title: { absolute: 'Business Structure Guide South Africa | Tanosa Group' },
  description: 'Sole proprietor, close corporation, or private company? Compare business structures in South Africa and find the best fit for your startup or SME.',
  alternates: { canonical: pageUrl },
  openGraph: {
    title: 'Business Structure Guide South Africa | Tanosa Group',
    description: 'Sole proprietor, close corporation, or private company? Compare business structures in South Africa.',
    url: pageUrl,
    siteName: 'Tanosa Group',
    locale: 'en_ZA',
    type: 'article',
    images: [{ url: `${baseUrl}/images/Tanosa_Group_logo.webp` }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Business Structure Guide South Africa | Tanosa Group',
    description: 'Sole proprietor, close corporation, or private company? Compare business structures in South Africa.',
    images: [`${baseUrl}/images/Tanosa_Group_logo.webp`],
  },
}

export default function BusinessStructurePage() {
  return (
    <>
      <article className="container-page py-8">
        <Breadcrumbs items={[
          { name: 'Blog', href: '/blog' },
          { name: 'Choosing the Right Business Structure in South Africa' },
        ]} />
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold text-surface-900 mb-6 mt-8">Choosing the Right Business Structure in South Africa</h1>
          <div className="flex items-center gap-4 text-sm text-surface-500 mb-8"><span>March 10, 2026</span><span>8 min read</span></div>
          <div className="prose prose-lg max-w-none text-surface-600 leading-relaxed space-y-6">
            <p>One of the most important decisions you will make when starting a business is choosing the right legal structure. Your choice affects liability, tax, compliance, and your ability to raise funding.</p>

            <h2 className="text-2xl font-bold text-surface-900 mt-10 mb-4">Sole Proprietorship</h2>
            <p><strong>Best for:</strong> Freelancers, independent contractors, and very small businesses.</p>
            <p>Simplest and cheapest structure. No separate registration with CIPC required. However, there is no legal separation between you and your business — your personal assets are at risk if the business incurs debt.</p>

            <h2 className="text-2xl font-bold text-surface-900 mt-10 mb-4">Private Company (Pty) Ltd</h2>
            <p><strong>Best for:</strong> Growing businesses with employees, seeking funding or contracts.</p>
            <p>A Pty Ltd is a separate legal entity. Shareholders have limited liability, meaning personal assets are protected. Required to <a href="/blog/how-to-register-a-business-in-south-africa" className="text-brand-600 underline">register with CIPC</a>, SARS, and comply with the Companies Act. More administrative work but offers credibility and protection.</p>

            <h2 className="text-2xl font-bold text-surface-900 mt-10 mb-4">Close Corporation (CC)</h2>
            <p><strong>Best for:</strong> Existing CCs still operating (new CCs can no longer be registered).</p>
            <p>Simpler than a company but being phased out. Existing CCs can continue operating but should consider converting to a Pty Ltd.</p>

            <h2 className="text-2xl font-bold text-surface-900 mt-10 mb-4">Non-Profit Company (NPC)</h2>
            <p><strong>Best for:</strong> Charitable, community, and social organizations.</p>
            <p>Registered with CIPC. Can apply for Section 18A status to receive tax-deductible donations. Income must be used to further the organisation&apos;s objectives.</p>

            <h2 className="text-2xl font-bold text-surface-900 mt-10 mb-4">Trust</h2>
            <p><strong>Best for:</strong> Asset protection, estate planning, and specific business arrangements.</p>
            <p>More complex to set up and administer. Trustees manage assets for the benefit of beneficiaries. Often used in conjunction with other structures.</p>

            <div className="bg-brand-50 rounded-2xl p-8 mt-10">
              <h3 className="text-xl font-bold text-surface-900 mb-3">Not Sure Which Structure is Right for You?</h3>
              <p className="mb-4">Contact Tanosa Group for expert advice on business registration and structuring. We help entrepreneurs across Bloemfontein and the Free State start on the right footing.</p>
              <a href="/contact" className="btn-premium inline-flex items-center gap-2 rounded-xl">Get Advice</a>
            </div>
          </div>
        </div>
      </article>
      <CTA />
    </>
  )
}
