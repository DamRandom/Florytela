"use client";

import React from "react";
import { MessageCircle } from "lucide-react";
import { createWhatsAppLink, WhatsAppLinkOptions } from "@/lib/whatsapp";
import { CTAButton } from "./CTAButton";

interface WhatsAppButtonProps extends WhatsAppLinkOptions {
  children?: React.ReactNode;
  variant?: "primary" | "secondary" | "gold" | "white";
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function WhatsAppButton({
  children = "Consultar por WhatsApp",
  variant = "primary",
  size = "md",
  className = "",
  ...linkOptions
}: WhatsAppButtonProps) {
  const href = createWhatsAppLink(linkOptions);

  return (
    <CTAButton
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      variant={variant}
      size={size}
      icon={<MessageCircle className="w-4 h-4" />}
      iconPosition="left"
      className={className}
    >
      {children}
    </CTAButton>
  );
}
