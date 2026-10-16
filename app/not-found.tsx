import Link from 'next/link'
import { Header, Footer } from '@/components/storefront'

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-4xl px-5 py-24 text-center">
        <p className="text-[10px] uppercase tracking-[0.3em] text-gold">
          Page not found
        </p>
        <h1 className="mt-3 font-serif text-6xl">404</h1>
        <p className="mt-6 text-lg text-charcoal/70">
          We couldn't find the page you're looking for.
        </p>
        <Link
          href="/shop"
          className="mt-10 inline-block bg-charcoal px-8 py-4 text-xs uppercase tracking-wider text-ivory hover:bg-charcoal/90"
        >
          Back to shop
        </Link>
      </main>
      <Footer />
    </>
  )
}
