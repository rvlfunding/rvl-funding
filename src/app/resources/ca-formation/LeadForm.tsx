'use client';

import { useState } from 'react';

const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: '0.85rem 1.1rem',
  borderRadius: '14px',
  border: '1px solid var(--border)',
  background: 'var(--white)',
  fontSize: '0.95rem',
  fontFamily: 'inherit',
  color: 'var(--text)',
};

const labelStyle: React.CSSProperties = {
  display: 'block',
  fontSize: '0.78rem',
  fontWeight: 700,
  letterSpacing: '0.08em',
  textTransform: 'uppercase',
  color: 'var(--text-muted)',
  marginBottom: '0.45rem',
};

type Status = 'idle' | 'loading' | 'success' | 'error';

export default function LeadForm() {
  const [form, setForm] = useState({ name: '', email: '', company: '', phone: '', website: '' });
  const [status, setStatus] = useState<Status>('idle');
  const [message, setMessage] = useState('');

  function update(field: keyof typeof form) {
    return (e: React.ChangeEvent<HTMLInputElement>) =>
      setForm((prev) => ({ ...prev, [field]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('loading');
    setMessage('');

    try {
      const res = await fetch('/api/resources/ca-formation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus('success');
        return;
      }

      const data = await res.json().catch(() => ({}));
      setStatus('error');
      setMessage(
        res.status === 429
          ? '提交过于频繁，请稍后再试。 / Too many requests — please try again shortly.'
          : (data.error as string) || '提交失败，请稍后再试。 / Submission failed, please try again.',
      );
    } catch {
      setStatus('error');
      setMessage('网络错误，请稍后再试。 / Network error, please try again.');
    }
  }

  if (status === 'success') {
    return (
      <div
        style={{
          background: 'var(--mist)',
          border: '1px solid var(--border)',
          borderRadius: 'var(--radius)',
          padding: '2rem',
          textAlign: 'center',
        }}
      >
        <p style={{ color: 'var(--gold)', fontWeight: 700, fontSize: '1.05rem', margin: '0 0 0.5rem' }}>
          ✓ 下载链接已发送 · Download link sent
        </p>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.7, margin: 0 }}>
          请查收 <strong>{form.email}</strong> 的邮件，链接 7 天内有效。若未收到，请检查垃圾邮件文件夹。
          <br />
          Check your inbox for the link, valid for 7 days. If it hasn&apos;t arrived, please check your spam folder.
        </p>
      </div>
    );
  }

  const disabled = status === 'loading';

  return (
    <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '1.1rem' }}>
      <div style={{ display: 'grid', gap: '1.1rem', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))' }}>
        <div>
          <label style={labelStyle} htmlFor="lead-name">
            姓名 · Name *
          </label>
          <input
            id="lead-name"
            style={inputStyle}
            value={form.name}
            onChange={update('name')}
            required
            disabled={disabled}
            autoComplete="name"
          />
        </div>
        <div>
          <label style={labelStyle} htmlFor="lead-email">
            邮箱 · Email *
          </label>
          <input
            id="lead-email"
            type="email"
            style={inputStyle}
            value={form.email}
            onChange={update('email')}
            required
            disabled={disabled}
            autoComplete="email"
          />
        </div>
        <div>
          <label style={labelStyle} htmlFor="lead-company">
            公司 · Company
          </label>
          <input
            id="lead-company"
            style={inputStyle}
            value={form.company}
            onChange={update('company')}
            disabled={disabled}
            autoComplete="organization"
          />
        </div>
        <div>
          <label style={labelStyle} htmlFor="lead-phone">
            电话 · Phone
          </label>
          <input
            id="lead-phone"
            type="tel"
            style={inputStyle}
            value={form.phone}
            onChange={update('phone')}
            disabled={disabled}
            autoComplete="tel"
          />
        </div>
      </div>

      {/* Honeypot — hidden from humans, tempting to bots. */}
      <input
        type="text"
        name="website"
        value={form.website}
        onChange={update('website')}
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        style={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px', opacity: 0 }}
      />

      <button
        type="submit"
        className="btn-primary"
        disabled={disabled}
        style={{ justifySelf: 'start', opacity: disabled ? 0.6 : 1 }}
      >
        {disabled ? '提交中… / Sending…' : '获取下载链接 · Get the PDF'}
      </button>

      {status === 'error' && (
        <p style={{ color: '#b3261e', fontSize: '0.85rem', margin: 0 }}>{message}</p>
      )}

      <p style={{ color: 'var(--text-muted)', fontSize: '0.78rem', lineHeight: 1.7, margin: 0 }}>
        提交即表示同意 RVL Funding 就本次咨询与您联系。我们不会出售或分享您的信息。
        <br />
        By submitting, you agree to be contacted by RVL Funding regarding this enquiry. We never sell or share your information.
      </p>
    </form>
  );
}
