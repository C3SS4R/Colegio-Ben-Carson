'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { galleryHome } from '@/lib/data';
import { scaleIn, viewport } from '@/lib/motion';

export function Gallery() {
  return (
    <section id="galeria" className="scroll-mt-24 bg-white py-20 sm:py-24">
      <div className="container-x">
        <SectionHeading eyebrow="Momentos" title="Vida no Instituto" desc="Aulas, trabalho prático, visitas de estudo e o dia a dia da nossa comunidade educativa." />

        <motion.div
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.06 } } }}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="mosaic mt-10"
        >
          {galleryHome.map((g, i) => (
            <motion.figure key={i} variants={scaleIn} className={`group relative m-0 overflow-hidden rounded-2xl shadow-card ${g.span}`}>
              <Image src={g.src} alt={g.alt} fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="(max-width:900px) 50vw, 25vw" />
            </motion.figure>
          ))}
        </motion.div>

        <div className="mt-10 text-center">
          <Link href="/momentos-extraescolares" className="group inline-flex items-center gap-2 rounded-lg bg-royal-600 px-7 py-3.5 text-[0.95rem] font-bold text-white shadow-[0_8px_24px_rgba(27,68,200,0.3)] transition-all hover:-translate-y-0.5 hover:bg-royal-500">
            Ver momentos extraescolares
            <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
