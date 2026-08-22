import React from "react";
import { Hero } from "@/components/hero/Hero";
import { LinesSection } from "@/components/sections/LinesSection";
import { PhilosophySection } from "@/components/sections/PhilosophySection";
import { ParallaxSection } from "@/components/sections/ParallaxSection";
import { CustomSection } from "@/components/sections/CustomSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { BusinessSection } from "@/components/sections/BusinessSection";

export default function HomePage() {
  return (
    <>
      {/* 1. Hero: Gran Logo Lockup & Estética Editorial */}
      <Hero />

      {/* 2. Las tres líneas: Fast / Personalización / Deluxe */}
      <LinesSection />

      {/* 3. Nuestra historia & Adriana Martínez */}
      <PhilosophySection />

      {/* 4. Sección Parallax con Scroll Desfasado e Inmersión Editorial */}
      <ParallaxSection />

      {/* 5. Personalización — Línea principal con proceso paso a paso */}
      <CustomSection />

      {/* 6. Por qué Florytela — 4 pilares */}
      <FeaturesSection />

      {/* 7. Pedidos por mayor para negocios */}
      <BusinessSection />
    </>
  );
}
