'use client';

import { FormEvent, useState } from 'react';

export function FooterSubscribe() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('loading');

    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        setStatus('success');
        setEmail('');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  return (
    <div className="footer-subscribe">
      <h5>政策与截止日提醒</h5>
      <p>
        USCIS 政策变化、加州合规与保险到期提醒、落地运营要点——不定期，只发有用的。
      </p>
      {status === 'success' ? (
        <p style={{ color: 'rgba(212, 175, 55, 0.95)', fontSize: '0.88rem', fontWeight: 600 }}>
          ✓ 已订阅。有用的才发。
        </p>
      ) : (
        <>
          <form className="footer-subscribe-form" onSubmit={onSubmit} noValidate>
            <input
              type="email"
              name="email"
              placeholder="工作邮箱"
              required
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={status === 'loading'}
              style={{ opacity: status === 'loading' ? 0.6 : 1 }}
            />
            <button
              type="submit"
              className="btn-subscribe"
              disabled={status === 'loading'}
              style={{ opacity: status === 'loading' ? 0.6 : 1 }}
            >
              {status === 'loading' ? '提交中…' : '订阅'}
            </button>
          </form>
          {status === 'error' && (
            <p style={{ color: '#ff6b6b', fontSize: '0.8rem', marginTop: '0.5rem' }}>
              提交失败，请稍后再试。
            </p>
          )}
        </>
      )}
    </div>
  );
}
