import type { Card, QA } from './kit';

/** Shared English copy. Mirrors the Chinese site's positioning: a U.S.-based team doing the local work. */

export const LOCAL_EDGE: Card[] = [
  {
    title: 'In the room at U.S. banks and agencies',
    text: 'Bank interviews, state registrations and agency calls happen on U.S. business hours. We attend in person or on the line, in Mandarin and English, instead of relaying messages across time zones.',
  },
  {
    title: 'A compliance calendar someone actually runs',
    text: 'Annual reports, franchise tax, Form 5472, sales tax and payroll filings each have their own deadline and agency. We keep one calendar for your company and give you notice before every filing.',
  },
  {
    title: 'Payroll, insurance and hiring set up locally',
    text: 'Workers’ compensation, state unemployment accounts, payroll or a PEO, offer letters and handbooks are set up for the state you actually operate in, not copied from a template.',
  },
  {
    title: 'Licensed professionals, coordinated',
    text: 'Immigration attorneys, business attorneys, CPAs and insurers each work under their own licence. We brief them, keep the timeline and make sure the pieces match.',
  },
];

export const SERVICES: Card[] = [
  {
    title: 'U.S. company formation and setup',
    text: 'Choosing the state and entity, formation filings, registered agent, EIN for foreign owners, business licences and the first-year compliance calendar.',
    href: '/services#formation',
    more: 'Company formation',
  },
  {
    title: 'Business banking',
    text: 'Preparing ownership, source-of-funds and business-substance files, matching you with banks that accept foreign-owned companies, and attending the meeting.',
    href: '/services#banking',
    more: 'Business banking',
  },
  {
    title: 'Tax filings and compliance',
    text: 'Coordinating federal and state filings with your CPA: Form 5472 for foreign-owned companies, franchise and sales tax, payroll tax and annual reports.',
    href: '/services#tax',
    more: 'Tax and compliance',
  },
  {
    title: 'HR, payroll and PEO',
    text: 'First U.S. hires, payroll and benefits, workers’ compensation, background checks, employee handbooks and onboarding paperwork, with or without a PEO.',
    href: '/services#hr',
    more: 'HR and payroll',
  },
  {
    title: 'U.S. status planning',
    text: 'Comparing L-1A, EB-1C, EB-1A, NIW, O-1 and EB-5 routes against how your business is actually structured, then building the timeline with an immigration attorney.',
    href: '/services#immigration',
    more: 'Immigration routes',
  },
  {
    title: 'Cross-border tax and family planning',
    text: 'Reviewing assets before U.S. tax residency begins, and coordinating trusts, life insurance and estate documents with licensed providers.',
    href: '/services#planning',
    more: 'Cross-border planning',
  },
];

export const PROCESS = [
  { title: 'Introductory call', when: 'Under NDA', text: 'We confirm what you need, who is involved and whether we are the right fit.' },
  { title: 'Diagnosis', when: 'Written plan', text: 'A timeline, priorities, owners for each item and a 30-day action list.' },
  { title: 'Coordinated execution', when: 'Monthly', text: 'Monthly meetings, the compliance calendar, payroll, insurance and CPA follow-up, and a one-page progress report.' },
  { title: 'Annual service', when: 'Quarterly review', text: 'After a 90-day trial period the engagement moves to an annual service with quarterly reviews.' },
];

export const PLANS = [
  {
    type: 'Per session',
    title: 'Route assessment',
    price: 'From $300',
    points: ['One meeting', 'A written assessment report'],
  },
  {
    type: 'Monthly',
    title: 'Monthly operating support',
    price: 'From $2,500 / month',
    points: ['Compliance calendar', 'Operating records', 'Advance notice of filings and documents'],
  },
  {
    type: 'Project',
    title: 'Full project management',
    price: '$300,000',
    points: ['Everything in monthly support', 'Business plan', 'Visa application and extension evidence gathering'],
  },
];

export const FEES_NOTE =
  'Employee wages, third-party audit, notary and government fees are passed through at cost. Attorney fees are paid by you directly to the law firm. All fees are confirmed in writing before you sign.';

export const NETWORK = [
  { role: 'Immigration attorneys', scope: 'Status strategy, petitions and filings' },
  { role: 'Business attorneys', scope: 'Entity documents, contracts and employment compliance' },
  { role: 'CPAs', scope: 'Tax returns and tax-residency planning' },
  { role: 'Registered investment advisers', scope: 'Securities and investment advice' },
  { role: 'PEO providers', scope: 'Payroll, benefits and employer-of-record duties' },
  { role: 'Insurance carriers', scope: 'Underwriting, policy issue and claims' },
];

export const PRINCIPLES: Card[] = [
  { title: 'We never hold client money', text: 'Funds move only between your own, your company’s or your trust’s accounts.' },
  { title: 'Confidential from the first meeting', text: 'We sign an NDA before the first substantive conversation.' },
  { title: 'Access you can take back', text: 'We get viewing or filing access item by item, and you can withdraw it at any time.' },
  { title: 'Anonymous examples only', text: 'Any example we share publicly is stripped of identifying details.' },
];

export const HOME_FAQ: QA[] = [
  {
    q: 'Can a Chinese citizen form a U.S. company without living in the United States?',
    a: 'Yes. A non-resident can own a U.S. LLC or corporation. You will need a registered agent in the state of formation, an EIN from the IRS, and in most cases a U.S. bank willing to open an account for a foreign-owned company, which is usually the harder step.',
  },
  {
    q: 'Which state should a foreign-owned company form in?',
    a: 'Usually the state where you will actually have an office, staff or inventory, because that state will require registration and taxes anyway. Delaware or Wyoming can make sense for holding structures or outside investors, but they rarely remove the need to register where you operate.',
  },
  {
    q: 'What does a foreign-owned U.S. company have to file every year?',
    a: 'At minimum a federal return or Form 5472 with a pro forma return for a single-member LLC, the state annual report, and any franchise, sales or payroll tax that applies. Penalties for a missed Form 5472 start at $25,000, so the calendar matters.',
  },
  {
    q: 'Can a U.S. company help me qualify for an L-1A or EB-1C?',
    a: 'Both routes require a qualifying relationship between your company abroad and the U.S. company, and for EB-1C the U.S. company must generally have been doing business for at least one year. Whether you qualify is decided by an immigration attorney; we help set up and run the U.S. company so the facts support the filing.',
  },
  {
    q: 'Do you give legal or tax advice?',
    a: 'No. Legal opinions come from licensed attorneys and tax returns from CPAs, each engaged by you. We coordinate them, prepare the operating records they need and keep the timeline.',
  },
];
