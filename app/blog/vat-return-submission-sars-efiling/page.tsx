import type { Metadata } from 'next'
import Breadcrumbs from '@/components/global/Breadcrumbs'
import CTA from '@/components/global/CTA'

const baseUrl = 'https://www.tanosagroup.com'
const pageUrl = 'https://www.tanosagroup.com/blog/vat-return-submission-sars-efiling'

export const metadata: Metadata = {
  title: { absolute: 'Submit a VAT Return on SARS eFiling | Tanosa Group' },
  description: 'Step-by-step guide to completing your VAT201 return on SARS eFiling. Learn to calculate input and output tax, avoid errors, and pay on time.',
  alternates: { canonical: pageUrl },
  openGraph: {
    title: 'Submit a VAT Return on SARS eFiling | Tanosa Group',
    description: 'Step-by-step guide to completing and submitting your VAT201 return on SARS eFiling.',
    url: pageUrl,
    siteName: 'Tanosa Group',
    locale: 'en_ZA',
    type: 'article',
    images: [{ url: `${baseUrl}/images/Tanosa_Group_logo.webp` }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Submit a VAT Return on SARS eFiling | Tanosa Group',
    description: 'Step-by-step guide to completing and submitting your VAT201 return on SARS eFiling.',
    images: [`${baseUrl}/images/Tanosa_Group_logo.webp`],
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      headline: 'How to Submit a VAT Return (VAT201) on SARS eFiling',
      description: 'Complete step-by-step guide to completing and submitting your VAT201 return on SARS eFiling. Covers input tax, output tax, adjustments, and payment.',
      author: { '@type': 'Organization', name: 'Tanosa Group' },
      publisher: { '@id': `${baseUrl}/#organization` },
      datePublished: '2026-06-13',
      dateModified: '2026-06-13',
      mainEntityOfPage: { '@type': 'WebPage', '@id': pageUrl },
    },
    {
      '@type': 'HowTo',
      name: 'How to Submit a VAT Return (VAT201) on SARS eFiling',
      description: 'Step-by-step instructions for submitting your VAT201 return on SARS eFiling.',
      step: [
        { '@type': 'HowToStep', position: 1, name: 'Log in to SARS eFiling', text: 'Go to www.sarsefiling.co.za and log in with your credentials.' },
        { '@type': 'HowToStep', position: 2, name: 'Navigate to VAT returns', text: 'Select VAT from the tax types menu and click File Return for the relevant period.' },
        { '@type': 'HowToStep', position: 3, name: 'Enter output tax', text: 'Enter the total value of standard-rated and zero-rated supplies made during the period.' },
        { '@type': 'HowToStep', position: 4, name: 'Enter input tax', text: 'Enter the VAT paid on business purchases and expenses during the period.' },
        { '@type': 'HowToStep', position: 5, name: 'Review and submit', text: 'Review the calculated amount, make any adjustments, and submit the return. Pay any amount due by the deadline.' },
      ],
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: baseUrl },
        { '@type': 'ListItem', position: 2, name: 'Blog', item: `${baseUrl}/blog` },
        { '@type': 'ListItem', position: 3, name: 'VAT Return Submission Guide', item: pageUrl },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'When is my VAT return due?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'For manual submissions, the VAT201 return is due by the 25th of the month following the VAT period. For eFiling submissions, it is due by the last business day of the month following the VAT period. Your filing frequency (monthly or bi-monthly) is determined when you register for VAT.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the difference between output tax and input tax on a VAT return?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Output tax is the 15% VAT you charge your customers on taxable sales. Input tax is the 15% VAT you pay on your business purchases and expenses. On the VAT201 return, you declare both, and the net difference (output minus input) is either payable to SARS or refundable to you.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I claim VAT back on a previous period if I forgot?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, you can claim input tax on invoices from previous periods. On the VAT201 return, there is a field for adjustments. SARS generally allows input tax claims up to 5 years after the date of the invoice, but it is best to claim in the correct period to avoid queries.',
          },
        },
        {
          '@type': 'Question',
          name: 'What happens if I submit my VAT return late?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Late submission results in a 10% penalty on the amount of VAT payable, plus interest at the prescribed rate (currently 10.5% per annum) from the due date until payment. SARS may also issue a summons or appoint a third party to collect outstanding amounts.',
          },
        },
      ],
    },
  ],
}

