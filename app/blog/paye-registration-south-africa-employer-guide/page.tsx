import type { Metadata } from 'next'
import Breadcrumbs from '@/components/global/Breadcrumbs'
import CTA from '@/components/global/CTA'

const baseUrl = 'https://www.tanosagroup.com'
const pageUrl = 'https://www.tanosagroup.com/blog/paye-registration-south-africa-employer-guide'

export const metadata: Metadata = {
  title: { absolute: 'How to Register for PAYE in South Africa: Employer\'s Guide | Tanosa Group' },
  description: 'Complete guide to registering for PAYE, UIF, and SDL in South Africa. Learn employer tax obligations, deadlines, and how to submit EMP201 and EMP501 returns.',
  alternates: { canonical: pageUrl },
  openGraph: {
    title: 'How to Register for PAYE in South Africa: Employer\'s Guide | Tanosa Group',
    description: 'Complete guide to registering for PAYE, UIF, and SDL in South Africa. Learn employer tax obligations, deadlines, and how to submit returns.',
    url: pageUrl,
    siteName: 'Tanosa Group',
    locale: 'en_ZA',
    type: 'article',
    images: [{ url: `${baseUrl}/images/Tanosa_Group_logo.png` }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Register for PAYE in South Africa: Employer\'s Guide | Tanosa Group',
    description: 'Complete guide to registering for PAYE, UIF, and SDL in South Africa.',
    images: [`${baseUrl}/images/Tanosa_Group_logo.png`],
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      headline: "How to Register for PAYE in South Africa: Employer's Guide",
      description: 'Complete guide to registering for PAYE, UIF, and SDL. Learn employer tax obligations, monthly submissions, and bi-annual reconciliations.',
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
        { '@type': 'ListItem', position: 3, name: 'PAYE Registration Guide', item: pageUrl },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'When must I register as an employer for PAYE in South Africa?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'You must register as an employer with SARS as soon as you hire your first employee, regardless of how much you pay them. There is no minimum threshold for PAYE registration. You must register within 21 days of becoming an employer.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the difference between PAYE, UIF, and SDL?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'PAYE (Pay-As-You-Earn) is income tax deducted from employees salaries and paid to SARS. UIF (Unemployment Insurance Fund) is 2% of salary (1% employee, 1% employer) paid to the Department of Labour. SDL (Skills Development Levy) is 1% of salary paid by the employer if the annual payroll exceeds R500,000.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do I submit PAYE returns to SARS?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Employers submit monthly EMP201 returns via SARS eFiling by the 7th of each month. Twice a year (August and February), employers submit EMP501 reconciliation returns that reconcile the full six months of PAYE, UIF, and SDL declarations.',
          },
        },
        {
          '@type': 'Question',
          name: 'What happens if I do not register for PAYE?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Failing to register as an employer is a criminal offence under the Tax Administration Act. SARS can impose penalties of up to 200% of the unpaid tax, charge interest on arrears, and pursue criminal prosecution for non-compliance.',
          },
        },
      ],
    },
  ],
}

