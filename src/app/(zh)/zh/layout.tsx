import type { Metadata } from 'next';
import { Footer } from './_components/Footer';
import { Header } from './_components/Header';

export const metadata: Metadata = {
  title: { template: '%s｜RVL Funding', default: 'RVL Funding 中文' },
  // 百度移动适配声明：同一 URL 同时服务电脑与手机，并禁止转码。
  // 百度站长平台验证码拿到后加在这里：'baidu-site-verification': '…'
  other: { 'applicable-device': 'pc,mobile', 'Cache-Control': 'no-transform' },
};

export default function ZhSiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
