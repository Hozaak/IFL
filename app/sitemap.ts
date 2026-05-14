import { MetadataRoute } from 'next'
import { SITE_CONFIG } from '@/constants/site'
import { COURSES } from '@/constants/courses'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE_CONFIG.url

  const staticPages: MetadataRoute.Sitemap = [
    { url: base, lastModified: new Date(), changeFrequency: 'weekly', priority: 1.0 },
    { url: `${base}/courses`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/admission`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/placement`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/contact`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
  ]

  const coursePages: MetadataRoute.Sitemap = COURSES.map((course) => ({
    url: `${base}/courses/${course.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
  }))

  return [...staticPages, ...coursePages]
}
