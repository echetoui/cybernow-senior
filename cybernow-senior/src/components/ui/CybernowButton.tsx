"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

const buttonVariants = cva(
  // Base styles modernes - style data-slot optimisé
  [
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-cybernow",
    "text-sm font-medium transition-all",
    "disabled:pointer-events-none disabled:opacity-50",
    "[&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4",
    "shrink-0 [&_svg]:shrink-0",
    "outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
    "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
    "has-[>svg]:px-3",
    // Respect prefers-reduced-motion
    "motion-reduce:transition-none motion-reduce:hover:transform-none motion-reduce:active:transform-none",
  ],
  {
    variants: {
      variant: {
        primary: [
          "shadow-cybernow bg-cnw-gradient text-white",
          "hover:bg-cnw-gradient-hover hover:shadow-lg",
          "motion-safe:active:scale-[0.98]",
        ],
        secondary: [
          "shadow-cybernow bg-secondary text-secondary-foreground",
          "hover:bg-secondary/80",
          "border border-secondary",
        ],
        ghost: [
          "bg-transparent text-cnw-primary",
          "hover:bg-cnw-info/10 hover:text-cnw-primary",
        ],
        link: [
          "text-cnw-primary underline underline-offset-4",
          "hover:text-cnw-secondary hover:no-underline",
        ],
      },
      size: {
        sm: [
          "h-9 px-4 py-2 min-h-11", // Style moderne optimisé
        ],
        md: [
          "h-12 px-6 py-3 min-h-12", // Taille confortable seniors
        ],
        lg: [
          "h-14 px-8 py-4 min-h-14", // Grande taille pour CTA
        ],
      },
      iconPosition: {
        left: "flex-row",
        right: "flex-row-reverse",
        none: "",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
      iconPosition: "none",
    },
  }
);

// Spinner component minimal
const ButtonSpinner = ({ className }: { className?: string }) => (
  <Loader2 
    className={cn("animate-spin", className)} 
    aria-hidden="true"
  />
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  /** État de chargement avec spinner */
  loading?: boolean;
  /** Rendu en tant qu'enfant (pour Link, etc.) */
  asChild?: boolean;
  /** Position de l'icône (si fournie) */
  iconPosition?: "left" | "right" | "none";
}

/**
 * Composant Button accessible pour Cybernow Seniors
 * 
 * Respecte WCAG 2.1 AA, prefers-reduced-motion, dark mode
 * Tailles confortables pour seniors (≥18px text, zone cliquable généreuse)
 * 
 * @example
 * ```tsx
 * <Button variant="primary" size="lg">
 *   <Phone className="h-5 w-5" />
 *   Appeler maintenant
 * </Button>
 * ```
 */
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ 
    className, 
    variant, 
    size, 
    iconPosition,
    loading = false,
    disabled,
    children, 
    ...props 
  }, ref) => {
    // Gestion de l'état disabled/loading
    const isDisabled = disabled || loading;
    
    // ARIA attributes pour l'accessibilité
    const ariaProps = {
      "aria-disabled": isDisabled,
      "aria-busy": loading,
      ...props,
    };

    return (
      <button
        data-slot="button"
        className={cn(buttonVariants({ variant, size, iconPosition, className }))}
        ref={ref}
        disabled={isDisabled}
        {...ariaProps}
      >
        {loading && (
          <ButtonSpinner 
            className={cn(
              size === "sm" && "h-3 w-3",
              size === "md" && "h-4 w-4", 
              size === "lg" && "h-5 w-5"
            )}
          />
        )}
        
        {/* Animation flèche droite au survol (sauf reduced-motion) */}
        <span 
          className={cn(
            "inline-flex items-center gap-2",
            iconPosition === "right" && "motion-safe:hover:translate-x-[1px]"
          )}
        >
          {children}
        </span>
        
        {/* Screen reader info pour loading */}
        {loading && (
          <span className="sr-only" aria-live="polite">
            Chargement en cours
          </span>
        )}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };