import type { Metadata } from 'next'
import Breadcrumbs from '@/components/global/Breadcrumbs'
import CTA from '@/components/global/CTA'

const baseUrl = 'https://www.tanosagroup.com'
const pageUrl = 'https://www.tanosagroup.com/blog/tax-clearance-certificate-south-africa'

export const metadata: Metadata = {
  title: { absolute: 'How to Get a Tax Clearance Certificate in South Africa | Tanosa Group' },
  description: 'Complete guide to obtaining a SARS tax clearance certificate in South Africa. Learn how to apply, requirements, processing time, and how to check your tax compliance status.',
  alternates: { canonical: pageUrl },
  openGraph: {
    title: 'How to Get a Tax Clearance Certificate in South Africa | Tanosa Group',
    description: 'Complete guide to obtaining a SARS tax clearance certificate. How to apply, requirements, processing time, and checking your compliance status.',
    url: pageUrl,
    siteName: 'Tanosa Group',
    locale: 'en_ZA',
    type: 'article',
    images: [{ url: `${baseUrl}/images/Tanosa_Group_logo.png` }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Get a Tax Clearance Certificate in South Africa | Tanosa Group',
    description: 'Complete guide to obtaining a SARS tax clearance certificate in South Africa.',
    images: [`${baseUrl}/images/Tanosa_Group_logo.png`],
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      headline: 'How to Get a Tax Clearance Certificate in South Africa',
      description: 'Complete guide to obtaining a SARS tax clearance certificate. How to apply, what documents you need, processing time, and how to maintain tax compliance.',
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
        { '@type': 'ListItem', position: 3, name: 'Tax Clearance Certificate Guide', item: pageUrl },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is a tax clearance certificate and why do I need one?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'A tax clearance certificate (TCC), now called the SARS Tax Compliance Status (TCS), is an official document confirming that your tax affairs are in order. You need it for government tenders, B-BBEE verification, selling a business, applying for licences, and some financing applications.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do I check if I am tax compliant in South Africa?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Log in to SARS eFiling and check your My Compliance Profile (MCP). It shows your compliance status for income tax, VAT, PAYE, and other tax types. If all statuses show "Compliant", you can download your tax clearance certificate directly from eFiling.',
          },
        },
        {
          '@type': 'Question',
          name: 'How long does a SARS tax clearance certificate take?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'If you are fully tax compliant, the certificate is generated immediately on eFiling. If your returns or payments are flagged for review, it can take 1-4 weeks. In complex cases involving audits or disputes, it may take longer.',
          },
        },
        {
          '@type': 'Question',
          name: 'How long is a tax clearance certificate valid for?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'A SARS Tax Compliance Status (TCS) certificate is valid for 12 months from the date of issue. However, if your tax status changes during that period (e.g. you miss a return or payment), the certificate becomes invalid immediately.',
          },
        },
      ],
    },
  ],
}

