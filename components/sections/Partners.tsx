'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { partners } from '@/lib/data';
import { scaleIn, viewport } from '@/lib/motion';

export function Partners() {
  return (
    <section id="parceiros" className="scroll-mt-24 bg-paper py-20 sm:py-24">
      <div className="container-x">
        <SectionHeading center eyebrow="Trabalhamos em conjunto" title="Parceiros" />
        <motion.div
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="mx-auto mt-10 grid max-w-4xl grid-cols-2 gap-6 sm:grid-cols-4"
        >
          {partners.map((p) => (
            <motion.div key={p.name} variants={scaleIn} className="flex aspect-square items-center justify-center">
              <div className="relative h-full w-full overflow-hidden rounded-full bg-white p-5 shadow-card transition-transform hover:scale-105" title={p.name}>
                <Image src={p.logo} alt={p.name} fill className="object-contain p-5" sizes="180px" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
