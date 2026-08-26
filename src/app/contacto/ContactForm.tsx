"use client";

import React, { useState } from "react";
import { MessageSquare, CheckCircle2, ArrowRight } from "lucide-react";
import { createWhatsAppLink } from "@/lib/whatsapp";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    inquiryType: "personalizacion",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const buildWhatsAppMessage = () => {
    let text = `Hola Adriana 👋 Mi nombre es *${formData.name || "un cliente"}*.\n`;

    const typeLabels: Record<string, string> = {
      personalizacion: "Línea Personalización (A medida)",
      fast: "Línea Fast (Entrega ágil)",
      deluxe: "Línea Deluxe (Alta gama de autor)",
      b2b: "Cotización para equipo / negocio",
      otro: "Consulta general",
    };

    text += `Me interesa: *${typeLabels[formData.inquiryType] || formData.inquiryType}*.\n`;

    if (formData.message) {
      text += `Detalles:\n"${formData.message}"\n`;
    }

    text += `\n¿Podemos coordinar los detalles por aquí?`;
    return text;
  };

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const link = createWhatsAppLink({
      type: "custom",
      customNotes: buildWhatsAppMessage(),
    });
    window.open(link, "_blank");
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="p-6 sm:p-7 bg-ivory border border-beige flex flex-col items-center text-center shadow-xs">
        <div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center mb-3">
          <CheckCircle2 className="w-5 h-5" />
        </div>
        <h3 className="font-serif text-xl sm:text-2xl text-charcoal font-medium">
          ¡Abriendo chat de WhatsApp!
        </h3>
        <p className="mt-1.5 text-xs text-charcoal/70 max-w-sm font-light leading-relaxed">
          Tu mensaje fue estructurado y enviado a WhatsApp. Adriana te responderá directamente.
        </p>

        <div className="mt-6 pt-4 border-t border-beige w-full max-w-xs flex flex-col gap-2.5">
          <button
            type="button"
            onClick={() => setSubmitted(false)}
            className="text-[11px] uppercase tracking-wider text-burgundy hover:underline cursor-pointer"
          >
            Modificar datos o enviar otro mensaje
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleWhatsAppSubmit}
      className="p-6 sm:p-7 bg-ivory border border-beige flex flex-col gap-4 shadow-xs"
    >
      <div className="border-b border-beige pb-3">
        <h3 className="font-serif text-xl sm:text-2xl text-charcoal font-normal">
          Escríbenos tu consulta
        </h3>
        <p className="text-[11px] text-taupe mt-0.5 font-light">
          Te redirige directamente a WhatsApp con tu mensaje listo.
        </p>
      </div>

      {/* Nombre y Teléfono en una sola fila */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div>
          <label className="block text-[10px] uppercase tracking-wider text-charcoal font-medium mb-1">
            Tu nombre *
          </label>
          <input
            type="text"
            required
            placeholder="Ej. Mateo Paredes"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full bg-beige-light/30 border border-beige px-3 py-2.5 sm:py-2 text-sm sm:text-xs text-charcoal placeholder:text-taupe focus:outline-none focus:border-burgundy transition-colors"
          />
        </div>

        <div>
          <label className="block text-[10px] uppercase tracking-wider text-charcoal font-medium mb-1">
            WhatsApp / Teléfono *
          </label>
          <input
            type="tel"
            required
            placeholder="+51 987 654 321"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="w-full bg-beige-light/30 border border-beige px-3 py-2.5 sm:py-2 text-sm sm:text-xs text-charcoal placeholder:text-taupe focus:outline-none focus:border-burgundy transition-colors"
          />
        </div>
      </div>

      {/* Línea de Interés */}
      <div>
        <label className="block text-[10px] uppercase tracking-wider text-charcoal font-medium mb-1">
          Línea de Interés *
        </label>
        <select
          value={formData.inquiryType}
          onChange={(e) =>
            setFormData({ ...formData, inquiryType: e.target.value })
          }
          className="w-full bg-beige-light/30 border border-beige px-3 py-2.5 sm:py-2 text-sm sm:text-xs text-charcoal focus:outline-none focus:border-burgundy transition-colors cursor-pointer"
        >
          <option value="personalizacion">Línea Personalización (A medida)</option>
          <option value="fast">Línea Fast (Entrega ágil)</option>
          <option value="deluxe">Línea Deluxe (Alta gama de autor)</option>
          <option value="b2b">Pedidos por mayor para equipos / marcas</option>
          <option value="otro">Consulta general</option>
        </select>
      </div>

      {/* Mensaje */}
      <div>
        <label className="block text-[10px] uppercase tracking-wider text-charcoal font-medium mb-1">
          Detalles o requerimientos (opcional)
        </label>
        <textarea
          rows={3}
          placeholder="Colores, cantidad, bordado de logo o modelo que te interesa..."
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full bg-beige-light/30 border border-beige p-3 text-sm sm:text-xs text-charcoal placeholder:text-taupe focus:outline-none focus:border-burgundy transition-colors resize-y"
        />
      </div>

      {/* Botón */}
      <div className="pt-1">
        <button
          type="submit"
          className="w-full inline-flex items-center justify-center gap-2 bg-burgundy hover:bg-burgundy-deep text-ivory py-3.5 sm:py-3 px-5 text-xs uppercase tracking-[0.14em] font-medium transition-all duration-300 shadow-xs cursor-pointer active:scale-[0.98]"
        >
          <MessageSquare className="w-3.5 h-3.5" />
          <span>Enviar consulta por WhatsApp</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </form>
  );
}
