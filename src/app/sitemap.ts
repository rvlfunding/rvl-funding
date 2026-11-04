import type { MetadataRoute } from 'next';
import { ZH_PATHS } from './(zh)/zh/data/registry';

const SITE = 'https://www.rvlfunding.com';

/** 英文公开页面。不含会员、内部参考与误建的路径。 */
const EN_PATHS = [
  '/',
  '/about',
  '/services',
  '/cases',
  '/contact',
  '/insights',
  '/blog',
  '/book',
  '/resources',
  '/resources/ca-formation',
  '/l1a-checklist',
  '/tax-summary',
];

/** 中英文互为对应的页面。 */
const PAIRS: Record<string, string> = { '/': '/zh', '/about': '/zh/about' };
const ZH_TO_EN = Object.fromEntries(Object.entries(PAIRS).map(([en, zh]) => [zh, en]));

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const en = EN_PATHS.map((p) => ({
    url: `${SITE}${p}`,
    lastModified: now,
    ...(PAIRS[p] ? { alternates: { languages: { en: `${SITE}${p}`, 'zh-Hans': `${SITE}${PAIRS[p]}` } } } : {}),
  }));
  const zh = ZH_PATHS.map((p) => ({
    url: `${SITE}${p}`,
    lastModified: now,
    ...(ZH_TO_EN[p] ? { alternates: { languages: { 'zh-Hans': `${SITE}${p}`, en: `${SITE}${ZH_TO_EN[p]}` } } } : {}),
  }));
  return [...en, ...zh];
}
