import { NextResponse } from 'next/server';
import { analyze } from '../../../lib/ai';

export const runtime = 'nodejs';
export const maxDuration = 30;

export async function POST(req: Request) {
  try {
    const { text } = (await req.json()) as { text?: string };
    if (!text || typeof text !== 'string') {
      return NextResponse.json({ error: 'text wajib diisi' }, { status: 400 });
    }
    const result = await analyze(text);
    return NextResponse.json(result);
  } catch (e) {
    console.error('analyze route error:', e);
    return NextResponse.json({ error: 'Gagal menganalisis aspirasi.' }, { status: 500 });
  }
}
