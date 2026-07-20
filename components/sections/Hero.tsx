'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight, ChevronDown } from 'lucide-react';
import { site } from '@/lib/data';
import { EASE } from '@/lib/motion';

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.75, ease: EASE } },
};

export function Hero() {
  return (
    <section className="relative flex min-h-[calc(100svh-40px)] items-center overflow-hidden bg-navy-900">
      {/* fundo — gradiente estático azul + brilho subtil */}
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(135deg,#071040 0%,#0B1E5B 52%,#12297A 100%)' }}
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-80"
        style={{ background: 'radial-gradient(ellipse 70% 55% at 78% 30%, rgba(44,91,232,0.35), transparent 60%)' }}
      />
      {/* assinatura ascensão — diagonal laranja subtil */}
      <div
        className="pointer-events-none absolute -right-40 bottom-0 h-[120%] w-[70%] opacity-[0.07]"
        style={{ background: 'linear-gradient(38deg, transparent 46%, #f97316 47%, #f97316 48%, transparent 49%)' }}
      />

      <div className="container-x relative z-10 grid items-center gap-10 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14 lg:py-20">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.div variants={item} className="mb-6 inline-flex items-center gap-2 rounded-md border border-white/20 bg-white/[0.07] px-4 py-1.5 font-cond text-[0.8rem] font-bold uppercase tracking-[0.1em] text-white">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-grass-500 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-grass-500" />
            </span>
            Inscrições Abertas · Ano Letivo {site.schoolYear}
          </motion.div>

          <motion.h1 variants={item} className="font-display text-[clamp(2.6rem,6vw,4.6rem)] font-extrabold leading-[1.04] tracking-[-0.03em] text-white">
            Ensino técnico
            <br />
            de excelência em{' '}
            <span className="relative inline-block text-orange-500">
              Administração
              <br className="hidden sm:block" /> e Gestão
              <motion.span
                className="absolute -bottom-1 left-0 h-[3px] w-full rounded-full bg-orange-500/70"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.9, duration: 0.7, ease: EASE }}
                style={{ transformOrigin: 'left' }}
              />
            </span>
          </motion.h1>

          <motion.p variants={item} className="mt-6 max-w-xl text-[1.05rem] leading-relaxed text-white/85">
            No Instituto Médio Privado Ben Carson, em Luanda, formamos técnicos qualificados —
            preparados para entrar no mercado de trabalho ou seguir para o ensino superior.
          </motion.p>

          <motion.div variants={item} className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/inscricoes"
              className="group inline-flex items-center gap-2 rounded-lg bg-grass-600 px-7 py-3.5 text-[0.95rem] font-bold text-white shadow-[0_8px_24px_rgba(22,163,74,0.4)] transition-all hover:-translate-y-0.5 hover:bg-grass-700"
            >
              Fazer Pré-Inscrição
              <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
            <Link
              href="/#cursos"
              className="inline-flex items-center gap-2 rounded-lg border-[1.5px] border-white/35 px-7 py-3.5 text-[0.95rem] font-medium text-white transition-all hover:border-white hover:bg-white/10"
            >
              Conhecer os Cursos
            </Link>
          </motion.div>

          <motion.div variants={item} className="mt-12 flex flex-wrap gap-8">
            {[
              { num: '4', label: 'Cursos técnicos' },
              { num: '10ª–13ª', label: '4 anos de formação' },
              { num: '2023', label: 'Fundado em Luanda' },
            ].map((s) => (
              <div key={s.label}>
                <div className="font-cond text-3xl font-extrabold text-orange-500">{s.num}</div>
                <div className="mt-0.5 text-[0.72rem] uppercase tracking-[0.08em] text-white/55">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* media */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.35, duration: 0.85, ease: EASE }}
        >
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-white/15 shadow-[0_30px_70px_rgba(0,0,0,0.5)]">
            <Image src="/img/hero-maps.jpg" alt="Complexo Escolar Ben Carson, Camama, Luanda" fill className="object-cover" priority sizes="(max-width:1024px) 100vw, 45vw" />
            <span className="absolute bottom-4 left-4 rounded-full bg-navy-900/70 px-3.5 py-1.5 font-cond text-[0.8rem] font-bold uppercase tracking-wide text-white backdrop-blur">
              Camama · Luanda
            </span>
          </div>
          <div className="absolute -bottom-6 -right-3 w-36 rotate-3 overflow-hidden rounded-2xl border-[3px] border-white bg-white shadow-[0_18px_40px_rgba(0,0,0,0.45)] sm:w-40">
            <div className="relative h-36 w-full sm:h-40">
              <Image src="/img/aluna-sorriso.jpg" alt="Aluna do Instituto Ben Carson" fill className="object-cover" sizes="160px" />
            </div>
            <p className="py-1.5 text-center font-cond text-[0.6rem] font-bold uppercase tracking-wide text-navy-800">
              Os nossos alunos
            </p>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-5 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-1 text-[0.66rem] uppercase tracking-[0.2em] text-white/50">
        Rolar
        <motion.span animate={{ y: [0, 6, 0] }} transition={{ duration: 1.8, repeat: Infinity }}>
          <ChevronDown className="h-5 w-5" />
        </motion.span>
      </div>
    </section>
  );
}
