import React from "react";
import type { Metadata } from "next";
import { PRODUCTS } from "@/lib/products";
import { ProductGrid } from "@/components/products/ProductGrid";
import { CTAButton } from "@/components/ui/CTAButton";
import { Sparkles, MessageCircle } from "lucide-react";
import { createWhatsAppLink } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Catálogo de Mandiles de Autor",
  description:
    "Explora nuestra colección completa de mandiles de alta confección para gastronomía, baristas, oficios creativos y ediciones especiales.",
};

export default function CatalogoPage() {
  const whatsappCustomHref = createWhatsAppLink({ type: "custom" });

  return (
    <div className="pt-28 sm:pt-36 pb-24 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-burgundy font-medium">
            Colección Permanente & Ediciones de Taller
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-charcoal font-normal mt-3">
            El Catálogo Florytela
          </h1>
          <p className="mt-4 text-base sm:text-lg text-charcoal/70 font-light leading-relaxed">
            Cada modelo ha sido perfeccionado a través de prototipos sucesivos para ofrecer la máxima comodidad, ergonomía y elegancia textil.
          </p>
        </div>

        {/* Product Grid with full filters & search */}
        <ProductGrid
          products={PRODUCTS}
          showFilters={true}
          showSearch={true}
        />

        {/* Custom Order Callout */}
        <div className="mt-24 p-8 sm:p-12 bg-cream border border-beige flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-xl">
            <div className="flex items-center gap-2 text-gold text-xs uppercase tracking-widest font-semibold mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>¿No encuentras la combinación exacta?</span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl text-charcoal font-medium">
              Confeccionamos tu mandil sobre pedido especial
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-charcoal/70 font-light leading-relaxed">
              Selecciona combinaciones personalizadas de linos, tirantes de cuero, disposición de bolsillos o bordado de tu monograma.
            </p>
          </div>

          <CTAButton
            href={whatsappCustomHref}
            target="_blank"
            rel="noopener noreferrer"
            variant="primary"
            size="lg"
            icon={<MessageCircle className="w-4 h-4" />}
            iconPosition="left"
          >
            Consultar con el Atelier
          </CTAButton>
        </div>
      </div>
    </div>
  );
}
