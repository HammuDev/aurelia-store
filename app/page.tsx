import type { Metadata } from 'next'
import { HomePage } from '@/components/storefront'

export const metadata: Metadata = {
  title: 'Aurelia | Modern Abayas, Made in Pakistan',
  description: 'Thoughtfully designed abayas for everyday rituals and unforgettable celebrations.',
  openGraph: { title: 'Aurelia | Modern Abayas', description: 'Quietly elegant abayas, designed in Pakistan.', type: 'website' },
}
export default function Page() { return <HomePage /> }
export const dynamic = 'force-dynamic'
