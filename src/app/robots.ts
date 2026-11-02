import type { MetadataRoute } from 'next';
import { SITE } from '@/lib/site-content';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: '*', allow: '/', disallow: ['/api/', '/members', '/ref'] }],
    sitemap: `${SITE.url}/sitemap.xml`,
  };
}
