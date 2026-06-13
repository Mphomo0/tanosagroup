import type { Metadata } from 'next'
import Breadcrumbs from '@/components/global/Breadcrumbs'
import CTA from '@/components/global/CTA'

const baseUrl = 'https://www.tanosagroup.com'
const pageUrl = 'https://www.tanosagroup.com/blog/sars-audit-guide-south-africa'

export const metadata: Metadata = {
  title: { absolute: 'SARS Audit Guide: What to Expect and How to Prepare | Tanosa Group' },
  description: 'Complete guide to SARS audits in South Africa. Learn what triggers an audit, the audit process, your rights, how to prepare, and what to do if you are selected for verification.',
  alternates: { canonical: pageUrl },
  openGraph: {
    title: 'SARS Audit Guide: What to Expect and How to Prepare | Tanosa Group',
    description: 'Complete guide to SARS audits in South Africa. Learn what triggers an audit, the audit process, your rights, how to prepare, and what to do if selected.',
    url: pageUrl,
    siteName: 'Tanosa Group',
    locale: 'en_ZA',
    type: 'article',
    images: [{ url: `${baseUrl}/images/Tanosa_Group_logo.png` }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SARS Audit Guide: What to Expect and How to Prepare | Tanosa Group',
    description: 'Complete guide to SARS audits in South Africa.',
    images: [`${baseUrl}/images/Tanosa_Group_logo.png`],
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      headline: 'SARS Audit Guide: What to Expect and How to Prepare',
      description: 'Complete guide to SARS audits in South Africa. Triggers, process, taxpayer rights, document preparation, and how to respond to audit letters.',
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
        { '@type': 'ListItem', position: 3, name: 'SARS Audit Guide', item: pageUrl },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What triggers a SARS audit?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Common triggers include: inconsistent or unusual income/expense patterns compared to industry norms, large or frequent VAT refund claims, discrepancies between declared income and third-party data (banks, suppliers), incomplete or late returns, prior non-compliance, random selection, and specific industry-focused audits.',
          },
        },
        {
          '@type': 'Question',
          name: 'How long does a SARS audit take?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'A standard SARS audit typically takes 3 to 6 months. Simple verification cases can be resolved in 3-6 weeks. Complex audits involving large sums or multiple tax types can take 12 months or longer. The timeline depends on the complexity of your case and how quickly you respond to SARS requests.',
          },
        },
        {
          '@type': 'Question',
          name: 'What are my rights during a SARS audit?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'You have the right to be treated professionally and courteously, to be informed of the audit scope and process, to representation by a tax practitioner, to reasonable time to prepare and submit documents, to confidentiality of your information, and to appeal any findings through the dispute resolution process.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I go to jail for tax non-compliance in South Africa?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Criminal prosecution for tax offences is possible in cases of fraud, intentional tax evasion, or persistent non-compliance. The Tax Administration Act provides for penalties of up to R2 million and/or imprisonment of up to 5 years for serious tax offences. Most SARS audits result in civil penalties and interest, not criminal charges.',
          },
        },
      ],
    },
  ],
}