export default function PAYERegistrationGuide() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <article className="container-page py-8">
        <Breadcrumbs items={[
          { name: 'Blog', href: '/blog' },
          { name: 'PAYE Registration Guide' },
        ]} />
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold text-surface-900 mb-6 mt-8">
            How to Register for PAYE in South Africa: Employer&apos;s Guide
          </h1>
          <div className="flex items-center gap-4 text-sm text-surface-500 mb-8">
            <span>June 13, 2026</span>
            <span>10 min read</span>
          </div>

          <div className="prose prose-lg max-w-none text-surface-600 leading-relaxed space-y-6">
            <p>
              If you employ staff in South Africa, you must register as an employer with SARS and comply
              with payroll tax obligations. This includes PAYE, UIF, and potentially SDL. This guide
              covers everything you need to know, from registration to monthly submissions.
            </p>

            <h2 className="text-2xl font-bold text-surface-900 mt-10 mb-4">What Is PAYE?</h2>
            <p>
              Pay-As-You-Earn (PAYE) is the income tax you must deduct from your employees&apos; salaries
              and pay over to SARS. It is not a cost to your business — it is your employees&apos; tax
              that you collect on behalf of SARS. However, you are legally responsible for deducting
              and remitting it correctly.
            </p>

            <h2 className="text-2xl font-bold text-surface-900 mt-10 mb-4">Employer Obligations at a Glance</h2>

            <div className="bg-surface-100 rounded-xl p-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-surface-300">
                    <th className="text-left py-2 font-semibold">Tax Type</th>
                    <th className="text-left py-2 font-semibold">Rate</th>
                    <th className="text-left py-2 font-semibold">Who Pays</th>
                    <th className="text-left py-2 font-semibold">Submission</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-surface-200">
                    <td className="py-2">PAYE</td>
                    <td className="py-2">Progressive (18%–45%)</td>
                    <td className="py-2">Employee (deducted by employer)</td>
                    <td className="py-2">Monthly (EMP201)</td>
                  </tr>
                  <tr className="border-b border-surface-200">
                    <td className="py-2">UIF</td>
                    <td className="py-2">2% of gross salary (1% employee + 1% employer)</td>
                    <td className="py-2">Shared</td>
                    <td className="py-2">Monthly (EMP201)</td>
                  </tr>
                  <tr className="border-b border-surface-200">
                    <td className="py-2">SDL</td>
                    <td className="py-2">1% of gross salary</td>
                    <td className="py-2">Employer only</td>
                    <td className="py-2">Monthly (EMP201)</td>
                  </tr>
                  <tr>
                    <td className="py-2">Reconciliation</td>
                    <td className="py-2">N/A</td>
                    <td className="py-2">N/A</td>
                    <td className="py-2">Bi-annual (EMP501)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-surface-900 mt-10 mb-4">Step 1: Register as an Employer with SARS</h2>
            <p>
              You must register as an employer within 21 days of hiring your first employee. There is
              no minimum salary threshold — even part-time or casual employees trigger this obligation.
            </p>

            <h3 className="text-xl font-bold text-surface-900 mt-8 mb-3">Online Registration via eFiling</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Log in to SARS eFiling and switch your profile to &quot;Organisation&quot;</li>
              <li>Complete form RAV01 (Registration, Amendments, and Verification)</li>
              <li>Select &quot;Employer&quot; as the registration type</li>
              <li>Provide your company registration number and business details</li>
              <li>Specify the date you became an employer (first salary payment date)</li>
              <li>Submit and wait for SARS to issue your PAYE reference number</li>
            </ul>

            <h3 className="text-xl font-bold text-surface-900 mt-8 mb-3">Documents You Will Need</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>CIPC registration certificate</li>
              <li>Proof of business address (utility bill, lease agreement)</li>
              <li>Bank account details in the business name</li>
              <li>List of employees with ID numbers and salaries</li>
              <li>Signed employment contracts (for verification purposes)</li>
            </ul>

            <h2 className="text-2xl font-bold text-surface-900 mt-10 mb-4">Step 2: Register for UIF</h2>
            <p>
              The Unemployment Insurance Fund (UIF) provides short-term financial relief to workers who
              lose their jobs or cannot work due to illness, maternity, or adoption leave.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Register on the Department of Employment and Labour&apos;s UIF online portal</li>
              <li>Complete form UI-8 (Employer Registration)</li>
              <li>Provide company details and proof of registration</li>
              <li>UIF contributions are declared and paid via the monthly EMP201 return to SARS</li>
            </ul>
            <p>
              <strong>Contribution:</strong> 2% of gross salary — 1% deducted from the employee and
              1% paid by the employer. There is a salary cap of R17,712 per month (2026), meaning
              the maximum UIF contribution is R354.24 per employee (R177.12 each from employer and employee).
            </p>

            <h2 className="text-2xl font-bold text-surface-900 mt-10 mb-4">Step 3: Register for SDL (If Applicable)</h2>
            <p>
              The Skills Development Levy (SDL) is 1% of the total payroll, paid entirely by the employer.
              You must register for SDL if your annual payroll exceeds R500,000.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Register via SARS eFiling (same RAV01 form)</li>
              <li>SDL is declared and paid monthly via EMP201</li>
              <li>Funds are paid to Sector Education and Training Authorities (SETAs)</li>
              <li>Employers who pay SDL can claim grants back from their SETA for training employees</li>
            </ul>

            <h2 className="text-2xl font-bold text-surface-900 mt-10 mb-4">Step 4: Submit Monthly EMP201 Returns</h2>
            <p>
              Every month, you must submit an EMP201 return to SARS declaring the PAYE, UIF, and SDL
              for that month.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Due date:</strong> 7th day of the following month</li>
              <li><strong>How to submit:</strong> SARS eFiling → PAYE → EMP201</li>
              <li><strong>What to include:</strong> Total salaries paid, PAYE deducted, UIF contributions, SDL</li>
              <li><strong>Payment:</strong> Pay the total amount due via EFT or directly on eFiling</li>
            </ul>
            <p>
              If the 7th falls on a weekend or public holiday, the deadline moves to the next business day.
              Late submissions attract a 10% penalty on the unpaid amount plus interest.
            </p>

            <h2 className="text-2xl font-bold text-surface-900 mt-10 mb-4">Step 5: Submit Bi-Annual EMP501 Reconciliations</h2>
            <p>
              Twice a year, employers must submit an EMP501 reconciliation that reconciles the PAYE, UIF,
              and SDL declared on EMP201 returns with the actual amounts deducted from employees.
            </p>

            <div className="bg-surface-100 rounded-xl p-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-surface-300">
                    <th className="text-left py-2 font-semibold">Period</th>
                    <th className="text-left py-2 font-semibold">Months Covered</th>
                    <th className="text-left py-2 font-semibold">Submission Deadline</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-surface-200">
                    <td className="py-2">First half</td>
                    <td className="py-2">March – August</td>
                    <td className="py-2">31 October 2026</td>
                  </tr>
                  <tr>
                    <td className="py-2">Second half</td>
                    <td className="py-2">September – February</td>
                    <td className="py-2">30 April 2027</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>
              The EMP501 requires you to issue employees with IRP5/ITP3(a) tax certificates.
              These certificates summarise each employee&apos;s total salary, deductions, and tax paid
              for the period.
            </p>

            <h2 className="text-2xl font-bold text-surface-900 mt-10 mb-4">Using SARS Tax Deduction Tables</h2>
            <p>
              To calculate how much PAYE to deduct from each employee, use the SARS tax deduction tables
              (also called IRP5 tables). The tables account for:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>The employee&apos;s gross salary for the pay period</li>
              <li>Tax thresholds and rebates (primary, secondary, tertiary)</li>
              <li>Pension fund and retirement annuity contributions</li>
              <li>Medical scheme contributions and tax credits</li>
            </ul>
            <p>
              Most payroll software calculates PAYE automatically. If you run payroll manually, download
              the current tables from the SARS website or use the SARS tax calculator.
            </p>

            <h2 className="text-2xl font-bold text-surface-900 mt-10 mb-4">Common Payroll Tax Mistakes</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Not registering as an employer on time</strong> — SARS can backdate registration
                and impose penalties from the date you should have registered.
              </li>
              <li>
                <strong>Incorrect PAYE calculation</strong> — Using outdated tax tables or
                not accounting for medical credits results in under- or over-deductions.
              </li>
              <li>
                <strong>Missing EMP201 deadlines</strong> — Automatic penalties apply. Set reminders.
              </li>
              <li>
                <strong>Incorrect UIF classification</strong> — Some workers (independent contractors)
                are not eligible for UIF, but many employers misclassify employees as contractors.
              </li>
              <li>
                <strong>Not reconciling EMP501</strong> — SARS flags employers who do not reconcile.
                This can trigger an audit.
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-surface-900 mt-10 mb-4">Employer Penalties at a Glance</h2>
            <div className="bg-surface-100 rounded-xl p-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-surface-300">
                    <th className="text-left py-2 font-semibold">Offence</th>
                    <th className="text-left py-2 font-semibold">Penalty</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-surface-200">
                    <td className="py-2">Late EMP201 submission</td>
                    <td className="py-2">10% of unpaid amount + interest</td>
                  </tr>
                  <tr className="border-b border-surface-200">
                    <td className="py-2">Non-registration as employer</td>
                    <td className="py-2">Up to 200% of unpaid tax</td>
                  </tr>
                  <tr className="border-b border-surface-200">
                    <td className="py-2">Failure to deduct PAYE</td>
                    <td className="py-2">Employer remains liable for full amount</td>
                  </tr>
                  <tr>
                    <td className="py-2">Late EMP501 reconciliation</td>
                    <td className="py-2">Administrative penalty + interest</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-brand-50 rounded-2xl p-8 mt-10">
              <h3 className="text-xl font-bold text-surface-900 mb-3">Need Help With Payroll Tax Compliance?</h3>
              <p className="mb-4">
                Tanosa Group handles employer registration, PAYE calculations, EMP201 submissions, and
                EMP501 reconciliations for businesses across Bloemfontein and the Free State.
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
