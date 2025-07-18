import Image from 'next/image'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

export default function BrandingMarketing() {
  return (
    <div className='py-8 px-4 bg-gray-50 sm:py-12 sm:px-6 lg:py-16 lg:px-8 xl:py-20'>
      <div className='max-w-7xl mx-auto'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12'>
          {/* Content Section */}
          <div className='p-4 sm:p-6 lg:p-8 order-2 lg:order-1'>
            <Accordion type='single' collapsible>
              <AccordionItem value='item-1'>
                <AccordionTrigger className='text-2xl font-bold text-blue-700'>
                  Branding Services
                </AccordionTrigger>
                <AccordionContent>
                  <h4 className='text-lg font-bold'>Objectives:</h4>
                  <p className='mb-4'>
                    Create a cohesive brand identity that resonates with your
                    audiences.
                  </p>

                  <h4 className='text-lg font-bold mb-4'>Components:</h4>

                  <ul className='list-disc pl-5 space-y-2'>
                    <li>
                      <span className='font-bold'>Brand Strategy:</span>{' '}
                      <span>
                        Define brand purpose, vision, and values through market
                        research
                      </span>
                    </li>
                    <li>
                      <span className='font-bold'>Visual Identity:</span>{' '}
                      <span>
                        Develop essential elements such as logo, color palette,
                        typography, and brand guidelines to ensure consistency.
                      </span>
                    </li>
                    <li>
                      <span className='font-bold'>Brand Materials Supply:</span>{' '}
                      <span>Provide high-quality materials, including:</span>
                      <ul className='list-disc pl-5 space-y-2'>
                        <li>Business Cards</li>
                        <li>Brochures and Flyers</li>
                        <li>Promotional Items</li>
                        <li>Signage</li>
                        <li>Packaging Design</li>
                        <li>
                          Digital Assets(social media templates, email
                          newsletters)
                        </li>
                      </ul>
                    </li>
                    <li>
                      <span className='font-bold'>Brand Messaging:</span>{' '}
                      <span>
                        Craft engaging taglines and a cohesive content strategy
                        to convey the brand&;squo;s story.
                      </span>
                    </li>
                    <li>
                      <span className='font-bold'>
                        Implementation and Monitoring:
                      </span>{' '}
                      <span>
                        Oversee production and gather feedback to assess brand
                        effectiveness.
                      </span>
                    </li>
                    <li>
                      <span className='font-bold'>
                        Evaluation and Adaptation:
                      </span>{' '}
                      <span>
                        Use brand awareness surveys and engagement metrics for
                        continous improvement.
                      </span>
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value='item-2'>
                <AccordionTrigger className='text-2xl font-bold text-blue-700'>
                  Marketing Strategy
                </AccordionTrigger>
                <AccordionContent>
                  <ul className='list-disc pl-5 space-y-2'>
                    <li>
                      <span className='font-bold'>Benefits:</span>
                      <span>
                        A strategic approach to effectively reach target
                        audiences and achieve business goals.
                      </span>
                    </li>
                    <li>
                      <span className='font-bold'>Key Elements:</span>
                      <span>
                        Market Research, Customer Segmentation, Positioning,
                        Marketing Channels, Campaign Development, Performance
                        Metrics.
                      </span>
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value='item-3'>
                <AccordionTrigger className='text-2xl font-bold text-blue-700'>
                  Digital Marketing
                </AccordionTrigger>
                <AccordionContent>
                  <ul className='list-disc pl-5 space-y-2'>
                    <li>
                      <span className='font-bold'>Benefits:</span>{' '}
                      <span>
                        Enhances online presence, engages customers, and drives
                        conversions.
                      </span>
                    </li>
                    <li>
                      <span className='font-bold'>Services Include:</span>{' '}
                      <ul className='list-disc pl-5 space-y-2'>
                        <li>Search Engine Optimization (SEO)</li>
                        <li>Social Media Marketing</li>
                        <li>Content Marketing</li>
                        <li>Email Marketing</li>
                        <li>Pay-Per-Click Advertising (PPC)</li>
                      </ul>
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value='item-4'>
                <AccordionTrigger className='text-2xl font-bold text-blue-700'>
                  Brand Awareness and Engagement
                </AccordionTrigger>
                <AccordionContent>
                  <ul className='list-disc pl-5 space-y-2'>
                    <li>
                      <span className='font-bold'>Benefits:</span>{' '}
                      <span>
                        Strengthens customer relationships and drives brand
                        loyalty.
                      </span>
                    </li>
                    <li>
                      <span className='font-bold'>Tactics:</span>{' '}
                      <span>
                        Influencer Marketing, Public Relations Campaigns,
                        Community Engagement, Event Promotion.
                      </span>
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value='item-5'>
                <AccordionTrigger className='text-2xl font-bold text-blue-700'>
                  Web Design and Development
                </AccordionTrigger>
                <AccordionContent>
                  <ul className='list-disc pl-5 space-y-2'>
                    <li>
                      <span className='font-bold'>Benefits:</span>
                      <span>
                        Creates user-friendly, visually appealing websites that
                        reflect your brand and enhance user experiences.
                      </span>
                    </li>
                    <li>
                      <span className='font-bold'>Key Features:</span>

                      <ul className='list-disc pl-5 space-y-2'>
                        <li>Custom Website Design</li>
                        <li>Responsive Design for Mobile & Desktop</li>
                        <li>E-commerce Integration</li>
                        <li>Content Management Systems (CMS)</li>
                        <li>
                          User Experience (UX) and User Interface (UI) Design
                        </li>
                        <li>Performance Optimization and SEO Integration</li>
                      </ul>
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value='item-6'>
                <AccordionTrigger className='text-2xl font-bold text-blue-700'>
                  Monitoring and Analytics
                </AccordionTrigger>
                <AccordionContent>
                  <ul className='list-disc pl-5 space-y-2'>
                    <li>
                      <span className='font-bold'>Benefits:</span>{' '}
                      <span>
                        Tracks Performance and measures the effectiveness of
                        branding and marketing efforts.
                      </span>
                    </li>
                    <li>
                      <span className='font-bold'>Methods:</span>{' '}
                      <span>
                        Web Analytics, Social Media Insights, Campaign
                        Performance Metrics, Customer Feedback Analysis.
                      </span>
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* Images Section */}
          <div className='order-1 lg:order-2'>
            <div className='flex flex-col gap-4 sm:gap-6'>
              {/* Main Image */}
              <div className='w-full'>
                <Image
                  src='/images/branding.jpg'
                  alt='Plant Hire Equipment'
                  width={600}
                  height={600}
                  className='w-full h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px] object-cover rounded-2xl'
                />
              </div>

              {/* Two Smaller Images Side by Side */}
              {/* <div className='grid grid-cols-2 gap-3 sm:gap-4'>
                <Image
                  src='/images/plant2.jpg'
                  alt='Plant Hire Thumbnail 1'
                  width={210}
                  height={200}
                  className='rounded-2xl object-cover w-full h-[120px] sm:h-[140px] md:h-[160px] lg:h-[180px]'
                />
                <Image
                  src='/images/plant3.jpg'
                  alt='Plant Hire Thumbnail 2'
                  width={210}
                  height={200}
                  className='rounded-2xl object-cover w-full h-[120px] sm:h-[140px] md:h-[160px] lg:h-[180px]'
                />
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
