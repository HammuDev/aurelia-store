'use client'

import Link from 'next/link'
import { useEffect } from 'react'
import { Header, Footer } from '@/components/storefront'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <>
      <Header />
      <main className="mx-auto max-w-4xl px-5 py-24 text-center">
        <p className="text-[10px] uppercase tracking-[0.3em] text-gold">
          Something went wrong
        </p>
        <h1 className="mt-3 font-serif text-6xl">Oops</h1>
        <p className="mt-6 text-lg text-charcoal/70">
          We encountered an error while processing your request.
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
          <button
            onClick={reset}
            className="inline-block bg-charcoal px-8 py-4 text-xs uppercase tracking-wider text-ivory hover:bg-charcoal/90"
          >
            Try again
          </button>
          <Link
            href="/shop"
            className="inline-block border border-charcoal px-8 py-4 text-xs uppercase tracking-wider text-charcoal hover:bg-charcoal/5"
          >
            Back to shop
          </Link>
        </div>
      </main>
      <Footer />
    </>
  )
}
