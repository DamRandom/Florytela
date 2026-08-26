"use client";

import React from "react";
import { PILLARS } from "@/lib/constants";
import { SectionHeading } from "../ui/SectionHeading";
import { FadeIn } from "../animations/FadeIn";

export function FeaturesSection() {
  return (
    <section className="py-24 sm:py-32 bg-beige-light/50 border-y border-beige relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <SectionHeading
          eyebrow="Por qué Florytela"
          title="Lo que hace diferente a cada mandil"
          subtitle="Cuatro razones reales para elegir Florytela, más allá del diseño."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-10 lg:gap-x-12 gap-y-12 mt-16">

          {PILLARS.map((pillar, idx) => (
            <FadeIn
              key={pillar.number}
              delay={idx * 0.08}
              direction="up"
              distance={20}
              className="h-full"
            >
              <article className="group h-full">

                {/* Detalle editorial */}
                <div className="flex items-center gap-3 mb-6">
                  <span className="w-6 h-px bg-burgundy group-hover:w-10 transition-all duration-500" />
                  <span className="w-1.5 h-1.5 rounded-full bg-burgundy" />
                </div>

                {/* Título */}
                <h3 className="font-serif text-xl sm:text-2xl text-charcoal font-medium leading-tight group-hover:text-burgundy transition-colors duration-300">
                  {pillar.title}
                </h3>

                {/* Descripción */}
                <p className="mt-4 text-xs sm:text-sm text-charcoal/70 leading-relaxed font-light">
                  {pillar.description}
                </p>

                {/* Línea inferior */}
                <div className="mt-7">
                  <span className="block w-8 h-px bg-beige group-hover:w-full group-hover:bg-burgundy/30 transition-all duration-700" />
                </div>

              </article>
            </FadeIn>
          ))}

        </div>
      </div>
    </section>
  );
}