import type { Metadata } from 'next'
import Breadcrumbs from '@/components/global/Breadcrumbs'
import CTA from '@/components/global/CTA'

const baseUrl = 'https://www.tanosagroup.com'
const pageUrl = 'https://www.tanosagroup.com/blog/small-business-tax-rates-south-africa-2026'

export const metadata: Metadata = {
  title: { absolute: 'Small Business Tax Rates in South Africa 2026/2027: Complete Guide | Tanosa Group' },
  description: 'Small business tax rates in South Africa for 2026/2027. SBC rates, corporate tax, turnover tax, personal income tax brackets, and VAT thresholds. Updated tables and examples.',
  alternates: { canonical: pageUrl },
  openGraph: {
    title: 'Small Business Tax Rates in South Africa 2026/2027: Complete Guide | Tanosa Group',
    description: 'Small business tax rates in South Africa for 2026/2027. SBC rates, corporate tax, turnover tax, personal income tax brackets, and VAT thresholds.',
    url: pageUrl,
    siteName: 'Tanosa Group',
    locale: 'en_ZA',
    type: 'article',
    images: [{ url: `${baseUrl}/images/Tanosa_Group_logo.png` }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Small Business Tax Rates in South Africa 2026/2027: Complete Guide | Tanosa Group',
    description: 'Small business tax rates in South Africa for 2026/2027.',
    images: [`${baseUrl}/images/Tanosa_Group_logo.png`],
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      headline: 'Small Business Tax Rates in South Africa 2026/2027: Complete Guide',
      description: 'Complete guide to small business tax rates in South Africa for the 2026/2027 tax year. SBC tables, corporate tax, turnover tax, personal income tax brackets, and VAT thresholds with examples.',
      author: { '@type': 'Organization', name: 'Tanosa Group' },
      publisher: { '@id': `${baseUrl}/#organization` },
      datePublished: '2026-06-13',
      dateModified: '2026-06-13',
      mainEntityOfPage: { '@type': 'WebPage', '@id': pageUrl },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: baseUrl },
        { '@type': 'ListItem', position: 2, name: 'Blog', item: `${baseUrl}/blog` },
        { '@type': 'ListItem', position: 3, name: 'Small Business Tax Rates 2026/2027', item: pageUrl },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What tax rate do small businesses pay in South Africa?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The tax rate depends on your business structure. Small Business Corporations (SBCs) pay 0% on the first R99,000 of taxable income, then 7% up to R365,000, 21% up to R550,000, and 27% above R550,000. Standard companies pay a flat 27%. Sole proprietors pay personal income tax rates (18%-45%).',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the corporate tax rate in South Africa for 2026?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The standard corporate income tax rate for companies in South Africa is 27% for the 2026/2027 tax year. Small Business Corporations benefit from reduced progressive rates on the first R550,000 of taxable income.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does South Africa have a turnover tax for small businesses?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Micro businesses with annual turnover below R1 million can elect turnover tax, paying 0% to 3% of gross turnover instead of standard income tax. The rates are 0% on the first R335,000, 1% up to R500,000, 2% up to R750,000, and 3% up to R1 million.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the VAT threshold in South Africa for 2026?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'VAT registration is mandatory when your annual turnover exceeds R1 million. Voluntary registration is available if your turnover exceeds R50,000. The VAT rate remains 15% on standard-rated supplies.',
          },
        },
      ],
    },
  ],
}

