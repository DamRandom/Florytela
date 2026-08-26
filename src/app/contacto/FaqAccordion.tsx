"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle } from "lucide-react";

interface FaqItem {
  q: string;
  a: string;
  category?: string;
}

const FAQS: FaqItem[] = [
  {
    q: "¿Cómo realizo mi pedido a través de WhatsApp?",
    a: "Es directo y sencillo: nos escribes indicando el modelo que te interesa (Fast, Personalización o Deluxe), tus colores preferidos, si deseas bordado de tu marca y la cantidad de piezas. Adriana Martínez te atenderá personalmente para coordinar cada detalle antes de confeccionar.",
    category: "Proceso de Pedido",
  },
  {
    q: "¿Hacen envíos a Lima Metropolitana y a todas las provincias del Perú?",
    a: "Sí, enviamos a todos los distritos de Lima Metropolitana y a nivel nacional a cualquier departamento del Perú mediante empresas de transporte confiables (Olva Courier, Shalom, agencias de encomiendas según tu localidad).",
    category: "Envíos y Despacho",
  },
  {
    q: "¿Puedo pedir desde 1 sola pieza o hay mínimos de compra?",
    a: "Puedes pedir desde 1 sola unidad en cualquiera de nuestras tres líneas. Si necesitas uniformar a tu equipo, restaurante o cafetería, disponemos de precios escalonados y condiciones especiales por volumen.",
    category: "Cantidades & Mayoristas",
  },
  {
    q: "¿Cómo se adaptan las tallas a diferentes complexiones?",
    a: "Nuestros mandiles están diseñados con patronaje ergonómico universal. Sus sistemas de tirantes cruzados en la espalda (en X) o al cuello permiten regular tanto la altura como el contorno de cintura con absoluta comodidad y ajuste perfecto.",
    category: "Tallas & Ajuste",
  },
  {
    q: "¿Qué tipo de telas y materiales utilizan?",
    a: "Seleccionamos textiles nobles de alto rendimiento: gabardinas pesadas 100% algodón peinado, linos lavados a la piedra, telas Ripstop antidesgarro, aplicaciones en cuero vacuno natural y herrajes metálicos macizos antioxidables.",
    category: "Textiles & Calidad",
  },
  {
    q: "¿Cómo solicito el bordado de mi logotipo o nombre?",
    a: "Solo debes enviarnos el archivo o imagen de tu logotipo por WhatsApp. Realizamos la digitalización y el bordado computarizado de alta definición en la pechera, bolsillo o zona que prefieras de tu mandil.",
    category: "Bordados & Personalización",
  },
];

export function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto divide-y divide-beige border border-beige bg-ivory shadow-xs">
      {FAQS.map((faq, index) => {
        const isOpen = openIndex === index;

        return (
          <div
            key={index}
            className={`transition-colors duration-300 ${
              isOpen ? "bg-beige-light/30" : "hover:bg-beige-light/15"
            }`}
          >
            <button
              type="button"
              onClick={() => toggleFaq(index)}
              className="w-full py-5 px-6 sm:px-8 flex items-center justify-between text-left gap-4 cursor-pointer focus:outline-none"
              aria-expanded={isOpen}
            >
              <div className="flex items-start gap-3.5">
                <span className="font-serif text-sm text-taupe/70 font-normal mt-0.5 select-none">
                  0{index + 1}
                </span>
                <div>
                  {faq.category && (
                    <span className="block text-[9px] uppercase tracking-[0.2em] text-taupe font-medium mb-1">
                      {faq.category}
                    </span>
                  )}
                  <h4 className="font-serif text-base sm:text-lg text-charcoal font-medium leading-snug">
                    {faq.q}
                  </h4>
                </div>
              </div>

              <div
                className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 border transition-colors ${
                  isOpen
                    ? "bg-burgundy text-ivory border-burgundy"
                    : "border-beige text-charcoal/70 bg-ivory"
                }`}
              >
                {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
              </div>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="pb-6 px-6 sm:px-8 pl-12 sm:pl-14 text-xs sm:text-sm text-charcoal/75 font-light leading-relaxed border-t border-beige/40 pt-3">
                    <p>{faq.a}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
