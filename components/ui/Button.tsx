import Link from 'next/link';
import { cn } from '@/lib/utils';

type Variant = 'action' | 'primary' | 'ghost' | 'ghost-dark' | 'whatsapp';
type Size = 'md' | 'lg';

const base =
  'group inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-all duration-200 ease-spring focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-orange-500';

const variants: Record<Variant, string> = {
  // Verde — conversão / ação
  action: 'bg-grass-600 text-white shadow-[0_8px_24px_rgba(22,163,74,0.35)] hover:bg-grass-700 hover:-translate-y-0.5 hover:shadow-[0_12px_30px_rgba(22,163,74,0.45)]',
  // Azul — navegação principal
  primary: 'bg-royal-600 text-white shadow-[0_8px_24px_rgba(27,68,200,0.32)] hover:bg-royal-500 hover:-translate-y-0.5',
  // Contorno sobre fundo claro
  ghost: 'border-[1.5px] border-navy-800/25 text-navy-800 hover:border-royal-600 hover:text-royal-600',
  // Contorno sobre fundo escuro
  'ghost-dark': 'border-[1.5px] border-white/35 text-white hover:border-white hover:bg-white/10',
  whatsapp: 'bg-grass-500 text-[#05391c] shadow-[0_6px_20px_rgba(37,211,102,0.35)] hover:-translate-y-0.5',
};

const sizes: Record<Size, string> = {
  md: 'px-5 py-2.5 text-sm',
  lg: 'px-7 py-3.5 text-[0.95rem]',
};

type Props = {
  href?: string;
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
  external?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({ href, variant = 'action', size = 'md', className, children, external, ...rest }: Props) {
  const cls = cn(base, variants[variant], sizes[size], className);
  if (href) {
    if (external || href.startsWith('http')) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={cls}>
        {children}
      </Link>
    );
  }
  return (
    <button className={cls} {...rest}>
      {children}
    </button>
  );
}
