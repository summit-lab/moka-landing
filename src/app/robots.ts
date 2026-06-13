import type { MetadataRoute } from 'next'

const BASE_URL = 'https://www.usemoka.io'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      // Post-booking confirmation page — no SEO value, keep it out of the index.
      disallow: '/confirmacion',
    },
    sitemap: `${BASE_URL}/sitemap.xml`,
  }
}
