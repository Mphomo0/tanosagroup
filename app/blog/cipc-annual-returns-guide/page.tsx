import type { Metadata } from 'next'
import Breadcrumbs from '@/components/global/Breadcrumbs'
import CTA from '@/components/global/CTA'

const baseUrl = 'https://www.tanosagroup.com'
const pageUrl = 'https://www.tanosagroup.com/blog/cipc-annual-returns-guide'

export const metadata: Metadata = {
  title: { absolute: 'File CIPC Annual Returns Guide | Tanosa Group' },
  description: 'Complete guide to filing CIPC annual returns in South Africa. Learn when to file, fees for 2026, penalties for late filing, and how to avoid deregistration.',
  alternates: { canonical: pageUrl },
  openGraph: {
    title: 'File CIPC Annual Returns Guide | Tanosa Group',
    description: 'Complete guide to filing CIPC annual returns in South Africa. Learn when to file, fees for 2026, penalties for late filing, and how to avoid deregistration.',
    url: pageUrl,
    siteName: 'Tanosa Group',
    locale: 'en_ZA',
    type: 'article',
    images: [{ url: `${baseUrl}/images/Tanosa_Group_logo.webp` }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'File CIPC Annual Returns Guide | Tanosa Group',
    description: 'Complete guide to filing CIPC annual returns in South Africa.',
    images: [`${baseUrl}/images/Tanosa_Group_logo.webp`],
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      headline: 'How to File CIPC Annual Returns: Complete Guide',
      description: 'Complete guide to filing CIPC annual returns for your company in South Africa. Fees, deadlines, penalties, and step-by-step instructions.',
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
        { '@type': 'ListItem', position: 3, name: 'CIPC Annual Returns Guide', item: pageUrl },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is a CIPC annual return?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'A CIPC annual return is a mandatory filing that all registered companies and close corporations in South Africa must submit each year. It confirms that your company is still active, updates your registered details, and requires payment of an annual fee. It is separate from your SARS tax return.',
          },
        },
        {
          '@type': 'Question',
          name: 'When is my CIPC annual return due?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Your annual return is due on the anniversary of your company registration date. For example, if your company was registered on 15 March 2020, your annual return is due by 15 March each year. There is a 30-day grace period after the due date before penalties apply.',
          },
        },
        {
          '@type': 'Question',
          name: 'What happens if I do not file my CIPC annual return?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Failure to file results in escalating penalties. After a period of non-compliance (typically 2+ years of outstanding returns), CIPC will list the company as deregistering. The company loses its legal status, directors become personally liable for debts, and the company name becomes available for registration by others.',
          },
        },
        {
          '@type': 'Question',
          name: 'How much does a CIPC annual return cost?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The standard annual return fee for a private company (Pty Ltd) with standard share capital is R350. For close corporations, the fee is R250. Additional fees apply if you have non-standard share capital or if you are filing late. Penalties accrue the longer the return is overdue.',
          },
        },
      ],
    },
  ],
}

