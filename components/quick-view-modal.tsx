'use client'

import { X } from 'lucide-react'
import { useState } from 'react'
import { SafeImage } from './storefront'
import { formatPrice } from '@/lib/mock-data'
import { useCart } from '@/lib/cart-store'
import type { Product } from '@/lib/mock-data'

export function QuickViewModal({
  product,
  onClose,
}: {
  product: Product
  onClose: () => void
}) {
  const [size, setSize] = useState('')
  const [color, setColor] = useState(product.colors[0])
  const [qty, setQty] = useState(1)
  const add = useCart(s => s.add)
  const [added, setAdded] = useState(false)

  const handleAdd = () => {
    if (size && product.stock > 0) {
      add(product, size, qty)
      setAdded(true)
      setTimeout(() => {
        onClose()
        setAdded(false)
      }, 800)
    }
  }

  const gallery = product.colorImages[color.toLowerCase()] ?? product.colorImages.black
  const image = gallery?.[0] || product.images[0]

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center bg-black/50 p-4 sm:p-6">
      <div
        role="dialog"
        aria-modal="true"
        className="w-full max-w-md max-h-96 overflow-y-auto rounded-lg bg-ivory p-6 shadow-xl"
      >
        <button
          onClick={onClose}
          aria-label="Close quick view"
          className="absolute right-4 top-4 flex size-10 items-center justify-center rounded-full hover:bg-sand"
        >
          <X className="size-5" />
        </button>

        <div className="relative aspect-[3/4] bg-neutral-100 mb-4">
          <SafeImage
            src={image}
            alt={product.name}
            fill
            className="object-cover"
          />
        </div>

        <h2 className="text-lg font-medium">{product.name}</h2>
        <p className="text-sm text-charcoal/60 mt-1">
          {formatPrice(product.price)}
        </p>

        <div className="mt-4 space-y-4">
          <div>
            <label className="text-xs uppercase tracking-wider block mb-2">
              Color
            </label>
            <div className="flex gap-2 flex-wrap">
              {product.colors.map(c => (
                <button
                  key={c}
                  onClick={() => setColor(c)}
                  className={`size-8 rounded-full border-2 transition ${
                    color === c ? 'border-gold' : 'border-charcoal/20'
                  }`}
                  style={{ backgroundColor: c.toLowerCase() }}
                  aria-label={c}
                  title={c}
                />
              ))}
            </div>
          </div>

          <div>
            <label className="text-xs uppercase tracking-wider block mb-2">
              Size
            </label>
            <select
              value={size}
              onChange={e => setSize(e.target.value)}
              className="w-full border p-2 text-sm"
              aria-label="Select size"
            >
              <option value="">Choose size</option>
              {product.sizes.map(s => (
                <option key={s} value={s}>
                  Size {s}
                </option>
              ))}
            </select>
          </div>

          <button
            onClick={handleAdd}
            disabled={!size || product.stock === 0}
            className="w-full bg-charcoal text-ivory text-xs uppercase p-3 disabled:opacity-50"
          >
            {added ? 'Added to bag' : product.stock === 0 ? 'Sold out' : 'Add to bag'}
          </button>
        </div>
      </div>
    </div>
  )
}
