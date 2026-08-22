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
};

export default nextConfig;
