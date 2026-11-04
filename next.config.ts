import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /**
   * Gated PDFs live in `private/` (outside `public/`) so they are never served
   * directly — they are only reachable through a signed download route. Next's
   * output tracing cannot see the runtime `fs.readFile`, so the directory is
   * bundled explicitly.
   */
  outputFileTracingIncludes: {
    '/api/resources/**': ['./private/**'],
  },
  /** Retired English URLs, 301-redirected to the page that replaced them. */
  async redirects() {
    return [
      { source: '/cases', destination: '/services', permanent: true },
      { source: '/blog', destination: '/insights', permanent: true },
      { source: '/src/app/tax-summary', destination: '/tax-summary', permanent: true },
      { source: '/2026%20TAX%20.pdf', destination: '/tax-summary.pdf', permanent: true },
      { source: '/eb1a-checklist.pdf', destination: '/l1a-checklist', permanent: true },
      { source: '/asset-allocation-template.pdf', destination: '/resources', permanent: true },
      { source: '/preview.html', destination: '/', permanent: true },
    ];
  },
};

export default nextConfig;
