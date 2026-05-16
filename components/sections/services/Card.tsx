interface CardProps {
  number: number
  title: string
  description: string
  icon: React.ComponentType<{ size?: number; className?: string }>
}

export default function Card({ number, title, description, icon: Icon }: CardProps) {
  return (
    <div className="group bg-white rounded-2xl p-6 sm:p-8 relative overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <div className="absolute -top-8 -right-8 w-24 h-24 gradient-brand rounded-full flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300">
        <span className="text-white text-xl font-bold">
          {String(number).padStart(2, '0')}
        </span>
      </div>

      <div className="w-14 h-14 rounded-xl bg-brand-50 flex items-center justify-center mb-5 text-brand-700 group-hover:bg-brand-100 transition-colors">
        <Icon size={28} className="w-7 h-7" />
      </div>

      <h3 className="text-lg font-semibold text-surface-900 mb-3 pr-12">
        {title}
      </h3>
      <p className="text-sm text-surface-500 leading-relaxed">
        {description}
      </p>
    </div>
  )
}
