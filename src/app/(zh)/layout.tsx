import type { Metadata, Viewport } from 'next';
import { Cormorant_Garamond, Noto_Sans_SC, Noto_Serif_SC } from 'next/font/google';
import { SITE_URL } from './zh/content';
import './zh/home.css';

/**
 * 中文站点的独立根布局。英文站点的页眉、页脚与 globals.css 在 (site)/layout.tsx，
 * 两套样式互不干扰。字体由 next/font 自托管，不依赖访客能否连上 Google。
 */
const serif = Noto_Serif_SC({
  weight: ['500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-serif-sc',
  display: 'swap',
  preload: false,
});

const sans = Noto_Sans_SC({
  weight: ['300', '400', '500'],
  subsets: ['latin'],
  variable: '--font-sans-sc',
  display: 'swap',
  preload: false,
});

const latin = Cormorant_Garamond({
  weight: ['500', '600'],
  subsets: ['latin'],
  variable: '--font-latin',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: '#0B2340',
};

export default function ZhRootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-Hans" className={`${serif.variable} ${sans.variable} ${latin.variable}`}>
      <body>{children}</body>
    </html>
  );
}
