'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { leader, team, docentes } from '@/lib/data';
import { fadeUp, scaleIn, viewport } from '@/lib/motion';

function PersonCard({ name, role, photo, big }: { name: string; role: string; photo: string; big?: boolean }) {
  return (
    <motion.div
      variants={scaleIn}
      className="group rounded-2xl border border-black/5 bg-white p-6 text-center shadow-card transition-transform hover:-translate-y-1.5"
    >
      <div className={`relative mx-auto overflow-hidden rounded-full ring-4 ring-orange-500/70 ${big ? 'h-36 w-36' : 'h-28 w-28'}`}>
        <Image src={photo} alt={`${name} — ${role}`} fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="150px" />
      </div>
      <div className="mt-4 text-[1rem] font-bold text-navy-800">{name}</div>
      <div className="mt-0.5 font-cond text-[0.8rem] font-bold uppercase tracking-wide text-orange-600">{role}</div>
    </motion.div>
  );
}

export function Team() {
  return (
    <section id="equipa" className="scroll-mt-24 bg-paper py-20 sm:py-24">
      <div className="container-x">
        <SectionHeading center eyebrow="Quem nos lidera" title="A nossa Equipa" />

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="mx-auto mt-10 max-w-md"
        >
          <div className="rounded-2xl border border-black/5 bg-white p-8 text-center shadow-card-lg">
            <div className="relative mx-auto h-40 w-40 overflow-hidden rounded-full ring-4 ring-orange-500">
              <Image src={leader.photo} alt={`${leader.name} — ${leader.role}`} fill className="object-cover" sizes="160px" />
            </div>
            <div className="mt-4 text-xl font-bold text-navy-800">{leader.name}</div>
            <div className="mt-0.5 font-cond text-sm font-bold uppercase tracking-wide text-orange-600">{leader.role}</div>
            <p className="mt-3 text-[0.88rem] leading-relaxed text-slate">{leader.bio}</p>
          </div>
        </motion.div>

        <motion.div
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {team.map((m) => (
            <PersonCard key={m.name} {...m} />
          ))}
        </motion.div>

        {/* docentes */}
        <div id="docentes" className="scroll-mt-24 pt-20">
          <SectionHeading center eyebrow="Quem ensina" title="Corpo Docente" />
          <motion.div
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.09 } } }}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            className="mx-auto mt-10 grid max-w-3xl gap-5 sm:grid-cols-3"
          >
            {docentes.map((d) => (
              <PersonCard key={d.name} {...d} big />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
