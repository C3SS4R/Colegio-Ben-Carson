# Instituto Médio Privado Ben Carson — Website

Site institucional em **Next.js 14** (App Router, TypeScript, Tailwind CSS, framer-motion).

## Requisitos
- Node.js **18.17+** (recomendado Node 20+)

## Desenvolvimento
```bash
npm install
npm run dev        # http://localhost:3000
```

## Build de produção
```bash
npm run build
npm run start
```

## Estrutura
```
app/                     # rotas (App Router)
  page.tsx               # home
  inscricoes/            # /inscricoes — pré-inscrição (form → WhatsApp)
  momentos-extraescolares/  # galeria + lightbox
  layout.tsx             # fontes, metadados, OG, JSON-LD
components/              # Navbar, Footer, Preloader, secções, primitivas UI
lib/data.ts             # todo o conteúdo (cursos, preços, equipa, contactos…)
public/img/             # imagens (fotos reais, logo, og-image)
legacy/                 # site estático anterior (referência)
```

## Conteúdo
Todo o texto, cursos, preços, documentos, equipa e contactos vivem em
`lib/data.ts` — editar aí para atualizar o site.

## Deploy (Vercel)
1. Fazer push do repositório para o GitHub.
2. Em [vercel.com](https://vercel.com) → **New Project** → importar `Colegio-Ben-Carson`.
3. Framework detetado automaticamente: **Next.js**. Sem configuração extra.
4. Deploy. (Domínio: apontar `www.imagbc.ao` nas definições de domínio da Vercel.)

Alternativa via CLI:
```bash
npx vercel        # preview
npx vercel --prod # produção
```
