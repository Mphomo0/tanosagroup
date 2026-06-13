import type { Metadata } from 'next'
import Breadcrumbs from '@/components/global/Breadcrumbs'
import CTA from '@/components/global/CTA'

const baseUrl = 'https://www.tanosagroup.com'
const pageUrl = 'https://www.tanosagroup.com/blog/starting-business-free-state-south-africa'

export const metadata: Metadata = {
  title: { absolute: 'Starting a Business in Free State, South Africa: Complete Guide | Tanosa Group' },
  description: 'Complete guide to starting a business in the Free State, South Africa. CIPC registration, SARS compliance, local resources, funding, and support in Bloemfontein and surrounding areas.',
  alternates: { canonical: pageUrl },
  openGraph: {
    title: 'Starting a Business in Free State, South Africa: Complete Guide | Tanosa Group',
    description: 'Complete guide to starting a business in the Free State, South Africa. CIPC registration, SARS compliance, local resources, and funding.',
    url: pageUrl,
    siteName: 'Tanosa Group',
    locale: 'en_ZA',
    type: 'article',
    images: [{ url: `${baseUrl}/images/Tanosa_Group_logo.png` }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Starting a Business in Free State, South Africa: Complete Guide | Tanosa Group',
    description: 'Complete guide to starting a business in the Free State, South Africa.',
    images: [`${baseUrl}/images/Tanosa_Group_logo.png`],
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      headline: 'Starting a Business in Free State, South Africa: Complete Guide',
      description: 'Complete guide to starting a business in the Free State. Covers CIPC registration, SARS compliance, local business support, funding options, and resources in Bloemfontein, Botshabelo, Thaba Nchu, and surrounding areas.',
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
        { '@type': 'ListItem', position: 3, name: 'Starting a Business in Free State', item: pageUrl },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How do I register a business in the Free State?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Business registration in the Free State is handled through the national CIPC system, just like anywhere in South Africa. You register online at eservices.cipc.co.za. There is no separate provincial registration. Tanosa Group, based in Bloemfontein, helps entrepreneurs across the Free State with the full registration process.',
          },
        },
        {
          '@type': 'Question',
          name: 'What business support is available in the Free State?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The Free State has several business support resources including the Free State Development Corporation (FDC) for funding and industrial space, Small Enterprise Development Agency (SEDA) offices in Bloemfontein for business mentoring, and the Free State Chamber of Commerce for networking. Various municipalities also offer business support services.',
          },
        },
        {
          '@type': 'Question',
          name: 'What are the best business opportunities in the Free State?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The Free State economy is driven by agriculture (grain, livestock), mining (gold, diamonds), manufacturing, and services. Growing sectors include logistics (due to the province central location), renewable energy, agro-processing, and tourism. Bloemfontein, as the judicial capital, also has strong demand for professional services.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do I need a special licence to operate a business in the Free State?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Most businesses do not need special provincial licences beyond standard CIPC registration and SARS registration. However, certain industries require specific licences: liquor trading requires a liquor licence, transportation requires operating permits, and food handling requires municipal health certificates. Check with the relevant municipality for local by-law requirements.',
          },
        },
      ],
    },
  ],
}

