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
