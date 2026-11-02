import Link from 'next/link';
import type { Metadata } from 'next';
import AssessmentForm from './AssessmentForm';
import { PRODUCTS } from '@/lib/site-content';

export const metadata: Metadata = {
  title: '路径评估 · Path Assessment | RVL Funding',
  description: '一次面谈 + 一份可以交给律师的书面落地方案：公司怎么设、人怎么来、钱怎么出、税怎么交、保险买什么、五年花多少。$300 起，60 天内签约全额抵扣。',
};

const DELIVERABLES = [
  { title: '三条路对比', text: 'L-1A → EB-1C ／ EB-5 直投 ／ NIW 或 EB-1A：各自的条件、时间线、五年总预算、主要风险。' },
  { title: '公司与税务怎么落地', text: '选州、结构、开户、薪资、保险、合规日历；你的结构下在美国要交什么税、什么时候交、谁来交。' },
  { title: '资金与家庭', text: '资金来源要求怎么满足；配偶与子女年龄对路径选择的影响。' },
  { title: '见律师前的 8 个问题', text: '带着这 8 个问题去见任何一位律师，你能在 30 分钟内判断对方靠不靠谱。' },
  { title: '90 天行动清单', text: '不管做不做，接下来 90 天该做的 10 件事，按顺序。' },
];

export default function AssessmentPage() {
  const p = PRODUCTS[0];
  return (
    <main className="page-shell">
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">{p.eyebrow} · Path Assessment</p>
          <h1>先用 $300，拿到一份可以交给律师的落地方案</h1>
          <p className="hero-text">{p.promise}</p>
          <div className="hero-actions">
            <a className="btn-primary" href="#book">
              预约 · {p.price}
            </a>
            <Link className="btn-navy" href="/services#assessment">
              看包含与条款
            </Link>
          </div>
        </div>
      </section>

      <section className="section-intro">
        <div className="container">
          <p className="section-label">你拿到的</p>
          <h2>一份能拿给律师核对的书面落地方案</h2>
          <div className="service-grid" style={{ marginTop: '2rem', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
            {DELIVERABLES.map((d) => (
              <article className="service-card" key={d.title}>
                <h3>{d.title}</h3>
                <p>{d.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="home-section home-section--mist" id="book" aria-labelledby="book-heading">
        <div className="container assessment-layout">
          <div>
            <span className="eyebrow">预约</span>
            <h2 id="book-heading">填表，1 个工作日内回复排期</h2>
            <p style={{ marginBottom: '1.5rem' }}>{p.priceNote}</p>
            <ul className="dot-list">
              <li>先付款后排期；面谈线上或洛杉矶面对面</li>
              <li>面谈后 5 个工作日交付书面落地方案</li>
              <li>60 天内签约月费或项目管理，评估费全额抵扣</li>
              <li>面谈前不需要发任何证件</li>
            </ul>
            <p style={{ marginTop: '1.5rem', fontSize: '0.9rem' }}>
              想先聊 15 分钟再决定？<Link href="/book" style={{ color: 'var(--gold)', fontWeight: 700 }}>约一个电话</Link>。
            </p>
          </div>
          <div className="form-card">
            <AssessmentForm />
          </div>
        </div>
      </section>
    </main>
  );
}
