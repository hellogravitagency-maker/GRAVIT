import { ColorTheme, TypographyPair, DesignArchetype } from './types';

export const THEMES: ColorTheme[] = [
  {
    id: 'slate-onyx',
    name: 'Slate Onyx',
    primary: '#0A0A0A',
    secondary: '#262626',
    accent: '#FAFAFA',
    canvas: '#000000',
    text: '#FFFFFF',
    isDark: true,
  },
  {
    id: 'cyber-abyss',
    name: 'Cyber Abyss',
    primary: '#0D0E15',
    secondary: '#1A1C29',
    accent: '#00F0FF',
    canvas: '#05050A',
    text: '#E2E8F0',
    isDark: true,
  },
  {
    id: 'neo-solar',
    name: 'Neo Solar',
    primary: '#FF5722',
    secondary: '#FFC107',
    accent: '#111111',
    canvas: '#FFF8E1',
    text: '#212121',
    isDark: false,
  },
  {
    id: 'glass-frost',
    name: 'Glass Frost',
    primary: '#FFFFFF',
    secondary: '#E2E8F0',
    accent: '#3B82F6',
    canvas: '#F1F5F9',
    text: '#0F172A',
    isDark: false,
  },
  {
    id: 'retro-crt',
    name: 'Retro CRT',
    primary: '#003B00',
    secondary: '#005F00',
    accent: '#39FF14',
    canvas: '#000000',
    text: '#39FF14',
    isDark: true,
  },
  {
    id: 'scandi-wood',
    name: 'Scandi Wood',
    primary: '#D7CCC8',
    secondary: '#A1887F',
    accent: '#5D4037',
    canvas: '#EFEBE9',
    text: '#3E2723',
    isDark: false,
  },
  {
    id: 'outrun-neon',
    name: 'Outrun Neon',
    primary: '#240046',
    secondary: '#3C096C',
    accent: '#FF006E',
    canvas: '#10002B',
    text: '#FFBE0B',
    isDark: true,
  },
  {
    id: 'blush-minimal',
    name: 'Blush Minimal',
    primary: '#FFF0F5',
    secondary: '#FFB6C1',
    accent: '#FF1493',
    canvas: '#FAFAFA',
    text: '#4A4A4A',
    isDark: false,
  },
  {
    id: 'deep-ocean',
    name: 'Deep Ocean',
    primary: '#013A63',
    secondary: '#01497C',
    accent: '#89C2D9',
    canvas: '#012A4A',
    text: '#E0FBFC',
    isDark: true,
  },
  {
    id: 'brutal-yellow',
    name: 'Brutal Yellow',
    primary: '#000000',
    secondary: '#333333',
    accent: '#FFFF00',
    canvas: '#E6E6E6',
    text: '#000000',
    isDark: false,
  }
];

export const TYPOGRAPHY: TypographyPair[] = [
  {
    id: 'inter-sans',
    name: 'Inter & System',
    displayClass: 'font-sans font-bold tracking-tighter',
    bodyClass: 'font-sans leading-relaxed tracking-normal',
  },
  {
    id: 'space-grotesk',
    name: 'Space Grotesk & Mono',
    displayClass: 'font-mono font-bold tracking-tight',
    bodyClass: 'font-mono leading-loose tracking-wide',
  },
  {
    id: 'serif-elegant',
    name: 'Playfair & Inter',
    displayClass: 'font-serif font-black tracking-normal',
    bodyClass: 'font-sans leading-relaxed tracking-normal',
  },
  {
    id: 'brutal-impact',
    name: 'Impact & Arial',
    displayClass: 'font-sans font-black tracking-widest uppercase',
    bodyClass: 'font-sans font-bold leading-tight',
  }
];

