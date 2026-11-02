import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { JsonLd } from '@/components/json-ld';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: '中国企业在美国的企业管家 · 美企落地运营 | RVL Funding 洛杉矶',
    template: '%s | RVL Funding',
  },
  description:
    '意向或已在美国落地的中国企业：合规日历、经营记录、律师与财税、薪资系统、保险和人力资源，按月负责。移民律师、税法律师、CPA 一个团队。路径评估 $300 起。Your operations lead in the U.S.',
  keywords: ['美企落地', '落地运营', '中国企业 美国 公司注册', 'L-1A 新办公司', 'EB-1C 运营记录', '美国 PEO 华人企业', '美国 商业保险 续保', '企业管家 美国', 'Chinese company US subsidiary operations', 'operations lead US Chinese companies'],
  alternates: { canonical: '/' },
  metadataBase: new URL('https://rvlfunding.com'),
  openGraph: {
    title: 'RVL Funding — 你在美国的企业管家，按月',
    description: '老板在中国，美国事事有回应。合规日历、经营记录、律师与财税、薪资、保险、人力资源，一个团队按月负责。',
    siteName: 'RVL Funding',
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
        <JsonLd />
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
