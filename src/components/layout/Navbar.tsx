"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { NAV_LINKS, SITE_CONFIG } from "@/lib/constants";
import { createWhatsAppLink } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const whatsappHref = createWhatsAppLink({ type: "general" });

  // Links de las tres líneas para destacarlos en el nav
  const lineaLinks = NAV_LINKS.filter((l) =>
    ["/linea/fast", "/linea/personalizacion", "/linea/deluxe"].includes(l.href)
  );
  const otherLinks = NAV_LINKS.filter(
    (l) =>
      !["/linea/fast", "/linea/personalizacion", "/linea/deluxe"].includes(
        l.href
      ) && l.href !== "/"
  );

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-40 transition-all duration-300 ease-out",
          scrolled || mobileMenuOpen
            ? "bg-ivory/95 backdrop-blur-md shadow-xs border-b border-beige-light py-3 sm:py-3.5"
            : "bg-transparent py-4 sm:py-6"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="group flex flex-col items-start focus:outline-none active:scale-98 transition-transform"
            >
              <span className="font-serif text-2xl sm:text-3xl font-medium tracking-tight text-burgundy transition-colors duration-300">
                Florytela
              </span>
              <span className="text-[9px] sm:text-[10px] tracking-[0.28em] uppercase text-taupe font-medium -mt-1 group-hover:text-burgundy/70 transition-colors duration-300">
                by Adriana Martínez
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-7 xl:gap-9">
              {/* Las tres líneas — destacadas */}
              <div className="flex items-center gap-1 border border-beige-light rounded-none bg-ivory/60 px-1 py-0.5">
                {lineaLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={cn(
                        "relative px-3 py-1.5 text-xs uppercase tracking-[0.14em] font-medium transition-all duration-200",
                        isActive
                          ? "bg-burgundy text-ivory"
                          : "text-charcoal/80 hover:text-burgundy hover:bg-beige-light/60"
                      )}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </div>

              {/* Links secundarios */}
              {otherLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "relative text-xs uppercase tracking-[0.16em] font-medium py-1 transition-colors duration-300",
                      isActive
                        ? "text-burgundy font-semibold"
                        : "text-charcoal/70 hover:text-burgundy"
                    )}
                  >
                    {link.label}
                    {isActive && (
                      <motion.div
                        layoutId="nav-underline"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-burgundy"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* CTA desktop */}
            <div className="hidden sm:flex items-center gap-3">
              <Link
                href="/catalogo"
                className="inline-flex items-center gap-2 bg-burgundy hover:bg-burgundy-deep text-ivory px-4 py-2.5 text-xs uppercase tracking-[0.12em] font-medium transition-all duration-300 shadow-xs"
              >
                <span>Ver catálogo</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Mobile Menu Toggle - Touch friendly min 44px */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 -mr-1.5 lg:hidden text-charcoal hover:text-burgundy focus:outline-none active:scale-90 transition-all rounded-md"
              aria-label={mobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer (Native App Feel) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed inset-0 top-[56px] z-30 bg-ivory/98 backdrop-blur-2xl border-t border-beige/60 lg:hidden flex flex-col justify-between p-5 sm:p-7 overflow-y-auto pb-safe"
          >
            <div className="flex flex-col gap-6 pt-1">
              {/* Las tres líneas */}
              <div>
                <span className="text-[10px] uppercase tracking-[0.24em] text-taupe font-medium block mb-2">
                  Colecciones & Líneas
                </span>
                <nav className="flex flex-col">
                  {lineaLinks.map((link, idx) => {
                    const isActive = pathname === link.href;
                    const labels: Record<string, string> = {
                      "/linea/fast": "Modelos listos · Entrega ágil",
                      "/linea/personalizacion": "A tu medida desde 1 pieza",
                      "/linea/deluxe": "Alta costura textil de autor",
                    };
                    return (
                      <motion.div
                        key={link.href}
                        initial={{ opacity: 0, x: -12 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.04 }}
                      >
                        <Link
                          href={link.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className={cn(
                            "flex items-center justify-between py-3.5 border-b border-beige/60 active:bg-beige-light/40 transition-all px-1.5 -mx-1.5 rounded-sm",
                            isActive ? "text-burgundy font-semibold" : "text-charcoal active:text-burgundy"
                          )}
                        >
                          <div>
                            <span className="font-serif text-xl sm:text-2xl block">{link.label}</span>
                            <span className="text-[11px] text-taupe font-light block">
                              {labels[link.href]}
                            </span>
                          </div>
                          <span className="text-xs uppercase tracking-wider text-burgundy font-medium">
                            {isActive ? "Activo" : "Ver →"}
                          </span>
                        </Link>
                      </motion.div>
                    );
                  })}
                </nav>
              </div>

              {/* Links secundarios */}
              <div>
                <span className="text-[10px] uppercase tracking-[0.24em] text-taupe font-medium block mb-2">
                  Navegación
                </span>
                <nav className="grid grid-cols-2 gap-2">
                  {otherLinks.map((link, idx) => (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.12 + idx * 0.03 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={cn(
                          "block p-3 border border-beige/70 bg-beige-light/20 text-xs text-charcoal active:bg-burgundy active:text-ivory uppercase tracking-wider font-medium transition-all text-center",
                          pathname === link.href && "border-burgundy text-burgundy font-semibold bg-ivory shadow-2xs"
                        )}
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  ))}
                </nav>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="flex flex-col gap-3 pt-6 border-t border-beige/60 mt-4">
              <Link
                href="/catalogo"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center bg-burgundy hover:bg-burgundy-deep text-ivory py-3.5 text-xs uppercase tracking-[0.14em] font-medium transition-all active:scale-[0.98] inline-flex items-center justify-center gap-2 shadow-xs"
              >
                <span>Ver catálogo completo</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center border border-beige hover:border-burgundy bg-ivory text-charcoal py-3 text-xs uppercase tracking-[0.14em] font-medium transition-all active:scale-[0.98]"
              >
                <span>WhatsApp Atelier</span>
              </a>

              <div className="flex justify-between items-center text-[10px] text-taupe pt-1 px-1">
                <span>{SITE_CONFIG.location}</span>
                <span>{SITE_CONFIG.instagramHandle}</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
