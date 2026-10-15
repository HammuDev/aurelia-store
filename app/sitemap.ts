import type { MetadataRoute } from 'next'

const baseUrl = 'https://aurelia.pk'

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ['', '/shop', '/about', '/contact', '/size-guide', '/shipping-returns', '/faq', '/privacy-policy', '/terms']
  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '/shop' ? 'daily' : 'monthly',
    priority: route === '' ? 1 : route === '/shop' ? 0.9 : 0.6,
  }))
}
