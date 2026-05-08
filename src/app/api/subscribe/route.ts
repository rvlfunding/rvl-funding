import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email } = body;

    if (!email || !email.includes('@')) {
      return NextResponse.json({ error: 'Invalid email' }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ error: 'Missing API key' }, { status: 500 });
    }

    // Send notification to RVL admin
    const adminRes = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'RVL Website <onboarding@resend.dev>',
        to: 'info@rvlfunding.com',
        subject: `New Subscriber: ${email}`,
        html: `
          <div style="font-family:sans-serif;padding:24px;background:#f4f6f9;">
            <div style="max-width:480px;margin:0 auto;background:#fff;border-radius:8px;padding:24px;">
              <p style="font-size:12px;font-weight:700;color:#d4af37;letter-spacing:0.1em;text-transform:uppercase;">New Subscriber</p>
              <h2 style="color:#0a2540;margin:8px 0;">Someone just subscribed</h2>
              <p style="color:#5a6b82;font-size:15px;">Email: <strong>${email}</strong></p>
              <p style="color:#5a6b82;font-size:13px;">Add this email to <code>public/subscribers.json</code> to include them in the weekly digest.</p>
            </div>
          </div>
        `,
      }),
    });

    if (!adminRes.ok) {
      const err = await adminRes.json();
      console.error('Admin email error:', err);
      return NextResponse.json({ error: 'Failed to send notification' }, { status: 500 });
    }

    // Send confirmation to subscriber
    await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'RVL Funding Insights <onboarding@resend.dev>',
        to: email,
        subject: 'You\'re subscribed to RVL Insights',
        html: `
          <div style="font-family:sans-serif;padding:24px;background:#f4f6f9;">
            <div style="max-width:480px;margin:0 auto;background:#fff;border-radius:8px;overflow:hidden;">
              <div style="background:#0a2540;padding:20px 24px;">
                <p style="margin:0;font-size:16px;font-weight:700;color:#d4af37;letter-spacing:0.12em;">RVL FUNDING</p>
              </div>
              <div style="padding:24px;">
                <h2 style="color:#0a2540;margin:0 0 12px;">You're subscribed ✓</h2>
                <p style="color:#5a6b82;line-height:1.7;margin:0 0 16px;">
                  Thank you for subscribing. Every Monday, you'll receive curated USCIS policy updates
                  and cross-border financial intelligence relevant to Chinese nationals and
                  Chinese-American families.
                </p>
                <a href="https://www.rvlfunding.com/book"
                   style="display:inline-block;background:#d4af37;color:#0a2540;font-weight:700;
                          padding:10px 24px;border-radius:999px;text-decoration:none;font-size:14px;">
                  Book a Free Consultation
                </a>
              </div>
              <div style="padding:16px 24px;border-top:1px solid #e8ecf0;text-align:center;">
                <p style="margin:0;font-size:11px;color:#5a6b82;">
                  © 2026 RVL Funding · <a href="https://www.rvlfunding.com" style="color:#d4af37;">www.rvlfunding.com</a>
                </p>
              </div>
            </div>
          </div>
        `,
      }),
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Subscribe error:', err);
    return NextResponse.json({ error: String(err) }, { status: 500 });
  }
}
