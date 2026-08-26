"use client";

import React from "react";
import Link from "next/link";
import { Phone } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import { createWhatsAppLink } from "@/lib/whatsapp";

function InstagramIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function TikTokIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.89 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.11V9.41a6.34 6.34 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.45a8.28 8.28 0 0 0 3.76.92v-2.68z" />
    </svg>
  );
}

export function Footer() {
  const whatsappHref = createWhatsAppLink({ type: "general" });

  return (
    <footer className="bg-ivory border-t border-beige/60 text-charcoal pt-14 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Fila Superior: Logo a la izquierda y Redes Sociales */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-beige/60">
          
          {/* Logo e Identidad alineados a la izquierda */}
          <div className="flex flex-col items-start text-left">
            <Link href="/" className="group flex flex-col items-start focus:outline-none">
              <span className="font-serif text-3xl sm:text-3.5xl font-medium tracking-tight text-burgundy transition-colors">
                Florytela
              </span>
              <span className="text-[10px] tracking-[0.28em] uppercase text-taupe font-medium -mt-1 group-hover:text-burgundy/75 transition-colors">
                by Adriana Martínez
              </span>
            </Link>
            <p className="mt-2 text-xs sm:text-sm text-charcoal/65 font-light">
              Mandiles de autor con elegancia, calidez y personalización · Lima, Perú
            </p>
          </div>

          {/* Redes Sociales con Iconos */}
          <div className="flex flex-wrap items-center gap-3">
            <a
              href={SITE_CONFIG.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3.5 py-2 border border-beige/80 hover:border-burgundy/60 bg-ivory text-charcoal/80 hover:text-burgundy transition-all duration-300 text-xs uppercase tracking-wider font-medium shadow-2xs"
              aria-label="Instagram de Florytela"
            >
              <InstagramIcon className="w-3.5 h-3.5 text-burgundy" />
              <span>Instagram</span>
            </a>

            <a
              href={SITE_CONFIG.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3.5 py-2 border border-beige/80 hover:border-burgundy/60 bg-ivory text-charcoal/80 hover:text-burgundy transition-all duration-300 text-xs uppercase tracking-wider font-medium shadow-2xs"
              aria-label="TikTok de Florytela"
            >
              <TikTokIcon className="w-3.5 h-3.5 text-burgundy" />
              <span>TikTok</span>
            </a>

            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3.5 py-2 border border-beige/80 hover:border-burgundy/60 bg-ivory text-charcoal/80 hover:text-burgundy transition-all duration-300 text-xs uppercase tracking-wider font-medium shadow-2xs"
              aria-label="WhatsApp de Florytela"
            >
              <Phone className="w-3.5 h-3.5 text-burgundy" />
              <span>WhatsApp</span>
            </a>
          </div>

        </div>

        {/* Fila Inferior: Derechos de autor bien centrados abajo */}
        <div className="pt-6 text-center text-xs text-taupe font-light">
          <p>
            © {new Date().getFullYear()} Florytela by Adriana Martínez. Todos los derechos reservados.
          </p>
        </div>

      </div>
    </footer>
  );
}
