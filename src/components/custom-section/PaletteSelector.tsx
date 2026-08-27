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
    <div className="flex sm:flex-wrap items-center sm:justify-center gap-2 sm:gap-3.5 overflow-x-auto no-scrollbar py-1 px-1 -mx-2 sm:mx-0 px-2 sm:px-0 scroll-smooth snap-x">
      {palettes.map((palette, index) => {
        const isSelected = activeIndex === index;
        return (
          <button
            key={palette.id}
            onClick={() => onChange(index)}
            className={`group flex items-center gap-2.5 sm:gap-3 px-3.5 sm:px-5 py-2.5 sm:py-3 border transition-all duration-300 cursor-pointer shrink-0 snap-center active:scale-95 ${
              isSelected
                ? "bg-ivory border-burgundy shadow-md ring-1 ring-burgundy/30"
                : "bg-beige-light/30 border-beige/80 hover:border-taupe hover:bg-ivory active:bg-beige-light/50"
            }`}
            aria-label={`Seleccionar paleta ${palette.name}`}
          >
            {/* Doble círculo de color */}
            <div className="flex items-center -space-x-1.5 shrink-0">
              <span
                className="w-3.5 sm:w-4 h-3.5 sm:h-4 rounded-full border border-ivory shadow-xs"
                style={{ backgroundColor: palette.primaryColor }}
              />
              <span
                className="w-3.5 sm:w-4 h-3.5 sm:h-4 rounded-full border border-ivory shadow-xs"
                style={{ backgroundColor: palette.secondaryColor }}
              />
            </div>

            <span
              className={`text-[11px] sm:text-xs uppercase tracking-[0.12em] sm:tracking-[0.14em] font-medium whitespace-nowrap transition-colors ${
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
