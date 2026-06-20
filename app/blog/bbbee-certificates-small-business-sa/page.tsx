import type { Metadata } from 'next'
import Breadcrumbs from '@/components/global/Breadcrumbs'
import CTA from '@/components/global/CTA'

const baseUrl = 'https://www.tanosagroup.com'
const pageUrl = 'https://www.tanosagroup.com/blog/bbbee-certificates-small-business-sa'

export const metadata: Metadata = {
  title: { absolute: 'B-BBEE Certificates for Small Business SA | Tanosa Group' },
  description: 'Complete guide to B-BBEE certificates for EMEs and QSEs in South Africa. How to get your certificate, scorecard levels, and compliance requirements.',
  alternates: { canonical: pageUrl },
  openGraph: {
    title: 'B-BBEE Certificates for Small Business SA | Tanosa Group',
    description: 'Complete guide to B-BBEE certificates for EMEs and QSEs in South Africa. How to get your certificate, scorecard levels, and compliance requirements.',
    url: pageUrl,
    siteName: 'Tanosa Group',
    locale: 'en_ZA',
    type: 'article',
    images: [{ url: `${baseUrl}/images/Tanosa_Group_logo.webp` }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'B-BBEE Certificates for Small Business SA | Tanosa Group',
    description: 'Complete guide to B-BBEE certificates for EMEs and QSEs in South Africa.',
    images: [`${baseUrl}/images/Tanosa_Group_logo.webp`],

  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      headline: 'B-BBEE Certificates for Small Businesses in South Africa: Complete Guide',
      description: 'Complete guide to B-BBEE certificates for EMEs and QSEs. Levels, scorecards, costs, and how to get your certificate online.',
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
        { '@type': 'ListItem', position: 3, name: 'B-BBEE Certificates Guide', item: pageUrl },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What B-BBEE level do I need to do business with government or large companies?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Most government tenders and large corporate contracts require a B-BBEE level 1, 2, or 3 (135% to 110% procurement recognition). Level 4 (100% recognition) is often the minimum acceptable. A level 4 or higher is typically required to win government and corporate contracts.',
          },
        },
        {
          '@type': 'Question',
          name: "What is the difference between an EME and a QSE for B-BBEE?",
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'An EME (Exempted Micro Enterprise) has annual turnover of R10 million or less and uses a simplified scorecard with 4 elements. EMEs automatically qualify as level 4 if 51%+ black-owned or level 2 if 100% black-owned. A QSE (Qualifying Small Enterprise) has turnover between R10 million and R50 million and uses a full scorecard with 5 elements.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do I get a B-BBEE certificate?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'EMEs can get a free B-BBEE certificate through the CIPC BizPortal or from a SANAS-accredited verification agency. QSEs and generic entities must undergo a full verification by a SANAS-accredited B-BBEE verification agency. You will need to provide company registration documents, financial statements, and ownership details.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is a B-BBEE certificate mandatory for all businesses in South Africa?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'There is no law requiring every business to have a B-BBEE certificate. However, to tender for government contracts, do business with most large corporations, apply for certain licences, or claim enhanced tax deductions, a valid B-BBEE certificate is required. Practically, most formal businesses need one to access the mainstream economy.',
          },
        },
      ],
    },
  ],
}

