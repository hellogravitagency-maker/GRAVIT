export type DesignArchetype = 
  | 'swiss' 
  | 'brutalist' 
  | 'neo-tokyo' 
  | 'glassmorphism' 
  | 'retro-terminal' 
  | 'scandinavian'
  | 'cyberpunk'
  | 'neumorphism'
  | 'corporate';

export type WebsiteType = 'startup' | 'ecommerce' | 'education' | 'portfolio' | 'agency' | 'dashboard' | 'blog';

export interface ColorTheme {
  id: string;
  name: string;
  primary: string;
  secondary: string;
  accent: string;
  canvas: string;
  text: string;
  isDark: boolean;
}

export interface TypographyPair {
  id: string;
  name: string;
  displayClass: string; // e.g. font-sans tracking-tighter
  bodyClass: string;    // e.g. font-sans leading-relaxed
}

export type SpacingScale = 'condensed' | 'balanced' | 'spacious';

export interface PixelWardrobe {
  bodyGradient: string;
  accessory: 'none' | 'glasses' | 'beret' | 'crown' | 'bowtie' | 'mustache';
}

export interface DesignSystemState {
  archetype: DesignArchetype;
  websiteType: WebsiteType;
  colorTheme: ColorTheme;
  typography: TypographyPair;
  spacing: SpacingScale;
  pixelWardrobe: PixelWardrobe;
}
