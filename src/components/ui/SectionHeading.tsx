import React from "react";
import { FadeIn } from "../animations/FadeIn";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  className?: string;
  light?: boolean;
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  className = "",
  light = false,
}: SectionHeadingProps) {
  const alignmentClasses = {
    left: "text-left items-start",
    center: "text-center items-center mx-auto",
    right: "text-right items-end ml-auto",
  }[align];

  return (
    <div className={cn("flex flex-col max-w-3xl mb-12 md:mb-16", alignmentClasses, className)}>
      {eyebrow && (
        <FadeIn delay={0.1} direction="up" distance={12}>
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="h-px w-6 bg-beige"></span>
            <span
              className={cn(
                "text-xs uppercase tracking-[0.25em] font-medium",
                light ? "text-beige" : "text-burgundy"
              )}
            >
              {eyebrow}
            </span>
            <span className="h-px w-6 bg-beige"></span>
          </div>
        </FadeIn>
      )}

      <FadeIn delay={0.2} direction="up" distance={16}>
        <h2
          className={cn(
            "font-serif text-3xl sm:text-4xl md:text-5xl lg:text-5.5xl font-normal leading-[1.15] tracking-tight",
            light ? "text-ivory" : "text-charcoal"
          )}
        >
          {title}
        </h2>
      </FadeIn>

      {subtitle && (
        <FadeIn delay={0.3} direction="up" distance={16}>
          <p
            className={cn(
              "mt-4 text-base sm:text-lg font-light leading-relaxed max-w-2xl",
              light ? "text-taupe" : "text-charcoal/75"
            )}
          >
            {subtitle}
          </p>
        </FadeIn>
      )}
    </div>
  );
}
