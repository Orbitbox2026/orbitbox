import type { Metadata } from 'next';
import { NotulenClient } from './NotulenClient';

export const metadata: Metadata = {
  title: 'Notulen & Agenda — SiCerdas DPRD Mesuji',
  description:
    'Kelola jadwal rapat dewan dan susun notulen rapat resmi secara otomatis dengan AI.',
};

export default function Page() {
  return <NotulenClient />;
}
