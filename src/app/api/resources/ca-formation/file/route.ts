import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';
import { verifyDownloadToken } from '@/lib/download-token';
import { GATED_RESOURCES } from '@/lib/gated-resources';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const RESOURCE = GATED_RESOURCES['ca-formation'];

export async function GET(req: NextRequest) {
  const token = req.nextUrl.searchParams.get('t');
  if (!token) {
    return NextResponse.json({ error: 'Missing download token' }, { status: 400 });
  }

  let result;
  try {
    result = verifyDownloadToken(token, RESOURCE.slug);
  } catch (err) {
    console.error('ca-formation/file: token verification failed', err);
    return NextResponse.json({ error: 'Download service unavailable' }, { status: 500 });
  }

  if (!result.ok) {
    const status = result.reason === 'expired' ? 410 : 403;
    const message =
      result.reason === 'expired'
        ? '此下载链接已过期，请重新提交表单。 / This download link has expired; please request a new one.'
        : '下载链接无效。 / Invalid download link.';
    return NextResponse.json({ error: message }, { status });
  }

  try {
    const filePath = path.join(process.cwd(), 'private', RESOURCE.file);
    const file = await fs.readFile(filePath);

    return new NextResponse(new Uint8Array(file), {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Length': String(file.length),
        'Content-Disposition': `attachment; filename="${RESOURCE.downloadAs}"`,
        'Cache-Control': 'private, no-store',
        'X-Robots-Tag': 'noindex, nofollow',
      },
    });
  } catch (err) {
    console.error('ca-formation/file: unable to read PDF', err);
    return NextResponse.json({ error: 'File unavailable' }, { status: 500 });
  }
}
