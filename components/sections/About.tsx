'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Eye, Target } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal, RevealGroup } from '@/components/ui/Reveal';
import { Icon, type IconName } from '@/components/Icon';
import { values, visionMission, pillars } from '@/lib/data';
import { fadeUp, scaleIn, viewport } from '@/lib/motion';

export function About() {
  return (
    <section id="sobre" className="scroll-mt-24 bg-white py-20 sm:py-24">
      <div className="container-x">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* coluna esquerda */}
          <div>
            <SectionHeading
              eyebrow="Quem somos"
              title="Uma escola comprometida com o futuro de Angola"
              desc="O Instituto Médio Privado de Administração e Gestão Ben Carson é uma instituição de ensino técnico localizada em Luanda, dedicada a formar cidadãos e profissionais qualificados, disciplinados, éticos e inovadores."
            />

            <Reveal className="relative mt-8 aspect-[16/10] overflow-hidden rounded-2xl shadow-card" variants={scaleIn}>
              <Image src="/img/quem-somos.jpg" alt="Alunas do Instituto Ben Carson no espaço escolar" fill className="object-cover" sizes="(max-width:1024px) 100vw, 45vw" />
              <span className="absolute bottom-3 left-3 rounded-full bg-navy-900/70 px-3 py-1 font-cond text-[0.7rem] font-bold uppercase tracking-wide text-white backdrop-blur">
                Comunidade Ben Carson
              </span>
            </Reveal>

            <p className="eyebrow mt-10 text-xs sm:text-sm">Os nossos valores</p>
            <RevealGroup className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3" staggerChildren={0.05}>
              {values.map((v) => (
                <motion.div
                  key={v.name}
                  variants={scaleIn}
                  className="group flex flex-col items-center gap-2 rounded-xl border border-black/5 bg-paper p-4 text-center transition-all hover:-translate-y-1 hover:border-orange-500/40 hover:shadow-card"
                >
                  <Icon name={v.icon as IconName} className="h-7 w-7 text-navy-700 transition-colors group-hover:text-orange-500" />
                  <span className="text-[0.72rem] font-bold uppercase leading-tight tracking-wide text-navy-800">{v.name}</span>
                </motion.div>
              ))}
            </RevealGroup>
          </div>

          {/* coluna direita — visão / missão */}
          <div className="flex flex-col justify-center gap-5">
            {[
              { icon: Eye, title: 'Visão', text: visionMission.vision },
              { icon: Target, title: 'Missão', text: visionMission.mission },
            ].map((c, i) => (
              <motion.div
                key={c.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={viewport}
                transition={{ delay: i * 0.1 }}
                className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-navy-800 to-navy-900 p-8 text-white"
              >
                <div className="pointer-events-none absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-orange-500/15 blur-2xl" />
                <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-orange-500/15 text-orange-400">
                  <c.icon className="h-6 w-6" />
                </span>
                <h3 className="font-cond text-2xl font-extrabold tracking-wide text-orange-400">{c.title}</h3>
                <p className="mt-3 text-[0.95rem] leading-relaxed text-white/82">{c.text}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* pilares */}
        <RevealGroup className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p) => (
            <motion.div
              key={p.name}
              variants={fadeUp}
              className="rounded-2xl bg-gradient-to-b from-navy-800 to-navy-900 p-7 text-center text-white transition-transform hover:-translate-y-1.5"
            >
              <Icon name={p.icon as IconName} className="mx-auto h-9 w-9 text-orange-400" />
              <div className="mt-3 font-cond text-base font-extrabold uppercase tracking-wide text-orange-400">{p.name}</div>
              <p className="mt-2 text-[0.85rem] leading-relaxed text-white/78">{p.text}</p>
            </motion.div>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
