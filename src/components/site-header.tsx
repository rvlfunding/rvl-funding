'use client';

import Link from 'next/link';
import { useState, useRef } from 'react';

const nav = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/cases', label: 'Cases' },
  {
    label: 'Resources',
    children: [
      { href: '/resources', label: 'Library' },
      { href: '/insights', label: 'Insights' },
      { href: '/members', label: 'Members' },
    ],
  },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  function handleEnter() {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpen(true);
  }

  function handleLeave() {
    closeTimer.current = setTimeout(() => setOpen(false), 200);
  }

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
                    onMouseEnter={handleEnter}
                    onMouseLeave={handleLeave}
                  >
                    {/* Trigger — no arrow, just underline on hover */}
                    <button
                      style={{
                        background: 'none',
                        border: 'none',
                        color: open ? 'var(--gold)' : 'var(--navy)',
                        fontWeight: 600,
                        fontSize: '0.82rem',
                        letterSpacing: '0.02em',
                        cursor: 'pointer',
                        fontFamily: 'inherit',
                        padding: '0.35rem 0',
                        transition: 'color 0.2s',
                        position: 'relative',
                      }}
                    >
                      {item.label}
                      {/* Subtle gold underline when open */}
                      <span style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: '2px',
                        background: 'linear-gradient(90deg, var(--gold), rgba(212,175,55,0.2))',
                        transform: open ? 'scaleX(1)' : 'scaleX(0)',
                        transformOrigin: 'left',
                        transition: 'transform 0.3s cubic-bezier(0.23,1,0.32,1)',
                      }} />
                    </button>

                    {/* Invisible bridge so mouse can travel to dropdown */}
                    {open && (
                      <div style={{
                        position: 'absolute',
                        top: '100%',
                        left: '-20px',
                        right: '-20px',
                        height: '16px',
                      }} />
                    )}

                    {/* Dropdown */}
                    {open && (
                      <ul
                        onMouseEnter={handleEnter}
                        onMouseLeave={handleLeave}
                        style={{
                          position: 'absolute',
                          top: 'calc(100% + 12px)',
                          left: '50%',
                          transform: 'translateX(-50%)',
                          background: 'var(--white)',
                          border: '1px solid var(--border)',
                          borderRadius: '14px',
                          boxShadow: '0 20px 60px rgba(10,37,64,0.12)',
                          listStyle: 'none',
                          padding: '6px',
                          minWidth: '160px',
                          zIndex: 200,
                        }}
                      >
                        {item.children.map((child) => (
                          <li key={child.href}>
                            <Link
                              href={child.href}
                              style={{
                                display: 'block',
                                padding: '9px 16px',
                                color: 'var(--navy)',
                                fontWeight: 500,
                                fontSize: '0.82rem',
                                borderRadius: '9px',
                                textDecoration: 'none',
                                transition: 'background 0.15s, color 0.15s',
                              }}
                              onMouseEnter={e => {
                                const el = e.currentTarget as HTMLElement;
                                el.style.background = 'var(--mist)';
                                el.style.color = 'var(--gold)';
                              }}
                              onMouseLeave={e => {
                                const el = e.currentTarget as HTMLElement;
                                el.style.background = 'transparent';
                                el.style.color = 'var(--navy)';
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
