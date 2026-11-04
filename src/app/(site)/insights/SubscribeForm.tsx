'use client';

import { useState } from 'react';

export default function SubscribeForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  async function handleSubmit(e: React.FormEvent) {
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

  if (status === 'success') {
    return (
      <p style={{ color: 'var(--gold)', fontWeight: 600, marginTop: '1.5rem', fontSize: '1rem' }}>
        ✓ You're subscribed. We'll be in touch every Monday.
      </p>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: 'flex', gap: '0.75rem', maxWidth: '480px', margin: '1.5rem auto 0', flexWrap: 'wrap' }}
    >
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email address"
        required
        disabled={status === 'loading'}
        style={{
          flex: 1, minWidth: '200px', padding: '0.85rem 1rem',
          borderRadius: '999px', border: '1px solid var(--border)',
          fontSize: '1rem', fontFamily: 'inherit',
          opacity: status === 'loading' ? 0.6 : 1,
        }}
      />
      <button
        type="submit"
        className="btn-primary"
        disabled={status === 'loading'}
        style={{ whiteSpace: 'nowrap', opacity: status === 'loading' ? 0.6 : 1 }}
      >
        {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
      </button>
      {status === 'error' && (
        <p style={{ width: '100%', color: 'red', fontSize: '0.85rem', textAlign: 'center' }}>
          Something went wrong. Please try again.
        </p>
      )}
    </form>
  );
}
