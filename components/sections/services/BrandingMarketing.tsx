import Image from 'next/image'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const sections = [
  {
    value: 'branding',
    title: 'Branding Services',
    content: (
      <div className="space-y-4">
        <p className="text-surface-600">
          <strong>Objective:</strong> Create a cohesive brand identity that resonates with your audiences.
        </p>
        <ul className="space-y-3 text-surface-600">
          <li>
            <strong>Brand Strategy:</strong> Define brand purpose, vision, and values through market research.
          </li>
          <li>
            <strong>Visual Identity:</strong> Develop logo, color palette, typography, and brand guidelines.
          </li>
          <li>
            <strong>Brand Materials Supply:</strong> Business cards, brochures, flyers, promotional items, signage,
            packaging design, and digital assets (social media templates, email newsletters).
          </li>
          <li>
            <strong>Brand Messaging:</strong> Craft engaging taglines and cohesive content strategy.
          </li>
          <li>
            <strong>Implementation and Monitoring:</strong> Oversee production and gather feedback.
          </li>
          <li>
            <strong>Evaluation and Adaptation:</strong> Use brand awareness surveys and engagement metrics.
          </li>
        </ul>
      </div>
    ),
  },
  {
    value: 'marketing-strategy',
    title: 'Marketing Strategy',
    content: (
      <ul className="space-y-3 text-surface-600">
        <li><strong>Benefits:</strong> A strategic approach to effectively reach target audiences and achieve business goals.</li>
        <li><strong>Key Elements:</strong> Market Research, Customer Segmentation, Positioning, Marketing Channels, Campaign Development, Performance Metrics.</li>
      </ul>
    ),
  },
  {
    value: 'digital-marketing',
    title: 'Digital Marketing',
    content: (
      <ul className="space-y-3 text-surface-600">
        <li><strong>Benefits:</strong> Enhances online presence, engages customers, and drives conversions.</li>
        <li><strong>Services Include:</strong> Search Engine Optimization (SEO), Social Media Marketing, Content Marketing, Email Marketing, Pay-Per-Click Advertising (PPC).</li>
      </ul>
    ),
  },
  {
    value: 'brand-awareness',
    title: 'Brand Awareness and Engagement',
    content: (
      <ul className="space-y-3 text-surface-600">
        <li><strong>Benefits:</strong> Strengthens customer relationships and drives brand loyalty.</li>
        <li><strong>Tactics:</strong> Influencer Marketing, Public Relations Campaigns, Community Engagement, Event Promotion.</li>
      </ul>
    ),
  },
  {
    value: 'web-design',
    title: 'Web Design and Development',
    content: (
      <ul className="space-y-3 text-surface-600">
        <li><strong>Benefits:</strong> Creates user-friendly, visually appealing websites that reflect your brand.</li>
        <li><strong>Key Features:</strong> Custom Website Design, Responsive Design (Mobile & Desktop), E-commerce Integration, Content Management Systems (CMS), UX/UI Design, Performance Optimization and SEO.</li>
      </ul>
    ),
  },
  {
    value: 'analytics',
    title: 'Monitoring and Analytics',
    content: (
      <ul className="space-y-3 text-surface-600">
        <li><strong>Benefits:</strong> Tracks performance and measures branding and marketing effectiveness.</li>
        <li><strong>Methods:</strong> Web Analytics, Social Media Insights, Campaign Performance Metrics, Customer Feedback Analysis.</li>
      </ul>
    ),
  },
]

export default function BrandingMarketing() {
  return (
    <div className="py-8">
      <p className="text-surface-600 mb-8 max-w-3xl">
        We help businesses build powerful brands and execute data-driven marketing strategies
        that deliver measurable results.
      </p>
      <div className="grid lg:grid-cols-2 gap-12 items-start">
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <Accordion type="single" collapsible className="space-y-2">
            {sections.map((s) => (
              <AccordionItem key={s.value} value={s.value} className="border border-surface-200 rounded-xl px-5">
                <AccordionTrigger className="text-lg font-semibold text-brand-700 hover:no-underline">
                  {s.title}
                </AccordionTrigger>
                <AccordionContent className="text-sm">
                  {s.content}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        <div className="relative">
          <Image
            src="/images/branding.webp"
            alt="Branding and Marketing Services"
            width={600}
            height={400}
            className="w-full h-auto rounded-2xl shadow-sm object-cover"
          />
        </div>
      </div>
    </div>
  )
}
