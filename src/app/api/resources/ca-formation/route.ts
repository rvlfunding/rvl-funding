import { NextRequest, NextResponse } from 'next/server';
import { createDownloadToken } from '@/lib/download-token';
import { GATED_RESOURCES, SITE_URL } from '@/lib/gated-resources';

export const runtime = 'nodejs';

const RESOURCE = GATED_RESOURCES['ca-formation'];

/** Naive per-instance throttle: 5 submissions per IP per 10 minutes. */
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const hits = new Map<string, number[]>();

function rateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 5000) hits.clear();
  return recent.length > MAX_PER_WINDOW;
}

function clean(value: unknown, max: number): string {
  return typeof value === 'string' ? value.trim().slice(0, max) : '';
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

async function sendEmail(apiKey: string, payload: Record<string, unknown>) {
  return fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
}

export async function POST(req: NextRequest) {
  try {
    const ip =
      req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
      req.headers.get('x-real-ip') ||
      'unknown';

    if (rateLimited(ip)) {
      return NextResponse.json({ error: 'Too many requests' }, { status: 429 });
    }

    const body = await req.json();

    // Honeypot: real visitors never fill this hidden field.
    if (clean(body.website, 200)) {
      return NextResponse.json({ success: true });
    }

    const name = clean(body.name, 120);
    const email = clean(body.email, 200).toLowerCase();
    const company = clean(body.company, 160);
    const phone = clean(body.phone, 60);

    if (!name) {
      return NextResponse.json({ error: 'Name is required' }, { status: 400 });
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
      return NextResponse.json({ error: 'Invalid email' }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error('ca-formation: RESEND_API_KEY missing');
      return NextResponse.json({ error: 'Email service unavailable' }, { status: 500 });
    }
    if (!process.env.DOWNLOAD_SIGNING_SECRET) {
      console.error('ca-formation: DOWNLOAD_SIGNING_SECRET missing');
      return NextResponse.json({ error: 'Download service unavailable' }, { status: 500 });
    }

    const token = createDownloadToken(RESOURCE.slug, email);
    const downloadUrl = `${SITE_URL}/api/resources/${RESOURCE.slug}/file?t=${encodeURIComponent(token)}`;

    const row = (label: string, value: string) =>
      value
        ? `<tr><td style="padding:6px 16px 6px 0;color:#5a6b82;font-size:13px;white-space:nowrap;">${label}</td>
             <td style="padding:6px 0;color:#0a2540;font-size:14px;font-weight:600;">${escapeHtml(value)}</td></tr>`
        : '';

    // 1. Notify RVL.
    const adminRes = await sendEmail(apiKey, {
      from: 'RVL Funding <info@rvlfunding.com>',
      to: 'info@rvlfunding.com',
      reply_to: email,
      subject: `New download lead — ${name} (${RESOURCE.titleZh})`,
      html: `
        <div style="font-family:sans-serif;padding:24px;background:#f4f6f9;">
          <div style="max-width:520px;margin:0 auto;background:#fff;border-radius:8px;padding:24px;">
            <p style="font-size:12px;font-weight:700;color:#d4af37;letter-spacing:0.1em;text-transform:uppercase;margin:0;">New Download Lead</p>
            <h2 style="color:#0a2540;margin:8px 0 4px;">${escapeHtml(name)}</h2>
            <p style="color:#5a6b82;font-size:13px;margin:0 0 16px;">${escapeHtml(RESOURCE.titleZh)} · ${escapeHtml(RESOURCE.titleEn)}</p>
            <table style="border-collapse:collapse;">
              ${row('Email', email)}
              ${row('Company', company)}
              ${row('Phone', phone)}
              ${row('IP', ip)}
            </table>
          </div>
        </div>
      `,
    });

    if (!adminRes.ok) {
      console.error('ca-formation admin email failed:', await adminRes.text());
      return NextResponse.json({ error: 'Failed to send notification' }, { status: 502 });
    }

    // 2. Deliver the signed link to the visitor.
    const visitorRes = await sendEmail(apiKey, {
      from: 'RVL Funding <info@rvlfunding.com>',
      to: email,
      subject: '您的下载链接 · Your RVL advisory download',
      html: `
        <div style="font-family:sans-serif;padding:24px;background:#f4f6f9;">
          <div style="max-width:520px;margin:0 auto;background:#fff;border-radius:8px;overflow:hidden;">
            <div style="background:#0a2540;padding:20px 24px;">
              <p style="margin:0;font-size:16px;font-weight:700;color:#d4af37;letter-spacing:0.12em;">RVL FUNDING</p>
            </div>
            <div style="padding:24px;">
              <h2 style="color:#0a2540;margin:0 0 12px;font-size:20px;">${escapeHtml(RESOURCE.titleZh)}</h2>
              <p style="color:#5a6b82;line-height:1.7;margin:0 0 20px;font-size:14px;">
                ${escapeHtml(name)} 您好，感谢您的关注。以下为中英双语版《${escapeHtml(RESOURCE.titleZh)}》下载链接，有效期 7 天。<br><br>
                Thank you for your interest. Your bilingual copy is available below; the link is valid for 7 days.
              </p>
              <a href="${downloadUrl}"
                 style="display:inline-block;background:#d4af37;color:#0a2540;font-weight:700;
                        padding:12px 28px;border-radius:999px;text-decoration:none;font-size:14px;">
                下载 PDF · Download PDF
              </a>
              <p style="color:#8a97a8;line-height:1.6;margin:20px 0 0;font-size:12px;">
                本文件为一般性说明，不构成对任何特定事实情形的最终税务或法律意见。<br>
                This document is general in nature and does not constitute final tax or legal advice for any specific set of facts.
              </p>
            </div>
            <div style="padding:16px 24px;border-top:1px solid #e8ecf0;text-align:center;">
              <p style="margin:0;font-size:11px;color:#5a6b82;">
                © 2026 RVL Funding · <a href="${SITE_URL}" style="color:#d4af37;">www.rvlfunding.com</a>
              </p>
            </div>
          </div>
        </div>
      `,
    });

    if (!visitorRes.ok) {
      console.error('ca-formation visitor email failed:', await visitorRes.text());
      return NextResponse.json({ error: 'Failed to send download link' }, { status: 502 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('ca-formation error:', err);
    return NextResponse.json({ error: 'Unexpected error' }, { status: 500 });
  }
}
