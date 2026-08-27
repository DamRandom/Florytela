"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { CTAButton } from "../ui/CTAButton";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] lg:min-h-screen flex items-center justify-center pt-20 sm:pt-24 lg:pt-28 pb-12 sm:pb-16 overflow-hidden bg-ivory">
      {/* Textura de fondo sutil */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.015] bg-[radial-gradient(#550B14_1px,transparent_1px)] bg-size-[32px_32px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 lg:gap-16 items-center">
          
          {/* FOTO — En móvil va PRIMERA (order-1), en desktop a la derecha (lg:order-2) */}
          <div className="order-1 lg:order-2 lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="relative mx-auto max-w-sm sm:max-w-md lg:max-w-none"
            >
              <div className="relative aspect-[4/5] sm:aspect-[4/5] w-full bg-beige-light border border-beige/60 overflow-hidden shadow-xl sm:shadow-2xl">
                <Image
                  src="/images/hero-florytela.png"
                  alt="Mandil Florytela by Adriana Martínez"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover object-center transform hover:scale-105 transition-transform duration-1000 ease-out"
                />

                <div className="absolute inset-0 bg-linear-to-t from-charcoal/40 via-transparent to-transparent" />

                {/* Minimalist Floating Caption */}
                <div className="absolute bottom-3.5 sm:bottom-5 left-3.5 sm:left-5 right-3.5 sm:right-5 flex items-end justify-between">
                  <div>
                    <span className="text-[8.5px] sm:text-[9px] uppercase tracking-[0.24em] text-ivory/80">
                      Línea Personalización
                    </span>
                    <h4 className="mt-0.5 font-serif text-sm sm:text-lg text-ivory font-normal">
                      Diseño a medida desde 1 pieza
                    </h4>
                  </div>

                  <Link
                    href="/linea/personalizacion"
                    className="w-7.5 h-7.5 sm:w-9 sm:h-9 rounded-full bg-ivory text-burgundy flex items-center justify-center hover:bg-burgundy hover:text-ivory transition-colors shadow-md shrink-0 ml-2"
                    aria-label="Ver línea Personalización"
                  >
                    <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>

          {/* CONTENIDO & BOTONES — En móvil va DEBAJO DE LA FOTO (order-2), en desktop a la izquierda (lg:order-1) */}
          <div className="order-2 lg:order-1 lg:col-span-7 flex flex-col items-start">
            {/* Subtle origin tag */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-2.5 sm:gap-3 mb-2.5 sm:mb-6"
            >
              <span className="w-5 sm:w-6 h-px bg-beige" />
              <span className="text-[9px] sm:text-[11px] uppercase tracking-[0.32em] font-medium text-taupe">
                Lima, Perú
              </span>
            </motion.div>

            {/* Gran Logo Lockup */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="flex flex-col items-start"
            >
              <h1 className="font-serif text-4.5xl sm:text-7xl md:text-8xl lg:text-[6.8rem] xl:text-[8rem] font-normal leading-[0.92] tracking-tight text-burgundy">
                Florytela
              </h1>

              <span className="text-[11px] sm:text-sm md:text-base tracking-[0.34em] uppercase text-taupe font-medium mt-1.5 sm:mt-4 pl-0.5">
                by Adriana Martínez
              </span>
            </motion.div>

            {/* Tagline refinado */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-4 sm:mt-7 flex items-center gap-2.5 sm:gap-4 text-xs sm:text-sm text-charcoal/75 font-light tracking-wide pl-0.5"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-beige shrink-0" />
              <p className="font-serif text-sm sm:text-lg italic text-charcoal/85">
                Mandiles con elegancia, calidez y diseño a medida.
              </p>
            </motion.div>

            {/* Acciones — Uno al lado del otro en móvil con tamaño reducido */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-6 sm:mt-10 flex flex-row items-center gap-2.5 sm:gap-4 w-full sm:w-auto"
            >
              <Link
                href="/contacto"
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 bg-burgundy hover:bg-burgundy-deep text-ivory px-4 sm:px-6 py-2.5 sm:py-3.5 text-[11px] sm:text-xs uppercase tracking-[0.14em] font-medium transition-all duration-300 shadow-xs active:scale-[0.97] text-center"
              >
                <span>Haz tu pedido</span>
                <ArrowUpRight className="w-3.5 h-3.5 shrink-0" />
              </Link>

              <Link
                href="/catalogo"
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 text-[11px] sm:text-xs uppercase tracking-[0.14em] text-charcoal hover:text-burgundy bg-ivory hover:bg-beige-light/40 transition-colors py-2.5 sm:py-3.5 px-3.5 sm:px-5 border border-beige active:scale-[0.97] text-center font-medium shadow-2xs"
              >
                <span>Ver catálogo</span>
                <ArrowUpRight className="w-3 h-3 text-taupe shrink-0" />
              </Link>
            </motion.div>

            {/* Referencia a las tres líneas */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.45 }}
              className="mt-7 sm:mt-14 flex items-center gap-2.5 sm:gap-4 text-[8.5px] sm:text-[10px] uppercase tracking-[0.24em] text-taupe/70 pl-0.5"
            >
              <Link
                href="/linea/fast"
                className="hover:text-burgundy transition-colors py-1"
              >
                01 Fast
              </Link>
              <span className="w-1 h-1 rounded-full bg-beige" />
              <Link
                href="/linea/personalizacion"
                className="hover:text-burgundy transition-colors font-medium text-taupe py-1"
              >
                02 Personalización
              </Link>
              <span className="w-1 h-1 rounded-full bg-beige" />
              <Link
                href="/linea/deluxe"
                className="hover:text-burgundy transition-colors py-1"
              >
                03 Deluxe
              </Link>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
