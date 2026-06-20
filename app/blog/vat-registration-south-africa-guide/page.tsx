import type { Metadata } from 'next'
import Breadcrumbs from '@/components/global/Breadcrumbs'
import CTA from '@/components/global/CTA'

const baseUrl = 'https://www.tanosagroup.com'
const pageUrl = 'https://www.tanosagroup.com/blog/vat-registration-south-africa-guide'

export const metadata: Metadata = {
  title: { absolute: 'VAT Registration South Africa Guide | Tanosa Group' },
  description: 'Complete guide to VAT registration in South Africa. Learn when to register, the application process, documents needed, and VAT return filing requirements.',
  alternates: { canonical: pageUrl },
  openGraph: {
    title: 'VAT Registration South Africa Guide | Tanosa Group',
    description: 'Complete guide to VAT registration in South Africa. Learn when to register, the application process, documents needed, and VAT return filing.',
    url: pageUrl,
    siteName: 'Tanosa Group',
    locale: 'en_ZA',
    type: 'article',
    images: [{ url: `${baseUrl}/images/Tanosa_Group_logo.webp` }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VAT Registration South Africa Guide | Tanosa Group',
    description: 'Complete guide to VAT registration in South Africa. Learn when to register, the application process, documents needed, and VAT return filing.',
    images: [`${baseUrl}/images/Tanosa_Group_logo.webp`],
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      headline: 'How to Register for VAT in South Africa: Complete Guide',
      description: 'Complete guide to VAT registration in South Africa covering when to register, the application process, required documents, VAT rates, and return filing.',
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
        { '@type': 'ListItem', position: 3, name: 'How to Register for VAT in South Africa', item: pageUrl },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'When must I register for VAT in South Africa?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'VAT registration is mandatory when your taxable turnover exceeds R1 million in any consecutive 12-month period. You must register within 21 days of exceeding the threshold.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the difference between standard-rated and zero-rated VAT?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Standard-rated supplies are taxed at 15% and include most goods and services. Zero-rated supplies are taxed at 0% and include exports, brown bread, petrol, and certain basic food items. Both allow input tax claims.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I voluntarily register for VAT in South Africa?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, you can voluntarily register for VAT if your turnover exceeds R50,000 in the past 12-month period. Voluntary registration allows you to claim input tax on your business purchases.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do I submit my VAT return to SARS?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'VAT returns (VAT201) are submitted via SARS eFiling. Depending on your registration, returns are due monthly or every two months. Manual submissions are due by the 25th, while eFiling submissions are due by the last business day of the month.',
          },
        },
      ],
    },
  ],
}

