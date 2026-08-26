"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { CTAButton } from "../ui/CTAButton";

export function Hero() {
  return (
    <section className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center pt-24 sm:pt-28 pb-16 overflow-hidden bg-ivory">
      {/* Textura de fondo sutil */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.015] bg-[radial-gradient(#550B14_1px,transparent_1px)] bg-size-[32px_32px]" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* LEFT — Brand Lockup & Editorial Actions */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Subtle origin tag */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-6"
            >
              <span className="w-6 h-px bg-beige" />
              <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.32em] font-medium text-taupe">
                Lima, Perú
              </span>
            </motion.div>

            {/* Gran Logo Lockup */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="flex flex-col items-start"
            >
              <h1 className="font-serif text-6xl sm:text-7xl md:text-8xl lg:text-[6.8rem] xl:text-[8rem] font-normal leading-[0.92] tracking-tight text-burgundy">
                Florytela
              </h1>

              <span className="text-xs sm:text-sm md:text-base tracking-[0.36em] uppercase text-taupe font-medium mt-3 sm:mt-4 pl-1">
                by Adriana Martínez
              </span>
            </motion.div>

            {/* Tagline refinado y conciso */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-8 flex items-center gap-4 text-xs sm:text-sm text-charcoal/75 font-light tracking-wide pl-1"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-beige" />
              <p className="font-serif text-base sm:text-lg italic text-charcoal/85">
                Mandiles con elegancia, calidez y diseño a medida.
              </p>
            </motion.div>

            {/* Acciones */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="mt-10 sm:mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-5"
            >
              <CTAButton
                href="/contacto"
                variant="primary"
                size="lg"
                icon={<ArrowUpRight className="w-4 h-4" />}
              >
                Haz tu pedido
              </CTAButton>

              <Link
                href="/catalogo"
                className="group inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-taupe hover:text-burgundy transition-colors px-2 py-3"
              >
                <span>Ver catálogo</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </motion.div>

            {/* Referencia a las tres líneas */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-14 sm:mt-16 flex items-center gap-3 sm:gap-4 text-[9px] sm:text-[10px] uppercase tracking-[0.24em] text-taupe/70 pl-1"
            >
              <Link
                href="/linea/fast"
                className="hover:text-burgundy transition-colors"
              >
                01 Fast
              </Link>
              <span className="w-1 h-1 rounded-full bg-beige" />
              <Link
                href="/linea/personalizacion"
                className="hover:text-burgundy transition-colors font-medium text-taupe"
              >
                02 Personalización
              </Link>
              <span className="w-1 h-1 rounded-full bg-beige" />
              <Link
                href="/linea/deluxe"
                className="hover:text-burgundy transition-colors"
              >
                03 Deluxe
              </Link>
            </motion.div>
          </div>

          {/* RIGHT — Editorial Imagery */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="relative mx-auto max-w-md lg:max-w-none"
            >
              <div className="relative aspect-3/4 sm:aspect-4/5 w-full bg-beige-light border border-beige/60 overflow-hidden shadow-2xl">
                <Image
                  src="/images/hero-florytela.png"
                  alt="Mandil Florytela by Adriana Martínez"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover object-center transform hover:scale-105 transition-transform duration-1000 ease-out"
                />

                <div className="absolute inset-0 bg-linear-to-t from-charcoal/35 via-transparent to-transparent" />

                {/* Minimalist Floating Caption */}
                <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
                  <div>
                    <span className="text-[9px] uppercase tracking-[0.24em] text-ivory/80">
                      Línea Personalización
                    </span>
                    <h4 className="mt-0.5 font-serif text-base sm:text-lg text-ivory font-normal">
                      Diseño a medida desde 1 pieza
                    </h4>
                  </div>

                  <Link
                    href="/linea/personalizacion"
                    className="w-9 h-9 rounded-full bg-ivory text-burgundy flex items-center justify-center hover:bg-burgundy hover:text-ivory transition-colors shadow-md"
                    aria-label="Ver línea Personalización"
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
