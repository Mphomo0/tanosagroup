import { Phone, Mail, MapPin, ArrowUpRight } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

const footerServices = [
  'Technical Support to MPAC',
  'Business Development and Training',
  'Risk Management and Compliance',
  'Web Design and Development',
  'Branding and Marketing',
  'Plant Hire',
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-surface-900 text-surface-300 relative overflow-hidden">
      <div className="absolute inset-0 bg-pattern-light opacity-30 -z-10" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-900/20 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-brand-800/20 rounded-full blur-[80px] -z-10" />

      <div className="container-page py-20 lg:py-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          <div className="sm:col-span-2 lg:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/images/Tanosa_Group_logo.png"
                alt="Tanosa Group logo"
                width={200}
                height={70}
                className="h-12 w-auto"
              />
            </Link>
            <p className="text-sm leading-relaxed text-surface-400 mb-6 max-w-sm">
              Tanosa Group is a premier service provider specializing in
              governance, accountability, and operational improvement for
              municipalities across South Africa. With a multifaceted approach,
              we deliver an extensive array of professional services.
            </p>
            <div className="flex gap-3">
              {['facebook', 'twitter', 'linkedin'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-10 h-10 rounded-xl bg-surface-800/50 hover:bg-brand-600 flex items-center justify-center transition-all duration-300 hover:-translate-y-1"
                >
                  <span className="text-xs font-bold text-white/80">{social.charAt(0).toUpperCase()}</span>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-white text-base font-semibold mb-5">Services</h3>
            <ul className="space-y-3.5">
              {footerServices.map((service) => (
                <li key={service}>
                  <Link
                    href="/services"
                    className="text-sm text-surface-400 hover:text-white transition-colors flex items-center gap-2 group"
                  >
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white text-base font-semibold mb-5">Quick Links</h3>
            <ul className="space-y-3.5">
              {[
                { name: 'Home', href: '/' },
                { name: 'About Us', href: '/about' },
                { name: 'Our Services', href: '/services' },
                { name: 'Contact Us', href: '/contact' },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-surface-400 hover:text-white transition-colors flex items-center gap-2 group"
                  >
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white text-base font-semibold mb-5">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3.5 text-sm group">
                <MapPin className="w-5 h-5 mt-0.5 shrink-0 text-brand-400 group-hover:text-brand-300 transition-colors" />
                <span className="text-surface-400 group-hover:text-surface-300 transition-colors">37 Zastron Street, Bloemfontein Central, Bloemfontein, 9301</span>
              </li>
              <li className="flex items-center gap-3.5 text-sm group">
                <Phone className="w-5 h-5 shrink-0 text-brand-400 group-hover:text-brand-300 transition-colors" />
                <span className="text-surface-400 group-hover:text-surface-300 transition-colors">079 596 6442</span>
              </li>
              <li className="flex items-center gap-3.5 text-sm group">
                <Mail className="w-5 h-5 shrink-0 text-brand-400 group-hover:text-brand-300 transition-colors" />
                <a href="mailto:tanosatrading@gmail.com" className="text-surface-400 hover:text-white transition-colors">
                  tanosatrading@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-surface-800/50">
        <div className="container-page py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
          <p className="text-surface-500">
            &copy; {currentYear} Tanosa Group. All rights reserved.
          </p>
          <p className="text-surface-500">
            Designed by{' '}
            <a
              href="https://www.nostalgic-studio.co.za"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-400 hover:text-brand-300 transition-colors font-medium"
            >
              Nostalgic Studio
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  )
}