"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { createWhatsAppLink } from "@/lib/whatsapp";

export function ParallaxSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Parallax scroll hooks
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Smooth spring interpolation to eliminate frame stuttering
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 280,
    damping: 45,
    mass: 0.15,
    restDelta: 0.0001,
  });

  // Background image parallax translation
  const yBg = useTransform(smoothProgress, [0, 1], ["-12%", "12%"]);

  const whatsappHref = createWhatsAppLink({
    type: "custom",
    customNotes: "Hola Adriana, me gustaría cotizar un mandil personalizado.",
  });

  return (
    <section
      ref={containerRef}
      className="relative min-h-[70vh] sm:min-h-[80vh] lg:min-h-[85vh] flex items-center justify-center overflow-hidden bg-burgundy-deep text-ivory my-12 sm:my-20"
      style={{ contain: "paint" }}
    >
      {/* Background Parallax */}
      <motion.div
        style={{ y: yBg }}
        className="absolute inset-0 top-[-20%] bottom-[-20%] w-full h-[140%] pointer-events-none transform-gpu will-change-transform"
      >
        <Image
          src="/images/parallax-background.png"
          alt="Confección y textura textil Florytela"
          fill
          priority={false}
          sizes="100vw"
          className="object-cover object-center"
        />

        {/* Overlay principal */}
        <div className="absolute inset-0 bg-burgundy-deep/80" />

        {/* Gradiente para mejorar legibilidad */}
        <div className="absolute inset-0 bg-linear-to-t from-charcoal/90 via-transparent to-burgundy-deep/85" />
      </motion.div>

      {/* Foreground */}
      <div className="relative z-10 max-w-5xl mx-auto px-5 sm:px-8 py-16 sm:py-20 text-center flex flex-col items-center">
        {/* Minimalist Top Tag */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 border border-ivory/20 bg-charcoal/40 mb-8">
          <Sparkles className="w-3.5 h-3.5 text-beige" />

          <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.3em] font-medium text-beige">
            Confección de Autor · Lima, Perú
          </span>
        </div>

        {/* Grand Editorial Headline */}
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6.5xl font-normal leading-[1.08] text-ivory max-w-4xl tracking-tight">
          Donde la precisión del diseño se encuentra con{" "}
          <span className="italic text-beige font-normal">
            la calidez de lo artesanal.
          </span>
        </h2>

        {/* Refined Subtitle */}
        <p className="mt-6 sm:mt-8 text-sm sm:text-base md:text-lg text-ivory/80 font-light leading-relaxed max-w-2xl">
          Cada mandil Florytela es una pieza concebida con textiles
          seleccionados para acompañar tu oficio diario con elegancia, confort y
          durabilidad impecable.
        </p>

        {/* Características destacadas */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mt-10 sm:mt-12 w-full max-w-3xl">
          {/* Desde 1 Pieza */}
          <div className="group p-5 sm:p-6 flex flex-col items-center text-center bg-transparent backdrop-blur-md backdrop-saturate-150 shadow-[0_12px_40px_rgba(0,0,0,0.18)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(0,0,0,0.25)]">
            <h4 className="font-serif text-lg sm:text-xl text-ivory font-medium drop-shadow-md">
              Desde 1 Pieza
            </h4>

            <span className="w-8 h-px bg-ivory/40 my-3 transition-all duration-500 group-hover:w-12" />

            <p className="text-xs sm:text-sm text-ivory/70 font-light leading-relaxed drop-shadow-sm">
              Personalización total sin mínimos
            </p>
          </div>

          {/* Ripstop & Algodón */}
          <div className="group p-5 sm:p-6 flex flex-col items-center text-center bg-transparent backdrop-blur-md backdrop-saturate-150 shadow-[0_12px_40px_rgba(0,0,0,0.18)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(0,0,0,0.25)]">
            <h4 className="font-serif text-lg sm:text-xl text-ivory font-medium drop-shadow-md">
              Ripstop & Algodón
            </h4>

            <span className="w-8 h-px bg-ivory/40 my-3 transition-all duration-500 group-hover:w-12" />

            <p className="text-xs sm:text-sm text-ivory/70 font-light leading-relaxed drop-shadow-sm">
              Materiales nobles de alto rendimiento
            </p>
          </div>

          {/* Envíos */}
          <div className="group p-5 sm:p-6 flex flex-col items-center text-center bg-transparent backdrop-blur-md backdrop-saturate-150 shadow-[0_12px_40px_rgba(0,0,0,0.18)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(0,0,0,0.25)]">
            <h4 className="font-serif text-lg sm:text-xl text-ivory font-medium drop-shadow-md">
              Envíos a todo el Perú
            </h4>

            <span className="w-8 h-px bg-ivory/40 my-3 transition-all duration-500 group-hover:w-12" />

            <p className="text-xs sm:text-sm text-ivory/70 font-light leading-relaxed drop-shadow-sm">
              Lima Metropolitana y provincias
            </p>
          </div>
        </div>

        {/* Action CTAs */}
        <div className="mt-10 sm:mt-12 flex flex-col sm:flex-row items-center gap-5">
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-ivory text-burgundy hover:bg-beige hover:text-burgundy-deep px-8 py-4 text-xs uppercase tracking-[0.16em] font-medium transition-all duration-300 shadow-xl"
          >
            <span>Personalizar mi Mandil</span>

            <ArrowUpRight className="w-4 h-4" />
          </a>

          <Link
            href="/linea/personalizacion"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-ivory/70 hover:text-ivory font-medium transition-colors py-2"
          >
            <span>Explorar Opciones</span>

            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
