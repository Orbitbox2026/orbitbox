import { NextResponse } from 'next/server';
import { chat, type ChatMessage } from '../../../lib/ai';

export const runtime = 'nodejs';
export const maxDuration = 30;

export async function POST(req: Request) {
  try {
    const { messages, mode } = (await req.json()) as { messages?: ChatMessage[]; mode?: string };
    if (!Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json({ error: 'messages wajib diisi' }, { status: 400 });
    }
    const reply = await chat(messages, mode || 'umum');
    return NextResponse.json({ reply });
  } catch (e) {
    console.error('chat route error:', e);
    return NextResponse.json({ error: 'Gagal memproses permintaan AI.' }, { status: 500 });
  }
}
