"use client";

import React from "react";
import { motion } from "framer-motion";
import type { ColorPalette } from "@/types";

interface PaletteSelectorProps {
  palettes: ColorPalette[];
  activeIndex: number;
  onChange: (index: number) => void;
}

export function PaletteSelector({ palettes, activeIndex, onChange }: PaletteSelectorProps) {
  return (
    <div className="mt-12 sm:mt-16 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
      {palettes.map((palette, index) => {
        const isSelected = activeIndex === index;
        return (
          <button
            key={palette.id}
            onClick={() => onChange(index)}
            className={`group flex items-center gap-3 px-4 sm:px-5 py-2.5 sm:py-3 border transition-all duration-300 cursor-pointer ${
              isSelected
                ? "bg-ivory border-burgundy shadow-md ring-1 ring-burgundy/30"
                : "bg-beige-light/30 border-beige/80 hover:border-taupe hover:bg-ivory"
            }`}
            aria-label={`Seleccionar paleta ${palette.name}`}
          >
            {/* Doble círculo de color */}
            <div className="flex items-center -space-x-1.5 shrink-0">
              <span
                className="w-4 h-4 rounded-full border border-ivory shadow-xs"
                style={{ backgroundColor: palette.primaryColor }}
              />
              <span
                className="w-4 h-4 rounded-full border border-ivory shadow-xs"
                style={{ backgroundColor: palette.secondaryColor }}
              />
            </div>

            <span
              className={`text-xs uppercase tracking-[0.14em] font-medium transition-colors ${
                isSelected ? "text-burgundy font-semibold" : "text-charcoal/80 group-hover:text-burgundy"
              }`}
            >
              {palette.name}
            </span>

            {isSelected && (
              <motion.span
                layoutId="active-palette-dot"
                className="w-1.5 h-1.5 rounded-full bg-burgundy ml-0.5"
              />
            )}
          </button>
        );
      })}
    </div>
  );
}
