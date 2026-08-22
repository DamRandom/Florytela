"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, Mail, Phone, MapPin, Check } from "lucide-react";
import { SITE_CONFIG, NAV_LINKS, PRODUCT_LINES } from "@/lib/constants";
import { createWhatsAppLink } from "@/lib/whatsapp";

function InstagramIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export function Footer() {
  const [subscribed, setSubscribed] = useState(false);
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  const whatsappHref = createWhatsAppLink({ type: "general" });

  const secondaryLinks = NAV_LINKS.filter(
    (l) => !["/linea/fast", "/linea/personalizacion", "/linea/deluxe"].includes(l.href) && l.href !== "/"
  );

  return (
    <footer className="bg-beige-light/30 border-t border-beige text-charcoal pt-16 sm:pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-14 border-b border-beige">

          {/* Marca */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <Link href="/" className="group flex flex-col items-start">
              <span className="font-serif text-3xl font-medium tracking-tight text-burgundy">
                Florytela
              </span>
              <span className="text-[10px] tracking-[0.28em] uppercase text-taupe font-medium -mt-1 group-hover:text-burgundy/70 transition-colors">
                by Adriana Martínez
              </span>
            </Link>
            <p className="mt-4 text-sm text-charcoal/70 leading-relaxed font-light max-w-sm">
              Mandiles de calidad con diseño propio. Elegantes, funcionales y accesibles, con personalización real desde una sola pieza.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href={SITE_CONFIG.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-beige flex items-center justify-center text-charcoal hover:text-burgundy hover:border-burgundy hover:bg-burgundy/5 transition-all duration-300"
                aria-label="Instagram de Florytela"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className="w-9 h-9 rounded-full border border-beige flex items-center justify-center text-charcoal hover:text-burgundy hover:border-burgundy hover:bg-burgundy/5 transition-all duration-300"
                aria-label="Correo de Florytela"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-beige flex items-center justify-center text-charcoal hover:text-burgundy hover:border-burgundy hover:bg-burgundy/5 transition-all duration-300"
                aria-label="WhatsApp de Florytela"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Las tres líneas */}
          <div className="lg:col-span-3 flex flex-col">
            <span className="text-xs uppercase tracking-[0.2em] text-burgundy font-semibold mb-4">
              Nuestras líneas
            </span>
            <ul className="flex flex-col gap-3">
              {PRODUCT_LINES.map((line) => (
                <li key={line.id}>
                  <Link
                    href={line.href}
                    className="group flex flex-col gap-0.5"
                  >
                    <span className="text-xs text-charcoal/80 hover:text-burgundy uppercase tracking-wider font-medium transition-colors">
                      {line.number} — {line.name}
                    </span>
                    <span className="text-[11px] text-taupe group-hover:text-charcoal/60 transition-colors font-light">
                      {line.tagline}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links y contacto */}
          <div className="lg:col-span-2 flex flex-col">
            <span className="text-xs uppercase tracking-[0.2em] text-burgundy font-semibold mb-4">
              Navegación
            </span>
            <ul className="flex flex-col gap-2.5">
              {secondaryLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-xs text-charcoal/70 hover:text-burgundy uppercase tracking-wider font-medium transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/contacto?asunto=mayoreo"
                  className="text-xs text-charcoal/70 hover:text-burgundy uppercase tracking-wider font-medium transition-colors"
                >
                  Pedidos por mayor
                </Link>
              </li>
            </ul>

            <div className="mt-6 flex flex-col gap-1.5 text-xs text-taupe">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-burgundy flex-shrink-0" />
                <span>{SITE_CONFIG.location}</span>
              </div>
              <p className="pl-5 text-[11px] text-charcoal/60">{SITE_CONFIG.workshopHours}</p>
            </div>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-3 flex flex-col">
            <span className="text-xs uppercase tracking-[0.2em] text-burgundy font-semibold mb-2">
              Novedades
            </span>
            <p className="text-xs text-charcoal/70 leading-relaxed font-light mb-4">
              Recibe novedades de nuevos modelos, colores y lanzamientos de Florytela.
            </p>

            {subscribed ? (
              <div className="bg-ivory border border-beige p-3 text-xs text-charcoal flex items-center gap-2">
                <Check className="w-4 h-4 text-burgundy flex-shrink-0" />
                <span>¡Gracias! Te avisamos cuando haya novedades.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col gap-2">
                <div className="relative flex">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="tu@correo.com"
                    className="w-full bg-ivory border border-beige px-3.5 py-2.5 text-xs text-charcoal placeholder:text-taupe focus:outline-none focus:border-burgundy transition-colors"
                  />
                  <button
                    type="submit"
                    className="bg-burgundy text-ivory px-3.5 hover:bg-burgundy-deep transition-colors flex items-center justify-center cursor-pointer"
                    aria-label="Suscribirse"
                  >
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
                <span className="text-[10px] text-taupe">
                  Sin spam. Cancelar cuando quieras.
                </span>
              </form>
            )}
          </div>

        </div>

        {/* Barra inferior */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-taupe font-light">
          <p>© {new Date().getFullYear()} Florytela by Adriana Martínez. Todos los derechos reservados.</p>
          <div className="flex items-center gap-6">
            <Link href="/nosotros" className="hover:text-charcoal transition-colors">
              Nuestra historia
            </Link>
            <Link href="/contacto" className="hover:text-charcoal transition-colors">
              Contacto
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
