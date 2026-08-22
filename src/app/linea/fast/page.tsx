import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

const whatsappUrl = `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(
  "Hola, me interesa la línea Fast. ¿Pueden darme más información?"
)}`;

const features = [
  {
    title: "Modelos prediseñados",
    description: "Modelos ya definidos, probados y listos para pedir. Sin necesidad de diseñar desde cero.",
  },
  {
    title: "Colores disponibles",
    description: "Paleta de colores seleccionada para esta línea. Elegantes, prácticos y con buena presencia.",
  },
  {
    title: "Bolsillos definidos",
    description: "Configuración de bolsillos pensada para el uso diario. Funcional y sin complicaciones.",
  },
  {
    title: "Proceso ágil",
    description: "Sin procesos largos de diseño. Eliges, coordinas y recibes tu mandil en menos tiempo.",
  },
  {
    title: "Precio accesible",
    description: "La opción más económica de Florytela, sin sacrificar calidad ni presencia.",
  },
  {
    title: "Materiales de calidad",
    description: "Ripstop y algodón seleccionados. Resistentes, cómodos y con buena caída.",
  },
];

export default function FastLinePage() {
  return (
    <main className="pt-24">

      {/* Hero de línea */}
      <section className="py-20 sm:py-28 bg-ivory border-b border-beige">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-start max-w-3xl">

            <div className="flex items-center gap-3 mb-6">
              <span className="font-serif text-6xl text-beige font-normal">01</span>
              <div className="h-px w-8 bg-beige" />
              <span className="text-[10px] uppercase tracking-[0.28em] text-taupe font-medium">
                Línea Fast
              </span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal leading-[1.08] text-charcoal mb-6">
              Rápido,{" "}
              <span className="italic text-burgundy">funcional y accesible.</span>
            </h1>

            <p className="text-base sm:text-lg text-charcoal/70 leading-relaxed font-light max-w-xl mb-10">
              La línea Fast es para quien quiere un mandil de buena calidad sin complicaciones. Modelos prediseñados, colores definidos y proceso ágil. Ideal si necesitas tu mandil pronto y a buen precio.
            </p>

            <div className="flex flex-col sm:flex-row items-start gap-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-burgundy hover:bg-burgundy-deep text-ivory px-6 py-3.5 text-xs uppercase tracking-[0.14em] font-medium transition-colors"
              >
                Pedir ahora
                <ArrowRight className="w-4 h-4" />
              </a>
              <Link
                href="/linea/personalizacion"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.14em] text-taupe hover:text-burgundy font-medium transition-colors py-3.5"
              >
                Ver Personalización
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Características */}
      <section className="py-20 sm:py-28 bg-beige-light/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl sm:text-3xl text-charcoal font-normal mb-12">
            ¿Qué incluye la línea Fast?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0 border border-beige">
            {features.map((f, idx) => (
              <div
                key={idx}
                className="p-8 bg-ivory border-r border-b border-beige [&:nth-child(3n)]:border-r-0 last:border-b-0 hover:bg-beige-light/30 transition-colors"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-burgundy mb-5" />
                <h3 className="font-serif text-lg text-charcoal font-medium mb-2">{f.title}</h3>
                <p className="text-sm text-charcoal/65 leading-relaxed font-light">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="py-16 bg-ivory border-t border-beige">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-taupe text-sm mb-2 font-light">
            ¿Necesitas más opciones? Mira la línea Personalización.
          </p>
          <h2 className="font-serif text-2xl sm:text-3xl text-charcoal font-normal mb-8">
            ¿Listo para pedir tu mandil Fast?
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-burgundy hover:bg-burgundy-deep text-ivory px-8 py-4 text-xs uppercase tracking-[0.14em] font-medium transition-colors"
            >
              Hacer pedido por WhatsApp
              <ArrowRight className="w-4 h-4" />
            </a>
            <Link
              href="/contacto"
              className="text-xs uppercase tracking-[0.14em] text-taupe hover:text-burgundy font-medium transition-colors"
            >
              Otras formas de contacto
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