export function getArchetypeClasses(archetype: DesignArchetype, theme: ColorTheme): Record<string, string> {
  const isDark = theme.isDark;

  switch (archetype) {
    case 'swiss':
      return {
        card: 'border border-current rounded-none bg-transparent',
        button: 'border-2 border-current rounded-none hover:invert transition-all',
        sectionHeader: 'uppercase border-b border-current pb-4 mb-8',
        badge: 'border border-current px-2 py-1 rounded-none text-xs uppercase',
      };
    case 'brutalist':
      return {
        card: 'border-4 border-black bg-white text-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] rounded-none',
        button: 'border-4 border-black bg-accent text-black font-black uppercase hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all rounded-none',
        sectionHeader: 'font-black uppercase text-black bg-accent inline-block px-4 py-2 mb-8 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]',
        badge: 'border-2 border-black bg-yellow-300 text-black px-2 py-1 font-bold uppercase shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]',
      };
    case 'neo-tokyo':
      return {
        card: 'bg-black/50 border border-accent/50 shadow-[0_0_15px_rgba(var(--accent-rgb),0.3)] rounded-xl backdrop-blur-md',
        button: 'bg-accent/20 border border-accent text-accent hover:bg-accent hover:text-black hover:shadow-[0_0_20px_var(--accent)] transition-all rounded-md uppercase font-bold tracking-widest',
        sectionHeader: 'text-transparent bg-clip-text bg-gradient-to-r from-accent to-white font-bold tracking-widest uppercase mb-8 drop-shadow-[0_0_10px_rgba(var(--accent-rgb),0.5)]',
        badge: 'bg-accent text-black px-2 py-1 rounded-sm text-xs font-bold uppercase shadow-[0_0_10px_var(--accent)]',
      };
    case 'glassmorphism':
      return {
        card: 'bg-white/10 dark:bg-black/20 backdrop-blur-lg border border-white/20 dark:border-white/10 rounded-2xl shadow-xl',
        button: 'bg-white/20 dark:bg-black/30 backdrop-blur-md border border-white/30 hover:bg-white/30 dark:hover:bg-black/50 transition-all rounded-xl shadow-lg',
        sectionHeader: 'font-light tracking-tight mb-8 opacity-90',
        badge: 'bg-white/20 backdrop-blur-sm border border-white/30 px-3 py-1 rounded-full text-xs',
      };
    case 'retro-terminal':
      return {
        card: 'bg-black border border-[#39FF14] text-[#39FF14] rounded-none p-4',
        button: 'bg-transparent border border-[#39FF14] text-[#39FF14] hover:bg-[#39FF14] hover:text-black transition-none rounded-none uppercase',
        sectionHeader: 'text-[#39FF14] border-b border-dashed border-[#39FF14] pb-2 mb-8 uppercase font-mono',
        badge: 'bg-[#39FF14] text-black px-2 py-0 rounded-none text-xs uppercase font-mono',
      };
    case 'scandinavian':
      return {
        card: 'bg-white dark:bg-[#2C2C2C] border-none shadow-sm hover:shadow-md transition-shadow rounded-3xl',
        button: 'bg-current text-canvas hover:opacity-80 transition-opacity rounded-full px-8 py-3 font-medium',
        sectionHeader: 'font-medium tracking-tight mb-8 text-current opacity-80',
        badge: 'bg-black/5 dark:bg-white/10 px-4 py-1.5 rounded-full text-sm',
      };
    case 'cyberpunk':
      return {
        card: 'bg-[#FCEE09]/10 border-2 border-[#FCEE09] text-[#00FFFF] shadow-[4px_4px_0px_0px_rgba(252,238,9,0.5)] rounded-none clip-path-polygon-[0_0,100%_0,100%_calc(100%-20px),calc(100%-20px)_100%,0_100%]',
        button: 'bg-[#00FFFF] text-black font-bold uppercase tracking-widest border-l-4 border-r-4 border-black hover:bg-[#FCEE09] transition-colors rounded-none px-6 py-2',
        sectionHeader: 'text-[#FCEE09] font-black uppercase tracking-[0.2em] mb-8 bg-black inline-block px-4 py-2 border-l-4 border-[#00FFFF]',
        badge: 'bg-red-600 text-white px-2 py-0.5 rounded-none text-xs font-bold uppercase tracking-wider',
      };
    case 'neumorphism':
      return {
        card: 'bg-[#E0E5EC] dark:bg-[#2B2D31] border-none rounded-3xl shadow-[9px_9px_16px_rgb(163,177,198,0.6),-9px_-9px_16px_rgba(255,255,255,0.5)] dark:shadow-[9px_9px_16px_rgba(0,0,0,0.4),-9px_-9px_16px_rgba(255,255,255,0.05)]',
        button: 'bg-[#E0E5EC] dark:bg-[#2B2D31] text-current rounded-xl px-8 py-3 font-semibold shadow-[5px_5px_10px_rgb(163,177,198,0.6),-5px_-5px_10px_rgba(255,255,255,0.5)] dark:shadow-[5px_5px_10px_rgba(0,0,0,0.4),-5px_-5px_10px_rgba(255,255,255,0.05)] hover:shadow-[inset_5px_5px_10px_rgb(163,177,198,0.6),inset_-5px_-5px_10px_rgba(255,255,255,0.5)] transition-all',
        sectionHeader: 'font-bold tracking-tight mb-8 text-current opacity-80 drop-shadow-sm',
        badge: 'bg-[#E0E5EC] dark:bg-[#2B2D31] px-4 py-1.5 rounded-full text-sm font-medium shadow-[inset_3px_3px_6px_rgb(163,177,198,0.6),inset_-3px_-3px_6px_rgba(255,255,255,0.5)]',
      };
    case 'corporate':
      return {
        card: 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg shadow-sm hover:shadow-md transition-shadow',
        button: 'bg-blue-600 hover:bg-blue-700 text-white rounded-md px-6 py-2.5 font-medium transition-colors',
        sectionHeader: 'text-2xl font-semibold mb-6 text-slate-900 dark:text-white',
        badge: 'bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800 px-2.5 py-0.5 rounded-full text-xs font-medium',
      };
    default:
      return {
        card: 'bg-secondary rounded-lg border border-transparent',
        button: 'bg-accent text-canvas rounded-md hover:opacity-90',
        sectionHeader: 'font-bold mb-6',
        badge: 'bg-primary text-text px-2 py-1 rounded-md text-xs',
      };
  }
}
