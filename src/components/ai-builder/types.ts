export type WebsiteType = 'ecommerce' | 'portfolio' | 'agency' | 'saas';
export type AestheticStyle = 'swiss' | 'brutalist' | 'minimal' | 'playful';
export type ColorPalette = 'monochrome' | 'neon' | 'earth' | 'pastel';
export type FontPairing = 'modern' | 'elegant' | 'tech';

export interface PageContent {
  id: string;
  name: string;
  headline: string;
  subheadline: string;
}

export interface AIBuilderState {
  type: WebsiteType | null;
  style: AestheticStyle | null;
  palette: ColorPalette | null;
  font: FontPairing | null;
  pages: PageContent[];
  currentPageId: string | null;
}
