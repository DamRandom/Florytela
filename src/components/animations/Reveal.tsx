"use client";

import React from "react";
import { motion } from "framer-motion";

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  width?: "fit-content" | "100%";
}

export function Reveal({
  children,
  delay = 0,
  duration = 0.75,
  className = "",
  width = "fit-content",
}: RevealProps) {
  return (
    <div style={{ position: "relative", width, overflow: "hidden" }} className={className}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 40 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-40px" }}
        transition={{
          duration,
          delay,
          ease: "easeOut",
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}