export default function TaxRatesGuide() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <article className="container-page py-8">
        <Breadcrumbs items={[
          { name: 'Blog', href: '/blog' },
          { name: 'Small Business Tax Rates 2026/2027' },
        ]} />
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold text-surface-900 mb-6 mt-8">
            Small Business Tax Rates in South Africa 2026/2027: Complete Guide
          </h1>
          <div className="flex items-center gap-4 text-sm text-surface-500 mb-8">
            <span>June 13, 2026</span>
            <span>10 min read</span>
          </div>

          <div className="prose prose-lg max-w-none text-surface-600 leading-relaxed space-y-6">
            <p>
              Understanding the tax rates that apply to your small business is essential for financial
              planning and compliance. The rate you pay depends on your business structure, turnover,
              and whether you qualify for small business concessions. This guide covers every rate
              that affects small businesses in the 2026/2027 tax year.
            </p>

            <h2 className="text-2xl font-bold text-surface-900 mt-10 mb-4">Tax Rates by Business Structure</h2>
            <p>
              The table below shows which tax rate applies based on your business structure:
            </p>

            <div className="bg-surface-100 rounded-xl p-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-surface-300">
                    <th className="text-left py-2 font-semibold">Business Structure</th>
                    <th className="text-left py-2 font-semibold">Tax System</th>
                    <th className="text-left py-2 font-semibold">Effective Rate Range</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-surface-200">
                    <td className="py-2">Sole Proprietorship</td>
                    <td className="py-2">Personal Income Tax</td>
                    <td className="py-2">18% – 45%</td>
                  </tr>
                  <tr className="border-b border-surface-200">
                    <td className="py-2">Private Company (Pty) Ltd</td>
                    <td className="py-2">Corporate Income Tax</td>
                    <td className="py-2">27% flat</td>
                  </tr>
                  <tr className="border-b border-surface-200">
                    <td className="py-2">Small Business Corporation (SBC)</td>
                    <td className="py-2">SBC Progressive</td>
                    <td className="py-2">0% – 27% (progressive)</td>
                  </tr>
                  <tr className="border-b border-surface-200">
                    <td className="py-2">Micro Business (turnover &lt; R1M)</td>
                    <td className="py-2">Turnover Tax (optional)</td>
                    <td className="py-2">0% – 3% of turnover</td>
                  </tr>
                  <tr>
                    <td className="py-2">Close Corporation (CC)</td>
                    <td className="py-2">Corporate Income Tax</td>
                    <td className="py-2">27% flat (or SBC rates if eligible)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-surface-900 mt-10 mb-4">Small Business Corporation (SBC) Tax Rates</h2>
            <p>
              A Small Business Corporation (SBC) qualifies for reduced tax rates on the first R550,000
              of taxable income. To qualify, the company must:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Be a private company (Pty) Ltd or CC</li>
              <li>Have gross income of R20 million or less per year</li>
              <li>Be owned entirely by natural persons (no other companies as shareholders)</li>
              <li>Not derive more than 20% of income from personal services (e.g. consulting) unless it employs at least 3 full-time employees</li>
            </ul>

            <div className="bg-surface-100 rounded-xl p-6">
              <p className="text-sm font-semibold text-surface-700 mb-2">SBC Tax Rates — 2026/2027 (year ending between 1 April 2026 and 31 March 2027)</p>
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-surface-300">
                    <th className="text-left py-2 font-semibold">Taxable Income</th>
                    <th className="text-left py-2 font-semibold">Rate of Tax</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-surface-200">
                    <td className="py-2">R0 – R99,000</td>
                    <td className="py-2">0%</td>
                  </tr>
                  <tr className="border-b border-surface-200">
                    <td className="py-2">R99,001 – R365,000</td>
                    <td className="py-2">7% of taxable income above R99,000</td>
                  </tr>
                  <tr className="border-b border-surface-200">
                    <td className="py-2">R365,001 – R550,000</td>
                    <td className="py-2">R18,620 + 21% of taxable income above R365,000</td>
                  </tr>
                  <tr>
                    <td className="py-2">R550,001 and above</td>
                    <td className="py-2">R57,470 + 27% of taxable income above R550,000</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-surface-100 rounded-xl p-4 mt-4">
              <p className="text-sm font-semibold text-surface-700 mb-1">Example SBC calculation:</p>
              <p className="text-sm">
                R400,000 taxable income → R18,620 + 21% x (R400,000 - R365,000) = R18,620 + R7,350 = <strong>R25,970 total tax</strong><br />
                Effective rate: 6.5%. Compare to 27% (R108,000) under standard corporate rates — saving R82,030.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-surface-900 mt-10 mb-4">Standard Corporate Tax Rate</h2>
            <p>
              Companies that do not qualify as SBCs pay a flat rate of:
            </p>
            <div className="bg-surface-100 rounded-xl p-4">
              <p className="text-lg font-bold text-center">27% of taxable income</p>
            </div>
            <p>
              This applies to most standard private companies (Pty) Ltd, public companies, and
              close corporations that do not meet the SBC criteria.
            </p>

            <h2 className="text-2xl font-bold text-surface-900 mt-10 mb-4">Personal Income Tax Brackets (Sole Proprietors)</h2>
            <p>
              Sole proprietors and freelancers pay tax at personal income tax rates. For the
              2026/2027 tax year (1 March 2026 – 28 February 2027):
            </p>

            <div className="bg-surface-100 rounded-xl p-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-surface-300">
                    <th className="text-left py-2 font-semibold">Taxable Income</th>
                    <th className="text-left py-2 font-semibold">Rate of Tax</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-surface-200">
                    <td className="py-2">R0 – R245,100</td>
                    <td className="py-2">18% of taxable income</td>
                  </tr>
                  <tr className="border-b border-surface-200">
                    <td className="py-2">R245,101 – R383,100</td>
                    <td className="py-2">R44,118 + 26% above R245,100</td>
                  </tr>
                  <tr className="border-b border-surface-200">
                    <td className="py-2">R383,101 – R530,100</td>
                    <td className="py-2">R79,998 + 31% above R383,100</td>
                  </tr>
                  <tr className="border-b border-surface-200">
                    <td className="py-2">R530,101 – R695,700</td>
                    <td className="py-2">R125,568 + 36% above R530,100</td>
                  </tr>
                  <tr className="border-b border-surface-200">
                    <td className="py-2">R695,701 – R887,100</td>
                    <td className="py-2">R185,184 + 39% above R695,700</td>
                  </tr>
                  <tr className="border-b border-surface-200">
                    <td className="py-2">R887,101 – R1,878,600</td>
                    <td className="py-2">R259,830 + 41% above R887,100</td>
                  </tr>
                  <tr>
                    <td className="py-2">R1,878,601 and above</td>
                    <td className="py-2">R666,501 + 45% above R1,878,600</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-sm mt-2">
              <strong>Tax rebates (2026/2027):</strong> Primary: R17,235. Secondary (65+): R9,444. Tertiary (75+): R3,144.
            </p>

            <h2 className="text-2xl font-bold text-surface-900 mt-10 mb-4">Turnover Tax Rates (Micro Businesses)</h2>
            <p>
              Eligible micro businesses with annual turnover below R1 million can elect turnover tax:
            </p>

            <div className="bg-surface-100 rounded-xl p-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-surface-300">
                    <th className="text-left py-2 font-semibold">Annual Turnover</th>
                    <th className="text-left py-2 font-semibold">Tax Payable</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-surface-200">
                    <td className="py-2">R0 – R335,000</td>
                    <td className="py-2">R0</td>
                  </tr>
                  <tr className="border-b border-surface-200">
                    <td className="py-2">R335,001 – R500,000</td>
                    <td className="py-2">1% of turnover above R335,000</td>
                  </tr>
                  <tr className="border-b border-surface-200">
                    <td className="py-2">R500,001 – R750,000</td>
                    <td className="py-2">R1,650 + 2% of turnover above R500,000</td>
                  </tr>
                  <tr>
                    <td className="py-2">R750,001 – R1,000,000</td>
                    <td className="py-2">R6,650 + 3% of turnover above R750,000</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>
              See our detailed comparison: {' '}
              <a href="/blog/turnover-tax-vs-vat-south-africa" className="text-brand-600 underline">Turnover Tax vs VAT in South Africa</a>.
            </p>

            <h2 className="text-2xl font-bold text-surface-900 mt-10 mb-4">VAT Thresholds and Rate</h2>
            <div className="bg-surface-100 rounded-xl p-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-surface-300">
                    <th className="text-left py-2 font-semibold">Item</th>
                    <th className="text-left py-2 font-semibold">Value</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-surface-200">
                    <td className="py-2">Standard VAT rate</td>
                    <td className="py-2">15%</td>
                  </tr>
                  <tr className="border-b border-surface-200">
                    <td className="py-2">Mandatory registration threshold</td>
                    <td className="py-2">R1 million turnover in 12 months</td>
                  </tr>
                  <tr className="border-b border-surface-200">
                    <td className="py-2">Voluntary registration threshold</td>
                    <td className="py-2">R50,000 turnover in 12 months</td>
                  </tr>
                  <tr>
                    <td className="py-2">Zero-rated supplies</td>
                    <td className="py-2">Exports, brown bread, maize, petrol, etc.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-surface-900 mt-10 mb-4">Other Tax Rates for Small Businesses</h2>

            <div className="bg-surface-100 rounded-xl p-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-surface-300">
                    <th className="text-left py-2 font-semibold">Tax Type</th>
                    <th className="text-left py-2 font-semibold">Rate</th>
                    <th className="text-left py-2 font-semibold">Details</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-surface-200">
                    <td className="py-2">Capital Gains Tax (company)</td>
                    <td className="py-2">21.6% effective (80% inclusion x 27%)</td>
                    <td className="py-2">On sale of business assets</td>
                  </tr>
                  <tr className="border-b border-surface-200">
                    <td className="py-2">Dividends Tax</td>
                    <td className="py-2">20%</td>
                    <td className="py-2">Withheld on dividends paid to shareholders</td>
                  </tr>
                  <tr className="border-b border-surface-200">
                    <td className="py-2">UIF (employer + employee)</td>
                    <td className="py-2">2% total (1% each)</td>
                    <td className="py-2">Capped at R354.24 per employee per month</td>
                  </tr>
                  <tr>
                    <td className="py-2">SDL</td>
                    <td className="py-2">1% of payroll</td>
                    <td className="py-2">Only if payroll exceeds R500,000 per year</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-brand-50 rounded-2xl p-8 mt-10">
              <h3 className="text-xl font-bold text-surface-900 mb-3">Need Help Understanding Your Tax Rate?</h3>
              <p className="mb-4">
                Tanosa Group helps small businesses in Bloemfontein and the Free State calculate
                their tax liability, choose the right structure, and stay compliant with SARS.
              </p>
              <a href="/contact" className="btn-premium inline-flex items-center gap-2 rounded-xl">
                Get Help
              </a>
            </div>
          </div>
        </div>
      </article>
      <CTA />
    </>
  )
}
