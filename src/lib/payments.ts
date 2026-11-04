/**
 * 网站收款目录（预览）。
 *
 * 只收 RVL 自己的服务费。保费付给保险公司，律师费付给律所，
 * 投资款与员工薪酬不经过 RVL，这些都不进这个目录。
 *
 * 上线前需要：
 * - Ruby 本人开通 Stripe 账户，在 Vercel 设置 STRIPE_SECRET_KEY（只放服务器端）；
 * - 在 Stripe 后台开启所需付款方式（银行卡、Link、ACH、支付宝等），
 *   Checkout 会按客户所在地自动显示可用方式；
 * - 确认标「待确认」的价格与条款。
 */

export type OfferId = 'assessment' | 'diagnosis' | 'monthly';

export type Offer = {
  id: OfferId;
  /** 金额，单位：美分 */
  amount: number;
  mode: 'payment' | 'subscription';
  nameZh: string;
  nameEn: string;
  descZh: string;
  descEn: string;
  /** 价格是否已由 Ruby 确认 */
  confirmed: boolean;
};

export const OFFERS: Record<OfferId, Offer> = {
  assessment: {
    id: 'assessment',
    amount: 30000,
    mode: 'payment',
    nameZh: '路径评估',
    nameEn: 'Route assessment',
    descZh: '一次视频会议与一份书面评估。30 日内签约落地诊断或月度陪跑，可全额抵扣。',
    descEn: 'One video meeting and a written assessment. Fully credited if you engage us within 30 days.',
    confirmed: true,
  },
  diagnosis: {
    id: 'diagnosis',
    amount: 150000,
    mode: 'payment',
    nameZh: '美国落地诊断',
    nameEn: 'US landing diagnosis',
    descZh: '两次会议，交付时间表、优先事项、责任方、保障缺口与 30 日行动清单。30 日内签约月度陪跑可全额抵扣。',
    descEn: 'Two meetings; a timeline, priorities, owners, coverage gaps and a 30-day action list. Credited against monthly support within 30 days.',
    confirmed: false,
  },
  monthly: {
    id: 'monthly',
    amount: 250000,
    mode: 'subscription',
    nameZh: '月度陪跑',
    nameEn: 'Monthly operating support',
    descZh: '合规日历、经营记录、申报与材料提前通知。每月工时上限与超出计费方式以服务协议为准。',
    descEn: 'Compliance calendar, records and advance notice of filings. Monthly hour cap and overage terms are set in the engagement letter.',
    confirmed: true,
  },
};

export const OFFER_ORDER: OfferId[] = ['assessment', 'diagnosis', 'monthly'];

export const isOfferId = (v: unknown): v is OfferId => typeof v === 'string' && v in OFFERS;

export const formatUsd = (cents: number) => `$${(cents / 100).toLocaleString('en-US')}`;

/** 是否已配置 Stripe 密钥（只在服务器端读取）。 */
export const paymentsConfigured = () => Boolean(process.env.STRIPE_SECRET_KEY);
