"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Zap, Package, Layers, Clock, Palette, ShieldCheck, CheckCircle2 } from "lucide-react";
import { createWhatsAppLink } from "@/lib/whatsapp";

const whatsappUrl = createWhatsAppLink({
  type: "custom",
  customNotes: "Hola Adriana 👋 Me interesa la Línea Fast. ¿Qué modelos tienen disponibles para coordinar?",
});

const features = [
  {
    icon: Package,
    title: "Modelos prediseñados",
    description:
      "Diseños ya probados y optimizados en jornadas reales. Sin necesidad de diseñar desde cero ni pasar por largos periodos de prueba.",
  },
  {
    icon: Palette,
    title: "Color a tu elección",
    description:
      "Dinos el tono o combinación que necesitas. Confeccionamos tu pedido en el color que prefieras para tu negocio o proyecto.",
  },
  {
    icon: Layers,
    title: "Bolsillos funcionales",
    description:
      "Configuración de bolsillos estudiada para el trabajo real: acceso rápido, distribución ergonómica y máxima practicidad.",
  },
  {
    icon: Clock,
    title: "Proceso ágil",
    description:
      "Sin rondas complejas de diseño. Eliges el modelo, defines el color, coordinamos y confeccionamos tu mandil en menor tiempo.",
  },
  {
    icon: Zap,
    title: "Accesible y sin mínimos",
    description:
      "La opción más directa y accesible de Florytela. Puedes solicitar desde una sola pieza con la misma calidad de confección.",
  },
  {
    icon: ShieldCheck,
    title: "Materiales de confianza",
    description:
      "Confeccionados en Ripstop técnico y algodón preencogido de alta resistencia con costuras industriales reforzadas.",
  },
];

const steps = [
  {
    num: "01",
    title: "Elige tu modelo y color",
    desc: "Selecciona el modelo de la línea Fast y cuéntanos qué color o combinación deseas.",
  },
  {
    num: "02",
    title: "Coordinamos por WhatsApp",
    desc: "Escríbenos tu talla, cantidad y detalles. Adriana te confirma tiempos de entrega y despacho.",
  },
  {
    num: "03",
    title: "Recibe tu mandil",
    desc: "Tu mandil llega listo a Lima Metropolitana o provincias en el menor tiempo posible.",
  },
];

