// Lapisan AI server-side.
// Memakai Claude API (Anthropic) bila ANTHROPIC_API_KEY tersedia; jika tidak,
// memakai mesin fallback berbasis aturan agar aplikasi tetap berfungsi penuh.
import Anthropic from '@anthropic-ai/sdk';

export type ChatMessage = { role: 'user' | 'assistant'; content: string };
export type Sentimen = 'positif' | 'netral' | 'negatif';
export type Prioritas = 'tinggi' | 'sedang' | 'rendah';

export interface AnalisisAspirasi {
  kategori: string;
  sentimen: Sentimen;
  prioritas: Prioritas;
  komisi: string;
  ringkasan: string;
  rekomendasi: string[];
}

const API_KEY = process.env.ANTHROPIC_API_KEY;
const MODEL = process.env.ANTHROPIC_MODEL || 'claude-sonnet-4-6';
const client = API_KEY ? new Anthropic({ apiKey: API_KEY }) : null;

export const aiEnabled = Boolean(client);
export const modelName = aiEnabled ? MODEL : 'mesin-fallback';

const SYSTEM_BASE = `Anda adalah "SiCerdas", asisten AI resmi untuk Sekretariat dan Anggota DPRD Kabupaten Mesuji, Provinsi Lampung.
Tugas Anda membantu pekerjaan kedewanan: menyusun draf surat/nota dinas/pidato, ringkasan & notulen rapat, telaah aspirasi masyarakat, penjelasan regulasi, serta dukungan fungsi legislasi, anggaran, dan pengawasan.
Gunakan Bahasa Indonesia formal pemerintahan yang jelas dan ringkas. Bila menyangkut data spesifik yang tidak Anda ketahui, nyatakan asumsi secara transparan. Gunakan format markdown (judul ###, poin -, **tebal**) bila membantu keterbacaan.`;

const MODE_HINT: Record<string, string> = {
  umum: '',
  draf: 'Fokus menyusun draf dokumen resmi (surat, nota dinas, pidato, naskah). Sertakan struktur baku administrasi pemerintahan.',
  regulasi:
    'Fokus menjelaskan peraturan perundang-undangan dan produk hukum daerah secara berjenjang dan mudah dipahami.',
  aspirasi:
    'Fokus pada analisis aspirasi masyarakat: kategori, urgensi, komisi terkait, dan rekomendasi tindak lanjut.',
};

// ---------------------------------------------------------------------------
// CLAUDE
// ---------------------------------------------------------------------------
async function claudeChat(messages: ChatMessage[], mode: string): Promise<string> {
  const system = SYSTEM_BASE + (MODE_HINT[mode] ? `\n\nKonteks tugas: ${MODE_HINT[mode]}` : '');
  const resp = await client!.messages.create({
    model: MODEL,
    max_tokens: 1600,
    system,
    messages: messages.map((m) => ({ role: m.role, content: m.content })),
  });
  return resp.content.map((b) => (b.type === 'text' ? b.text : '')).join('');
}

async function claudeAnalyze(text: string): Promise<AnalisisAspirasi> {
  const resp = await client!.messages.create({
    model: MODEL,
    max_tokens: 900,
    system:
      SYSTEM_BASE +
      '\n\nAnda menganalisis aspirasi warga. Jawab HANYA dengan objek JSON valid, tanpa teks lain.',
    messages: [
      {
        role: 'user',
        content: `Analisis aspirasi berikut dan kembalikan JSON dengan field persis:
{"kategori": (salah satu: Infrastruktur, Pertanian & Perkebunan, Pendidikan, Kesehatan, Lingkungan, Ekonomi & UMKM, Pelayanan Publik, Keamanan),
"sentimen": "positif"|"netral"|"negatif",
"prioritas": "tinggi"|"sedang"|"rendah",
"komisi": (komisi DPRD yang relevan, mis. "Komisi C — Pembangunan"),
"ringkasan": (1 kalimat),
"rekomendasi": [2-4 langkah tindak lanjut konkret]}

Aspirasi: """${text}"""`,
      },
    ],
  });
  const raw = resp.content.map((b) => (b.type === 'text' ? b.text : '')).join('');
  const match = raw.match(/\{[\s\S]*\}/);
  return JSON.parse(match ? match[0] : raw) as AnalisisAspirasi;
}

