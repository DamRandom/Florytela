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
  category: "gastronomia" | "barista" | "artesanal" | "especial";
  categoryLabel: string;
  tagline: string;
  shortDescription: string;
  description: string;
  price: number;
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

export interface ColorPaletteDetail {
  title: string;
  image: string;
}

export interface ColorPalette {
  id: string;
  name: string;
  magazineTitle: string;
  philosophyQuote: string;
  primaryColor: string;
  secondaryColor: string;
  accentColor: string;
  bgAtmosphereImage: string;
  modelApronImage: string;
  harmonyDescription: string;
  whyChooseDescription: string;
  textileSpecs: string;
  bottomNote?: string;
  details: ColorPaletteDetail[];
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
