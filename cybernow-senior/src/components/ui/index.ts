/**
 * Cybernow Seniors UI Components Library
 * 
 * Export centralisé de tous les composants UI
 * Optimisé pour l'accessibilité seniors et WCAG 2.1 AA
 */

// Composants principaux
export { Button, buttonVariants } from "./CybernowButton";
export { Icon, iconVariants } from "./Icon";

// Composants existants (pour compatibilité)
export { Button as OriginalButton } from "./button";
export { Logo, LogoLink } from "./logo";
export { Card, CardHeader, CardTitle, CardContent, CardFooter } from "./card";
export { Input } from "./input";
export { Textarea } from "./textarea";
export { Label } from "./label";
export { Callout } from "./callout";

// Types
export type { ButtonProps } from "./CybernowButton";
export type { IconProps } from "./Icon";

/**
 * @example Usage simple
 * ```tsx
 * import { Button, Icon } from "@/components/ui";
 * 
 * <Button variant="primary" size="lg">
 *   <Icon size="md" color="inherit">
 *     <Phone />
 *   </Icon>
 *   Appeler
 * </Button>
 * ```
 */