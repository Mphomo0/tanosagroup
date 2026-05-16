import Image from 'next/image'

const fleet = [
  { name: 'Tipper Trucks', description: 'Ideal for transporting bulk materials such as gravel, sand and debris.' },
  { name: 'TLB (Tractor Loader Backhoe)', description: 'Versatile equipment for digging, loading, and transporting materials on site.' },
  { name: 'Bulldozers', description: 'Powerful machines designed for moving large quantities of earth, grading surfaces, and clearing land.' },
  { name: 'Graders', description: 'Essential for precise grading and leveling of surfaces, particularly in road construction and maintenance.' },
  { name: 'Excavators', description: 'Used for digging, lifting, and moving heavy materials with a variety of attachments.' },
  { name: 'Compactors', description: 'Ensure proper soil compaction for foundations, roads, and landscaped areas.' },
  { name: 'Lowbeds', description: 'Heavy-duty trailers designed for transporting large and heavy equipment safely and efficiently.' },
]

export default function PlantHire() {
  return (
    <div className="py-8">
      <p className="text-surface-600 mb-8 max-w-3xl">
        At Tanosa Group, we offer a comprehensive range of plant hire services to meet various
        construction and infrastructure needs.
      </p>
      <div className="grid lg:grid-cols-2 gap-12 items-start">
        <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-surface-200">
          <h3 className="text-xl font-semibold text-surface-900 mb-6">Our Fleet</h3>
          <ul className="space-y-5">
            {fleet.map((item, i) => (
              <li key={i} className="flex items-start gap-4">
                <span className="w-8 h-8 rounded-lg gradient-brand flex items-center justify-center text-white text-sm font-bold shrink-0">
                  {i + 1}
                </span>
                <div>
                  <strong className="text-surface-900">{item.name}:</strong>{' '}
                  <span className="text-surface-600 text-sm">{item.description}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-4">
          <Image
            src="/images/planthire.jpg"
            alt="Tanosa Group Plant Hire Equipment"
            width={600}
            height={400}
            className="w-full h-64 object-cover rounded-2xl shadow-sm"
          />
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/images/plant2.jpg"
              alt="Construction equipment"
              width={300}
              height={200}
              className="w-full h-36 object-cover rounded-2xl shadow-sm"
            />
            <Image
              src="/images/plant3.jpg"
              alt="Heavy machinery"
              width={300}
              height={200}
              className="w-full h-36 object-cover rounded-2xl shadow-sm"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
