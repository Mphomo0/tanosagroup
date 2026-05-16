import { consultingServices } from '@/lib/services'
import Card from './Card'

export default function Consulting() {
  return (
    <div className="py-8">
      <p className="text-surface-600 mb-8 max-w-3xl">
        Our consulting division provides expert analytical reviews, compliance monitoring,
        and strategic guidance to municipalities and government departments across South Africa.
      </p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {consultingServices.map((service) => (
          <Card
            key={service.number}
            number={service.number}
            title={service.title}
            description={service.description}
            icon={service.icon}
          />
        ))}
      </div>
    </div>
  )
}
