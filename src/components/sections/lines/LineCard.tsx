"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import type { ProductLine } from "@/types";

interface LineCardProps {
  line: ProductLine;
}

export function LineCard({ line }: LineCardProps) {
  const isFeatured = line.featured;
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`group flex flex-col h-full bg-ivory border transition-all duration-500 overflow-hidden ${
        isFeatured
          ? "border-burgundy/40 shadow-xl ring-1 ring-burgundy/20"
          : "border-beige/80 hover:border-taupe/60 hover:shadow-lg"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Imagen con hover crossfade */}
      <Link
        href={line.href}
        className="relative aspect-4/5 w-full overflow-hidden bg-beige-light block select-none"
        aria-label={`Ver detalles de ${line.name}`}
      >
        {/* Foto completa (visible por defecto) */}
        <Image
          src={line.imageFull}
          alt={`${line.name} — Silueta completa`}
          fill
          priority={isFeatured}
          sizes="(max-width: 640px) 86vw, (max-width: 1024px) 400px, 33vw"
          className="object-cover object-center transition-all duration-700 ease-out group-hover:opacity-0 group-hover:scale-105"
        />

        {/* Close-up (visible en hover) */}
        <Image
          src={line.imageDetail}
          alt={`${line.name} — Detalle de textura`}
          fill
          sizes="(max-width: 640px) 86vw, (max-width: 1024px) 400px, 33vw"
          className="object-cover object-center absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700 ease-out group-hover:scale-105"
        />

        {/* Gradiente inferior */}
        <div className="absolute inset-0 bg-linear-to-t from-charcoal/45 via-transparent to-transparent opacity-80 pointer-events-none" />

        {/* Info flotante */}
        <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between z-10 pointer-events-none">
          <div>
            <span className="text-[10px] uppercase tracking-[0.24em] text-ivory font-medium drop-shadow-sm block">
              {line.subtitle}
            </span>
            <span className="text-[11px] text-ivory/80 font-light drop-shadow-xs line-clamp-1 mt-0.5">
              {isHovered ? line.detailLabel : "Pasa el cursor para ver textura"}
            </span>
          </div>
          <div className="w-8 h-8 rounded-full bg-ivory/90 text-burgundy flex items-center justify-center transform translate-y-1 opacity-90 group-hover:translate-y-0 group-hover:bg-burgundy group-hover:text-ivory transition-all duration-300 shadow-sm">
            <ArrowUpRight className="w-3.5 h-3.5" />
          </div>
        </div>
      </Link>

      {/* Cuerpo informativo */}
      <div className="p-6 sm:p-7 flex flex-col flex-1 justify-between gap-6 bg-ivory">
        <div>
          <span className="text-[10px] uppercase tracking-[0.26em] text-taupe font-medium block mb-1">
            {line.subtitle}
          </span>

          <Link href={line.href} className="block group-hover:text-burgundy transition-colors">
            <h3 className="font-serif text-2xl sm:text-2.5xl text-charcoal font-medium">
              {line.name}
            </h3>
          </Link>

          <p className="mt-1 font-serif text-sm italic text-taupe font-normal">
            «{line.tagline}»
          </p>

          <p className="mt-3.5 text-xs sm:text-sm text-charcoal/70 leading-relaxed font-light">
            {line.description}
          </p>

          <div className="mt-4 py-2 px-3 bg-beige-light/40 border border-beige/60 text-[11px] text-taupe flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-burgundy shrink-0" />
            <span className="line-clamp-1">{line.detailLabel}</span>
          </div>

          <div className="mt-5 pt-4 border-t border-beige/60 flex flex-col gap-2">
            {line.highlights.map((item, idx) => (
              <div key={idx} className="flex items-center gap-2 text-xs text-charcoal/80 font-light">
                <span className="w-4 h-4 rounded-full bg-beige-light/80 flex items-center justify-center text-burgundy shrink-0">
                  <Check className="w-2.5 h-2.5" />
                </span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-4 border-t border-beige/60">
          <Link
            href={line.href}
            className={`w-full text-center py-3.5 text-xs uppercase tracking-[0.14em] font-medium transition-all duration-300 inline-flex items-center justify-center gap-2 ${
              isFeatured
                ? "bg-burgundy hover:bg-burgundy-deep text-ivory shadow-xs"
                : "bg-beige-light/50 hover:bg-burgundy hover:text-ivory text-charcoal border border-beige/80 hover:border-burgundy"
            }`}
          >
            <span>{line.cta}</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
