"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface CTAButtonProps {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "gold" | "white" | "ghost";
  size?: "sm" | "md" | "lg";
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  className?: string;
  target?: string;
  rel?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

export function CTAButton({
  href,
  onClick,
  children,
  variant = "primary",
  size = "md",
  icon,
  iconPosition = "right",
  className = "",
  target,
  rel,
  type = "button",
  disabled = false,
}: CTAButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium tracking-[0.08em] transition-all duration-300 select-none cursor-pointer text-xs sm:text-sm uppercase";

  const sizeStyles = {
    sm: "px-4 py-2.5 gap-2",
    md: "px-6 py-3.5 gap-2.5",
    lg: "px-8 py-4 gap-3 text-sm tracking-[0.12em]",
  }[size];

  const variantStyles = {
    primary:
      "bg-burgundy text-ivory hover:bg-burgundy-deep shadow-sm hover:shadow-md border border-burgundy hover:border-burgundy-deep",
    secondary:
      "bg-transparent text-burgundy border border-burgundy/40 hover:border-burgundy hover:bg-burgundy/5",
    gold:
      "bg-gold text-ivory hover:bg-gold/90 border border-gold shadow-sm",
    white:
      "bg-ivory text-burgundy border border-ivory hover:bg-beige-light hover:border-beige-light shadow-sm",
    ghost:
      "bg-transparent text-charcoal hover:text-burgundy border-b border-transparent hover:border-burgundy px-0 py-1 tracking-wider normal-case font-normal",
  }[variant];

  const content = (
    <>
      {icon && iconPosition === "left" && <span className="transition-transform duration-300 group-hover:-translate-x-0.5">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === "right" && <span className="transition-transform duration-300 group-hover:translate-x-1">{icon}</span>}
    </>
  );

  const combinedClasses = cn(
    baseStyles,
    variant !== "ghost" && sizeStyles,
    variantStyles,
    disabled && "opacity-50 cursor-not-allowed pointer-events-none",
    "group relative overflow-hidden",
    className
  );

  if (href) {
    return (
      <Link
        href={href}
        target={target}
        rel={rel}
        className={combinedClasses}
      >
        <motion.span
          whileHover={{ y: -1 }}
          whileTap={{ y: 0.5 }}
          className="inline-flex items-center justify-center gap-2"
        >
          {content}
        </motion.span>
      </Link>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      whileHover={{ y: -1 }}
      whileTap={{ y: 0.5 }}
      className={combinedClasses}
    >
      {content}
    </motion.button>
  );
}
