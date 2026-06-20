import type { Metadata } from 'next'
import Breadcrumbs from '@/components/global/Breadcrumbs'
import CTA from '@/components/global/CTA'

const baseUrl = 'https://www.tanosagroup.com'
const pageUrl = 'https://www.tanosagroup.com/blog/turnover-tax-vs-vat-south-africa'

export const metadata: Metadata = {
  title: { absolute: 'Turnover Tax vs VAT in South Africa | Tanosa Group' },
  description: 'Compare turnover tax and VAT for small businesses in South Africa. Learn the pros and cons, qualification, and how to choose the right tax system.',
  alternates: { canonical: pageUrl },
  openGraph: {
    title: 'Turnover Tax vs VAT in South Africa | Tanosa Group',
    description: 'Compare turnover tax and VAT for small businesses in South Africa. Pros and cons, qualification criteria, and how to choose the right system.',
    url: pageUrl,
    siteName: 'Tanosa Group',
    locale: 'en_ZA',
    type: 'article',
    images: [{ url: `${baseUrl}/images/Tanosa_Group_logo.webp` }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Turnover Tax vs VAT in South Africa | Tanosa Group',
    description: 'Compare turnover tax and VAT for small businesses in South Africa.',
    images: [`${baseUrl}/images/Tanosa_Group_logo.webp`],
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      headline: 'Turnover Tax vs VAT in South Africa: Which Is Better for Your Business?',
      description: 'Compare turnover tax and VAT for small businesses in South Africa. Pros and cons, qualification, tax rates, and a decision framework to choose the right system.',
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
        { '@type': 'ListItem', position: 3, name: 'Turnover Tax vs VAT', item: pageUrl },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Should I register for turnover tax or VAT?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'If your annual turnover is below R1 million, you can choose turnover tax — a simplified system where you pay a low percentage of gross turnover instead of standard income tax. If your turnover exceeds R1 million, VAT registration is mandatory (not optional). Turnover tax is simpler but does not allow you to claim input tax on purchases.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the turnover tax rate for small businesses in South Africa?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Turnover tax rates range from 0% to 3% of gross turnover, depending on your total annual turnover. For 2026/2027, the rates are: 0% on the first R335,000, 1% on R335,001–R500,000, 2% on R500,001–R750,000, and 3% on R750,001–R1 million. These rates are significantly lower than standard income tax rates.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I switch between turnover tax and VAT?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Once you elect turnover tax, you must remain on the system for at least 3 years. You can only exit earlier if your turnover exceeds R1 million (making VAT registration mandatory) or with special permission from SARS. You cannot use turnover tax and VAT simultaneously.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does turnover tax replace VAT?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. Turnover tax replaces income tax, not VAT. Businesses on turnover tax are not required to register for VAT unless their turnover exceeds R1 million. However, they also cannot register voluntarily for VAT and therefore cannot claim input tax on business purchases.',
          },
        },
      ],
    },
  ],
}

