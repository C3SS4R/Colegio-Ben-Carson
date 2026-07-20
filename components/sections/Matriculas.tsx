'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { MessageCircle, Check, ArrowUpRight } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Counter } from '@/components/ui/Counter';
import { Icon, type IconName } from '@/components/Icon';
import { matriculaSteps, prices, fees, documents, site } from '@/lib/data';
import { fadeUp, viewport } from '@/lib/motion';
import { waLink } from '@/lib/utils';

export function Matriculas() {
  return (
    <section id="matriculas" className="scroll-mt-24 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 py-20 text-white sm:py-24">
      <div className="container-x">
        <SectionHeading dark eyebrow={`Ano Letivo ${site.schoolYear}`} title="Matrículas e Confirmações" desc="Garanta já o seu lugar. As vagas são limitadas." />

        {/* passos */}
        <p className="eyebrow mt-12">Como fazer a matrícula</p>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {matriculaSteps.map((s, i) => (
            <motion.div
              key={s.n}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={viewport}
              transition={{ delay: i * 0.1 }}
              className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-6"
            >
              <span className="absolute right-4 top-2 font-cond text-5xl font-black text-orange-500/20">{s.n}</span>
              <span className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-orange-500/15 text-orange-400">
                <Icon name={s.icon as IconName} className="h-6 w-6" />
              </span>
              <h4 className="relative mt-4 font-cond text-lg font-extrabold tracking-wide text-white">{s.title}</h4>
              <p className="relative mt-1.5 text-[0.86rem] leading-relaxed text-white/75">{s.text}</p>
            </motion.div>
          ))}
        </div>

        {/* propinas */}
        <p id="precos" className="eyebrow mt-14 scroll-mt-24">Propinas mensais</p>
        <div className="mt-4 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {prices.map((p, i) => (
            <motion.div
              key={p.classe}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={viewport}
              transition={{ delay: i * 0.08 }}
              className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 text-center transition-all hover:-translate-y-1.5 hover:border-orange-500/50"
            >
              <div className="font-cond text-[0.8rem] font-bold uppercase tracking-[0.12em] text-orange-400">{p.classe}</div>
              <div className="mt-1.5 font-cond text-[clamp(2rem,5vw,2.7rem)] font-black leading-none text-white">
                <Counter to={p.value} />
                <span className="align-super text-[0.9rem] font-bold text-orange-400"> Kz</span>
              </div>
              <div className="mt-1 text-[0.72rem] uppercase tracking-wide text-white/55">por mês</div>
            </motion.div>
          ))}
        </div>

        {/* taxas + documentos */}
        <div className="mt-8 grid gap-4 lg:grid-cols-2">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={viewport} className="rounded-2xl border border-white/10 bg-white/[0.04] p-7">
            <h4 className="mb-4 flex items-center gap-2 font-cond text-lg font-extrabold uppercase tracking-wide text-orange-400">Taxas &amp; Uniformes</h4>
            <ul>
              {fees.map((f) => (
                <li key={f.item} className="flex items-center justify-between border-b border-white/8 py-2.5 text-[0.9rem] last:border-0">
                  <span className="text-white/72">{f.item}</span>
                  <span className="font-bold text-white">{f.value}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={viewport} className="rounded-2xl border border-white/10 bg-white/[0.04] p-7">
            <h4 className="mb-4 flex items-center gap-2 font-cond text-lg font-extrabold uppercase tracking-wide text-orange-400">Documentos Necessários</h4>
            <ul className="space-y-3">
              {documents.map((d) => (
                <li key={d} className="flex items-center gap-3 text-[0.9rem] text-white/82">
                  <Check className="h-4 w-4 shrink-0 text-grass-500" strokeWidth={3} />
                  {d}
                </li>
              ))}
            </ul>
            <div className="mt-5 rounded-xl border-l-2 border-orange-500 bg-orange-500/10 p-4 text-[0.85rem] leading-relaxed text-orange-200">
              <strong className="text-white">Endereço:</strong> {site.address}
            </div>
          </motion.div>
        </div>

        {/* ajuda whatsapp */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={viewport} className="mt-4 flex flex-wrap items-center justify-between gap-5 rounded-2xl border border-white/10 bg-white/[0.04] p-7">
          <div className="flex items-center gap-4">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-grass-500/15 text-grass-500">
              <MessageCircle className="h-6 w-6" />
            </span>
            <div>
              <h4 className="font-cond text-lg font-extrabold tracking-wide text-white">Precisa de ajuda com a matrícula?</h4>
              <p className="text-[0.85rem] text-white/70">Fale com a nossa equipa agora mesmo pelo WhatsApp.</p>
            </div>
          </div>
          <a href={waLink('Olá! Preciso de ajuda com a matrícula no Instituto Ben Carson.')} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-grass-500 px-6 py-3 font-bold text-[#05391c] shadow-[0_6px_20px_rgba(37,211,102,0.35)] transition-all hover:-translate-y-0.5">
            <MessageCircle className="h-5 w-5" /> Falar no WhatsApp
          </a>
        </motion.div>

        <div className="mt-10 text-center">
          <Link href="/inscricoes" className="group inline-flex items-center gap-2 rounded-lg bg-grass-600 px-8 py-4 text-[0.95rem] font-bold text-white shadow-[0_10px_30px_rgba(22,163,74,0.4)] transition-all hover:-translate-y-0.5 hover:bg-grass-700">
            Inscrever-se Agora
            <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
