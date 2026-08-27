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
      {/* Escenario de Estudio Minimalista (Sin foto de fondo, con geometría y color dinámico) */}
      <div className="relative aspect-[3/4] sm:aspect-[4/5] w-full max-w-lg mx-auto bg-[#F5F2EB] border border-beige/80 shadow-xl overflow-hidden">

        {/* Capa 1: Fondo Geométrico de Estudio con los colores de la paleta activa */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`geom-${palette.id}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 overflow-hidden pointer-events-none"
          >
            {/* Gradiente radial ambiental con el color primario */}
            <div
              className="absolute -top-12 -right-12 w-80 h-80 rounded-full blur-3xl opacity-30 transition-colors duration-700"
              style={{ backgroundColor: palette.primaryColor }}
            />

            {/* Gradiente suave inferior con el color secundario */}
            <div
              className="absolute -bottom-16 -left-16 w-80 h-80 rounded-full blur-3xl opacity-25 transition-colors duration-700"
              style={{ backgroundColor: palette.secondaryColor }}
            />

            {/* Círculo Principal Arquitectónico / Arco de Estudio */}
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 sm:w-80 h-64 sm:h-80 rounded-full border border-beige/90 bg-ivory/50 backdrop-blur-xs flex items-center justify-center shadow-xs"
            >
              {/* Anillo concéntrico interior punteado */}
              <div className="w-[82%] h-[82%] rounded-full border border-dashed border-beige" />
            </motion.div>

            {/* Orbe Flotante de Color Primario */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 0.9 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="absolute top-10 left-8 sm:left-10 w-12 sm:w-14 h-12 sm:h-14 rounded-full border-2 border-ivory shadow-md flex items-center justify-center"
              style={{ backgroundColor: palette.primaryColor }}
            />

            {/* Orbe Flotante de Color Secundario */}
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 0.9 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="absolute top-20 right-8 sm:right-10 w-10 sm:w-12 h-10 sm:h-12 rounded-full border-2 border-ivory shadow-md flex items-center justify-center"
              style={{ backgroundColor: palette.secondaryColor }}
            />

            {/* Pequeño Acento Cromático */}
            {palette.accentColor && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.35 }}
                className="absolute bottom-28 right-12 w-6 h-6 rounded-full border-2 border-ivory shadow-xs"
                style={{ backgroundColor: palette.accentColor }}
              />
            )}

            {/* Sombra de suelo / pedestal sutil para el modelo */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-48 sm:w-64 h-6 rounded-full bg-charcoal/10 blur-md" />
          </motion.div>
        </AnimatePresence>

        {/* Capa 2: Modelo con Mandil (Sin fondo, protagonista en primer plano) */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`model-${palette.id}`}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
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
          <div className="bg-ivory/95 backdrop-blur-md px-3.5 py-2 border border-beige/80 shadow-xs">
            <span className="text-[9px] uppercase tracking-[0.24em] text-taupe font-medium block">
              Atelier Florytela · Lima
            </span>
            <h4 className="font-serif text-sm sm:text-base text-charcoal font-normal mt-0.5">
              {palette.name}
            </h4>
          </div>

          <div className="flex items-center gap-1.5 bg-ivory/95 px-3 py-1.5 border border-beige/80 shadow-xs">
            <span
              className="w-3.5 h-3.5 rounded-full border border-charcoal/15 shadow-2xs"
              style={{ backgroundColor: palette.primaryColor }}
            />
            <span
              className="w-3.5 h-3.5 rounded-full border border-charcoal/15 shadow-2xs"
              style={{ backgroundColor: palette.secondaryColor }}
            />
          </div>
        </div>
      </div>

      {/* Botones de acción — Lado a lado y compactos en móvil */}
      <div className="mt-5 sm:mt-8 flex flex-row items-center justify-center gap-2.5 sm:gap-4 w-full">
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 bg-burgundy hover:bg-burgundy-deep text-ivory py-2.5 sm:py-3.5 px-4 sm:px-6 text-[11px] sm:text-xs uppercase tracking-[0.14em] font-medium transition-all duration-300 shadow-xs cursor-pointer text-center active:scale-[0.97]"
        >
          <MessageSquare className="w-3.5 h-3.5" />
          <span>Pedir mandil</span>
        </a>
        <Link
          href="/catalogo"
          className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1 text-[11px] sm:text-xs uppercase tracking-[0.14em] text-charcoal hover:text-burgundy bg-ivory py-2.5 sm:py-3.5 px-3 sm:px-4 text-center border border-beige hover:border-burgundy active:scale-[0.97] font-medium shadow-2xs"
        >
          <span>Ver catálogo</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
}
