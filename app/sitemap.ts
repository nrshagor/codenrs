import type { MetadataRoute } from 'next'

const baseUrl = 'https://codenrs.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: '', priority: 1, changeFrequency: 'weekly' as const },
    { path: '/about', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/services', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/portfolio', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/blog', priority: 0.7, changeFrequency: 'weekly' as const },
    { path: '/careers', priority: 0.5, changeFrequency: 'monthly' as const },
    { path: '/contact', priority: 0.6, changeFrequency: 'yearly' as const },
    { path: '/pocket-lens', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/pocket-lens/privacy', priority: 0.3, changeFrequency: 'yearly' as const },
    { path: '/pulseboard', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/pulseboard/docs', priority: 0.6, changeFrequency: 'monthly' as const },
    { path: '/pulseboard/marketplace', priority: 0.6, changeFrequency: 'monthly' as const },
    { path: '/pulseboard/privacy', priority: 0.3, changeFrequency: 'yearly' as const },
    { path: '/pulseboard/security', priority: 0.3, changeFrequency: 'yearly' as const },
    { path: '/pulseboard/support', priority: 0.5, changeFrequency: 'monthly' as const },
    { path: '/pulseboard/terms', priority: 0.3, changeFrequency: 'yearly' as const },
    { path: '/revivaiq', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/revivaiq/docs', priority: 0.6, changeFrequency: 'monthly' as const },
    { path: '/revivaiq/marketplace', priority: 0.6, changeFrequency: 'monthly' as const },
    { path: '/revivaiq/privacy', priority: 0.3, changeFrequency: 'yearly' as const },
    { path: '/revivaiq/security', priority: 0.3, changeFrequency: 'yearly' as const },
    { path: '/revivaiq/support', priority: 0.5, changeFrequency: 'monthly' as const },
    { path: '/revivaiq/terms', priority: 0.3, changeFrequency: 'yearly' as const },
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }))
}
