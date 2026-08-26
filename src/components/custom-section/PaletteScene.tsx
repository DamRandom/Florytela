"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, MessageSquare } from "lucide-react";
import type { ColorPalette } from "@/types";

interface PaletteSceneProps {
  palette: ColorPalette;
  whatsappLink: string;
}

export function PaletteScene({ palette, whatsappLink }: PaletteSceneProps) {
  return (
    <div className="lg:col-span-6 relative">
      {/* Marco de imagen dual */}
      <div className="relative aspect-[3/4] sm:aspect-[4/5] w-full max-w-lg mx-auto bg-beige-light border border-beige/80 shadow-2xl overflow-hidden">

        {/* Capa 1: Fondo de atmósfera */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`bg-${palette.id}`}
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="absolute inset-0"
          >
            <Image
              src={palette.bgAtmosphereImage}
              alt="Atmósfera de taller Florytela"
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/20 to-charcoal/40" />
          </motion.div>
        </AnimatePresence>

        {/* Capa 2: Modelo con mandil (sin fondo) */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`model-${palette.id}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="absolute inset-0 z-10 flex items-end justify-center pointer-events-none"
          >
            <div className="relative w-full h-[90%] sm:h-[93%]">
              <Image
                src={palette.modelApronImage}
                alt={`Modelo con mandil Florytela — ${palette.name}`}
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-contain object-bottom"
                priority
              />
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Badge flotante inferior */}
        <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between z-20 pointer-events-none">
          <div className="bg-charcoal/70 backdrop-blur-md px-3.5 py-2 border border-ivory/20 shadow-lg">
            <span className="text-[9px] uppercase tracking-[0.24em] text-ivory/90 font-medium block">
              Atelier Florytela · Lima
            </span>
            <h4 className="font-serif text-base text-ivory font-normal mt-0.5">
              {palette.name}
            </h4>
          </div>
          <div className="flex items-center gap-1.5 bg-ivory/95 px-3 py-1.5 border border-beige/80 shadow-md">
            <span
              className="w-3 h-3 rounded-full border border-charcoal/20"
              style={{ backgroundColor: palette.primaryColor }}
            />
            <span
              className="w-3 h-3 rounded-full border border-charcoal/20"
              style={{ backgroundColor: palette.secondaryColor }}
            />
          </div>
        </div>
      </div>

      {/* CTAs */}
      <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4">
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2.5 bg-burgundy hover:bg-burgundy-deep text-ivory py-4 px-7 text-xs uppercase tracking-[0.14em] font-medium transition-all duration-300 shadow-md cursor-pointer text-center"
        >
          <MessageSquare className="w-4 h-4" />
          <span>Pedir con esta paleta ({palette.name})</span>
        </a>
        <Link
          href="/linea/personalizacion"
          className="inline-flex items-center justify-center gap-2 text-xs uppercase tracking-[0.14em] text-taupe hover:text-burgundy font-medium transition-colors py-3 px-4 text-center"
        >
          <span>Ver todas las opciones</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
}