export default function TaxClearanceGuide() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <article className="container-page py-8">
        <Breadcrumbs items={[
          { name: 'Blog', href: '/blog' },
          { name: 'Tax Clearance Certificate Guide' },
        ]} />
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold text-surface-900 mb-6 mt-8">
            How to Get a Tax Clearance Certificate in South Africa
          </h1>
          <div className="flex items-center gap-4 text-sm text-surface-500 mb-8">
            <span>June 13, 2026</span>
            <span>7 min read</span>
          </div>

          <div className="prose prose-lg max-w-none text-surface-600 leading-relaxed space-y-6">
            <p>
              A SARS tax clearance certificate — now called a Tax Compliance Status (TCS) — is a
              critical document for any business in South Africa. Without it, you cannot tender for
              government contracts, complete B-BBEE verification, or sell your business.
              This guide explains how to get one and how to stay compliant.
            </p>

            <h2 className="text-2xl font-bold text-surface-900 mt-10 mb-4">What Is a Tax Clearance Certificate?</h2>
            <p>
              A Tax Compliance Status (TCS) certificate, commonly called a tax clearance certificate,
              is an official document issued by SARS confirming that your tax affairs are in order.
              It certifies that you have:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Submitted all required tax returns (income tax, VAT, PAYE, etc.)</li>
              <li>Paid all taxes due (or have a valid payment arrangement)</li>
              <li>No outstanding tax debts or disputes that affect compliance</li>
            </ul>

            <h2 className="text-2xl font-bold text-surface-900 mt-10 mb-4">When Do You Need a Tax Clearance Certificate?</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Government and municipal tenders</strong> — All public sector contracts require a valid TCS</li>
              <li><strong>B-BBEE verification</strong> — Verification agencies require tax compliance as a prerequisite</li>
              <li><strong>Selling your business</strong> — Buyers require proof of tax compliance before transfer</li>
              <li><strong>Business licences</strong> — Some industry licences require tax clearance</li>
              <li><strong>Financing and loans</strong> — Banks and development finance institutions may require a TCS</li>
              <li><strong>Cross-border transactions</strong> — Required for certain international business activities</li>
            </ul>

            <h2 className="text-2xl font-bold text-surface-900 mt-10 mb-4">How to Check Your Tax Compliance Status</h2>

            <h3 className="text-xl font-bold text-surface-900 mt-8 mb-3">Step 1: Log in to SARS eFiling</h3>
            <p>
              Go to <a href="https://www.sarsefiling.co.za" className="text-brand-600 underline">www.sarsefiling.co.za</a>
              {' '}and log in. If you do not have an eFiling profile,
              {' '}<a href="/blog/sars-efiling-beginners-guide" className="text-brand-600 underline">register first</a>.
            </p>

            <h3 className="text-xl font-bold text-surface-900 mt-8 mb-3">Step 2: Open My Compliance Profile (MCP)</h3>
            <p>
              On your dashboard, click on &quot;My Compliance Profile&quot; (MCP). This screen shows
              your compliance status for each tax type individually:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Income Tax (IT)</li>
              <li>Value-Added Tax (VAT) — if registered</li>
              <li>Pay-As-You-Earn (PAYE) — if registered as an employer</li>
              <li>Provisional Tax</li>
              <li>Customs and Excise — if applicable</li>
            </ul>

            <h3 className="text-xl font-bold text-surface-900 mt-8 mb-3">Step 3: Check Your Status</h3>
            <p>
              Each tax type will display one of:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Compliant</strong> — All returns submitted and tax paid. You can download your certificate.</li>
              <li><strong>Not Compliant</strong> — Outstanding returns or unpaid taxes. Resolve the issue before applying.</li>
              <li><strong>Pending</strong> — SARS is reviewing your status. Contact SARS to follow up.</li>
            </ul>

            <h2 className="text-2xl font-bold text-surface-900 mt-10 mb-4">How to Apply for a Tax Clearance Certificate</h2>

            <h3 className="text-xl font-bold text-surface-900 mt-8 mb-3">Online via eFiling (Recommended)</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Log in to SARS eFiling</li>
              <li>Navigate to &quot;My Compliance Profile&quot;</li>
              <li>Click &quot;Request Tax Compliance Status&quot;</li>
              <li>Select the reason for the request (tender, B-BBEE, etc.)</li>
              <li>Choose the period for which compliance is verified</li>
              <li>Submit — if compliant, the certificate is generated immediately as a PDF</li>
              <li>Download and save the certificate</li>
            </ul>

            <h3 className="text-xl font-bold text-surface-900 mt-8 mb-3">At a SARS Branch</h3>
            <p>
              You can also visit a SARS branch in person. This is useful if:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>You have complex tax affairs that need human review</li>
              <li>Your eFiling profile has verification issues</li>
              <li>You are dealing with an audit or dispute</li>
            </ul>
            <p>
              Book an appointment via the SARS website. Bring your ID, company registration documents,
              and any relevant correspondence.
            </p>

            <h2 className="text-2xl font-bold text-surface-900 mt-10 mb-4">Processing Time</h2>

            <div className="bg-surface-100 rounded-xl p-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-surface-300">
                    <th className="text-left py-2 font-semibold">Scenario</th>
                    <th className="text-left py-2 font-semibold">Processing Time</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-surface-200">
                    <td className="py-2">Fully compliant — no issues</td>
                    <td className="py-2">Immediate (online)</td>
                  </tr>
                  <tr className="border-b border-surface-200">
                    <td className="py-2">Minor compliance flags (e.g. late return)</td>
                    <td className="py-2">1–5 business days after resolving</td>
                  </tr>
                  <tr className="border-b border-surface-200">
                    <td className="py-2">Outstanding returns or payments</td>
                    <td className="py-2">Must file/pay first, then 1–2 weeks for clearance</td>
                  </tr>
                  <tr>
                    <td className="py-2">Audit or dispute in progress</td>
                    <td className="py-2">May be delayed until resolved</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-surface-900 mt-10 mb-4">Reasons Your Tax Clearance May Be Denied</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Outstanding tax returns</strong> — Any unfiled return blocks your compliance status</li>
              <li><strong>Unpaid tax</strong> — Outstanding tax debt, even small amounts, results in non-compliance</li>
              <li><strong>Late payments</strong> — SARS may flag your account if you have a pattern of late payments</li>
              <li><strong>Under-declaration</strong> — If SARS identified discrepancies in your returns</li>
              <li><strong>Audit in progress</strong> — An active audit may freeze your compliance status</li>
              <li><strong>Invalid postal or registered address</strong> — SARS cannot correspond with you</li>
            </ul>

            <h2 className="text-2xl font-bold text-surface-900 mt-10 mb-4">Tax Clearance Certificate vs. Tax Compliance Status</h2>
            <p>
              In 2018, SARS replaced the paper-based tax clearance certificate with the digital
              Tax Compliance Status (TCS) system. The key differences:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Old system:</strong> Paper certificate valid for 12 months. Had to request a new one each time.</li>
              <li><strong>New TCS system:</strong> Real-time compliance status. You can view and download it at any time. It is immediately invalidated if your tax status changes.</li>
            </ul>
            <p>
              The new system is better because it gives procurement officers real-time verification.
              However, it also means one missed return or payment instantly invalidates your compliance
              status — even if you have the PDF certificate.
            </p>

            <h2 className="text-2xl font-bold text-surface-900 mt-10 mb-4">How to Maintain Tax Compliance</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>File all returns on time — set calendar reminders for every tax type</li>
              <li>Pay all taxes by the due date — do not wait for SARS reminders</li>
              <li>Check your My Compliance Profile on eFiling monthly</li>
              <li>Respond to SARS queries immediately — delayed responses can trigger audits</li>
              <li>Keep your registered address up to date with both CIPC and SARS</li>
              <li>If you cannot pay, arrange a payment plan with SARS before the due date</li>
            </ul>

            <div className="bg-brand-50 rounded-2xl p-8 mt-10">
              <h3 className="text-xl font-bold text-surface-900 mb-3">Need Help With Tax Compliance?</h3>
              <p className="mb-4">
                Tanosa Group helps businesses in Bloemfontein and the Free State maintain tax compliance,
                file returns, and obtain tax clearance certificates for tenders and contracts.
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
