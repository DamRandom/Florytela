"use client";

import React, { useState } from "react";
import { SectionHeading } from "../ui/SectionHeading";
import { PaletteSelector } from "../custom-section/PaletteSelector";
import { PaletteDetail } from "../custom-section/PaletteDetail";
import { PaletteScene } from "../custom-section/PaletteScene";
import { COLOR_PALETTES } from "@/data/palettes";
import { createWhatsAppLink } from "@/lib/whatsapp";

export function CustomSection() {
  const [activePaletteIndex, setActivePaletteIndex] = useState(0);
  const activePalette = COLOR_PALETTES[activePaletteIndex];

  const whatsappLink = createWhatsAppLink({
    type: "custom",
    customNotes: `Hola Adriana, me encanta la combinación de color "${activePalette.name}". Me gustaría personalizar mi mandil con esta paleta.`,
  });

  return (
    <section className="py-24 sm:py-32 bg-ivory relative overflow-hidden border-t border-beige/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <SectionHeading
          eyebrow="Línea Personalización · Atelier Interactivo"
          title="Tu mandil, exactamente como lo necesitas"
          subtitle="La línea principal de Florytela. Elige tu paleta favorita, experimenta la combinación cromática y solicita tu diseño a medida desde una sola unidad."
        />

        <PaletteSelector
          palettes={COLOR_PALETTES}
          activeIndex={activePaletteIndex}
          onChange={setActivePaletteIndex}
        />

        <div className="mt-12 lg:mt-16 bg-ivory border border-beige p-6 sm:p-10 lg:p-12 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <PaletteDetail palette={activePalette} index={activePaletteIndex} />
            <PaletteScene palette={activePalette} whatsappLink={whatsappLink} />
          </div>
        </div>

      </div>
    </section>
  );
}
