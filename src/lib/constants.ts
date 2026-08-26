// Re-exporta desde src/data/navigation para mantener retrocompatibilidad.
// La fuente de verdad ahora vive en src/data/navigation.ts
export { SITE_CONFIG, NAV_LINKS, PRODUCT_LINES, CATEGORIES, PILLARS } from "@/data/navigation";
export type { NavigationLink, ProductLine, SitePillar } from "@/types";
