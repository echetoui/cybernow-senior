"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const iconVariants = cva(
  "inline-flex items-center justify-center",
  {
    variants: {
      size: {
        xs: "h-3 w-3",
        sm: "h-4 w-4", 
        md: "h-5 w-5",
        lg: "h-6 w-6",
        xl: "h-8 w-8",
      },
      color: {
        primary: "text-cnw-primary",
        secondary: "text-cnw-secondary", 
        info: "text-cnw-info",
        text: "text-cnw-text",
        muted: "text-cnw-text/70",
        inherit: "text-current",
      },
    },
    defaultVariants: {
      size: "md",
      color: "inherit",
    },
  }
);

export interface IconProps
  extends Omit<React.HTMLAttributes<HTMLSpanElement>, "color">,
    VariantProps<typeof iconVariants> {
  children: React.ReactNode;
}

/**
 * Wrapper pour icônes Cybernow Seniors
 * Assure la cohérence des tailles et couleurs
 * 
 * @example
 * ```tsx
 * <Icon size="lg" color="primary">
 *   <Phone />
 * </Icon>
 * ```
 */
const Icon = React.forwardRef<HTMLSpanElement, IconProps>(
  ({ className, size, color, children, ...props }, ref) => {
    return (
      <span
        className={cn(iconVariants({ size, color, className }))}
        ref={ref}
        aria-hidden="true"
        {...props}
      >
        {children}
      </span>
    );
  }
);

Icon.displayName = "Icon";

export { Icon, iconVariants };