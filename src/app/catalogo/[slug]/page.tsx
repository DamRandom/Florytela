import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ChevronRight, ArrowLeft } from "lucide-react";
import { PRODUCTS, getProductBySlug, getRelatedProducts } from "@/lib/products";
import { ProductDetailView } from "@/components/products/ProductDetailView";
import { ProductCard } from "@/components/products/ProductCard";
import { SectionHeading } from "@/components/ui/SectionHeading";

interface ProductPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return PRODUCTS.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return {
      title: "Producto no encontrado",
    };
  }

  return {
    title: `${product.name} — Mandil de Autor`,
    description: product.shortDescription,
    openGraph: {
      title: `${product.name} | Florytela by Adriana Martínez`,
      description: product.shortDescription,
      images: [
        {
          url: product.images[0],
          width: 1200,
          height: 900,
          alt: product.name,
        },
      ],
    },
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const relatedProducts = getRelatedProducts(product.slug, 3);

  return (
    <div className="pt-28 sm:pt-36 pb-24 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <nav
          aria-label="Breadcrumb"
          className="flex items-center gap-2 text-xs uppercase tracking-wider text-taupe mb-8"
        >
          <Link href="/" className="hover:text-burgundy transition-colors">
            Inicio
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link href="/catalogo" className="hover:text-burgundy transition-colors">
            Catálogo
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-charcoal font-medium truncate">
            {product.name}
          </span>
        </nav>

        {/* Product Details Section */}
        <ProductDetailView product={product} />

        {/* Related Products Section */}
        {relatedProducts.length > 0 && (
          <div className="mt-28 pt-16 border-t border-beige">
            <SectionHeading
              eyebrow="Otras Creaciones"
              title="Explora más piezas del Atelier"
              subtitle="Mandiles diseñados con la misma devoción por el patronaje y la pureza textil."
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              {relatedProducts.map((rel) => (
                <ProductCard key={rel.id} product={rel} />
              ))}
            </div>
          </div>
        )}

        {/* Back Link */}
        <div className="mt-16 text-center">
          <Link
            href="/catalogo"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-burgundy hover:text-burgundy-deep font-medium border-b border-burgundy/40 hover:border-burgundy pb-0.5 transition-all"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Volver a todo el catálogo</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
