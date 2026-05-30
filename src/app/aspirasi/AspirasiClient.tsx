'use client';

import { useMemo, useState } from 'react';
import { aspirasiSeed, KECAMATAN, type Aspirasi, type Prioritas, type Sentimen } from '../../lib/data';
import type { AnalisisAspirasi } from '../../lib/ai';
import { analyzeAspirasi } from '../../lib/client';
import { AIStatus } from '../../components/AIStatus';
import { IconSparkles, IconSend, IconPin } from '../../components/icons';

const sentimenChip: Record<Sentimen, string> = {
  positif: 'chip-green',
  netral: 'chip-gray',
  negatif: 'chip-red',
};
const prioritasChip: Record<Prioritas, string> = {
  tinggi: 'chip-red',
  sedang: 'chip-gold',
  rendah: 'chip-gray',
};
const statusChip: Record<string, string> = {
  selesai: 'chip-green',
  diproses: 'chip-blue',
  baru: 'chip-gray',
};

export function AspirasiClient() {
  const [list, setList] = useState<Aspirasi[]>(aspirasiSeed);
  const [filter, setFilter] = useState('semua');

  const [nama, setNama] = useState('');
  const [kecamatan, setKecamatan] = useState(KECAMATAN[0]);
  const [isi, setIsi] = useState('');
  const [analisis, setAnalisis] = useState<AnalisisAspirasi | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const filtered = useMemo(
    () => (filter === 'semua' ? list : list.filter((a) => a.prioritas === filter)),
    [list, filter],
  );

  async function handleAnalyze() {
    if (!isi.trim()) {
      setError('Isi aspirasi tidak boleh kosong.');
      return;
    }
    setError('');
    setLoading(true);
    setAnalisis(null);
    try {
      setAnalisis(await analyzeAspirasi(isi));
    } catch {
      setError('Gagal menganalisis. Coba lagi.');
    } finally {
      setLoading(false);
    }
  }

  function handleSimpan() {
    if (!analisis) return;
    const baru: Aspirasi = {
      id: `ASP-2026-${String(143 + list.length).padStart(4, '0')}`,
      nama: nama.trim() || 'Anonim',
      kecamatan,
      tanggal: new Date().toISOString().slice(0, 10),
      isi: isi.trim(),
      kategori: analisis.kategori,
      sentimen: analisis.sentimen,
      prioritas: analisis.prioritas,
      status: 'baru',
    };
    setList([baru, ...list]);
    setNama('');
    setIsi('');
    setAnalisis(null);
  }

  return (
    <main className="wrap page">
      <div className="page-head" style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12, alignItems: 'flex-end' }}>
        <div>
          <h1>Aspirasi Masyarakat</h1>
          <p>
            Catat aspirasi warga Mesuji dan biarkan AI mengklasifikasi kategori, sentimen, prioritas,
            serta merekomendasikan tindak lanjut.
          </p>
        </div>
        <AIStatus />
      </div>

      <div className="grid" style={{ gridTemplateColumns: '2fr 3fr', alignItems: 'start' }}>
        {/* Form */}
        <div className="grid" style={{ gap: 16 }}>
          <div className="card" style={{ padding: 22 }}>
            <h3 style={{ margin: '0 0 16px', display: 'flex', gap: 8, alignItems: 'center', fontSize: 18 }}>
              <IconSparkles size={20} /> Analisis Aspirasi dengan AI
            </h3>
            <div className="grid grid-2" style={{ gap: 12 }}>
              <label className="field">
                <span>Nama / Kelompok</span>
                <input className="input" value={nama} onChange={(e) => setNama(e.target.value)} placeholder="cth. Pak Sukarman" />
              </label>
              <label className="field">
                <span>Kecamatan</span>
                <select className="select" value={kecamatan} onChange={(e) => setKecamatan(e.target.value)}>
                  {KECAMATAN.map((k) => (
                    <option key={k}>{k}</option>
                  ))}
                </select>
              </label>
            </div>
            <label className="field">
              <span>Isi Aspirasi</span>
              <textarea
                className="textarea"
                value={isi}
                onChange={(e) => setIsi(e.target.value)}
                placeholder="Tuliskan aspirasi atau keluhan warga secara lengkap…"
              />
            </label>
            {error && <p style={{ color: 'var(--red)', fontSize: 13, margin: '0 0 10px' }}>{error}</p>}
            <button className="btn btn-primary" style={{ width: '100%' }} onClick={handleAnalyze} disabled={loading}>
              <IconSparkles size={18} /> {loading ? 'Menganalisis…' : 'Analisis dengan AI'}
            </button>
          </div>

          {analisis && (
            <div className="card result-card">
              <h3 style={{ margin: '0 0 14px', fontSize: 17 }}>Hasil Analisis AI</h3>
              <div className="result-row">
                <span className="chip chip-brand">{analisis.kategori}</span>
                <span className={`chip ${sentimenChip[analisis.sentimen]}`}>Sentimen: {analisis.sentimen}</span>
                <span className={`chip ${prioritasChip[analisis.prioritas]}`}>Prioritas: {analisis.prioritas}</span>
              </div>
              <p className="kv"><b>Komisi pengampu:</b> {analisis.komisi}</p>
              <p className="kv"><b>Ringkasan:</b> {analisis.ringkasan}</p>
              <p className="kv" style={{ marginBottom: 4 }}><b>Rekomendasi tindak lanjut:</b></p>
              <ul style={{ paddingLeft: 18, listStyle: 'disc', display: 'block' }}>
                {analisis.rekomendasi.map((r, i) => (
                  <li key={i} style={{ display: 'list-item', color: 'var(--muted)', fontSize: 14, margin: '4px 0' }}>{r}</li>
                ))}
              </ul>
              <button className="btn btn-primary" style={{ width: '100%', marginTop: 14 }} onClick={handleSimpan}>
                <IconSend size={17} /> Simpan ke Daftar Aspirasi
              </button>
            </div>
          )}
        </div>

        {/* Daftar */}
        <div className="card" style={{ padding: 22 }}>
          <div className="toolbar">
            <h3 style={{ margin: 0, fontSize: 18, flex: 1 }}>Daftar Aspirasi ({filtered.length})</h3>
            <select className="select" style={{ width: 'auto' }} value={filter} onChange={(e) => setFilter(e.target.value)}>
              <option value="semua">Semua prioritas</option>
              <option value="tinggi">Tinggi</option>
              <option value="sedang">Sedang</option>
              <option value="rendah">Rendah</option>
            </select>
          </div>
          <div className="grid" style={{ gap: 12 }}>
            {filtered.map((a) => (
              <div key={a.id} className="list-item">
                <div style={{ display: 'flex', justifyContent: 'space-between', gap: 8 }}>
                  <h4>{a.nama}</h4>
                  <span className={`chip ${prioritasChip[a.prioritas]}`}>{a.prioritas}</span>
                </div>
                <p className="meta" style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                  <IconPin size={13} /> {a.kecamatan} · {a.tanggal} · {a.id}
                </p>
                <p>{a.isi}</p>
                <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', alignItems: 'center' }}>
                  <span className="chip chip-brand">{a.kategori}</span>
                  <span className={`chip ${sentimenChip[a.sentimen]}`}>{a.sentimen}</span>
                  <span className={`chip ${statusChip[a.status]}`} style={{ marginLeft: 'auto' }}>{a.status}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
