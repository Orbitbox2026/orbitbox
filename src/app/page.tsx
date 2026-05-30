import Link from 'next/link';
import { AIStatus } from '../components/AIStatus';
import {
  IconBot,
  IconHeart,
  IconDoc,
  IconScale,
  IconUsers,
  IconCalendar,
  IconArrow,
  IconSparkles,
  IconShield,
  IconChart,
} from '../components/icons';

const features = [
  {
    href: '/asisten',
    icon: <IconBot size={26} />,
    title: 'Asisten AI Kedewanan',
    desc: 'Tanya jawab cerdas: susun draf surat & nota dinas, pidato, jelaskan regulasi, hingga telaah aspirasi — dalam Bahasa Indonesia formal.',
  },
  {
    href: '/aspirasi',
    icon: <IconHeart size={26} />,
    title: 'Analisis Aspirasi Warga',
    desc: 'AI mengklasifikasi kategori, sentimen, prioritas, komisi pengampu, dan memberi rekomendasi tindak lanjut atas setiap aspirasi masyarakat.',
  },
  {
    href: '/notulen',
    icon: <IconDoc size={26} />,
    title: 'Notulen Rapat Otomatis',
    desc: 'Ubah poin-poin pembahasan menjadi notulen rapat resmi yang rapi dan siap diarsipkan hanya dalam hitungan detik.',
  },
  {
    href: '/produk-hukum',
    icon: <IconScale size={26} />,
    title: 'Produk Hukum Daerah',
    desc: 'Repositori Perda & Raperda dengan pencarian cepat serta tanya jawab regulasi berbasis AI.',
  },
  {
    href: '/anggota',
    icon: <IconUsers size={26} />,
    title: 'Direktori Anggota',
    desc: 'Profil anggota dewan beserta fraksi, komisi, dan daerah pemilihan se-Kabupaten Mesuji.',
  },
  {
    href: '/asisten',
    icon: <IconCalendar size={26} />,
    title: 'Dukungan Persidangan',
    desc: 'Bantuan menyiapkan agenda, bahan rapat, dan ringkasan untuk kelancaran masa sidang dewan.',
  },
];

const fungsi = [
  {
    icon: <IconScale size={24} />,
    title: 'Legislasi',
    desc: 'Membentuk peraturan daerah bersama kepala daerah — dibantu AI dalam penyusunan dan telaah naskah.',
  },
  {
    icon: <IconChart size={24} />,
    title: 'Anggaran',
    desc: 'Membahas dan menyetujui APBD — dengan ringkasan dokumen anggaran yang cepat dipahami.',
  },
  {
    icon: <IconShield size={24} />,
    title: 'Pengawasan',
    desc: 'Mengawasi pelaksanaan perda dan APBD serta menindaklanjuti aspirasi masyarakat secara terstruktur.',
  },
];

export default function Home() {
  return (
    <main>
      {/* HERO */}
      <section className="hero">
        <div className="hero-inner">
          <div>
            <span className="eyebrow">
              <IconSparkles size={14} /> Didukung Kecerdasan Buatan
            </span>
            <h1>
              Platform AI Cerdas untuk <span className="accent">DPRD Kabupaten Mesuji</span>
            </h1>
            <p className="lead">
              SiCerdas mempermudah kinerja Dewan Perwakilan Rakyat Daerah Mesuji, Lampung — mulai dari
              penyusunan dokumen, analisis aspirasi masyarakat, notulen rapat, hingga penjelasan
              regulasi, semuanya dipercepat oleh AI.
            </p>
            <div className="hero-actions">
              <Link href="/asisten" className="btn btn-primary">
                <IconBot size={19} /> Mulai dengan Asisten AI
              </Link>
              <Link href="/aspirasi" className="btn btn-ghost">
                Kelola Aspirasi <IconArrow size={17} />
              </Link>
            </div>
            <div style={{ marginTop: 22 }}>
              <AIStatus />
            </div>
            <div className="hero-trust">
              <div>
                <strong>7</strong>
                <span>Kecamatan terlayani</span>
              </div>
              <div>
                <strong>3</strong>
                <span>Fungsi dewan didukung</span>
              </div>
              <div>
                <strong>24/7</strong>
                <span>Asisten siap membantu</span>
              </div>
            </div>
          </div>

          {/* Chat preview */}
          <div className="hero-panel" aria-hidden="true">
            <div className="hero-panel-top">
              <i />
              <i />
              <i />
              <span style={{ marginLeft: 6 }}>SiCerdas · Asisten AI</span>
            </div>
            <div className="hero-panel-body">
              <div className="bubble user">
                Buatkan draf undangan rapat paripurna pembahasan APBD Perubahan 2026.
              </div>
              <div className="bubble ai">
                Tentu. Berikut draf undangannya:
                <br />
                <b>Nomor:</b> .../DPRD-MSJ/2026
                <br />
                <b>Perihal:</b> Undangan Rapat Paripurna
                <br />
                Kepada Yth. Anggota Dewan, dengan hormat kami mengundang Bapak/Ibu pada Rapat
                Paripurna pembahasan APBD-P…
              </div>
              <div className="bubble user">Sekalian analisis aspirasi soal jalan rusak.</div>
              <div className="bubble ai">
                <b>Kategori:</b> Infrastruktur · <b>Prioritas:</b> Tinggi
                <br />
                Disposisi ke Komisi C — Pembangunan. Rekomendasi: verifikasi lapangan & rapat kerja
                dengan Dinas PUPR. ✅
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FITUR */}
      <section className="section" id="fitur">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">
              <IconSparkles size={14} /> Fitur Unggulan
            </span>
            <h2>Satu platform untuk seluruh pekerjaan dewan</h2>
            <p>
              Dirancang khusus untuk kebutuhan sekretariat dan anggota DPRD Mesuji agar pekerjaan
              administratif dan substantif menjadi lebih cepat, rapi, dan transparan.
            </p>
          </div>
          <div className="grid grid-3">
            {features.map((f) => (
              <Link key={f.title} href={f.href} className="card feature">
                <span className="ico">{f.icon}</span>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
                <span className="link">
                  Buka <IconArrow size={16} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FUNGSI DPRD */}
      <section className="section" style={{ background: '#fff', borderTop: '1px solid var(--line)' }}>
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">Tiga Fungsi DPRD</span>
            <h2>Mendukung tugas konstitusional dewan</h2>
            <p>
              SiCerdas hadir sebagai mitra digital untuk memperkuat pelaksanaan ketiga fungsi utama
              DPRD secara akuntabel.
            </p>
          </div>
          <div className="grid grid-3">
            {fungsi.map((f) => (
              <div key={f.title} className="card feature">
                <span className="ico">{f.icon}</span>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="wrap">
          <div
            className="card"
            style={{
              padding: '46px 32px',
              textAlign: 'center',
              background: 'linear-gradient(140deg, var(--brand-strong), var(--brand-deep))',
              color: '#fff',
            }}
          >
            <h2 style={{ fontSize: 'clamp(24px,3.4vw,34px)', letterSpacing: '-1px', margin: 0 }}>
              Siap mempermudah pekerjaan dewan?
            </h2>
            <p
              style={{
                color: '#cdeadd',
                maxWidth: 560,
                margin: '14px auto 26px',
                fontSize: 16,
                lineHeight: 1.6,
              }}
            >
              Coba asisten AI SiCerdas sekarang — tanpa instalasi, langsung dari peramban Anda.
            </p>
            <Link href="/asisten" className="btn btn-gold">
              <IconBot size={19} /> Buka Asisten AI
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
