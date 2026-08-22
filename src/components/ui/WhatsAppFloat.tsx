"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X } from "lucide-react";
import { createWhatsAppLink } from "@/lib/whatsapp";

export function WhatsAppFloat() {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    // Show after scrolling or 3 seconds
    const timer = setTimeout(() => {
      setIsVisible(true);
      setShowTooltip(true);
    }, 2500);

    const hideTooltipTimer = setTimeout(() => {
      setShowTooltip(false);
    }, 9000);

    return () => {
      clearTimeout(timer);
      clearTimeout(hideTooltipTimer);
    };
  }, []);

  const whatsappHref = createWhatsAppLink({ type: "general" });

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-end flex-col gap-2 pointer-events-auto">
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="relative bg-ivory border border-beige text-charcoal shadow-xl rounded-lg p-3.5 max-w-xs text-xs"
          >
            <button
              onClick={(e) => {
                e.stopPropagation();
                setShowTooltip(false);
              }}
              className="absolute top-2 right-2 text-taupe hover:text-charcoal transition-colors"
              aria-label="Cerrar mensaje"
            >
              <X className="w-3.5 h-3.5" />
            </button>
            <div className="flex items-start gap-2.5 pr-4">
              <div className="w-2 h-2 rounded-full bg-emerald-600 mt-1 animate-pulse" />
              <div>
                <p className="font-serif font-medium text-sm text-burgundy">
                  Florytela · Atención directa
                </p>
                <p className="text-charcoal/70 mt-0.5 leading-relaxed">
                  ¿Deseas personalizar tu mandil o cotizar para tu equipo? Conversa directamente con nosotros.
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.a
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.94 }}
        className="flex items-center gap-3 bg-burgundy hover:bg-burgundy-deep text-ivory px-4 py-3 rounded-full shadow-lg border border-beige/40 group transition-all duration-300"
        aria-label="Contactar por WhatsApp"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-beige opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-beige"></span>
        </span>
        <span className="text-xs uppercase tracking-widest font-medium hidden sm:inline-block">
          Asesoría Directa
        </span>
        <div className="w-7 h-7 rounded-full bg-ivory/10 flex items-center justify-center group-hover:bg-ivory/20 transition-colors">
          <MessageCircle className="w-4 h-4 text-ivory" />
        </div>
      </motion.a>
    </div>
  );
}