export default function BBBEECertificatesGuide() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <article className="container-page py-8">
        <Breadcrumbs items={[
          { name: 'Blog', href: '/blog' },
          { name: 'B-BBEE Certificates Guide' },
        ]} />
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold text-surface-900 mb-6 mt-8">
            B-BBEE Certificates for Small Businesses in South Africa: Complete Guide
          </h1>
          <div className="flex items-center gap-4 text-sm text-surface-500 mb-8">
            <span>June 13, 2026</span>
            <span>9 min read</span>
          </div>

          <div className="prose prose-lg max-w-none text-surface-600 leading-relaxed space-y-6">
            <p>
              Broad-Based Black Economic Empowerment (B-BBEE) affects how businesses in South Africa
              win contracts, access funding, and compete in the mainstream economy. If you are a small
              business owner, understanding your B-BBEE status and getting the right certificate is
              essential. This guide covers everything you need to know.
            </p>

            <h2 className="text-2xl font-bold text-surface-900 mt-10 mb-4">What Is B-BBEE?</h2>
            <p>
              B-BBEE is a government policy designed to address economic inequality in South Africa by
              promoting meaningful participation of black people in the economy. It is governed by the
              Broad-Based Black Economic Empowerment Act (Act 53 of 2003, as amended).
            </p>
            <p>
              B-BBEE uses a scorecard system to measure a company&apos;s empowerment credentials across
              several elements. Your B-BBEE level determines how you are rated by customers, government
              tender boards, and procurement departments.
            </p>

            <h2 className="text-2xl font-bold text-surface-900 mt-10 mb-4">B-BBEE Levels Explained</h2>

            <div className="bg-surface-100 rounded-xl p-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-surface-300">
                    <th className="text-left py-2 font-semibold">B-BBEE Level</th>
                    <th className="text-left py-2 font-semibold">Score (Points)</th>
                    <th className="text-left py-2 font-semibold">Procurement Recognition %</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-surface-200">
                    <td className="py-2">Level 1</td>
                    <td className="py-2">100+ points</td>
                    <td className="py-2">135%</td>
                  </tr>
                  <tr className="border-b border-surface-200">
                    <td className="py-2">Level 2</td>
                    <td className="py-2">95–99 points</td>
                    <td className="py-2">125%</td>
                  </tr>
                  <tr className="border-b border-surface-200">
                    <td className="py-2">Level 3</td>
                    <td className="py-2">90–94 points</td>
                    <td className="py-2">110%</td>
                  </tr>
                  <tr className="border-b border-surface-200">
                    <td className="py-2">Level 4</td>
                    <td className="py-2">80–89 points</td>
                    <td className="py-2">100%</td>
                  </tr>
                  <tr className="border-b border-surface-200">
                    <td className="py-2">Level 5</td>
                    <td className="py-2">75–79 points</td>
                    <td className="py-2">80%</td>
                  </tr>
                  <tr className="border-b border-surface-200">
                    <td className="py-2">Level 6</td>
                    <td className="py-2">70–74 points</td>
                    <td className="py-2">60%</td>
                  </tr>
                  <tr className="border-b border-surface-200">
                    <td className="py-2">Level 7</td>
                    <td className="py-2">55–69 points</td>
                    <td className="py-2">50%</td>
                  </tr>
                  <tr className="border-b border-surface-200">
                    <td className="py-2">Level 8</td>
                    <td className="py-2">40–54 points</td>
                    <td className="py-2">10%</td>
                  </tr>
                  <tr>
                    <td className="py-2">Non-compliant</td>
                    <td className="py-2">Below 40 points</td>
                    <td className="py-2">0%</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>
              <strong>Procurement recognition</strong> is what matters most. If you are a Level 1 supplier,
              your client can count 135% of your invoice value toward their B-BBEE procurement spend.
              This makes Level 1 and 2 suppliers highly sought after.
            </p>

            <h2 className="text-2xl font-bold text-surface-900 mt-10 mb-4">EME vs QSE vs Generic: Which Category Fits You?</h2>
            <p>
              Your B-BBEE status and the scorecard you use depend on your annual turnover:
            </p>

            <div className="bg-surface-100 rounded-xl p-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-surface-300">
                    <th className="text-left py-2 font-semibold">Category</th>
                    <th className="text-left py-2 font-semibold">Annual Turnover</th>
                    <th className="text-left py-2 font-semibold">Scorecard Elements</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-surface-200">
                    <td className="py-2">EME (Exempted Micro Enterprise)</td>
                    <td className="py-2">R10 million or less</td>
                    <td className="py-2">4 elements (simplified)</td>
                  </tr>
                  <tr className="border-b border-surface-200">
                    <td className="py-2">QSE (Qualifying Small Enterprise)</td>
                    <td className="py-2">R10 million – R50 million</td>
                    <td className="py-2">5 elements</td>
                  </tr>
                  <tr>
                    <td className="py-2">Generic</td>
                    <td className="py-2">Above R50 million</td>
                    <td className="py-2">5 elements (full)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-surface-900 mt-10 mb-4">EME B-BBEE Status: Automatic Levels</h2>
            <p>
              EMEs (turnover of R10 million or less) enjoy simplified B-BBEE recognition. You automatically
              qualify for:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Level 4 (100% recognition)</strong> — If your business is at least 51% black-owned</li>
              <li><strong>Level 2 (125% recognition)</strong> — If your business is 100% black-owned</li>
              <li><strong>Level 1 (135% recognition)</strong> — If your business is 100% black-owned and qualifies as a start-up (less than 1 year old) or has a turnover below R1 million</li>
            </ul>
            <p>
              EMEs are not required to be scored on all B-BBEE elements. You simply need to verify your
              ownership status and turnover to receive your certificate.
            </p>

            <h2 className="text-2xl font-bold text-surface-900 mt-10 mb-4">QSE B-BBEE Scorecard</h2>
            <p>
              If your turnover is between R10 million and R50 million, you are a QSE and must be scored
              on 5 elements:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Ownership</strong> — 25 points (black shareholding and voting rights)</li>
              <li><strong>Management Control</strong> — 15 points (black representation at board and senior management level)</li>
              <li><strong>Skills Development</strong> — 20 points (training spend on black employees)</li>
              <li><strong>Enterprise and Supplier Development</strong> — 30 points (procurement from B-BBEE compliant suppliers and supporting small businesses)</li>
              <li><strong>Socio-Economic Development</strong> — 10 points (contributions to community initiatives)</li>
            </ul>
            <p>
              QSEs can choose any 5 of the 5 elements to be scored on (i.e. all 5 are mandatory for a full scorecard).
            </p>

            <h2 className="text-2xl font-bold text-surface-900 mt-10 mb-4">How to Get a B-BBEE Certificate</h2>

            <h3 className="text-xl font-bold text-surface-900 mt-8 mb-3">For EMEs (Free Certificate Options)</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>CIPC BizPortal</strong> — EMEs can register for a free B-BBEE certificate on the
                CIPC BizPortal website. This is the easiest and most cost-effective option. You will need
                your <a href="/blog/how-to-register-a-business-in-south-africa" className="text-brand-600 underline">company registration number</a> and ownership details.
              </li>
              <li>
                <strong>Accredited Verification Agencies</strong> — Some SANAS-accredited agencies offer
                free EME certificates as a lead generation service. Others charge a small fee (R500–R1,500).
              </li>
              <li>
                <strong>Accounting Firms</strong> — Many accounting firms, including Tanosa Group, can
                assist with B-BBEE certificate applications for EMEs.
              </li>
            </ul>

            <h3 className="text-xl font-bold text-surface-900 mt-8 mb-3">For QSEs and Generic Entities</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>You must undergo a full B-BBEE verification by a SANAS-accredited verification agency</li>
              <li>Prepare documentation: financial statements, ownership register, employment equity report, skills development report, supplier list, and CSI contributions</li>
              <li>The verification process takes 2-4 weeks</li>
              <li>Costs range from R5,000 to R30,000 depending on company size and complexity</li>
              <li>Certificates are valid for 12 months</li>
            </ul>

            <h2 className="text-2xl font-bold text-surface-900 mt-10 mb-4">Documents Needed for Verification</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>CIPC registration certificate and MOI</li>
              <li>Share register and ownership documents</li>
              <li>Annual financial statements or management accounts</li>
              <li>Payroll records and skills development plan</li>
              <li>Employment equity report</li>
              <li>Supplier and procurement records</li>
              <li>CSI or socio-economic development proof</li>
            </ul>

            <h2 className="text-2xl font-bold text-surface-900 mt-10 mb-4">Why B-BBEE Matters for Your Business</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Government tenders</strong> — All government and municipal contracts require B-BBEE compliance. A low level disqualifies you from most tenders.</li>
              <li><strong>Corporate supply chains</strong> — Large companies must procure from B-BBEE compliant suppliers to maintain their own scorecard. If you are not compliant, you will be excluded from their supply chains.</li>
              <li><strong>Licences and permits</strong> — Some industry licences (e.g. mining, liquor, gambling) require B-BBEE compliance.</li>
              <li><strong>Access to finance</strong> — Some development finance institutions (e.g. SEFA, SEDA) require B-BBEE certification for funding applications.</li>
              <li><strong>Tax incentives</strong> — The Section 12H tax incentive rewards companies that train new black employees, but requires B-BBEE compliance.</li>
            </ul>

            <h2 className="text-2xl font-bold text-surface-900 mt-10 mb-4">Common B-BBEE Mistakes</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Assuming you do not need one</strong> — Even if you do not tender directly, your
                customers may require you to be B-BBEE compliant for them to count procurement spend.
              </li>
              <li>
                <strong>Using an expired certificate</strong> — B-BBEE certificates expire after 12 months.
                An expired certificate is treated as no certificate.
              </li>
              <li>
                <strong>Not verifying your EME status annually</strong> — If your turnover exceeds R10 million,
                you lose your EME status and need a full QSE verification.
              </li>
              <li>
                <strong>Not keeping proper records</strong> — Verification agencies require supporting
                documents. Poor record-keeping delays the process or results in a lower score.
              </li>
            </ul>

            <div className="bg-brand-50 rounded-2xl p-8 mt-10">
              <h3 className="text-xl font-bold text-surface-900 mb-3">Need Help With Your B-BBEE Certificate?</h3>
              <p className="mb-4">
                Tanosa Group assists EMEs and QSEs across Bloemfontein and the Free State with B-BBEE
                certificate applications, verification preparation, and compliance advice.
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
