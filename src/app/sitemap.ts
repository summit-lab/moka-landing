import type { MetadataRoute } from 'next'

const BASE_URL = 'https://www.usemoka.io'
const lastModified = new Date('2026-06-13')

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: BASE_URL,
      lastModified,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${BASE_URL}/demo`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ]
}
