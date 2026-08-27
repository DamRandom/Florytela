"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Paintbrush,
  Ruler,
  PocketKnife,
  Pen,
  Scissors,
  Users,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import { createWhatsAppLink } from "@/lib/whatsapp";

const whatsappUrl = createWhatsAppLink({
  type: "custom",
  customNotes:
    "Hola Adriana, quiero personalizar mi mandil desde cero. Me gustaría recibir asesoría sobre modelos, colores y bolsillos.",
});

/* ─── DATA ─── */

const pillars = [
  {
    icon: Paintbrush,
    title: "Cualquier color o combinación",
    description:
      "Sin limitaciones de catálogo. Elige el color o la combinación cromática que represente tu marca. Buscamos y validamos el tono exacto que necesitas.",
  },
  {
    icon: Ruler,
    title: "Modelo y silueta",
    description:
      "Pechera clásica, cruzado en X o estilo bistrot. Selecciona la silueta que mejor se adapte a tu actividad y a la imagen de tu negocio.",
  },
  {
    icon: PocketKnife,
    title: "Bolsillos a medida",
    description:
      "Define tipo, cantidad y posición exacta de cada bolsillo según tus herramientas de trabajo: comanda, termómetro, tijeras o utensilios.",
  },
  {
    icon: Pen,
    title: "Bordado de identidad",
    description:
      "Tu logotipo, monograma o nombre bordado con hilo de alta definición. Diseñado para integrarse con armonía y durabilidad.",
  },
  {
    icon: Scissors,
    title: "Materiales seleccionados",
    description:
      "Sargas, linos, ripstop técnico y algodón peinado. Tirantes en cuero genuino o cinta de algodón. Herrajes metálicos personalizados.",
  },
  {
    icon: Users,
    title: "Desde 1 pieza",
    description:
      "Sin mínimos de pedido. Confeccionamos una sola pieza exclusiva o un lote completo para tu equipo con atención personalizada.",
  },
];

const steps = [
  {
    num: "01",
    title: "Cuéntanos tu idea",
    desc: "Escríbenos por WhatsApp o formulario. Cuéntanos tu actividad, tu estilo y los colores o referencias que tienes en mente.",
  },
  {
    num: "02",
    title: "Diseñamos juntos",
    desc: "Adriana te asesora en modelo, colores, bolsillos y bordado para llegar a la propuesta perfecta antes de confeccionar.",
  },
  {
    num: "03",
    title: "Confección artesanal",
    desc: "Tu mandil se confecciona pieza a pieza en nuestro taller de Lima con textiles seleccionados y acabados de alta resistencia.",
  },
  {
    num: "04",
    title: "Entrega a tu puerta",
    desc: "Envío seguro a Lima Metropolitana y provincias. Tu mandil llega listo para acompañar tu jornada.",
  },
];

const testimonials = [
  {
    quote: "Adriana entendió exactamente los colores y detalles que necesitaba. Mi mandil es perfecto para la barra y mis clientes siempre lo comentan.",
    author: "Carlos M.",
    role: "Barista de especialidad · Lima",
  },
  {
    quote: "Pedimos 12 mandiles con los colores corporativos de nuestra marca y cada uno quedó impecable. El bordado del logo superó nuestras expectativas.",
    author: "Valeria R.",
    role: "Directora de cocina · Miraflores",
  },
  {
    quote: "Lo que más valoro es la asesoría directa. Te ayudan a pensar cada bolsillo y cada terminación para que sea realmente funcional.",
    author: "Diego F.",
    role: "Chef pastelero · San Isidro",
  },
];

/* ─── COMPONENTS ─── */