export default function TurnoverTaxVsVAT() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <article className="container-page py-8">
        <Breadcrumbs items={[
          { name: 'Blog', href: '/blog' },
          { name: 'Turnover Tax vs VAT' },
        ]} />
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold text-surface-900 mb-6 mt-8">
            Turnover Tax vs VAT in South Africa: Which Is Better for Your Business?
          </h1>
          <div className="flex items-center gap-4 text-sm text-surface-500 mb-8">
            <span>June 13, 2026</span>
            <span>8 min read</span>
          </div>

          <div className="prose prose-lg max-w-none text-surface-600 leading-relaxed space-y-6">
            <p>
              Small business owners in South Africa have two alternative tax systems to consider:
              turnover tax and VAT. Understanding the difference between them is critical because
              the choice affects your cash flow, pricing, and compliance burden. This guide compares
              both systems side by side.
            </p>

            <h2 className="text-2xl font-bold text-surface-900 mt-10 mb-4">What Is Turnover Tax?</h2>
            <p>
              Turnover tax is a simplified tax system for small businesses introduced by SARS. Instead
              of calculating taxable income (revenue minus expenses), you pay a low percentage of your
              gross turnover. It replaces income tax, VAT, capital gains tax, and dividend tax with
              a single, simplified payment.
            </p>

            <h2 className="text-2xl font-bold text-surface-900 mt-10 mb-4">What Is VAT?</h2>
            <p>
              VAT (Value-Added Tax) is a consumption tax of 15% charged on most goods and services in
              South Africa. As a VAT-registered business, you collect VAT from customers (output tax)
              and can claim back VAT paid on business purchases (input tax). You pay the net difference
              to SARS.
            </p>

            <h2 className="text-2xl font-bold text-surface-900 mt-10 mb-4">Side-by-Side Comparison</h2>

            <div className="bg-surface-100 rounded-xl p-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-surface-300">
                    <th className="text-left py-2 font-semibold">Factor</th>
                    <th className="text-left py-2 font-semibold">Turnover Tax</th>
                    <th className="text-left py-2 font-semibold">Standard Income Tax + VAT</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-surface-200">
                    <td className="py-2 font-semibold">Who qualifies</td>
                    <td className="py-2">Turnover below R1 million</td>
                    <td className="py-2">All businesses (VAT mandatory above R1M)</td>
                  </tr>
                  <tr className="border-b border-surface-200">
                    <td className="py-2 font-semibold">Tax base</td>
                    <td className="py-2">Gross turnover (not profit)</td>
                    <td className="py-2">Taxable income (profit)</td>
                  </tr>
                  <tr className="border-b border-surface-200">
                    <td className="py-2 font-semibold">Tax rate</td>
                    <td className="py-2">0%–3% of turnover</td>
                    <td className="py-2">27% company rate / 18–45% individual rate + 15% VAT</td>
                  </tr>
                  <tr className="border-b border-surface-200">
                    <td className="py-2 font-semibold">Input tax claims</td>
                    <td className="py-2">Not available</td>
                    <td className="py-2">Can claim VAT on business purchases</td>
                  </tr>
                  <tr className="border-b border-surface-200">
                    <td className="py-2 font-semibold">Charge 15% to customers</td>
                    <td className="py-2">No</td>
                    <td className="py-2">Yes (if VAT registered)</td>
                  </tr>
                  <tr className="border-b border-surface-200">
                    <td className="py-2 font-semibold">Filing frequency</td>
                    <td className="py-2">Annual (ITR12 Turnover Tax)</td>
                    <td className="py-2">Annual income tax + monthly/bi-monthly VAT returns</td>
                  </tr>
                  <tr className="border-b border-surface-200">
                    <td className="py-2 font-semibold">Compliance burden</td>
                    <td className="py-2">Very low</td>
                    <td className="py-2">Moderate to high</td>
                  </tr>
                  <tr>
                    <td className="py-2 font-semibold">Best for</td>
                    <td className="py-2">Micro-businesses with low expenses and simple operations</td>
                    <td className="py-2">Businesses with significant expenses where input VAT claims add value</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-surface-900 mt-10 mb-4">Turnover Tax Rates for 2026/2027</h2>

            <div className="bg-surface-100 rounded-xl p-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-surface-300">
                    <th className="text-left py-2 font-semibold">Annual Turnover</th>
                    <th className="text-left py-2 font-semibold">Tax Rate</th>
                    <th className="text-left py-2 font-semibold">Tax Payable</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-surface-200">
                    <td className="py-2">R0 – R335,000</td>
                    <td className="py-2">0%</td>
                    <td className="py-2">R0</td>
                  </tr>
                  <tr className="border-b border-surface-200">
                    <td className="py-2">R335,001 – R500,000</td>
                    <td className="py-2">1% of amount above R335,000</td>
                    <td className="py-2">R0 – R1,650</td>
                  </tr>
                  <tr className="border-b border-surface-200">
                    <td className="py-2">R500,001 – R750,000</td>
                    <td className="py-2">R1,650 + 2% of amount above R500,000</td>
                    <td className="py-2">R1,650 – R6,650</td>
                  </tr>
                  <tr>
                    <td className="py-2">R750,001 – R1,000,000</td>
                    <td className="py-2">R6,650 + 3% of amount above R750,000</td>
                    <td className="py-2">R6,650 – R14,150</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-surface-900 mt-10 mb-4">Advantages of Turnover Tax</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Extremely low rates</strong> — Micro-businesses earning under R335,000 pay zero tax</li>
              <li><strong>Simple compliance</strong> — One annual return, no monthly VAT submissions</li>
              <li><strong>No need for complex bookkeeping</strong> — No need to track deductible expenses</li>
              <li><strong>No VAT administration</strong> — No need to charge or collect VAT from customers</li>
              <li><strong>Predictable tax cost</strong> — Easy to estimate your tax liability based on turnover</li>
            </ul>

            <h2 className="text-2xl font-bold text-surface-900 mt-10 mb-4">Disadvantages of Turnover Tax</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>No input tax claims</strong> — You cannot claim back VAT on your business purchases</li>
              <li><strong>Turnover cap</strong> — Once turnover exceeds R1 million, you must exit the system</li>
              <li><strong>Cannot claim business expenses</strong> — You pay tax on gross turnover, not profit</li>
              <li><strong>3-year lock-in</strong> — You must remain on the system for at least 3 years</li>
              <li><strong>Limited to certain entity types</strong> — Companies, CCs, and sole proprietors. Not available to professional practices (accountants, lawyers, doctors) or personal service providers.</li>
            </ul>

            <h2 className="text-2xl font-bold text-surface-900 mt-10 mb-4">Advantages of Standard Tax + VAT</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Claim input tax</strong> — Claim back VAT on all business purchases (significant saving if you have high expenses)</li>
              <li><strong>Deduct business expenses</strong> — Pay tax on profit, not turnover</li>
              <li><strong>No turnover cap</strong> — Suitable for growing businesses</li>
              <li><strong>Credibility</strong> — Being VAT-registered signals that your business is established</li>
              <li><strong>Refund mechanism</strong> — If input tax exceeds output tax (e.g. during high capital expenditure), SARS refunds the difference</li>
            </ul>

            <h2 className="text-2xl font-bold text-surface-900 mt-10 mb-4">Disadvantages of Standard Tax + VAT</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Higher compliance burden</strong> — Monthly/bi-monthly VAT returns plus annual income tax</li>
              <li><strong>Cash flow impact</strong> — Must keep accurate records and set aside VAT collected</li>
              <li><strong>Your customers pay 15% more</strong> — If your customers are individuals, they pay the VAT</li>
              <li><strong>Penalties for late submissions</strong> — More deadlines mean more chances to miss one</li>
            </ul>

            <h2 className="text-2xl font-bold text-surface-900 mt-10 mb-4">Decision Framework: Which Should You Choose?</h2>

            <p className="font-semibold">Choose turnover tax if:</p>
            <ul className="list-disc pl-6 space-y-1 mb-6">
              <li>Your turnover is below R1 million</li>
              <li>Your business expenses are low (you benefit less from input tax claims)</li>
              <li>You sell directly to individuals (not VAT-registered businesses)</li>
              <li>You want minimal compliance and bookkeeping</li>
              <li>You want predictable, low tax payments</li>
            </ul>

            <p className="font-semibold">Choose standard tax + VAT if:</p>
            <ul className="list-disc pl-6 space-y-1 mb-6">
              <li>Your turnover exceeds R1 million (VAT is mandatory)</li>
              <li>Your business has significant expenses (input VAT claims add up)</li>
              <li>You sell mainly to VAT-registered businesses (they can claim the VAT back)</li>
              <li>You have high capital expenditure plans</li>
              <li>You need a B-BBEE certificate or want to tender for contracts</li>
            </ul>

            <div className="bg-brand-50 rounded-2xl p-6">
              <h3 className="text-lg font-bold text-surface-900 mb-2">Quick Example</h3>
              <p className="text-sm">
                A service business with R600,000 turnover and R200,000 in expenses:
              </p>
              <ul className="text-sm list-disc pl-4 mt-2 space-y-1">
                <li><strong>Turnover tax:</strong> R1,650 + 2% of R100,000 = R3,650 total tax</li>
                <li><strong>Standard tax:</strong> Tax on R400,000 profit = ~R108,000 (at individual rates) + VAT of R90,000 collected (but R30,000 input claimed back) = R60,000 net VAT</li>
                <li>Turnover tax saves ~R107,350 in this example — but the business cannot claim input tax and cannot do business with VAT-registered companies without adding 15%.</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-surface-900 mt-10 mb-4">Important Restrictions</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Turnover tax is not available to personal service providers (PSPs) where the individual &quot;renders services&quot; to another entity and those services constitute 50%+ of their income</li>
              <li>Not available to professional practices in accounting, law, medicine, architecture, engineering, or consulting if annual turnover exceeds R400,000</li>
              <li>Turnover tax does not apply to companies where 50%+ of income is from passive sources (rent, interest, royalties)</li>
              <li>Once you elect turnover tax, you are locked in for 3 years (unless turnover exceeds R1 million)</li>
            </ul>

            <div className="bg-brand-50 rounded-2xl p-8 mt-10">
              <h3 className="text-xl font-bold text-surface-900 mb-3">Not Sure Which Tax System Is Right for You?</h3>
              <p className="mb-4">
                Tanosa Group advises small businesses in Bloemfontein and the Free State on tax structuring.
                We will help you compare the costs and benefits of each system for your specific situation.
              </p>
              <a href="/contact" className="btn-premium inline-flex items-center gap-2 rounded-xl">
                Get Advice
              </a>
            </div>
          </div>
        </div>
      </article>
      <CTA />
    </>
  )
}
