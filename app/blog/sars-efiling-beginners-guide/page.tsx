import type { Metadata } from 'next'
import Breadcrumbs from '@/components/global/Breadcrumbs'
import CTA from '@/components/global/CTA'

const baseUrl = 'https://www.tanosagroup.com'
const pageUrl = 'https://www.tanosagroup.com/blog/sars-efiling-beginners-guide'

export const metadata: Metadata = {
  title: { absolute: 'SARS eFiling: Complete Beginner\'s Guide for Small Business Owners | Tanosa Group' },
  description: 'Learn how to register and use SARS eFiling for your small business. Step-by-step guide to submitting tax returns, VAT returns, and managing your tax profile online.',
  alternates: { canonical: pageUrl },
  openGraph: {
    title: 'SARS eFiling: Complete Beginner\'s Guide for Small Business Owners | Tanosa Group',
    description: 'Learn how to register and use SARS eFiling for your small business. Step-by-step guide to submitting tax returns, VAT returns, and managing your tax profile online.',
    url: pageUrl,
    siteName: 'Tanosa Group',
    locale: 'en_ZA',
    type: 'article',
    images: [{ url: `${baseUrl}/images/Tanosa_Group_logo.png` }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SARS eFiling: Complete Beginner\'s Guide for Small Business Owners | Tanosa Group',
    description: 'Learn how to register and use SARS eFiling for your small business. Step-by-step guide to submitting tax returns.',
    images: [`${baseUrl}/images/Tanosa_Group_logo.png`],
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      headline: "SARS eFiling: Complete Beginner's Guide for Small Business Owners",
      description: 'Step-by-step guide to registering and using SARS eFiling for small business tax returns, VAT submissions, and managing your SARS profile online.',
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
        { '@type': 'ListItem', position: 3, name: 'SARS eFiling Beginner\'s Guide', item: pageUrl },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How do I register for SARS eFiling?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Go to www.sarsefiling.co.za, click "Register", and follow the prompts. You will need your South African ID number, tax reference number (if you have one), and personal details. After registration, SARS will send an activation code via SMS or post to activate your profile.',
          },
        },
        {
          '@type': 'Question',
          name: 'What can I do on SARS eFiling?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'You can submit income tax returns (ITR12 for individuals, ITR14 for companies), file VAT returns (VAT201), submit PAYE returns (EMP201/EMP501), manage provisional tax (IRP6), apply for tax clearance, view your tax compliance status, and communicate with SARS.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do I submit my tax return on eFiling?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Log in to eFiling, select the relevant return type (e.g. ITR12 for personal tax), complete all required sections including income, expenses, and deductions, review the auto-calculated assessment, and submit. SARS will process the return and issue an assessment within a few weeks.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is SARS eFiling free to use?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, SARS eFiling is completely free to use. There are no charges for registering, submitting returns, or managing your tax profile online.',
          },
        },
      ],
    },
  ],
}

