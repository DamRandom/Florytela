"use client";

import React from "react";
import { motion } from "framer-motion";

interface LoadingSpinnerProps {
  size?: "sm" | "md" | "lg";
  text?: string;
  fullScreen?: boolean;
}

export function LoadingSpinner({
  size = "md",
  text = "Cargando...",
  fullScreen = false,
}: LoadingSpinnerProps) {
  const sizeMap = {
    sm: "w-6 h-6",
    md: "w-12 h-12",
    lg: "w-16 h-16",
  };

  const containerClasses = fullScreen
    ? "fixed inset-0 z-50 flex flex-col items-center justify-center bg-ivory/90 backdrop-blur-md"
    : "flex flex-col items-center justify-center p-8";

  return (
    <div className={containerClasses}>
      <div className="relative flex items-center justify-center">
        {/* Anillo exterior continuo y suave */}
        <motion.div
          className={`${sizeMap[size]} rounded-full border-2 border-beige/60 border-t-burgundy`}
          animate={{ rotate: 360 }}
          transition={{
            repeat: Infinity,
            duration: 1.1,
            ease: "linear",
          }}
        />

        {/* Anillo interior punteado en sentido contrario (estilo puntada textil / atelier) */}
        <motion.div
          className={`absolute ${size === "lg" ? "w-10 h-10" : size === "md" ? "w-7 h-7" : "w-4 h-4"} rounded-full border border-dashed border-taupe/50`}
          animate={{ rotate: -360 }}
          transition={{
            repeat: Infinity,
            duration: 2.2,
            ease: "linear",
          }}
        />

        {/* Pequeño punto central en borgoña */}
        <motion.div
          className="absolute w-1.5 h-1.5 rounded-full bg-burgundy"
          animate={{ scale: [0.8, 1.2, 0.8] }}
          transition={{
            repeat: Infinity,
            duration: 1.5,
            ease: "easeInOut",
          }}
        />
      </div>

      {text && (
        <div className="mt-4 flex flex-col items-center gap-1">
          <span className="font-serif text-sm tracking-[0.2em] text-charcoal font-medium uppercase">
            {text}
          </span>
          <span className="text-[10px] tracking-[0.28em] text-taupe uppercase font-light">
            Florytela Atelier
          </span>
        </div>
      )}
    </div>
  );
}
