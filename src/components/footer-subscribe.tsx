'use client';

import { FormEvent, useState } from 'react';

export function FooterSubscribe() {
  const [done, setDone] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setDone(true);
  }

  return (
    <div className="footer-subscribe">
      <h5>Briefings</h5>
      <p>
        USCIS policy shifts, tax reminders, and portfolio governance notes—curated for principals and family
        offices.
      </p>
      {done ? (
        <p style={{ color: 'rgba(212, 175, 55, 0.95)', fontSize: '0.88rem', fontWeight: 600 }}>
          Thank you. You are on the list.
        </p>
      ) : (
        <form className="footer-subscribe-form" onSubmit={onSubmit} noValidate>
          <input type="email" name="email" placeholder="Work email" required autoComplete="email" />
          <button type="submit" className="btn-subscribe">
            Subscribe
          </button>
        </form>
      )}
    </div>
  );
}
