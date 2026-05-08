'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';

const articles = [
  { date: 'May 2026', title: 'EB-1A Visa: Key Strategic Insights for 2026', excerpt: 'Understanding the evolving criteria and successful documentation strategies for EB-1A visa applications in the current immigration landscape.', category: 'Immigration', readTime: '8 min' },
  { date: 'April 2026', title: 'Cross-Border Tax Planning: Maximizing Efficiency', excerpt: 'Expert analysis on latest tax structures and compliance strategies for high-net-worth individuals with U.S. immigration objectives.', category: 'Tax Planning', readTime: '6 min' },
  { date: 'April 2026', title: 'Asset Protection in Volatile Markets', excerpt: 'Why offshore trusts and strategic asset allocation remain critical tools for wealth preservation and multi-generational planning.', category: 'Wealth Management', readTime: '7 min' },
  { date: 'March 2026', title: 'EB-2 & NIW: When to Pursue These Categories', excerpt: 'Comprehensive guide comparing EB-2 and NIW visa pathways, helping you determine the optimal strategy for your professional profile.', category: 'Immigration', readTime: '9 min' },
  { date: 'March 2026', title: 'Family Office Governance for Global Families', excerpt: 'Governance frameworks that align immigration timelines with family office investment policy and reporting.', category: 'Family Office', readTime: '10 min' },
  { date: 'February 2026', title: 'Sequencing the Balance Sheet Before the Green Card', excerpt: 'Ordering tax, trust, and operating moves ahead of the status inflection point.', category: 'Wealth Architecture', readTime: '7 min' },
  { date: 'February 2026', title: 'When NIW Fits — and When EB-1A Is the Cleaner Play', excerpt: 'A decision framework for scientists and operators with uneven public profiles.', category: 'Immigration', readTime: '9 min' },
  { date: 'January 2026', title: 'Asset Protection Without Theatrics', excerpt: 'Trust and offshore layering where statute allows — without strategies that fail under creditor or regulatory review.', category: 'Wealth Management', readTime: '8 min' },
];

function ArticleCarousel() {
  const [current, setCurrent] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const VISIBLE = 3;
  const maxIndex = articles.length - VISIBLE;

  function prev() { setCurrent((c) => Math.max(c - 1, 0)); }
  function next() { setCurrent((c) => Math.min(c + 1, maxIndex)); }
  function onTouchStart(e: React.TouchEvent) { touchStartX.current = e.touches[0].clientX; }
  function onTouchEnd(e: React.TouchEvent) {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (diff > 50) next();
    else if (diff < -50) prev();
    touchStartX.current = null;
  }

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
        <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
          {current + 1}–{Math.min(current + VISIBLE, articles.length)} of {articles.length} articles
        </p>
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <button onClick={prev} disabled={current === 0} style={{ width: 40, height: 40, borderRadius: '50%', border: '1px solid var(--border)', background: current === 0 ? 'var(--mist-2)' : 'var(--white)', color: current === 0 ? 'var(--text-muted)' : 'var(--navy)', cursor: current === 0 ? 'not-allowed' : 'pointer', fontSize: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.2s' }}>←</button>
          <button onClick={next} disabled={current >= maxIndex} style={{ width: 40, height: 40, borderRadius: '50%', border: '1px solid var(--border)', background: current >= maxIndex ? 'var(--mist-2)' : 'var(--navy)', color: current >= maxIndex ? 'var(--text-muted)' : 'var(--gold)', cursor: current >= maxIndex ? 'not-allowed' : 'pointer', fontSize: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.2s' }}>→</button>
        </div>
      </div>
      <div style={{ overflow: 'hidden' }} onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
        <div style={{ display: 'flex', gap: '1.5rem', transform: `translateX(calc(-${current} * (100% / ${VISIBLE} + 0.5rem)))`, transition: 'transform 0.4s cubic-bezier(0.23, 1, 0.32, 1)' }}>
          {articles.map((article, idx) => (
            <article key={idx} className="service-card" style={{ minWidth: `calc((100% - ${(VISIBLE - 1) * 1.5}rem) / ${VISIBLE})`, flexShrink: 0, cursor: 'pointer', opacity: idx >= current && idx < current + VISIBLE ? 1 : 0.4, transition: 'opacity 0.3s ease' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
                <span style={{ fontSize: '0.7rem', fontWeight: 700, color: 'var(--gold)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{article.category}</span>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{article.readTime}</span>
              </div>
              <h3 style={{ marginBottom: '0.65rem', fontSize: '1.05rem', lineHeight: 1.35 }}>{article.title}</h3>
              <p style={{ marginBottom: '1rem', fontSize: '0.9rem', lineHeight: 1.7, color: 'var(--text-muted)' }}>{article.excerpt}</p>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '1rem', borderTop: '1px solid var(--border)', marginTop: 'auto' }}>
                <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>{article.date}</span>
                <span style={{ color: 'var(--gold)', fontWeight: 700, fontSize: '0.85rem' }}>Read More →</span>
              </div>
            </article>
          ))}
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '6px', marginTop: '1.5rem' }}>
        {Array.from({ length: maxIndex + 1 }).map((_, i) => (
          <button key={i} onClick={() => setCurrent(i)} style={{ width: i === current ? 24 : 8, height: 8, borderRadius: '999px', border: 'none', background: i === current ? 'var(--gold)' : 'var(--border)', cursor: 'pointer', padding: 0, transition: 'all 0.3s ease' }} />
        ))}
      </div>
    </div>
  );
}

export default function BlogPage() {
  return (
    <main className="page-shell">
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Blog</p>
          <h1>Commentary on Immigration, Tax &amp; Wealth</h1>
          <p className="hero-text">
            Longer essays for principals and family offices already running institutional processes — not generic marketing posts.
          </p>
          <div className="hero-actions">
            <Link className="btn-primary" href="/contact">Ask a question</Link>
          </div>
        </div>
      </section>
      <section className="section-intro">
        <div className="container">
          <p className="section-label">Selected Articles</p>
          <h2 style={{ marginBottom: '2rem' }}>Latest from RVL</h2>
          <ArticleCarousel />
        </div>
      </section>
      <section className="cta-band">
        <div className="container">
          <div className="cta-inner">
            <span className="eyebrow" style={{ textAlign: 'center' }}>Stay Current</span>
            <h2>Subscribe to Our Weekly Briefing</h2>
            <p style={{ color: 'var(--text-muted)' }}>Immigration policy, financial intelligence, and editorial commentary — delivered every Monday.</p>
            <div style={{ marginTop: '1.5rem' }}>
              <Link href="/insights" className="btn-primary">Go to Insights →</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
