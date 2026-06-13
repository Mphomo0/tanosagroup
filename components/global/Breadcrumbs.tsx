import Link from 'next/link'
import { ChevronRight, Home } from 'lucide-react'

interface BreadcrumbItem {
  name: string
  href?: string
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[]
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="py-4">
      <ol className="flex items-center gap-2 text-sm text-surface-500">
        <li>
          <Link href="/" className="hover:text-brand-600 transition-colors flex items-center gap-1">
            <Home className="w-4 h-4" />
            <span>Home</span>
          </Link>
        </li>
        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-2">
            <ChevronRight className="w-4 h-4" />
            {item.href ? (
              <Link href={item.href} className="hover:text-brand-600 transition-colors">
                {item.name}
              </Link>
            ) : (
              <span className="text-surface-900 font-medium">{item.name}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}
