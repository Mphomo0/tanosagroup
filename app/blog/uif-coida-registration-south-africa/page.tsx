import type { Metadata } from 'next'
import Breadcrumbs from '@/components/global/Breadcrumbs'
import CTA from '@/components/global/CTA'

const baseUrl = 'https://www.tanosagroup.com'
const pageUrl = 'https://www.tanosagroup.com/blog/uif-coida-registration-south-africa'

export const metadata: Metadata = {
  title: { absolute: 'UIF and COIDA Registration for Employers in South Africa | Tanosa Group' },
  description: 'Complete guide to UIF and COIDA registration in South Africa. Learn how to register, contribution rates, deadlines, and employer compliance requirements.',
  alternates: { canonical: pageUrl },
  openGraph: {
    title: 'UIF and COIDA Registration for Employers in South Africa | Tanosa Group',
    description: 'Complete guide to UIF and COIDA registration in South Africa. How to register, contribution rates, deadlines, and employer compliance.',
    url: pageUrl,
    siteName: 'Tanosa Group',
    locale: 'en_ZA',
    type: 'article',
    images: [{ url: `${baseUrl}/images/Tanosa_Group_logo.png` }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'UIF and COIDA Registration for Employers in South Africa | Tanosa Group',
    description: 'Complete guide to UIF and COIDA registration in South Africa.',
    images: [`${baseUrl}/images/Tanosa_Group_logo.png`],
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      headline: 'UIF and COIDA Registration for Employers in South Africa',
      description: 'Complete guide to UIF and COIDA registration for South African employers. Contribution rates, registration process, deadlines, and compliance requirements.',
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
        { '@type': 'ListItem', position: 3, name: 'UIF and COIDA Registration', item: pageUrl },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is the difference between UIF and COIDA?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'UIF (Unemployment Insurance Fund) provides short-term financial relief to workers who lose their jobs or cannot work due to illness, maternity, or adoption leave. COIDA (Compensation for Occupational Injuries and Diseases Act) provides compensation to employees who are injured on the job or contract occupational diseases. They are separate funds administered by different bodies — UIF by the Department of Employment and Labour, and COIDA by the Compensation Fund.',
          },
        },
        {
          '@type': 'Question',
          name: 'When must I register for UIF as an employer?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'You must register for UIF as soon as you hire your first employee. There is no minimum salary threshold — all employers with one or more employees must register. Registration is done via the Department of Employment and Labour online portal or at a provincial labour centre.',
          },
        },
        {
          '@type': 'Question',
          name: 'How much UIF must I pay for my employees?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The total UIF contribution is 2% of the employee\'s gross salary, split equally between employer and employee (1% each). The contribution is capped at a salary of R17,712 per month for 2026, meaning the maximum monthly UIF payment is R354.24 per employee (R177.12 each from employer and employee).',
          },
        },
        {
          '@type': 'Question',
          name: 'What happens if I do not register for UIF or COIDA?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Failure to register is a criminal offence. Employers face penalties, backdated contributions with interest, and potential legal action. If an unregistered employee claims UIF or lodges a compensation claim, the employer must pay all outstanding contributions plus penalties and may be personally liable for compensation costs.',
          },
        },
      ],
    },
  ],
}

