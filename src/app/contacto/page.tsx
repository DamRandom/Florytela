import React from "react";
import type { Metadata } from "next";
import { MapPin, Clock, MessageSquare, ShieldCheck, Sparkles } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import { ContactForm } from "./ContactForm";
import { FaqAccordion } from "./FaqAccordion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { createWhatsAppLink } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Contacto & Pedidos por WhatsApp",
  description:
    "Comunícate directamente por WhatsApp con Florytela by Adriana Martínez. Asesoría para pedidos individuales, personalización y pedidos para negocios.",
};

export default function ContactoPage() {
  const directWhatsAppHref = createWhatsAppLink({
    type: "general",
    customNotes: "Hola Adriana 👋 Vengo de la web y me gustaría hacer una consulta.",
  });

  return (
    <div className="pt-24 sm:pt-32 pb-20 bg-ivory">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Editorial Compacto */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-burgundy" />
            <span className="text-[10px] uppercase tracking-[0.28em] text-taupe font-medium">
              Atelier Florytela · Lima, Perú
            </span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-charcoal font-normal">
            Hablemos de tu mandil
          </h1>
          <p className="mt-3 text-sm sm:text-base text-charcoal/70 font-light leading-relaxed">
            Atención directa y personalizada por WhatsApp con Adriana Martínez.
          </p>
        </div>

        {/* Sección Principal en 2 Columnas Compactas */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Columna Izquierda: Información Concisa del Atelier */}
          <div className="lg:col-span-5 flex flex-col gap-5">
            
            {/* Tarjeta WhatsApp Directo */}
            <div className="p-6 bg-beige-light/30 border border-beige shadow-xs">
              <div className="flex items-center gap-2 text-taupe text-[10px] uppercase tracking-[0.22em] font-semibold mb-2">
                <Sparkles className="w-3.5 h-3.5 text-burgundy" />
                <span>Canal de Atención Directa</span>
              </div>
              <h3 className="font-serif text-xl text-charcoal font-normal">
                WhatsApp con Adriana Martínez
              </h3>
              <p className="text-xs text-charcoal/70 mt-1.5 font-light leading-relaxed">
                Resuelve dudas de modelos, colores, bordados y cotizaciones sin intermediarios.
              </p>

              <div className="mt-5">
                <a
                  href={directWhatsAppHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-burgundy hover:bg-burgundy-deep text-ivory py-3 px-4 text-xs uppercase tracking-[0.14em] font-medium transition-all duration-300 shadow-xs"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Abrir chat de WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Datos del Taller */}
            <div className="bg-ivory border border-beige p-5 space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-burgundy shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-[10px] uppercase tracking-wider font-semibold text-charcoal">
                    Atelier & Cobertura
                  </h4>
                  <p className="text-xs text-charcoal/70 font-light mt-0.5">
                    {SITE_CONFIG.location} · Envíos a todo el Perú
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-3 border-t border-beige/60">
                <Clock className="w-4 h-4 text-burgundy shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-[10px] uppercase tracking-wider font-semibold text-charcoal">
                    Horario de Atención
                  </h4>
                  <p className="text-xs text-charcoal/70 font-light mt-0.5">
                    {SITE_CONFIG.workshopHours}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-3 border-t border-beige/60">
                <ShieldCheck className="w-4 h-4 text-burgundy shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-[10px] uppercase tracking-wider font-semibold text-charcoal">
                    Atención Garantizada
                  </h4>
                  <p className="text-xs text-charcoal/70 font-light mt-0.5">
                    Asesoría paso a paso desde la idea hasta la entrega.
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Columna Derecha: Formulario Compacto */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

        </div>

        {/* Sección FAQ */}
        <div id="faq" className="mt-20 pt-14 border-t border-beige">
          <SectionHeading
            eyebrow="Resolución de Dudas"
            title="Preguntas Frecuentes"
            subtitle="Información sobre envíos, materiales, tallas y personalización."
          />

          <div className="mt-10">
            <FaqAccordion />
          </div>
        </div>

      </div>
    </div>
  );
}