export default function SarsEFilingGuide() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <article className="container-page py-8">
        <Breadcrumbs items={[
          { name: 'Blog', href: '/blog' },
          { name: "SARS eFiling Beginner's Guide" },
        ]} />
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold text-surface-900 mb-6 mt-8">
            SARS eFiling: Complete Beginner&apos;s Guide for Small Business Owners
          </h1>
          <div className="flex items-center gap-4 text-sm text-surface-500 mb-8">
            <span>June 13, 2026</span>
            <span>7 min read</span>
          </div>

          <div className="prose prose-lg max-w-none text-surface-600 leading-relaxed space-y-6">
            <p>
              SARS eFiling is the South African Revenue Service&apos;s online platform for submitting tax returns,
              managing your tax profile, and communicating with SARS. Every business owner in South Africa
              needs to use eFiling at some point. This guide walks you through everything from registration
              to submitting your first return.
            </p>

            <h2 className="text-2xl font-bold text-surface-900 mt-10 mb-4">What Is SARS eFiling?</h2>
            <p>
              SARS eFiling is a free online portal that allows individuals, businesses, and tax practitioners
              to manage their tax affairs electronically. It eliminates the need to visit a SARS branch for
              most routine tax matters.
            </p>
            <p>With eFiling you can:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Submit income tax returns (ITR12 for individuals, ITR14 for companies)</li>
              <li>File and pay VAT returns (VAT201)</li>
              <li>Manage PAYE submissions (EMP201 and EMP501)</li>
              <li>Submit provisional tax returns (IRP6)</li>
              <li>Apply for tax clearance certificates</li>
              <li>View your tax compliance status (MCP)</li>
              <li>Update personal and business details</li>
              <li>Correspond with SARS electronically</li>
            </ul>

            <h2 className="text-2xl font-bold text-surface-900 mt-10 mb-4">Step 1: Register for SARS eFiling</h2>
            <p>If you have never used eFiling before, follow these steps:</p>

            <h3 className="text-xl font-bold text-surface-900 mt-8 mb-3">For Individuals</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Go to <a href="https://www.sarsefiling.co.za" className="text-brand-600 underline">www.sarsefiling.co.za</a></li>
              <li>Click &quot;Register&quot; and enter your South African ID number</li>
              <li>Complete your personal details (name, surname, contact information)</li>
              <li>Create a username and password</li>
              <li>SARS will send an activation code via SMS or post</li>
              <li>Enter the activation code to complete registration</li>
            </ul>

            <h3 className="text-xl font-bold text-surface-900 mt-8 mb-3">For Businesses</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Register as an individual first (if not already registered)</li>
              <li>Log in and update your profile from &quot;Individual&quot; to &quot;Organisation&quot;</li>
              <li>Complete form RAV01 (Registration, Amendments, and Verification)</li>
              <li>Provide your company registration number and business details</li>
              <li>Wait for SARS to approve the organisation profile (1-5 business days)</li>
            </ul>

            <h2 className="text-2xl font-bold text-surface-900 mt-10 mb-4">Step 2: Navigating the eFiling Dashboard</h2>
            <p>Once logged in, you will see your dashboard with the following key sections:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Returns</strong> — Submit and view tax returns for all tax types</li>
              <li><strong>My Compliance Profile (MCP)</strong> — View your tax compliance status</li>
              <li><strong>Notices</strong> — View correspondence from SARS</li>
              <li><strong>Tax Types</strong> — Access specific tax types (Income Tax, VAT, PAYE, etc.)</li>
              <li><strong>Payments</strong> — Make payments and view payment history</li>
            </ul>

            <h2 className="text-2xl font-bold text-surface-900 mt-10 mb-4">Step 3: Submitting Your Tax Return</h2>

            <h3 className="text-xl font-bold text-surface-900 mt-8 mb-3">Individual Tax Return (ITR12)</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>During filing season (July to November), the ITR12 return appears on your dashboard</li>
              <li>Click &quot;File Now&quot; next to the return</li>
              <li>SARS auto-populates income data from employers, banks, and medical schemes</li>
              <li>Review and amend the pre-populated information</li>
              <li>Add business income, rental income, and deductions if applicable</li>
              <li>Submit the return and view your assessment immediately</li>
            </ul>

            <h3 className="text-xl font-bold text-surface-900 mt-8 mb-3">Company Tax Return (ITR14)</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Due within 12 months of your company&apos;s financial year-end</li>
              <li>Requires financial statements prepared in accordance with IFRS or SA GAAP</li>
              <li>Include income, expenses, assets, liabilities, and tax calculations</li>
              <li>Small business corporations can claim reduced tax rates</li>
              <li>Submit supporting documents if required</li>
            </ul>

            <h3 className="text-xl font-bold text-surface-900 mt-8 mb-3">VAT Return (VAT201)</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Select &quot;VAT&quot; from the tax types menu</li>
              <li>Click &quot;File Return&quot; for the relevant period</li>
              <li>Enter total sales (output tax) and purchases (input tax)</li>
              <li>The system calculates the net amount payable or refundable</li>
              <li>Submit and pay (or receive a refund) by the deadline</li>
            </ul>

            <h2 className="text-2xl font-bold text-surface-900 mt-10 mb-4">Step 4: Making Payments</h2>
            <p>To pay tax due on eFiling:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Go to the &quot;Payments&quot; section on your dashboard</li>
              <li>Select the tax type you are paying</li>
              <li>Enter the amount and payment date</li>
              <li>Choose your payment method (EFT or direct deposit)</li>
              <li>Use the generated payment reference number for the transaction</li>
            </ul>
            <p>
              Alternatively, you can pay via direct deposit into SARS&apos;s bank account at Standard Bank
              or Absa using the correct payment reference number. Never use a different reference —
              the system links payments to your profile using this number.
            </p>

            <h2 className="text-2xl font-bold text-surface-900 mt-10 mb-4">Step 5: Checking Your Compliance Status</h2>
            <p>
              Your My Compliance Profile (MCP) on eFiling shows whether you are tax compliant. This is
              important because:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Government and municipal tenders require a valid tax clearance certificate</li>
              <li>Some private sector contracts require proof of tax compliance</li>
              <li>B-BBEE verification requires tax compliance status</li>
              <li>You can download your tax clearance certificate directly from eFiling</li>
            </ul>

            <h2 className="text-2xl font-bold text-surface-900 mt-10 mb-4">Common eFiling Issues and How to Solve Them</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Forgotten password:</strong> Use the &quot;Forgot Password&quot; link. Your activation code
                or security questions will be needed.
              </li>
              <li>
                <strong>Profile locked:</strong> After multiple failed login attempts, your profile is locked
                for 30 minutes. Wait or contact the SARS contact centre.
              </li>
              <li>
                <strong>Activation code not received:</strong> Check your SMS inbox. If not received, request
                a new code via the eFiling website or call the SARS Contact Centre on 0800 00 7277.
              </li>
              <li>
                <strong>Return not appearing:</strong> Ensure your profile is set to &quot;Organisation&quot;
                for business returns. If it still does not appear, contact SARS.
              </li>
              <li>
                <strong>Payment not reflecting:</strong> Payments can take 3-5 business days to reflect.
                Use the correct payment reference number and keep proof of payment.
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-surface-900 mt-10 mb-4">SARS eFiling Tips for Small Business Owners</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Check your MCP regularly — do not wait until you need a tax clearance certificate.</li>
              <li>Set calendar reminders for all tax deadlines (provisional tax, VAT, annual returns).</li>
              <li>Keep digital copies of all supporting documents (invoices, receipts, bank statements).</li>
              <li>Use the SARS MobiApp for quick status checks on your phone.</li>
              <li>Consider appointing a registered tax practitioner if your tax affairs are complex.</li>
              <li>Respond to SARS queries promptly — delayed responses can trigger audits or assessments.</li>
            </ul>

            <div className="bg-brand-50 rounded-2xl p-8 mt-10">
              <h3 className="text-xl font-bold text-surface-900 mb-3">Need Help With SARS eFiling?</h3>
              <p className="mb-4">
                Tanosa Group manages SARS eFiling for businesses across Bloemfontein and the Free State.
                From registration to return submission, we handle the process so you can focus on your business.
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
