import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import { Heart, Scissors, Feather, Award, ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CTAButton } from "@/components/ui/CTAButton";
import { createWhatsAppLink } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Nosotros & Adriana Martínez",
  description:
    "Conoce la historia detrás de Florytela. La visión de Adriana Martínez sobre el diseño de mandiles elegantes, funcionales, duraderos y accesibles.",
};

export default function NosotrosPage() {
  const whatsappHref = createWhatsAppLink({ type: "general" });

  const values = [
    {
      icon: Scissors,
      title: "Confección y detalle",
      description:
        "Cada pieza se traza y corta asegurando que las costuras y remaches respondan con fidelidad al uso diario continuo.",
    },
    {
      icon: Feather,
      title: "Materiales seleccionados",
      description:
        "Ripstop y telas con base de algodón que brindan resistencia, comodidad al tacto y durabilidad comprobada.",
    },
    {
      icon: Award,
      title: "Diseño ergonómico",
      description:
        "Sistemas de tirantes y proporciones pensados para eliminar la tensión en el cuello durante largas jornadas de trabajo.",
    },
    {
      icon: Heart,
      title: "Atención cercana y honesta",
      description:
        "Trato directo con Adriana Martínez. Te asesoramos paso a paso para que obtengas exactamente el mandil que necesitas.",
    },
  ];

  return (
    <div className="pt-28 sm:pt-36 pb-24 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Hero Banner */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <span className="text-xs uppercase tracking-[0.25em] text-burgundy font-medium">
            Historia & Visión
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-charcoal font-normal mt-3 leading-tight">
            Mandiles pensados para tu día a día
          </h1>
          <p className="mt-6 text-base sm:text-lg text-charcoal/75 font-light leading-relaxed">
            Una propuesta nacida de la pasión por el diseño textil y la convicción de que la ropa de trabajo debe combinar presencia profesional, comodidad y un precio accesible.
          </p>
        </div>

        {/* Story Section: Adriana Martínez */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-28">
          {/* Portrait / Workshop Image */}
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/5] w-full bg-beige-light border border-beige shadow-xl overflow-hidden">
              <Image
                src="/images/nosotros/adriana-martinez.jpg"
                alt="Adriana Martínez en el taller de Florytela"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 p-4 bg-ivory/95 backdrop-blur-md border border-beige/60">
                <p className="font-serif text-lg text-charcoal font-medium">
                  Adriana Martínez
                </p>
                <span className="text-[11px] uppercase tracking-widest text-taupe font-medium">
                  Fundadora & Diseñadora
                </span>
              </div>
            </div>
          </div>

          {/* Story Narrative */}
          <div className="lg:col-span-6 flex flex-col items-start">
            <span className="text-xs uppercase tracking-[0.2em] text-taupe font-semibold mb-2">
              Nuestra Historia
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-charcoal font-normal leading-snug">
              De un proyecto independiente a una marca de confianza
            </h2>

            <div className="mt-6 space-y-4 text-sm sm:text-base text-charcoal/80 font-light leading-relaxed">
              <p>
                Florytela comenzó con un objetivo claro en Lima, Perú: <em>crear mandiles que protejan con estilo, que se sientan ligeros y que no cuesten una fortuna.</em>
              </p>
              <p>
                Con experiencia en confección y una sensibilidad especial para entender lo que cada cliente busca, Adriana Martínez empezó diseñando mandiles personalizados para profesionales gastronómicos, baristas, reposteros y creativos. La respuesta fue inmediata: comodidad en el ajuste, buena caída y atención en cada costura.
              </p>
              <p>
                Hoy, Florytela ofrece tres líneas de producto diseñadas para cada necesidad — <strong>Fast</strong> para quien busca rapidez y precio, <strong>Personalización</strong> para crear un mandil a tu medida desde una pieza, y <strong>Deluxe</strong> para proyectos de mayor elaboración estética.
              </p>
            </div>

            <div className="mt-8 p-4 bg-beige-light/40 border-l-2 border-burgundy">
              <p className="font-serif italic text-sm text-burgundy">
                «Queremos que al ponerte tu mandil sientas orgullo de lo que haces y confianza en cómo te ves.»
              </p>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="py-16 sm:py-24 border-y border-beige my-20 bg-beige-light/30 px-6 sm:px-12">
          <SectionHeading
            eyebrow="Nuestra Promesa"
            title="Los principios de Florytela"
            subtitle="Confección cuidada, trato honesto y diseño funcional en cada mandil."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <div key={i} className="bg-ivory border border-beige p-7 flex flex-col justify-between">
                  <div>
                    <div className="w-10 h-10 rounded-none bg-burgundy/5 border border-burgundy/20 flex items-center justify-center mb-6 text-burgundy">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-serif text-xl text-charcoal font-medium">
                      {v.title}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm text-charcoal/70 font-light leading-relaxed">
                      {v.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Callout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mt-20">
          <div className="lg:col-span-8">
            <h3 className="font-serif text-3xl sm:text-4xl text-charcoal font-normal">
              ¿Quieres conversar sobre tu proyecto o pedir una muestra?
            </h3>
            <p className="mt-3 text-sm sm:text-base text-charcoal/70 font-light leading-relaxed max-w-2xl">
              Escríbenos directamente por WhatsApp. Te asesoramos sobre opciones de telas, combinaciones de color y opciones de personalización.
            </p>
          </div>
          <div className="lg:col-span-4 flex justify-start lg:justify-end">
            <CTAButton
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
              size="lg"
              icon={<ArrowRight className="w-4 h-4" />}
            >
              Contactar por WhatsApp
            </CTAButton>
          </div>
        </div>
      </div>
    </div>
  );
}
