import type { Metadata } from 'next';
import { InscricaoLanding } from '@/components/InscricaoLanding';

export const metadata: Metadata = {
  title: 'Pré-Inscrição 2026/2027 – Instituto Médio Ben Carson | Luanda',
  description:
    'Faça a sua pré-inscrição no Instituto Médio Privado Ben Carson. Cursos técnicos (10ª–13ª) em Finanças, Informática de Gestão, Contabilidade e Gestão Empresarial. Vagas limitadas.',
  alternates: { canonical: '/inscricoes' },
};

export default function InscricoesPage() {
  return <InscricaoLanding />;
}
