import Link from 'next/link'

export default function NotFound() {
  return <main className="flex min-h-screen items-center justify-center bg-[#f2ede7] px-5 text-center"><div><p className="text-[10px] uppercase tracking-[0.3em] text-[#b18b55]">Aurelia</p><h1 className="mt-4 font-serif text-7xl">404</h1><p className="mt-4 text-sm text-black/60">This page has wandered beyond our collection.</p><Link href="/" className="mt-8 inline-block bg-[#292725] px-6 py-4 text-[10px] uppercase tracking-wider text-[#f8f4ed]">Return home</Link></div></main>
}
