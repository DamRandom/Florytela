import type { ColorPalette } from "@/types";

export const COLOR_PALETTES: ColorPalette[] = [
  {
    id: "ejecutivo",
    name: "Negro & Gris",
    magazineTitle: "MANDIL EJECUTIVO · NEGRO & GRIS",
    philosophyQuote: "ELEGANCIA SOBRIA · CONTRASTE MONOCROMÁTICO · CARÁCTER CONTEMPORÁNEO",
    tagline: "Elegancia sobria · Contraste monocromático · Contemporáneo",
    description:
      "El negro carbón funciona como base dominante, proyectando sobriedad y presencia. El gris claro introduce un contraste limpio que rompe la uniformidad y aporta luminosidad a la silueta, complementado con herrajes niquelados.",
    harmonyDescription:
      "El negro carbón funciona como base dominante, proyectando sobriedad y presencia. El gris claro introduce un contraste limpio que rompe la uniformidad y aporta luminosidad a la silueta, complementado con herrajes niquelados.",
    modelApronImage: "/images/custom/ejecutivo-modelo.png",
    primaryColor: "#1A1A1A",
    secondaryColor: "#B8B8B8",
    accentColor: "#71717A",
    swatches: [
      { name: "Negro Carbón", hex: "#1A1A1A", role: "Base dominante" },
      { name: "Gris Claro", hex: "#B8B8B8", role: "Panel frontal" },
      { name: "Gris Grafito", hex: "#3F3F46", role: "Cintas & tirantes" },
      { name: "Níquel Plateado", hex: "#D4D4D8", role: "Herrajes metálicos" },
    ],
  },
  {
    id: "ivory-rose",
    name: "Borgoña & Ivory",
    magazineTitle: "BURGUNDY IVORY",
    philosophyQuote: "ELEGANCIA CÁLIDA · CONTRASTE PROFUNDO · CARÁCTER ARTESANAL",
    tagline: "Elegancia cálida · Contraste profundo · Carácter artesanal",
    description:
      "El borgoña profundo establece la base visual aportando intensidad y sofisticación. El ivory equilibra la paleta con una presencia luminosa y limpia, mientras que los acentos en cuero caramelo introducen una nota cálida artesanal.",
    harmonyDescription:
      "El borgoña profundo establece la base visual aportando intensidad y sofisticación. El ivory equilibra la paleta con una presencia luminosa y limpia, mientras que los acentos en cuero caramelo introducen una nota cálida artesanal.",
    modelApronImage: "/images/custom/ivory-modelo.png",
    primaryColor: "#550B14",
    secondaryColor: "#F8F6F0",
    accentColor: "#9A5A32",
    swatches: [
      { name: "Borgoña Profundo", hex: "#550B14", role: "Base & ribetes" },
      { name: "Ivory Luminoso", hex: "#F8F6F0", role: "Cuerpo principal" },
      { name: "Cuero Caramelo", hex: "#9A5A32", role: "Acentos de cuero" },
      { name: "Oro Satinado", hex: "#C5A880", role: "Bordado & broches" },
    ],
  },
  {
    id: "verde",
    name: "Ciprés & Roble",
    magazineTitle: "CIPRÉS & ROBLE",
    philosophyQuote: "PROFUNDIDAD TERROSA · CONTRASTE NATURAL · CARÁCTER ARTESANAL",
    tagline: "Profundidad terrosa · Contraste natural · Carácter artesanal",
    description:
      "El carbón profundo establece la base aportando sobriedad. Sobre él, el verde ciprés apagado introduce un matiz natural y sofisticado, complementado con tirantes en cuero marrón roble y herrajes mate.",
    harmonyDescription:
      "El carbón profundo establece la base aportando sobriedad. Sobre él, el verde ciprés apagado introduce un matiz natural y sofisticado, complementado con tirantes en cuero marrón roble y herrajes mate.",
    modelApronImage: "/images/custom/roble-modelo.png",
    primaryColor: "#2E332F",
    secondaryColor: "#77715F",
    accentColor: "#6B4632",
    swatches: [
      { name: "Carbón Terroso", hex: "#2E332F", role: "Base estructural" },
      { name: "Verde Ciprés", hex: "#77715F", role: "Contraste natural" },
      { name: "Marrón Roble", hex: "#6B4632", role: "Tirantes de cuero" },
      { name: "Latón Mate", hex: "#9E978B", role: "Herrajes técnicos" },
    ],
  },
  {
    id: "carbon",
    name: "Carbón & Níquel",
    magazineTitle: "CHARCOAL NOIR",
    philosophyQuote: "SOBRIEDAD VANGUARDISTA · CONTRASTE DE ALTO IMPACTO Y CARÁCTER PROFESIONAL",
    tagline: "Sobriedad vanguardista · Alto impacto · Carácter profesional",
    description:
      "El carbón profundo domina la estructura con presencia sobria y contundente. Los acentos en rojo vivo destacan las zonas de identidad, acompañados de herrajes en níquel mate para un contraste técnico y limpio.",
    harmonyDescription:
      "El carbón profundo domina la estructura con presencia sobria y contundente. Los acentos en rojo vivo destacan las zonas de identidad, acompañados de herrajes en níquel mate para un contraste técnico y limpio.",
    modelApronImage: "/images/custom/noir-modelo.png",
    primaryColor: "#211C1D",
    secondaryColor: "#D71920",
    accentColor: "#B8B3AC",
    swatches: [
      { name: "Carbón Asfalto", hex: "#211C1D", role: "Cuerpo oscuro" },
      { name: "Rojo Borgoña", hex: "#D71920", role: "Acento contraste" },
      { name: "Gris Níquel", hex: "#B8B3AC", role: "Pespuntes" },
      { name: "Acero Mate", hex: "#52525B", role: "Herrajes" },
    ],
  },
];
