import type { Metadata } from 'next';
import { MomentosGallery } from '@/components/MomentosGallery';

export const metadata: Metadata = {
  title: 'Momentos Extraescolares – Instituto Médio Ben Carson | Luanda',
  description:
    'Cultura, desporto, convívio e celebração no Instituto Médio Privado Ben Carson. A vida da nossa comunidade educativa para além da sala de aula.',
  alternates: { canonical: '/momentos-extraescolares' },
};

export default function MomentosPage() {
  return <MomentosGallery />;
}
