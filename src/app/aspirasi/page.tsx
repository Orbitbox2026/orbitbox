import type { Metadata } from 'next';
import { AspirasiClient } from './AspirasiClient';

export const metadata: Metadata = {
  title: 'Aspirasi Masyarakat — SiCerdas DPRD Mesuji',
  description:
    'Catat dan analisis aspirasi masyarakat Kabupaten Mesuji dengan AI: kategori, sentimen, prioritas, dan rekomendasi tindak lanjut.',
};

export default function Page() {
  return <AspirasiClient />;
}
