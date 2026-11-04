import { NextResponse } from 'next/server';
import { OFFERS, isOfferId } from '@/lib/payments';

/**
 * 创建 Stripe Checkout 付款页并跳转。
 * 直接调用 Stripe REST API，不引入新依赖。
 * 没有配置 STRIPE_SECRET_KEY 时跳回收款页并提示「尚未开通」。
 */
export async function POST(req: Request) {
  const form = await req.formData();
  const offerId = form.get('offer');
  const lang = form.get('lang') === 'en' ? 'en' : 'zh';
  const origin = new URL(req.url).origin;
  const back = lang === 'en' ? '/pay' : '/zh/pay';

  if (!isOfferId(offerId)) {
    return NextResponse.redirect(`${origin}${back}?status=invalid`, 303);
  }
  const key = process.env.STRIPE_SECRET_KEY;
  if (!key) {
    return NextResponse.redirect(`${origin}${back}?status=unconfigured#${offerId}`, 303);
  }

  const offer = OFFERS[offerId];
  const p = new URLSearchParams();
  p.set('mode', offer.mode);
  p.set('locale', lang === 'en' ? 'en' : 'zh');
  p.set('line_items[0][quantity]', '1');
  p.set('line_items[0][price_data][currency]', 'usd');
  p.set('line_items[0][price_data][unit_amount]', String(offer.amount));
  p.set('line_items[0][price_data][product_data][name]', lang === 'en' ? offer.nameEn : offer.nameZh);
  p.set('line_items[0][price_data][product_data][description]', lang === 'en' ? offer.descEn : offer.descZh);
  if (offer.mode === 'subscription') {
    p.set('line_items[0][price_data][recurring][interval]', 'month');
  } else {
    p.set('customer_creation', 'always');
    p.set('invoice_creation[enabled]', 'true');
  }
  p.set('billing_address_collection', 'auto');
  p.set('phone_number_collection[enabled]', 'true');
  p.set('metadata[offer]', offer.id);
  p.set(
    'custom_text[submit][message]',
    lang === 'en'
      ? 'This payment covers RVL service fees only. Insurance premiums, attorney fees and investment funds are never paid to RVL.'
      : '本次付款仅为 RVL 服务费。保费、律师费与投资款不经过 RVL。',
  );
  p.set('success_url', `${origin}${back}/success?session_id={CHECKOUT_SESSION_ID}`);
  p.set('cancel_url', `${origin}${back}?status=cancelled#${offer.id}`);

  const res = await fetch('https://api.stripe.com/v1/checkout/sessions', {
    method: 'POST',
    headers: { Authorization: `Bearer ${key}`, 'Content-Type': 'application/x-www-form-urlencoded' },
    body: p.toString(),
    cache: 'no-store',
  });
  const data = (await res.json()) as { url?: string; error?: { message?: string } };
  if (!res.ok || !data.url) {
    console.error('stripe checkout error', res.status, data.error?.message);
    return NextResponse.redirect(`${origin}${back}?status=error#${offer.id}`, 303);
  }
  return NextResponse.redirect(data.url, 303);
}
