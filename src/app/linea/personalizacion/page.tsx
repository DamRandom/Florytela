import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

const whatsappUrl = `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(
  "Hola, quiero personalizar mi mandil. ¿Pueden asesorarme?"
)}`;

const steps = [
  {
    number: "01",
    title: "Elige tu modelo",
    description:
      "Distintos modelos de mandil según tu actividad. Te asesoramos para encontrar el que mejor se adapta a lo que necesitas.",
  },
  {
    number: "02",
    title: "Selecciona tu color",
    description:
      "Amplia paleta de colores disponibles. Elige el que mejor represente tu marca, negocio o personalidad.",
  },
  {
    number: "03",
    title: "Configura tus bolsillos",
    description:
      "Tipo, cantidad y posición de bolsillos adaptados a tu trabajo. Cada detalle se piensa para que sea realmente útil.",
  },
  {
    number: "04",
    title: "Nos contactas y coordinamos",
    description:
      "Hablamos por WhatsApp o correo, te asesoramos sin compromiso y coordinamos tu pedido. Sin complicaciones.",
  },
];

const options = [
  { label: "Modelos disponibles", value: "Varios modelos" },
  { label: "Colores", value: "Amplia paleta" },
  { label: "Bolsillos", value: "A tu elección" },
  { label: "Mínimo de piezas", value: "Desde 1 unidad" },
  { label: "Pedidos por mayor", value: "Disponible" },
  { label: "Materiales", value: "Ripstop · Algodón" },
];

export default function PersonalizacionLinePage() {
  return (
    <main className="pt-24">

      {/* Hero */}
      <section className="py-20 sm:py-28 bg-burgundy text-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-start max-w-3xl">

            <div className="flex items-center gap-3 mb-6">
              <span className="font-serif text-6xl text-ivory/20 font-normal">02</span>
              <div className="h-px w-8 bg-ivory/30" />
              <span className="text-[10px] uppercase tracking-[0.28em] text-ivory/60 font-medium">
                Línea principal
              </span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal leading-[1.08] text-ivory mb-6">
              Tu mandil,{" "}
              <span className="italic text-beige">exactamente como lo necesitas.</span>
            </h1>

            <p className="text-base sm:text-lg text-ivory/75 leading-relaxed font-light max-w-xl mb-10">
              La línea Personalización es la propuesta central de Florytela. Diseñas desde cero: modelo, color, bolsillos y configuración. Con asesoría directa y disponible desde una sola pieza.
            </p>

            <div className="flex flex-col sm:flex-row items-start gap-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-ivory text-burgundy hover:bg-beige-light px-6 py-3.5 text-xs uppercase tracking-[0.14em] font-medium transition-colors"
              >
                Personalizar mi mandil
                <ArrowRight className="w-4 h-4" />
              </a>
              <Link
                href="/linea/fast"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.14em] text-ivory/60 hover:text-ivory font-medium transition-colors py-3.5"
              >
                Ver línea Fast
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Proceso paso a paso */}
      <section className="py-20 sm:py-28 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl sm:text-3xl text-charcoal font-normal mb-4">
            Cómo funciona
          </h2>
          <p className="text-sm text-charcoal/60 font-light mb-12 max-w-lg">
            El proceso es simple. Te acompañamos en cada paso para que el resultado sea justo lo que buscabas.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 border border-beige">
            {steps.map((step, idx) => (
              <div
                key={step.number}
                className="p-8 bg-ivory border-r border-beige last:border-r-0 flex flex-col group hover:bg-beige-light/30 transition-colors"
              >
                <span className="font-serif text-4xl text-beige font-normal mb-6 group-hover:text-burgundy transition-colors">
                  {step.number}
                </span>
                <h3 className="font-serif text-lg text-charcoal font-medium mb-3 group-hover:text-burgundy transition-colors">
                  {step.title}
                </h3>
                <p className="text-sm text-charcoal/65 leading-relaxed font-light">
                  {step.description}
                </p>
                {idx < steps.length - 1 && (
                  <div className="mt-auto pt-6 hidden lg:flex items-center">
                    <ArrowRight className="w-4 h-4 text-beige" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Qué puedes personalizar */}
      <section className="py-20 sm:py-28 bg-beige-light/30 border-y border-beige">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl sm:text-3xl text-charcoal font-normal mb-12">
            ¿Qué puedes personalizar?
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-0 border border-beige max-w-2xl">
            {options.map((opt) => (
              <div
                key={opt.label}
                className="p-6 bg-ivory border-r border-b border-beige [&:nth-child(3n)]:border-r-0"
              >
                <span className="text-[10px] uppercase tracking-[0.2em] text-taupe block mb-1">
                  {opt.label}
                </span>
                <span className="font-serif text-base text-charcoal font-medium">
                  {opt.value}
                </span>
              </div>
            ))}
          </div>
          <p className="text-xs text-taupe mt-6 font-light">
            * Disponible desde 1 pieza. Pedidos por mayor también disponibles con precios escalonados.
          </p>
        </div>
      </section>

      {/* CTA final */}
      <section className="py-16 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-2xl sm:text-3xl text-charcoal font-normal mb-3">
            ¿Empezamos?
          </h2>
          <p className="text-sm text-charcoal/60 font-light mb-8">
            Escríbenos y te asesoramos sin compromiso.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-burgundy hover:bg-burgundy-deep text-ivory px-8 py-4 text-xs uppercase tracking-[0.14em] font-medium transition-colors"
            >
              Personalizar por WhatsApp
              <ArrowRight className="w-4 h-4" />
            </a>
            <Link
              href="/linea/deluxe"
              className="text-xs uppercase tracking-[0.14em] text-taupe hover:text-burgundy font-medium transition-colors"
            >
              Ver línea Deluxe
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
