import type { MetadataRoute } from 'next';
import { SITE } from '@/lib/site-content';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const pages: Array<[string, number, MetadataRoute.Sitemap[number]['changeFrequency']]> = [
    ['/', 1.0, 'weekly'],
    ['/services', 0.9, 'monthly'],
    ['/assessment', 0.9, 'monthly'],
    ['/cases', 0.7, 'monthly'],
    ['/about', 0.7, 'monthly'],
    ['/contact', 0.6, 'yearly'],
    ['/book', 0.6, 'yearly'],
    ['/resources', 0.5, 'monthly'],
    ['/insights', 0.5, 'weekly'],
    ['/blog', 0.4, 'weekly'],
  ];
  return pages.map(([path, priority, changeFrequency]) => ({
    url: `${SITE.url}${path}`,
    lastModified: now,
    changeFrequency,
    priority,
  }));
}
