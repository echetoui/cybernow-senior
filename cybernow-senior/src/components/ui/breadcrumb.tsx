"use client";

import * as React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface BreadcrumbItem {
  href?: string;
  label: string;
  current?: boolean;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

export function Breadcrumb({ items, className }: BreadcrumbProps) {
  return (
    <nav 
      aria-label="Fil d'Ariane" 
      className={cn("mb-6", className)}
    >
      <ol className="flex items-center space-x-2 text-sm text-muted-foreground">
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            {index > 0 && (
              <ChevronRight 
                className="h-4 w-4 mx-2 text-muted-foreground/60" 
                aria-hidden="true" 
              />
            )}
            
            {item.current || !item.href ? (
              <span 
                className="font-medium text-foreground"
                aria-current={item.current ? "page" : undefined}
              >
                {item.label}
              </span>
            ) : (
              <Link
                href={item.href}
                className="hover:text-foreground transition-colors focus-visible:outline-brand rounded px-1 py-1"
              >
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

/**
 * Hook pour générer automatiquement le fil d'Ariane basé sur l'URL
 */
export function useBreadcrumbs(pathname: string, customLabels?: Record<string, string>) {
  const labels = React.useMemo(() => {
    const defaultLabels: Record<string, string> = {
      '': 'Accueil',
      'services': 'Services',
      'resources': 'Ressources', 
      'alerts': 'Alertes',
      'about': 'À propos',
      'contact': 'Contact',
      'privacy': 'Politique de confidentialité'
    };
    
    return { ...defaultLabels, ...customLabels };
  }, [customLabels]);

  const breadcrumbs = React.useMemo(() => {
    const segments = pathname.split('/').filter(Boolean);
    const items: BreadcrumbItem[] = [
      { href: '/', label: labels[''] }
    ];

    let currentPath = '';
    segments.forEach((segment, index) => {
      currentPath += `/${segment}`;
      const isLast = index === segments.length - 1;
      
      items.push({
        href: isLast ? undefined : currentPath,
        label: labels[segment] || segment.charAt(0).toUpperCase() + segment.slice(1),
        current: isLast
      });
    });

    return items;
  }, [pathname, labels]);

  return breadcrumbs;
}