"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Crown,
  Sparkles,
  Gem,
  Award,
  Scissors,
  Feather,
  CheckCircle2,
} from "lucide-react";
import { createWhatsAppLink } from "@/lib/whatsapp";

const whatsappUrl = createWhatsAppLink({
  type: "custom",
  customNotes:
    "Hola Adriana 👋 Me interesa la Línea Deluxe de Florytela. Quisiera cotizar un mandil de alta costura de autor.",
});

/* ─── DATA ─── */

const pillars = [
  {
    icon: Feather,
    title: "Fibras nobles de origen puro",
    description:
      "Lino europeo lavado a la piedra, sarga de bambú y algodones de alta densidad. Textiles con textura rica, caída impecable y envejecimiento noble.",
  },
  {
    icon: Gem,
    title: "Cuero vegetal & herrajes macizos",
    description:
      "Aplicaciones en cuero vacuno de curtición vegetal de primera selección. Herrajes macizos en latón y bronce con acabados artesanales antioxidables.",
  },
  {
    icon: Scissors,
    title: "Patronaje y siluetas de autor",
    description:
      "Cortes concebidos por Adriana Martínez que elevan la ergonomía tradicional. Líneas limpias, proporciones equilibradas y comodidad absoluta.",
  },
  {
    icon: Award,
    title: "Acabados manuales de sastrería",
    description:
      "Pespuntes de alta resistencia, costuras con hilo reforzado y remates hechos a mano que garantizan una durabilidad excepcional.",
  },
  {
    icon: Crown,
    title: "Color y combinación libre",
    description:
      "Cualquier tonalidad o contraste cromático que concibas para tu marca o proyecto personal, materializado en las mejores telas del mercado.",
  },
  {
    icon: Sparkles,
    title: "Presentación exclusiva de atelier",
    description:
      "Cada mandil Deluxe se entrega acondicionado como una pieza de autor, acompañado de su guía técnica de mantenimiento y cuidado textil.",
  },
];

const steps = [
  {
    num: "01",
    title: "Consulta de autor",
    desc: "Conversamos directamente sobre tu visión, el entorno donde usarás la prenda y tus preferencias estéticas y funcionales.",
  },
  {
    num: "02",
    title: "Selección textil y herrajes",
    desc: "Definimos juntos la fibra principal, las aplicaciones de cuero, el tono deseado y el tipo de herrajes macizos.",
  },
  {
    num: "03",
    title: "Confección artesanal",
    desc: "Adriana Martínez y el equipo del atelier cortan y confeccionan tu mandil con técnicas de sastrería de alta gama.",
  },
  {
    num: "04",
    title: "Entrega de distinción",
    desc: "Envío seguro a Lima o provincias en empaque exclusivo de autor, listo para convertirse en tu pieza insignia de trabajo.",
  },
];

const idealAudiences = [
  {
    title: "Fine Dining & Autor",
    items: [
      "Chefs ejecutivos y brigadas de alta gastronomía",
      "Restaurantes con estrella y conceptos de vanguardia",
      "Experiencias de mesa privada y catering de lujo",
      "Menús degustación donde cada detalle cuenta",
    ],
  },
  {
    title: "Dirección de Barra & Sala",
    items: [
      "Head Sommeliers y directores de sala",
      "Mixólogos de autor y coctelería conceptual",
      "Embajadores de destilados y marcas premium",
      "Hospitality de alto nivel",
    ],
  },
  {
    title: "Colección & Oficios Nobles",
    items: [
      "Maestros artesanos, joyeros y escultores",
      "Regalos institucionales de máxima distinción",
      "Profesionales que conciben su uniforme como arte",
      "Apasionados del diseño textil que exigen lo mejor",
    ],
  },
];

/* ─── COMPONENTS ─── */