// ---------------------------------------------------------------------------
// FALLBACK BERBASIS ATURAN
// ---------------------------------------------------------------------------
const KATEGORI_KEYWORDS: Record<string, string[]> = {
  Infrastruktur: ['jalan', 'jembatan', 'irigasi', 'drainase', 'gorong', 'aspal', 'rusak', 'pembangunan', 'listrik', 'air bersih', 'jalur'],
  'Pertanian & Perkebunan': ['petani', 'pupuk', 'panen', 'tani', 'sawah', 'padi', 'kebun', 'gabah', 'tanam', 'pertanian', 'sawit'],
  Pendidikan: ['sekolah', 'guru', 'siswa', 'kelas', 'pendidikan', 'beasiswa', 'belajar', 'sd', 'smp', 'sma', 'paud'],
  Kesehatan: ['puskesmas', 'dokter', 'rumah sakit', 'kesehatan', 'obat', 'bidan', 'posyandu', 'medis', 'rujuk', 'stunting'],
  Lingkungan: ['sampah', 'limbah', 'banjir', 'lingkungan', 'pencemaran', 'kebersihan', 'hutan', 'bau', 'longsor'],
  'Ekonomi & UMKM': ['umkm', 'usaha', 'modal', 'dagang', 'ekonomi', 'pasar', 'koperasi', 'pelatihan', 'pemuda', 'wirausaha'],
  'Pelayanan Publik': ['ktp', 'administrasi', 'pelayanan', 'kantor', 'surat', 'birokrasi', 'dukcapil', 'akta'],
  Keamanan: ['keamanan', 'curanmor', 'maling', 'ketertiban', 'begal', 'narkoba', 'kriminal', 'ronda'],
};

const KOMISI_MAP: Record<string, string> = {
  Infrastruktur: 'Komisi C — Pembangunan',
  'Pertanian & Perkebunan': 'Komisi B — Ekonomi & Keuangan',
  Pendidikan: 'Komisi D — Kesejahteraan Rakyat',
  Kesehatan: 'Komisi D — Kesejahteraan Rakyat',
  Lingkungan: 'Komisi C — Pembangunan',
  'Ekonomi & UMKM': 'Komisi B — Ekonomi & Keuangan',
  'Pelayanan Publik': 'Komisi A — Pemerintahan & Hukum',
  Keamanan: 'Komisi A — Pemerintahan & Hukum',
};

const NEG = ['rusak', 'parah', 'tidak', 'kurang', 'buruk', 'sulit', 'mahal', 'lambat', 'bocor', 'banjir', 'menumpuk', 'gagal', 'keluhan', 'darurat', 'bahaya', 'macet'];
const POS = ['terima kasih', 'apresiasi', 'bagus', 'baik', 'mendukung', 'sukses', 'berhasil', 'senang', 'puas', 'mantap'];
const URGENT = ['darurat', 'parah', 'bahaya', 'mendesak', 'segera', 'kekurangan', 'putus', 'korban', 'ambruk'];

function count(text: string, list: string[]) {
  const t = text.toLowerCase();
  return list.reduce((n, kw) => n + (t.includes(kw) ? 1 : 0), 0);
}

