'use client';

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Icon, type IconName } from '@/components/Icon';
import { grade } from '@/lib/data';
import { fadeUp, viewport } from '@/lib/motion';

export function Grade() {
  return (
    <section id="grade" className="scroll-mt-24 bg-white py-20 sm:py-24">
      <div className="container-x">
        <SectionHeading eyebrow="O plano de estudos" title="Grade Curricular" desc="Três eixos de formação que combinam base académica sólida, competência técnica e cidadania." />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {grade.map((g, i) => (
            <motion.div
              key={g.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={viewport}
              transition={{ delay: i * 0.1 }}
              className="rounded-2xl border border-black/5 bg-paper p-7 shadow-card"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-royal-600/10 text-royal-600">
                  <Icon name={g.icon as IconName} className="h-5 w-5" />
                </span>
                <h4 className="border-b-2 border-orange-500 pb-1 font-cond text-lg font-extrabold uppercase tracking-wide text-navy-800">{g.title}</h4>
              </div>
              <ul className="mt-4 space-y-2.5">
                {g.items.map((it) => (
                  <li key={it} className="flex items-center gap-2.5 text-[0.9rem] text-navy-800/85">
                    <Check className="h-4 w-4 shrink-0 text-orange-500" strokeWidth={3} />
                    {it}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
