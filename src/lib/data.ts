// Data contoh untuk DPRD Kabupaten Mesuji, Lampung.
export type Sentimen = 'positif' | 'netral' | 'negatif';
export type Prioritas = 'tinggi' | 'sedang' | 'rendah';
export type StatusAspirasi = 'baru' | 'diproses' | 'selesai';

export interface Aspirasi {
  id: string;
  nama: string;
  kecamatan: string;
  tanggal: string;
  isi: string;
  kategori: string;
  sentimen: Sentimen;
  prioritas: Prioritas;
  status: StatusAspirasi;
}

export interface Rapat {
  id: string;
  judul: string;
  tanggal: string;
  waktu: string;
  lokasi: string;
  komisi: string;
  status: 'terjadwal' | 'berlangsung' | 'selesai';
}

export interface ProdukHukum {
  id: string;
  nomor: string;
  judul: string;
  jenis: 'Perda' | 'Raperda' | 'Keputusan' | 'Peraturan DPRD';
  tahun: number;
  status: 'berlaku' | 'pembahasan' | 'dicabut';
  ringkasan: string;
}

export interface Anggota {
  id: string;
  nama: string;
  fraksi: string;
  jabatan: string;
  komisi: string;
  dapil: string;
}

// 7 kecamatan Kabupaten Mesuji
export const KECAMATAN = [
  'Mesuji',
  'Mesuji Timur',
  'Rawajitu Utara',
  'Way Serdang',
  'Simpang Pematang',
  'Panca Jaya',
  'Tanjung Raya',
];

export const KATEGORI_ASPIRASI = [
  'Infrastruktur',
  'Pertanian & Perkebunan',
  'Pendidikan',
  'Kesehatan',
  'Lingkungan',
  'Ekonomi & UMKM',
  'Pelayanan Publik',
  'Keamanan',
];

export const KOMISI = [
  'Komisi A — Pemerintahan & Hukum',
  'Komisi B — Ekonomi & Keuangan',
  'Komisi C — Pembangunan',
  'Komisi D — Kesejahteraan Rakyat',
];

export const FRAKSI = [
  'Fraksi PDI Perjuangan',
  'Fraksi Golkar',
  'Fraksi Gerindra',
  'Fraksi NasDem',
  'Fraksi PKB',
  'Fraksi Demokrat-PAN',
];

export const aspirasiSeed: Aspirasi[] = [
  {
    id: 'ASP-2026-0142',
    nama: 'Sukarman',
    kecamatan: 'Mesuji Timur',
    tanggal: '2026-05-28',
    isi: 'Jalan penghubung Desa Tanjung Mas Makmur menuju pasar kecamatan rusak parah dan berlumpur saat hujan, menghambat petani membawa hasil panen.',
    kategori: 'Infrastruktur',
    sentimen: 'negatif',
    prioritas: 'tinggi',
    status: 'baru',
  },
  {
    id: 'ASP-2026-0141',
    nama: 'Kelompok Tani Sumber Makmur',
    kecamatan: 'Rawajitu Utara',
    tanggal: '2026-05-27',
    isi: 'Mohon bantuan pupuk subsidi dan perbaikan saluran irigasi tersier agar produktivitas padi meningkat menjelang musim tanam.',
    kategori: 'Pertanian & Perkebunan',
    sentimen: 'netral',
    prioritas: 'tinggi',
    status: 'diproses',
  },
  {
    id: 'ASP-2026-0140',
    nama: 'Ibu Wahyuni',
    kecamatan: 'Simpang Pematang',
    tanggal: '2026-05-26',
    isi: 'Puskesmas kekurangan dokter umum, warga harus dirujuk jauh ke kabupaten lain untuk pemeriksaan rutin.',
    kategori: 'Kesehatan',
    sentimen: 'negatif',
    prioritas: 'tinggi',
    status: 'diproses',
  },
  {
    id: 'ASP-2026-0139',
    nama: 'Karang Taruna Way Serdang',
    kecamatan: 'Way Serdang',
    tanggal: '2026-05-24',
    isi: 'Apresiasi atas program pelatihan UMKM digital kemarin, mohon dilanjutkan dengan bantuan akses permodalan untuk pemuda.',
    kategori: 'Ekonomi & UMKM',
    sentimen: 'positif',
    prioritas: 'sedang',
    status: 'selesai',
  },
  {
    id: 'ASP-2026-0138',
    nama: 'Hendra Gunawan',
    kecamatan: 'Panca Jaya',
    tanggal: '2026-05-22',
    isi: 'Banyak ruang kelas SD yang atapnya bocor dan kekurangan meja kursi, mengganggu kegiatan belajar mengajar.',
    kategori: 'Pendidikan',
    sentimen: 'negatif',
    prioritas: 'sedang',
    status: 'baru',
  },
  {
    id: 'ASP-2026-0137',
    nama: 'Forum Warga Tanjung Raya',
    kecamatan: 'Tanjung Raya',
    tanggal: '2026-05-20',
    isi: 'Sampah menumpuk di sekitar pasar dan belum ada jadwal pengangkutan rutin, menimbulkan bau dan potensi penyakit.',
    kategori: 'Lingkungan',
    sentimen: 'negatif',
    prioritas: 'sedang',
    status: 'baru',
  },
];

