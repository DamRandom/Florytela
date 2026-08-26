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
  id: string;
  name: string;
  primaryColor: string;
  secondaryColor: string;
  accentColor?: string;
  modelApronImage: string;
  tagline?: string;
  description?: string;
  swatches?: ColorPaletteSwatch[];
  magazineTitle?: string;
  philosophyQuote?: string;
  harmonyDescription?: string;
  bottomNote?: string;
  whyChooseDescription?: string;
  textileSpecs?: string;
  bgAtmosphereImage?: string;
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
