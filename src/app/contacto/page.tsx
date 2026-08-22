import React from "react";
import type { Metadata } from "next";
import { Mail, MapPin, Clock, HelpCircle, Sparkles } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import { ContactForm } from "./ContactForm";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

export const metadata: Metadata = {
  title: "Contacto & Pedidos",
  description:
    "Comunícate con Florytela by Adriana Martínez. Asesoría para pedidos individuales, personalización y cotizaciones por mayor.",
};

const FAQS = [
  {
    q: "¿Hacen envíos a todo Lima y a provincias?",
    a: "Sí, realizamos envíos a todos los distritos de Lima Metropolitana y a nivel nacional a todas las provincias del Perú mediante agencias y servicios de mensajería seguros (Olva Courier / Shalom / agencias de transporte).",
  },
  {
    q: "¿Cómo funciona el proceso de personalización?",
    a: "Eliges el modelo, seleccionas tus colores y nos indicas cómo deseas los bolsillos o si requieres bordado con tu nombre o logotipo. Te asesoramos directamente por WhatsApp antes de comenzar la confección.",
  },
  {
    q: "¿Tienen precios especiales para negocios o pedidos por mayor?",
    a: "Sí, contamos con precios escalonados por volumen a partir de 5 unidades para restaurantes, cafeterías, salones, barberías y proyectos independientes.",
  },
  {
    q: "¿Cómo elijo la talla adecuada?",
    a: "Nuestros mandiles cuentan con ajuste universal adaptable: los tirantes regulables permiten calibrar la altura y ancho a cualquier complexión física con comodidad.",
  },
  {
    q: "¿Cuáles son las opciones de materiales?",
    a: "Trabajamos principalmente con telas Ripstop y mezclas con base de algodón de alto gramaje, seleccionadas por su resistencia, caída y fácil mantenimiento.",
  },
];

export default function ContactoPage() {
  return (
    <div className="pt-28 sm:pt-36 pb-24 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-burgundy font-medium">
            Florytela by Adriana Martínez
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-charcoal font-normal mt-3">
            Hablemos de tu próximo mandil
          </h1>
          <p className="mt-4 text-base sm:text-lg text-charcoal/75 font-light leading-relaxed">
            Ya sea para una pieza única con tu estilo o para uniformar a todo tu equipo.
          </p>
        </div>

        {/* Main 2-Column Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct Info & WhatsApp Card */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            {/* Direct WhatsApp Callout Card */}
            <div className="p-8 bg-beige-light/40 border border-beige shadow-xs">
              <div className="flex items-center gap-2 text-taupe text-xs uppercase tracking-widest font-semibold mb-3">
                <Sparkles className="w-4 h-4" />
                <span>Atención Rápida</span>
              </div>
              <h3 className="font-serif text-2xl text-charcoal font-medium">
                Escríbenos directamente por WhatsApp
              </h3>
              <p className="text-xs sm:text-sm text-charcoal/70 mt-2 font-light leading-relaxed">
                Conversa directamente con Adriana Martínez para resolver dudas de modelos, colores, tiempos de entrega o pedidos por mayor.
              </p>

              <div className="mt-6">
                <WhatsAppButton
                  variant="primary"
                  size="md"
                  className="w-full"
                >
                  Escribir por WhatsApp
                </WhatsAppButton>
              </div>
            </div>

            {/* Info List */}
            <div className="bg-ivory border border-beige p-7 space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-9 h-9 rounded-none bg-burgundy/5 flex items-center justify-center text-burgundy flex-shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-semibold text-charcoal">
                    Ubicación
                  </h4>
                  <p className="text-xs text-charcoal/70 mt-1 font-light">
                    {SITE_CONFIG.location}
                  </p>
                  <p className="text-[11px] text-taupe mt-0.5">
                    * Citas y asesoría previa coordinación
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 pt-4 border-t border-beige/60">
                <div className="w-9 h-9 rounded-none bg-burgundy/5 flex items-center justify-center text-burgundy flex-shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-semibold text-charcoal">
                    Horario de Atención
                  </h4>
                  <p className="text-xs text-charcoal/70 mt-1 font-light">
                    {SITE_CONFIG.workshopHours}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 pt-4 border-t border-beige/60">
                <div className="w-9 h-9 rounded-none bg-burgundy/5 flex items-center justify-center text-burgundy flex-shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-semibold text-charcoal">
                    Correo Electrónico
                  </h4>
                  <a
                    href={`mailto:${SITE_CONFIG.email}`}
                    className="text-xs text-burgundy hover:underline font-medium mt-1 block"
                  >
                    {SITE_CONFIG.email}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>

        {/* FAQ Section */}
        <div id="faq" className="mt-28 pt-20 border-t border-beige">
          <SectionHeading
            eyebrow="Preguntas Frecuentes"
            title="Dudas comunes"
            subtitle="Información sobre envíos, personalización y pedidos de mandiles."
          />

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            {FAQS.map((faq, idx) => (
              <div
                key={idx}
                className="bg-beige-light/30 border border-beige p-6 flex flex-col justify-start"
              >
                <div className="flex items-start gap-2.5">
                  <HelpCircle className="w-4 h-4 text-taupe flex-shrink-0 mt-0.5" />
                  <h4 className="font-serif text-lg text-charcoal font-medium">
                    {faq.q}
                  </h4>
                </div>
                <p className="mt-2.5 text-xs sm:text-sm text-charcoal/70 pl-6 font-light leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
