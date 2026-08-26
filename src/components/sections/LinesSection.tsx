"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { PRODUCT_LINES } from "@/data/navigation";
import { FadeIn } from "../animations/FadeIn";
import { LineCard } from "./lines/LineCard";

export function LinesSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, clientWidth } = scrollRef.current;
    const index = Math.round(scrollLeft / (clientWidth * 0.82));
    setActiveIndex(Math.min(Math.max(index, 0), PRODUCT_LINES.length - 1));
  };

  const scrollToIndex = (index: number) => {
    if (!scrollRef.current) return;
    const cardWidth = scrollRef.current.children[0]?.clientWidth || 320;
    scrollRef.current.scrollTo({ left: index * (cardWidth + 24), behavior: "smooth" });
    setActiveIndex(index);
  };

  const nextSlide = () => scrollToIndex((activeIndex + 1) % PRODUCT_LINES.length);
  const prevSlide = () => scrollToIndex((activeIndex - 1 + PRODUCT_LINES.length) % PRODUCT_LINES.length);

  return (
    <section className="py-20 sm:py-28 lg:py-32 bg-ivory border-t border-beige/60 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Encabezado */}
        <FadeIn direction="up" distance={16}>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16 pb-6 sm:pb-8 border-b border-beige/60">
            <div className="w-full max-w-none flex-1">
              <div className="flex items-center gap-3 mb-3">
                <span className="h-px w-6 bg-beige" />
                <span className="text-[10px] sm:text-xs uppercase tracking-[0.28em] font-medium text-taupe whitespace-nowrap">
                  Tres propuestas · Tres estilos
                </span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-4.5xl xl:text-5xl font-normal leading-[1.12] text-charcoal tracking-tight lg:whitespace-nowrap">
                Elige el estilo que mejor acompaña{" "}
                <span className="italic text-burgundy">tu oficio.</span>
              </h2>
            </div>

            {/* Controles mobile */}
            <div className="flex items-center justify-between md:justify-end gap-4 w-full md:w-auto">
              <span className="text-xs text-taupe font-light lg:hidden">
                Desliza para ver los 3 estilos →
              </span>
              <div className="flex items-center gap-2 lg:hidden">
                <button
                  onClick={prevSlide}
                  className="w-9 h-9 border border-beige hover:border-burgundy hover:text-burgundy flex items-center justify-center text-charcoal transition-colors bg-ivory cursor-pointer"
                  aria-label="Ver estilo anterior"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={nextSlide}
                  className="w-9 h-9 border border-beige hover:border-burgundy hover:text-burgundy flex items-center justify-center text-charcoal transition-colors bg-ivory cursor-pointer"
                  aria-label="Ver siguiente estilo"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Carousel / Grid */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex lg:grid lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 overflow-x-auto lg:overflow-visible snap-x snap-mandatory scroll-smooth pb-6 lg:pb-0 px-4 sm:px-6 lg:px-0 -mx-4 sm:-mx-6 lg:mx-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] scrollbar-none"
        >
          {PRODUCT_LINES.map((line) => (
            <div
              key={line.id}
              className="w-[86vw] sm:w-97.5 md:w-105 lg:w-auto shrink-0 lg:shrink snap-center flex flex-col h-full"
            >
              <LineCard line={line} />
            </div>
          ))}
        </div>

        {/* Indicadores mobile */}
        <div className="flex justify-center items-center gap-2 mt-6 lg:hidden">
          {PRODUCT_LINES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => scrollToIndex(idx)}
              className={`h-1.5 transition-all duration-300 cursor-pointer ${
                activeIndex === idx ? "w-8 bg-burgundy" : "w-2 bg-beige hover:bg-taupe"
              }`}
              aria-label={`Ir al estilo ${idx + 1}`}
            />
          ))}
        </div>

        {/* Footer */}
        <FadeIn delay={0.3} direction="up" distance={12} className="mt-14 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 py-4 px-6 bg-beige-light/30 border border-beige/70 text-xs text-taupe font-light max-w-2xl mx-auto">
            <span>¿Dudas sobre cuál línea elegir?</span>
            <Link
              href="/linea/personalizacion"
              className="text-burgundy font-medium uppercase tracking-wider underline hover:text-burgundy-deep transition-colors"
            >
              Conversa con nosotros por WhatsApp
            </Link>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
