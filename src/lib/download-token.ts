import crypto from 'crypto';

/**
 * Short-lived, tamper-proof download tokens for gated resources.
 *
 * A token is `<payloadB64Url>.<signatureB64Url>` where the payload records the
 * resource slug, the email the link was issued to, and an expiry timestamp.
 * Without the server secret a visitor cannot forge or extend a link, so the
 * PDF stays behind the lead-capture form even though the URL is shareable.
 */

const ENCODING = 'base64url';

function secret(): string {
  const value = process.env.DOWNLOAD_SIGNING_SECRET;
  if (!value) {
    throw new Error('DOWNLOAD_SIGNING_SECRET is not configured');
  }
  return value;
}

function sign(payload: string): string {
  return crypto.createHmac('sha256', secret()).update(payload).digest(ENCODING);
}

export type DownloadClaims = {
  /** Resource slug, e.g. `ca-formation`. */
  slug: string;
  /** Email address the link was issued to. */
  email: string;
  /** Expiry, in seconds since the epoch. */
  exp: number;
};

/** Default link lifetime: 7 days. */
export const DEFAULT_TTL_SECONDS = 60 * 60 * 24 * 7;

export function createDownloadToken(
  slug: string,
  email: string,
  ttlSeconds: number = DEFAULT_TTL_SECONDS,
): string {
  const claims: DownloadClaims = {
    slug,
    email,
    exp: Math.floor(Date.now() / 1000) + ttlSeconds,
  };
  const payload = Buffer.from(JSON.stringify(claims)).toString(ENCODING);
  return `${payload}.${sign(payload)}`;
}

export type VerifyResult =
  | { ok: true; claims: DownloadClaims }
  | { ok: false; reason: 'malformed' | 'bad-signature' | 'expired' | 'wrong-resource' };

export function verifyDownloadToken(token: string, expectedSlug: string): VerifyResult {
  const parts = token.split('.');
  if (parts.length !== 2) return { ok: false, reason: 'malformed' };

  const [payload, signature] = parts;

  const expected = Buffer.from(sign(payload), ENCODING);
  const received = Buffer.from(signature, ENCODING);
  if (expected.length !== received.length || !crypto.timingSafeEqual(expected, received)) {
    return { ok: false, reason: 'bad-signature' };
  }

  let claims: DownloadClaims;
  try {
    claims = JSON.parse(Buffer.from(payload, ENCODING).toString('utf8')) as DownloadClaims;
  } catch {
    return { ok: false, reason: 'malformed' };
  }

  if (claims.slug !== expectedSlug) return { ok: false, reason: 'wrong-resource' };
  if (typeof claims.exp !== 'number' || claims.exp < Math.floor(Date.now() / 1000)) {
    return { ok: false, reason: 'expired' };
  }

  return { ok: true, claims };
}
