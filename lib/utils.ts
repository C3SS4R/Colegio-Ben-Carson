import clsx, { type ClassValue } from 'clsx';

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

export function waLink(text: string, phone = '244939328544') {
  return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
}

export function fmtKz(n: number) {
  return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
}
