'use client'

import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

export function Breadcrumbs({
  items,
}: {
  items: { label: string; href?: string }[]
}) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="mb-6 flex flex-wrap items-center gap-2 text-xs"
    >
      <Link href="/" className="hover:underline">
        Home
      </Link>
      {items.map((item, i) => (
        <div key={i} className="flex items-center gap-2">
          <ChevronRight className="size-3 text-charcoal/40" />
          {item.href ? (
            <Link href={item.href} className="hover:underline">
              {item.label}
            </Link>
          ) : (
            <span className="text-charcoal/60">{item.label}</span>
          )}
        </div>
      ))}
    </nav>
  )
}