export function fallbackAnalyze(text: string): AnalisisAspirasi {
  let kategori = 'Pelayanan Publik';
  let best = 0;
  for (const [kat, kws] of Object.entries(KATEGORI_KEYWORDS)) {
    const s = count(text, kws);
    if (s > best) {
      best = s;
      kategori = kat;
    }
  }
  const neg = count(text, NEG);
  const pos = count(text, POS);
  const sentimen: Sentimen = pos > neg ? 'positif' : neg > pos ? 'negatif' : 'netral';
  const urgent = count(text, URGENT);
  const prioritas: Prioritas = urgent >= 1 || neg >= 3 ? 'tinggi' : neg >= 1 ? 'sedang' : 'rendah';
  const komisi = KOMISI_MAP[kategori] || 'Komisi A — Pemerintahan & Hukum';
  const clean = text.trim();
  const ringkasan = clean.length > 110 ? clean.slice(0, 107).replace(/\s+\S*$/, '') + '…' : clean;
  const rekomendasi = [
    `Disposisikan ke ${komisi} sebagai komisi pengampu utama.`,
    sentimen === 'negatif'
      ? 'Lakukan verifikasi lapangan dan dengar pendapat dengan dinas teknis terkait.'
      : 'Catat sebagai masukan dan masukkan ke basis data aspirasi.',
    prioritas === 'tinggi'
      ? 'Tindak lanjuti pada rapat kerja terdekat mengingat tingkat urgensi tinggi.'
      : 'Agendakan pembahasan pada masa sidang berjalan.',
  ];
  return { kategori, sentimen, prioritas, komisi, ringkasan, rekomendasi };
}

const DEMO_BANNER =
  '> ℹ️ Mode demo (tanpa kunci API). Jawaban dibuat mesin template. Setel `ANTHROPIC_API_KEY` untuk mengaktifkan kecerdasan penuh Claude.\n\n';

function fallbackChat(messages: ChatMessage[], mode: string): string {
  const last = [...messages].reverse().find((m) => m.role === 'user')?.content || '';
  const t = last.toLowerCase();
  const tgl = new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' });

  if (mode === 'draf' || /surat|nota dinas|undangan|draf|draft|pidato/.test(t)) {
    return (
      DEMO_BANNER +
      `### Draf Dokumen Dinas\n\n**PEMERINTAH KABUPATEN MESUJI**\n**DEWAN PERWAKILAN RAKYAT DAERAH**\n\nNomor: .../DPRD-MSJ/2026\nLampiran: —\nPerihal: **${last || 'Undangan Rapat'}**\n\nKepada Yth.\n[Penerima]\ndi Tempat\n\nDengan hormat,\n\nSehubungan dengan pelaksanaan tugas dan fungsi kedewanan, dengan ini kami sampaikan hal-hal sebagai berikut:\n\n1. [Pokok perihal / dasar surat]\n2. [Maksud dan tujuan]\n3. [Waktu, tempat, dan agenda bila berupa undangan]\n\nDemikian kami sampaikan. Atas perhatian dan kerja samanya, kami ucapkan terima kasih.\n\nMesuji, ${tgl}\n\nKetua DPRD Kabupaten Mesuji,\n\n\n**(...........................)**\n\nSilakan sesuaikan bagian dalam tanda kurung.`
    );
  }
  if (mode === 'aspirasi' || /aspirasi|warga|keluhan|masyarakat/.test(t)) {
    return (
      DEMO_BANNER +
      `### Telaah Aspirasi Masyarakat\n\nLangkah menindaklanjuti aspirasi warga:\n\n1. **Klasifikasi** — tentukan kategori dan komisi pengampu.\n2. **Verifikasi** — cek kebenaran & urgensi via kunjungan lapangan / data dinas.\n3. **Disposisi** — teruskan ke komisi terkait, jadwalkan rapat dengar pendapat.\n4. **Tindak lanjut & monitoring** — catat status dan beri umpan balik ke pengusul.\n\nGunakan menu **Aspirasi** untuk analisis otomatis kategori, sentimen, dan prioritas.`
    );
  }
  if (mode === 'regulasi' || /perda|raperda|regulasi|peraturan|hukum|undang/.test(t)) {
    return (
      DEMO_BANNER +
      `### Penjelasan Regulasi\n\nTahapan umum pembentukan **Peraturan Daerah (Perda)**:\n\n1. **Propemperda** — daftar rancangan perda prioritas.\n2. **Naskah Akademik & penyusunan Raperda.**\n3. **Pembahasan** — dua tingkat pembicaraan bersama eksekutif.\n4. **Persetujuan bersama** dalam Rapat Paripurna.\n5. **Evaluasi Gubernur** (perda tertentu) dan **penetapan** Bupati.\n6. **Pengundangan** dalam Lembaran Daerah.\n\nSebutkan topik regulasi spesifik untuk penjelasan lebih rinci.`
    );
  }
  if (/tugas|fungsi|tupoksi|wewenang|peran dprd/.test(t)) {
    return (
      DEMO_BANNER +
      `### Tiga Fungsi Utama DPRD\n\n- **Legislasi** — membentuk peraturan daerah bersama kepala daerah.\n- **Anggaran** — membahas dan menyetujui APBD.\n- **Pengawasan** — mengawasi pelaksanaan perda dan APBD.\n\nDPRD juga menyerap dan menyalurkan aspirasi masyarakat melalui reses dan rapat dengar pendapat.`
    );
  }
  return (
    DEMO_BANNER +
    `Terima kasih atas pertanyaan Anda. Saya **SiCerdas**, asisten AI DPRD Mesuji yang dapat membantu:\n\n- ✍️ Menyusun draf surat, nota dinas, dan pidato\n- 📋 Membuat ringkasan & notulen rapat\n- 🗳️ Menelaah aspirasi masyarakat\n- ⚖️ Menjelaskan regulasi & produk hukum daerah\n\nSilakan ajukan permintaan secara spesifik. Contoh: *"Buatkan draf undangan rapat paripurna pembahasan APBD-P"*.`
  );
}

