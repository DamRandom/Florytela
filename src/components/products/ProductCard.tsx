"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { Product } from "@/lib/products";
import { formatPrice } from "@/lib/utils";

interface ProductCardProps {
  product: Product;
  priority?: boolean;
}

export function ProductCard({ product, priority = false }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [selectedColorIndex, setSelectedColorIndex] = useState(0);

  // If product has secondary image, switch on hover
  const displayImage =
    isHovered && product.images.length > 1
      ? product.images[1]
      : product.images[0];

  return (
    <div
      className="group flex flex-col bg-ivory border border-beige/80 hover:border-burgundy/60 transition-all duration-500 overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Showcase */}
      <Link
        href={`/catalogo/${product.slug}`}
        className="relative aspect-[4/5] w-full overflow-hidden bg-beige-light block"
      >
        <Image
          src={displayImage}
          alt={product.name}
          fill
          priority={priority}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
        />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10">
          {product.badge && (
            <span className="bg-ivory/95 backdrop-blur-sm text-burgundy text-[10px] uppercase tracking-widest font-semibold px-2.5 py-1 border border-beige/60">
              {product.badge}
            </span>
          )}
          {product.customizable && (
            <span className="bg-charcoal/85 backdrop-blur-sm text-ivory text-[9px] uppercase tracking-wider font-medium px-2 py-0.5 inline-flex items-center gap-1 w-fit">
              <Sparkles className="w-2.5 h-2.5 text-beige" />
              <span>Personalizable</span>
            </span>
          )}
        </div>

        {/* Quick View Hover Overlay */}
        <div className="absolute inset-0 bg-charcoal/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4">
          <div className="w-full bg-ivory/95 backdrop-blur-md text-burgundy text-xs uppercase tracking-widest font-medium py-2.5 px-4 text-center transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300 flex items-center justify-center gap-1.5 shadow-md">
            <span>Ver Ficha Técnica</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </div>
        </div>
      </Link>

      {/* Info Container */}
      <div className="p-5 flex flex-col flex-1 justify-between gap-3">
        <div>
          {/* Category & Color Swatches */}
          <div className="flex items-center justify-between gap-2 mb-1.5">
            <span className="text-[11px] uppercase tracking-[0.18em] text-taupe font-medium">
              {product.categoryLabel}
            </span>

            {/* Colors preview */}
            {product.colors && product.colors.length > 0 && (
              <div className="flex items-center gap-1">
                {product.colors.slice(0, 4).map((c, i) => (
                  <button
                    key={c.name}
                    title={c.name}
                    onClick={(e) => {
                      e.preventDefault();
                      setSelectedColorIndex(i);
                    }}
                    className={`w-3 h-3 rounded-full border transition-transform cursor-pointer ${
                      selectedColorIndex === i
                        ? "scale-125 border-charcoal"
                        : "border-beige/80"
                    }`}
                    style={{ backgroundColor: c.hex }}
                    aria-label={`Color ${c.name}`}
                  />
                ))}
                {product.colors.length > 4 && (
                  <span className="text-[9px] text-taupe font-mono">
                    +{product.colors.length - 4}
                  </span>
                )}
              </div>
            )}
          </div>

          {/* Title */}
          <Link href={`/catalogo/${product.slug}`} className="block group-hover:text-burgundy transition-colors">
            <h3 className="font-serif text-xl sm:text-2xl text-charcoal font-medium leading-snug">
              {product.name}
            </h3>
          </Link>

          {/* Tagline / short description */}
          <p className="mt-1 text-xs text-charcoal/70 line-clamp-2 leading-relaxed font-light">
            {product.shortDescription}
          </p>
        </div>

        {/* Price & Action */}
        <div className="pt-3 border-t border-beige/60 flex items-center justify-between">
          <div>
            <span className="text-[10px] uppercase tracking-wider text-taupe block">Desde</span>
            <span className="font-serif text-lg font-medium text-charcoal">
              {formatPrice(product.price)}
            </span>
          </div>

          <Link
            href={`/catalogo/${product.slug}`}
            className="text-xs uppercase tracking-wider text-burgundy font-medium inline-flex items-center gap-1 hover:text-burgundy-deep transition-colors"
          >
            <span>Detalles</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