export default function SARSAuditGuide() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <article className="container-page py-8">
        <Breadcrumbs items={[
          { name: 'Blog', href: '/blog' },
          { name: 'SARS Audit Guide' },
        ]} />
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold text-surface-900 mb-6 mt-8">
            SARS Audit Guide: What to Expect and How to Prepare
          </h1>
          <div className="flex items-center gap-4 text-sm text-surface-500 mb-8">
            <span>June 13, 2026</span>
            <span>9 min read</span>
          </div>

          <div className="prose prose-lg max-w-none text-surface-600 leading-relaxed space-y-6">
            <p>
              Receiving a SARS audit letter can be stressful, but it does not necessarily mean
              you have done something wrong. SARS selects returns for verification and audit for
              many reasons. This guide explains the process, your rights, and how to prepare.
            </p>

            <h2 className="text-2xl font-bold text-surface-900 mt-10 mb-4">Verification vs. Audit: What Is the Difference?</h2>
            <p>
              SARS uses two types of review:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Verification</strong> — A desk-based review of specific items on your return.
                SARS asks for supporting documents (invoices, receipts, bank statements) to confirm
                what you declared. Less invasive, usually resolved within 3-6 weeks.
              </li>
              <li>
                <strong>Audit</strong> — A comprehensive review of your tax affairs. May involve
                on-site visits, interviews with staff, and detailed examination of your accounting
                records and systems. More thorough, can take 3-12 months.
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-surface-900 mt-10 mb-4">Common Triggers for SARS Audits</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Industry benchmarking</strong> — Your income or expenses are significantly different from similar businesses in your industry</li>
              <li><strong>Large or frequent VAT refunds</strong> — Consistent refund claims trigger automatic review</li>
              <li><strong>Third-party data mismatches</strong> — Declared income does not match data from banks, medical schemes, employers, or other sources</li>
              <li><strong>Prior non-compliance</strong> — Late returns, late payments, or previous audit findings increase your risk</li>
              <li><strong>Unusual transactions</strong> — Large once-off transactions, related-party dealings, or offshore transfers</li>
              <li><strong>Industry focus</strong> — SARS targets specific sectors periodically (e.g. construction, property, trade)</li>
              <li><strong>Random selection</strong> — Some returns are randomly selected for verification</li>
            </ul>

            <h2 className="text-2xl font-bold text-surface-900 mt-10 mb-4">The SARS Audit Process</h2>

            <h3 className="text-xl font-bold text-surface-900 mt-8 mb-3">Stage 1: Notification Letter</h3>
            <p>
              You will receive a formal letter from SARS (via eFiling or post) notifying you that
              your tax return has been selected for verification or audit. The letter will specify:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>The tax type and period under review</li>
              <li>The specific items being reviewed</li>
              <li>The documents you need to provide</li>
              <li>The deadline for submission (typically 14-21 days)</li>
              <li>The SARS auditor&apos;s contact details</li>
            </ul>

            <h3 className="text-xl font-bold text-surface-900 mt-8 mb-3">Stage 2: Document Submission</h3>
            <p>
              You will need to provide the requested documents. Common requests include:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Bank statements for the period under review</li>
              <li>Tax invoices for sales and purchases</li>
              <li>Financial statements and trial balances</li>
              <li>Asset register and depreciation schedules</li>
              <li>Payroll records and EMP201/EMP501 returns</li>
              <li>Share register and ownership documents (for B-BBEE related reviews)</li>
            </ul>

            <h3 className="text-xl font-bold text-surface-900 mt-8 mb-3">Stage 3: SARS Review</h3>
            <p>
              SARS reviews the documents and compares them against your returns. They may:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Accept your returns and close the audit (no change)</li>
              <li>Request additional information or clarification</li>
              <li>Schedule a meeting or on-site visit</li>
              <li>Issue a letter of audit findings if they identify adjustments</li>
            </ul>

            <h3 className="text-xl font-bold text-surface-900 mt-8 mb-3">Stage 4: Audit Findings and Outcome</h3>
            <p>
              If SARS identifies adjustments, they will issue a letter of findings explaining
              the proposed changes. You have the right to respond. Possible outcomes:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>No adjustment</strong> — Audit closed, no change to your returns</li>
              <li><strong>Additional assessment</strong> — You owe more tax, plus penalties and interest</li>
              <li><strong>Reduced assessment</strong> — Rare, but SARS may find you overpaid</li>
            </ul>

            <h3 className="text-xl font-bold text-surface-900 mt-8 mb-3">Stage 5: Dispute Resolution (If Needed)</h3>
            <p>
              If you disagree with SARS&apos;s findings, you can follow the dispute process:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>File an objection within 30 business days of the assessment</li>
              <li>Provide supporting documents and legal argument</li>
              <li>SARS considers the objection and issues a decision</li>
              <li>If unsuccessful, you can appeal to the tax board or tax court</li>
            </ul>

            <h2 className="text-2xl font-bold text-surface-900 mt-10 mb-4">How to Prepare for a SARS Audit</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Respond promptly</strong> — Meet all deadlines. Ignoring SARS letters escalates the matter.</li>
              <li><strong>Appoint a tax practitioner</strong> — An experienced accountant or tax practitioner handles correspondence, prepares responses, and represents you.</li>
              <li><strong>Gather documents systematically</strong> — Organise invoices, bank statements, and contracts by month and category.</li>
              <li><strong>Review your returns</strong> — Identify any areas where your documentation may not fully support what you declared.</li>
              <li><strong>Do not destroy records</strong> — You must keep records for 5 years. Destroying records during an audit is a criminal offence.</li>
              <li><strong>Be honest</strong> — If you made a mistake, it is better to correct it voluntarily than to have SARS discover it.</li>
            </ul>

            <h2 className="text-2xl font-bold text-surface-900 mt-10 mb-4">Your Rights During a SARS Audit</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>To be treated professionally, courteously, and fairly</li>
              <li>To be informed in writing of the scope and purpose of the audit</li>
              <li>To be represented by a tax practitioner or legal advisor</li>
              <li>To reasonable time to prepare and submit requested documents</li>
              <li>To confidentiality of your tax information</li>
              <li>To be notified of findings before any assessment is issued</li>
              <li>To object and appeal against audit findings</li>
              <li>To request that the audit be transferred to a different SARS office if there is a conflict</li>
            </ul>

            <h2 className="text-2xl font-bold text-surface-900 mt-10 mb-4">Penalties for Audit Adjustments</h2>
            <div className="bg-surface-100 rounded-xl p-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-surface-300">
                    <th className="text-left py-2 font-semibold">Behaviour</th>
                    <th className="text-left py-2 font-semibold">Additional Tax Penalty</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-surface-200">
                    <td className="py-2">Voluntary disclosure (before audit)</td>
                    <td className="py-2">No penalty (under certain conditions)</td>
                  </tr>
                  <tr className="border-b border-surface-200">
                    <td className="py-2">Reasonable care taken but error made</td>
                    <td className="py-2">0% additional (tax plus interest only)</td>
                  </tr>
                  <tr className="border-b border-surface-200">
                    <td className="py-2">Substantial understatement (greater of 5% of tax or R50,000)</td>
                    <td className="py-2">20% of additional tax</td>
                  </tr>
                  <tr className="border-b border-surface-200">
                    <td className="py-2">Gross negligence</td>
                    <td className="py-2">50% of additional tax</td>
                  </tr>
                  <tr>
                    <td className="py-2">Intentional tax evasion</td>
                    <td className="py-2">100% of additional tax + criminal prosecution</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-surface-900 mt-10 mb-4">How to Avoid an Audit</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>File all returns on time — every time</li>
              <li>Declare all income accurately — SARS matches data from banks and third parties</li>
              <li>Keep proper records — if selected for verification, good records resolve it quickly</li>
              <li>Align with industry norms — if your income or expenses are outliers, expect a query</li>
              <li>Seek professional advice for complex transactions</li>
              <li>Respond to SARS queries immediately — unresolved flags increase audit risk</li>
            </ul>

            <div className="bg-brand-50 rounded-2xl p-8 mt-10">
              <h3 className="text-xl font-bold text-surface-900 mb-3">Facing a SARS Audit?</h3>
              <p className="mb-4">
                Tanosa Group represents clients in SARS audits and verifications across Bloemfontein
                and the Free State. We handle document preparation, correspondence, and dispute resolution.
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
