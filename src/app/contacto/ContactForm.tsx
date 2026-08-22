"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, MessageSquare } from "lucide-react";
import { CTAButton } from "@/components/ui/CTAButton";
import { createWhatsAppLink } from "@/lib/whatsapp";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    inquiryType: "personalizacion",
    brandName: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleWhatsAppDirect = () => {
    const link = createWhatsAppLink({
      type: formData.inquiryType === "b2b" ? "b2b" : formData.inquiryType === "personalizacion" ? "custom" : "general",
      brandName: formData.brandName || undefined,
      customNotes: formData.message || undefined,
    });
    window.open(link, "_blank");
  };

  if (submitted) {
    return (
      <div className="p-8 sm:p-10 bg-ivory border border-beige flex flex-col items-center text-center shadow-xs">
        <div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center mb-4">
          <CheckCircle2 className="w-6 h-6" />
        </div>
        <h3 className="font-serif text-2xl sm:text-3xl text-charcoal font-medium">
          ¡Mensaje recibido con éxito!
        </h3>
        <p className="mt-2 text-xs sm:text-sm text-charcoal/70 max-w-md font-light leading-relaxed">
          Gracias por escribirnos. Adriana Martínez o el equipo de Florytela te responderá vía WhatsApp o correo a la brevedad.
        </p>

        <div className="mt-8 pt-6 border-t border-beige w-full max-w-xs flex flex-col gap-3">
          <button
            type="button"
            onClick={() => setSubmitted(false)}
            className="text-xs uppercase tracking-wider text-burgundy underline hover:text-burgundy-deep cursor-pointer"
          >
            Enviar otro mensaje
          </button>
          <CTAButton
            onClick={handleWhatsAppDirect}
            variant="primary"
            size="sm"
            icon={<MessageSquare className="w-3.5 h-3.5" />}
          >
            Continuar por WhatsApp
          </CTAButton>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="p-8 sm:p-10 bg-ivory border border-beige flex flex-col gap-6 shadow-xs"
    >
      <div className="border-b border-beige pb-4">
        <h3 className="font-serif text-2xl text-charcoal font-medium">
          Envíanos tu consulta
        </h3>
        <p className="text-xs text-taupe mt-1">
          Te asesoramos personalmente sobre modelos, colores y pedidos.
        </p>
      </div>

      {/* Name and Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-[11px] uppercase tracking-wider text-charcoal font-medium mb-1.5">
            Nombre completo *
          </label>
          <input
            type="text"
            required
            placeholder="Tu nombre"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full bg-beige-light/40 border border-beige px-3.5 py-2.5 text-xs text-charcoal placeholder:text-taupe focus:outline-none focus:border-burgundy transition-colors"
          />
        </div>

        <div>
          <label className="block text-[11px] uppercase tracking-wider text-charcoal font-medium mb-1.5">
            Correo electrónico *
          </label>
          <input
            type="email"
            required
            placeholder="tu@correo.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full bg-beige-light/40 border border-beige px-3.5 py-2.5 text-xs text-charcoal placeholder:text-taupe focus:outline-none focus:border-burgundy transition-colors"
          />
        </div>
      </div>

      {/* Phone and Inquiry Type */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-[11px] uppercase tracking-wider text-charcoal font-medium mb-1.5">
            Teléfono / WhatsApp *
          </label>
          <input
            type="tel"
            required
            placeholder="+51 987 654 321"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="w-full bg-beige-light/40 border border-beige px-3.5 py-2.5 text-xs text-charcoal placeholder:text-taupe focus:outline-none focus:border-burgundy transition-colors"
          />
        </div>

        <div>
          <label className="block text-[11px] uppercase tracking-wider text-charcoal font-medium mb-1.5">
            Línea o Tipo de Consulta *
          </label>
          <select
            value={formData.inquiryType}
            onChange={(e) =>
              setFormData({ ...formData, inquiryType: e.target.value })
            }
            className="w-full bg-beige-light/40 border border-beige px-3.5 py-2.5 text-xs text-charcoal focus:outline-none focus:border-burgundy transition-colors cursor-pointer"
          >
            <option value="personalizacion">Línea Personalización (A medida)</option>
            <option value="fast">Línea Fast (Modelos listos)</option>
            <option value="deluxe">Línea Deluxe (Alta gama)</option>
            <option value="b2b">Pedidos por mayor para negocios</option>
            <option value="otro">Otra consulta</option>
          </select>
        </div>
      </div>

      {/* Brand Name (Optional) */}
      {(formData.inquiryType === "b2b" || formData.inquiryType === "personalizacion") && (
        <div>
          <label className="block text-[11px] uppercase tracking-wider text-charcoal font-medium mb-1.5">
            Nombre de tu negocio o proyecto (Opcional)
          </label>
          <input
            type="text"
            placeholder="Ej. Café Central / Estudio Botánico"
            value={formData.brandName}
            onChange={(e) =>
              setFormData({ ...formData, brandName: e.target.value })
            }
            className="w-full bg-beige-light/40 border border-beige px-3.5 py-2.5 text-xs text-charcoal placeholder:text-taupe focus:outline-none focus:border-burgundy transition-colors"
          />
        </div>
      )}

      {/* Message */}
      <div>
        <label className="block text-[11px] uppercase tracking-wider text-charcoal font-medium mb-1.5">
          Mensaje o detalles de tu pedido *
        </label>
        <textarea
          required
          rows={4}
          placeholder="Cuéntanos sobre el modelo, colores, cantidad o configuración que te interesa..."
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full bg-beige-light/40 border border-beige p-3.5 text-xs text-charcoal placeholder:text-taupe focus:outline-none focus:border-burgundy transition-colors resize-y"
        />
      </div>

      {/* Action buttons */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pt-2">
        <CTAButton
          type="submit"
          variant="primary"
          size="md"
          icon={<Send className="w-3.5 h-3.5" />}
        >
          Enviar Consulta
        </CTAButton>

        <button
          type="button"
          onClick={handleWhatsAppDirect}
          className="text-xs uppercase tracking-wider text-burgundy hover:text-burgundy-deep font-medium inline-flex items-center justify-center gap-1.5 py-2 border-b border-burgundy/30 hover:border-burgundy cursor-pointer"
        >
          <MessageSquare className="w-3.5 h-3.5" />
          <span>O escribir directamente por WhatsApp</span>
        </button>
      </div>
    </form>
  );
}
