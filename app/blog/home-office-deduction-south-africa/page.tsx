import type { Metadata } from 'next'
import Breadcrumbs from '@/components/global/Breadcrumbs'
import CTA from '@/components/global/CTA'

const baseUrl = 'https://www.tanosagroup.com'
const pageUrl = 'https://www.tanosagroup.com/blog/home-office-deduction-south-africa'

export const metadata: Metadata = {
  title: { absolute: 'Home Office Deduction South Africa | Tanosa Group' },
  description: 'Complete guide to claiming a home office tax deduction in South Africa. Eligibility, calculation, SARS rules, and common mistakes.',
  alternates: { canonical: pageUrl },
  openGraph: {
    title: 'Home Office Deduction South Africa | Tanosa Group',
    description: 'Complete guide to claiming a home office tax deduction in South Africa. Eligibility, calculation, SARS rules, and common mistakes.',
    url: pageUrl,
    siteName: 'Tanosa Group',
    locale: 'en_ZA',
    type: 'article',
    images: [{ url: `${baseUrl}/images/Tanosa_Group_logo.webp` }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Home Office Deduction South Africa | Tanosa Group',
    description: 'Complete guide to claiming a home office tax deduction in South Africa.',
    images: [`${baseUrl}/images/Tanosa_Group_logo.webp`],
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      headline: 'How to Claim a Home Office Deduction in South Africa',
      description: 'Complete guide to claiming a home office tax deduction. Eligibility, calculation methods, allowed expenses, SARS requirements, and common mistakes.',
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
        { '@type': 'ListItem', position: 3, name: 'Home Office Deduction Guide', item: pageUrl },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Who can claim a home office deduction in South Africa?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'You can claim a home office deduction if you work from home and the room is specifically equipped and exclusively used for trade purposes. For salaried employees, your duties must be mainly performed in the home office (more than 50%). For business owners and freelancers, you must regularly and exclusively use the space for your business.',
          },
        },
        {
          '@type': 'Question',
          name: 'What home office expenses can I claim?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'You can claim a portion of: rent or bond interest, rates and taxes, electricity and water, internet and telephone, cleaning costs, and repairs and maintenance. The deductible portion is calculated based on the floor area of the home office as a percentage of the total floor area of your home.',
          },
        },
        {
          '@type': 'Question',
          name: 'How is the home office deduction calculated?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Calculate the floor area of your home office as a percentage of your total home floor area. Apply that percentage to each eligible expense. For example, if your office is 10% of total floor area and your total rent is R100,000, you can claim R10,000. Add up all apportioned expenses for the total deduction.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I claim a home office deduction if I am a salaried employee working remotely?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, but the requirements are strict. You must have a room specifically equipped and exclusively used for work, and more than 50% of your duties must be performed in that home office. If you are a commission earner and more than 50% of your remuneration is commission, the home office must be where you mainly perform your duties. You cannot claim if your employer provides a suitable office space.',
          },
        },
      ],
    },
  ],
}

