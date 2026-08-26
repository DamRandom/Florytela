"use client";

import React, { useState } from "react";
import {
  Sparkles,
  ShieldCheck,
  Truck,
  Scissors,
  CheckCircle2,
  Info,
  Layers,
  HeartHandshake,
} from "lucide-react";
import { Product } from "@/lib/products";
import { ProductGallery } from "./ProductGallery";
import { WhatsAppButton } from "../ui/WhatsAppButton";
import { formatPrice } from "@/lib/utils";

interface ProductDetailViewProps {
  product: Product;
}

type TabType = "materials" | "dimensions" | "ideal" | "care";

export function ProductDetailView({ product }: ProductDetailViewProps) {
  const [selectedColor, setSelectedColor] = useState(
    product.colors && product.colors.length > 0
      ? product.colors[0].name
      : "Color Principal"
  );
  const [quantity, setQuantity] = useState(1);
  const [withEmbroidery, setWithEmbroidery] = useState(false);
  const [embroideryText, setEmbroideryText] = useState("");
  const [activeTab, setActiveTab] = useState<TabType>("materials");

  const embroideryCost = 250;
  const calculatedPrice = (product.price + (withEmbroidery ? embroideryCost : 0)) * quantity;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
      {/* Left Column: Gallery */}
      <div className="lg:col-span-6">
        <ProductGallery images={product.images} productName={product.name} />

        {/* Guarantee Callout below gallery */}
        <div className="mt-8 grid grid-cols-3 gap-4 p-4 bg-cream/60 border border-beige text-center">
          <div className="flex flex-col items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-burgundy" />
            <span className="text-[10px] uppercase tracking-wider text-charcoal font-medium">
              Garantía de Costuras
            </span>
          </div>
          <div className="flex flex-col items-center gap-1.5 border-x border-beige">
            <Scissors className="w-4 h-4 text-burgundy" />
            <span className="text-[10px] uppercase tracking-wider text-charcoal font-medium">
              Hecho a Mano
            </span>
          </div>
          <div className="flex flex-col items-center gap-1.5">
            <Truck className="w-4 h-4 text-burgundy" />
            <span className="text-[10px] uppercase tracking-wider text-charcoal font-medium">
              Envío Seguro Perú
            </span>
          </div>
        </div>
      </div>

      {/* Right Column: Product Narrative & Customizer */}
      <div className="lg:col-span-6 flex flex-col justify-between">
        <div>
          {/* Eyebrow & Badges */}
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-burgundy">
              {product.categoryLabel}
            </span>
            {product.badge && (
              <span className="text-[10px] uppercase tracking-widest px-2 py-0.5 bg-gold/15 text-gold border border-gold/40 font-medium">
                {product.badge}
              </span>
            )}
          </div>

          {/* Product Title */}
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-charcoal font-normal">
            {product.name}
          </h1>

          {/* Tagline */}
          <p className="font-serif italic text-base sm:text-lg text-taupe mt-2">
            «{product.tagline}»
          </p>

          {/* Price */}
          <div className="mt-4 flex items-baseline gap-3 pb-6 border-b border-beige">
            <span className="font-serif text-2xl sm:text-3xl font-medium text-burgundy">
              {formatPrice(calculatedPrice)}
            </span>
            <span className="text-xs text-taupe">PEN • Impuestos incluidos</span>
          </div>

          {/* Description */}
          <p className="mt-6 text-sm text-charcoal/80 leading-relaxed font-light">
            {product.description}
          </p>

          {/* Color Selector */}
          {product.colors && product.colors.length > 0 && (
            <div className="mt-8">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs uppercase tracking-wider font-semibold text-charcoal">
                  Tono Textil: <span className="font-normal text-burgundy">{selectedColor}</span>
                </span>
              </div>
              <div className="flex items-center gap-3">
                {product.colors.map((color) => (
                  <button
                    key={color.name}
                    type="button"
                    onClick={() => setSelectedColor(color.name)}
                    className={`relative p-1 rounded-full border transition-all duration-200 ${
                      selectedColor === color.name
                        ? "border-burgundy ring-2 ring-burgundy/40"
                        : "border-beige hover:border-gold"
                    }`}
                    title={color.name}
                    aria-label={`Seleccionar tono ${color.name}`}
                  >
                    <span
                      className="block w-6 h-6 rounded-full shadow-xs"
                      style={{ backgroundColor: color.hex }}
                    />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Personalization Options */}
          {product.customizable && (
            <div className="mt-8 p-5 bg-cream/50 border border-beige/90">
              <div className="flex items-center justify-between">
                <label
                  htmlFor="embroidery-toggle"
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <input
                    type="checkbox"
                    id="embroidery-toggle"
                    checked={withEmbroidery}
                    onChange={(e) => setWithEmbroidery(e.target.checked)}
                    className="w-4 h-4 accent-burgundy cursor-pointer"
                  />
                  <span className="text-xs uppercase tracking-wider font-medium text-charcoal">
                    Agregar Bordado Personalizado (+{formatPrice(embroideryCost)})
                  </span>
                </label>
                <Sparkles className="w-3.5 h-3.5 text-gold" />
              </div>

              {withEmbroidery && (
                <div className="mt-4 pt-3 border-t border-beige/70">
                  <label className="block text-[11px] uppercase tracking-wider text-taupe mb-1">
                    Iniciales, Nombre o Texto a bordar:
                  </label>
                  <input
                    type="text"
                    placeholder="Ej. A. Martínez / CHEF DANIEL"
                    value={embroideryText}
                    onChange={(e) => setEmbroideryText(e.target.value)}
                    className="w-full bg-ivory border border-beige px-3 py-2 text-xs text-charcoal placeholder:text-taupe focus:outline-none focus:border-burgundy"
                    maxLength={35}
                  />
                  <p className="text-[10px] text-taupe mt-1">
                    Coordinaremos tipografía y color de hilo directamente por WhatsApp tras tu solicitud.
                  </p>
                </div>
              )}
            </div>
          )}

          {/* Quantity Selector & Order CTA */}
          <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            {/* Quantity */}
            <div className="flex items-center border border-beige bg-ivory w-fit">
              <button
                type="button"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="px-3.5 py-3 text-charcoal hover:text-burgundy transition-colors text-sm"
                aria-label="Disminuir cantidad"
              >
                -
              </button>
              <span className="px-3 py-3 text-xs font-mono font-medium text-charcoal min-w-8 text-center">
                {quantity}
              </span>
              <button
                type="button"
                onClick={() => setQuantity(quantity + 1)}
                className="px-3.5 py-3 text-charcoal hover:text-burgundy transition-colors text-sm"
                aria-label="Aumentar cantidad"
              >
                +
              </button>
            </div>

            {/* Direct WhatsApp Ordering */}
            <div className="flex-1">
              <WhatsAppButton
                type="product"
                productName={product.name}
                productSlug={product.slug}
                selectedColor={selectedColor}
                quantity={quantity}
                customNotes={
                  withEmbroidery
                    ? `Deseo bordado: "${embroideryText || 'A convenir'}"`
                    : undefined
                }
                variant="primary"
                size="lg"
                className="w-full"
              >
                Solicitar por WhatsApp
              </WhatsAppButton>
            </div>
          </div>

          <p className="text-[11px] text-taupe mt-2.5 text-center sm:text-left">
            * Confeccionamos bajo pedido o enviamos piezas en stock en 24-48 hrs.
          </p>

          {/* Technical Tabs */}
          <div className="mt-12 pt-8 border-t border-beige">
            {/* Tab navigation */}
            <div className="flex items-center gap-2 border-b border-beige overflow-x-auto scrollbar-none pb-px">
              {[
                { id: "materials" as const, label: "Materiales", icon: Layers },
                { id: "dimensions" as const, label: "Dimensiones", icon: Info },
                { id: "ideal" as const, label: "Ideal Para", icon: HeartHandshake },
                { id: "care" as const, label: "Cuidados", icon: Scissors },
              ].map((tab) => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-1.5 px-3 py-2 text-xs uppercase tracking-wider font-medium border-b-2 whitespace-nowrap transition-colors ${
                      isActive
                        ? "border-burgundy text-burgundy font-semibold"
                        : "border-transparent text-charcoal/60 hover:text-charcoal"
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Tab Content */}
            <div className="pt-6 text-xs sm:text-sm text-charcoal/80 leading-relaxed font-light">
              {activeTab === "materials" && (
                <ul className="space-y-2">
                  {product.materials.map((m, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold mt-1.5 shrink-0" />
                      <span>{m}</span>
                    </li>
                  ))}
                </ul>
              )}

              {activeTab === "dimensions" && (
                <div className="space-y-3">
                  <p>
                    <strong className="font-medium text-charcoal">Medidas: </strong>
                    {product.dimensions}
                  </p>
                  <p className="text-xs text-taupe">
                    El sistema de tirantes cruzados cuenta con correderas metálicas de ajuste que permiten adaptar el mandil a alturas desde 1.55 m hasta 1.95 m con total confort.
                  </p>
                </div>
              )}

              {activeTab === "ideal" && (
                <ul className="space-y-2">
                  {product.idealFor.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}

              {activeTab === "care" && (
                <ul className="space-y-2">
                  {product.careGuide.map((cg, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-burgundy mt-1.5 shrink-0" />
                      <span>{cg}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
