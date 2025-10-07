"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

const buttonVariants = cva(
  // Base styles - accessibilité seniors + design tokens
  [
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-2xl",
    "font-medium transition-all duration-200 ease-in-out",
    "focus:outline-none focus-visible:ring-2 focus-visible:ring-cnw-info/80",
    "focus-visible:ring-offset-2 focus-visible:ring-offset-white",
    "dark:focus-visible:ring-offset-neutral-900",
    "disabled:pointer-events-none disabled:opacity-50",
    "motion-safe:hover:transition-all motion-safe:active:transition-all",
    // Respect prefers-reduced-motion
    "motion-reduce:transition-none motion-reduce:hover:transform-none motion-reduce:active:transform-none",
  ],
  {
    variants: {
      variant: {
        primary: [
          "bg-cnw-gradient text-white shadow-cnw-button",
          "hover:bg-cnw-gradient-hover hover:shadow-lg",
          "motion-safe:active:scale-[0.98]",
          "dark:hover:shadow-cnw-button/50",
        ],
        secondary: [
          "border-2 border-cnw-primary text-cnw-primary bg-white",
          "hover:border-cnw-secondary hover:text-cnw-secondary hover:bg-cnw-info/10",
          "active:bg-cnw-info/20",
          "dark:bg-neutral-900 dark:hover:bg-neutral-800",
        ],
        ghost: [
          "bg-transparent text-cnw-primary",
          "hover:bg-cnw-info/10 hover:text-cnw-primary",
          "active:bg-cnw-info/20",
          "dark:text-cnw-info dark:hover:bg-cnw-info/10",
        ],
        link: [
          "text-cnw-primary underline underline-offset-4",
          "hover:text-cnw-secondary hover:no-underline",
          "active:text-cnw-primary/80",
          "dark:text-cnw-info dark:hover:text-cnw-secondary",
        ],
      },
      size: {
        sm: [
          "h-10 px-4 text-cnw-sm min-h-[2.5rem]", // 40px min
          "gap-1.5",
        ],
        md: [
          "h-12 px-6 text-cnw-md min-h-[3rem]", // 48px min - défaut ≥18px
          "gap-2",
        ],
        lg: [
          "h-14 px-7 text-cnw-lg min-h-[3.5rem]", // 56px min
          "gap-2.5",
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