export const rapatSeed: Rapat[] = [
  {
    id: 'RPT-001',
    judul: 'Rapat Paripurna Pembahasan APBD Perubahan 2026',
    tanggal: '2026-06-03',
    waktu: '09.00 WIB',
    lokasi: 'Ruang Rapat Paripurna DPRD Mesuji',
    komisi: 'Gabungan Komisi',
    status: 'terjadwal',
  },
  {
    id: 'RPT-002',
    judul: 'Rapat Kerja Komisi C dengan Dinas PUPR',
    tanggal: '2026-06-05',
    waktu: '13.30 WIB',
    lokasi: 'Ruang Komisi C',
    komisi: 'Komisi C — Pembangunan',
    status: 'terjadwal',
  },
  {
    id: 'RPT-003',
    judul: 'Rapat Dengar Pendapat Petani & Dinas Pertanian',
    tanggal: '2026-05-28',
    waktu: '10.00 WIB',
    lokasi: 'Aula Kantor DPRD',
    komisi: 'Komisi B — Ekonomi & Keuangan',
    status: 'selesai',
  },
];

export const produkHukumSeed: ProdukHukum[] = [
  {
    id: 'PH-001',
    nomor: 'Perda No. 3 Tahun 2025',
    judul: 'Pengelolaan Sampah dan Kebersihan Lingkungan',
    jenis: 'Perda',
    tahun: 2025,
    status: 'berlaku',
    ringkasan:
      'Mengatur tata kelola persampahan dari sumber hingga pemrosesan akhir, kewajiban pemerintah daerah, peran serta masyarakat, serta sanksi administratif.',
  },
  {
    id: 'PH-002',
    nomor: 'Raperda 2026',
    judul: 'Perlindungan dan Pemberdayaan Petani',
    jenis: 'Raperda',
    tahun: 2026,
    status: 'pembahasan',
    ringkasan:
      'Rancangan peraturan untuk menjamin ketersediaan sarana produksi, asuransi pertanian, akses permodalan, serta perlindungan harga komoditas bagi petani Mesuji.',
  },
  {
    id: 'PH-003',
    nomor: 'Perda No. 1 Tahun 2024',
    judul: 'Penyelenggaraan Pelayanan Kesehatan Daerah',
    jenis: 'Perda',
    tahun: 2024,
    status: 'berlaku',
    ringkasan:
      'Menjamin akses pelayanan kesehatan dasar, standar puskesmas, pemenuhan tenaga medis, dan pembiayaan kesehatan masyarakat kurang mampu.',
  },
  {
    id: 'PH-004',
    nomor: 'Perda No. 5 Tahun 2023',
    judul: 'Penyelenggaraan Pendidikan',
    jenis: 'Perda',
    tahun: 2023,
    status: 'berlaku',
    ringkasan:
      'Mengatur wajib belajar, standar sarana prasarana sekolah, pendidikan inklusif, serta tata kelola dana pendidikan daerah.',
  },
];

export const anggotaSeed: Anggota[] = [
  { id: 'A1', nama: 'H. Ridho Pratama, S.E.', fraksi: 'Fraksi PDI Perjuangan', jabatan: 'Ketua DPRD', komisi: 'Pimpinan', dapil: 'Dapil 1' },
  { id: 'A2', nama: 'Dra. Siti Aminah', fraksi: 'Fraksi Golkar', jabatan: 'Wakil Ketua I', komisi: 'Pimpinan', dapil: 'Dapil 2' },
  { id: 'A3', nama: 'Bambang Sutrisno, S.H.', fraksi: 'Fraksi Gerindra', jabatan: 'Wakil Ketua II', komisi: 'Pimpinan', dapil: 'Dapil 3' },
  { id: 'A4', nama: 'Eko Purwanto', fraksi: 'Fraksi NasDem', jabatan: 'Ketua Komisi C', komisi: 'Komisi C — Pembangunan', dapil: 'Dapil 1' },
  { id: 'A5', nama: 'Hj. Nurlaila, S.Pd.', fraksi: 'Fraksi PKB', jabatan: 'Ketua Komisi D', komisi: 'Komisi D — Kesejahteraan Rakyat', dapil: 'Dapil 2' },
  { id: 'A6', nama: 'Agus Salim, S.T.', fraksi: 'Fraksi Demokrat-PAN', jabatan: 'Anggota', komisi: 'Komisi B — Ekonomi & Keuangan', dapil: 'Dapil 3' },
];

// Tren aspirasi 6 bulan terakhir (masuk vs ditindaklanjuti)
export const trenAspirasi = [
  { bulan: 'Des', masuk: 38, selesai: 30 },
  { bulan: 'Jan', masuk: 52, selesai: 41 },
  { bulan: 'Feb', masuk: 47, selesai: 44 },
  { bulan: 'Mar', masuk: 61, selesai: 50 },
  { bulan: 'Apr', masuk: 58, selesai: 55 },
  { bulan: 'Mei', masuk: 73, selesai: 60 },
];
