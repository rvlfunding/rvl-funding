import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'nodejs';

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

const STAGE_LABEL: Record<string, string> = {
  thinking: '刚开始考虑，还没设点',
  landed: '已设点 / 已拿 L-1',
  quoted: '拿过移民报价，两年内没动',
  renewal: '面临延期 / EB-1C / 续保',
};

export async function POST(req: NextRequest) {
  try {
    const ip =
      req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || req.headers.get('x-real-ip') || 'unknown';

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
    const wechat = clean(body.wechat, 80);
    const company = clean(body.company, 160);
    const stage = clean(body.stage, 40);
    const applicants = clean(body.applicants, 20);
    const note = clean(body.note, 1500);

    if (!name) return NextResponse.json({ error: '请填写姓名' }, { status: 400 });
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
      return NextResponse.json({ error: '邮箱格式不正确' }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error('assessment: RESEND_API_KEY missing');
      return NextResponse.json({ error: 'Email service unavailable' }, { status: 500 });
    }

    const row = (label: string, value: string) =>
      value
        ? `<tr><td style="padding:6px 16px 6px 0;color:#5a6b82;font-size:13px;white-space:nowrap;vertical-align:top;">${label}</td>
             <td style="padding:6px 0;color:#0a2540;font-size:14px;font-weight:600;">${escapeHtml(value)}</td></tr>`
        : '';

    const send = (payload: Record<string, unknown>) =>
      fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

    // 1. Notify RVL (reply-to the visitor).
    const adminRes = await send({
      from: 'RVL Funding <info@rvlfunding.com>',
      to: 'info@rvlfunding.com',
      reply_to: email,
      subject: `路径评估预约 — ${name}${company ? ` · ${company}` : ''}`,
      html: `
        <div style="font-family:sans-serif;padding:24px;background:#f4f6f9;">
          <div style="max-width:560px;margin:0 auto;background:#fff;border-radius:8px;padding:24px;">
            <p style="font-size:12px;font-weight:700;color:#d4af37;letter-spacing:0.1em;text-transform:uppercase;margin:0;">路径评估 · 新预约</p>
            <h2 style="color:#0a2540;margin:8px 0 16px;">${escapeHtml(name)}</h2>
            <table style="border-collapse:collapse;">
              ${row('邮箱', email)}
              ${row('微信', wechat)}
              ${row('公司', company)}
              ${row('阶段', STAGE_LABEL[stage] ?? stage)}
              ${row('申请人数', applicants)}
              ${row('补充', note)}
              ${row('IP', ip)}
            </table>
            <p style="color:#5a6b82;font-size:12px;margin-top:16px;">下一步：24 小时内回复排期与付款方式；评估费先付后排期。</p>
          </div>
        </div>
      `,
    });

    if (!adminRes.ok) {
      console.error('assessment admin email failed:', await adminRes.text());
      return NextResponse.json({ error: 'Failed to send notification' }, { status: 502 });
    }

    // 2. Acknowledge the visitor.
    await send({
      from: 'RVL Funding <info@rvlfunding.com>',
      to: email,
      subject: '已收到您的路径评估预约 · RVL Funding',
      html: `
        <div style="font-family:sans-serif;padding:24px;background:#f4f6f9;">
          <div style="max-width:560px;margin:0 auto;background:#fff;border-radius:8px;overflow:hidden;">
            <div style="background:#0a2540;padding:20px 24px;">
              <p style="margin:0;font-size:16px;font-weight:700;color:#d4af37;letter-spacing:0.12em;">RVL FUNDING</p>
            </div>
            <div style="padding:24px;color:#0a2540;line-height:1.75;font-size:15px;">
              <p>${escapeHtml(name)} 您好，</p>
              <p>已收到您的路径评估预约。我们会在 1 个工作日内回复可排的时间与付款方式；付款后排期，面谈后 5 个工作日内交付书面报告。</p>
              <p>面谈前请准备：国内公司近两年的大致营收与人数、您在美国的现状（是否已设点、已持有何种身份）、家庭成员情况、预算范围。不需要发送任何证件。</p>
              <p style="color:#5a6b82;font-size:13px;">RVL Funding 不是律师事务所，评估报告不构成法律意见；法律判断以持牌律师为准。</p>
              <p>RVL Funding · ${escapeHtml('info@rvlfunding.com')}</p>
            </div>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('assessment error:', err);
    return NextResponse.json({ error: 'Internal error' }, { status: 500 });
  }
}
