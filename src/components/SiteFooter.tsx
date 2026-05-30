import Link from 'next/link';

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div>
          <h4>SiCerdas DPRD Mesuji</h4>
          <p>
            Platform kecerdasan buatan untuk mendukung kinerja Dewan Perwakilan Rakyat Daerah
            Kabupaten Mesuji, Provinsi Lampung dalam menjalankan fungsi legislasi, anggaran, dan
            pengawasan serta pelayanan aspirasi masyarakat.
          </p>
        </div>
        <div>
          <h4>Layanan</h4>
          <Link href="/asisten">Asisten AI Kedewanan</Link>
          <Link href="/aspirasi">Analisis Aspirasi</Link>
          <Link href="/notulen">Notulen Otomatis</Link>
          <Link href="/produk-hukum">Produk Hukum Daerah</Link>
        </div>
        <div>
          <h4>Kontak</h4>
          <p>Jl. Zebra No. 1, Kompleks Perkantoran Pemkab</p>
          <p>Brabasan, Kec. Tanjung Raya, Mesuji</p>
          <p>Provinsi Lampung 34698</p>
          <p>setwan@mesujikab.go.id</p>
        </div>
      </div>
      <div className="footer-bottom">
        © 2026 Sekretariat DPRD Kabupaten Mesuji · Dibuat untuk digitalisasi & transparansi
        pelayanan publik.
      </div>
    </footer>
  );
}
