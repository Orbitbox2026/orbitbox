import type { Metadata } from 'next';
import { AnggotaClient } from './AnggotaClient';

export const metadata: Metadata = {
  title: 'Anggota Dewan — SiCerdas DPRD Mesuji',
  description:
    'Direktori anggota DPRD Kabupaten Mesuji beserta fraksi, komisi, dan daerah pemilihan.',
};

export default function Page() {
  return <AnggotaClient />;
}
