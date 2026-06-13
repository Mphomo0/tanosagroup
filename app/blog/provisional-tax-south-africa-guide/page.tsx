import type { Metadata } from 'next'
import Breadcrumbs from '@/components/global/Breadcrumbs'
import CTA from '@/components/global/CTA'

const baseUrl = 'https://www.tanosagroup.com'
const pageUrl = 'https://www.tanosagroup.com/blog/provisional-tax-south-africa-guide'

export const metadata: Metadata = {
  title: { absolute: 'Provisional Tax in South Africa: Who Pays, Deadlines & How to Calculate | Tanosa Group' },
  description: 'Complete guide to provisional tax in South Africa. Learn who must pay, deadlines for 2026/2027, how to calculate payments, and penalties for non-compliance.',
  alternates: { canonical: pageUrl },
  openGraph: {
    title: 'Provisional Tax in South Africa: Who Pays, Deadlines & How to Calculate | Tanosa Group',
    description: 'Complete guide to provisional tax in South Africa. Learn who must pay, deadlines for 2026/2027, how to calculate payments, and penalties.',
    url: pageUrl,
    siteName: 'Tanosa Group',
    locale: 'en_ZA',
    type: 'article',
    images: [{ url: `${baseUrl}/images/Tanosa_Group_logo.png` }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Provisional Tax in South Africa: Who Pays, Deadlines & How to Calculate | Tanosa Group',
    description: 'Complete guide to provisional tax in South Africa. Learn who must pay, deadlines for 2026/2027, how to calculate payments, and penalties.',
    images: [`${baseUrl}/images/Tanosa_Group_logo.png`],
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      headline: 'Provisional Tax in South Africa: Who Pays, Deadlines & How to Calculate',
      description: 'Complete guide to provisional tax in South Africa. Learn who must pay, the 2026/2027 deadlines, how to estimate payments, and what penalties apply.',
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
        { '@type': 'ListItem', position: 3, name: 'Provisional Tax in South Africa', item: pageUrl },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Who must pay provisional tax in South Africa?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Provisional tax applies to individuals earning non-salary income (sole proprietors, freelancers, directors), companies, close corporations, and trusts. Salaried employees with only employment income are generally exempt.',
          },
        },
        {
          '@type': 'Question',
          name: 'What are the provisional tax deadlines for 2026/2027?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'First payment is due by 31 August 2026. Second payment is due by 28 February 2027. A third voluntary payment can be made within six months of the financial year-end (by 30 September 2027).',
          },
        },
        {
          '@type': 'Question',
          name: 'How is provisional tax calculated?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'You estimate your total taxable income for the year, calculate the expected tax liability using the applicable tax tables, subtract the primary rebate and any PAYE already deducted, and pay the balance in two instalments. Each payment is typically 50% of the estimated annual liability.',
          },
        },
        {
          '@type': 'Question',
          name: 'What happens if I underestimate my provisional tax?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'SARS imposes a penalty if your estimate is less than 80% of your actual tax liability (for companies) or 90% (for individuals with less than R20,000 taxable income from non-employment sources). The penalty is calculated at 20% per annum on the difference between the correct payment and what you paid.',
          },
        },
      ],
    },
  ],
}