function HeroSection() {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-ivory pt-24 border-b border-beige">
      {/* Fondo geométrico abstracto minimalista */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 opacity-[0.018] bg-[radial-gradient(#550B14_1px,transparent_1px)] bg-size-[32px_32px]" />

        {/* Anillos concéntricos de fondo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="absolute -right-20 top-1/2 -translate-y-1/2 w-[500px] h-[500px] sm:w-[600px] sm:h-[600px] lg:w-[680px] lg:h-[680px] rounded-full border border-beige/70"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.35 }}
          className="absolute -right-20 top-1/2 -translate-y-1/2 w-[380px] h-[380px] sm:w-[460px] sm:h-[460px] lg:w-[540px] lg:h-[540px] rounded-full border border-dashed border-beige/50"
        />

        {/* Orbes suaves */}
        <div className="absolute top-16 right-24 w-52 h-52 rounded-full bg-beige/40 blur-3xl" />
        <div className="absolute bottom-20 left-12 w-44 h-44 rounded-full bg-burgundy/5 blur-3xl" />
        <div className="hidden lg:block absolute right-[40%] top-0 bottom-0 w-px bg-beige/50" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 w-full py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Columna izquierda */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-8"
            >
              <span className="font-serif text-5xl text-beige font-normal leading-none select-none">
                01
              </span>
              <div className="h-px w-6 bg-beige" />
              <span className="text-[10px] uppercase tracking-[0.32em] text-taupe font-medium">
                Línea Fast · Entrega Ágil
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.1 }}
              className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal leading-[1.05] tracking-tight text-charcoal mb-6"
            >
              Rápido,{" "}
              <span className="italic text-burgundy">funcional</span>
              <br className="hidden sm:block" />
              y a tu color.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="text-base sm:text-lg text-charcoal/70 leading-relaxed font-light mb-10 max-w-xl"
            >
              Para quien necesita un mandil de excelente calidad sin procesos largos de diseño.
              Modelos prediseñados y probados, confeccionados en el color que pidas y con entrega ágil.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4 w-full sm:w-auto"
            >
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-burgundy hover:bg-burgundy-deep text-ivory px-7 py-4 text-xs uppercase tracking-[0.16em] font-medium transition-all duration-300 shadow-md active:scale-[0.98] text-center"
              >
                <span>Pedir ahora</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <Link
                href="/catalogo"
                className="group inline-flex items-center justify-center gap-2 text-xs uppercase tracking-[0.2em] text-taupe hover:text-burgundy transition-colors py-3.5 sm:py-4 px-2 border border-beige/60 sm:border-transparent text-center"
              >
                <span>Ver catálogo</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </motion.div>

            {/* Referencia a las otras líneas */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-14 flex items-center gap-3 text-[9px] sm:text-[10px] uppercase tracking-[0.24em] text-taupe/60"
            >
              <span className="font-medium text-burgundy">01 Fast</span>
              <span className="w-1 h-1 rounded-full bg-beige" />
              <Link href="/linea/personalizacion" className="hover:text-burgundy transition-colors">
                02 Personalización
              </Link>
              <span className="w-1 h-1 rounded-full bg-beige" />
              <Link href="/linea/deluxe" className="hover:text-burgundy transition-colors">
                03 Deluxe
              </Link>
            </motion.div>
          </div>

          {/* Columna derecha: Tarjeta de atributos de la línea Fast */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-5"
          >
            <div className="bg-ivory border border-beige p-6 sm:p-8 shadow-sm">
              <span className="text-[10px] uppercase tracking-[0.28em] text-taupe font-medium block mb-4">
                Puntos Clave · Línea Fast
              </span>
              <div className="space-y-4">
                {[
                  { title: "Modelos Listos", desc: "Patrones probados con ergonomía y caída impecable." },
                  { title: "Color Libre", desc: "Eliges el color que mejor combine con tu marca o uniforme." },
                  { title: "Sin Mínimos", desc: "Pide desde 1 unidad o lotes para todo tu equipo." },
                  { title: "Entrega Inmediata", desc: "Menor tiempo de producción y despacho express." },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 pb-3 border-b border-beige/60 last:border-b-0 last:pb-0">
                    <CheckCircle2 className="w-4 h-4 text-burgundy shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-serif text-sm text-charcoal font-medium">{item.title}</h4>
                      <p className="text-xs text-charcoal/65 font-light mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1.5">
        <span className="text-[9px] uppercase tracking-[0.28em] text-taupe/40">Descubre más</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-8 bg-linear-to-b from-taupe/30 to-transparent"
        />
      </div>
    </section>
  );
}

function FeaturesGrid() {
  const scrollRef = React.useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = React.useState(0);

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, clientWidth } = scrollRef.current;
    const index = Math.round(scrollLeft / (clientWidth * 0.82));
    setActiveIndex(Math.min(Math.max(index, 0), features.length - 1));
  };

  const scrollToIndex = (index: number) => {
    if (!scrollRef.current) return;
    const card = scrollRef.current.children[0] as HTMLElement;
    const cardWidth = card?.offsetWidth || 280;
    scrollRef.current.scrollTo({ left: index * (cardWidth + 12), behavior: "smooth" });
    setActiveIndex(index);
  };

  return (
    <section className="py-14 sm:py-28 bg-ivory border-b border-beige">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Encabezado con flechas en móvil */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8 sm:mb-14">
          <div>
            <span className="text-[10px] uppercase tracking-[0.28em] text-taupe font-medium block mb-2 sm:mb-3">
              Características
            </span>
            <h2 className="font-serif text-2.5xl sm:text-4xl text-charcoal font-normal leading-tight">
              Todo lo que incluye
              <br />
              <span className="italic text-burgundy">la Línea Fast.</span>
            </h2>
          </div>

          {/* Controles — solo móvil */}
          <div className="flex items-center justify-between sm:hidden gap-3 border-t border-beige/60 pt-3">
            <p className="text-xs text-charcoal/55 font-light">
              Pensada para quien sabe lo que quiere.
            </p>
            <div className="flex items-center gap-1 shrink-0">
              <button
                onClick={() => scrollToIndex(Math.max(0, activeIndex - 1))}
                className="w-8 h-8 border border-beige hover:border-burgundy hover:text-burgundy flex items-center justify-center text-charcoal transition-colors bg-ivory active:scale-95 cursor-pointer"
                aria-label="Anterior"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="15 18 9 12 15 6" /></svg>
              </button>
              <button
                onClick={() => scrollToIndex(Math.min(features.length - 1, activeIndex + 1))}
                className="w-8 h-8 border border-beige hover:border-burgundy hover:text-burgundy flex items-center justify-center text-charcoal transition-colors bg-ivory active:scale-95 cursor-pointer"
                aria-label="Siguiente"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6" /></svg>
              </button>
            </div>
          </div>

          <p className="hidden sm:block text-sm text-charcoal/60 font-light leading-relaxed max-w-xs sm:text-right">
            Pensada para quien sabe lo que quiere y necesita recibirlo pronto.
          </p>
        </div>

        {/* Carousel en móvil / Grid en desktop */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex lg:grid lg:grid-cols-3 gap-3 sm:gap-0 overflow-x-auto lg:overflow-visible snap-x snap-mandatory scroll-smooth pb-3 lg:pb-0 -mx-4 px-4 sm:mx-0 sm:px-0 no-scrollbar lg:border lg:border-beige lg:divide-x lg:divide-y lg:divide-beige"
        >
          {features.map((f, idx) => {
            const Icon = f.icon;
            return (
              <div
                key={idx}
                className="w-[82vw] sm:w-auto shrink-0 lg:shrink snap-center"
              >
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.45, delay: idx * 0.06 }}
                  className="p-6 sm:p-8 bg-ivory border border-beige lg:border-0 group hover:bg-beige-light/40 transition-colors duration-300 h-full"
                >
                  <div className="w-8 h-8 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-burgundy opacity-80" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-serif text-base sm:text-lg text-charcoal font-medium mb-2 group-hover:text-burgundy transition-colors duration-300">
                    {f.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-charcoal/60 leading-relaxed font-light">{f.description}</p>
                </motion.div>
              </div>
            );
          })}
        </div>

        {/* Dots indicadores — solo móvil */}
        <div className="flex justify-center items-center gap-1.5 mt-3 lg:hidden">
          {features.map((_, idx) => (
            <button
              key={idx}
              onClick={() => scrollToIndex(idx)}
              className={`h-1 transition-all duration-300 cursor-pointer ${activeIndex === idx ? "w-5 bg-burgundy" : "w-1.5 bg-beige hover:bg-taupe"}`}
              aria-label={`Característica ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

function ProcessSection() {
  return (
    <section className="py-20 sm:py-28 bg-beige-light/25 border-b border-beige">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-[10px] uppercase tracking-[0.28em] text-taupe font-medium block mb-3">
            Cómo funciona
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-charcoal font-normal">
            Tres pasos.{" "}
            <span className="italic text-burgundy">Sin complicaciones.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-0 border border-beige divide-y sm:divide-y-0 sm:divide-x divide-beige">
          {steps.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-8 sm:p-10 flex flex-col items-start bg-ivory"
            >
              <span className="font-serif text-5xl text-beige font-normal leading-none mb-6 select-none">
                {s.num}
              </span>
              <h3 className="font-serif text-xl text-charcoal font-medium mb-2">{s.title}</h3>
              <p className="text-sm text-charcoal/60 font-light leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FastVsCustomSection() {
  return (
    <section className="py-20 sm:py-24 bg-ivory">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-[10px] uppercase tracking-[0.28em] text-taupe font-medium block mb-3">
            ¿Cuál es para ti?
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-charcoal font-normal">
            Fast vs.{" "}
            <span className="italic text-burgundy">Personalización.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-0 border border-beige divide-y sm:divide-y-0 sm:divide-x divide-beige">
          {/* Fast */}
          <div className="bg-ivory p-8 sm:p-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-2 h-2 rounded-full bg-taupe" />
              <span className="text-[10px] uppercase tracking-[0.26em] font-medium text-taupe">Línea Fast</span>
            </div>
            <ul className="space-y-3">
              {[
                "Modelos prediseñados listos para producir",
                "Eliges el color que prefieras para tu mandil",
                "Proceso de pedido simplificado y ágil",
                "Ideal para necesidades inmediatas y equipos",
                "Desde 1 pieza con precio directo y accesible",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm text-charcoal/70 font-light">
                  <span className="mt-1.5 w-1 h-1 rounded-full bg-taupe shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Personalización */}
          <div className="bg-burgundy p-8 sm:p-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-2 h-2 rounded-full bg-ivory/60" />
              <span className="text-[10px] uppercase tracking-[0.26em] font-medium text-ivory/70">
                Línea Personalización
              </span>
            </div>
            <ul className="space-y-3">
              {[
                "Modelo, medidas y bolsillos diseñados desde cero",
                "Cualquier color o combinación sin límites",
                "Bordado de logotipo o monograma incluido",
                "Asesoría directa con Adriana Martínez",
                "Para marcas que cuidan cada milímetro",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm text-ivory/80 font-light">
                  <span className="mt-1.5 w-1 h-1 rounded-full bg-ivory/40 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <Link
              href="/linea/personalizacion"
              className="inline-flex items-center gap-2 mt-7 text-[11px] uppercase tracking-[0.2em] text-ivory/70 hover:text-ivory transition-colors font-medium"
            >
              <span>Conocer más</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="py-20 sm:py-28 bg-ivory border-t border-beige">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-[10px] uppercase tracking-[0.28em] text-taupe font-medium block mb-4">
            Atelier Florytela · Lima, Perú
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-charcoal font-normal leading-tight mb-4">
            ¿Listo para tu
            <br />
            <span className="italic text-burgundy">mandil Fast?</span>
          </h2>
          <p className="text-sm sm:text-base text-charcoal/60 font-light leading-relaxed mb-10 max-w-md mx-auto">
            Escríbenos por WhatsApp y coordinamos tu pedido al instante. Dinos qué color y modelo buscas.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3.5 sm:gap-4 w-full max-w-md mx-auto">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-burgundy hover:bg-burgundy-deep text-ivory px-8 py-4 text-xs uppercase tracking-[0.16em] font-medium transition-all duration-300 shadow-md active:scale-[0.98] text-center"
            >
              <span>Pedir por WhatsApp</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <Link
              href="/contacto"
              className="inline-flex items-center justify-center gap-2 text-xs uppercase tracking-[0.16em] text-taupe hover:text-burgundy font-medium transition-colors py-3.5 px-4 border border-beige/60 sm:border-transparent text-center"
            >
              <span>Otras consultas</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default function FastLinePage() {
  return (
    <main>
      <HeroSection />
      <FeaturesGrid />
      <ProcessSection />
      <FastVsCustomSection />
      <CTASection />
    </main>
  );
}
