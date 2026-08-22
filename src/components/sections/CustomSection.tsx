"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "../ui/SectionHeading";
import { FadeIn } from "../animations/FadeIn";
import { CTAButton } from "../ui/CTAButton";
import { createWhatsAppLink } from "@/lib/whatsapp";

export function CustomSection() {
  const whatsappCustom = createWhatsAppLink({
    type: "custom",
    customNotes: "Hola, quiero consultar opciones para personalizar mi mandil.",
  });

  const steps = [
    {
      step: "01",
      title: "Elige tu modelo",
      description: "Distintos modelos de mandil según tu actividad y estilo. Desde modelos prácticos y funcionales hasta diseños más elaborados.",
    },
    {
      step: "02",
      title: "Selecciona tu color",
      description: "Amplia paleta de colores disponibles. Elige el que mejor represente tu marca o tu personalidad.",
    },
    {
      step: "03",
      title: "Configura tus bolsillos",
      description: "Cantidad, posición y tipo de bolsillos adaptados a las herramientas de tu trabajo o negocio.",
    },
    {
      step: "04",
      title: "Solicita y listo",
      description: "Nos contactas, te asesoramos sin compromiso y coordinamos tu pedido. Disponible desde una sola pieza.",
    },
  ];

  return (
    <section className="py-24 sm:py-32 bg-ivory relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Línea Personalización"
          title="Tu mandil, exactamente como lo necesitas"
          subtitle="La línea principal de Florytela. Diseñas desde cero: colores, modelo, bolsillos y configuración. Sin mínimos de pedido, con asesoría directa."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mt-16">
          {/* Left: Pasos */}
          <div className="lg:col-span-7 space-y-4">
            {steps.map((item, idx) => (
              <FadeIn key={item.step} delay={idx * 0.1} direction="up" distance={20}>
                <div className="bg-beige-light/30 border border-beige p-6 sm:p-7 flex items-start gap-5 hover:border-taupe/60 transition-colors group">
                  <span className="font-serif text-2xl sm:text-3xl text-beige font-normal group-hover:text-burgundy transition-colors flex-shrink-0">
                    {item.step}
                  </span>
                  <div>
                    <h4 className="font-serif text-lg sm:text-xl text-charcoal font-medium">
                      {item.title}
                    </h4>
                    <p className="mt-1 text-xs sm:text-sm text-charcoal/70 leading-relaxed font-light">
                      {item.description}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}

            <FadeIn delay={0.4} direction="up" distance={16} className="pt-4">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <CTAButton
                  href={whatsappCustom}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="primary"
                  size="md"
                  icon={<ArrowRight className="w-4 h-4" />}
                >
                  Personalizar mi mandil
                </CTAButton>
                <span className="text-xs text-taupe">
                  Asesoría directa · Sin compromiso
                </span>
              </div>
            </FadeIn>
          </div>

          {/* Right: Imagen */}
          <div className="lg:col-span-5 relative">
            <FadeIn direction="left" distance={30}>
              <div className="relative aspect-[4/5] w-full bg-beige-light border border-beige shadow-xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?q=80&w=1000&auto=format&fit=crop"
                  alt="Mandil personalizado Florytela"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-center"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-transparent" />

                <div className="absolute bottom-6 left-6 right-6 p-5 bg-ivory/95 backdrop-blur-md border border-beige/60">
                  <span className="text-[10px] uppercase tracking-widest text-taupe font-medium block mb-1">
                    Desde 1 pieza
                  </span>
                  <h4 className="font-serif text-lg font-medium text-charcoal">
                    Tu color, tu modelo, tu diseño
                  </h4>
                  <p className="text-xs text-charcoal/70 mt-1 font-light leading-relaxed">
                    Sin mínimos de pedido. Con personalización real y asesoría incluida.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
