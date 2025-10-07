"use client";

import * as React from "react";
import { Button } from "./CybernowButton";
import { ColoredIcon } from "./ColoredIcon";
import { MessageCircle } from "lucide-react";
import { useTranslations } from "next-intl";

/**
 * Boutons CTA spécialisés pour Cybernow Seniors
 * Style moderne avec data-slot et classes optimisées
 */

interface CTAButtonsProps {
  phoneNumber?: string;
  className?: string;
  layout?: "horizontal" | "vertical";
  size?: "sm" | "md" | "lg";
}

export function CTAButtons({ 
  phoneNumber, 
  className = "",
  layout = "horizontal",
  size = "lg"
}: CTAButtonsProps) {
  const t = useTranslations();
  const phone = phoneNumber || t('common.phone');

  const containerClasses = layout === "horizontal" 
    ? "flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4"
    : "flex flex-col items-stretch gap-3";

  return (
    <div className={`${containerClasses} ${className}`}>
      {/* Bouton Appeler maintenant - Mobile optimized */}
      <Button
        data-slot="button"
        variant="primary"
        size={size}
        className="w-full sm:w-auto shadow-cybernow min-h-[56px] text-lg sm:text-base touch-manipulation"
        asChild
      >
        <a href={`tel:${phone}`} className="flex items-center justify-center">
          {t('buttons.callNow')}
        </a>
      </Button>

      {/* Bouton Être rappelé - Mobile optimized */}
      <Button
        data-slot="button"
        variant="secondary"
        size={size}
        className="w-full sm:w-auto shadow-cybernow bg-secondary text-secondary-foreground hover:bg-secondary/80 min-h-[56px] text-lg sm:text-base touch-manipulation"
      >
        {t('buttons.getCallback')}
      </Button>
    </div>
  );
}

/**
 * Bouton Appeler seul - style moderne optimisé
 */
export function CallButton({ 
  phoneNumber, 
  children, 
  size = "lg",
  className = ""
}: {
  phoneNumber?: string;
  children?: React.ReactNode;
  size?: "sm" | "md" | "lg";
  className?: string;
}) {
  const t = useTranslations();
  const phone = phoneNumber || t('common.phone');

  return (
    <Button
      data-slot="button"
      variant="primary"
      size={size}
      iconPosition="left"
      className={`shadow-cybernow bg-cnw-gradient text-white hover:bg-cnw-gradient-hover ${className}`}
      asChild
    >
      <a href={`tel:${phone}`}>
        <ColoredIcon 
          name="phone" 
          size="sm" 
          className="shrink-0"
        />
        {children || t('buttons.callNow')}
      </a>
    </Button>
  );
}

/**
 * Bouton Être rappelé seul - style moderne optimisé
 */
export function CallbackButton({ 
  onClick,
  children,
  size = "lg",
  className = ""
}: {
  onClick?: () => void;
  children?: React.ReactNode;
  size?: "sm" | "md" | "lg";
  className?: string;
}) {
  const t = useTranslations();

  return (
    <Button
      data-slot="button"
      variant="secondary"
      size={size}
      iconPosition="right"
      onClick={onClick}
      className={`shadow-cybernow bg-secondary text-secondary-foreground hover:bg-secondary/80 has-[>svg]:px-3 ${className}`}
    >
      {children || t('buttons.getCallback')}
      <MessageCircle className="shrink-0" size={16} />
    </Button>
  );
}

export default CTAButtons;