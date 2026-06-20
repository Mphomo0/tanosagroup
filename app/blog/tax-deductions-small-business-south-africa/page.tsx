import type { Metadata } from 'next'
import Breadcrumbs from '@/components/global/Breadcrumbs'
import CTA from '@/components/global/CTA'

const baseUrl = 'https://www.tanosagroup.com'
const pageUrl = 'https://www.tanosagroup.com/blog/tax-deductions-small-business-south-africa'

export const metadata: Metadata = {
  title: { absolute: 'Tax Deductions for Small Business SA | Tanosa Group' },
  description: 'Learn which tax deductions South African small business owners can claim to reduce taxable income. SARS-compliant deductions for 2026 tax year.',
  alternates: { canonical: pageUrl },
  openGraph: {
    title: 'Tax Deductions for Small Business SA | Tanosa Group',
    description: 'Learn which tax deductions South African small business owners can claim to reduce taxable income.',
    url: pageUrl,
    siteName: 'Tanosa Group',
    locale: 'en_ZA',
    type: 'article',
    images: [{ url: `${baseUrl}/images/Tanosa_Group_logo.webp` }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tax Deductions for Small Business SA | Tanosa Group',
    description: 'Learn which tax deductions South African small business owners can claim to reduce taxable income.',
    images: [`${baseUrl}/images/Tanosa_Group_logo.webp`],
  },
}

export default function TaxDeductionsPage() {
  return (
    <>
      <article className="container-page py-8">
        <Breadcrumbs items={[
          { name: 'Blog', href: '/blog' },
          { name: 'Tax Deductions for Small Businesses in South Africa' },
        ]} />
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold text-surface-900 mb-6 mt-8">Tax Deductions Every Small Business Owner Should Know</h1>
          <div className="flex items-center gap-4 text-sm text-surface-500 mb-8"><span>April 20, 2026</span><span>7 min read</span></div>
          <div className="prose prose-lg max-w-none text-surface-600 leading-relaxed space-y-6">
            <p>Running a small business in South Africa comes with many expenses. The good news is that many of these can be claimed as tax deductions, reducing your taxable income and saving you money.</p>

            <h2 className="text-2xl font-bold text-surface-900 mt-10 mb-4">1. Operating Expenses</h2>
            <p>Rent, utilities, office supplies, and equipment leases are fully deductible. This includes the cost of running your physical or virtual office.</p>

            <h2 className="text-2xl font-bold text-surface-900 mt-10 mb-4">2. Vehicle and Travel Expenses</h2>
            <p>If you use your vehicle for business purposes, you can claim either actual costs (fuel, maintenance, insurance) or use the SARS prescribed mileage rate (currently R4.98 per km for 2026).</p>

            <h2 className="text-2xl font-bold text-surface-900 mt-10 mb-4">3. Employee Costs</h2>
            <p>Salaries, wages, bonuses, UIF, SDL, and pension fund contributions are all deductible. Skills development levies are also claimable.</p>

            <h2 className="text-2xl font-bold text-surface-900 mt-10 mb-4">4. Professional Fees</h2>
            <p>Fees paid to accountants, lawyers, consultants, and other professionals for business services are fully deductible.</p>

            <h2 className="text-2xl font-bold text-surface-900 mt-10 mb-4">5. Marketing and Advertising</h2>
            <p>Website costs, digital marketing, print advertising, social media promotions, and branding expenses are all deductible business expenses.</p>

            <h2 className="text-2xl font-bold text-surface-900 mt-10 mb-4">6. Insurance</h2>
            <p>Business insurance premiums, including public liability, professional indemnity, and asset insurance, are tax deductible.</p>

            <h2 className="text-2xl font-bold text-surface-900 mt-10 mb-4">7. Home Office Deduction</h2>
            <p>If you work from home, see our <a href="/blog/home-office-deduction-south-africa" className="text-brand-600 underline">home office deduction guide</a> to claim a portion of your bond interest or rent, electricity, internet, and cleaning costs based on the floor area used exclusively for business.</p>

            <div className="bg-brand-50 rounded-2xl p-8 mt-10">
              <h3 className="text-xl font-bold text-surface-900 mb-3">Need Help Maximising Your Deductions?</h3>
              <p className="mb-4">Our team at Tanosa Group can help you identify every legitimate deduction and ensure full SARS compliance. Contact us for a tax consultation.</p>
              <a href="/contact" className="btn-premium inline-flex items-center gap-2 rounded-xl">Get Help</a>
            </div>
          </div>
        </div>
      </article>
      <CTA />
    </>
  )
}
