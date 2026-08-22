"use client";

import React from "react";
import Image from "next/image";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { FadeIn } from "../animations/FadeIn";
import { CTAButton } from "../ui/CTAButton";
import { createWhatsAppLink } from "@/lib/whatsapp";

export function BusinessSection() {
  const whatsappB2BHref = createWhatsAppLink({
    type: "b2b",
  });

  const benefits = [
    "Precios escalonados a partir de 5 unidades",
    "Bordado de logotipo o nombre del negocio",
    "Selección de colores institucionales",
    "Muestras previas para validar el diseño",
    "Atención directa con Adriana para coordinar el pedido",
    "Reposición ágil para nuevos integrantes del equipo",
  ];

  return (
    <section className="py-24 sm:py-32 bg-burgundy text-ivory relative overflow-hidden">
      {/* Textura sutil */}
      <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(#F8F8F7_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left: Texto */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <FadeIn delay={0.1} direction="up" distance={16}>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-ivory/10 border border-ivory/20 mb-4">
                <span className="text-[11px] uppercase tracking-[0.24em] font-medium text-ivory/80">
                  Pedidos por mayor
                </span>
              </div>
            </FadeIn>

            <FadeIn delay={0.2} direction="up" distance={20}>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal leading-[1.14] text-ivory">
                Uniforma a tu equipo con{" "}
                <span className="italic text-beige font-normal">mandiles que los representen.</span>
              </h2>
            </FadeIn>

            <FadeIn delay={0.3} direction="up" distance={20}>
              <p className="mt-6 text-base sm:text-lg text-ivory/75 leading-relaxed font-light max-w-xl">
                Restaurantes, cafeterías, salones de belleza, estudios y negocios de todo tipo confían en Florytela para vestir a su equipo. Precios accesibles por volumen, personalización real y atención directa.
              </p>
            </FadeIn>

            {/* Lista de beneficios */}
            <FadeIn delay={0.4} direction="up" distance={20}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mt-8 w-full">
                {benefits.map((b) => (
                  <div key={b} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-beige flex-shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-ivory/85 font-light leading-snug">
                      {b}
                    </span>
                  </div>
                ))}
              </div>
            </FadeIn>

            {/* CTAs */}
            <FadeIn delay={0.5} direction="up" distance={20} className="mt-10">
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <CTAButton
                  href={whatsappB2BHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="white"
                  size="md"
                  icon={<ArrowRight className="w-4 h-4" />}
                >
                  Cotizar pedido por mayor
                </CTAButton>
                <CTAButton
                  href="/contacto?asunto=mayoreo"
                  variant="ghost"
                  size="md"
                >
                  Solicitar información
                </CTAButton>
              </div>
            </FadeIn>
          </div>

          {/* Right: Imagen */}
          <div className="lg:col-span-5 relative">
            <FadeIn direction="left" distance={30}>
              <div className="relative aspect-[4/5] w-full bg-burgundy-deep border border-ivory/10 shadow-2xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1000&auto=format&fit=crop"
                  alt="Equipo uniformado con mandiles Florytela"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-center opacity-85 hover:scale-105 transition-transform duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-burgundy-deep/90 via-transparent to-transparent" />

                <div className="absolute bottom-6 left-6 right-6 p-5 bg-burgundy-deep/95 backdrop-blur-md border border-ivory/10">
                  <span className="text-[10px] uppercase tracking-widest text-beige font-medium block mb-1">
                    Pedidos por mayor
                  </span>
                  <p className="font-serif text-base text-ivory">
                    «El equipo se ve bien y eso se nota en cómo los perciben los clientes.»
                  </p>
                  <span className="text-[11px] text-ivory/50 block mt-2">
                    — Cliente Florytela
                  </span>
                </div>
              </div>
            </FadeIn>
          </div>

        </div>
      </div>
    </section>
  );
}