export default function VATRegistrationGuide() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <article className="container-page py-8">
        <Breadcrumbs items={[
          { name: 'Blog', href: '/blog' },
          { name: 'How to Register for VAT in South Africa' },
        ]} />
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold text-surface-900 mb-6 mt-8">
            How to Register for VAT in South Africa: Complete Guide
          </h1>
          <div className="flex items-center gap-4 text-sm text-surface-500 mb-8">
            <span>June 13, 2026</span>
            <span>8 min read</span>
          </div>

          <div className="prose prose-lg max-w-none text-surface-600 leading-relaxed space-y-6">
            <p>
              Value-Added Tax (VAT) is a consumption tax levied on the supply of goods and services in South Africa.
              If your business exceeds the registration threshold, you are required by law to register with SARS.
              This guide covers everything you need to know about VAT registration in South Africa.
            </p>

            <h2 className="text-2xl font-bold text-surface-900 mt-10 mb-4">When Must You Register for VAT?</h2>
            <p>VAT registration in South Africa falls into two categories:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Mandatory registration</strong> — You must register within 21 days if your total taxable turnover
                exceeded R1 million in the preceding 12 months, or if it is reasonably expected to exceed R1 million
                in the next 12 months.
              </li>
              <li>
                <strong>Voluntary registration</strong> — You can register voluntarily if your turnover exceeds R50,000
                in the past 12-month period. This is beneficial if you want to claim input tax on business purchases.
              </li>
            </ul>

            <div className="bg-surface-100 rounded-xl p-6">
              <p className="text-sm font-semibold text-surface-700 mb-1">Key threshold summary:</p>
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-surface-300">
                    <th className="text-left py-2 font-semibold">Threshold</th>
                    <th className="text-left py-2 font-semibold">Requirement</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-surface-200">
                    <td className="py-2">Over R1 million turnover</td>
                    <td className="py-2">Mandatory registration within 21 days</td>
                  </tr>
                  <tr className="border-b border-surface-200">
                    <td className="py-2">R50,000 – R1 million turnover</td>
                    <td className="py-2">Voluntary registration allowed</td>
                  </tr>
                  <tr>
                    <td className="py-2">Below R50,000 turnover</td>
                    <td className="py-2">Cannot register for VAT</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-surface-900 mt-10 mb-4">VAT Rates in South Africa</h2>
            <p>Three categories of VAT apply to different types of supplies:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Standard-rated (15%)</strong> — Most goods and services fall under this category.</li>
              <li><strong>Zero-rated (0%)</strong> — Exports, brown bread, maize meal, rice, vegetables, petrol, and certain farming inputs. You can still claim input tax on purchases related to zero-rated supplies.</li>
              <li><strong>Exempt supplies</strong> — Financial services, residential rent, educational services, and public transport. No VAT is charged, and you cannot claim input tax on related purchases.</li>
            </ul>

            <h2 className="text-2xl font-bold text-surface-900 mt-10 mb-4">How to Register for VAT: Step by Step</h2>

            <h3 className="text-xl font-bold text-surface-900 mt-8 mb-3">Step 1: Gather Required Documents</h3>
            <p>Before starting the registration, ensure you have:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Company registration certificate (CIPC) or proof of business registration</li>
              <li>Valid South African ID or passport for all directors/members</li>
              <li>Proof of business address (utility bill or lease agreement, not older than 3 months)</li>
              <li>Bank account details in the business name</li>
              <li>Latest financial statements or management accounts</li>
            </ul>

            <h3 className="text-xl font-bold text-surface-900 mt-8 mb-3">Step 2: Access SARS eFiling</h3>
            <p>
              Log in to your SARS eFiling profile. If you do not have one, register on the SARS eFiling website
              as an organisation. You will need your company tax reference number if you already have one,
              or your CIPC registration number.
            </p>

            <h3 className="text-xl font-bold text-surface-900 mt-8 mb-3">Step 3: Complete the VAT Registration Application</h3>
            <p>
              Navigate to the VAT section on eFiling and complete form VAT101 (Application for Registration
              as a Vendor). Provide details about your business activities, expected turnover, and the
              applicable VAT period (monthly or bi-monthly).
            </p>

            <h3 className="text-xl font-bold text-surface-900 mt-8 mb-3">Step 4: Submit and Await Confirmation</h3>
            <p>
              SARS typically processes VAT registration applications within 5-10 business days. Once approved,
              you will receive a VAT registration number and a VAT certificate. Your effective date of registration
              will be the first day of the tax period following your application.
            </p>

            <h2 className="text-2xl font-bold text-surface-900 mt-10 mb-4">Choosing Your VAT Period</h2>
            <p>When registering, you must choose between:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Monthly filing</strong> — VAT returns are due every month. Suitable for businesses with high turnover or frequent input claims.</li>
              <li><strong>Bi-monthly filing</strong> — VAT returns are due every two months. Suitable for smaller businesses with less frequent transactions.</li>
            </ul>
            <p>
              SARS may assign a category based on your turnover. You can apply to change your VAT period
              if your business circumstances change.
            </p>

            <h2 className="text-2xl font-bold text-surface-900 mt-10 mb-4">Understanding Input and Output Tax</h2>
            <p>
              <strong>Output tax</strong> is the 15% VAT you charge your customers on taxable supplies. You must
              declare and pay this to SARS.
            </p>
            <p>
              <strong>Input tax</strong> is the 15% VAT you pay on business purchases and expenses. You can
              deduct this from your output tax before paying the balance to SARS.
            </p>
            <p>
              If your input tax exceeds output tax in a given period, SARS will refund the difference, subject
              to verification.
            </p>

            <h2 className="text-2xl font-bold text-surface-900 mt-10 mb-4">VAT Return Filing Deadlines</h2>
            <p>
              VAT returns (VAT201) must be submitted and paid by specific dates:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Manual submissions:</strong> Due by the 25th day of the month following the VAT period.</li>
              <li><strong>eFiling submissions:</strong> Due by the last business day of the month following the VAT period.</li>
            </ul>
            <p>
              Late <a href="/blog/vat-return-submission-sars-efiling" className="text-brand-600 underline">submitting your VAT return on SARS eFiling</a> can attract penalties and interest. SARS imposes a 10% penalty on unpaid VAT
              and interest at the prescribed rate on overdue amounts.
            </p>

            <h2 className="text-2xl font-bold text-surface-900 mt-10 mb-4">VAT Record-Keeping Requirements</h2>
            <p>As a VAT vendor, you must keep the following records for at least 5 years:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>All tax invoices issued and received</li>
              <li>Credit and debit notes</li>
              <li>Bank statements and deposit slips</li>
              <li>Import and export documents</li>
              <li>Accounting records showing VAT calculations</li>
            </ul>
            <p>
              SARS may audit your VAT records at any time. Proper record-keeping ensures you can substantiate
              your VAT returns if selected for verification.
            </p>

            <h2 className="text-2xl font-bold text-surface-900 mt-10 mb-4">Common VAT Mistakes to Avoid</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Late registration</strong> — SARS can backdate your registration and charge VAT on all sales since the date you should have registered.</li>
              <li><strong>Claiming input tax on motor vehicles</strong> — Input tax is only claimable if the vehicle is used exclusively for business purposes.</li>
              <li><strong>Incorrect VAT treatment</strong> — Applying the wrong rate (e.g. charging 15% on exempt supplies) can lead to penalties.</li>
              <li><strong>Missing deadlines</strong> — Late submissions trigger automatic penalties.</li>
              <li><strong>Poor record-keeping</strong> — Inadequate records can result in disallowed input claims.</li>
            </ul>

            <div className="bg-brand-50 rounded-2xl p-8 mt-10">
              <h3 className="text-xl font-bold text-surface-900 mb-3">Need Help With VAT Registration or Filing?</h3>
              <p className="mb-4">
                Tanosa Group handles VAT registration, return preparation, and compliance for businesses
                across Bloemfontein and the Free State. Contact us for professional assistance.
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
