"use client";

import React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles } from "lucide-react";
import type { ColorPalette } from "@/types";

interface PaletteDetailProps {
  palette: ColorPalette;
  index: number;
}

export function PaletteDetail({ palette, index }: PaletteDetailProps) {
  return (
    <div className="lg:col-span-6 flex flex-col justify-between h-full">
      <div>
        {/* Título editorial con transición */}
        <AnimatePresence mode="wait">
          <motion.div
            key={palette.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
          >
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.32em] font-medium text-taupe block mb-2">
              Paleta Seleccionada · 0{index + 1}
            </span>
            <h3 className="font-serif text-4xl sm:text-5xl lg:text-5.5xl text-charcoal font-normal leading-[0.95] tracking-tight uppercase">
              {palette.magazineTitle}
            </h3>
            <p className="mt-3 text-[11px] sm:text-xs uppercase tracking-[0.24em] font-medium text-burgundy">
              {palette.philosophyQuote}
            </p>
          </motion.div>
        </AnimatePresence>

        {/* Bloques editoriales */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`desc-${palette.id}`}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="mt-8 space-y-4 text-xs sm:text-sm text-charcoal/75 font-light leading-relaxed border-l-2 border-beige pl-5"
          >
            <div>
              <h4 className="font-serif text-base text-charcoal font-medium">
                ¿Cómo armonizan los tonos?
              </h4>
              <p className="mt-1 text-charcoal/70">{palette.harmonyDescription}</p>
            </div>

            <div>
              <h4 className="font-serif text-base text-charcoal font-medium">
                Presencia & Utilidad
              </h4>
              <p className="mt-1 text-charcoal/70">{palette.whyChooseDescription}</p>
            </div>

            <div className="pt-2 text-[11px] text-taupe flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-burgundy shrink-0" />
              <span>{palette.textileSpecs}</span>
            </div>

            {palette.bottomNote && (
              <div className="pt-2 border-t border-beige/60 text-[11px] text-taupe/90 font-light italic">
                <span>{palette.bottomNote}</span>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* 4 Mini Frames de Detalle */}
      <div className="mt-10 pt-8 border-t border-beige/70">
        <span className="text-[10px] uppercase tracking-[0.2em] text-taupe font-medium block mb-4">
          Detalles & Acabados en esta combinación:
        </span>
        <div className="grid grid-cols-4 gap-2.5 sm:gap-3">
          {palette.details.map((item, idx) => (
            <div key={idx} className="group/frame flex flex-col items-center">
              <div className="relative aspect-square w-full bg-beige-light border border-beige/80 overflow-hidden shadow-2xs">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 22vw, 120px"
                  className="object-cover object-center group-hover/frame:scale-110 transition-transform duration-500"
                />
              </div>
              <span className="text-[9px] sm:text-[10px] text-charcoal/80 font-light mt-1.5 text-center line-clamp-1">
                {item.title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
