'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion } from 'framer-motion';
import { ArrowLeft, MessageCircle, ChevronDown } from 'lucide-react';
import { Icon, type IconName } from '@/components/Icon';
import { site, inscricaoBenefits, courseOptions, classeOptions, prices } from '@/lib/data';
import { heroReveal, fadeUp, viewport } from '@/lib/motion';
import { waLink, fmtKz } from '@/lib/utils';

const schema = z.object({
  nome: z.string().min(1, 'Indique o nome.'),
  apelido: z.string().optional(),
  tel: z.string().refine((v) => v.replace(/\D/g, '').length >= 9, 'Indique um número válido.'),
  curso: z.string().min(1, 'Seleccione o curso.'),
  classe: z.string().min(1, 'Seleccione a classe.'),
  mensagem: z.string().optional(),
});
type FormData = z.infer<typeof schema>;

const inputCls =
  'w-full rounded-lg border-[1.5px] border-white/14 bg-white/[0.06] px-4 py-3 text-[0.92rem] text-white outline-none transition-all placeholder:text-white/40 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/25';

export function InscricaoLanding() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = (d: FormData) => {
    let text = `Olá! Quero fazer a PRÉ-INSCRIÇÃO.\nAluno: ${d.nome} ${d.apelido ?? ''}\nTelefone: ${d.tel}\nCurso: ${d.curso}\nClasse: ${d.classe}`;
    if (d.mensagem) text += `\nObservação: ${d.mensagem}`;
    window.open(waLink(text.trim()), '_blank', 'noopener');
    reset();
  };

  return (
    <>
      {/* nav simples */}
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

      {/* hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 py-16 text-center text-white sm:py-20">
        <div className="pointer-events-none absolute inset-0 opacity-70" style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 20%, rgba(44,91,232,0.35), transparent 60%)' }} />
        <motion.div variants={heroReveal} initial="hidden" animate="show" className="container-x relative">
          <span className="inline-flex items-center gap-2 rounded-full border border-grass-500/40 bg-grass-500/15 px-4 py-1.5 font-cond text-[0.8rem] font-bold uppercase tracking-wide text-grass-500">
            Ano Letivo {site.schoolYear} · Vagas limitadas
          </span>
          <h1 className="mt-5 font-display text-[clamp(2rem,6vw,3.4rem)] font-extrabold leading-[1.06] tracking-[-0.02em]">
            Faça já a sua <span className="text-orange-500">Pré-Inscrição</span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-[1.02rem] leading-relaxed text-white/78">
            Preencha o formulário abaixo para reservar a sua vaga. A nossa equipa entra em contacto consigo
            pelo WhatsApp para concluir o processo.
          </p>

          <div className="mx-auto mt-9 grid max-w-3xl grid-cols-2 gap-4 sm:grid-cols-4">
            {inscricaoBenefits.map((b) => (
              <div key={b.title} className="rounded-2xl border border-white/10 bg-white/[0.05] p-5">
                <Icon name={b.icon as IconName} className="mx-auto h-7 w-7 text-orange-400" />
                <div className="mt-2 font-bold text-white">{b.title}</div>
                <div className="text-[0.76rem] text-white/60">{b.sub}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* form + preços */}
      <section id="form" className="bg-paper py-16 sm:py-20">
        <div className="container-x max-w-3xl">
          <form onSubmit={handleSubmit(onSubmit)} noValidate className="rounded-3xl bg-gradient-to-br from-navy-800 to-navy-900 p-8 shadow-card-lg sm:p-10">
            <h2 className="font-display text-2xl font-extrabold text-white">Formulário de Pré-Inscrição</h2>
            <p className="mt-1 text-[0.86rem] text-white/65">Os campos com * são obrigatórios.</p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-1.5 block font-cond text-[0.74rem] font-bold uppercase tracking-wide text-orange-400">Nome do aluno *</label>
                <input {...register('nome')} placeholder="Nome" autoComplete="given-name" className={inputCls} />
                {errors.nome && <p className="mt-1 text-[0.76rem] text-orange-300">{errors.nome.message}</p>}
              </div>
              <div>
                <label className="mb-1.5 block font-cond text-[0.74rem] font-bold uppercase tracking-wide text-orange-400">Apelido</label>
                <input {...register('apelido')} placeholder="Apelido" autoComplete="family-name" className={inputCls} />
              </div>
            </div>

            <div className="mt-4">
              <label className="mb-1.5 block font-cond text-[0.74rem] font-bold uppercase tracking-wide text-orange-400">Telefone / WhatsApp do encarregado *</label>
              <input {...register('tel')} placeholder="+244 9XX XXX XXX" className={inputCls} />
              {errors.tel && <p className="mt-1 text-[0.76rem] text-orange-300">{errors.tel.message}</p>}
            </div>

            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-1.5 block font-cond text-[0.74rem] font-bold uppercase tracking-wide text-orange-400">Curso pretendido *</label>
                <div className="relative">
                  <select {...register('curso')} defaultValue="" className={`${inputCls} appearance-none pr-10`}>
                    <option value="" disabled className="text-ink">Seleccione o curso</option>
                    {courseOptions.map((c) => <option key={c} value={c} className="text-ink">{c}</option>)}
                  </select>
                  <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/50" />
                </div>
                {errors.curso && <p className="mt-1 text-[0.76rem] text-orange-300">{errors.curso.message}</p>}
              </div>
              <div>
                <label className="mb-1.5 block font-cond text-[0.74rem] font-bold uppercase tracking-wide text-orange-400">Classe *</label>
                <div className="relative">
                  <select {...register('classe')} defaultValue="" className={`${inputCls} appearance-none pr-10`}>
                    <option value="" disabled className="text-ink">Seleccione a classe</option>
                    {classeOptions.map((c) => <option key={c} value={c} className="text-ink">{c}</option>)}
                  </select>
                  <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/50" />
                </div>
                {errors.classe && <p className="mt-1 text-[0.76rem] text-orange-300">{errors.classe.message}</p>}
              </div>
            </div>

            <div className="mt-4">
              <label className="mb-1.5 block font-cond text-[0.74rem] font-bold uppercase tracking-wide text-orange-400">Mensagem (opcional)</label>
              <textarea {...register('mensagem')} placeholder="Alguma dúvida ou observação?" rows={3} className={`${inputCls} resize-y`} />
            </div>

            <button type="submit" className="mt-6 flex w-full items-center justify-center gap-2 rounded-lg bg-grass-600 py-4 font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-grass-700">
              <MessageCircle className="h-5 w-5" /> Enviar Pré-Inscrição via WhatsApp
            </button>
            <p className="mt-3 text-center text-[0.74rem] text-white/45">Os seus dados são usados apenas para tratar a sua inscrição.</p>
          </form>

          {/* preços rápidos */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={viewport} className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {prices.map((p) => (
              <div key={p.classe} className="rounded-2xl border border-black/5 bg-white p-5 text-center shadow-card">
                <div className="font-cond text-[0.72rem] font-bold uppercase tracking-wide text-orange-600">{p.classe}</div>
                <div className="mt-1 font-cond text-2xl font-black text-navy-800">{fmtKz(p.value)}<span className="text-[0.7rem] text-slate"> Kz</span></div>
                <div className="text-[0.68rem] uppercase tracking-wide text-slate-soft">por mês</div>
              </div>
            ))}
          </motion.div>

          <p className="mt-8 text-center text-[0.9rem] text-slate">
            Prefere falar já?{' '}
            <a href={waLink('Olá! Quero informações sobre a pré-inscrição.')} target="_blank" rel="noopener noreferrer" className="font-bold text-grass-600 hover:text-grass-700">
              Fale connosco no WhatsApp
            </a>
          </p>
        </div>
      </section>

      <footer className="bg-navy-900 py-6 text-center text-[0.78rem] text-white/45">
        © 2026 {site.name}. Todos os direitos reservados. ·{' '}
        <Link href="/" className="hover:text-orange-300">Voltar ao site</Link>
      </footer>
    </>
  );
}
