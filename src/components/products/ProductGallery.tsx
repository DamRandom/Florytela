"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Maximize2, X, ChevronLeft, ChevronRight } from "lucide-react";

interface ProductGalleryProps {
  images: string[];
  productName: string;
}

export function ProductGallery({ images, productName }: ProductGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const handleNext = () => {
    setSelectedIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setSelectedIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="flex flex-col gap-4">
      {/* Main Image Showcase */}
      <div className="relative aspect-4/5 w-full bg-cream overflow-hidden border border-beige group">
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedIndex}
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="relative w-full h-full"
          >
            <Image
              src={images[selectedIndex]}
              alt={`${productName} vista ${selectedIndex + 1}`}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center cursor-zoom-in"
              onClick={() => setLightboxOpen(true)}
            />
          </motion.div>
        </AnimatePresence>

        {/* Zoom Action Button */}
        <button
          onClick={() => setLightboxOpen(true)}
          className="absolute bottom-3 right-3 bg-ivory/90 hover:bg-ivory text-charcoal p-2.5 shadow-md border border-beige/60 opacity-90 sm:opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          aria-label="Ampliar fotografía"
        >
          <Maximize2 className="w-4 h-4 text-burgundy" />
        </button>

        {/* Slider arrows for mobile/quick navigation */}
        {images.length > 1 && (
          <>
            <button
              onClick={handlePrev}
              className="absolute left-2.5 top-1/2 -translate-y-1/2 bg-ivory/90 hover:bg-ivory text-charcoal p-2.5 shadow-md border border-beige/60 opacity-90 sm:opacity-0 group-hover:opacity-100 transition-opacity active:scale-90"
              aria-label="Fotografía anterior"
            >
              <ChevronLeft className="w-4 h-4 text-burgundy" />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 bg-ivory/90 hover:bg-ivory text-charcoal p-2.5 shadow-md border border-beige/60 opacity-90 sm:opacity-0 group-hover:opacity-100 transition-opacity active:scale-90"
              aria-label="Fotografía siguiente"
            >
              <ChevronRight className="w-4 h-4 text-burgundy" />
            </button>
          </>
        )}

        {/* Counter indicator */}
        <div className="absolute top-3 right-3 bg-charcoal/75 backdrop-blur-xs text-ivory text-[10px] uppercase font-mono px-2.5 py-0.5 tracking-widest">
          {selectedIndex + 1} / {images.length}
        </div>
      </div>

      {/* Thumbnails list — Touch scrollable strip on mobile */}
      {images.length > 1 && (
        <div className="flex sm:grid sm:grid-cols-5 gap-2.5 sm:gap-3 overflow-x-auto sm:overflow-visible no-scrollbar snap-x py-1">
          {images.map((img, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedIndex(idx)}
              className={`relative aspect-square w-16 sm:w-auto shrink-0 snap-start overflow-hidden bg-cream border transition-all duration-300 active:scale-95 ${
                selectedIndex === idx
                  ? "border-burgundy ring-2 ring-burgundy/40 scale-[1.02]"
                  : "border-beige opacity-70 hover:opacity-100 hover:border-taupe"
              }`}
              aria-label={`Ver foto ${idx + 1}`}
            >
              <Image
                src={img}
                alt={`${productName} miniatura ${idx + 1}`}
                fill
                sizes="120px"
                className="object-cover object-center"
              />
            </button>
          ))}
        </div>
      )}

      {/* Fullscreen Lightbox Modal */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-charcoal/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
            onClick={() => setLightboxOpen(false)}
          >
            <button
              onClick={() => setLightboxOpen(false)}
              className="absolute top-6 right-6 text-ivory/80 hover:text-ivory p-2 focus:outline-none"
              aria-label="Cerrar vista completa"
            >
              <X className="w-7 h-7" />
            </button>

            <div
              className="relative max-w-4xl max-h-[85vh] w-full h-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full h-full">
                <Image
                  src={images[selectedIndex]}
                  alt={`${productName} vista ampliada`}
                  fill
                  className="object-contain"
                />
              </div>

              {images.length > 1 && (
                <>
                  <button
                    onClick={handlePrev}
                    className="absolute -left-4 sm:-left-12 top-1/2 -translate-y-1/2 text-ivory/80 hover:text-ivory p-3"
                    aria-label="Foto anterior"
                  >
                    <ChevronLeft className="w-8 h-8" />
                  </button>
                  <button
                    onClick={handleNext}
                    className="absolute -right-4 sm:-right-12 top-1/2 -translate-y-1/2 text-ivory/80 hover:text-ivory p-3"
                    aria-label="Foto siguiente"
                  >
                    <ChevronRight className="w-8 h-8" />
                  </button>
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
