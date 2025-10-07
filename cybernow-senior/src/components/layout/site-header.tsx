'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { Phone, Menu, X, Shield } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { LanguageSwitcher } from '@/components/ui/language-switcher';
import { AccessibilityControls } from '@/components/ui/accessibility-controls';
import { LogoLink } from '@/components/ui/logo';
import { HeaderSearchBar } from '@/components/ui/search-bar';
// import { cn } from '@/lib/utils';

export function SiteHeader() {
  const t = useTranslations();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSearch = (query: string) => {
    // Navigation vers la page de recherche avec query
    window.location.href = `/search?q=${encodeURIComponent(query)}`;
  };

  const navigation = [
    { href: '/', key: 'home' },
    { href: '/services', key: 'services' },
    { href: '/resources', key: 'resources' },
    { href: '/alerts', key: 'alerts' },
    { href: '/about', key: 'about' },
    { href: '/contact', key: 'contact' },
  ];

  return (
    <>
      <a 
        href="#main-content" 
        className="skip-link"
      >
        {t('common.skipToContent')}
      </a>
      
      <header 
        className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
        role="banner"
      >
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex h-16 sm:h-20 items-center justify-between min-h-[64px] sm:min-h-[80px]">
            {/* Logo - Mobile optimized */}
            <LogoLink 
              href="/" 
              size="sm"
              variant="default"
              ariaLabel="Accueil CyberNow Seniors"
              className="flex-shrink-0 self-center min-h-[44px] min-w-[44px] touch-manipulation"
            />

            {/* Desktop Navigation */}
            <div className="hidden xl:flex items-center gap-6 flex-1 justify-center">
              <nav id="navigation" className="flex items-center gap-4" aria-label="Navigation principale">
                {navigation.map((item) => (
                  <Link
                    key={item.key}
                    href={item.href}
                    className="text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-brand rounded px-3 py-2 whitespace-nowrap flex items-center text-sm font-medium"
                  >
                    {t(`navigation.${item.key}`)}
                  </Link>
                ))}
              </nav>
              
              {/* Search Bar */}
              <div id="search" className="ml-6">
                <HeaderSearchBar onSearch={handleSearch} />
              </div>
            </div>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center gap-2">
              <Button
                asChild
                variant="outline"
                size="sm"
                className="min-h-[44px] text-xs touch-manipulation"
              >
                <a href={`tel:${t('common.phone')}`}>
                  <Phone className="h-3 w-3 mr-1" aria-hidden="true" />
                  <span className="sr-only sm:not-sr-only">{t('buttons.callNow')}</span>
                </a>
              </Button>

              <Button
                asChild
                variant="destructive"
                size="sm"
                className="min-h-[44px] text-xs touch-manipulation"
              >
                <Link href="/contact">
                  <Shield className="h-3 w-3 mr-1" aria-hidden="true" />
                  <span className="sr-only lg:not-sr-only">{t('buttons.reportScam')}</span>
                </Link>
              </Button>

              <div className="flex items-center gap-1 ml-2 pl-2 border-l border-border">
                <LanguageSwitcher />
                <AccessibilityControls />
              </div>
            </div>

            {/* Mobile Menu Button - Touch optimized */}
            <Button
              variant="ghost"
              size="lg"
              className="xl:hidden min-h-[48px] min-w-[48px] touch-manipulation"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu de navigation"}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </Button>
          </div>

          {/* Mobile Menu - Touch optimized */}
          {isMenuOpen && (
            <div 
              id="mobile-menu"
              className="xl:hidden border-t border-border bg-background shadow-lg"
            >
              <nav className="px-4 py-6 space-y-1" aria-label="Navigation mobile">
                {navigation.map((item) => (
                  <Link
                    key={item.key}
                    href={item.href}
                    className="block py-4 px-4 text-lg text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors focus-visible:outline-brand rounded-lg min-h-[56px] flex items-center touch-manipulation"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {t(`navigation.${item.key}`)}
                  </Link>
                ))}
                
                <div className="pt-6 space-y-4 border-t border-border">
                  {/* Primary CTA - Call */}
                  <Button
                    asChild
                    variant="default"
                    size="lg"
                    className="w-full min-h-[56px] text-lg touch-manipulation"
                  >
                    <a href={`tel:${t('common.phone')}`}>
                      <Phone className="h-5 w-5 mr-3" aria-hidden="true" />
                      {t('buttons.callNow')}
                    </a>
                  </Button>

                  {/* Secondary CTA - Report */}
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="w-full min-h-[56px] text-lg touch-manipulation"
                  >
                    <Link href="/contact">
                      <Shield className="h-5 w-5 mr-3" aria-hidden="true" />
                      {t('buttons.reportScam')}
                    </Link>
                  </Button>

                  {/* Accessibility Controls */}
                  <div className="flex items-center justify-center gap-4 pt-4 border-t border-border/50">
                    <LanguageSwitcher />
                    <AccessibilityControls />
                  </div>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  );
}