export default function ProvisionalTaxGuide() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <article className="container-page py-8">
        <Breadcrumbs items={[
          { name: 'Blog', href: '/blog' },
          { name: 'Provisional Tax in South Africa' },
        ]} />
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold text-surface-900 mb-6 mt-8">
            Provisional Tax in South Africa: Who Pays, Deadlines & How to Calculate
          </h1>
          <div className="flex items-center gap-4 text-sm text-surface-500 mb-8">
            <span>June 13, 2026</span>
            <span>9 min read</span>
          </div>

          <div className="prose prose-lg max-w-none text-surface-600 leading-relaxed space-y-6">
            <p>
              Provisional tax is not a separate tax — it is a mechanism for paying your income tax in instalments
              during the year instead of a single lump sum after year-end. If you earn income outside of a salary,
              you are likely a provisional taxpayer. This guide explains everything you need to know.
            </p>

            <h2 className="text-2xl font-bold text-surface-900 mt-10 mb-4">What Is Provisional Tax?</h2>
            <p>
              Provisional tax requires you to pay your estimated income tax liability in two (or optionally three)
              instalments during the tax year. SARS uses this system to collect tax throughout the year from
              taxpayers whose income is not fully covered by PAYE.
            </p>
            <p>
              At the end of the tax year, your actual tax liability is calculated, and any difference between
              what you paid provisionally and what you owe is either refunded or demanded as a top-up payment.
            </p>

            <h2 className="text-2xl font-bold text-surface-900 mt-10 mb-4">Who Must Pay Provisional Tax?</h2>
            <p>You are a provisional taxpayer if you earn income from:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Business or trade as a sole proprietor</li>
              <li>Freelance or consulting work</li>
              <li>Director's fees (unless PAYE is deducted)</li>
              <li>Rental income from property</li>
              <li>Investment income (interest, dividends)</li>
              <li>Any other income not subject to PAYE</li>
            </ul>
            <p>
              <strong>Companies, close corporations, and trusts</strong> are automatically provisional taxpayers
              regardless of their income type.
            </p>
            <p>
              <strong>Exemptions:</strong> Individuals whose only income is a salary (with PAYE deducted) are
              generally not provisional taxpayers. However, if you earn more than R30,000 of non-salary income
              (e.g. rental income or freelance earnings), you may need to register as a provisional taxpayer.
            </p>

            <h2 className="text-2xl font-bold text-surface-900 mt-10 mb-4">Provisional Tax Deadlines for 2026/2027</h2>
            <p>The tax year runs from 1 March to 28/29 February. The payment schedule is:</p>

            <div className="bg-surface-100 rounded-xl p-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-surface-300">
                    <th className="text-left py-2 font-semibold">Payment</th>
                    <th className="text-left py-2 font-semibold">Deadline</th>
                    <th className="text-left py-2 font-semibold">Amount</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-surface-200">
                    <td className="py-2">First period</td>
                    <td className="py-2">31 August 2026</td>
                    <td className="py-2">50% of estimated annual tax liability</td>
                  </tr>
                  <tr className="border-b border-surface-200">
                    <td className="py-2">Second period</td>
                    <td className="py-2">28 February 2027</td>
                    <td className="py-2">Remaining balance based on updated estimate</td>
                  </tr>
                  <tr>
                    <td className="py-2">Third period (voluntary)</td>
                    <td className="py-2">30 September 2027</td>
                    <td className="py-2">Top-up to avoid interest on underpayment</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-surface-900 mt-10 mb-4">How to Calculate Provisional Tax</h2>

            <h3 className="text-xl font-bold text-surface-900 mt-8 mb-3">Step 1: Estimate Your Total Taxable Income for the Year</h3>
            <p>
              Use your prior year income as a baseline and adjust for expected changes. Common adjustments
              include new contracts, expected growth, or known expenses that will reduce your income.
            </p>

            <h3 className="text-xl font-bold text-surface-900 mt-8 mb-3">Step 2: Calculate the Expected Tax Liability</h3>
            <p>
              Apply the relevant tax rates to your estimated income:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Individuals:</strong> Use the SARS income tax tables (18%–45% for 2026/2027)</li>
              <li><strong>Companies:</strong> 27% flat rate (or reduced Small Business Corporation rates if eligible)</li>
              <li><strong>Trusts:</strong> 45% flat rate</li>
            </ul>

            <h3 className="text-xl font-bold text-surface-900 mt-8 mb-3">Step 3: Subtract Rebates and PAYE</h3>
            <p>
              Individuals can deduct the primary rebate (R17,235 for 2026/2027) and any secondary/tertiary
              rebates if applicable. If you also earn a salary with PAYE deducted, subtract that PAYE from
              your estimated liability.
            </p>

            <h3 className="text-xl font-bold text-surface-900 mt-8 mb-3">Step 4: Divide Into Two Payments</h3>
            <p>
              The first payment (by 31 August) should be 50% of your estimated annual tax liability.
              The second payment (by 28 February) should be the balance, adjusted based on your revised
              estimate.
            </p>

            <div className="bg-surface-100 rounded-xl p-6">
              <p className="text-sm font-semibold text-surface-700 mb-2">Example calculation:</p>
              <p className="text-sm mb-2">A sole proprietor estimates taxable income of R600,000.</p>
              <ul className="text-sm space-y-1 list-disc pl-4">
                <li>Estimated tax on R600,000 (using individual tables): ~R151,000</li>
                <li>Less primary rebate (R17,235): ~R133,765</li>
                <li>First payment (50% by 31 Aug): R66,882</li>
                <li>Second payment (balance by 28 Feb): R66,883</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-surface-900 mt-10 mb-4">How to Pay Provisional Tax</h2>
            <p>Payments are made via SARS eFiling using the IRP6 return. You can pay through:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Direct deposit into SARS bank account (with the correct reference number)</li>
              <li>EFT on SARS eFiling</li>
              <li>At a SARS branch (not recommended)</li>
            </ul>
            <p>
              Each payment requires a separate IRP6 return submission on eFiling. The system will generate
              your payment reference number.
            </p>

            <h2 className="text-2xl font-bold text-surface-900 mt-10 mb-4">Penalties for Underestimating or Missing Payments</h2>
            <p>
              SARS imposes penalties if you underestimate your provisional tax or miss deadlines:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Underestimation penalty:</strong> If your estimate is less than 80% of actual taxable
                income (or 90% for certain taxpayers), SARS charges a 20% per annum penalty on the shortfall.
              </li>
              <li>
                <strong>Late payment penalty:</strong> 10% of the unpaid amount for late payments.
              </li>
              <li>
                <strong>Interest:</strong> SARS charges interest at the prescribed rate (currently 10.5% per annum)
                on any outstanding amounts from the due date.
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-surface-900 mt-10 mb-4">Tips for Managing Provisional Tax</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Set aside 25-30% of all non-salary income for tax throughout the year.</li>
              <li>Keep accurate financial records to make realistic estimates.</li>
              <li>Use the third (voluntary) payment if your actual income exceeds your estimate significantly.</li>
              <li>Work with an accountant to avoid underestimation penalties.</li>
              <li>Pay early if possible — SARS does not pay interest on overpayments.</li>
            </ul>

            <div className="bg-brand-50 rounded-2xl p-8 mt-10">
              <h3 className="text-xl font-bold text-surface-900 mb-3">Need Help With Provisional Tax?</h3>
              <p className="mb-4">
                Tanosa Group helps businesses and individuals across Bloemfontein and the Free State with
                provisional tax calculations, IRP6 submissions, and SARS compliance. Contact us today.
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
