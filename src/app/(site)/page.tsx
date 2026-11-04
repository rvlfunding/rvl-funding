import type { Metadata } from 'next';
import Home from './home-client';

// The home page body is a client component; this server wrapper adds canonical and hreflang.
export const metadata: Metadata = {
  alternates: {
    canonical: '/',
    languages: { en: '/', 'zh-Hans': '/zh', 'x-default': '/' },
  },
};

export default function Page() {
  return <Home />;
}
