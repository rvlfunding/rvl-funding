/** Registry of lead-gated downloads. Add an entry to publish a new gated PDF. */

export type GatedResource = {
  slug: string;
  /** File name inside the repo-root `private/` directory. */
  file: string;
  /** File name the visitor's browser will save it as. */
  downloadAs: string;
  titleEn: string;
  titleZh: string;
  /** Public landing page for this resource. */
  path: string;
};

export const GATED_RESOURCES: Record<string, GatedResource> = {
  'ca-formation': {
    slug: 'ca-formation',
    file: 'rvl-california-entity-formation-advisory-2026.pdf',
    downloadAs: 'RVL-California-Entity-Formation-Advisory-2026.pdf',
    titleEn: 'California Corporate Formation Advisory and Schedule of Professional Fees',
    titleZh: '美国加州公司注册咨询及服务报价',
    path: '/resources/ca-formation',
  },
};

export function getGatedResource(slug: string): GatedResource | undefined {
  return GATED_RESOURCES[slug];
}

export const SITE_URL = 'https://www.rvlfunding.com';
