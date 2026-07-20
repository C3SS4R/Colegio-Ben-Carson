'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';
import { historia, timeline } from '@/lib/data';
import { scaleIn, fadeUp, viewport } from '@/lib/motion';

export function Historia() {
  return (
    <section id="historia" className="scroll-mt-24 bg-paper py-20 sm:py-24">
      <div className="container-x grid gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <SectionHeading eyebrow="A nossa trajetória" title="História" />
          <div className="mt-6 space-y-4">
            {historia.map((p, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <p className="text-[0.98rem] leading-relaxed text-slate">
                  {p.includes('Ben Carson representa') ? (
                    <>O nome <strong className="text-navy-800">Ben Carson</strong> representa a valorização da perseverança, da excelência e da superação — princípios que inspiram diariamente a comunidade educativa na formação de cidadãos íntegros, competentes e preparados para liderar o futuro.</>
                  ) : p}
                </p>
              </Reveal>
            ))}
          </div>
          <Reveal className="relative mt-8 aspect-[16/10] overflow-hidden rounded-2xl shadow-card" variants={scaleIn}>
            <Image src="/img/grupo-institucional.jpg" alt="Alunos do Instituto Ben Carson em evento institucional" fill className="object-cover" sizes="(max-width:1024px) 100vw, 45vw" />
            <span className="absolute bottom-3 left-3 rounded-full bg-navy-900/70 px-3 py-1 font-cond text-[0.7rem] font-bold uppercase tracking-wide text-white backdrop-blur">A comunidade Ben Carson</span>
          </Reveal>
        </div>

        {/* timeline — linha ascendente */}
        <div className="lg:pt-16">
          <div className="relative pl-8">
            <div className="absolute bottom-1 left-[6px] top-1 w-0.5 bg-gradient-to-t from-orange-500/20 to-orange-500" />
            {timeline.map((t, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={viewport}
                transition={{ delay: i * 0.1 }}
                className="relative pb-9 pl-6"
              >
                <span className="absolute -left-[7px] top-1 h-4 w-4 rounded-full border-4 border-paper bg-orange-500 shadow-[0_0_0_3px_rgba(249,115,22,0.2)]" />
                <div className="font-cond text-xl font-extrabold tracking-wide text-navy-800">{t.year}</div>
                <h4 className="mt-1 text-[1rem] font-bold text-navy-800">{t.title}</h4>
                <p className="mt-1 text-[0.9rem] leading-relaxed text-slate">{t.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
