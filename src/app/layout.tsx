import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'RVL Funding | 你在美国的运营负责人 · U.S. Operations Lead for Chinese Companies',
  description:
    '面向已在美国落地的中国企业：路径评估、按月运营陪跑、五年全程项目管理。保险续保、合规日历、经营记录、律师与 CPA 对接，美国这边有人负责。Operations, compliance and documentation for Chinese companies landing in the U.S.',
  metadataBase: new URL('https://rvlfunding.com'),
  openGraph: {
    title: 'RVL Funding — 你在美国的运营负责人，按月',
    description: '已在美国落地的中国企业，美国这边需要一个信得过、懂规则、肯把事办完的人。',
    locale: 'zh_CN',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN" className={inter.variable}>
      <body className="antialiased">
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
