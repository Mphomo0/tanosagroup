import Hero from '@/components/sections/home/Hero'
import AboutSection from '@/components/global/AboutSection'
import ServicesSection from '@/components/global/ServicesSection'
import Testimonials from '../components/global/Testimonials'

export default function Home() {
  return (
    <div>
      <Hero />
      <AboutSection />
      <ServicesSection />
      <Testimonials />
    </div>
  )
}