export default function UIFCOIDAGuide() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <article className="container-page py-8">
        <Breadcrumbs items={[
          { name: 'Blog', href: '/blog' },
          { name: 'UIF and COIDA Registration' },
        ]} />
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold text-surface-900 mb-6 mt-8">
            UIF and COIDA Registration for Employers in South Africa
          </h1>
          <div className="flex items-center gap-4 text-sm text-surface-500 mb-8">
            <span>June 13, 2026</span>
            <span>9 min read</span>
          </div>

          <div className="prose prose-lg max-w-none text-surface-600 leading-relaxed space-y-6">
            <p>
              When you hire employees in South Africa, you must register for both the Unemployment
              Insurance Fund (UIF) and the Compensation Fund (COIDA). These are separate legal
              requirements that protect your employees and keep your business compliant. This guide
              covers both in detail.
            </p>

            <h2 className="text-2xl font-bold text-surface-900 mt-10 mb-4">Part 1: UIF (Unemployment Insurance Fund)</h2>

            <h3 className="text-xl font-bold text-surface-900 mt-8 mb-3">What Is UIF?</h3>
            <p>
              The Unemployment Insurance Fund provides short-term financial relief to employees who
              cannot work due to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Unemployment (retrenchment or dismissal)</li>
              <li>Illness</li>
              <li>Maternity leave</li>
              <li>Adoption leave</li>
              <li>Parental leave</li>
              <li>Dependant&apos;s death (death benefit)</li>
            </ul>

            <h3 className="text-xl font-bold text-surface-900 mt-8 mb-3">Who Must Register for UIF?</h3>
            <p>
              All employers in South Africa with one or more employees must register for UIF.
              There is no minimum salary threshold — every employee must be registered from
              their first day of employment.
            </p>
            <p>
              <strong>Who is exempt?</strong> Independent contractors, temporary employees employed
              for less than 8 weeks per year, and employees who work less than 24 hours per month
              for an employer are not covered by UIF.
            </p>

            <h3 className="text-xl font-bold text-surface-900 mt-8 mb-3">UIF Contribution Rates</h3>

            <div className="bg-surface-100 rounded-xl p-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-surface-300">
                    <th className="text-left py-2 font-semibold">Contributor</th>
                    <th className="text-left py-2 font-semibold">Rate</th>
                    <th className="text-left py-2 font-semibold">Maximum per Month (2026)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-surface-200">
                    <td className="py-2">Employer</td>
                    <td className="py-2">1% of gross salary</td>
                    <td className="py-2">R177.12</td>
                  </tr>
                  <tr className="border-b border-surface-200">
                    <td className="py-2">Employee</td>
                    <td className="py-2">1% of gross salary</td>
                    <td className="py-2">R177.12</td>
                  </tr>
                  <tr>
                    <td className="py-2 font-semibold">Total</td>
                    <td className="py-2 font-semibold">2% of gross salary</td>
                    <td className="py-2 font-semibold">R354.24 per employee</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>
              The salary cap for UIF is R17,712 per month for 2026. If an employee earns more than
              this, UIF is calculated on R17,712 only.
            </p>

            <h3 className="text-xl font-bold text-surface-900 mt-8 mb-3">How to Register for UIF</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Register via the Department of Employment and Labour online portal (uif.labour.gov.za)</li>
              <li>Complete form UI-8 (Employer Registration)</li>
              <li>Provide your company registration certificate and business details</li>
              <li>List all employees with their ID numbers and salaries</li>
              <li>Receive your UIF reference number</li>
            </ul>

            <h3 className="text-xl font-bold text-surface-900 mt-8 mb-3">How to Pay UIF Contributions</h3>
            <p>
              UIF contributions are declared and paid monthly through the SARS EMP201 return,
              alongside PAYE and SDL. The process is:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Include UIF in your monthly EMP201 submission on SARS eFiling</li>
              <li>Pay the total amount (PAYE + UIF + SDL) by the 7th of each month</li>
              <li>SARS distributes the UIF portion to the Department of Employment and Labour</li>
            </ul>
            <p>
              See our detailed {' '}
              <a href="/blog/paye-registration-south-africa-employer-guide" className="text-brand-600 underline">PAYE and employer registration guide</a>.
            </p>

            <h3 className="text-xl font-bold text-surface-900 mt-8 mb-3">UIF Declarations (UI-19)</h3>
            <p>
              When an employee leaves your employment, you must submit a UI-19 form to the
              Department of Employment and Labour within 3 days of termination. This form
              confirms the employee&apos;s reason for leaving and their earnings history,
              enabling them to claim UIF benefits.
            </p>

            <h2 className="text-2xl font-bold text-surface-900 mt-10 mb-4">Part 2: COIDA (Compensation Fund)</h2>

            <h3 className="text-xl font-bold text-surface-900 mt-8 mb-3">What Is COIDA?</h3>
            <p>
              The Compensation for Occupational Injuries and Diseases Act (COIDA) requires all
              employers to register with the Compensation Fund. The fund provides compensation
              to employees who are injured at work, become ill due to their work, or die as a
              result of a work-related incident.
            </p>

            <h3 className="text-xl font-bold text-surface-900 mt-8 mb-3">Who Must Register for COIDA?</h3>
            <p>
              Every employer in South Africa must register with the Compensation Fund, including:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>All companies and close corporations with employees</li>
              <li>Sole proprietors with employees</li>
              <li>Non-profit organisations and NGOs</li>
              <li>Domestic and farm employers</li>
            </ul>
            <p>
              <strong>Who is exempt?</strong> Sole proprietors with no employees and independent
              contractors are not required to register. However, sole proprietors can register
              voluntarily to cover themselves.
            </p>

            <h3 className="text-xl font-bold text-surface-900 mt-8 mb-3">COIDA Assessment Rates</h3>
            <p>
              Unlike UIF, COIDA contributions (called assessments) vary based on your industry
              risk classification. Rates range from approximately:
            </p>

            <div className="bg-surface-100 rounded-xl p-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-surface-300">
                    <th className="text-left py-2 font-semibold">Industry</th>
                    <th className="text-left py-2 font-semibold">Risk Category</th>
                    <th className="text-left py-2 font-semibold">Approximate Rate per R100 of Payroll</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-surface-200">
                    <td className="py-2">Office and professional services</td>
                    <td className="py-2">Low</td>
                    <td className="py-2">R0.17 – R0.50</td>
                  </tr>
                  <tr className="border-b border-surface-200">
                    <td className="py-2">Retail and hospitality</td>
                    <td className="py-2">Medium</td>
                    <td className="py-2">R0.50 – R1.50</td>
                  </tr>
                  <tr className="border-b border-surface-200">
                    <td className="py-2">Manufacturing and warehousing</td>
                    <td className="py-2">Medium-high</td>
                    <td className="py-2">R1.50 – R3.00</td>
                  </tr>
                  <tr>
                    <td className="py-2">Construction and mining</td>
                    <td className="py-2">High</td>
                    <td className="py-2">R3.00 – R7.00+</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>
              The Compensation Fund determines your exact rate based on your industry class
              and claims history.
            </p>

            <h3 className="text-xl font-bold text-surface-900 mt-8 mb-3">How to Register for COIDA</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Register on the Compensation Fund online portal (www.labour.gov.za)</li>
              <li>Complete form W.As.2 (Employer Registration)</li>
              <li>Provide company registration documents and business details</li>
              <li>Declare your estimated annual payroll for the assessment calculation</li>
              <li>Receive your Compensation Fund reference number</li>
            </ul>

            <h3 className="text-xl font-bold text-surface-900 mt-8 mb-3">COIDA Assessment and Payment</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Assessments are calculated annually based on your declared payroll and industry risk rate</li>
              <li>You must submit an annual return of earnings (ROE) to the Compensation Fund</li>
              <li>Payment is due within 30 days of receiving the assessment notice</li>
              <li>Late payments attract interest and penalties</li>
            </ul>

            <h2 className="text-2xl font-bold text-surface-900 mt-10 mb-4">UIF vs COIDA: Key Differences</h2>

            <div className="bg-surface-100 rounded-xl p-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-surface-300">
                    <th className="text-left py-2 font-semibold">Feature</th>
                    <th className="text-left py-2 font-semibold">UIF</th>
                    <th className="text-left py-2 font-semibold">COIDA</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-surface-200">
                    <td className="py-2">Purpose</td>
                    <td className="py-2">Unemployment, illness, maternity benefits</td>
                    <td className="py-2">Workplace injuries and occupational diseases</td>
                  </tr>
                  <tr className="border-b border-surface-200">
                    <td className="py-2">Administered by</td>
                    <td className="py-2">Department of Employment and Labour (UIF)</td>
                    <td className="py-2">Compensation Fund (DoEL)</td>
                  </tr>
                  <tr className="border-b border-surface-200">
                    <td className="py-2">Paid by</td>
                    <td className="py-2">Employer (1%) + Employee (1%)</td>
                    <td className="py-2">Employer only (100%)</td>
                  </tr>
                  <tr className="border-b border-surface-200">
                    <td className="py-2">Payment frequency</td>
                    <td className="py-2">Monthly (via EMP201 with SARS)</td>
                    <td className="py-2">Annual assessment</td>
                  </tr>
                  <tr className="border-b border-surface-200">
                    <td className="py-2">Rate</td>
                    <td className="py-2">2% of salary (capped at R354/month)</td>
                    <td className="py-2">Varies by industry (R0.17 – R7+ per R100 payroll)</td>
                  </tr>
                  <tr>
                    <td className="py-2">Registration body</td>
                    <td className="py-2">DoEL UIF portal or labour centre</td>
                    <td className="py-2">Compensation Fund portal</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-surface-900 mt-10 mb-4">Penalties for Non-Compliance</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>UIF:</strong> Late or non-registration results in penalties of up to 100% of the contributions due, plus interest. Employers who fail to submit UI-19 forms can be fined per employee.</li>
              <li><strong>COIDA:</strong> Failure to register or pay assessments can result in penalties of up to 200% of the assessment amount. The Compensation Fund can also pursue legal action and claim recovery of any compensation paid to your employees.</li>
            </ul>

            <div className="bg-brand-50 rounded-2xl p-8 mt-10">
              <h3 className="text-xl font-bold text-surface-900 mb-3">Need Help With UIF or COIDA Registration?</h3>
              <p className="mb-4">
                Tanosa Group handles employer compliance for businesses in Bloemfontein and the Free State.
                We manage UIF and COIDA registration, monthly submissions, and annual returns.
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
