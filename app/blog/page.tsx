import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Calendar, Clock } from 'lucide-react'
import PageHero from '@/components/global/PageHero'

const baseUrl = 'https://www.tanosagroup.com'

export const metadata: Metadata = {
  title: { absolute: 'Blog | Tanosa Group' },
  description:
    'Expert insights on accounting, tax, business registration, and financial management in South Africa. Tips for small businesses and startups.',
  alternates: { canonical: `${baseUrl}/blog` },
  openGraph: {
    title: 'Blog | Tanosa Group',
    description: 'Expert insights on accounting, tax, business registration, and financial management in South Africa.',
    url: `${baseUrl}/blog`,
    siteName: 'Tanosa Group',
    locale: 'en_ZA',
    type: 'website',
    images: [{ url: `${baseUrl}/images/Tanosa_Group_logo.png` }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog | Tanosa Group',
    description: 'Expert insights on accounting, tax, business registration, and financial management in South Africa.',
    images: [`${baseUrl}/images/Tanosa_Group_logo.png`],
  },
}

const blogPosts = [
  {
    title: 'How to Register for VAT in South Africa: Complete Guide',
    slug: 'vat-registration-south-africa-guide',
    excerpt: 'Complete guide to VAT registration in South Africa. When to register, the application process, documents needed, rates, and return filing.',
    date: '2026-06-13',
    readTime: '8 min read',
    category: 'Tax',
  },
  {
    title: 'Provisional Tax in South Africa: Who Pays, Deadlines & How to Calculate',
    slug: 'provisional-tax-south-africa-guide',
    excerpt: 'Everything you need to know about provisional tax: who must pay, 2026/2027 deadlines, how to estimate payments, and penalties to avoid.',
    date: '2026-06-13',
    readTime: '9 min read',
    category: 'Tax',
  },
  {
    title: "SARS eFiling: Complete Beginner's Guide for Small Business Owners",
    slug: 'sars-efiling-beginners-guide',
    excerpt: 'Learn how to register and use SARS eFiling. Step-by-step guide to submitting tax returns, VAT, and managing your tax profile online.',
    date: '2026-06-13',
    readTime: '7 min read',
    category: 'Tax',
  },
  {
    title: 'How to Register for PAYE in South Africa: Employer\'s Guide',
    slug: 'paye-registration-south-africa-employer-guide',
    excerpt: 'Complete guide to PAYE, UIF, and SDL registration. Learn employer tax obligations, deadlines, and how to submit EMP201 and EMP501 returns.',
    date: '2026-06-13',
    readTime: '10 min read',
    category: 'Payroll',
  },
  {
    title: 'How to Submit a VAT Return (VAT201) on SARS eFiling',
    slug: 'vat-return-submission-sars-efiling',
    excerpt: 'Step-by-step guide to completing and submitting your VAT201 return on SARS eFiling. Covers input tax, output tax, adjustments, and payment.',
    date: '2026-06-13',
    readTime: '9 min read',
    category: 'Tax',
  },
  {
    title: 'How to File CIPC Annual Returns: Complete Guide',
    slug: 'cipc-annual-returns-guide',
    excerpt: 'Complete guide to filing CIPC annual returns in South Africa. Fees, deadlines, penalties for late filing, and how to avoid deregistration.',
    date: '2026-06-13',
    readTime: '8 min read',
    category: 'Business Registration',
  },
  {
    title: 'B-BBEE Certificates for Small Businesses: Complete Guide',
    slug: 'bbbee-certificates-small-business-sa',
    excerpt: 'Complete guide to B-BBEE certificates for EMEs and QSEs. Levels, scorecards, costs, and how to get your certificate online for free.',
    date: '2026-06-13',
    readTime: '9 min read',
    category: 'Compliance',
  },
  {
    title: 'Turnover Tax vs VAT in South Africa: Which Is Better?',
    slug: 'turnover-tax-vs-vat-south-africa',
    excerpt: 'Compare turnover tax and VAT for small businesses. Pros and cons, qualification criteria, rates, and a decision framework to choose the right system.',
    date: '2026-06-13',
    readTime: '8 min read',
    category: 'Tax',
  },
  {
    title: 'How to Get a Tax Clearance Certificate in South Africa',
    slug: 'tax-clearance-certificate-south-africa',
    excerpt: 'Complete guide to obtaining a SARS tax clearance certificate. How to apply, requirements, processing time, and checking your compliance status.',
    date: '2026-06-13',
    readTime: '7 min read',
    category: 'Compliance',
  },
  {
    title: 'Starting a Business in Free State, South Africa: Complete Guide',
    slug: 'starting-business-free-state-south-africa',
    excerpt: 'Complete guide to starting a business in the Free State. CIPC registration, SARS compliance, local business support, funding, and resources.',
    date: '2026-06-13',
    readTime: '9 min read',
    category: 'Business',
  },
  {
    title: 'Small Business Tax Rates in South Africa 2026/2027',
    slug: 'small-business-tax-rates-south-africa-2026',
    excerpt: 'Complete guide to small business tax rates in SA for 2026/2027. SBC rates, corporate tax, turnover tax, personal income tax brackets, and VAT thresholds.',
    date: '2026-06-13',
    readTime: '10 min read',
    category: 'Tax',
  },
  {
    title: 'SARS Audit Guide: What to Expect and How to Prepare',
    slug: 'sars-audit-guide-south-africa',
    excerpt: 'Complete guide to SARS audits in South Africa. Triggers, process, your rights, how to prepare, and what to do if selected for verification.',
    date: '2026-06-13',
    readTime: '9 min read',
    category: 'Compliance',
  },
  {
    title: 'How to Claim a Home Office Deduction in South Africa',
    slug: 'home-office-deduction-south-africa',
    excerpt: 'Complete guide to claiming a home office tax deduction. Eligibility, calculation, SARS rules, allowed expenses, and common mistakes to avoid.',
    date: '2026-06-13',
    readTime: '8 min read',
    category: 'Tax',
  },
  {
    title: 'UIF and COIDA Registration for Employers in South Africa',
    slug: 'uif-coida-registration-south-africa',
    excerpt: 'Complete guide to UIF and COIDA registration. Contribution rates, registration process, payment deadlines, and employer compliance.',
    date: '2026-06-13',
    readTime: '9 min read',
    category: 'Payroll',
  },
  {
    title: 'Provisional Tax in South Africa: Who Pays, Deadlines & How to Calculate',
    slug: 'provisional-tax-south-africa-guide',
    excerpt: 'Everything you need to know about provisional tax: who must pay, 2026/2027 deadlines, how to estimate payments, and penalties to avoid.',
    date: '2026-06-13',
    readTime: '9 min read',
    category: 'Tax',
  },
  {
    title: "SARS eFiling: Complete Beginner's Guide for Small Business Owners",
    slug: 'sars-efiling-beginners-guide',
    excerpt: 'Learn how to register and use SARS eFiling. Step-by-step guide to submitting tax returns, VAT, and managing your tax profile online.',
    date: '2026-06-13',
    readTime: '7 min read',
    category: 'Tax',
  },
  {
    title: 'How to Register a Business in South Africa: Step by Step Guide',
    slug: 'how-to-register-a-business-in-south-africa',
    excerpt: 'Complete guide to registering your company with CIPC, SARS, and other regulatory bodies in South Africa.',
    date: '2026-06-01',
    readTime: '6 min read',
    category: 'Business Registration',
  },
  {
    title: 'SARS Tax Return Deadlines 2026: What You Need to Know',
    slug: 'sars-tax-return-deadlines-2026',
    excerpt: 'Stay compliant with SARS. Here are all the important tax return deadlines for the 2026 tax year in South Africa.',
    date: '2026-05-15',
    readTime: '5 min read',
    category: 'Tax',
  },
  {
    title: 'Tax Deductions Every Small Business Owner Should Know',
    slug: 'tax-deductions-small-business-south-africa',
    excerpt: 'Reduce your taxable income. Learn about the tax deductions available to small business owners in South Africa.',
    date: '2026-04-20',
    readTime: '7 min read',
    category: 'Tax',
  },
  {
    title: 'Choosing the Right Business Structure in South Africa',
    slug: 'choosing-business-structure-south-africa',
    excerpt: 'Sole proprietor, CC, or Pty Ltd? We break down the pros and cons of each business structure for South African entrepreneurs.',
    date: '2026-03-10',
    readTime: '8 min read',
    category: 'Business',
  },
]

export default function BlogPage() {
  return (
    <>
      <PageHero
        badge="Blog"
        title={<><span className="text-gradient">Our</span> Blog</>}
        subtitle="Expert insights on accounting, tax, business registration, and financial management."
      />
      <section className="container-page py-16">
        <div className="grid md:grid-cols-2 gap-8">
          {blogPosts.map((post, index) => (
            <Link
              key={index}
              href={`/blog/${post.slug}`}
              className="premium-card p-8 hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="flex items-center gap-3 text-sm text-surface-500 mb-3">
                <span className="px-3 py-1 rounded-full bg-brand-100 text-brand-700 text-xs font-medium">
                  {post.category}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" />
                  {post.date}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  {post.readTime}
                </span>
              </div>
              <h2 className="text-xl font-bold text-surface-900 mb-3 group-hover:text-brand-700 transition-colors">
                {post.title}
              </h2>
              <p className="text-surface-600 leading-relaxed mb-4">{post.excerpt}</p>
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-brand-600 group-hover:text-brand-700">
                Read More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          ))}
        </div>
      </section>
    </>
  )
}
