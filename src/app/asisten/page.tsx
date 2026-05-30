import type { Metadata } from 'next';
import { AsistenClient } from './AsistenClient';

export const metadata: Metadata = {
  title: 'Asisten AI — SiCerdas DPRD Mesuji',
  description:
    'Asisten AI kedewanan untuk menyusun dokumen, menjelaskan regulasi, dan menelaah aspirasi masyarakat Kabupaten Mesuji.',
};

export default function Page() {
  return <AsistenClient />;
}
