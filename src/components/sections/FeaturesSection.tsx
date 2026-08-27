"use client";

import React, { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { PILLARS } from "@/lib/constants";
import { SectionHeading } from "../ui/SectionHeading";
import { FadeIn } from "../animations/FadeIn";

export function FeaturesSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, clientWidth } = scrollRef.current;
    const index = Math.round(scrollLeft / (clientWidth * 0.82));
    setActiveIndex(Math.min(Math.max(index, 0), PILLARS.length - 1));
  };

  const scrollToIndex = (index: number) => {
    if (!scrollRef.current) return;
    const cardWidth = scrollRef.current.children[0]?.clientWidth || 280;
    scrollRef.current.scrollTo({ left: index * (cardWidth + 16), behavior: "smooth" });
    setActiveIndex(index);
  };

  const nextSlide = () => scrollToIndex((activeIndex + 1) % PILLARS.length);
  const prevSlide = () => scrollToIndex((activeIndex - 1 + PILLARS.length) % PILLARS.length);

  return (
    <section className="py-14 sm:py-24 lg:py-32 bg-beige-light/40 border-y border-beige relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Encabezado con controles de navegación móvil */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 sm:mb-16">
          <SectionHeading
            eyebrow="Por qué Florytela"
            title="Lo que hace diferente a cada mandil"
            subtitle="Cuatro razones reales para elegir Florytela, más allá del diseño."
            className="mb-0 text-left"
          />

          {/* Flechas de navegación para móvil */}
          <div className="flex items-center justify-between sm:justify-end gap-3 lg:hidden pt-2 border-t border-beige/60 sm:border-t-0 sm:pt-0">
            <span className="text-[11px] uppercase tracking-wider text-taupe font-medium">
              {activeIndex + 1} de {PILLARS.length}
            </span>
            <div className="flex items-center gap-1.5">
              <button
                onClick={prevSlide}
                className="w-8 h-8 border border-beige hover:border-burgundy hover:text-burgundy flex items-center justify-center text-charcoal transition-colors bg-ivory cursor-pointer active:scale-95 shadow-2xs"
                aria-label="Pilar anterior"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={nextSlide}
                className="w-8 h-8 border border-beige hover:border-burgundy hover:text-burgundy flex items-center justify-center text-charcoal transition-colors bg-ivory cursor-pointer active:scale-95 shadow-2xs"
                aria-label="Siguiente pilar"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Carousel en Móvil / Grid en Desktop */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex lg:grid lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-x-10 lg:gap-x-12 overflow-x-auto lg:overflow-visible snap-x snap-mandatory scroll-smooth pb-4 lg:pb-0 px-4 sm:px-0 -mx-4 sm:mx-0 no-scrollbar"
        >
          {PILLARS.map((pillar, idx) => (
            <div
              key={pillar.number}
              className="w-[82vw] sm:w-[320px] lg:w-auto shrink-0 lg:shrink snap-center flex flex-col h-full"
            >
              <FadeIn
                delay={idx * 0.08}
                direction="up"
                distance={16}
                className="h-full"
              >
                <article className="group h-full p-6 sm:p-7 bg-ivory border border-beige/80 hover:border-burgundy/60 transition-all duration-300 shadow-xs flex flex-col justify-between">
                  <div>
                    {/* Detalle editorial & Número */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <span className="w-5 h-px bg-burgundy group-hover:w-8 transition-all duration-500" />
                        <span className="w-1.5 h-1.5 rounded-full bg-burgundy" />
                      </div>
                      <span className="font-serif text-sm text-taupe/60 font-medium">
                        0{idx + 1}
                      </span>
                    </div>

                    {/* Título */}
                    <h3 className="font-serif text-lg sm:text-xl text-charcoal font-medium leading-snug group-hover:text-burgundy transition-colors duration-300">
                      {pillar.title}
                    </h3>

                    {/* Descripción */}
                    <p className="mt-3 text-xs sm:text-sm text-charcoal/70 leading-relaxed font-light">
                      {pillar.description}
                    </p>
                  </div>

                  {/* Línea inferior */}
                  <div className="mt-5 pt-3 border-t border-beige/60">
                    <span className="block w-6 h-px bg-beige group-hover:w-full group-hover:bg-burgundy/40 transition-all duration-700" />
                  </div>
                </article>
              </FadeIn>
            </div>
          ))}
        </div>

        {/* Indicadores de puntos para móvil */}
        <div className="flex justify-center items-center gap-1.5 mt-4 lg:hidden">
          {PILLARS.map((_, idx) => (
            <button
              key={idx}
              onClick={() => scrollToIndex(idx)}
              className={`h-1 transition-all duration-300 cursor-pointer ${
                activeIndex === idx ? "w-6 bg-burgundy" : "w-2 bg-beige hover:bg-taupe"
              }`}
              aria-label={`Ir al pilar ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}