import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-inter',
  display: 'swap',
});

const DEFAULT_TITLE = 'RVL Funding | Cross-border wealth & U.S. immigration advisory';
const DEFAULT_DESCRIPTION =
  'EB-1 through NIW, global tax compliance, and cross-border asset protection for high-net-worth families. Private advisory modeled on institutional wealth platforms.';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.rvlfunding.com'),
  title: { default: DEFAULT_TITLE, template: '%s | RVL Funding' },
  description: DEFAULT_DESCRIPTION,
  openGraph: {
    type: 'website',
    siteName: 'RVL Funding',
    locale: 'en_US',
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: [{ url: '/images/home-v2/la-night.jpg', alt: 'Los Angeles skyline at night' }],
  },
  twitter: { card: 'summary_large_image', title: DEFAULT_TITLE, description: DEFAULT_DESCRIPTION },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased">
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
