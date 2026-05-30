'use client';

import { useEffect, useRef, useState } from 'react';
import { Markdown } from '../../components/Markdown';
import { AIStatus } from '../../components/AIStatus';
import { chatAI } from '../../lib/client';
import type { ChatMessage } from '../../lib/ai';
import {
  IconBot,
  IconSend,
  IconSparkles,
  IconDoc,
  IconScale,
  IconHeart,
} from '../../components/icons';

const MODES = [
  { id: 'umum', label: 'Umum', icon: <IconSparkles size={18} /> },
  { id: 'draf', label: 'Susun Draf', icon: <IconDoc size={18} /> },
  { id: 'regulasi', label: 'Regulasi', icon: <IconScale size={18} /> },
  { id: 'aspirasi', label: 'Telaah Aspirasi', icon: <IconHeart size={18} /> },
];

const SUGGESTIONS = [
  'Buatkan draf undangan rapat paripurna pembahasan APBD Perubahan 2026.',
  'Ringkas tugas dan fungsi DPRD dalam pengawasan APBD.',
  'Susun poin-poin pidato sambutan reses anggota dewan.',
  'Jelaskan tahapan pembentukan Peraturan Daerah (Perda).',
];

const GREETING: ChatMessage = {
  role: 'assistant',
  content:
    'Selamat datang 👋 Saya **SiCerdas**, asisten AI DPRD Kabupaten Mesuji.\n\nSaya dapat membantu Anda:\n\n- ✍️ Menyusun draf surat, nota dinas, dan pidato\n- 📋 Membuat ringkasan dan notulen rapat\n- 🗳️ Menelaah aspirasi masyarakat\n- ⚖️ Menjelaskan regulasi & produk hukum daerah\n\nSilakan pilih mode di samping atau langsung ketik permintaan Anda.',
};

export function AsistenClient() {
  const [messages, setMessages] = useState<ChatMessage[]>([GREETING]);
  const [input, setInput] = useState('');
  const [mode, setMode] = useState('umum');
  const [loading, setLoading] = useState(false);
  const logRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    logRef.current?.scrollTo({ top: logRef.current.scrollHeight, behavior: 'smooth' });
  }, [messages, loading]);

  async function send(text: string) {
    const trimmed = text.trim();
    if (!trimmed || loading) return;
    const next: ChatMessage[] = [...messages, { role: 'user', content: trimmed }];
    setMessages(next);
    setInput('');
    setLoading(true);
    try {
      const reply = await chatAI(
        next.filter((m) => m !== GREETING),
        mode,
      );
      setMessages([...next, { role: 'assistant', content: reply }]);
    } catch {
      setMessages([
        ...next,
        { role: 'assistant', content: '⚠️ Maaf, terjadi kendala. Silakan coba lagi.' },
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="wrap page">
      <div className="page-head" style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12, alignItems: 'flex-end' }}>
        <div>
          <h1>Asisten AI Kedewanan</h1>
          <p>Mitra cerdas untuk menyusun dokumen, menelaah aspirasi, dan memahami regulasi.</p>
        </div>
        <AIStatus />
      </div>

      <div className="chat-shell">
        {/* Sidebar mode */}
        <aside className="card chat-side">
          <h4>Mode Bantuan</h4>
          {MODES.map((m) => (
            <button
              key={m.id}
              className={`mode-btn ${mode === m.id ? 'active' : ''}`}
              onClick={() => setMode(m.id)}
            >
              {m.icon} {m.label}
            </button>
          ))}
          <button
            className="mode-btn"
            style={{ marginTop: 8, color: 'var(--muted)' }}
            onClick={() => setMessages([GREETING])}
          >
            🧹 Bersihkan obrolan
          </button>
        </aside>

        {/* Chat */}
        <section className="card chat-main">
          <div className="chat-log" ref={logRef}>
            {messages.map((m, idx) => (
              <div key={idx} className={`msg ${m.role === 'user' ? 'me' : 'ai'}`}>
                <span className="avatar">{m.role === 'user' ? <span>🧑</span> : <IconBot size={20} />}</span>
                <div className="body">
                  {m.role === 'user' ? m.content : <Markdown content={m.content} />}
                </div>
              </div>
            ))}

            {loading && (
              <div className="msg ai">
                <span className="avatar">
                  <IconBot size={20} />
                </span>
                <div className="body">
                  <span className="typing">
                    <i />
                    <i />
                    <i />
                  </span>
                </div>
              </div>
            )}

            {messages.length === 1 && (
              <div className="suggestions">
                {SUGGESTIONS.map((s) => (
                  <button key={s} onClick={() => send(s)}>
                    {s}
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="chat-input">
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault();
                  send(input);
                }
              }}
              rows={1}
              placeholder="Tulis permintaan Anda… (Enter kirim, Shift+Enter baris baru)"
            />
            <button
              className="icon-btn"
              onClick={() => send(input)}
              disabled={loading || !input.trim()}
              aria-label="Kirim"
            >
              <IconSend size={20} />
            </button>
          </div>
        </section>
      </div>
    </main>
  );
}
