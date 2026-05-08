import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const formData = await req.formData();
  const email = formData.get('email') as string;

  if (!email || !email.includes('@')) {
    return NextResponse.redirect(new URL('/insights?status=error', req.url));
  }

  try {
    // Add contact to Resend audience
    const res = await fetch('https://api.resend.com/audiences/' + process.env.RESEND_AUDIENCE_ID + '/contacts', {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer ' + process.env.RESEND_API_KEY,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        unsubscribed: false,
      }),
    });

    if (!res.ok) throw new Error('Resend API error');

    return NextResponse.redirect(new URL('/insights?status=success', req.url));
  } catch (err) {
    console.error('Subscribe error:', err);
    return NextResponse.redirect(new URL('/insights?status=error', req.url));
  }
}

