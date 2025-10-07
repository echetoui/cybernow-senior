"use client";

import * as React from "react";
import { usePathname } from "next/navigation";
import { Breadcrumb, useBreadcrumbs } from "@/components/ui/breadcrumb";
import { cn } from "@/lib/utils";

interface PageLayoutProps {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
  showBreadcrumb?: boolean;
  breadcrumbLabels?: Record<string, string>;
  className?: string;
  maxWidth?: "sm" | "md" | "lg" | "xl" | "full";
}

export function PageLayout({
  children,
  title,
  subtitle,
  showBreadcrumb = true,
  breadcrumbLabels,
  className,
  maxWidth = "lg"
}: PageLayoutProps) {
  const pathname = usePathname();
  const breadcrumbs = useBreadcrumbs(pathname, breadcrumbLabels);

  const maxWidthClasses = {
    sm: "max-w-2xl",
    md: "max-w-4xl", 
    lg: "max-w-6xl",
    xl: "max-w-7xl",
    full: "max-w-none"
  };

  // N'affiche le breadcrumb que sur les pages non-racine
  const shouldShowBreadcrumb = showBreadcrumb && pathname !== "/" && breadcrumbs.length > 1;

  return (
    <main 
      id="main-content"
      className={cn("min-h-screen py-8", className)}
    >
      <div className={cn("container mx-auto px-4", maxWidthClasses[maxWidth])}>
        {/* Breadcrumb */}
        {shouldShowBreadcrumb && (
          <Breadcrumb items={breadcrumbs} />
        )}

        {/* Page Header */}
        {(title || subtitle) && (
          <header className="mb-8">
            {title && (
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary mb-4 leading-tight">
                {title}
              </h1>
            )}
            {subtitle && (
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl">
                {subtitle}
              </p>
            )}
          </header>
        )}

        {/* Page Content */}
        <div className="space-y-8">
          {children}
        </div>
      </div>
    </main>
  );
}

/**
 * Layout spécialisé pour les pages de services
 */
export function ServicePageLayout({
  children,
  serviceName,
  ...props
}: Omit<PageLayoutProps, "breadcrumbLabels"> & {
  serviceName?: string;
}) {
  const breadcrumbLabels = serviceName ? {
    [serviceName.toLowerCase().replace(/\s+/g, '-')]: serviceName
  } : undefined;

  return (
    <PageLayout
      {...props}
      breadcrumbLabels={breadcrumbLabels}
      maxWidth="lg"
    >
      {children}
    </PageLayout>
  );
}

/**
 * Layout spécialisé pour les articles et ressources
 */
export function ArticlePageLayout({
  children,
  ...props
}: Omit<PageLayoutProps, "maxWidth">) {
  return (
    <PageLayout
      {...props}
      maxWidth="md"
      className="prose prose-lg max-w-none"
    >
      {children}
    </PageLayout>
  );
}