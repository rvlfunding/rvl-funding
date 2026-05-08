import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email } = body;

    if (!email || !email.includes('@')) {
      return NextResponse.json({ error: 'Invalid email' }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    const audienceId = process.env.RESEND_AUDIENCE_ID;

    // Debug: log what env vars are received
    console.log('AUDIENCE_ID received:', audienceId ? audienceId.slice(0,8) + '...' : 'MISSING');
    console.log('API_KEY received:', apiKey ? 'present' : 'MISSING');

    // Check env vars exist
    if (!apiKey) {
      console.error('Missing RESEND_API_KEY');
      return NextResponse.json({ error: 'Server config error: missing API key' }, { status: 500 });
    }
    if (!audienceId) {
      console.error('Missing RESEND_AUDIENCE_ID');
      return NextResponse.json({ error: 'Server config error: missing audience ID' }, { status: 500 });
    }

    const res = await fetch(
      `https://api.resend.com/audiences/${audienceId}/contacts`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, unsubscribed: false }),
      }
    );

    const data = await res.json();

    if (!res.ok) {
      console.error('Resend API error:', JSON.stringify(data));
      return NextResponse.json({ error: 'Resend error', detail: data }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Subscribe error:', err);
    return NextResponse.json({ error: String(err) }, { status: 500 });
  }
}
