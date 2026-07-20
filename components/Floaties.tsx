'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUp, MessageCircle } from 'lucide-react';
import { waLink } from '@/lib/utils';

export function Floaties() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-center gap-3">
      <a
        href={waLink('Olá! Gostaria de mais informações sobre o Instituto Ben Carson.')}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp"
        className="flex h-13 w-13 items-center justify-center rounded-full bg-grass-500 text-white shadow-[0_10px_28px_rgba(37,211,102,0.45)] transition-transform hover:scale-110"
        style={{ height: 52, width: 52 }}
      >
        <MessageCircle className="h-6 w-6" />
      </a>
      <AnimatePresence>
        {show && (
          <motion.button
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 16 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="Voltar ao topo"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white text-royal-600 shadow-card transition-transform hover:scale-110"
          >
            <ArrowUp className="h-5 w-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
