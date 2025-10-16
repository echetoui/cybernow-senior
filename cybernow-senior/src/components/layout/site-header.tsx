'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { Phone, Menu, X, Shield, Lock, ShieldCheck, Home, BookOpen, AlertTriangle, Users } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { LanguageSwitcher } from '@/components/ui/language-switcher';
import { AccessibilityControls } from '@/components/ui/accessibility-controls';
import { LogoLink } from '@/components/ui/logo';
// import { cn } from '@/lib/utils';

export function SiteHeader() {
  const t = useTranslations();
  const [isMenuOpen, setIsMenuOpen] = useState(false);


  const navigation = [
    { href: '/', key: 'home', icon: Home },
    { href: '/services', key: 'services', icon: ShieldCheck },
    { href: '/resources', key: 'resources', icon: BookOpen },
    { href: '/alerts', key: 'alerts', icon: AlertTriangle },
    { href: '/about', key: 'about', icon: Users },
    { href: '/contact', key: 'contact', icon: Lock },
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
          <div className="flex h-14 sm:h-16 items-center justify-between min-h-[56px] sm:min-h-[64px]">
            {/* Logo avec indicateur de sécurité */}
            <div className="flex items-center gap-3">
              <LogoLink 
                href="/" 
                size="sm"
                variant="default"
                ariaLabel="Accueil CyberNow Seniors"
                className="flex-shrink-0 self-center min-h-[44px] min-w-[44px] touch-manipulation"
              />
              
              {/* Indicateur de sécurité */}
              <div className="hidden md:flex items-center gap-1 px-2 py-1 bg-success-green/10 border border-success-green/20 rounded-full">
                <ShieldCheck 
                  className="h-3 w-3 text-success-green" 
                  aria-hidden="true"
                />
                <span className="text-xs font-medium text-success-green">
                  Sécurisé
                </span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-2 flex-1 justify-center">
              <nav id="navigation" className="flex items-center gap-2" aria-label="Navigation principale">
                {navigation.map((item) => {
                  const IconComponent = item.icon;
                  return (
                    <Link
                      key={item.key}
                      href={item.href}
                      className="text-secondary hover:text-foreground transition-colors focus-visible:outline-primary rounded px-2 py-1 whitespace-nowrap flex items-center gap-1.5 text-base font-medium"
                      aria-label={`Sécurisé : ${t(`navigation.${item.key}`)}`}
                    >
                      <IconComponent 
                        className="h-4 w-4 text-trust-blue" 
                        aria-hidden="true"
                      />
                      {t(`navigation.${item.key}`)}
                    </Link>
                  );
                })}
              </nav>
            </div>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center gap-1">
              <Button
                asChild
                variant="outline"
                size="sm"
                className="min-h-[40px] text-xs touch-manipulation px-2"
              >
                <a href={`tel:${t('common.phone')}`}>
                  <Phone className="h-3 w-3 mr-1" aria-hidden="true" />
                  <span className="hidden lg:inline">{t('buttons.callNow')}</span>
                </a>
              </Button>

              <Button
                asChild
                variant="destructive"
                size="sm"
                className="min-h-[40px] text-xs touch-manipulation px-2"
              >
                <Link href="/contact">
                  <Shield className="h-3 w-3 mr-1" aria-hidden="true" />
                  <span className="hidden lg:inline">{t('buttons.reportScam')}</span>
                </Link>
              </Button>

              <div className="flex items-center gap-1 ml-1 pl-1 border-l border-border">
                <LanguageSwitcher />
                <AccessibilityControls />
              </div>
            </div>

            {/* Mobile Menu Button - Touch optimized */}
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden min-h-[40px] min-w-[40px] touch-manipulation"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu de navigation"}
            >
              {isMenuOpen ? (
                <X className="h-5 w-5" aria-hidden="true" />
              ) : (
                <Menu className="h-5 w-5" aria-hidden="true" />
              )}
            </Button>
          </div>

          {/* Mobile Menu - Touch optimized */}
          {isMenuOpen && (
            <div 
              id="mobile-menu"
              className="lg:hidden border-t border-border bg-background shadow-lg"
            >
              <nav className="px-4 py-6 space-y-1" aria-label="Navigation mobile">
                {navigation.map((item) => {
                  const IconComponent = item.icon;
                  return (
                    <Link
                      key={item.key}
                      href={item.href}
                      className="block py-4 px-4 text-seniors-base text-secondary hover:text-foreground hover:bg-muted/50 transition-colors focus-visible:outline-primary rounded-lg min-h-[56px] flex items-center gap-3 touch-manipulation"
                      onClick={() => setIsMenuOpen(false)}
                      aria-label={`Sécurisé : ${t(`navigation.${item.key}`)}`}
                    >
                      <IconComponent 
                        className="h-6 w-6 text-trust-blue flex-shrink-0" 
                        aria-hidden="true"
                      />
                      {t(`navigation.${item.key}`)}
                    </Link>
                  );
                })}
                
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