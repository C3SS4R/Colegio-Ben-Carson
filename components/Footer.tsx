import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, Globe, MapPin } from 'lucide-react';
import { site } from '@/lib/data';

const navLinks = [
  { label: 'O Instituto', href: '/#sobre' },
  { label: 'Cursos', href: '/#cursos' },
  { label: 'Inscrições', href: '/inscricoes' },
  { label: 'Atualidade', href: '/#atualidade' },
  { label: 'Fale Connosco', href: '/#contactos' },
];

export function Footer() {
  return (
    <footer className="bg-navy-900 pt-16 text-white/65">
      <div className="container-x">
        {/* fio ascendente laranja */}
        <div className="mb-12 h-px w-full bg-gradient-to-r from-transparent via-orange-500/40 to-transparent" />
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="relative h-11 w-11 overflow-hidden rounded-full ring-2 ring-royal-500/60">
                <Image src="/img/logo.jpg" alt="Instituto Ben Carson" fill className="object-cover" />
              </span>
              <span className="leading-tight">
                <span className="block font-cond text-base font-extrabold text-white">BEN CARSON</span>
                <span className="block text-[0.58rem] uppercase tracking-[0.14em] text-orange-400">Formação técnica de excelência</span>
              </span>
            </div>
            <p className="max-w-sm text-[0.86rem] leading-relaxed">
              Instituto Médio Privado de Administração e Gestão em Luanda. Formamos técnicos qualificados,
              disciplinados e preparados para o mercado de trabalho e o ensino superior.
            </p>
            <p className="mt-4 font-cond text-sm font-bold uppercase tracking-wide text-orange-400">
              {site.motto}
            </p>
          </div>

          <div>
            <h4 className="mb-4 font-cond text-sm font-bold uppercase tracking-[0.18em] text-orange-400">Navegação</h4>
            <ul className="space-y-2.5">
              {navLinks.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="text-[0.85rem] transition-colors hover:text-orange-300">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-cond text-sm font-bold uppercase tracking-[0.18em] text-orange-400">Contactos</h4>
            <ul className="space-y-3 text-[0.85rem]">
              <li className="flex items-start gap-2.5"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-orange-400" /><span>{site.address}</span></li>
              <li className="flex items-center gap-2.5"><Phone className="h-4 w-4 shrink-0 text-orange-400" /><a href={`tel:${site.phoneMain}`} className="hover:text-orange-300">{site.phoneMainDisplay}</a></li>
              <li className="flex items-center gap-2.5"><Mail className="h-4 w-4 shrink-0 text-orange-400" /><a href={`mailto:${site.email}`} className="hover:text-orange-300">{site.email}</a></li>
              <li className="flex items-center gap-2.5"><Globe className="h-4 w-4 shrink-0 text-orange-400" /><span>{site.website}</span></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 py-6 text-center text-[0.78rem] text-white/40">
          © 2026 {site.name}. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
