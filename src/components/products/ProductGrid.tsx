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

type SortOption = "featured" | "price-asc" | "price-desc";

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
        if (sortBy === "price-asc") return a.price - b.price;
        if (sortBy === "price-desc") return b.price - a.price;
        if (a.isFeatured && !b.isFeatured) return -1;
        if (!a.isFeatured && b.isFeatured) return 1;
        return 0;
      });
  }, [products, activeCategory, searchQuery, sortBy]);

  return (
    <div className="w-full flex flex-col gap-8">
      {/* Controls Bar */}
      {(showFilters || showSearch) && (
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-6 border-b border-beige/80">
          {/* Category Tabs */}
          {showFilters && (
            <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
              {CATEGORIES.map((cat) => {
                const isActive = activeCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={cn(
                      "px-3.5 py-1.5 text-xs uppercase tracking-wider font-medium whitespace-nowrap transition-all duration-300 rounded-none border",
                      isActive
                        ? "bg-burgundy text-ivory border-burgundy shadow-xs"
                        : "bg-ivory/80 text-charcoal/70 border-beige hover:border-gold/60 hover:text-charcoal"
                    )}
                  >
                    {cat.label}
                  </button>
                );
              })}
            </div>
          )}

          {/* Search & Sort */}
          <div className="flex items-center gap-3 w-full md:w-auto justify-between md:justify-end">
            {showSearch && (
              <div className="relative flex-1 md:w-60">
                <Search className="w-3.5 h-3.5 text-taupe absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Buscar textil, modelo..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-ivory border border-beige pl-9 pr-3 py-1.5 text-xs text-charcoal placeholder:text-taupe focus:outline-none focus:border-burgundy"
                />
              </div>
            )}

            <div className="flex items-center gap-2">
              <SlidersHorizontal className="w-3.5 h-3.5 text-taupe hidden sm:inline" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as SortOption)}
                className="bg-ivory border border-beige px-2.5 py-1.5 text-xs text-charcoal focus:outline-none focus:border-burgundy uppercase tracking-wider cursor-pointer"
                aria-label="Ordenar productos"
              >
                <option value="featured">Destacados</option>
                <option value="price-asc">Precio: Menor a Mayor</option>
                <option value="price-desc">Precio: Mayor a Menor</option>
              </select>
            </div>
          </div>
        </div>
      )}

      {/* Product count */}
      <div className="flex items-center justify-between text-xs text-taupe">
        <span>
          Mostrando {filteredProducts.length} de {products.length} piezas de autor
        </span>
        {activeCategory !== "all" && (
          <button
            onClick={() => setActiveCategory("all")}
            className="text-burgundy underline hover:text-burgundy-deep text-xs cursor-pointer"
          >
            Limpiar filtro
          </button>
        )}
      </div>

      {/* Grid */}
      {filteredProducts.length > 0 ? (
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8"
        >
          <AnimatePresence>
            {filteredProducts.map((product, idx) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
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
