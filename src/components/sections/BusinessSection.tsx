"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { FadeIn } from "../animations/FadeIn";
import { CTAButton } from "../ui/CTAButton";
import { createWhatsAppLink } from "@/lib/whatsapp";

export function BusinessSection() {
  const whatsappB2BHref = createWhatsAppLink({
    type: "b2b",
  });

  return (
    <section className="py-24 sm:py-32 bg-ivory relative overflow-hidden border-t border-beige">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Imagen */}
          <div className="lg:col-span-5 relative order-2 lg:order-1">
            <FadeIn direction="right" distance={30} duration={0.8}>
              <div className="relative">

                {/* Imagen principal */}
                <div className="relative aspect-4/5 w-full max-w-lg bg-beige-light border border-beige shadow-lg overflow-hidden">
                  <Image
                    src="/images/business-team.png"
                    alt="Equipo uniformado con mandiles Florytela"
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover object-center hover:scale-[1.02] transition-transform duration-700"
                  />
                </div>

                {/* Pequeño detalle editorial */}
                <div className="absolute -bottom-6 -right-4 sm:-right-8 bg-burgundy text-ivory px-5 py-4 shadow-lg">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-beige font-medium">
                    Pedidos por mayor
                  </span>
                </div>

              </div>
            </FadeIn>
          </div>

          {/* Texto */}
          <div className="lg:col-span-7 flex flex-col items-start order-1 lg:order-2">

            <FadeIn delay={0.1} direction="up" distance={16}>
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="h-px w-6 bg-beige" />

                <span className="text-xs uppercase tracking-[0.24em] font-medium text-burgundy">
                  Para equipos y negocios
                </span>
              </div>
            </FadeIn>

            <FadeIn delay={0.2} direction="up" distance={20}>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal leading-[1.14] text-charcoal max-w-2xl">
                Haz que tu equipo{" "}
                <span className="italic text-burgundy">
                  también lleve tu esencia.
                </span>
              </h2>
            </FadeIn>

            <FadeIn delay={0.3} direction="up" distance={20}>
              <p className="mt-6 text-base sm:text-lg text-charcoal/75 leading-relaxed font-light max-w-xl">
                Personaliza tus mandiles, cuida cada detalle y crea una
                imagen que represente a tu negocio.
              </p>
            </FadeIn>

            <FadeIn
              delay={0.4}
              direction="up"
              distance={20}
              className="mt-10"
            >
              <CTAButton
                href={whatsappB2BHref}
                target="_blank"
                rel="noopener noreferrer"
                variant="secondary"
                size="md"
                icon={<ArrowRight className="w-4 h-4" />}
              >
                Cotizar pedido por mayor
              </CTAButton>
            </FadeIn>

            {/* Cierre editorial */}
            <FadeIn
              delay={0.5}
              direction="up"
              distance={16}
              className="mt-8"
            >
              <div className="flex items-center gap-3">
                <span className="w-8 h-px bg-beige" />

                <span className="text-xs text-taupe font-light">
                  Atención directa y personalizada
                </span>
              </div>
            </FadeIn>

          </div>

        </div>
      </div>
    </section>
  );
}