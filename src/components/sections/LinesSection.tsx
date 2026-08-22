"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { PRODUCT_LINES } from "@/lib/constants";
import { FadeIn } from "../animations/FadeIn";

export function LinesSection() {
  return (
    <section className="py-20 sm:py-28 bg-beige-light/40 border-t border-beige/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Encabezado */}
        <FadeIn direction="up" distance={16}>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="h-px w-6 bg-beige" />
                <span className="text-xs uppercase tracking-[0.24em] font-medium text-taupe">
                  Tres líneas de producto
                </span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal leading-[1.12] text-charcoal">
                Encuentra el mandil{" "}
                <span className="italic text-burgundy">que necesitas</span>
              </h2>
            </div>
            <p className="text-sm text-charcoal/60 leading-relaxed font-light max-w-sm sm:text-right">
              Cada línea tiene una propuesta distinta. Todas comparten la misma calidad y atención al detalle.
            </p>
          </div>
        </FadeIn>

        {/* Grid de tres líneas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-beige">
          {PRODUCT_LINES.map((line, idx) => (
            <FadeIn key={line.id} delay={idx * 0.1} direction="up" distance={20}>
              <Link
                href={line.href}
                className={`group block h-full border-r border-beige last:border-r-0 p-8 sm:p-10 transition-colors duration-300 relative
                  ${line.featured
                    ? "bg-burgundy text-ivory hover:bg-burgundy-deep"
                    : "bg-ivory hover:bg-beige-light/50"
                  }`}
              >
                {/* Número */}
                <span
                  className={`font-serif text-4xl sm:text-5xl font-normal block mb-6 transition-colors
                    ${line.featured ? "text-ivory/40" : "text-beige"}`}
                >
                  {line.number}
                </span>

                {/* Badge */}
                <span
                  className={`inline-block text-[10px] uppercase tracking-[0.22em] font-medium px-2 py-0.5 mb-4
                    ${line.featured
                      ? "bg-ivory/15 text-ivory/80"
                      : "bg-beige-light text-taupe"
                    }`}
                >
                  {line.badge}
                </span>

                {/* Nombre */}
                <h3
                  className={`font-serif text-2xl sm:text-3xl font-normal mb-1
                    ${line.featured ? "text-ivory" : "text-charcoal"}`}
                >
                  {line.name}
                </h3>

                {/* Tagline */}
                <p
                  className={`text-xs uppercase tracking-[0.16em] font-medium mb-5
                    ${line.featured ? "text-ivory/60" : "text-taupe"}`}
                >
                  {line.tagline}
                </p>

                {/* Descripción */}
                <p
                  className={`text-sm leading-relaxed font-light mb-8
                    ${line.featured ? "text-ivory/80" : "text-charcoal/65"}`}
                >
                  {line.description}
                </p>

                {/* CTA */}
                <div
                  className={`inline-flex items-center gap-2 text-xs uppercase tracking-[0.16em] font-medium transition-all group-hover:gap-3
                    ${line.featured ? "text-ivory" : "text-burgundy"}`}
                >
                  <span>Ver línea</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>

                {/* Ícono de flecha esquina */}
                <div
                  className={`absolute top-6 right-6 w-8 h-8 flex items-center justify-center border transition-colors
                    ${line.featured
                      ? "border-ivory/20 text-ivory/50 group-hover:border-ivory/60 group-hover:text-ivory"
                      : "border-beige text-taupe group-hover:border-burgundy group-hover:text-burgundy"
                    }`}
                >
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>

        {/* Nota inferior */}
        <FadeIn delay={0.35} direction="up" distance={12} className="mt-8 text-center">
          <p className="text-xs text-taupe font-light">
            Personalización disponible en todas las líneas · Desde 1 pieza · Pedidos por mayor disponibles
          </p>
        </FadeIn>

      </div>
    </section>
  );
}
