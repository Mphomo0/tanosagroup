import Link from 'next/link'
import { ArrowRight, MessageCircle } from 'lucide-react'

export default function CTA() {
  return (
    <section className="relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/woman-phone.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-surface-900/95 via-surface-900/85 to-surface-900/70" />
        <div className="absolute inset-0 bg-pattern opacity-10" />
      </div>

      <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-500/10 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-brand-400/10 rounded-full blur-[100px] -z-10" />

      <div className="relative z-10 container-page py-24 lg:py-32">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-brand-500/20 backdrop-blur-sm border border-brand-400/30 text-brand-100 text-sm font-medium mb-6">
            <MessageCircle className="w-4 h-4" />
            Let&apos;s Connect
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight text-balance mb-6">
            Ready for Accountability
            <span className="text-gradient bg-gradient-to-r from-brand-300 to-brand-400"> Excellence?</span>
          </h2>
          <p className="text-lg text-surface-300 max-w-xl leading-relaxed mb-10">
            Have Questions? We&apos;re Here to Help. Get in touch with our team
            and let&apos;s discuss how we can support your municipality or business.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl text-base font-semibold text-surface-900 bg-white hover:bg-surface-50 hover:shadow-xl hover:shadow-white/10 transition-all duration-300 hover:-translate-y-1"
            >
              <span>Let&apos;s Talk</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl text-base font-semibold text-white border border-white/30 hover:bg-white/10 backdrop-blur-sm transition-all duration-300"
            >
              <span>Our Services</span>
            </Link>
          </div>
        </div>

        <div className="hidden lg:flex absolute right-8 top-1/2 -translate-y-1/2 items-center gap-4">
          <div className="w-20 h-20 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 animate-float" />
          <div className="w-16 h-16 rounded-2xl bg-brand-500/30 backdrop-blur-sm border border-brand-400/30 animate-float" style={{ animationDelay: '1s' }} />
        </div>
      </div>
    </section>
  )
}