"use client";

import React from "react";
import Link from "next/link";
import { Phone } from "lucide-react";
import { SITE_CONFIG, NAV_LINKS, PRODUCT_LINES } from "@/lib/constants";
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
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.89 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.11V9.41a6.34 6.34 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.45a8.28 8.28 0 0 0 3.76.92v-2.68z" />
    </svg>
  );
}

export function Footer() {
  const whatsappHref = createWhatsAppLink({ type: "general" });

  return (
    <footer className="bg-ivory border-t border-beige/70 text-charcoal">

      {/* Cuerpo principal */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 pb-8">

        {/* Grid principal: 1 col en móvil → 2 col en tablet → 4 col en desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-y-8 sm:gap-y-10 gap-x-8 lg:gap-x-12">

          {/* Col 1 — Marca & Redes */}
          <div className="sm:col-span-2 lg:col-span-4 flex flex-col items-start">
            <Link href="/" className="group flex flex-col items-start focus:outline-none">
              <span className="font-serif text-3xl sm:text-3.5xl font-medium tracking-tight text-burgundy transition-colors">
                Florytela
              </span>
              <span className="text-[10px] tracking-[0.28em] uppercase text-taupe font-medium -mt-0.5 group-hover:text-burgundy/75 transition-colors">
                by Adriana Martínez
              </span>
            </Link>

            <p className="mt-3 text-xs text-charcoal/60 font-light leading-relaxed max-w-xs">
              Mandiles de autor con elegancia, calidez y personalización. Confeccionados en Lima, Perú.
            </p>

            {/* Redes sociales — iconos cuadrados elegantes */}
            <div className="mt-5 flex items-center gap-2">
              <a
                href={SITE_CONFIG.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 border border-beige hover:border-burgundy/60 hover:text-burgundy text-charcoal/60 flex items-center justify-center transition-all duration-300 active:scale-95"
                aria-label="Instagram de Florytela"
              >
                <InstagramIcon className="w-3.5 h-3.5" />
              </a>
              <a
                href={SITE_CONFIG.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 border border-beige hover:border-burgundy/60 hover:text-burgundy text-charcoal/60 flex items-center justify-center transition-all duration-300 active:scale-95"
                aria-label="TikTok de Florytela"
              >
                <TikTokIcon className="w-3.5 h-3.5" />
              </a>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 border border-beige hover:border-burgundy/60 hover:text-burgundy text-charcoal/60 flex items-center justify-center transition-all duration-300 active:scale-95"
                aria-label="WhatsApp de Florytela"
              >
                <Phone className="w-3.5 h-3.5" />
              </a>
              <span className="ml-1 text-[11px] text-taupe/80 font-light tracking-wide">
                {SITE_CONFIG.instagramHandle}
              </span>
            </div>
          </div>

          {/* Divisor visual en móvil entre marca y columnas de links */}
          <div className="sm:hidden col-span-1 h-px bg-beige/60" />

          {/* Col 2 — Nuestras Líneas */}
          <div className="lg:col-span-3">
            <h4 className="text-[10px] uppercase tracking-[0.26em] font-semibold text-burgundy mb-4">
              Nuestras líneas
            </h4>
            <ul className="space-y-2.5">
              {PRODUCT_LINES.map((line) => (
                <li key={line.id}>
                  <Link
                    href={line.href}
                    className="group flex items-center gap-2 text-xs text-charcoal/65 hover:text-burgundy transition-colors py-0.5"
                  >
                    <span className="w-3 h-px bg-beige/80 group-hover:bg-burgundy/50 transition-colors shrink-0" />
                    <span className="font-light">{line.name}</span>
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/catalogo"
                  className="group flex items-center gap-2 text-xs text-charcoal/65 hover:text-burgundy transition-colors py-0.5"
                >
                  <span className="w-3 h-px bg-beige/80 group-hover:bg-burgundy/50 transition-colors shrink-0" />
                  <span className="font-light">Catálogo completo</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3 — Atelier */}
          <div className="lg:col-span-2">
            <h4 className="text-[10px] uppercase tracking-[0.26em] font-semibold text-burgundy mb-4">
              Atelier
            </h4>
            <ul className="space-y-2.5">
              {NAV_LINKS.filter((l) => ["/", "/nosotros", "/contacto"].includes(l.href)).map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group flex items-center gap-2 text-xs text-charcoal/65 hover:text-burgundy transition-colors py-0.5"
                  >
                    <span className="w-3 h-px bg-beige/80 group-hover:bg-burgundy/50 transition-colors shrink-0" />
                    <span className="font-light">{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Contacto directo */}
          <div className="sm:col-span-2 lg:col-span-3">
            <h4 className="text-[10px] uppercase tracking-[0.26em] font-semibold text-burgundy mb-4">
              Contacto directo
            </h4>
            <p className="text-xs text-charcoal/60 font-light leading-relaxed mb-4 max-w-xs">
              Pedidos, dudas y personalizaciones únicamente por WhatsApp.
            </p>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-burgundy hover:bg-burgundy-deep text-ivory text-[11px] uppercase tracking-[0.14em] font-medium px-4 py-2.5 transition-all duration-300 shadow-xs active:scale-[0.97]"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Escribir por WhatsApp</span>
            </a>
            <p className="mt-3 text-[10px] text-taupe/65 font-light">
              {SITE_CONFIG.location} · {SITE_CONFIG.workshopHours}
            </p>
          </div>

        </div>

        {/* Barra inferior */}
        <div className="mt-10 sm:mt-12 pt-5 border-t border-beige/60 flex flex-col-reverse sm:flex-row items-center justify-between gap-2">
          <p className="text-[10px] sm:text-xs text-taupe/65 font-light text-center sm:text-left">
            © {new Date().getFullYear()} Florytela by Adriana Martínez. Todos los derechos reservados.
          </p>
          <p className="text-[10px] text-taupe/45 font-light tracking-widest uppercase">
            Lima, Perú
          </p>
        </div>

      </div>
    </footer>
  );
}
