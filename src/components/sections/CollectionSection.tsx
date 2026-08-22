"use client";

import React from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import { getFeaturedProducts } from "@/lib/products";
import { SectionHeading } from "../ui/SectionHeading";
import { ProductCard } from "../products/ProductCard";
import { CTAButton } from "../ui/CTAButton";
import { FadeIn } from "../animations/FadeIn";

export function CollectionSection() {
  const featuredProducts = getFeaturedProducts().slice(0, 4);

  return (
    <section className="py-20 sm:py-28 bg-cream/40 border-t border-beige/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <SectionHeading
          eyebrow="La Colección"
          title="Piezas de autor creadas para perdurar"
          subtitle="Cada silueta responde a un diálogo constante entre la función técnica del uniforme y la poética de los textiles puros."
        />

        {/* Featured Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mt-12">
          {featuredProducts.map((product, idx) => (
            <FadeIn key={product.id} delay={idx * 0.1} direction="up" distance={24}>
              <ProductCard product={product} />
            </FadeIn>
          ))}
        </div>

        {/* Bottom Editorial Callout */}
        <FadeIn delay={0.4} direction="up" distance={20} className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center justify-between gap-6 p-6 sm:p-8 bg-ivory border border-beige max-w-4xl mx-auto w-full shadow-xs">
            <div className="text-left">
              <div className="flex items-center gap-2 text-gold text-xs uppercase tracking-widest font-medium">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Catálogo Completo</span>
              </div>
              <h3 className="font-serif text-xl sm:text-2xl text-charcoal font-medium mt-1">
                Descubre todos los modelos y opciones de personalización
              </h3>
            </div>
            <CTAButton
              href="/catalogo"
              variant="primary"
              size="md"
              icon={<ArrowRight className="w-4 h-4" />}
            >
              Ver Catálogo
            </CTAButton>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
