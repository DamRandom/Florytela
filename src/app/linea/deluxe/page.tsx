import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

const whatsappUrl = `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(
  "Hola, me interesa la línea Deluxe. ¿Pueden darme más información?"
)}`;

const highlights = [
  {
    title: "Mayor nivel de diseño",
    description:
      "Diseños más elaborados donde el componente estético tiene un peso mayor. Mandiles que también son piezas de diseño.",
  },
  {
    title: "Materiales superiores",
    description:
      "Selección de materiales de mayor calidad. Mayor atención en texturas, acabados y detalles.",
  },
  {
    title: "Alta personalización",
    description:
      "Nivel de personalización más completo. Más opciones, más libertad de diseño y mayor atención al detalle en cada pieza.",
  },
  {
    title: "Aspecto exclusivo",
    description:
      "Diseños diferentes a los modelos convencionales. Siguen siendo funcionales, pero con una fuerte dimensión estética.",
  },
];

export default function DeluxeLinePage() {
  return (
    <main className="pt-24">

      {/* Hero */}
      <section className="py-20 sm:py-28 bg-charcoal text-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-start max-w-3xl">

            <div className="flex items-center gap-3 mb-6">
              <span className="font-serif text-6xl text-ivory/10 font-normal">03</span>
              <div className="h-px w-8 bg-ivory/20" />
              <span className="text-[10px] uppercase tracking-[0.28em] text-ivory/40 font-medium">
                Alta costura
              </span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal leading-[1.08] text-ivory mb-6">
              Diseño,{" "}
              <span className="italic text-beige">calidad y exclusividad.</span>
            </h1>

            <p className="text-base sm:text-lg text-ivory/65 leading-relaxed font-light max-w-xl mb-8">
              La línea Deluxe es el nivel más alto de Florytela. Mandiles con mayor atención al diseño, materiales superiores y una estética más elaborada. Para quienes buscan una pieza que sea, además, un objeto de diseño.
            </p>

            <div className="bg-ivory/8 border border-ivory/15 p-4 mb-10 max-w-lg">
              <p className="text-xs text-ivory/60 font-light leading-relaxed">
                <span className="text-ivory/90 font-medium">Nota:</span> La línea Deluxe se está desarrollando progresivamente. Contáctanos para conocer las opciones disponibles actualmente y lo que viene próximamente.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-start gap-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-ivory text-charcoal hover:bg-beige-light px-6 py-3.5 text-xs uppercase tracking-[0.14em] font-medium transition-colors"
              >
                Consultar disponibilidad
                <ArrowRight className="w-4 h-4" />
              </a>
              <Link
                href="/linea/personalizacion"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.14em] text-ivory/50 hover:text-ivory font-medium transition-colors py-3.5"
              >
                Ver Personalización
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Lo que la distingue */}
      <section className="py-20 sm:py-28 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl sm:text-3xl text-charcoal font-normal mb-12">
            Lo que distingue a la línea Deluxe
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-0 border border-beige max-w-4xl">
            {highlights.map((h, idx) => (
              <div
                key={idx}
                className="p-8 bg-ivory border-r border-b border-beige sm:[&:nth-child(2n)]:border-r-0 last:border-b-0 hover:bg-beige-light/20 transition-colors group"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-taupe mb-5 group-hover:bg-burgundy transition-colors" />
                <h3 className="font-serif text-lg text-charcoal font-medium mb-2 group-hover:text-burgundy transition-colors">
                  {h.title}
                </h3>
                <p className="text-sm text-charcoal/65 leading-relaxed font-light">
                  {h.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="py-16 bg-beige-light/30 border-t border-beige">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-[10px] uppercase tracking-[0.28em] text-taupe font-medium block mb-3">
            En desarrollo
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl text-charcoal font-normal mb-3">
            Próximamente, más de la línea Deluxe
          </h2>
          <p className="text-sm text-charcoal/60 font-light mb-8 max-w-md mx-auto">
            Estamos desarrollando esta línea progresivamente. Si ya te interesa, contáctanos y te avisamos cuando haya novedades.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-burgundy hover:bg-burgundy-deep text-ivory px-8 py-4 text-xs uppercase tracking-[0.14em] font-medium transition-colors"
            >
              Quiero saber más
              <ArrowRight className="w-4 h-4" />
            </a>
            <Link
              href="/linea/personalizacion"
              className="text-xs uppercase tracking-[0.14em] text-taupe hover:text-burgundy font-medium transition-colors"
            >
              Mientras tanto, ver Personalización
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
