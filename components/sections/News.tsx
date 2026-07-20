'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { news } from '@/lib/data';
import { fadeUp, viewport } from '@/lib/motion';

export function News() {
  return (
    <section id="atualidade" className="scroll-mt-24 bg-white py-20 sm:py-24">
      <div className="container-x">
        <SectionHeading eyebrow="Fique a par" title="Atualidade" desc="Visitas de estudo, atividades e a vida da comunidade Ben Carson." />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {news.map((n, i) => (
            <motion.article
              key={n.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={viewport}
              transition={{ delay: i * 0.1 }}
              className="group flex flex-col overflow-hidden rounded-2xl border border-black/5 bg-white shadow-card transition-transform hover:-translate-y-1.5"
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                <Image src={n.photo} alt={n.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="(max-width:768px) 100vw, 33vw" />
                <span className="absolute left-3 top-3 rounded-full bg-orange-500 px-3 py-1 font-cond text-[0.7rem] font-bold uppercase tracking-wide text-white">{n.tag}</span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h4 className="text-[1.05rem] font-bold leading-snug text-navy-800">{n.title}</h4>
                <p className="mt-2 flex-1 text-[0.88rem] leading-relaxed text-slate">{n.text}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
