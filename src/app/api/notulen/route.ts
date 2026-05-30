import { NextResponse } from 'next/server';
import { notulen } from '../../../lib/ai';

export const runtime = 'nodejs';
export const maxDuration = 30;

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as { judul?: string; agenda?: string; poin?: string };
    const reply = await notulen({
      judul: body.judul || '',
      agenda: body.agenda || '',
      poin: body.poin || '',
    });
    return NextResponse.json({ reply });
  } catch (e) {
    console.error('notulen route error:', e);
    return NextResponse.json({ error: 'Gagal membuat notulen.' }, { status: 500 });
  }
}
