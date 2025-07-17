import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
  UsersRound,
  Tractor,
  Presentation,
  BrushCleaning,
  BriefcaseBusiness,
} from 'lucide-react'
import CTA from '@/components/global/CTA'
import Testimonials from '@/components/global/Testimonials'
import Consulting from '@/components/sections/services/Consulting'
import BusinessDevelopment from '@/components/sections/services/BusinessDevelopment'
import BrandingMarketing from '@/components/sections/services/BrandingMarketing'
import PlantHire from '@/components/sections/services/PlantHire'
import AdditionalServices from '@/components/sections/services/AdditionalServices'

export default function page() {
  return (
    <div>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center my-16 '>
          <h1 className='text-4xl font-bold mb-4 text-foreground'>
            Our Services
          </h1>
          <p className='text-xl text-muted-foreground max-w-3xl mx-auto'>
            Comprehensive solutions tailored to drive your business forward with
            expertise across multiple domains
          </p>
        </div>

        <Tabs defaultValue='consulting' className='w-full'>
          <TabsList className='grid w-full grid-cols-2 lg:grid-cols-5 h-auto p-2 bg-white backdrop-blur-xl shadow-2xl border border-white/20 rounded-2xl'>
            <TabsTrigger
              value='consulting'
              className='flex flex-col items-center gap-3 p-6 rounded-xl data-[state=active]:bg-gradient-to-br data-[state=active]:from-blue-500 data-[state=active]:to-purple-600 data-[state=active]:text-white data-[state=active]:shadow-lg transition-all duration-300'
            >
              <UsersRound className='!h-6 !w-6' />

              <span className='text-sm font-medium'>Consulting</span>
            </TabsTrigger>
            <TabsTrigger
              value='business-development'
              className='flex flex-col items-center gap-3 p-6 rounded-xl data-[state=active]:bg-gradient-to-br data-[state=active]:from-green-500 data-[state=active]:to-blue-600 data-[state=active]:text-white data-[state=active]:shadow-lg transition-all duration-300'
            >
              <BriefcaseBusiness className='!h-6 !w-6' />
              <span className='text-sm font-medium'>
                Business Development <br /> & Training
              </span>
            </TabsTrigger>
            <TabsTrigger
              value='branding-marketing'
              className='flex flex-col items-center gap-3 p-6 rounded-xl data-[state=active]:bg-gradient-to-br data-[state=active]:from-purple-500 data-[state=active]:to-pink-600 data-[state=active]:text-white data-[state=active]:shadow-lg transition-all duration-300'
            >
              <Presentation className='!h-6 !w-6' />
              <span className='text-sm font-medium'>Branding & Marketing</span>
            </TabsTrigger>
            <TabsTrigger
              value='plant-hire'
              className='flex flex-col items-center gap-3 p-6 rounded-xl data-[state=active]:bg-gradient-to-br data-[state=active]:from-orange-500 data-[state=active]:to-red-600 data-[state=active]:text-white data-[state=active]:shadow-lg transition-all duration-300'
            >
              <Tractor className='!h-6 !w-6' />

              <span className='text-sm font-medium'>Plant Hire</span>
            </TabsTrigger>
            <TabsTrigger
              value='additional-services'
              className='flex flex-col items-center gap-3 p-8 rounded-xl data-[state=active]:bg-gradient-to-br data-[state=active]:from-cyan-500 data-[state=active]:to-blue-600 data-[state=active]:text-white data-[state=active]:shadow-lg transition-all duration-300'
            >
              <BrushCleaning className='!h-6 !w-6' />
              <span className='text-md font-medium'>Additional Services</span>
            </TabsTrigger>
          </TabsList>

          {/* Consulting */}
          <TabsContent value='consulting' className='mt-12'>
            <Consulting />
          </TabsContent>

          {/* business-development */}
          <TabsContent value='business-development' className='mt-12'>
            <BusinessDevelopment />
          </TabsContent>

          {/* Branding and Marketing*/}
          <TabsContent value='branding-marketing' className='mt-12'>
            <BrandingMarketing />
          </TabsContent>

          {/* Plant Hire*/}
          <TabsContent value='plant-hire' className='mt-12'>
            <PlantHire />
          </TabsContent>

          {/* Additional Services */}
          <TabsContent value='additional-services' className='mt-12'>
            <AdditionalServices />
          </TabsContent>
        </Tabs>
      </div>

      <CTA />
      <Testimonials />
    </div>
  )
}
