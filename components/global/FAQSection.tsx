'use client'

import { motion } from 'motion/react'
import { Sparkles } from 'lucide-react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

interface FAQItem {
  question: string
  answer: string
}

interface FAQSectionProps {
  title?: string
  subtitle?: string
  items: FAQItem[]
}

export default function FAQSection({ title, subtitle, items }: FAQSectionProps) {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-surface-50 -z-10" />
      <div className="absolute top-40 right-0 w-72 h-72 bg-brand-100/30 rounded-full blur-[80px] -z-10" />

      <div className="container-page">
        {title && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-100 text-brand-700 text-sm font-medium mb-4">
              <Sparkles className="w-4 h-4" />
              FAQ
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-surface-900 mb-4">
              {title}
            </h2>
            {subtitle && (
              <p className="text-lg text-surface-600 max-w-2xl mx-auto">{subtitle}</p>
            )}
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-3">
            {items.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`faq-${index}`}
                className="bg-white rounded-2xl border border-surface-200/60 shadow-sm hover:shadow-md transition-all duration-300 px-6"
              >
                <AccordionTrigger className="text-left font-semibold text-surface-900 py-5 hover:text-brand-700 transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-surface-600 leading-relaxed pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}
