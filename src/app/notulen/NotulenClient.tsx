'use client';

import { useState } from 'react';
import { rapatSeed } from '../../lib/data';
import { generateNotulen } from '../../lib/client';
import { Markdown } from '../../components/Markdown';
import { AIStatus } from '../../components/AIStatus';
import { IconSparkles, IconDoc, IconClock, IconPin, IconCalendar, IconCopy, IconCheck } from '../../components/icons';

const statusChip: Record<string, string> = {
  terjadwal: 'chip-blue',
  berlangsung: 'chip-gold',
  selesai: 'chip-green',
};

const agendaContoh: Record<string, string[]> = {
  'RPT-001': ['Penyampaian Nota Keuangan APBD-P oleh Bupati', 'Pandangan umum fraksi-fraksi', 'Penetapan jadwal pembahasan'],
  'RPT-002': ['Evaluasi realisasi proyek jalan kabupaten', 'Prioritas perbaikan infrastruktur 2026', 'Tindak lanjut aspirasi masyarakat'],
  'RPT-003': ['Distribusi pupuk subsidi', 'Perbaikan irigasi tersier', 'Stabilisasi harga gabah'],
};

export function NotulenClient() {
  const [judul, setJudul] = useState('');
  const [agenda, setAgenda] = useState('');
  const [poin, setPoin] = useState('');
  const [hasil, setHasil] = useState('');
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  async function handleGenerate() {
    if (!judul.trim() && !poin.trim()) return;
    setLoading(true);
    setHasil('');
    try {
      setHasil(await generateNotulen({ judul, agenda, poin }));
    } catch {
      setHasil('⚠️ Gagal membuat notulen. Silakan coba lagi.');
    } finally {
      setLoading(false);
    }
  }

  function copy() {
    navigator.clipboard.writeText(hasil);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  }

  function pakaiAgenda(id: string, j: string) {
    setJudul(j);
    setAgenda((agendaContoh[id] || []).join('\n'));
    setPoin('');
    setHasil('');
  }

  return (
    <main className="wrap page">
      <div className="page-head" style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12, alignItems: 'flex-end' }}>
        <div>
          <h1>Agenda Rapat &amp; Notulen AI</h1>
          <p>Kelola jadwal rapat dewan dan susun notulen resmi otomatis dari poin-poin pembahasan.</p>
        </div>
        <AIStatus />
      </div>

      <div className="grid" style={{ gridTemplateColumns: '2fr 3fr', alignItems: 'start' }}>
        {/* Jadwal */}
        <div className="grid" style={{ gap: 12 }}>
          <h3 style={{ margin: '0 0 2px', fontSize: 18 }}>Jadwal Rapat</h3>
          {rapatSeed.map((r) => (
            <div key={r.id} className="card" style={{ padding: 18 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', gap: 8 }}>
                <h4 style={{ margin: '0 0 8px', fontSize: 15 }}>{r.judul}</h4>
                <span className={`chip ${statusChip[r.status]}`} style={{ height: 'fit-content' }}>{r.status}</span>
              </div>
              <p className="meta" style={{ display: 'flex', alignItems: 'center', gap: 6, margin: '4px 0' }}>
                <IconCalendar size={14} />
                {new Date(r.tanggal).toLocaleDateString('id-ID', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })}
              </p>
              <p className="meta" style={{ display: 'flex', alignItems: 'center', gap: 6, margin: '4px 0' }}>
                <IconClock size={14} /> {r.waktu}
              </p>
              <p className="meta" style={{ display: 'flex', alignItems: 'center', gap: 6, margin: '4px 0' }}>
                <IconPin size={14} /> {r.lokasi}
              </p>
              <span className="chip chip-brand" style={{ marginTop: 6 }}>{r.komisi}</span>
              <button
                onClick={() => pakaiAgenda(r.id, r.judul)}
                style={{ display: 'block', marginTop: 12, background: 'none', border: 'none', color: 'var(--brand)', fontWeight: 700, fontSize: 13, cursor: 'pointer', padding: 0, fontFamily: 'inherit' }}
              >
                Gunakan agenda ini untuk notulen →
              </button>
            </div>
          ))}
        </div>

        {/* Generator */}
        <div className="grid" style={{ gap: 16 }}>
          <div className="card" style={{ padding: 22 }}>
            <h3 style={{ margin: '0 0 16px', display: 'flex', gap: 8, alignItems: 'center', fontSize: 18 }}>
              <IconSparkles size={20} /> Generator Notulen Rapat
            </h3>
            <label className="field">
              <span>Judul Rapat</span>
              <input className="input" value={judul} onChange={(e) => setJudul(e.target.value)} placeholder="cth. Rapat Kerja Komisi C dengan Dinas PUPR" />
            </label>
            <label className="field">
              <span>Agenda (satu per baris)</span>
              <textarea className="textarea" style={{ minHeight: 90 }} value={agenda} onChange={(e) => setAgenda(e.target.value)} placeholder={'Evaluasi proyek jalan\nPrioritas perbaikan 2026'} />
            </label>
            <label className="field">
              <span>Poin / Catatan Pembahasan (satu per baris)</span>
              <textarea className="textarea" value={poin} onChange={(e) => setPoin(e.target.value)} placeholder={'Dinas memaparkan realisasi anggaran 70%\nKomisi meminta percepatan lelang\nDisepakati kunjungan lapangan pekan depan'} />
            </label>
            <button className="btn btn-primary" style={{ width: '100%' }} onClick={handleGenerate} disabled={loading}>
              <IconDoc size={18} /> {loading ? 'Menyusun notulen…' : 'Buat Notulen Otomatis'}
            </button>
          </div>

          {hasil && (
            <div className="card fade" style={{ padding: 22 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 }}>
                <h3 style={{ margin: 0, fontSize: 17 }}>Notulen Tersusun</h3>
                <button className="copy-btn" onClick={copy}>
                  {copied ? <IconCheck size={15} /> : <IconCopy size={15} />} {copied ? 'Tersalin' : 'Salin'}
                </button>
              </div>
              <div style={{ background: '#f6faf8', borderRadius: 12, padding: 18 }}>
                <Markdown content={hasil} />
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
