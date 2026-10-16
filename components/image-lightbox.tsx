'use client'

import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import { useState, useEffect } from 'react'
import { SafeImage } from './safe-image'

export function ImageLightbox({
  images,
  initialIndex = 0,
  onClose,
}: {
  images: string[]
  initialIndex?: number
  onClose: () => void
}) {
  const [index, setIndex] = useState(initialIndex)
  const [scale, setScale] = useState(1)

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      else if (e.key === 'ArrowLeft') setIndex(i => (i - 1 + images.length) % images.length)
      else if (e.key === 'ArrowRight') setIndex(i => (i + 1) % images.length)
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [images.length, onClose])

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault()
    setScale(s => Math.max(1, Math.min(3, s + (e.deltaY > 0 ? -0.1 : 0.1))))
  }

  return (
    <div className="fixed inset-0 z-[80] bg-black/95 flex items-center justify-center">
      <button
        onClick={onClose}
        aria-label="Close lightbox"
        className="absolute right-4 top-4 flex size-10 items-center justify-center text-white hover:bg-white/10"
      >
        <X className="size-6" />
      </button>

      <button
        onClick={() => setIndex(i => (i - 1 + images.length) % images.length)}
        aria-label="Previous image"
        className="absolute left-4 flex size-10 items-center justify-center text-white hover:bg-white/10"
      >
        <ChevronLeft className="size-6" />
      </button>

      <div
        className="relative max-w-4xl max-h-[80vh] overflow-auto cursor-zoom-in"
        onWheel={handleWheel}
      >
        <SafeImage
          src={images[index]}
          alt={`Image ${index + 1}`}
          width={800}
          height={1000}
          className="object-contain"
          style={{ transform: `scale(${scale})`, transition: 'transform 0.2s' }}
        />
      </div>

      <button
        onClick={() => setIndex(i => (i + 1) % images.length)}
        aria-label="Next image"
        className="absolute right-4 flex size-10 items-center justify-center text-white hover:bg-white/10"
      >
        <ChevronRight className="size-6" />
      </button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-xs">
        {index + 1} / {images.length}
      </div>
    </div>
  )
}
