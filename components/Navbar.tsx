'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown, Menu, X } from 'lucide-react';
import { nav, site } from '@/lib/data';
import { cn } from '@/lib/utils';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [sub, setSub] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <>
      {/* Announce — urgência (laranja estratégico) */}
      <div className="bg-gradient-to-r from-orange-600 via-orange-500 to-orange-600 py-2 text-center font-cond text-[0.82rem] font-bold uppercase tracking-wide text-white">
        Matrículas Abertas — Ano Letivo {site.schoolYear} · Inscreva-se já
      </div>

      <header
        className={cn(
          'sticky top-0 z-50 border-b transition-all duration-300',
          scrolled
            ? 'border-white/10 bg-navy-900/90 backdrop-blur-md shadow-[0_6px_30px_rgba(0,0,0,0.35)]'
            : 'border-transparent bg-navy-900/70 backdrop-blur-md',
        )}
      >
        <nav className="container-x flex h-[68px] items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <span className="relative h-11 w-11 overflow-hidden rounded-full ring-2 ring-royal-500/60">
              <Image src="/img/logo.jpg" alt="Instituto Ben Carson" fill className="object-cover" />
            </span>
            <span className="leading-tight">
              <span className="block font-cond text-lg font-extrabold tracking-wide text-white">BEN CARSON</span>
              <span className="block text-[0.6rem] uppercase tracking-[0.16em] text-orange-400">{site.tagline}</span>
            </span>
          </Link>

          {/* Desktop */}
          <div className="hidden items-center gap-7 lg:flex">
            {nav.map((item) => (
              <div key={item.label} className="group relative">
                <Link
                  href={item.href}
                  className="relative flex items-center gap-1 py-2 text-[0.9rem] font-medium text-white/85 transition-colors hover:text-white"
                >
                  {item.label}
                  {item.children && <ChevronDown className="h-3.5 w-3.5 transition-transform group-hover:rotate-180" />}
                  <span className="absolute -bottom-0.5 left-0 h-0.5 w-0 bg-orange-500 transition-all duration-300 group-hover:w-full" />
                </Link>
                {item.children && (
                  <div className="invisible absolute left-1/2 top-full -translate-x-1/2 translate-y-2 pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                    <div className="min-w-[220px] rounded-xl border border-white/10 bg-navy-900/95 p-2 shadow-[0_20px_44px_rgba(0,0,0,0.45)] backdrop-blur-md">
                      {item.children.map((c) => (
                        <Link
                          key={c.label}
                          href={c.href}
                          className="block rounded-lg px-3 py-2.5 text-[0.85rem] text-white/80 transition-colors hover:bg-orange-500/15 hover:text-orange-300"
                        >
                          {c.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
            <Link
              href="/inscricoes"
              className="rounded-lg bg-grass-600 px-5 py-2.5 text-sm font-bold text-white shadow-[0_4px_16px_rgba(22,163,74,0.45)] transition-all hover:-translate-y-0.5 hover:bg-grass-700"
            >
              Pré-Inscrição
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="text-white lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Abrir menu"
            aria-expanded={open}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>

        {/* Mobile menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden bg-navy-900 lg:hidden"
            >
              <div className="container-x flex flex-col gap-1 py-4">
                {nav.map((item) => (
                  <div key={item.label} className="border-b border-white/8">
                    {item.children ? (
                      <>
                        <button
                          onClick={() => setSub(sub === item.label ? null : item.label)}
                          className="flex w-full items-center justify-between py-3 text-[0.95rem] font-semibold text-white/90"
                        >
                          {item.label}
                          <ChevronDown className={cn('h-4 w-4 transition-transform', sub === item.label && 'rotate-180')} />
                        </button>
                        <AnimatePresence>
                          {sub === item.label && (
                            <motion.div
                              initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }}
                              className="overflow-hidden"
                            >
                              <div className="pb-2">
                                {item.children.map((c) => (
                                  <Link key={c.label} href={c.href} onClick={() => setOpen(false)}
                                    className="block py-2 pl-4 text-[0.9rem] text-white/70 hover:text-orange-300">
                                    {c.label}
                                  </Link>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <Link href={item.href} onClick={() => setOpen(false)}
                        className="block py-3 text-[0.95rem] font-semibold text-white/90">
                        {item.label}
                      </Link>
                    )}
                  </div>
                ))}
                <Link href="/inscricoes" onClick={() => setOpen(false)}
                  className="mt-3 rounded-lg bg-grass-600 py-3 text-center font-bold text-white">
                  Pré-Inscrição
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
