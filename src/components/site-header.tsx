'use client';

import Link from 'next/link';
import { useState } from 'react';

const nav = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/cases', label: 'Cases' },
  {
    label: 'Resources',
    children: [
      { href: '/resources', label: 'Downloads' },
      { href: '/insights', label: 'Insights' },
      { href: '/tax-summary', label: '2026 Tax Summary' },
      { href: '/l1a-checklist', label: 'L1-A Checklist' },
    ],
  },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
] as const;

export function SiteHeader() {
  const [openDropdown, setOpenDropdown] = useState(false);

  return (
    <header className="site-header">
      <div className="header-content">
        <Link href="/" className="brand-logo">
          <div className="brand-mark">RVL</div>
          <div className="brand-text">
            <h4>RVL FUNDING</h4>
            <p>Wealth &amp; Immigration</p>
          </div>
        </Link>
        <nav aria-label="Primary">
          <ul className="nav-menu">
            {nav.map((item) => {
              if ('children' in item) {
                return (
                  <li
                    key={item.label}
                    style={{ position: 'relative' }}
                    onMouseEnter={() => setOpenDropdown(true)}
                    onMouseLeave={() => setOpenDropdown(false)}
                  >
                    <button
                      style={{
                        background: 'none',
                        border: 'none',
                        color: 'var(--navy)',
                        fontWeight: 600,
                        fontSize: '0.82rem',
                        letterSpacing: '0.02em',
                        cursor: 'pointer',
                        fontFamily: 'inherit',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '4px',
                        padding: '0.35rem 0',
                      }}
                    >
                      {item.label}
                      <span style={{
                        fontSize: '9px',
                        transition: 'transform 0.2s',
                        transform: openDropdown ? 'rotate(180deg)' : 'rotate(0deg)',
                        display: 'inline-block',
                      }}>▼</span>
                    </button>

                    {openDropdown && (
                      <ul style={{
                        position: 'absolute',
                        top: '100%',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        marginTop: '8px',
                        background: 'var(--white)',
                        border: '1px solid var(--border)',
                        borderRadius: '12px',
                        boxShadow: '0 16px 48px rgba(10,37,64,0.12)',
                        listStyle: 'none',
                        padding: '8px',
                        minWidth: '180px',
                        zIndex: 200,
                      }}>
                        {item.children.map((child) => (
                          <li key={child.href}>
                            <Link
                              href={child.href}
                              style={{
                                display: 'block',
                                padding: '8px 14px',
                                color: 'var(--navy)',
                                fontWeight: 500,
                                fontSize: '0.82rem',
                                borderRadius: '8px',
                                textDecoration: 'none',
                                transition: 'background 0.15s, color 0.15s',
                              }}
                              onMouseEnter={e => {
                                (e.target as HTMLElement).style.background = 'var(--mist)';
                                (e.target as HTMLElement).style.color = 'var(--gold)';
                              }}
                              onMouseLeave={e => {
                                (e.target as HTMLElement).style.background = 'transparent';
                                (e.target as HTMLElement).style.color = 'var(--navy)';
                              }}
                            >
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                );
              }

              return (
                <li key={item.href}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}
