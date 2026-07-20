'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, MessageCircle, Globe, Send } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { site, contactSubjects } from '@/lib/data';
import { fadeUp, viewport } from '@/lib/motion';
import { waLink } from '@/lib/utils';

const schema = z.object({
  nome: z.string().min(1, 'Indique o nome.'),
  apelido: z.string().optional(),
  tel: z.string().refine((v) => v.replace(/\D/g, '').length >= 9, 'Indique um número válido.'),
  assunto: z.string().min(1, 'Seleccione um assunto.'),
  mensagem: z.string().min(1, 'Escreva a sua mensagem.'),
});
type FormData = z.infer<typeof schema>;

const infoItems = [
  { icon: MapPin, label: 'Endereço', value: site.address, href: site.mapLink, cta: 'Ver no mapa' },
  { icon: Phone, label: 'Telefone', value: site.phones.join('  ·  ') },
  { icon: MessageCircle, label: 'WhatsApp', value: site.phoneMainDisplay, href: waLink('Olá! Gostaria de mais informações.') },
  { icon: Mail, label: 'E-mail', value: site.email, href: `mailto:${site.email}` },
  { icon: Globe, label: 'Website', value: site.website },
];

export function Contact() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = (d: FormData) => {
    const text = `Olá! Sou ${d.nome} ${d.apelido ?? ''}.\nAssunto: ${d.assunto}\nTelefone: ${d.tel}\n\n${d.mensagem}`;
    window.open(waLink(text.trim()), '_blank', 'noopener');
    reset();
  };

  const inputCls =
    'w-full rounded-lg border-[1.5px] border-white/14 bg-white/[0.06] px-4 py-3 text-[0.92rem] text-white outline-none transition-all placeholder:text-white/40 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/25';

  return (
    <section id="contactos" className="scroll-mt-24 bg-white py-20 sm:py-24">
      <div className="container-x">
        <SectionHeading eyebrow="Estamos aqui para si" title="Fale Connosco" />

        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          {/* info */}
          <div className="space-y-3">
            {infoItems.map((it, i) => (
              <motion.div
                key={it.label}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={viewport}
                transition={{ delay: i * 0.06 }}
                className="flex items-start gap-4 rounded-xl bg-paper p-4 transition-transform hover:translate-x-1"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-navy-800 text-orange-400">
                  <it.icon className="h-5 w-5" />
                </span>
                <div>
                  <div className="text-[0.72rem] font-semibold uppercase tracking-[0.1em] text-slate-soft">{it.label}</div>
                  <div className="mt-0.5 text-[0.92rem] font-medium text-navy-800">{it.value}</div>
                  {it.href && (
                    <a href={it.href} target="_blank" rel="noopener noreferrer" className="mt-1 inline-block text-[0.8rem] font-bold text-orange-600 hover:text-orange-500">
                      {it.cta ?? 'Abrir'} →
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* form */}
          <motion.form
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            className="rounded-3xl bg-gradient-to-br from-navy-800 to-navy-900 p-8 shadow-card-lg"
          >
            <div className="mb-6 flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-500/15 text-orange-400">
                <Send className="h-5 w-5" />
              </span>
              <div>
                <h3 className="font-cond text-xl font-extrabold text-white">Envie-nos uma mensagem</h3>
                <p className="text-[0.8rem] text-white/65">Respondemos pelo WhatsApp.</p>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <input {...register('nome')} placeholder="Nome" className={inputCls} />
                {errors.nome && <p className="mt-1 text-[0.76rem] text-orange-300">{errors.nome.message}</p>}
              </div>
              <input {...register('apelido')} placeholder="Apelido" className={inputCls} />
            </div>
            <div className="mt-4">
              <input {...register('tel')} placeholder="Telefone / WhatsApp" className={inputCls} />
              {errors.tel && <p className="mt-1 text-[0.76rem] text-orange-300">{errors.tel.message}</p>}
            </div>
            <div className="mt-4">
              <select {...register('assunto')} defaultValue="" className={inputCls}>
                <option value="" disabled className="text-ink">Seleccione um assunto</option>
                {contactSubjects.map((s) => <option key={s} value={s} className="text-ink">{s}</option>)}
              </select>
              {errors.assunto && <p className="mt-1 text-[0.76rem] text-orange-300">{errors.assunto.message}</p>}
            </div>
            <div className="mt-4">
              <textarea {...register('mensagem')} placeholder="A sua mensagem" rows={4} className={`${inputCls} resize-y`} />
              {errors.mensagem && <p className="mt-1 text-[0.76rem] text-orange-300">{errors.mensagem.message}</p>}
            </div>

            <button type="submit" className="mt-5 flex w-full items-center justify-center gap-2 rounded-lg bg-grass-600 py-3.5 font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-grass-700">
              <MessageCircle className="h-5 w-5" /> Enviar via WhatsApp
            </button>
            <p className="mt-3 text-center text-[0.74rem] text-white/45">Os seus dados são usados apenas para tratar o seu contacto.</p>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
