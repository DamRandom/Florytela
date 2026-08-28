"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { ColorPalette } from "@/types";

interface PaletteDetailProps {
  palette: ColorPalette;
  index: number;
}

export function PaletteDetail({
  palette,
  index,
}: PaletteDetailProps) {
  const swatches = palette.swatches ?? [];

  return (
    <div className="lg:col-span-6 flex flex-col justify-center h-full">
      <AnimatePresence mode="wait">
        <motion.div
          key={palette.id}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="w-full"
        >
          {/* ─────────────────────────────────────────
              CABECERA EDITORIAL
          ───────────────────────────────────────── */}

          <div>
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-burgundy" />

                <span className="text-[10px] uppercase tracking-[0.28em] font-medium text-taupe">
                  Paleta 0{index + 1}
                </span>
              </div>

              <span className="text-[9px] uppercase tracking-[0.2em] text-taupe/70">
                Florytela
              </span>
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-charcoal font-normal leading-[1.05] tracking-tight uppercase max-w-xl">
              {palette.magazineTitle || palette.name}
            </h3>

            {palette.philosophyQuote && (
              <p className="mt-3 text-[10px] sm:text-[11px] uppercase tracking-[0.2em] font-medium text-burgundy leading-relaxed max-w-xl">
                {palette.philosophyQuote}
              </p>
            )}
          </div>

          {/* ─────────────────────────────────────────
              LÍNEA EDITORIAL
          ───────────────────────────────────────── */}

          <div className="mt-5 h-px bg-beige/70 w-full" />

          {/* ─────────────────────────────────────────
              DESCRIPCIÓN PRINCIPAL
          ───────────────────────────────────────── */}

          {palette.harmonyDescription && (
            <div className="mt-5">
              <div className="flex items-center gap-3 mb-2.5">
                <span className="text-[9px] uppercase tracking-[0.22em] text-taupe font-medium">
                  Concepto
                </span>

                <span className="h-px w-8 bg-beige" />
              </div>

              <p className="text-xs sm:text-sm text-charcoal/75 font-light leading-[1.75] max-w-xl">
                {palette.harmonyDescription}
              </p>
            </div>
          )}

          {/* ─────────────────────────────────────────
              POR QUÉ ELEGIRLO
          ───────────────────────────────────────── */}

          {palette.whyChooseDescription && (
            <div className="mt-5 pl-4 border-l border-burgundy/40">
              <span className="block text-[9px] uppercase tracking-[0.22em] text-burgundy font-medium mb-2">
                Por qué elegirlo
              </span>

              <p className="text-xs sm:text-sm text-charcoal/70 font-light leading-[1.7] max-w-xl">
                {palette.whyChooseDescription}
              </p>
            </div>
          )}

          {/* ─────────────────────────────────────────
              PALETA CROMÁTICA
          ───────────────────────────────────────── */}

          {swatches.length > 0 && (
            <div className="mt-6 pt-5 border-t border-beige/60">
              <div className="flex items-center justify-between mb-3">
                <span className="text-[9px] uppercase tracking-[0.22em] text-taupe font-medium">
                  Composición cromática
                </span>

                <span className="text-[8px] uppercase tracking-[0.16em] text-taupe/60">
                  {swatches.length} tonos
                </span>
              </div>

              <div className="grid grid-cols-4 gap-2 sm:gap-2.5">
                {swatches.map((swatch, idx) => (
                  <motion.div
                    key={`${palette.id}-swatch-${idx}`}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.3,
                      delay: 0.08 + idx * 0.05,
                    }}
                    className="flex flex-col items-center gap-1.5 group"
                  >
                    <div className="relative w-full aspect-4/3 border border-beige/80 shadow-2xs overflow-hidden transition-transform duration-300 group-hover:scale-[1.04]">
                      <div
                        className="absolute inset-0"
                        style={{
                          backgroundColor: swatch.hex,
                        }}
                      />

                      <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(#fff_1px,transparent_1px)] bg-size-[8px_8px]" />
                    </div>

                    <div className="text-center w-full">
                      <span className="block text-[8px] sm:text-[9px] font-medium text-charcoal uppercase tracking-[0.06em] truncate">
                        {swatch.name}
                      </span>

                      <span className="block text-[7px] sm:text-[8px] text-taupe font-light truncate mt-0.5">
                        {swatch.role}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* ─────────────────────────────────────────
              CONSTRUCCIÓN / TEXTIL
          ───────────────────────────────────────── */}

          {palette.textileSpecs && (
            <div className="mt-6 grid grid-cols-[auto_1fr] gap-x-4 items-start">
              <div className="pt-0.5">
                <span className="block w-8 h-8 border border-beige items-center justify-center">
                  <span className="w-2.5 h-2.5 rounded-full border border-taupe" />
                </span>
              </div>

              <div>
                <span className="block text-[9px] uppercase tracking-[0.22em] text-taupe font-medium mb-1.5">
                  Construcción & textil
                </span>

                <p className="text-[10px] sm:text-xs text-charcoal/65 font-light leading-[1.65]">
                  {palette.textileSpecs}
                </p>
              </div>
            </div>
          )}

          {/* ─────────────────────────────────────────
              NOTA FINAL / FIRMA
          ───────────────────────────────────────── */}

          {palette.bottomNote && (
            <div className="mt-6 pt-4 border-t border-beige/50">
              <p className="text-[8px] sm:text-[9px] uppercase tracking-[0.16em] text-taupe/80 leading-[1.7]">
                {palette.bottomNote}
              </p>
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}