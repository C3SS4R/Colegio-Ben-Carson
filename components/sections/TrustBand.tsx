'use client';

import { motion } from 'framer-motion';
import { CalendarDays, BookOpen, GraduationCap, MapPin } from 'lucide-react';
import { viewport } from '@/lib/motion';

const facts = [
  { icon: CalendarDays, value: '2023', label: 'Fundado em Luanda' },
  { icon: BookOpen, value: '4', label: 'Cursos técnicos' },
  { icon: GraduationCap, value: '10ª–13ª', label: 'Ensino médio técnico' },
  { icon: MapPin, value: 'Camama', label: 'Vila Kiaxi · Luanda' },
];

export function TrustBand() {
  return (
    <section className="border-b border-black/5 bg-white">
      <div className="container-x grid grid-cols-2 gap-6 py-8 md:grid-cols-4">
        {facts.map((f, i) => (
          <motion.div
            key={f.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ delay: i * 0.08, duration: 0.6 }}
            className="flex items-center gap-3"
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-orange-500/12 text-orange-500">
              <f.icon className="h-5 w-5" />
            </span>
            <span>
              <span className="block font-cond text-xl font-extrabold leading-none text-navy-800">{f.value}</span>
              <span className="block text-[0.74rem] text-slate">{f.label}</span>
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
