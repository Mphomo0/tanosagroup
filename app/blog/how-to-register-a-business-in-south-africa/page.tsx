import type { Metadata } from 'next'
import Breadcrumbs from '@/components/global/Breadcrumbs'
import CTA from '@/components/global/CTA'

const baseUrl = 'https://www.tanosagroup.com'
const pageUrl = 'https://www.tanosagroup.com/blog/how-to-register-a-business-in-south-africa'

export const metadata: Metadata = {
  title: { absolute: 'How to Register a Business in South Africa | Tanosa Group' },
  description: 'Complete step-by-step guide to registering a business in South Africa with CIPC, SARS tax registration, and compliance requirements for 2026.',
  alternates: { canonical: pageUrl },
  openGraph: {
    title: 'How to Register a Business in South Africa | Tanosa Group',
    description: 'Complete step-by-step guide to registering a business in South Africa with CIPC, SARS tax registration, and compliance requirements.',
    url: pageUrl,
    siteName: 'Tanosa Group',
    locale: 'en_ZA',
    type: 'article',
    images: [{ url: `${baseUrl}/images/Tanosa_Group_logo.webp` }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Register a Business in South Africa | Tanosa Group',
    description: 'Complete step-by-step guide to registering a business in South Africa with CIPC, SARS tax registration, and compliance requirements.',
    images: [`${baseUrl}/images/Tanosa_Group_logo.webp`],
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      headline: 'How to Register a Business in South Africa: Step by Step Guide',
      description: 'Complete step-by-step guide to registering a business in South Africa with CIPC, SARS, and compliance requirements.',
      author: { '@type': 'Organization', name: 'Tanosa Group' },
      publisher: { '@id': `${baseUrl}/#organization` },
      datePublished: '2026-06-01',
      dateModified: '2026-06-01',
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: baseUrl },
        { '@type': 'ListItem', position: 2, name: 'Blog', item: `${baseUrl}/blog` },
        { '@type': 'ListItem', position: 3, name: 'How to Register a Business in South Africa', item: pageUrl },
      ],
    },
  ],
}

export default function BlogPost() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <article className="container-page py-8">
        <Breadcrumbs items={[
          { name: 'Blog', href: '/blog' },
          { name: 'How to Register a Business in South Africa' },
        ]} />
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold text-surface-900 mb-6 mt-8">
            How to Register a Business in South Africa: Step by Step Guide
          </h1>
          <div className="flex items-center gap-4 text-sm text-surface-500 mb-8">
            <span>June 1, 2026</span>
            <span>6 min read</span>
          </div>

          <div className="prose prose-lg max-w-none text-surface-600 leading-relaxed space-y-6">
            <p>
              Starting a business in South Africa is an exciting journey. But before you can start
              trading, you need to register your business with the correct authorities. This guide
              walks you through every step of the process.
            </p>

            <h2 className="text-2xl font-bold text-surface-900 mt-10 mb-4">Step 1: Choose Your Business Structure</h2>
            <p>Before registering, see our guide on <a href="/blog/choosing-business-structure-south-africa" className="text-brand-600 underline">choosing the right business structure</a> for your business:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Private Company (Pty) Ltd</strong> — Most common for small to medium businesses. Limited liability, separate legal entity.</li>
              <li><strong>Close Corporation (CC)</strong> — Being phased out but still in use. Simpler structure.</li>
              <li><strong>Sole Proprietorship</strong> — Simplest form, but no separation between personal and business assets.</li>
              <li><strong>Non-Profit Company (NPC)</strong> — For charitable and community organizations.</li>
              <li><strong>Trust</strong> — For specific asset protection and estate planning purposes.</li>
            </ul>

            <h2 className="text-2xl font-bold text-surface-900 mt-10 mb-4">Step 2: Reserve Your Company Name</h2>
            <p>
              Submit up to 4 preferred names to CIPC for reservation. The name reservation
              typically takes 1-3 days. We recommend having alternatives in case your first
              choice is unavailable.
            </p>

            <h2 className="text-2xl font-bold text-surface-900 mt-10 mb-4">Step 3: Register with CIPC</h2>
            <p>
              Once your name is approved, register your company on the CIPC e-services portal.
              You will need the Memorandum of Incorporation (MOI), director details, and
              registered address. This step usually takes 3-5 business days.
            </p>

            <h2 className="text-2xl font-bold text-surface-900 mt-10 mb-4">Step 4: Register for Tax</h2>
            <p>After CIPC registration, you must register with SARS for:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Income Tax</li>
              <li>VAT (if annual turnover exceeds R1 million)</li>
              <li>PAYE, UIF, and SDL (if you have employees)</li>
            </ul>

            <h2 className="text-2xl font-bold text-surface-900 mt-10 mb-4">Step 5: Open a Business Bank Account</h2>
            <p>
              A separate business bank account is essential for legal and tax compliance.
              Most South African banks require your CIPC registration certificate and MOI.
            </p>

            <h2 className="text-2xl font-bold text-surface-900 mt-10 mb-4">Step 6: Stay Compliant</h2>
            <p>
              Ongoing compliance includes annual return filing with CIPC, tax return
              submissions, and maintaining proper financial records. We recommend working
              with a professional accountant to stay compliant.
            </p>

            <div className="bg-brand-50 rounded-2xl p-8 mt-10">
              <h3 className="text-xl font-bold text-surface-900 mb-3">Need Help Registering?</h3>
              <p className="mb-4">
                Tanosa Group handles the full business registration process — from CIPC name
                reservation to SARS tax registration. Contact us for a free consultation.
              </p>
              <a href="/contact" className="btn-premium inline-flex items-center gap-2 rounded-xl">
                Get Started
              </a>
            </div>
          </div>
        </div>
      </article>
      <CTA />
    </>
  )
}
