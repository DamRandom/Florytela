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
    <div className="fixed bottom-4 sm:bottom-6 right-3.5 sm:right-6 z-50 flex items-end flex-col gap-2 pointer-events-auto pb-safe">
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="relative bg-ivory border border-beige text-charcoal shadow-xl rounded-xl p-3 sm:p-3.5 max-w-[280px] sm:max-w-xs text-xs"
          >
            <button
              onClick={(e) => {
                e.stopPropagation();
                setShowTooltip(false);
              }}
              className="absolute top-2 right-2 text-taupe hover:text-charcoal p-1 transition-colors"
              aria-label="Cerrar mensaje"
            >
              <X className="w-3.5 h-3.5" />
            </button>
            <div className="flex items-start gap-2.5 pr-4">
              <div className="w-2 h-2 rounded-full bg-emerald-600 mt-1 animate-pulse shrink-0" />
              <div>
                <p className="font-serif font-medium text-sm text-burgundy">
                  Florytela · Atelier
                </p>
                <p className="text-charcoal/75 mt-0.5 leading-relaxed text-[11px] sm:text-xs">
                  ¿Deseas personalizar tu mandil o cotizar? Conversa directamente con nosotros.
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
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.92 }}
        className="flex items-center gap-2.5 sm:gap-3 bg-burgundy hover:bg-burgundy-deep text-ivory px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-full shadow-xl border border-beige/40 group transition-all duration-300 active:scale-95"
        aria-label="Contactar por WhatsApp"
      >
        <span className="relative flex h-2.5 w-2.5 sm:h-3 sm:w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-beige opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 sm:h-3 sm:w-3 bg-beige"></span>
        </span>
        <span className="text-[11px] sm:text-xs uppercase tracking-wider font-medium inline-block">
          WhatsApp
        </span>
        <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-ivory/10 flex items-center justify-center group-hover:bg-ivory/20 transition-colors">
          <MessageCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-ivory" />
        </div>
      </motion.a>
    </div>
  );
}
