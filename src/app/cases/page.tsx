import Link from 'next/link';
import type { Metadata } from 'next';
import { CASES } from '@/lib/site-content';

export const metadata: Metadata = {
  title: '案例 · Cases | RVL Funding',
  description: '以代号呈现的真实案例：L-1 全案材料、多公司商业保险与理赔协调、从零搭起的外贸公司。不写姓名与证件信息。',
};

export default function CasesPage() {
  return (
    <main className="page-shell">
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">案例 · Cases</p>
          <h1>真实的事，匿名的人</h1>
          <p className="hero-text">
            客户以代号呈现，不写姓名、公司名与任何证件信息。每个案子都不一样，过往结果不代表未来审批。
          </p>
          <div className="hero-actions">
            <Link className="btn-primary" href="/assessment">
              从路径评估开始
            </Link>
          </div>
        </div>
      </section>

      <section className="section-dark">
        <div className="container">
          <p className="section-label">代号案例</p>
          <h2 style={{ color: 'var(--white)', marginBottom: '2rem' }}>运营、保险、材料——三件事同时发生</h2>
          <div className="case-list">
            {CASES.map((c) => (
              <article className="case-card" key={c.code}>
                <span className="case-code case-code--dark">
                  {c.code} · {c.industry}
                </span>
                <h3>{c.title}</h3>
                <p>{c.text}</p>
                <p className="case-result case-result--dark">结果：{c.result}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="container">
          <div className="cta-inner">
            <span className="eyebrow">你的情况</span>
            <h2>先评估，再决定要不要成为下一个代号</h2>
            <p style={{ margin: '1rem 0 2rem' }}>90 分钟 + 书面报告，5 个工作日，$1,800 起。</p>
            <Link href="/assessment" className="btn-primary">
              预约路径评估
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
