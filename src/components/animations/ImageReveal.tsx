"use client";

import React from "react";
import { motion } from "framer-motion";

interface ImageRevealProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export function ImageReveal({
  children,
  delay = 0.1,
  className = "",
}: ImageRevealProps) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <motion.div
        initial={{ scale: 1.12, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{
          duration: 1.1,
          delay,
          ease: "easeOut",
        }}
        className="w-full h-full"
      >
        {children}
      </motion.div>
    </div>
  );
}
