'use client';

import { motion, type Variants } from 'framer-motion';
import { fadeUp, viewport, stagger } from '@/lib/motion';

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  variants?: Variants;
  delay?: number;
  as?: 'div' | 'section' | 'li' | 'article' | 'span';
};

export function Reveal({ children, className, variants = fadeUp, delay = 0, as = 'div' }: RevealProps) {
  const M = motion[as];
  return (
    <M
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={viewport}
      transition={delay ? { delay } : undefined}
    >
      {children}
    </M>
  );
}

export function RevealGroup({
  children,
  className,
  staggerChildren = 0.09,
  delayChildren = 0,
  as = 'div',
}: {
  children: React.ReactNode;
  className?: string;
  staggerChildren?: number;
  delayChildren?: number;
  as?: 'div' | 'section' | 'ul';
}) {
  const M = motion[as];
  return (
    <M
      className={className}
      variants={stagger(staggerChildren, delayChildren)}
      initial="hidden"
      whileInView="show"
      viewport={viewport}
    >
      {children}
    </M>
  );
}
