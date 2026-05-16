import Image from 'next/image'
import { Droplets, Truck } from 'lucide-react'

export default function AdditionalServices() {
  return (
    <div className="py-8">
      <p className="text-surface-600 mb-8 max-w-3xl">
        Beyond our core offerings, we provide specialized services to support municipal
        and commercial operations.
      </p>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border-t-4 border-cyan-500">
          <div className="w-14 h-14 rounded-xl bg-cyan-50 flex items-center justify-center mb-5">
            <Droplets className="w-7 h-7 text-cyan-600" />
          </div>
          <h3 className="text-xl font-semibold text-surface-900 mb-3">Drain Cleaning Services</h3>
          <p className="text-surface-600 leading-relaxed">
            We provide drainage solutions using high-pressure jetting machines
            that effectively clear blockages and maintain efficient drainage systems.
          </p>
        </div>
        <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border-t-4 border-amber-500">
          <div className="w-14 h-14 rounded-xl bg-amber-50 flex items-center justify-center mb-5">
            <Truck className="w-7 h-7 text-amber-600" />
          </div>
          <h3 className="text-xl font-semibold text-surface-900 mb-3">Honeysucker Services</h3>
          <p className="text-surface-600 leading-relaxed">
            Specialized vehicles equipped with suction capabilities to efficiently
            remove liquid waste, sludge and debris from various sites.
          </p>
        </div>
      </div>
      <div className="mt-8">
        <Image
          src="/images/cleaning.jpg"
          alt="Drain Cleaning and Honeysucker Services"
          width={500}
          height={300}
          className="w-full max-w-lg h-48 object-cover rounded-2xl shadow-sm"
        />
      </div>
    </div>
  )
}
