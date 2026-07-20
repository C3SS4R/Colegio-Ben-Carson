import {
  Phone, Mail, MapPin, MessageCircle, Globe, Check, CheckCircle2, Send,
  ArrowUpRight, ChevronDown, Wallet, Monitor, BarChart3, Building2, BookOpen,
  Handshake, Scale, Lightbulb, Heart, Settings, Rocket, Link2, Eye, Target,
  GraduationCap, Users, TrendingUp, Landmark, FileText, ArrowRight, ArrowLeft,
  X, ImageIcon, Facebook, type LucideProps,
} from 'lucide-react';

const map = {
  Phone, Mail, MapPin, MessageCircle, Globe, Check, CheckCircle2, Send,
  ArrowUpRight, ChevronDown, Wallet, Monitor, BarChart3, Building2, BookOpen,
  Handshake, Scale, Lightbulb, Heart, Settings, Rocket, Link2, Eye, Target,
  GraduationCap, Users, TrendingUp, Landmark, FileText, ArrowRight, ArrowLeft,
  X, ImageIcon, Facebook,
} as const;

export type IconName = keyof typeof map;

export function Icon({ name, ...props }: { name: IconName } & LucideProps) {
  const Cmp = map[name] ?? BookOpen;
  return <Cmp {...props} />;
}
