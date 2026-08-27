"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { FadeIn } from "../animations/FadeIn";
import { CTAButton } from "../ui/CTAButton";

export function PhilosophySection() {
  return (
    <section
      id="nosotros-intro"
      className="py-24 sm:py-32 bg-ivory relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: Fotos */}
          <div className="lg:col-span-6 relative">
            <FadeIn direction="right" distance={30} duration={0.8}>
              <div className="relative">
                {/* Foto principal */}
                <div className="relative aspect-4/5 w-full max-w-lg bg-beige-light border border-beige shadow-lg overflow-hidden">
                  <Image
                    src="/images/philosophy-process.png"
                    alt="Proceso de confección de mandiles Florytela"
                    fill
                    sizes="(max-width: 1024px) 100vw, 45vw"
                    className="object-cover object-center transform hover:scale-[1.02] transition-transform duration-700"
                  />
                </div>

                {/* Foto de detalle */}
                <div className="absolute -bottom-8 -right-4 sm:-right-8 w-48 sm:w-64 aspect-square bg-ivory border-4 border-ivory shadow-xl overflow-hidden hidden sm:block">
                  <Image
                    src="/images/philosophy-detail.png"
                    alt="Detalle de costura y acabados de un mandil Florytela"
                    fill
                    sizes="250px"
                    className="object-cover object-center"
                  />
                </div>

                {/* Cita — Ubicada en la parte inferior para no tapar rostros */}
                <div className="absolute bottom-3 sm:-bottom-6 left-3 sm:-left-6 right-3 sm:right-auto bg-burgundy/90 sm:bg-burgundy/80 backdrop-blur-md text-ivory p-3.5 sm:p-4 max-w-xs shadow-lg border border-ivory/15 z-10">
                  <p className="font-serif italic text-xs sm:text-base leading-snug">
                    «Un buen mandil se siente desde el primer día y mejora con
                    el tiempo.»
                  </p>

                  <span className="text-[9px] sm:text-[10px] uppercase tracking-widest text-ivory/70 block mt-1.5 sm:mt-2">
                    — Adriana Martínez
                  </span>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Right: Texto */}
          <div className="lg:col-span-6 flex flex-col items-start pt-6 lg:pt-0">
            <FadeIn delay={0.1} direction="up" distance={16}>
              <div className="inline-flex items-center gap-2 mb-3">
                <span className="h-px w-6 bg-beige" />

                <span className="text-xs uppercase tracking-[0.24em] font-medium text-burgundy">
                  Nuestra historia
                </span>
              </div>
            </FadeIn>

            <FadeIn delay={0.2} direction="up" distance={20}>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal leading-[1.14] text-charcoal">
                Hecho con cuidado,{" "}
                <span className="italic text-burgundy">pensado para ti.</span>
              </h2>
            </FadeIn>

            <FadeIn delay={0.3} direction="up" distance={20}>
              <p className="mt-6 text-base sm:text-lg text-charcoal/80 leading-relaxed font-light">
                Florytela nace del amor por el buen trabajo y la convicción de
                que un mandil de calidad no tiene que ser inalcanzable. Cada
                pieza es diseñada con cuidado, buscando que se vea bien, dure
                mucho y se sienta cómoda desde el primer uso.
              </p>
            </FadeIn>

            <FadeIn delay={0.4} direction="up" distance={20}>
              <div className="mt-8 space-y-5 border-l-2 border-beige pl-6">
                <div>
                  <h4 className="font-serif text-lg text-burgundy font-medium">
                    Calidad sin pretensiones
                  </h4>

                  <p className="text-sm text-charcoal/70 mt-1 font-light leading-relaxed">
                    Usamos buenos materiales — Ripstop, algodón — porque marcan
                    la diferencia en durabilidad, comodidad y apariencia. Sin
                    adornos innecesarios.
                  </p>
                </div>

                <div>
                  <h4 className="font-serif text-lg text-burgundy font-medium">
                    Cerca del cliente
                  </h4>

                  <p className="text-sm text-charcoal/70 mt-1 font-light leading-relaxed">
                    Adriana trabaja directamente contigo para entender qué
                    necesitas. Sin intermediarios, sin complicaciones. El
                    proceso es simple y la atención, personal.
                  </p>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.5} direction="up" distance={20} className="mt-10">
              <div className="flex items-center gap-6">
                <CTAButton
                  href="/nosotros"
                  variant="secondary"
                  size="md"
                  icon={<ArrowRight className="w-4 h-4" />}
                >
                  Conocer más sobre Florytela
                </CTAButton>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