function HeroSection() {
  return (
    <section className="relative flex items-center overflow-hidden bg-ivory pt-20 sm:pt-24 pb-16 sm:pb-0 sm:min-h-[88vh] border-b border-beige">
      {/* Fondo geométrico abstracto minimalista de lujo */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 opacity-[0.018] bg-[radial-gradient(#550B14_1px,transparent_1px)] bg-size-[32px_32px]" />

        {/* Anillos concéntricos dobles */}
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
        <div className="absolute top-16 right-24 w-52 h-52 rounded-full bg-burgundy/8 blur-3xl" />
        <div className="absolute bottom-20 left-12 w-44 h-44 rounded-full bg-beige/45 blur-3xl" />
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
                03
              </span>
              <div className="h-px w-6 bg-beige" />
              <span className="text-[10px] uppercase tracking-[0.32em] text-taupe font-medium">
                Línea Deluxe · Alta Costura de Autor
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.1 }}
              className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal leading-[1.05] tracking-tight text-charcoal mb-6"
            >
              La máxima expresión{" "}
              <br className="hidden sm:block" />
              del mandil{" "}
              <span className="italic text-burgundy">de autor.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="text-base sm:text-lg text-charcoal/65 leading-relaxed font-light mb-10 max-w-xl"
            >
              La propuesta más exclusiva de Florytela. Fibras puras, cuero de curtición
              vegetal, herrajes macizos y confección de sastrería manual para quienes
              conciben el mandil como una auténtica pieza de arte.
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
                <span>Cotizar Línea Deluxe</span>
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
              <Link href="/linea/fast" className="hover:text-burgundy transition-colors">
                01 Fast
              </Link>
              <span className="w-1 h-1 rounded-full bg-beige" />
              <Link href="/linea/personalizacion" className="hover:text-burgundy transition-colors">
                02 Personalización
              </Link>
              <span className="w-1 h-1 rounded-full bg-beige" />
              <span className="font-medium text-burgundy">03 Deluxe</span>
            </motion.div>
          </div>

          {/* Columna derecha: Tarjeta de lujo y exclusividad */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-5"
          >
            <div className="bg-ivory border border-beige p-6 sm:p-8 shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <Crown className="w-3.5 h-3.5 text-burgundy" />
                <span className="text-[10px] uppercase tracking-[0.28em] text-taupe font-medium">
                  Sastrería de Alta Gama
                </span>
              </div>
              <div className="space-y-4">
                {[
                  { title: "Fibras de Lino Puro", desc: "Textiles europeos lavados a la piedra con caída noble." },
                  { title: "Cuero Vegetal Genuino", desc: "Tirantes y detalles con curtición vegetal seleccionada." },
                  { title: "Herrajes Macizos", desc: "Latón y bronce forjados de máxima resistencia y porte." },
                  { title: "Piezas de Autor", desc: "Confección minuciosa con acabados de alta sastrería." },
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
              Distinción Absoluta
            </span>
            <h2 className="font-serif text-2.5xl sm:text-4xl text-charcoal font-normal leading-tight">
              Lo que define a
              <br />
              <span className="italic text-burgundy">la Línea Deluxe.</span>
            </h2>
          </div>

          {/* Controles — solo móvil */}
          <div className="flex items-center justify-between sm:hidden gap-3 border-t border-beige/60 pt-3">
            <p className="text-xs text-charcoal/55 font-light">
              Obra textil para perdurar.
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
            Cada pieza se concibe como una obra textil pensada para perdurar y destacar con distinción.
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
              aria-label={`Detalle ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

function ManifestoSection() {
  return (
    <section className="py-20 sm:py-28 bg-beige-light/25 border-b border-beige relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-5 sm:px-8 text-center">
        <span className="text-[10px] uppercase tracking-[0.3em] text-taupe font-medium block mb-6">
          Manifiesto de Autor
        </span>
        <blockquote className="font-serif text-2xl sm:text-3xl lg:text-4xl text-charcoal font-normal leading-snug tracking-tight">
          &ldquo;Un mandil Deluxe no es solo una prenda de protección: es una
          extensión de tu oficio, concebida con la misma maestría y rigor que
          pones en cada una de tus creaciones.&rdquo;
        </blockquote>
        <div className="mt-8 flex items-center justify-center gap-3">
          <span className="w-6 h-px bg-beige" />
          <span className="text-xs uppercase tracking-[0.2em] text-taupe font-medium">
            Adriana Martínez · Directora Creativa
          </span>
          <span className="w-6 h-px bg-beige" />
        </div>
      </div>
    </section>
  );
}

function ProcessSection() {
  return (
    <section className="py-20 sm:py-28 bg-ivory border-b border-beige">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-[10px] uppercase tracking-[0.28em] text-taupe font-medium block mb-3">
            El Proceso de Atelier
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-charcoal font-normal">
            Creación minuciosa{" "}
            <span className="italic text-burgundy">paso a paso.</span>
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

function IdealForSection() {
  return (
    <section className="py-16 sm:py-24 bg-beige-light/20 border-b border-beige">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="text-[10px] uppercase tracking-[0.28em] text-taupe font-medium block mb-3">
          Destinado a la Excelencia
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl text-charcoal font-normal">
          Concebido para quienes{" "}
          <span className="italic text-burgundy">
            exigen lo excepcional.
          </span>
        </h2>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="py-20 sm:py-28 bg-charcoal text-ivory">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-[10px] uppercase tracking-[0.28em] text-ivory/50 font-medium block mb-4">
            Atelier Florytela · Confección de Autor
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-ivory font-normal leading-tight mb-4">
            ¿Deseas una pieza
            <br />
            <span className="italic text-beige">de la Línea Deluxe?</span>
          </h2>
          <p className="text-sm sm:text-base text-ivory/65 font-light leading-relaxed mb-10 max-w-md mx-auto">
            Cada pieza Deluxe se confecciona bajo consulta individual. Escríbenos
            por WhatsApp para iniciar la conceptualización de tu mandil.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3.5 sm:gap-4 w-full max-w-md mx-auto">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-ivory text-charcoal hover:bg-beige hover:text-charcoal px-8 py-4 text-xs uppercase tracking-[0.16em] font-medium transition-all duration-300 shadow-md active:scale-[0.98] text-center"
            >
              <span>Consultar por WhatsApp</span>
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

export default function DeluxeLinePage() {
  return (
    <main>
      <HeroSection />
      <PillarsGrid />
      <ManifestoSection />
      <ProcessSection />
      <IdealForSection />
      <CTASection />
    </main>
  );
}
