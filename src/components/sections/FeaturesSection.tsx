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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 mt-16 border border-beige">
          {PILLARS.map((pillar, idx) => (
            <FadeIn
              key={pillar.number}
              delay={idx * 0.1}
              direction="up"
              distance={24}
              className="h-full"
            >
              <div className="bg-ivory border-r border-beige last:border-r-0 p-8 h-full flex flex-col justify-between hover:bg-beige-light/40 transition-colors duration-300 group">
                <div>
                  <div className="flex items-center justify-between mb-8 pb-4 border-b border-beige">
                    <span className="font-serif text-3xl sm:text-4xl text-beige font-normal group-hover:text-burgundy transition-colors duration-300">
                      {pillar.number}
                    </span>
                    <span className="w-2 h-2 rounded-full bg-beige group-hover:bg-burgundy transition-colors duration-300" />
                  </div>

                  <h3 className="font-serif text-xl sm:text-2xl text-charcoal font-medium group-hover:text-burgundy transition-colors duration-300">
                    {pillar.title}
                  </h3>

                  <p className="mt-3 text-xs sm:text-sm text-charcoal/70 leading-relaxed font-light">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-beige/60">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-taupe group-hover:text-burgundy/70 transition-colors duration-300">
                    Florytela
                  </span>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
