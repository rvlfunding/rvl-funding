import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHero } from '../../_components/Article';
import { EMAIL, R } from '../../content';

export const metadata: Metadata = {
  title: '付款成功',
  robots: { index: false, follow: false },
};

export default function PaySuccessPage() {
  const crumbs = [
    { name: '首页', path: R.home },
    { name: '在线付款', path: R.pay },
    { name: '付款成功', path: `${R.pay}/success` },
  ];
  return (
    <main id="top">
      <PageHero
        crumbs={crumbs}
        eyebrow="Thank you"
        h1="付款成功"
        lead="收据已由 Stripe 发送至您的邮箱。我们会在一个工作日内与您联系，确认会议时间与需要准备的材料。"
      />
      <div className="wrap article single">
        <div className="article-body">
          <section className="blk">
            <h2>接下来</h2>
            <ol>
              <li>我们会发出保密协议与会前问卷。</li>
              <li>请回复您方便的时间（注明时区）。</li>
              <li>如事项有截止日，请在回复中注明。</li>
            </ol>
            <p>
              如一个工作日内未收到邮件，请写信至 <a href={`mailto:${EMAIL}`}>{EMAIL}</a>。
            </p>
            <p>
              <Link className="more-link" href={R.home}>
                返回首页
              </Link>
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