export default function HomeOfficeDeductionGuide() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <article className="container-page py-8">
        <Breadcrumbs items={[
          { name: 'Blog', href: '/blog' },
          { name: 'Home Office Deduction Guide' },
        ]} />
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold text-surface-900 mb-6 mt-8">
            How to Claim a Home Office Deduction in South Africa
          </h1>
          <div className="flex items-center gap-4 text-sm text-surface-500 mb-8">
            <span>June 13, 2026</span>
            <span>8 min read</span>
          </div>

          <div className="prose prose-lg max-w-none text-surface-600 leading-relaxed space-y-6">
            <p>
              If you work from home — whether as a business owner, freelancer, or employee — you
              may be able to claim <a href="/blog/tax-deductions-small-business-south-africa" className="text-brand-600 underline">tax deductions for small businesses</a> like the home office deduction on your tax return. SARS allows you
              to deduct a portion of your home expenses based on the space used for work.
              This guide explains how the deduction works and how to claim it correctly.
            </p>

            <h2 className="text-2xl font-bold text-surface-900 mt-10 mb-4">Who Qualifies for the Home Office Deduction?</h2>
            <p>
              SARS sets strict criteria for claiming the home office deduction. You qualify if:
            </p>

            <h3 className="text-xl font-bold text-surface-900 mt-8 mb-3">For Business Owners and Freelancers</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>The room or area is <strong>specifically equipped</strong> for your trade (desk, chair, computer, etc.)</li>
              <li>The area is <strong>regularly and exclusively used</strong> for business purposes</li>
              <li>No other suitable office space is available to you outside your home</li>
            </ul>

            <h3 className="text-xl font-bold text-surface-900 mt-8 mb-3">For Salaried Employees</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Your employer does not provide a suitable office space for you</li>
              <li>More than 50% of your duties are performed in the home office</li>
              <li>The room is specifically equipped and exclusively used for work</li>
            </ul>

            <h3 className="text-xl font-bold text-surface-900 mt-8 mb-3">For Commission Earners</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>More than 50% of your total remuneration is from commission</li>
              <li>You mainly perform your duties in the home office</li>
              <li>The room is specifically equipped and exclusively used for work</li>
            </ul>

            <h2 className="text-2xl font-bold text-surface-900 mt-10 mb-4">What Expenses Can You Claim?</h2>
            <p>
              You can claim a portion of your home expenses based on the floor area of your
              home office as a percentage of your total home floor area.
            </p>

            <div className="bg-surface-100 rounded-xl p-6">
              <p className="text-sm font-semibold text-surface-700 mb-2">Claimable expenses:</p>
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-surface-300">
                    <th className="text-left py-2 font-semibold">Expense</th>
                    <th className="text-left py-2 font-semibold">Claimable?</th>
                    <th className="text-left py-2 font-semibold">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-surface-200">
                    <td className="py-2">Bond interest</td>
                    <td className="py-2">Yes</td>
                    <td className="py-2">Only interest portion, not capital repayment</td>
                  </tr>
                  <tr className="border-b border-surface-200">
                    <td className="py-2">Rent</td>
                    <td className="py-2">Yes</td>
                    <td className="py-2">Full rental amount</td>
                  </tr>
                  <tr className="border-b border-surface-200">
                    <td className="py-2">Rates and taxes</td>
                    <td className="py-2">Yes</td>
                    <td className="py-2">Municipal property rates</td>
                  </tr>
                  <tr className="border-b border-surface-200">
                    <td className="py-2">Electricity and water</td>
                    <td className="py-2">Yes</td>
                    <td className="py-2">Based on usage or apportionment</td>
                  </tr>
                  <tr className="border-b border-surface-200">
                    <td className="py-2">Internet and telephone</td>
                    <td className="py-2">Yes</td>
                    <td className="py-2">Business portion only</td>
                  </tr>
                  <tr className="border-b border-surface-200">
                    <td className="py-2">Cleaning costs</td>
                    <td className="py-2">Yes</td>
                    <td className="py-2">Apportioned by floor area</td>
                  </tr>
                  <tr className="border-b border-surface-200">
                    <td className="py-2">Repairs and maintenance</td>
                    <td className="py-2">Yes</td>
                    <td className="py-2">Apportioned by floor area</td>
                  </tr>
                  <tr>
                    <td className="py-2">Capital repayment (bond)</td>
                    <td className="py-2">No</td>
                    <td className="py-2">Not deductible</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-surface-900 mt-10 mb-4">How to Calculate the Deduction</h2>

            <h3 className="text-xl font-bold text-surface-900 mt-8 mb-3">Step 1: Measure Your Home Office</h3>
            <p>
              Measure the floor area of your home office in square metres. Also measure the total
              floor area of your home (excluding garages, gardens, and outbuildings).
            </p>

            <h3 className="text-xl font-bold text-surface-900 mt-8 mb-3">Step 2: Calculate the Business Percentage</h3>
            <div className="bg-surface-100 rounded-xl p-4">
              <p className="text-sm font-mono">
                Business % = (Office floor area / Total home floor area) x 100
              </p>
            </div>

            <h3 className="text-xl font-bold text-surface-900 mt-8 mb-3">Step 3: Apply the Percentage</h3>
            <p>
              Apply your business percentage to each eligible expense and add them up.
            </p>

            <div className="bg-surface-100 rounded-xl p-6">
              <p className="text-sm font-semibold text-surface-700 mb-2">Example calculation:</p>
              <p className="text-sm mb-2">A 15 m² home office in a 150 m² home = 10% business use.</p>
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-surface-300">
                    <th className="text-left py-2 font-semibold">Expense</th>
                    <th className="text-right py-2 font-semibold">Annual Total</th>
                    <th className="text-right py-2 font-semibold">Claimable (10%)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-surface-200">
                    <td className="py-2">Bond interest</td>
                    <td className="text-right py-2">R72,000</td>
                    <td className="text-right py-2">R7,200</td>
                  </tr>
                  <tr className="border-b border-surface-200">
                    <td className="py-2">Rates and taxes</td>
                    <td className="text-right py-2">R12,000</td>
                    <td className="text-right py-2">R1,200</td>
                  </tr>
                  <tr className="border-b border-surface-200">
                    <td className="py-2">Electricity and water</td>
                    <td className="text-right py-2">R18,000</td>
                    <td className="text-right py-2">R1,800</td>
                  </tr>
                  <tr className="border-b border-surface-200">
                    <td className="py-2">Internet</td>
                    <td className="text-right py-2">R7,200</td>
                    <td className="text-right py-2">R720</td>
                  </tr>
                  <tr>
                    <td className="py-2 font-semibold">Total deduction</td>
                    <td className="text-right py-2"></td>
                    <td className="text-right py-2 font-semibold">R10,920</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-surface-900 mt-10 mb-4">How to Claim on Your Tax Return</h2>

            <h3 className="text-xl font-bold text-surface-900 mt-8 mb-3">For Business Owners and Freelancers</h3>
            <p>
              Include the home office expenses in your business income and expense schedule on your
              tax return. The deduction is calculated as part of your business operating expenses.
            </p>

            <h3 className="text-xl font-bold text-surface-900 mt-8 mb-3">For Employees and Commission Earners</h3>
            <p>
              On your ITR12 tax return, complete the &quot;Home Office Expenses&quot; section under
              &quot;Travel and Other Deductions&quot;. You will need:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Your employer must complete and sign form IRP5/ITP3(a) confirming that no office space was provided</li>
              <li>Calculate and enter the total home office expenses</li>
              <li>Keep all supporting documents and calculations for 5 years</li>
            </ul>

            <h2 className="text-2xl font-bold text-surface-900 mt-10 mb-4">Common Mistakes</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Claiming without exclusive use</strong> — The area must be used only for work. A dining table used for both work and meals does not qualify.</li>
              <li><strong>No supporting docs</strong> — Keep all utility bills, bond statements, and lease agreements. SARS may request them.</li>
              <li><strong>Claiming capital bond repayment</strong> — Only bond interest is deductible, not the capital portion.</li>
              <li><strong>Incorrect apportionment</strong> — Use floor area, not number of rooms. A room may be 20% of rooms but only 10% of floor area.</li>
              <li><strong>Claiming when already provided with an office</strong> — If your employer provides a suitable office elsewhere, you cannot claim.</li>
              <li><strong>Claiming home office AND travel allowance for the same trips</strong> — These may overlap incorrectly. Consult a tax professional.</li>
            </ul>

            <h2 className="text-2xl font-bold text-surface-900 mt-10 mb-4">SARS Audit Risk for Home Office Claims</h2>
            <p>
              Home office deductions are a common SARS audit trigger. SARS looks for:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Claims that seem disproportionately high relative to income</li>
              <li>Missing or incomplete supporting documents</li>
              <li>Employees claiming without the required employer declaration</li>
            </ul>
            <p>
              To reduce audit risk, keep detailed records including a floor plan with measurements,
              photos of your home office setup, all utility bills, and your calculation worksheet.
            </p>

            <div className="bg-brand-50 rounded-2xl p-8 mt-10">
              <h3 className="text-xl font-bold text-surface-900 mb-3">Need Help With Your Home Office Deduction?</h3>
              <p className="mb-4">
                Tanosa Group helps taxpayers in Bloemfontein and the Free State claim the correct
                deductions while staying fully compliant with SARS requirements.
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
