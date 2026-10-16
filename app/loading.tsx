import { SkeletonGrid } from '@/components/skeleton-card'
import { Header, Footer } from '@/components/storefront'

export default function Loading() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-7xl px-5 py-14">
        <div className="h-12 w-40 animate-pulse rounded bg-neutral-200 mb-6" />
        <SkeletonGrid count={8} />
      </main>
      <Footer />
    </>
  )
}
