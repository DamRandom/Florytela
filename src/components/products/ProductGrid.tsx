"use client";

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Product } from "@/lib/products";
import { ProductCard } from "./ProductCard";
import { CATEGORIES } from "@/lib/constants";
import { Search, SlidersHorizontal } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProductGridProps {
  products: Product[];
  showFilters?: boolean;
  showSearch?: boolean;
  defaultCategory?: string;
}

type SortOption = "featured" | "name-asc" | "name-desc";

export function ProductGrid({
  products,
  showFilters = true,
  showSearch = false,
  defaultCategory = "all",
}: ProductGridProps) {
  const [activeCategory, setActiveCategory] = useState<string>(defaultCategory);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState<SortOption>("featured");

  const filteredProducts = useMemo(() => {
    return products
      .filter((product) => {
        const matchesCategory =
          activeCategory === "all" || product.category === activeCategory;
        const matchesSearch =
          !searchQuery ||
          product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.materials.some((m) =>
            m.toLowerCase().includes(searchQuery.toLowerCase())
          );
        return matchesCategory && matchesSearch;
      })
      .sort((a, b) => {
        if (sortBy === "name-asc") return a.name.localeCompare(b.name);
        if (sortBy === "name-desc") return b.name.localeCompare(a.name);
        if (a.isFeatured && !b.isFeatured) return -1;
        if (!a.isFeatured && b.isFeatured) return 1;
        return 0;
      });
  }, [products, activeCategory, searchQuery, sortBy]);

  return (
    <div className="w-full flex flex-col gap-4 sm:gap-8">

      {/* ── BARRA SUPERIOR: Buscador + Ordenar en la misma fila (móvil) ── */}
      {(showFilters || showSearch) && (
        <div className="flex flex-col gap-2.5 sm:gap-4">

          {/* Fila 1: Buscador + Selector de orden (siempre visibles juntos) */}
          <div className="flex items-center gap-2">
            {showSearch && (
              <div className="relative flex-1">
                <Search className="w-3.5 h-3.5 text-taupe absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Buscar modelo, textil..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-ivory border border-beige pl-8 pr-3 py-2.5 text-xs text-charcoal placeholder:text-taupe/70 focus:outline-none focus:border-burgundy/70"
                />
              </div>
            )}
            <div className="flex items-center gap-1 shrink-0">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as SortOption)}
                className="bg-ivory border border-beige px-2 py-2.5 text-[11px] text-charcoal/80 focus:outline-none focus:border-burgundy uppercase tracking-wide cursor-pointer"
                aria-label="Ordenar productos"
              >
                <option value="featured">Destacados</option>
                <option value="name-asc">A - Z</option>
                <option value="name-desc">Z - A</option>
              </select>
            </div>
          </div>

          {/* Fila 2: Píldoras de categoría (deslizables) */}
          {showFilters && (
            <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar snap-x pb-0.5 -mx-4 px-4 sm:mx-0 sm:px-0">
              {CATEGORIES.map((cat) => {
                const isActive = activeCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={cn(
                      "px-3 py-1.5 text-[10px] sm:text-xs uppercase tracking-wider font-medium whitespace-nowrap transition-all duration-200 rounded-none border shrink-0 snap-start active:scale-95",
                      isActive
                        ? "bg-burgundy text-ivory border-burgundy shadow-xs"
                        : "bg-ivory/80 text-charcoal/65 border-beige hover:border-taupe/60 hover:text-charcoal"
                    )}
                  >
                    {cat.label}
                  </button>
                );
              })}
            </div>
          )}

          {/* Contador sutil + limpiar */}
          <div className="flex items-center justify-between text-[10px] sm:text-xs text-taupe border-t border-beige/60 pt-2">
            <span>{filteredProducts.length} de {products.length} piezas</span>
            {activeCategory !== "all" && (
              <button
                onClick={() => setActiveCategory("all")}
                className="text-burgundy hover:text-burgundy-deep text-[10px] sm:text-xs cursor-pointer underline"
              >
                Limpiar filtro
              </button>
            )}
          </div>
        </div>
      )}

      {/* Grid — 3 columnas en móvil, 4 en desktop */}
      {filteredProducts.length > 0 ? (
        <motion.div
          layout
          className="grid grid-cols-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2.5 sm:gap-6 lg:gap-8"
        >
          <AnimatePresence>
            {filteredProducts.map((product, idx) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, delay: idx * 0.04 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      ) : (
        <div className="py-20 text-center flex flex-col items-center justify-center bg-cream/40 border border-dashed border-beige p-8">
          <p className="font-serif text-2xl text-charcoal">No se encontraron modelos</p>
          <p className="text-xs text-taupe mt-2 max-w-sm">
            Intenta con otros términos de búsqueda o selecciona otra categoría de la colección.
          </p>
          <button
            onClick={() => {
              setActiveCategory("all");
              setSearchQuery("");
            }}
            className="mt-6 px-4 py-2 bg-burgundy text-ivory text-xs uppercase tracking-wider font-medium cursor-pointer"
          >
            Ver Colección Completa
          </button>
        </div>
      )}
    </div>
  );
}
