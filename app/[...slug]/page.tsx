import type { Metadata } from 'next'
import { RoutedApp } from '@/components/storefront'
import { getProduct } from '@/lib/mock-data'

type Props = { params: Promise<{ slug?: string[] }> }
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = (await params).slug ?? []
  const route = slug[0]
  if (route === 'shop') return { title: 'Shop Abayas | Aurelia', description: 'Explore Aurelia abayas for daily wear, Eid, bridal moments and more.', openGraph: { title: 'Shop Abayas | Aurelia', description: 'Explore the Aurelia collection.', type: 'website' } }
  if (route === 'size-guide') return { title: 'Size Guide | Aurelia', description: 'Find your best Aurelia abaya fit with our measurement guide.', openGraph: { title: 'Size Guide | Aurelia', description: 'Find your best Aurelia abaya fit.', type: 'website' } }
  if (route === 'product') { const product = getProduct(slug[1] ?? 'noor'); return { title: `${product.name} | Aurelia`, description: product.description, openGraph: { title: `${product.name} | Aurelia`, description: product.description, images: [product.images[0]], type: 'website' } } }
  return { title: 'Aurelia | Modern Abayas', description: 'Quietly elegant abayas, designed in Pakistan.', openGraph: { title: 'Aurelia | Modern Abayas', description: 'Quietly elegant abayas, designed in Pakistan.', type: 'website' } }
}
export default function CatchAllPage() { return <RoutedApp /> }
