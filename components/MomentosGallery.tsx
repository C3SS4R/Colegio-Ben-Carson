'use client';

import { useCallback, useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, X, ImageIcon } from 'lucide-react';
import { momentos, site } from '@/lib/data';
import { EASE, heroReveal } from '@/lib/motion';

export function MomentosGallery() {
  const [idx, setIdx] = useState<number | null>(null);
  const total = momentos.length;

  const go = useCallback((d: number) => {
    setIdx((i) => (i === null ? i : (i + d + total) % total));
  }, [total]);

  useEffect(() => {
    if (idx === null) return;
    document.body.style.overflow = 'hidden';
    // pré-carrega vizinhas
    [1, -1].forEach((d) => {
      const img = new window.Image();
      img.src = momentos[(idx + d + total) % total].full;
    });
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIdx(null);
      if (e.key === 'ArrowRight') go(1);
      if (e.key === 'ArrowLeft') go(-1);
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [idx, go, total]);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-white/10 bg-navy-900/90 backdrop-blur-md">
        <nav className="container-x flex h-[64px] items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <span className="relative h-10 w-10 overflow-hidden rounded-full ring-2 ring-royal-500/60">
              <Image src="/img/logo.jpg" alt="Ben Carson" fill className="object-cover" />
            </span>
            <span className="font-cond text-base font-extrabold tracking-wide text-white">BEN CARSON</span>
          </Link>
          <Link href="/" className="flex items-center gap-1.5 text-[0.86rem] font-medium text-white/85 hover:text-white">
            <ArrowLeft className="h-4 w-4" /> Voltar ao site
          </Link>
        </nav>
      </header>

      <section className="relative overflow-hidden bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 py-16 text-center text-white sm:py-20">
        <div className="pointer-events-none absolute inset-0 opacity-70" style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 20%, rgba(44,91,232,0.35), transparent 60%)' }} />
        <motion.div variants={heroReveal} initial="hidden" animate="show" className="container-x relative">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/[0.07] px-4 py-1.5 font-cond text-[0.8rem] font-bold uppercase tracking-wide text-white">
            <ImageIcon className="h-4 w-4 text-orange-400" /> Vida na comunidade Ben Carson
          </span>
          <h1 className="mt-5 font-display text-[clamp(2rem,6vw,3.4rem)] font-extrabold leading-[1.06] tracking-[-0.02em]">
            Momentos <span className="text-orange-500">Extraescolares</span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-[1.02rem] leading-relaxed text-white/78">
            Cultura, desporto, convívio e celebração. Os momentos que constroem a identidade e o espírito
            da nossa comunidade educativa, para além da sala de aula.
          </p>
        </motion.div>
      </section>

      <section className="bg-paper py-14">
        <div className="container-x">
          <div className="masonry">
            {momentos.map((m, i) => (
              <button
                key={i}
                onClick={() => setIdx(i)}
                className="group block w-full overflow-hidden rounded-xl shadow-card focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
                aria-label={`Ver foto ${i + 1}`}
              >
                <span className="relative block">
                  <Image
                    src={m.thumb}
                    alt={m.alt}
                    width={500}
                    height={500}
                    className="h-auto w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width:700px) 50vw, 25vw"
                  />
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {idx !== null && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4"
            onClick={() => setIdx(null)}
            role="dialog"
            aria-modal="true"
          >
            <button onClick={() => setIdx(null)} aria-label="Fechar" className="absolute right-4 top-4 flex h-12 w-12 items-center justify-center rounded-full bg-white/12 text-white transition-colors hover:bg-orange-500">
              <X className="h-6 w-6" />
            </button>
            <button onClick={(e) => { e.stopPropagation(); go(-1); }} aria-label="Anterior" className="absolute left-3 flex h-12 w-12 items-center justify-center rounded-full bg-white/12 text-white transition-colors hover:bg-orange-500 sm:left-6">
              <ArrowLeft className="h-6 w-6" />
            </button>
            <button onClick={(e) => { e.stopPropagation(); go(1); }} aria-label="Seguinte" className="absolute right-3 flex h-12 w-12 items-center justify-center rounded-full bg-white/12 text-white transition-colors hover:bg-orange-500 sm:right-6">
              <ArrowRight className="h-6 w-6" />
            </button>
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, ease: EASE }}
              className="relative max-h-[86vh] max-w-[92vw]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image src={momentos[idx].full} alt={momentos[idx].alt} width={1400} height={1000} className="max-h-[86vh] w-auto rounded-lg object-contain" />
            </motion.div>
            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 rounded-full bg-white/12 px-4 py-1.5 font-cond text-sm font-bold text-white">
              {idx + 1} / {total}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <footer className="bg-navy-900 py-6 text-center text-[0.78rem] text-white/45">
        © 2026 {site.name}. Todos os direitos reservados. ·{' '}
        <Link href="/" className="hover:text-orange-300">Voltar ao site</Link>
      </footer>
    </>
  );
}
