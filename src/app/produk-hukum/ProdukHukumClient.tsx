'use client';

import { useMemo, useState } from 'react';
import { produkHukumSeed } from '../../lib/data';
import { chatAI } from '../../lib/client';
import { Markdown } from '../../components/Markdown';
import { IconScale, IconBot, IconSearch, IconDoc } from '../../components/icons';

const statusChip: Record<string, string> = {
  berlaku: 'chip-green',
  pembahasan: 'chip-gold',
  dicabut: 'chip-red',
};
const jenisChip: Record<string, string> = {
  Perda: 'chip-brand',
  Raperda: 'chip-blue',
  Keputusan: 'chip-gold',
  'Peraturan DPRD': 'chip-gray',
};

export function ProdukHukumClient() {
  const [q, setQ] = useState('');
  const [aiQ, setAiQ] = useState('');
  const [aiAnswer, setAiAnswer] = useState('');
  const [loading, setLoading] = useState(false);

  const filtered = useMemo(() => {
    const t = q.toLowerCase();
    return produkHukumSeed.filter(
      (p) =>
        p.judul.toLowerCase().includes(t) ||
        p.nomor.toLowerCase().includes(t) ||
        p.ringkasan.toLowerCase().includes(t),
    );
  }, [q]);

  async function tanyaAI() {
    if (!aiQ.trim()) return;
    setLoading(true);
    setAiAnswer('');
    const konteks = produkHukumSeed.map((p) => `- ${p.nomor}: ${p.judul} (${p.status}). ${p.ringkasan}`).join('\n');
    try {
      const reply = await chatAI(
        [
          {
            role: 'user',
            content: `Berikut daftar produk hukum daerah Kabupaten Mesuji:\n${konteks}\n\nPertanyaan: ${aiQ}\n\nJawab berdasarkan daftar di atas dan pengetahuan umum tentang peraturan perundang-undangan daerah.`,
          },
        ],
        'regulasi',
      );
      setAiAnswer(reply);
    } catch {
      setAiAnswer('⚠️ Gagal mendapatkan jawaban. Coba lagi.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="wrap page">
      <div className="page-head">
        <h1>Produk Hukum Daerah</h1>
        <p>Repositori Perda, Raperda, dan peraturan lain — dilengkapi pencarian dan tanya jawab AI.</p>
      </div>

      {/* Tanya AI */}
      <div className="card" style={{ padding: 22, marginBottom: 22, background: 'linear-gradient(140deg, var(--brand-50), #fff)' }}>
        <h3 style={{ margin: '0 0 12px', display: 'flex', gap: 8, alignItems: 'center', fontSize: 18 }}>
          <IconBot size={20} /> Tanya AI tentang Regulasi
        </h3>
        <div style={{ display: 'flex', gap: 10 }}>
          <input
            className="input"
            value={aiQ}
            onChange={(e) => setAiQ(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && tanyaAI()}
            placeholder="cth. Perda apa yang mengatur pengelolaan sampah?"
          />
          <button className="btn btn-primary" style={{ flexShrink: 0 }} onClick={tanyaAI} disabled={loading}>
            <IconBot size={18} /> {loading ? '…' : 'Tanya'}
          </button>
        </div>
        {aiAnswer && (
          <div className="card fade" style={{ marginTop: 14, padding: 18 }}>
            <Markdown content={aiAnswer} />
          </div>
        )}
      </div>

      {/* Pencarian */}
      <div className="search-box" style={{ marginBottom: 18 }}>
        <IconSearch size={18} />
        <input className="input" value={q} onChange={(e) => setQ(e.target.value)} placeholder="Cari produk hukum berdasarkan judul, nomor, atau isi…" />
      </div>

      {/* Daftar */}
      <div className="grid grid-2">
        {filtered.map((p) => (
          <div key={p.id} className="card feature" style={{ padding: 22 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 10 }}>
              <span className="ico" style={{ margin: 0 }}>
                <IconScale size={24} />
              </span>
              <div style={{ display: 'flex', gap: 6 }}>
                <span className={`chip ${jenisChip[p.jenis]}`}>{p.jenis}</span>
                <span className={`chip ${statusChip[p.status]}`}>{p.status}</span>
              </div>
            </div>
            <p style={{ color: 'var(--brand)', fontWeight: 700, fontSize: 12.5, margin: '0 0 2px' }}>{p.nomor}</p>
            <h3 style={{ margin: '0 0 8px', fontSize: 17 }}>{p.judul}</h3>
            <p>{p.ringkasan}</p>
            <span className="link">
              <IconDoc size={16} /> Lihat dokumen
            </span>
          </div>
        ))}
        {filtered.length === 0 && (
          <p style={{ gridColumn: '1 / -1', textAlign: 'center', color: 'var(--faint)', padding: '32px 0' }}>
            Tidak ada produk hukum yang cocok dengan pencarian.
          </p>
        )}
      </div>
    </main>
  );
}
