import type { Metadata, Viewport } from 'next';
import { Archivo, Barlow, Barlow_Condensed } from 'next/font/google';
import { site } from '@/lib/data';
import './globals.css';

const archivo = Archivo({
  subsets: ['latin'],
  weight: ['500', '600', '700', '800', '900'],
  variable: '--font-archivo',
  display: 'swap',
});
const barlow = Barlow({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-barlow',
  display: 'swap',
});
const barlowCond = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['600', '700', '800'],
  variable: '--font-barlow-cond',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: 'Instituto Médio Ben Carson – Administração e Gestão | Luanda, Angola',
  description:
    'Instituto Médio Privado Ben Carson em Luanda, Angola. Formação técnica (10ª–13ª) em Finanças, Informática de Gestão, Contabilidade e Gestão Empresarial. Matrículas abertas 2026/2027.',
  keywords: [
    'Instituto Ben Carson', 'ensino médio Angola', 'curso técnico Luanda',
    'administração e gestão', 'finanças', 'contabilidade', 'informática de gestão',
    'matrículas Camama Kiaxi',
  ],
  authors: [{ name: site.name }],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'pt_AO',
    siteName: 'Instituto Médio Ben Carson',
    title: 'Instituto Médio Ben Carson – Administração e Gestão, Luanda',
    description: 'Formação técnica de excelência (10ª–13ª) em Luanda. Matrículas abertas para 2026/2027.',
    url: site.url,
    images: [{ url: '/img/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image' },
  icons: { icon: '/img/logo.jpg', apple: '/img/logo.jpg' },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#0B1E5B' },
  ],
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'EducationalOrganization',
  name: site.name,
  description: 'Instituto Médio Privado de Administração e Gestão em Luanda, Angola.',
  url: site.url,
  email: site.email,
  telephone: site.phoneMain,
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Camama, Vila Kiaxi, Rua n.º 34',
    addressLocality: 'Luanda',
    addressCountry: 'AO',
  },
  geo: { '@type': 'GeoCoordinates', latitude: site.geo.lat, longitude: site.geo.lng },
  sameAs: [site.facebook],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt" className={`${archivo.variable} ${barlow.variable} ${barlowCond.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
