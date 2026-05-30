'use client';

import { useMemo, useState } from 'react';
import { anggotaSeed, FRAKSI } from '../../lib/data';
import { IconSearch, IconUsers, IconBuilding, IconPin } from '../../components/icons';

function initials(nama: string) {
  const clean = nama.replace(/(H\.|Hj\.|Dra\.|Dr\.|S\.[A-Za-z.]+|,)/g, '').trim();
  return clean
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
    .toUpperCase();
}

const fraksiChip: Record<string, string> = {
  'Fraksi PDI Perjuangan': 'chip-red',
  'Fraksi Golkar': 'chip-gold',
  'Fraksi Gerindra': 'chip-gold',
  'Fraksi NasDem': 'chip-blue',
  'Fraksi PKB': 'chip-green',
  'Fraksi Demokrat-PAN': 'chip-blue',
};

export function AnggotaClient() {
  const [q, setQ] = useState('');
  const [fraksi, setFraksi] = useState('semua');

  const filtered = useMemo(() => {
    const t = q.toLowerCase();
    return anggotaSeed.filter(
      (a) =>
        (fraksi === 'semua' || a.fraksi === fraksi) &&
        (a.nama.toLowerCase().includes(t) ||
          a.komisi.toLowerCase().includes(t) ||
          a.jabatan.toLowerCase().includes(t)),
    );
  }, [q, fraksi]);

  return (
    <main className="wrap page">
      <div className="page-head">
        <h1>Anggota Dewan</h1>
        <p>Direktori anggota DPRD Kabupaten Mesuji beserta fraksi, komisi, dan daerah pemilihan.</p>
      </div>

      <div className="grid grid-3" style={{ marginBottom: 22 }}>
        <div className="card stat" style={{ flexDirection: 'row', alignItems: 'center', gap: 14 }}>
          <span className="ico" style={{ margin: 0 }}><IconUsers size={22} /></span>
          <div><strong style={{ fontSize: 26 }}>{anggotaSeed.length}</strong><span>Anggota terdata</span></div>
        </div>
        <div className="card stat" style={{ flexDirection: 'row', alignItems: 'center', gap: 14 }}>
          <span className="ico" style={{ margin: 0 }}><IconBuilding size={22} /></span>
          <div><strong style={{ fontSize: 26 }}>{FRAKSI.length}</strong><span>Fraksi</span></div>
        </div>
        <div className="card stat" style={{ flexDirection: 'row', alignItems: 'center', gap: 14 }}>
          <span className="ico" style={{ margin: 0 }}><IconPin size={22} /></span>
          <div><strong style={{ fontSize: 26 }}>3</strong><span>Daerah pemilihan</span></div>
        </div>
      </div>

      <div className="toolbar">
        <div className="search-box">
          <IconSearch size={18} />
          <input className="input" value={q} onChange={(e) => setQ(e.target.value)} placeholder="Cari nama, jabatan, atau komisi…" />
        </div>
        <select className="select" style={{ width: 'auto' }} value={fraksi} onChange={(e) => setFraksi(e.target.value)}>
          <option value="semua">Semua fraksi</option>
          {FRAKSI.map((f) => (
            <option key={f}>{f}</option>
          ))}
        </select>
      </div>

      <div className="grid grid-3">
        {filtered.map((a) => (
          <div key={a.id} className="card member">
            <div className="ava">{initials(a.nama)}</div>
            <h4>{a.nama}</h4>
            <p className="role">{a.jabatan}</p>
            <span className={`chip ${fraksiChip[a.fraksi] || 'chip-gray'}`}>{a.fraksi}</span>
            <div className="info">
              <div>{a.komisi}</div>
              <div>{a.dapil}</div>
            </div>
          </div>
        ))}
        {filtered.length === 0 && (
          <p style={{ gridColumn: '1 / -1', textAlign: 'center', color: 'var(--faint)', padding: '32px 0' }}>
            Tidak ada anggota yang cocok.
          </p>
        )}
      </div>
    </main>
  );
}