function HeroSection() {
  return (
    <section className="relative flex items-center overflow-hidden bg-ivory pt-20 sm:pt-24 pb-16 sm:pb-0 sm:min-h-[88vh] border-b border-beige">
      {/* Fondo geométrico abstracto minimalista */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 opacity-[0.018] bg-[radial-gradient(#550B14_1px,transparent_1px)] bg-size-[32px_32px]" />

        {/* Arco arquitectónico grande */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="absolute -right-20 top-1/2 -translate-y-1/2 w-[500px] h-[500px] sm:w-[600px] sm:h-[600px] lg:w-[720px] lg:h-[720px] rounded-full border border-beige/70"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.35 }}
          className="absolute -right-20 top-1/2 -translate-y-1/2 w-[400px] h-[400px] sm:w-[480px] sm:h-[480px] lg:w-[580px] lg:h-[580px] rounded-full border border-dashed border-beige/50"
        />

        {/* Orbes suaves */}
        <div className="absolute top-16 right-24 w-48 h-48 sm:w-64 sm:h-64 rounded-full bg-burgundy/8 blur-3xl" />
        <div className="absolute bottom-20 left-12 w-40 h-40 rounded-full bg-beige/40 blur-3xl" />
        <div className="hidden lg:block absolute right-[38%] top-0 bottom-0 w-px bg-beige/50" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 w-full py-10 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Columna izquierda: Contenido */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-8"
            >
              <span className="font-serif text-5xl text-beige font-normal leading-none select-none">
                02
              </span>
              <div className="h-px w-6 bg-beige" />
              <span className="text-[10px] uppercase tracking-[0.32em] text-taupe font-medium">
                Línea Personalización · Propuesta Insignia
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.1 }}
              className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal leading-[1.05] tracking-tight text-charcoal mb-6"
            >
              Tu mandil,{" "}
              <span className="italic text-burgundy">exactamente</span>
              <br className="hidden sm:block" />
              como lo necesitas.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="text-base sm:text-lg text-charcoal/65 leading-relaxed font-light mb-10 max-w-xl"
            >
              La propuesta central de Florytela. Diseñas desde cero: modelo,
              colores a tu elección, distribución de bolsillos y bordado de identidad.
              Con asesoría directa de Adriana Martínez y disponible desde una sola pieza.
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
                <span>Personalizar mandil</span>
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
              <Link href="/linea/fast" className="hover:text-burgundy transition-colors">01 Fast</Link>
              <span className="w-1 h-1 rounded-full bg-beige" />
              <span className="font-medium text-burgundy">02 Personalización</span>
              <span className="w-1 h-1 rounded-full bg-beige" />
              <Link href="/linea/deluxe" className="hover:text-burgundy transition-colors">03 Deluxe</Link>
            </motion.div>
          </div>

          {/* Columna derecha: Tarjeta de personalización total */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-5"
          >
            <div className="bg-ivory border border-beige p-6 sm:p-8 shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="w-3.5 h-3.5 text-burgundy" />
                <span className="text-[10px] uppercase tracking-[0.28em] text-taupe font-medium">
                  Libertad Creativa Total
                </span>
              </div>
              <div className="space-y-4">
                {[
                  { title: "Colores sin límite", desc: "Elige cualquier color o combinación para tu identidad." },
                  { title: "Bolsillos configurables", desc: "Posición y cantidad según tus herramientas reales." },
                  { title: "Bordado de logo", desc: "Bordado computarizado de alta definición incluido." },
                  { title: "Desde 1 sola pieza", desc: "Sin mínimos requeridos, con asesoría paso a paso." },
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

      {/* Scroll hint — solo desktop */}
      <div className="hidden sm:flex absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex-col items-center gap-1.5">
        <span className="text-[9px] uppercase tracking-[0.28em] text-taupe/40">
          Descubre más
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-8 bg-linear-to-b from-taupe/30 to-transparent"
        />
      </div>
    </section>
  );
}

function PillarsGrid() {
  const scrollRef = React.useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = React.useState(0);

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, clientWidth } = scrollRef.current;
    const index = Math.round(scrollLeft / (clientWidth * 0.82));
    setActiveIndex(Math.min(Math.max(index, 0), pillars.length - 1));
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
              ¿Qué puedes personalizar?
            </span>
            <h2 className="font-serif text-2.5xl sm:text-4xl text-charcoal font-normal leading-tight">
              Cada detalle,
              <br />
              <span className="italic text-burgundy">a tu criterio.</span>
            </h2>
          </div>

          {/* Controles — solo móvil */}
          <div className="flex items-center justify-between sm:hidden gap-3 border-t border-beige/60 pt-3">
            <p className="text-xs text-charcoal/55 font-light">
              Construimos desde cero.
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
                onClick={() => scrollToIndex(Math.min(pillars.length - 1, activeIndex + 1))}
                className="w-8 h-8 border border-beige hover:border-burgundy hover:text-burgundy flex items-center justify-center text-charcoal transition-colors bg-ivory active:scale-95 cursor-pointer"
                aria-label="Siguiente"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6" /></svg>
              </button>
            </div>
          </div>

          <p className="hidden sm:block text-sm text-charcoal/60 font-light leading-relaxed max-w-xs sm:text-right">
            No adaptamos un modelo genérico. Construimos tu mandil desde cero junto contigo.
          </p>
        </div>

        {/* Carousel en móvil / Grid en desktop */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex lg:grid lg:grid-cols-3 gap-3 sm:gap-0 overflow-x-auto lg:overflow-visible snap-x snap-mandatory scroll-smooth pb-3 lg:pb-0 -mx-4 px-4 sm:mx-0 sm:px-0 no-scrollbar lg:border lg:border-beige lg:divide-x lg:divide-y lg:divide-beige"
        >
          {pillars.map((p, idx) => {
            const Icon = p.icon;
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
                    {p.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-charcoal/60 leading-relaxed font-light">{p.description}</p>
                </motion.div>
              </div>
            );
          })}
        </div>

        {/* Dots indicadores — solo móvil */}
        <div className="flex justify-center items-center gap-1.5 mt-3 lg:hidden">
          {pillars.map((_, idx) => (
            <button
              key={idx}
              onClick={() => scrollToIndex(idx)}
              className={`h-1 transition-all duration-300 cursor-pointer ${activeIndex === idx ? "w-5 bg-burgundy" : "w-1.5 bg-beige hover:bg-taupe"}`}
              aria-label={`Pilar ${idx + 1}`}
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
            El proceso
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-charcoal font-normal">
            De la idea{" "}
            <span className="italic text-burgundy">a tu mandil.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 border border-beige divide-y sm:divide-y-0 sm:divide-x divide-beige">
          {steps.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="p-8 sm:p-8 flex flex-col items-start bg-ivory group hover:bg-beige-light/30 transition-colors"
            >
              <span className="font-serif text-4xl text-beige font-normal leading-none mb-6 group-hover:text-burgundy transition-colors select-none">
                {s.num}
              </span>
              <h3 className="font-serif text-lg text-charcoal font-medium mb-2 group-hover:text-burgundy transition-colors">
                {s.title}
              </h3>
              <p className="text-sm text-charcoal/60 font-light leading-relaxed">
                {s.desc}
              </p>
              {i < steps.length - 1 && (
                <div className="mt-auto pt-5 hidden lg:flex items-center">
                  <ArrowRight className="w-4 h-4 text-beige" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  const scrollRef = React.useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = React.useState(0);

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, clientWidth } = scrollRef.current;
    const index = Math.round(scrollLeft / (clientWidth * 0.85));
    setActiveIndex(Math.min(Math.max(index, 0), testimonials.length - 1));
  };

  const scrollToIndex = (index: number) => {
    if (!scrollRef.current) return;
    const card = scrollRef.current.children[0] as HTMLElement;
    const cardWidth = card?.offsetWidth || 300;
    scrollRef.current.scrollTo({ left: index * (cardWidth + 12), behavior: "smooth" });
    setActiveIndex(index);
  };

  return (
    <section className="py-16 sm:py-24 bg-ivory border-b border-beige">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8 sm:mb-14">
          <div>
            <span className="text-[10px] uppercase tracking-[0.28em] text-taupe font-medium block mb-2 sm:mb-3">
              Quienes ya personalizaron
            </span>
            <h2 className="font-serif text-2.5xl sm:text-4xl text-charcoal font-normal leading-tight">
              Lo que dicen{" "}
              <br className="sm:hidden" />
              <span className="italic text-burgundy">nuestros clientes.</span>
            </h2>
          </div>

          {/* Controles — solo móvil */}
          <div className="flex items-center justify-end sm:hidden border-t border-beige/60 pt-3">
            <div className="flex items-center gap-1 shrink-0">
              <button
                onClick={() => scrollToIndex(Math.max(0, activeIndex - 1))}
                className="w-8 h-8 border border-beige hover:border-burgundy hover:text-burgundy flex items-center justify-center text-charcoal transition-colors bg-ivory active:scale-95 cursor-pointer"
                aria-label="Anterior"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="15 18 9 12 15 6" /></svg>
              </button>
              <button
                onClick={() => scrollToIndex(Math.min(testimonials.length - 1, activeIndex + 1))}
                className="w-8 h-8 border border-beige hover:border-burgundy hover:text-burgundy flex items-center justify-center text-charcoal transition-colors bg-ivory active:scale-95 cursor-pointer"
                aria-label="Siguiente"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6" /></svg>
              </button>
            </div>
          </div>
        </div>

        {/* Carousel en móvil / Grid en desktop */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex lg:grid lg:grid-cols-3 gap-3 sm:gap-0 overflow-x-auto lg:overflow-visible snap-x snap-mandatory scroll-smooth pb-3 lg:pb-0 -mx-4 px-4 sm:mx-0 sm:px-0 no-scrollbar lg:border lg:border-beige lg:divide-x lg:divide-y lg:divide-beige"
        >
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="w-[85vw] sm:w-auto shrink-0 lg:shrink snap-center"
            >
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-6 sm:p-10 bg-ivory border border-beige lg:border-0 flex flex-col h-full"
              >
                <p className="text-[13px] sm:text-sm text-charcoal/75 font-light leading-relaxed italic flex-1">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-5 sm:mt-6 pt-4 sm:pt-5 border-t border-beige/60">
                  <span className="block text-[13px] sm:text-sm text-charcoal font-medium">
                    {t.author}
                  </span>
                  <span className="block text-[9px] sm:text-[10px] uppercase tracking-[0.18em] text-taupe font-medium mt-0.5">
                    {t.role}
                  </span>
                </div>
              </motion.div>
            </div>
          ))}
        </div>

        {/* Dots indicadores — solo móvil */}
        <div className="flex justify-center items-center gap-1.5 mt-3 lg:hidden">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => scrollToIndex(idx)}
              className={`h-1 transition-all duration-300 cursor-pointer ${activeIndex === idx ? "w-5 bg-burgundy" : "w-1.5 bg-beige hover:bg-taupe"}`}
              aria-label={`Testimonio ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

function IdealForSection() {
  return (
    <section className="py-16 sm:py-24 bg-beige-light/20 border-b border-beige">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="text-[10px] uppercase tracking-[0.28em] text-taupe font-medium block mb-3">
          ¿Para quién es?
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl text-charcoal font-normal">
          Diseñado para quienes{" "}
          <span className="italic text-burgundy">
            valoran cada detalle.
          </span>
        </h2>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="py-20 sm:py-28 bg-burgundy text-ivory">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-[10px] uppercase tracking-[0.28em] text-ivory/50 font-medium block mb-4">
            Atelier Florytela · Lima, Perú
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-ivory font-normal leading-tight mb-4">
            ¿Listo para diseñar
            <br />
            <span className="italic text-beige">tu mandil a medida?</span>
          </h2>
          <p className="text-sm sm:text-base text-ivory/65 font-light leading-relaxed mb-10 max-w-md mx-auto">
            Escríbenos por WhatsApp y Adriana te asesora sin compromiso. También
            puedes llenar nuestro formulario de contacto.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3.5 sm:gap-4 w-full max-w-md mx-auto">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-ivory text-burgundy hover:bg-beige hover:text-burgundy-deep px-8 py-4 text-xs uppercase tracking-[0.16em] font-medium transition-all duration-300 shadow-md active:scale-[0.98] text-center"
            >
              <span>Personalizar por WhatsApp</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <Link
              href="/contacto"
              className="inline-flex items-center justify-center gap-2 text-xs uppercase tracking-[0.16em] text-ivory/70 hover:text-ivory font-medium transition-colors py-3.5 px-4 border border-ivory/20 sm:border-transparent text-center"
            >
              <span>Formulario de contacto</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ─── PAGE ─── */

export default function PersonalizacionLinePage() {
  return (
    <main>
      <HeroSection />
      <PillarsGrid />
      <ProcessSection />
      <TestimonialsSection />
      <IdealForSection />
      <CTASection />
    </main>
  );
}