export default function FreeStateBusinessGuide() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <article className="container-page py-8">
        <Breadcrumbs items={[
          { name: 'Blog', href: '/blog' },
          { name: 'Starting a Business in Free State' },
        ]} />
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold text-surface-900 mb-6 mt-8">
            Starting a Business in Free State, South Africa: Complete Guide
          </h1>
          <div className="flex items-center gap-4 text-sm text-surface-500 mb-8">
            <span>June 13, 2026</span>
            <span>9 min read</span>
          </div>

          <div className="prose prose-lg max-w-none text-surface-600 leading-relaxed space-y-6">
            <p>
              The Free State is one of South Africa&apos;s most business-friendly provinces, with a
              central location, strong agricultural and mining sectors, and growing opportunities in
              services, logistics, and manufacturing. This guide covers everything you need to know
              about starting a business in the Free State, from registration to local resources.
            </p>

            <h2 className="text-2xl font-bold text-surface-900 mt-10 mb-4">Step 1: Choose Your Business Structure</h2>
            <p>
              The first decision is your legal structure. This applies everywhere in South Africa,
              including the Free State:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Private Company (Pty) Ltd</strong> — Most popular for serious businesses. Limited liability, separate legal entity, requires CIPC registration.</li>
              <li><strong>Sole Proprietorship</strong> — Simplest form. No CIPC registration needed. You are personally liable for all debts.</li>
              <li><strong>Non-Profit Company (NPC)</strong> — For community organisations, charities, and social enterprises.</li>
              <li><strong>Co-operative</strong> — For member-owned businesses in agriculture, services, or community projects.</li>
            </ul>
            <p>
              For a detailed comparison, see our guide on {' '}
              <a href="/blog/choosing-business-structure-south-africa" className="text-brand-600 underline">choosing the right business structure in South Africa</a>.
            </p>

            <h2 className="text-2xl font-bold text-surface-900 mt-10 mb-4">Step 2: Register Your Business</h2>
            <p>
              Business registration in the Free State is done through the national CIPC system.
              There is no separate provincial registration process.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Name reservation:</strong> R50 — reserve up to 4 names on the CIPC portal</li>
              <li><strong>Company registration:</strong> R175 (Pty Ltd online) — register via eservices.cipc.co.za</li>
              <li><strong>Processing time:</strong> 1-5 business days for online applications</li>
            </ul>
            <p>
              See our detailed {' '}
              <a href="/blog/how-to-register-a-business-in-south-africa" className="text-brand-600 underline">step-by-step business registration guide</a>.
            </p>

            <h2 className="text-2xl font-bold text-surface-900 mt-10 mb-4">Step 3: Register for Tax</h2>
            <p>After CIPC registration, register with SARS for the relevant tax types:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Income Tax</strong> — All businesses must register for income tax</li>
              <li><strong>VAT</strong> — Required if turnover exceeds R1 million annually. Voluntary from R50,000.</li>
              <li><strong>PAYE, UIF, SDL</strong> — Required as soon as you hire employees</li>
            </ul>
            <p>
              For a complete guide, see our {' '}
              <a href="/blog/vat-registration-south-africa-guide" className="text-brand-600 underline">VAT registration guide</a>{' '}
              and {' '}
              <a href="/blog/paye-registration-south-africa-employer-guide" className="text-brand-600 underline">PAYE registration guide</a>.
            </p>

            <h2 className="text-2xl font-bold text-surface-900 mt-10 mb-4">Business Support in the Free State</h2>

            <h3 className="text-xl font-bold text-surface-900 mt-8 mb-3">Free State Development Corporation (FDC)</h3>
            <p>
              The FDC is the province&apos;s leading economic development agency. They offer:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Industrial land and factory space for lease</li>
              <li>Business loans and funding for qualifying enterprises</li>
              <li>Investment facilitation and project management</li>
              <li>SDP (Supplier Development Programme) support</li>
            </ul>
            <p>
              The FDC has offices in Bloemfontein and supports businesses across all districts:
              Mangaung, Lejweleputswa, Thabo Mofutsanyane, Fezile Dabi, and Xhariep.
            </p>

            <h3 className="text-xl font-bold text-surface-900 mt-8 mb-3">Small Enterprise Development Agency (SEDA)</h3>
            <p>
              SEDA provides free business mentoring and advisory services. In the Free State, SEDA
              offices are located in:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Bloemfontein</strong> — Head office for the province</li>
              <li><strong>Welkom</strong> — Serving the Lejweleputswa region</li>
              <li><strong>Harrismith</strong> — Serving the Thabo Mofutsanyane region</li>
              <li><strong>Sasolburg</strong> — Serving the Fezile Dabi region</li>
            </ul>
            <p>
              SEDA offers business plan development, financial management training, marketing assistance,
              and access to the SEDA Technology Programme (STP) for manufacturing businesses.
            </p>

            <h3 className="text-xl font-bold text-surface-900 mt-8 mb-3">Free State Chamber of Commerce</h3>
            <p>
              The Free State Chamber of Commerce (FSCC) connects business owners across the province.
              Membership provides networking events, business referrals, advocacy on provincial issues,
              and access to trade missions.
            </p>

            <h2 className="text-2xl font-bold text-surface-900 mt-10 mb-4">Funding Options for Free State Businesses</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>FDC Business Loans</strong> — Funding for established small businesses with growth potential</li>
              <li><strong>Small Enterprise Finance Agency (SEFA)</strong> — Micro-loans from R500 to R500,000</li>
              <li><strong>National Empowerment Fund (NEF)</strong> — Funding for black-owned and managed businesses</li>
              <li><strong>Industrial Development Corporation (IDC)</strong> — Funding for manufacturing, agro-processing, and industrial projects</li>
              <li><strong>Mangaung Metro Municipality Grants</strong> — Local business support and SMME development programmes</li>
              <li><strong>NYDA</strong> — Grants and loans for entrepreneurs aged 18-35</li>
            </ul>

            <h2 className="text-2xl font-bold text-surface-900 mt-10 mb-4">Key Industries in the Free State</h2>

            <div className="bg-surface-100 rounded-xl p-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-surface-300">
                    <th className="text-left py-2 font-semibold">Industry</th>
                    <th className="text-left py-2 font-semibold">Key Areas</th>
                    <th className="text-left py-2 font-semibold">Opportunities</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-surface-200">
                    <td className="py-2">Agriculture</td>
                    <td className="py-2">Free State-wide</td>
                    <td className="py-2">Grain farming, livestock, agro-processing, exports</td>
                  </tr>
                  <tr className="border-b border-surface-200">
                    <td className="py-2">Mining</td>
                    <td className="py-2">Welkom, Virginia, Odendaalsrus</td>
                    <td className="py-2">Gold, uranium, surface mining, mining services</td>
                  </tr>
                  <tr className="border-b border-surface-200">
                    <td className="py-2">Manufacturing</td>
                    <td className="py-2">Bloemfontein, Sasolburg</td>
                    <td className="py-2">Chemicals, food processing, metal fabrication</td>
                  </tr>
                  <tr className="border-b border-surface-200">
                    <td className="py-2">Logistics</td>
                    <td className="py-2">Bloemfontein, Harrismith</td>
                    <td className="py-2">Transport, warehousing, distribution (N1 corridor)</td>
                  </tr>
                  <tr className="border-b border-surface-200">
                    <td className="py-2">Tourism</td>
                    <td className="py-2">Golden Gate, Clarens, Gariep Dam</td>
                    <td className="py-2">Accommodation, adventure tourism, hospitality</td>
                  </tr>
                  <tr>
                    <td className="py-2">Services</td>
                    <td className="py-2">Bloemfontein (judicial capital)</td>
                    <td className="py-2">Legal, accounting, consulting, education, healthcare</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-surface-900 mt-10 mb-4">Municipal Business Requirements</h2>
            <p>
              Depending on your business type and location, you may need:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Business licence</strong> — Required by some municipalities for specific business types</li>
              <li><strong>Health certificate</strong> — For food handling, restaurants, and catering</li>
              <li><strong>Liquor licence</strong> — For any business selling alcohol (apply to the provincial liquor board)</li>
              <li><strong>Zoning approval</strong> — Ensure your premises are zoned for your business activity</li>
              <li><strong>Fire clearance</strong> — Required for premises open to the public</li>
            </ul>
            <p>
              Contact your local municipality&apos;s business development office for specific requirements.
              In Bloemfontein, the Mangaung Metro Municipality has an SMME support desk.
            </p>

            <h2 className="text-2xl font-bold text-surface-900 mt-10 mb-4">Why Start Your Business in Bloemfontein?</h2>
            <p>
              As the capital of the Free State and South Africa&apos;s judicial capital, Bloemfontein
              offers unique advantages:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Central location</strong> — At the intersection of the N1, N8, and N6 highways, connecting to Johannesburg, Cape Town, and East London</li>
              <li><strong>Lower operating costs</strong> — Property and labour costs are significantly lower than Johannesburg or Cape Town</li>
              <li><strong>Growing economy</strong> — Steady growth in services, logistics, and manufacturing</li>
              <li><strong>Skilled workforce</strong> — Home to the University of the Free State and Central University of Technology</li>
              <li><strong>Government presence</strong> — As the judicial capital, there are opportunities for professional services, legal support, and government contracting</li>
            </ul>

            <div className="bg-brand-50 rounded-2xl p-8 mt-10">
              <h3 className="text-xl font-bold text-surface-900 mb-3">Ready to Start Your Business in the Free State?</h3>
              <p className="mb-4">
                Tanosa Group, based in Bloemfontein at 37 Zastron Street, helps entrepreneurs from
                Botshabelo to QwaQwa register their businesses and stay compliant. Contact us today.
              </p>
              <a href="/contact" className="btn-premium inline-flex items-center gap-2 rounded-xl">
                Get Started
              </a>
            </div>
          </div>
        </div>
      </article>
      <CTA />
    </>
  )
}
