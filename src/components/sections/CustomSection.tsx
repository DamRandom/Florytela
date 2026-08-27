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
    <section className="py-12 sm:py-20 bg-ivory relative overflow-hidden border-t border-beige/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <SectionHeading
          eyebrow="Línea Personalización · Atelier Interactivo"
          title="Tu mandil, exactamente como lo necesitas"
          subtitle="Explora las combinaciones cromáticas de nuestro atelier y personaliza tu mandil desde 1 sola pieza."
        />

        <div className="mt-6 sm:mt-10 bg-ivory border border-beige p-3.5 sm:p-8 lg:p-10 shadow-xs">
          
          {/* Selector de Paletas — Directamente integrado sobre el escenario interactivo */}
          <div className="mb-5 sm:mb-8">
            <PaletteSelector
              palettes={COLOR_PALETTES}
              activeIndex={activePaletteIndex}
              onChange={setActivePaletteIndex}
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center">
            {/* FOTO / ESCENARIO — En móvil aparece PRIMERO (order-1), pegado al selector para ver el cambio inmediato */}
            <div className="order-1 lg:order-2 lg:col-span-6">
              <PaletteScene palette={activePalette} whatsappLink={whatsappLink} />
            </div>

            {/* DETALLES DE PALETA — En móvil aparece DEBAJO (order-2) */}
            <div className="order-2 lg:order-1 lg:col-span-6">
              <PaletteDetail palette={activePalette} index={activePaletteIndex} />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
