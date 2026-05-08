/**
 * RVL Funding — Weekly Insights Automation
 * Runs every Monday via GitHub Actions
 * 1. Fetches USCIS + Financial RSS feeds
 * 2. Uses Claude to filter China/Chinese-American relevant items
 * 3. Updates public/insights-data.json
 * 4. Sends weekly digest email to all Resend subscribers
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DATA_FILE = path.join(__dirname, '..', 'public', 'insights-data.json');

const ANTHROPIC_API_KEY = process.env.ANTHROPIC_API_KEY;
const RESEND_API_KEY = process.env.RESEND_API_KEY;
const RESEND_AUDIENCE_ID = process.env.RESEND_AUDIENCE_ID;
const FROM_EMAIL = 'onboarding@resend.dev';

// ── RSS FEEDS ──────────────────────────────────────────────────────────────
const RSS_FEEDS = {
  immigration: [
    'https://www.uscis.gov/feeds/uscis_news.rss',
    'https://travel.state.gov/content/travel/en/travelinformation/ExpressEntry.rss',
  ],
  financial: [
    'https://feeds.reuters.com/reuters/CNtopNews',
    'https://feeds.marketwatch.com/marketwatch/topstories/',
    'https://www.caixinglobal.com/rss/rss.xml',
  ],
};

// ── FETCH RSS ──────────────────────────────────────────────────────────────
async function fetchRSS(url) {
  try {
    const res = await fetch(url, { signal: AbortSignal.timeout(10000) });
    if (!res.ok) return [];
    const xml = await res.text();

    const items = [];
    const itemRegex = /<item>([\s\S]*?)<\/item>/g;
    let match;

    while ((match = itemRegex.exec(xml)) !== null) {
      const block = match[1];
      const title = (block.match(/<title><!\[CDATA\[(.*?)\]\]><\/title>/) ||
                     block.match(/<title>(.*?)<\/title>/))?.[1]?.trim() || '';
      const description = (block.match(/<description><!\[CDATA\[(.*?)\]\]><\/description>/) ||
                           block.match(/<description>(.*?)<\/description>/))?.[1]
        ?.replace(/<[^>]+>/g, '')?.trim() || '';
      const link = block.match(/<link>(.*?)<\/link>/)?.[1]?.trim() || url;
      const pubDate = block.match(/<pubDate>(.*?)<\/pubDate>/)?.[1]?.trim() || '';

      if (title) items.push({ title, description, link, pubDate, source: new URL(url).hostname });
    }
    return items;
  } catch (e) {
    console.warn(`Failed to fetch ${url}:`, e.message);
    return [];
  }
}

// ── CLAUDE: FILTER + SUMMARIZE ─────────────────────────────────────────────
async function filterAndSummarize(items, type) {
  if (items.length === 0) return [];

  const prompt = `You are an editorial assistant for RVL Funding, a financial advisory firm serving high-net-worth Chinese nationals and Chinese-American families in the U.S.

Review these ${type === 'immigration' ? 'USCIS/immigration' : 'financial/wealth'} news items and:
1. SELECT only items relevant to Chinese nationals, Chinese-Americans, cross-border wealth, U.S.-China financial matters, or immigration categories commonly used by Chinese professionals (EB-1, L-1, O-1, EB-5, etc.)
2. For each selected item, write a 2–3 sentence English summary that highlights the practical implication for our clients
3. Return a maximum of 4 items per week

Return ONLY valid JSON array, no other text:
[
  {
    "id": "unique-id-based-on-title",
    "title": "clear professional title",
    "excerpt": "2-3 sentence practical summary",
    "source": "source domain name",
    "sourceUrl": "original article URL",
    "category": "${type === 'immigration' ? 'Immigration' : 'Tax & Wealth'}"
  }
]

If NO items are relevant, return: []

News items to review:
${items.slice(0, 20).map((item, i) => `${i + 1}. TITLE: ${item.title}\nSUMMARY: ${item.description?.slice(0, 200)}\nURL: ${item.link}`).join('\n\n')}`;

  try {
    const res = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'x-api-key': ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01',
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 2000,
        messages: [{ role: 'user', content: prompt }],
      }),
    });

    const data = await res.json();
    const text = data.content?.[0]?.text || '[]';
    const clean = text.replace(/```json|```/g, '').trim();
    const parsed = JSON.parse(clean);
    return Array.isArray(parsed) ? parsed : [];
  } catch (e) {
    console.error('Claude API error:', e.message);
    return [];
  }
}

// ── FORMAT DATE ────────────────────────────────────────────────────────────
function formatDate() {
  return new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
}

function formatDateShort() {
  return new Date().toISOString().split('T')[0];
}

// ── SEND EMAIL ─────────────────────────────────────────────────────────────
async function getSubscribers() {
  try {
    const filePath = path.join(__dirname, '..', 'public', 'subscribers.json');
    const raw = fs.readFileSync(filePath, 'utf-8');
    const data = JSON.parse(raw);
    return data.subscribers || [];
  } catch (e) {
    console.error('Failed to read subscribers.json:', e.message);
    return [];
  }
}

function buildEmailHTML(immigrationItems, financialItems, date) {
  const articleHTML = (items) =>
    items.map((a) => `
      <div style="margin-bottom:20px;padding:16px;background:#f4f6f9;border-radius:8px;border-left:3px solid #d4af37;">
        <p style="margin:0 0 4px;font-size:10px;font-weight:700;color:#d4af37;letter-spacing:0.12em;text-transform:uppercase;">${a.category} · ${a.source}</p>
        <h3 style="margin:0 0 8px;font-size:15px;color:#0a2540;line-height:1.4;">${a.title}</h3>
        <p style="margin:0 0 10px;font-size:13px;color:#5a6b82;line-height:1.6;">${a.excerpt}</p>
        <a href="${a.sourceUrl}" style="font-size:12px;color:#d4af37;font-weight:700;text-decoration:none;">Read more →</a>
      </div>
    `).join('');

  return `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;background:#f4f6f9;">
  <div style="max-width:600px;margin:0 auto;background:#ffffff;">

    <!-- HEADER -->
    <div style="background:#0a2540;padding:28px 32px;display:flex;justify-content:space-between;align-items:center;">
      <div>
        <p style="margin:0;font-size:18px;font-weight:700;color:#d4af37;letter-spacing:0.12em;">RVL FUNDING</p>
        <p style="margin:4px 0 0;font-size:11px;color:rgba(255,255,255,0.5);letter-spacing:0.08em;">WEEKLY INTELLIGENCE BRIEFING</p>
      </div>
      <p style="margin:0;font-size:11px;color:rgba(255,255,255,0.4);">${date}</p>
    </div>

    <!-- INTRO -->
    <div style="padding:24px 32px;border-bottom:1px solid #e8ecf0;">
      <p style="margin:0;font-size:14px;color:#5a6b82;line-height:1.7;">
        Your weekly briefing — USCIS policy updates and cross-border financial intelligence,
        curated for Chinese nationals and Chinese-American families.
      </p>
    </div>

    <!-- IMMIGRATION -->
    ${immigrationItems.length > 0 ? `
    <div style="padding:24px 32px;">
      <div style="display:flex;align-items:center;gap:12px;margin-bottom:16px;">
        <p style="margin:0;font-size:10px;font-weight:700;color:#0a2540;letter-spacing:0.16em;text-transform:uppercase;background:#f4f6f9;padding:5px 12px;border-radius:999px;">USCIS · Immigration Policy</p>
      </div>
      ${articleHTML(immigrationItems)}
    </div>` : ''}

    <!-- FINANCIAL -->
    ${financialItems.length > 0 ? `
    <div style="padding:0 32px 24px;">
      <div style="display:flex;align-items:center;gap:12px;margin-bottom:16px;">
        <p style="margin:0;font-size:10px;font-weight:700;color:#0a2540;letter-spacing:0.16em;text-transform:uppercase;background:#f4f6f9;padding:5px 12px;border-radius:999px;">Financial & Wealth Intelligence</p>
      </div>
      ${articleHTML(financialItems)}
    </div>` : ''}

    <!-- CTA -->
    <div style="background:#0a2540;padding:24px 32px;text-align:center;">
      <p style="margin:0 0 12px;font-size:13px;color:rgba(255,255,255,0.7);">Questions about your immigration or wealth strategy?</p>
      <a href="https://www.rvlfunding.com/book" style="display:inline-block;background:#d4af37;color:#0a2540;font-weight:700;font-size:13px;padding:10px 24px;border-radius:999px;text-decoration:none;">Book a Free 15-Min Call</a>
    </div>

    <!-- FOOTER -->
    <div style="padding:16px 32px;text-align:center;border-top:1px solid #e8ecf0;">
      <p style="margin:0;font-size:11px;color:#5a6b82;">
        © 2026 RVL Funding · <a href="https://www.rvlfunding.com" style="color:#d4af37;">www.rvlfunding.com</a> ·
        <a href="mailto:info@rvlfunding.com" style="color:#d4af37;">info@rvlfunding.com</a>
      </p>
      <p style="margin:6px 0 0;font-size:10px;color:#5a6b82;">
        You're receiving this because you subscribed at rvlfunding.com.
        This is not investment or legal advice.
      </p>
    </div>
  </div>
</body>
</html>`;
}

async function sendDigest(subscribers, immigrationItems, financialItems) {
  if (subscribers.length === 0) {
    console.log('No subscribers — skipping email send');
    return;
  }

  const date = formatDate();
  const html = buildEmailHTML(immigrationItems, financialItems, date);
  const subject = `RVL Insights — ${date} Weekly Briefing`;

  let sent = 0;
  for (const email of subscribers) {
    try {
      const res = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${RESEND_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: 'RVL Funding Insights <onboarding@resend.dev>',
          to: email,
          subject,
          html,
        }),
      });
      if (res.ok) sent++;
      // Avoid rate limiting
      await new Promise((r) => setTimeout(r, 100));
    } catch (e) {
      console.warn(`Failed to send to ${email}:`, e.message);
    }
  }
  console.log(`✅ Sent to ${sent}/${subscribers.length} subscribers`);
}

// ── MAIN ───────────────────────────────────────────────────────────────────
async function main() {
  console.log('🚀 Starting weekly insights fetch...');

  // 1. Fetch all RSS
  const [immigrationRaw, financialRaw] = await Promise.all([
    Promise.all(RSS_FEEDS.immigration.map(fetchRSS)).then((r) => r.flat()),
    Promise.all(RSS_FEEDS.financial.map(fetchRSS)).then((r) => r.flat()),
  ]);

  console.log(`📰 Fetched ${immigrationRaw.length} immigration + ${financialRaw.length} financial items`);

  // 2. Filter with Claude
  const [immigrationItems, financialItems] = await Promise.all([
    filterAndSummarize(immigrationRaw, 'immigration'),
    filterAndSummarize(financialRaw, 'financial'),
  ]);

  console.log(`✅ Filtered: ${immigrationItems.length} immigration + ${financialItems.length} financial`);

  // 3. Update JSON (prepend new items, keep last 20 per category)
  const existing = JSON.parse(fs.readFileSync(DATA_FILE, 'utf-8'));

  const date = formatDate();
  const addDate = (items) => items.map((a) => ({ ...a, date }));

  const newData = {
    lastUpdated: formatDateShort(),
    immigration: [...addDate(immigrationItems), ...existing.immigration].slice(0, 20),
    financial: [...addDate(financialItems), ...existing.financial].slice(0, 20),
  };

  fs.writeFileSync(DATA_FILE, JSON.stringify(newData, null, 2));
  console.log('💾 Updated insights-data.json');

  // 4. Send email digest
  if (immigrationItems.length > 0 || financialItems.length > 0) {
    const subscribers = await getSubscribers();
    console.log(`📬 Sending to ${subscribers.length} subscribers...`);
    await sendDigest(subscribers, immigrationItems, financialItems);
  } else {
    console.log('No new relevant items this week — skipping email');
  }

  console.log('✅ Done!');
}

main().catch((e) => {
  console.error('Fatal error:', e);
  process.exit(1);
});
