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
      <h5>Briefings</h5>
      <p>
        USCIS policy shifts, tax reminders, and portfolio governance notes—curated for principals and family
        offices.
      </p>
      {status === 'success' ? (
        <p style={{ color: 'rgba(212, 175, 55, 0.95)', fontSize: '0.88rem', fontWeight: 600 }}>
          ✓ You are on the list. We will be in touch every Monday.
        </p>
      ) : (
        <>
          <form className="footer-subscribe-form" onSubmit={onSubmit} noValidate>
            <input
              type="email"
              name="email"
              placeholder="Work email"
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
              {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
            </button>
          </form>
          {status === 'error' && (
            <p style={{ color: '#ff6b6b', fontSize: '0.8rem', marginTop: '0.5rem' }}>
              Something went wrong. Please try again.
            </p>
          )}
        </>
      )}
    </div>
  );
}
