import type { Metadata } from 'next';
import { ProdukHukumClient } from './ProdukHukumClient';

export const metadata: Metadata = {
  title: 'Produk Hukum — SiCerdas DPRD Mesuji',
  description:
    'Repositori Perda dan Raperda Kabupaten Mesuji dengan pencarian dan tanya jawab regulasi berbasis AI.',
};

export default function Page() {
  return <ProdukHukumClient />;
}
