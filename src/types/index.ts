// ─────────────────────────────────────────────
// Florytela — Central Type Definitions
// ─────────────────────────────────────────────

export interface ProductColor {
  name: string;
  hex: string;
  imageIndex?: number;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: "fast" | "personalizacion" | "deluxe" | string;
  categoryLabel: string;
  tagline: string;
  shortDescription: string;
  description: string;
  price?: number;
  images: string[];
  materials: string[];
  colors: ProductColor[];
  customizable: boolean;
  features: string[];
  idealFor: string[];
  dimensions: string;
  careGuide: string[];
  isFeatured?: boolean;
  isNew?: boolean;
  badge?: string;
}

export interface ColorPaletteSwatch {
  name: string;
  hex: string;
  role: string;
}

export interface ColorPaletteDetail {
  title: string;
  image: string;
}

export interface ColorPalette {
  // ─────────────────────────────────────────
  // Identificación
  // ─────────────────────────────────────────

  id: string;
  name: string;

  // ─────────────────────────────────────────
  // Colores del mandil
  // ─────────────────────────────────────────

  primaryColor: string;
  secondaryColor: string;
  accentColor?: string;

  // ─────────────────────────────────────────
  // Imagen principal del mandil
  // ─────────────────────────────────────────

  modelApronImage: string;

  // ─────────────────────────────────────────
  // Información editorial
  // ─────────────────────────────────────────

  tagline?: string;
  description?: string;
  magazineTitle?: string;
  philosophyQuote?: string;

  // ─────────────────────────────────────────
  // Descripciones del producto
  // ─────────────────────────────────────────

  harmonyDescription?: string;
  whyChooseDescription?: string;
  textileSpecs?: string;
  bottomNote?: string;

  // ─────────────────────────────────────────
  // Paleta cromática
  // ─────────────────────────────────────────

  swatches?: ColorPaletteSwatch[];

  // ─────────────────────────────────────────
  // Colores del escenario / fondo
  // ─────────────────────────────────────────

  backgroundColor?: string;
  backgroundSecondaryColor?: string;
  backgroundAccentColor?: string;
  backgroundLightColor?: string;
  backgroundPedestalColor?: string;
  backgroundLineColor?: string;

  // ─────────────────────────────────────────
  // Imagen atmosférica opcional
  // ─────────────────────────────────────────

  bgAtmosphereImage?: string;

  // ─────────────────────────────────────────
  // Detalles adicionales
  // ─────────────────────────────────────────

  details?: ColorPaletteDetail[];
}

export interface NavigationLink {
  href: string;
  label: string;
}

export interface ProductLine {
  id: string;
  href: string;
  name: string;
  subtitle: string;
  tagline: string;
  description: string;
  imageFull: string;
  imageDetail: string;
  detailLabel: string;
  badge: string;
  highlights: string[];
  cta: string;
  featured?: boolean;
}

export interface SitePillar {
  number: string;
  title: string;
  description: string;
}