export default function CIPCAnnualReturnsGuide() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <article className="container-page py-8">
        <Breadcrumbs items={[
          { name: 'Blog', href: '/blog' },
          { name: 'CIPC Annual Returns Guide' },
        ]} />
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold text-surface-900 mb-6 mt-8">
            How to File CIPC Annual Returns: Complete Guide
          </h1>
          <div className="flex items-center gap-4 text-sm text-surface-500 mb-8">
            <span>June 13, 2026</span>
            <span>8 min read</span>
          </div>

          <div className="prose prose-lg max-w-none text-surface-600 leading-relaxed space-y-6">
            <p>
              Every <a href="/blog/how-to-register-a-business-in-south-africa" className="text-brand-600 underline">registered company</a> and close corporation in South Africa must file an annual return
              with the Companies and Intellectual Property Commission (CIPC). This is separate from your
              tax return — it is a compliance filing that keeps your company in good standing.
              This guide explains everything you need to know.
            </p>

            <h2 className="text-2xl font-bold text-surface-900 mt-10 mb-4">What Is a CIPC Annual Return?</h2>
            <p>
              An annual return is a mandatory filing that confirms your company is still active and
              updates your registered details with CIPC. It includes:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Confirmation of your company&apos;s registered address and postal address</li>
              <li>Director and officer details</li>
              <li>Shareholding structure</li>
              <li>Payment of the annual prescribed fee</li>
            </ul>
            <p>
              <strong>Important:</strong> An annual return at CIPC is <em>not</em> the same as your
              annual tax return to SARS. You must file both separately.
            </p>

            <h2 className="text-2xl font-bold text-surface-900 mt-10 mb-4">When Is Your Annual Return Due?</h2>
            <p>
              Your annual return is due on the anniversary of your company&apos;s registration date
              (the date on your CIPC registration certificate).
            </p>

            <div className="bg-surface-100 rounded-xl p-6">
              <p className="text-sm font-semibold text-surface-700 mb-2">Example:</p>
              <p className="text-sm">
                If your company was registered on 15 March 2024, your annual return is due on
                15 March each year (2025, 2026, 2027, etc.).
              </p>
            </div>

            <p>
              CIPC provides a <strong>30-day grace period</strong> after the due date. If you file
              within this period, no penalty is charged. After 30 days, penalties begin to accrue.
            </p>

            <h2 className="text-2xl font-bold text-surface-900 mt-10 mb-4">Annual Return Fees for 2026</h2>

            <div className="bg-surface-100 rounded-xl p-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-surface-300">
                    <th className="text-left py-2 font-semibold">Entity Type</th>
                    <th className="text-left py-2 font-semibold">Standard Fee</th>
                    <th className="text-left py-2 font-semibold">Late Filing Penalty</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-surface-200">
                    <td className="py-2">Private Company (Pty) Ltd — standard share capital</td>
                    <td className="py-2">R350</td>
                    <td className="py-2">R100 + additional per month overdue</td>
                  </tr>
                  <tr className="border-b border-surface-200">
                    <td className="py-2">Private Company (Pty) Ltd — non-standard share capital</td>
                    <td className="py-2">R750</td>
                    <td className="py-2">R100 + additional per month overdue</td>
                  </tr>
                  <tr className="border-b border-surface-200">
                    <td className="py-2">Close Corporation (CC)</td>
                    <td className="py-2">R250</td>
                    <td className="py-2">R50 + additional per month overdue</td>
                  </tr>
                  <tr>
                    <td className="py-2">Non-Profit Company (NPC)</td>
                    <td className="py-2">R50</td>
                    <td className="py-2">R50 + additional per month overdue</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-surface-900 mt-10 mb-4">How to File Your CIPC Annual Return</h2>

            <h3 className="text-xl font-bold text-surface-900 mt-8 mb-3">Method 1: Online via CIPC e-Services</h3>
            <p>The easiest method. You will need:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>A CIPC e-Services customer code (register at eservices.cipc.co.za)</li>
              <li>Your company registration number</li>
              <li>Payment method (credit card or EFT)</li>
            </ul>

            <h3 className="text-xl font-bold text-surface-900 mt-8 mb-3">Step-by-Step Online Process</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Log in to the CIPC e-Services portal at eservices.cipc.co.za</li>
              <li>Navigate to &quot;Annual Returns&quot; under the &quot;Companies&quot; menu</li>
              <li>Select the entity for which you want to file</li>
              <li>Review and update your registered address, director details, and shareholding</li>
              <li>Confirm the annual return fee and make payment</li>
              <li>Download the acknowledgement receipt as proof of filing</li>
            </ul>

            <h3 className="text-xl font-bold text-surface-900 mt-8 mb-3">Method 2: Through a Registered Service Provider</h3>
            <p>
              Many businesses use registered agents (including accounting firms like Tanosa Group) to
              file annual returns on their behalf. We have direct access to the CIPC portal and can
              file for you. This is recommended if you:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Do not have a CIPC customer code</li>
              <li>Have multiple companies to manage</li>
              <li>Are not sure if your previous returns were filed</li>
              <li>Have outstanding penalties to resolve</li>
            </ul>

            <h2 className="text-2xl font-bold text-surface-900 mt-10 mb-4">Consequences of Not Filing</h2>
            <p>If you do not file your annual return, the consequences escalate over time:</p>

            <div className="bg-surface-100 rounded-xl p-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-surface-300">
                    <th className="text-left py-2 font-semibold">Time Overdue</th>
                    <th className="text-left py-2 font-semibold">Consequence</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-surface-200">
                    <td className="py-2">0–30 days</td>
                    <td className="py-2">Grace period — no penalty</td>
                  </tr>
                  <tr className="border-b border-surface-200">
                    <td className="py-2">30 days – 1 year</td>
                    <td className="py-2">Late filing penalty applies</td>
                  </tr>
                  <tr className="border-b border-surface-200">
                    <td className="py-2">1–2 years</td>
                    <td className="py-2">Increased penalties, company flagged as non-compliant</td>
                  </tr>
                  <tr className="border-b border-surface-200">
                    <td className="py-2">2+ years</td>
                    <td className="py-2">CIPC initiates deregistration process</td>
                  </tr>
                  <tr>
                    <td className="py-2">Deregistered</td>
                    <td className="py-2">Company ceases to exist legally. Directors become personally liable for debts. Company name available for others to register.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-surface-900 mt-10 mb-4">How to Reinstate a Deregistered Company</h2>
            <p>
              If your company has been deregistered by CIPC, you can apply for reinstatement.
              The process involves:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Filing all outstanding annual returns</li>
              <li>Paying all outstanding fees and penalties</li>
              <li>Submitting a formal application for reinstatement (CoR40.1 form)</li>
              <li>Paying the reinstatement fee</li>
            </ul>
            <p>
              Processing can take 4-8 weeks. During this period, the company cannot trade or enter
              into contracts. We strongly recommend keeping your annual returns up to date to avoid
              this situation.
            </p>

            <h2 className="text-2xl font-bold text-surface-900 mt-10 mb-4">Annual Return vs. Tax Return: What Is the Difference?</h2>
            <p>Many business owners confuse these two filings:</p>

            <div className="bg-surface-100 rounded-xl p-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-surface-300">
                    <th className="text-left py-2 font-semibold"></th>
                    <th className="text-left py-2 font-semibold">CIPC Annual Return</th>
                    <th className="text-left py-2 font-semibold">SARS Tax Return (ITR14)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-surface-200">
                    <td className="py-2 font-semibold">Purpose</td>
                    <td className="py-2">Confirm company is active</td>
                    <td className="py-2">Declare income and pay tax</td>
                  </tr>
                  <tr className="border-b border-surface-200">
                    <td className="py-2 font-semibold">Filing body</td>
                    <td className="py-2">CIPC</td>
                    <td className="py-2">SARS</td>
                  </tr>
                  <tr className="border-b border-surface-200">
                    <td className="py-2 font-semibold">Due date</td>
                    <td className="py-2">Anniversary of registration</td>
                    <td className="py-2">Within 12 months of financial year-end</td>
                  </tr>
                  <tr className="border-b border-surface-200">
                    <td className="py-2 font-semibold">Fee</td>
                    <td className="py-2">R50 – R750 (depends on entity type)</td>
                    <td className="py-2">Free to file (tax is paid on income, not for filing)</td>
                  </tr>
                  <tr>
                    <td className="py-2 font-semibold">Penalty for non-compliance</td>
                    <td className="py-2">CIPC penalties + deregistration</td>
                    <td className="py-2">SARS penalties + interest + potential legal action</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-surface-900 mt-10 mb-4">Tips for Staying Compliant</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Mark your company&apos;s anniversary date in your calendar with a 30-day reminder</li>
              <li>File within the grace period to avoid penalties</li>
              <li>Keep your registered address and director details updated</li>
              <li>Use a professional service to track and file all returns for you</li>
              <li>Remember: CIPC returns are separate from SARS returns — both are mandatory</li>
            </ul>

            <div className="bg-brand-50 rounded-2xl p-8 mt-10">
              <h3 className="text-xl font-bold text-surface-900 mb-3">Need Help With CIPC Compliance?</h3>
              <p className="mb-4">
                Tanosa Group handles CIPC annual return filing for clients across Bloemfontein and
                the Free State. We also assist with reinstatements, director changes, and address updates.
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
