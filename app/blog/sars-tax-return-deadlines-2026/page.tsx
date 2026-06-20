import type { Metadata } from 'next'
import Breadcrumbs from '@/components/global/Breadcrumbs'
import CTA from '@/components/global/CTA'

const baseUrl = 'https://www.tanosagroup.com'
const pageUrl = 'https://www.tanosagroup.com/blog/sars-tax-return-deadlines-2026'

export const metadata: Metadata = {
  title: { absolute: 'SARS Tax Return Deadlines 2026 | Tanosa Group' },
  description: 'All SARS tax return deadlines for 2026 in South Africa. Individual tax returns, provisional tax, VAT, and corporate tax deadlines.',
  alternates: { canonical: pageUrl },
  openGraph: {
    title: 'SARS Tax Return Deadlines 2026 | Tanosa Group',
    description: 'All SARS tax return deadlines for 2026 in South Africa.',
    url: pageUrl,
    siteName: 'Tanosa Group',
    locale: 'en_ZA',
    type: 'article',
    images: [{ url: `${baseUrl}/images/Tanosa_Group_logo.webp` }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SARS Tax Return Deadlines 2026 | Tanosa Group',
    description: 'All SARS tax return deadlines for 2026 in South Africa.',
    images: [`${baseUrl}/images/Tanosa_Group_logo.webp`],
  },
}

export default function SarsDeadlines() {
  return (
    <>
      <article className="container-page py-8">
        <Breadcrumbs items={[
          { name: 'Blog', href: '/blog' },
          { name: 'SARS Tax Return Deadlines 2026' },
        ]} />
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold text-surface-900 mb-6 mt-8">SARS Tax Return Deadlines 2026</h1>
          <div className="flex items-center gap-4 text-sm text-surface-500 mb-8"><span>May 15, 2026</span><span>5 min read</span></div>
          <div className="prose prose-lg max-w-none text-surface-600 leading-relaxed space-y-6">
            <p>Missing SARS deadlines can result in penalties and interest. Here are the key tax return deadlines for the 2026 tax year in South Africa.</p>
            <h2 className="text-2xl font-bold text-surface-900 mt-10 mb-4">Individual Tax Returns (ITR12)</h2>
            <p>The tax filing season typically opens in July and runs through November. Provisional taxpayers may have until January of the following year.</p>
            <h2 className="text-2xl font-bold text-surface-900 mt-10 mb-4">Provisional Tax</h2>
            <p>First payment: 31 August 2026. Second payment: 28 February 2027. Third (voluntary): 30 September 2027.</p>
            <h2 className="text-2xl font-bold text-surface-900 mt-10 mb-4">Corporate Tax (ITR14)</h2>
            <p>Due within 12 months of your company&apos;s financial year-end.</p>
            <h2 className="text-2xl font-bold text-surface-900 mt-10 mb-4">VAT Returns</h2>
            <p>Monthly or bi-monthly, due on the 25th or last day of the month following the period.</p>
            <div className="bg-brand-50 rounded-2xl p-8 mt-10">
              <h3 className="text-xl font-bold text-surface-900 mb-3">Need Help With Your Tax Return?</h3>
              <p className="mb-4">Let Tanosa Group handle your SARS compliance. We file tax returns for individuals and businesses across Bloemfontein and the Free State.</p>
              <a href="/contact" className="btn-premium inline-flex items-center gap-2 rounded-xl">Get Help</a>
            </div>
          </div>
        </div>
      </article>
      <CTA />
    </>
  )
}
