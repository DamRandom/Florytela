// Re-exporta desde src/data/products para mantener retrocompatibilidad.
// La fuente de verdad ahora vive en src/data/products.ts
export {
  PRODUCTS,
  getProductBySlug,
  getFeaturedProducts,
  getProductsByCategory,
  getRelatedProducts,
} from "@/data/products";
export type { Product, ProductColor } from "@/types";
