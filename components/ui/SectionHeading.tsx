'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { fadeUp, viewport } from '@/lib/motion';

export function SectionHeading({
  eyebrow,
  title,
  desc,
  center,
  dark,
  className,
}: {
  eyebrow: string;
  title: React.ReactNode;
  desc?: string;
  center?: boolean;
  dark?: boolean;
  className?: string;
}) {
  return (
    <div className={cn(center && 'text-center', className)}>
      <motion.p
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        className="eyebrow text-xs sm:text-sm"
      >
        {eyebrow}
      </motion.p>
      <motion.h2
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        className={cn(
          'mt-2 font-display text-[clamp(1.9rem,4vw,2.9rem)] font-extrabold leading-[1.1]',
          dark ? 'text-white' : 'text-navy-800',
        )}
      >
        {title}
      </motion.h2>
      <motion.div
        variants={{ hidden: { scaleX: 0 }, show: { scaleX: 1, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } } }}
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        className={cn('ascent-rule mt-5', center && 'mx-auto')}
      />
      {desc && (
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className={cn(
            'mt-5 max-w-2xl text-[1.02rem] leading-relaxed',
            center && 'mx-auto',
            dark ? 'text-white/75' : 'text-slate',
          )}
        >
          {desc}
        </motion.p>
      )}
    </div>
  );
}
