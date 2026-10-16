'use client'

import { X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { NewsletterForm } from './newsletter-form'

export function NewsletterPopup() {
  const [show, setShow] = useState(false)
  const [exitIntentTriggered, setExitIntentTriggered] = useState(false)

  useEffect(() => {
    const dismissed = localStorage.getItem('aurelia-newsletter-dismissed')
    if (dismissed) return

    // Show after 8 seconds
    const timer = setTimeout(() => setShow(true), 8000)

    // Exit intent (mouse leaving viewport at top)
    const handleMouseLeave = (e: MouseEvent) => {
      if (
        e.clientY <= 0 &&
        !exitIntentTriggered &&
        window.innerWidth >= 1024
      ) {
        setShow(true)
        setExitIntentTriggered(true)
      }
    }

    window.addEventListener('mouseleave', handleMouseLeave)
    return () => {
      clearTimeout(timer)
      window.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [exitIntentTriggered])

  const handleClose = () => {
    setShow(false)
    localStorage.setItem('aurelia-newsletter-dismissed', 'true')
  }

  if (!show) return null

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 p-4 sm:p-6">
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="newsletter-title"
        className="relative w-full max-w-md rounded-lg bg-ivory p-8 shadow-xl"
      >
        <button
          onClick={handleClose}
          aria-label="Close newsletter popup"
          className="absolute right-4 top-4 flex size-11 items-center justify-center rounded-full hover:bg-sand"
        >
          <X className="size-5" />
        </button>

        <p className="text-[10px] uppercase tracking-[0.3em] text-gold">
          Exclusive offer
        </p>
        <h2
          id="newsletter-title"
          className="mt-3 font-serif text-3xl text-charcoal"
        >
          Join the circle
        </h2>

        <div className="mt-6">
          <NewsletterForm />
        </div>

        <p className="mt-4 text-xs text-charcoal/50">
          Subscribe to get <strong>10% off</strong> your first order
        </p>
      </div>
    </div>
  )
}
