'use client';

import type { AnalisisAspirasi, ChatMessage } from './ai';

async function postJSON<T>(url: string, body: unknown): Promise<T> {
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
  if (!res.ok) {
    const msg = await res.text().catch(() => res.statusText);
    throw new Error(msg || `Permintaan gagal (${res.status})`);
  }
  return res.json() as Promise<T>;
}

export async function getAIStatus(): Promise<{ aiEnabled: boolean; model: string }> {
  try {
    const res = await fetch('/api/status');
    if (!res.ok) throw new Error();
    return res.json();
  } catch {
    return { aiEnabled: false, model: 'fallback' };
  }
}

export async function chatAI(messages: ChatMessage[], mode = 'umum'): Promise<string> {
  const data = await postJSON<{ reply: string }>('/api/chat', { messages, mode });
  return data.reply;
}

export async function analyzeAspirasi(text: string): Promise<AnalisisAspirasi> {
  return postJSON<AnalisisAspirasi>('/api/analyze-aspirasi', { text });
}

export async function generateNotulen(input: {
  judul: string;
  agenda: string;
  poin: string;
}): Promise<string> {
  const data = await postJSON<{ reply: string }>('/api/notulen', input);
  return data.reply;
}
