'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import { Check, ArrowUpRight } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Icon, type IconName } from '@/components/Icon';
import { courses } from '@/lib/data';
import { EASE } from '@/lib/motion';
import { cn } from '@/lib/utils';

export function Courses() {
  const [active, setActive] = useState(0);
  const c = courses[active];

  return (
    <section id="cursos" className="scroll-mt-24 bg-paper py-20 sm:py-24">
      <div className="container-x">
        <SectionHeading
          eyebrow="O que ensinamos"
          title="Cursos Disponíveis"
          desc="Formação técnica de 4 anos (10ª à 13ª classe) nas áreas de Administração e Gestão."
        />

        {/* tabs */}
        <div className="mt-9 flex flex-wrap gap-2 rounded-2xl border border-black/5 bg-white p-2 shadow-card">
          {courses.map((course, i) => (
            <button
              key={course.id}
              onClick={() => setActive(i)}
              className={cn(
                'relative flex flex-1 items-center justify-center gap-2 rounded-xl px-4 py-3 text-[0.86rem] font-semibold transition-colors',
                active === i ? 'text-white' : 'text-navy-800 hover:bg-paper',
              )}
              style={{ minWidth: 150 }}
            >
              {active === i && (
                <motion.span
                  layoutId="courseTab"
                  className="absolute inset-0 -z-0 rounded-xl bg-gradient-to-br from-royal-600 to-royal-500 shadow-[0_8px_22px_rgba(27,68,200,0.4)]"
                  transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                />
              )}
              <span className="relative z-10 flex items-center gap-2">
                <span className={cn('font-cond text-xs font-extrabold', active === i ? 'text-white/60' : 'text-orange-500/60')}>{course.n}</span>
                <Icon name={course.icon as IconName} className="h-[18px] w-[18px]" />
                <span className="hidden sm:inline">{course.title}</span>
              </span>
            </button>
          ))}
        </div>

        {/* card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={c.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.45, ease: EASE }}
            className="mt-7 overflow-hidden rounded-3xl shadow-card-lg"
          >
            {/* header navy */}
            <div className="relative overflow-hidden bg-gradient-to-br from-navy-900 via-navy-800 to-navy-700 p-8 text-white sm:p-10">
              <div className="pointer-events-none absolute -right-8 top-1/2 -translate-y-1/2 opacity-[0.08]">
                <Icon name={c.icon as IconName} className="h-56 w-56" strokeWidth={0.8} />
              </div>
              <div className="relative">
                <div className="font-cond text-sm font-extrabold uppercase tracking-[0.3em] text-orange-400">Curso {c.n}</div>
                <h3 className="mt-1 font-display text-[clamp(2rem,4.5vw,3rem)] font-extrabold leading-none">{c.title}</h3>
                <p className="mt-3 text-[0.95rem] text-white/80">
                  Perfil de saída: <strong className="text-white">{c.profile}</strong>
                </p>
                <div className="mt-5 flex flex-wrap gap-2.5">
                  {c.chips.map((chip) => (
                    <span key={chip} className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 text-[0.78rem] font-semibold">
                      {chip}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* body */}
            <div className="grid gap-8 bg-white p-8 sm:p-10 lg:grid-cols-[1.25fr_1fr]">
              <div>
                <p className="eyebrow flex items-center gap-3 text-[0.8rem]">
                  Competências que desenvolve
                  <span className="h-px flex-1 bg-gradient-to-r from-orange-500/40 to-transparent" />
                </p>
                <ul className="mt-4 grid gap-2.5">
                  {c.skills.map((s) => (
                    <li key={s} className="flex items-start gap-3 text-[0.9rem] leading-snug text-navy-800/85">
                      <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-orange-500/12 text-orange-600">
                        <Check className="h-3.5 w-3.5" strokeWidth={3} />
                      </span>
                      {s}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <div className="relative aspect-[16/10] overflow-hidden rounded-2xl shadow-card">
                  <Image src={c.photo} alt={c.title} fill className="object-cover" sizes="(max-width:1024px) 100vw, 40vw" />
                </div>
                <p className="eyebrow mt-6 flex items-center gap-3 text-[0.8rem]">
                  Saídas profissionais
                  <span className="h-px flex-1 bg-gradient-to-r from-orange-500/40 to-transparent" />
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {c.outlets.map((o) => (
                    <span key={o} className="rounded-full border border-black/8 bg-paper px-3 py-1.5 text-[0.78rem] font-semibold text-navy-800 transition-all hover:-translate-y-0.5 hover:border-orange-500/50">
                      {o}
                    </span>
                  ))}
                </div>

                <div className="mt-6 rounded-2xl bg-gradient-to-br from-navy-800 to-navy-900 p-6">
                  <p className="font-display text-[1.02rem] font-semibold leading-snug text-white">{c.cta}</p>
                  <Link
                    href="/inscricoes"
                    className="group mt-4 inline-flex items-center gap-2 rounded-lg bg-grass-600 px-5 py-2.5 text-sm font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-grass-700"
                  >
                    Inscrever-se neste curso
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
