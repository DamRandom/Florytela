"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { ColorPalette, ColorPaletteSwatch } from "@/types";

interface PaletteDetailProps {
  palette: ColorPalette;
  index: number;
}

const getDefaultSwatches = (palette: ColorPalette): ColorPaletteSwatch[] => {
  if (palette.swatches && palette.swatches.length > 0) {
    return palette.swatches;
  }

  switch (palette.id) {
    case "ejecutivo":
      return [
        { name: "Negro Carbón", hex: palette.primaryColor || "#1A1A1A", role: "Base dominante" },
        { name: "Gris Claro", hex: palette.secondaryColor || "#B8B8B8", role: "Panel frontal" },
        { name: "Gris Grafito", hex: "#3F3F46", role: "Cintas & tirantes" },
        { name: "Níquel Plateado", hex: "#D4D4D8", role: "Herrajes metálicos" },
      ];
    case "ivory-rose":
      return [
        { name: "Borgoña Profundo", hex: palette.primaryColor || "#550B14", role: "Base & ribetes" },
        { name: "Ivory Luminoso", hex: palette.secondaryColor || "#F8F6F0", role: "Cuerpo principal" },
        { name: "Cuero Caramelo", hex: palette.accentColor || "#9A5A32", role: "Acentos de cuero" },
        { name: "Oro Satinado", hex: "#C5A880", role: "Bordado & broches" },
      ];
    case "verde":
      return [
        { name: "Carbón Terroso", hex: palette.primaryColor || "#2E332F", role: "Base estructural" },
        { name: "Verde Ciprés", hex: palette.secondaryColor || "#77715F", role: "Contraste natural" },
        { name: "Marrón Roble", hex: palette.accentColor || "#6B4632", role: "Tirantes de cuero" },
        { name: "Latón Mate", hex: "#9E978B", role: "Herrajes técnicos" },
      ];
    case "carbon":
      return [
        { name: "Carbón Asfalto", hex: palette.primaryColor || "#211C1D", role: "Cuerpo oscuro" },
        { name: "Rojo Borgoña", hex: palette.secondaryColor || "#D71920", role: "Acento contraste" },
        { name: "Gris Níquel", hex: palette.accentColor || "#B8B3AC", role: "Pespuntes" },
        { name: "Acero Mate", hex: "#52525B", role: "Herrajes" },
      ];
    default:
      return [
        { name: "Primario", hex: palette.primaryColor || "#1A1A1A", role: "Base" },
        { name: "Secundario", hex: palette.secondaryColor || "#B8B8B8", role: "Contraste" },
        ...(palette.accentColor ? [{ name: "Acento", hex: palette.accentColor, role: "Detalle" }] : []),
      ];
  }
};

export function PaletteDetail({ palette, index }: PaletteDetailProps) {
  const title = palette.name || palette.magazineTitle || `Paleta 0${index + 1}`;
  const subtitle = palette.tagline || palette.philosophyQuote || "Composición de Autor";
  const desc = palette.description || palette.harmonyDescription || "";
  const swatches = getDefaultSwatches(palette);

  return (
    <div className="lg:col-span-6 flex flex-col justify-center h-full">
      <div>
        {/* Título editorial compacto con transición suave */}
        <AnimatePresence mode="wait">
          <motion.div
            key={palette.id}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35 }}
          >
            <div className="flex items-center gap-2 mb-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-burgundy" />
              <span className="text-[10px] uppercase tracking-[0.28em] font-medium text-taupe">
                Paleta 0{index + 1}
              </span>
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl text-charcoal font-normal leading-tight tracking-tight uppercase">
              {title}
            </h3>

            <p className="mt-1.5 text-[11px] uppercase tracking-[0.2em] font-medium text-burgundy">
              {subtitle}
            </p>
          </motion.div>
        </AnimatePresence>

        {/* Bloque descriptivo concentrado y directo */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`desc-${palette.id}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, delay: 0.08 }}
            className="mt-5 text-xs sm:text-sm text-charcoal/75 font-light leading-relaxed border-l border-beige pl-4"
          >
            <p>{desc}</p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Recuadros Minimalistas de la Paleta Cromática */}
      <div className="mt-6 pt-5 border-t border-beige/60">
        <span className="text-[9px] uppercase tracking-[0.22em] text-taupe font-medium block mb-3">
          Composición cromática & materiales:
        </span>
        <AnimatePresence mode="wait">
          <motion.div
            key={`swatches-${palette.id}`}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-4 gap-2 sm:gap-2.5"
          >
            {swatches.map((swatch, idx) => (
              <div key={idx} className="flex flex-col items-center gap-1.5 group">
                <div className="relative w-full aspect-[4/3] border border-beige/80 shadow-2xs overflow-hidden transition-transform duration-300 group-hover:scale-105">
                  <div
                    className="absolute inset-0"
                    style={{ backgroundColor: swatch.hex }}
                  />
                  <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(#fff_1px,transparent_1px)] bg-size-[8px_8px]" />
                </div>
                <div className="text-center w-full">
                  <span className="block text-[9px] font-medium text-charcoal uppercase tracking-[0.08em] truncate">
                    {swatch.name}
                  </span>
                  <span className="block text-[8px] text-taupe font-light truncate mt-0.5">
                    {swatch.role}
                  </span>
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
