'use client'

import { Search, X } from 'lucide-react'
import { useState, useMemo, useEffect, useRef } from 'react'
import Link from 'next/link'
import { products } from '@/lib/mock-data'
import { SafeImage } from './storefront'
import { formatPrice } from '@/lib/mock-data'

export function SearchOverlay() {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [index, setIndex] = useState(0)
  const inputRef = useRef<HTMLInputElement>(null)

  const results = useMemo(() => {
    if (!query.trim()) {
      return products.slice(0, 5).map(p => ({ type: 'popular' as const, product: p }))
    }
    return products
      .filter(p => p.name.toLowerCase().includes(query.toLowerCase()) || p.category.toLowerCase().includes(query.toLowerCase()))
      .slice(0, 8)
      .map(p => ({ type: 'search' as const, product: p }))
  }, [query])

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === '/' && !open) {
        e.preventDefault()
        setOpen(true)
      } else if (e.key === 'Escape' && open) {
        setOpen(false)
      } else if (e.key === 'ArrowDown' && open && index < results.length - 1) {
        setIndex(i => i + 1)
      } else if (e.key === 'ArrowUp' && open && index > 0) {
        setIndex(i => i - 1)
      } else if (e.key === 'Enter' && open && results.length > 0) {
        window.location.href = `/product/${results[index].product.id}`
      }
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [open, index, results])

  useEffect(() => {
    if (open) inputRef.current?.focus()
  }, [open])

  useEffect(() => {
    setIndex(0)
  }, [query])

  if (!open) return <button type="button" onClick={() => setOpen(true)} aria-label="Search" className="flex min-h-11 min-w-11 items-center justify-center"><Search className="size-5" /></button>

  return (
    <>
      <div
        className="fixed inset-0 z-[65] bg-black/40"
        onClick={() => setOpen(false)}
      />
      <div className="fixed inset-x-0 top-20 z-[70] mx-auto max-w-2xl px-4">
        <div className="rounded-lg bg-ivory shadow-lg">
          <div className="flex items-center gap-3 border-b border-charcoal/10 px-4 py-3">
            <Search className="size-5 text-charcoal/50" />
            <input
              ref={inputRef}
              type="text"
              placeholder="Search products..."
              value={query}
              onChange={e => setQuery(e.target.value)}
              className="flex-1 bg-transparent text-sm outline-none"
              aria-label="Search products"
            />
            <button
              onClick={() => setOpen(false)}
              aria-label="Close search"
              className="flex size-8 items-center justify-center"
            >
              <X className="size-4" />
            </button>
          </div>

          <div className="max-h-96 overflow-y-auto">
            {results.length > 0 ? (
              <ul className="divide-y divide-charcoal/10">
                {results.map((item, i) => (
                  <li
                    key={`${item.product.id}-${i}`}
                    className={`cursor-pointer transition ${
                      i === index ? 'bg-sand' : 'hover:bg-sand/50'
                    }`}
                  >
                    <Link
                      href={`/product/${item.product.id}`}
                      onClick={() => setOpen(false)}
                      className="flex gap-3 p-3"
                    >
                      <div className="relative size-12 flex-shrink-0 bg-neutral-100">
                        <SafeImage
                          src={item.product.images[0]}
                          alt={item.product.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium truncate">
                          {item.product.name}
                        </p>
                        <p className="text-xs text-charcoal/60">
                          {formatPrice(item.product.price)}
                        </p>
                        {item.type === 'popular' && (
                          <p className="text-xs text-charcoal/40">Popular</p>
                        )}
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            ) : (
              <div className="p-8 text-center">
                <p className="text-sm text-charcoal/60">No results for "{query}"</p>
              </div>
            )}
          </div>
        </div>

        <p className="mt-3 text-center text-xs text-ivory/60">
          Press <kbd className="rounded border border-ivory/30 px-1.5 py-0.5">↑↓</kbd>{' '}
          to navigate,{' '}
          <kbd className="rounded border border-ivory/30 px-1.5 py-0.5">Enter</kbd> to
          select
        </p>
      </div>
    </>
  )
}