function fallbackNotulen(input: { judul: string; agenda: string; poin: string }): string {
  const tgl = new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' });
  const ag = input.agenda.split('\n').filter(Boolean).map((a, i) => `${i + 1}. ${a.trim()}`).join('\n');
  const pn = input.poin.split('\n').filter(Boolean).map((p) => `- ${p.trim()}`).join('\n');
  return `### NOTULEN RAPAT\n\n**Judul:** ${input.judul || '-'}\n**Tanggal:** ${tgl}\n**Tempat:** Gedung DPRD Kabupaten Mesuji\n\n#### Agenda\n${ag || '- (belum diisi)'}\n\n#### Jalannya Rapat & Pembahasan\n${pn || '- (belum diisi)'}\n\n#### Kesimpulan & Tindak Lanjut\n1. Hasil pembahasan ditindaklanjuti oleh komisi terkait.\n2. Sekretariat menyiapkan administrasi yang diperlukan.\n3. Hasil rapat dilaporkan pada rapat berikutnya.\n\n#### Penutup\nRapat ditutup pada pukul [..] WIB. Notulen disahkan oleh pimpinan rapat.\n\n> Dihasilkan dalam mode demo. Aktifkan ANTHROPIC_API_KEY untuk ringkasan AI yang lebih kaya.`;
}

// ---------------------------------------------------------------------------
// EKSPOR
// ---------------------------------------------------------------------------
export async function chat(messages: ChatMessage[], mode = 'umum'): Promise<string> {
  if (client) {
    try {
      return await claudeChat(messages, mode);
    } catch (e) {
      console.error('claudeChat gagal, fallback:', e);
    }
  }
  return fallbackChat(messages, mode);
}

export async function analyze(text: string): Promise<AnalisisAspirasi> {
  if (client) {
    try {
      return await claudeAnalyze(text);
    } catch (e) {
      console.error('claudeAnalyze gagal, fallback:', e);
    }
  }
  return fallbackAnalyze(text);
}

export async function notulen(input: { judul: string; agenda: string; poin: string }): Promise<string> {
  if (client) {
    try {
      return await claudeChat(
        [
          {
            role: 'user',
            content: `Buatkan notulen rapat resmi DPRD yang rapi dalam markdown.\nJudul: ${input.judul}\nAgenda:\n${input.agenda}\nCatatan/poin pembahasan:\n${input.poin}`,
          },
        ],
        'draf',
      );
    } catch (e) {
      console.error('notulen gagal, fallback:', e);
    }
  }
  return fallbackNotulen(input);
}