export default function VATReturnGuide() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <article className="container-page py-8">
        <Breadcrumbs items={[
          { name: 'Blog', href: '/blog' },
          { name: 'VAT Return Submission Guide' },
        ]} />
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold text-surface-900 mb-6 mt-8">
            How to Submit a VAT Return (VAT201) on SARS eFiling
          </h1>
          <div className="flex items-center gap-4 text-sm text-surface-500 mb-8">
            <span>June 13, 2026</span>
            <span>9 min read</span>
          </div>

          <div className="prose prose-lg max-w-none text-surface-600 leading-relaxed space-y-6">
            <p>
              Once you are registered for VAT in South Africa, you must submit a VAT201 return every
              month or every two months, depending on your registration. This guide walks through the
              entire process, from logging into eFiling to submitting and paying.
            </p>

            <h2 className="text-2xl font-bold text-surface-900 mt-10 mb-4">What Is a VAT201 Return?</h2>
            <p>
              The VAT201 is the official SARS form used to declare your VAT activity for a specific
              tax period. It captures your total sales (output tax), purchases (input tax), adjustments,
              and calculates the net amount payable to or refundable by SARS.
            </p>

            <h2 className="text-2xl font-bold text-surface-900 mt-10 mb-4">Before You Start</h2>
            <p>Ensure you have the following information ready:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Total sales for the period (broken down by standard-rated and zero-rated)</li>
              <li>Total purchases and expenses with VAT (input tax)</li>
              <li>Import documents (if you imported goods)</li>
              <li>Credit and debit notes issued or received</li>
              <li>Adjustments from previous periods (if any)</li>
            </ul>

            <h2 className="text-2xl font-bold text-surface-900 mt-10 mb-4">Step-by-Step: Submitting Your VAT201</h2>

            <h3 className="text-xl font-bold text-surface-900 mt-8 mb-3">Step 1: Log In to SARS eFiling</h3>
            <p>
              Go to <a href="https://www.sarsefiling.co.za" className="text-brand-600 underline">www.sarsefiling.co.za</a>
              {' '}and log in with your credentials. If you have not registered for eFiling yet,
              {' '}<a href="/blog/sars-efiling-beginners-guide" className="text-brand-600 underline">see our beginner&apos;s guide</a>.
            </p>

            <h3 className="text-xl font-bold text-surface-900 mt-8 mb-3">Step 2: Navigate to the VAT Section</h3>
            <p>
              From your dashboard, select &quot;VAT&quot; from the tax types menu. You will see a list
              of outstanding returns for each period. Click &quot;File Return&quot; next to the relevant
              period.
            </p>

            <h3 className="text-xl font-bold text-surface-900 mt-8 mb-3">Step 3: Enter Output Tax (Section A)</h3>
            <p>
              Output tax is the VAT you charged your customers. On the VAT201, you will complete:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Field 1:</strong> Value of standard-rated supplies (the total selling price excluding VAT)</li>
              <li><strong>Field 2:</strong> VAT on standard-rated supplies (15% of field 1)</li>
              <li><strong>Field 3:</strong> Value of zero-rated supplies (e.g. exports)</li>
              <li><strong>Field 4:</strong> VAT on zero-rated supplies (always R0)</li>
              <li><strong>Field 8:</strong> Value of deemed supplies (e.g. goods taken for personal use)</li>
            </ul>

            <h3 className="text-xl font-bold text-surface-900 mt-8 mb-3">Step 4: Enter Input Tax (Section B)</h3>
            <p>
              Input tax is the VAT you paid on business purchases. Complete:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Field 14:</strong> Total value of purchases and expenses (excluding VAT)</li>
              <li><strong>Field 15:</strong> VAT on purchases and expenses (input tax you are claiming)</li>
              <li><strong>Field 16:</strong> Capital goods purchased (assets like equipment, vehicles)</li>
              <li><strong>Field 17:</strong> VAT on capital goods</li>
            </ul>
            <p>
              You can only claim input tax if you have a valid tax invoice from the supplier.
              The invoice must show the supplier&apos;s VAT registration number, your name/address,
              and the VAT amount separately.
            </p>

            <h3 className="text-xl font-bold text-surface-900 mt-8 mb-3">Step 5: Make Adjustments (Section C)</h3>
            <p>
              Use this section for adjustments such as:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Bad debt relief (VAT previously paid on invoices you cannot collect)</li>
              <li>Credit notes issued or received during the period</li>
              <li>VAT on imported services</li>
              <li>Corrections from previous periods</li>
              <li>Apportionment adjustments (if you make both taxable and exempt supplies)</li>
            </ul>

            <h3 className="text-xl font-bold text-surface-900 mt-8 mb-3">Step 6: Review the Calculated Amount</h3>
            <p>
              SARS automatically calculates the net amount:
            </p>
            <div className="bg-surface-100 rounded-xl p-4">
              <p className="text-sm font-mono">
                Net VAT = Total output tax (field 2 + field 4 + field 8 + adjustments) – Total input tax (field 15 + field 17)
              </p>
            </div>
            <p>
              If the result is positive, you must pay that amount to SARS.
              If negative, SARS will refund you, subject to verification.
            </p>

            <h3 className="text-xl font-bold text-surface-900 mt-8 mb-3">Step 7: Submit and Pay</h3>
            <p>
              Review all fields carefully. Once submitted, you cannot edit the return — corrections
              require a manual process with SARS. After submission:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>If you owe VAT, pay via EFT using the payment reference number on the return</li>
              <li>If SARS owes you, the refund is processed after verification (allow 2-4 weeks)</li>
              <li>Download and save the acknowledgement receipt for your records</li>
            </ul>

            <h2 className="text-2xl font-bold text-surface-900 mt-10 mb-4">VAT Return Deadlines</h2>

            <div className="bg-surface-100 rounded-xl p-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-surface-300">
                    <th className="text-left py-2 font-semibold">Filing Method</th>
                    <th className="text-left py-2 font-semibold">Due Date</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-surface-200">
                    <td className="py-2">Manual (paper) submission</td>
                    <td className="py-2">25th of the month following the VAT period</td>
                  </tr>
                  <tr className="border-b border-surface-200">
                    <td className="py-2">eFiling submission</td>
                    <td className="py-2">Last business day of the month following the VAT period</td>
                  </tr>
                  <tr>
                    <td className="py-2">Payment (all methods)</td>
                    <td className="py-2">Same as submission deadline</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-surface-900 mt-10 mb-4">Common VAT Return Fields Explained</h2>
            <div className="bg-surface-100 rounded-xl p-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-surface-300">
                    <th className="text-left py-2 font-semibold">Field</th>
                    <th className="text-left py-2 font-semibold">What to Enter</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-surface-200">
                    <td className="py-2">1</td>
                    <td className="py-2">Value of standard-rated supplies (excl. VAT)</td>
                  </tr>
                  <tr className="border-b border-surface-200">
                    <td className="py-2">2</td>
                    <td className="py-2">15% VAT on field 1</td>
                  </tr>
                  <tr className="border-b border-surface-200">
                    <td className="py-2">3</td>
                    <td className="py-2">Value of zero-rated supplies</td>
                  </tr>
                  <tr className="border-b border-surface-200">
                    <td className="py-2">14</td>
                    <td className="py-2">Total purchases and expenses (excl. VAT)</td>
                  </tr>
                  <tr className="border-b border-surface-200">
                    <td className="py-2">15</td>
                    <td className="py-2">VAT on purchases (input tax claimed)</td>
                  </tr>
                  <tr className="border-b border-surface-200">
                    <td className="py-2">16</td>
                    <td className="py-2">Capital goods purchased (excl. VAT)</td>
                  </tr>
                  <tr className="border-b border-surface-200">
                    <td className="py-2">17</td>
                    <td className="py-2">VAT on capital goods</td>
                  </tr>
                  <tr className="border-b border-surface-200">
                    <td className="py-2">18</td>
                    <td className="py-2">Adjustments (increase output tax)</td>
                  </tr>
                  <tr>
                    <td className="py-2">19</td>
                    <td className="py-2">Adjustments (increase input tax)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-surface-900 mt-10 mb-4">VAT Refunds: What to Expect</h2>
            <p>
              If your input tax exceeds output tax (e.g. during periods of high capital expenditure),
              SARS will refund the difference. However:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>First-time refund returns are flagged for verification — allow 21+ business days</li>
              <li>SARS may request supporting documents (invoices, bank statements)</li>
              <li>Consistent refund patterns may trigger a VAT audit</li>
              <li>Refunds are paid into the business bank account on record with SARS</li>
            </ul>

            <h2 className="text-2xl font-bold text-surface-900 mt-10 mb-4">VAT Return Mistakes and How to Avoid Them</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Claiming input tax without a valid tax invoice</strong> — SARS requires a
                compliant tax invoice. A till slip is not sufficient for claims above R5,000.
              </li>
              <li>
                <strong>Incorrect VAT treatment of mixed supplies</strong> — If you supply both
                taxable and exempt goods, you must apportion your input tax. Calculate the ratio
                of taxable to total supplies.
              </li>
              <li>
                <strong>Missing the deadline</strong> — Set up recurring calendar reminders aligned
                with your VAT period.
              </li>
              <li>
                <strong>Not reconciling VAT returns with your accounting system</strong> — Your VAT
                return figures should match your accounting records. Discrepancies trigger SARS queries.
              </li>
              <li>
                <strong>Forgetting to account for exchange rate differences</strong> — If you import
                or export, use the SARS published exchange rate for the date of the invoice.
              </li>
            </ul>

            <div className="bg-brand-50 rounded-2xl p-8 mt-10">
              <h3 className="text-xl font-bold text-surface-900 mb-3">Need Help With Your VAT Returns?</h3>
              <p className="mb-4">
                Tanosa Group prepares and submits VAT201 returns for businesses across Bloemfontein
                and the Free State. We ensure accurate, timely submissions and handle SARS queries on your behalf.
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
