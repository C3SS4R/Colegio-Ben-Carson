'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { site } from '@/lib/data';

export function Preloader() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const seen = sessionStorage.getItem('bc_intro');
    if (seen || reduce) return;
    setShow(true);
    document.body.style.overflow = 'hidden';
    const t = setTimeout(() => {
      sessionStorage.setItem('bc_intro', '1');
      setShow(false);
      document.body.style.overflow = '';
    }, 2100);
    return () => {
      clearTimeout(t);
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-navy-900"
          initial={{ clipPath: 'inset(0 0 0 0)' }}
          exit={{ clipPath: 'inset(0 0 100% 0)', transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
        >
          {/* halo suave */}
          <div
            className="pointer-events-none absolute inset-0 opacity-70"
            style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 42%, rgba(44,91,232,0.35), transparent 70%)' }}
          />
          <motion.div
            className="relative"
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }}
          >
            <div className="relative h-24 w-24 overflow-hidden rounded-full ring-2 ring-white/20 sm:h-28 sm:w-28">
              <Image src="/img/logo.jpg" alt="Instituto Ben Carson" fill className="object-cover" priority />
            </div>
          </motion.div>

          <motion.p
            className="mt-6 font-cond text-xs font-bold uppercase text-white/80 sm:text-sm"
            initial={{ opacity: 0, letterSpacing: '0.1em' }}
            animate={{ opacity: 1, letterSpacing: '0.42em', transition: { delay: 0.5, duration: 0.9, ease: [0.22, 1, 0.36, 1] } }}
          >
            {site.motto}
          </motion.p>

          {/* linha ascendente laranja — assinatura */}
          <motion.div
            className="mt-6 h-[3px] rounded-full"
            style={{ background: 'linear-gradient(90deg,#f97316,#fb923c)', transformOrigin: 'left center' }}
            initial={{ width: 0, rotate: 0 }}
            animate={{ width: 120, transition: { delay: 0.8, duration: 0.7, ease: [0.22, 1, 0.36, 1] } }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
