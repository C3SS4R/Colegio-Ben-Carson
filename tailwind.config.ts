import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Azul — marca e estrutura (identidade do logótipo)
        navy: {
          900: '#071040',
          800: '#0B1E5B',
          700: '#12297A',
        },
        royal: {
          600: '#1B44C8',
          500: '#2C5BE8',
        },
        azure: {
          400: '#4E79F0',
          300: '#8FB0FF',
        },
        // Laranja — energia / realce (complementar do azul)
        orange: {
          600: '#EA6A0C',
          500: '#F97316',
          400: '#FB923C',
        },
        // Verde — conversão / sucesso / ação
        grass: {
          700: '#12813B',
          600: '#16A34A',
          500: '#22C55E',
        },
        // Neutros
        paper: '#F7F8FC',
        ink: '#111528',
        slate: {
          DEFAULT: '#5A6178',
          soft: '#8A8FA8',
        },
      },
      fontFamily: {
        display: ['var(--font-archivo)', 'system-ui', 'sans-serif'],
        body: ['var(--font-barlow)', 'system-ui', 'sans-serif'],
        cond: ['var(--font-barlow-cond)', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        container: '1200px',
      },
      boxShadow: {
        card: '0 18px 44px rgba(11,30,91,0.10)',
        'card-lg': '0 30px 70px rgba(11,30,91,0.16)',
        glow: '0 10px 30px rgba(249,115,22,0.35)',
      },
      transitionTimingFunction: {
        spring: 'cubic-bezier(0.22,1,0.36,1)',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
