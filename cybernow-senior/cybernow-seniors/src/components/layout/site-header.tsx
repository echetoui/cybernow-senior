'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { Phone, Shield, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { LanguageSwitcher } from '@/components/ui/language-switcher';
import { AccessibilityControls } from '@/components/ui/accessibility-controls';
// import { cn } from '@/lib/utils';

export function SiteHeader() {
  const t = useTranslations();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <Link 
              href="/" 
              className="flex items-center gap-2 font-bold text-xl hover:opacity-80 transition-opacity focus-visible:outline-brand rounded-lg p-1"
              aria-label="Accueil CyberNow Seniors"
            >
              <Shield className="h-8 w-8 text-brand" aria-hidden="true" />
              <span className="text-brand">{t('common.cybernow')}</span>
              <span className="text-foreground">{t('common.seniors')}</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-6" aria-label="Navigation principale">
              {navigation.map((item) => (
                <Link
                  key={item.key}
                  href={item.href}
                  className="text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-brand rounded px-2 py-1"
                >
                  {t(`navigation.${item.key}`)}
                </Link>
              ))}
            </nav>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center gap-3">
              <Button
                asChild
                variant="outline"
                className="min-h-11"
              >
                <a href={`tel:${t('common.phone')}`}>
                  <Phone className="h-4 w-4 mr-2" aria-hidden="true" />
                  {t('buttons.callNow')}
                </a>
              </Button>

              <Button
                asChild
                variant="destructive"
                className="min-h-11"
              >
                <Link href="/contact">
                  <Shield className="h-4 w-4 mr-2" aria-hidden="true" />
                  {t('buttons.reportScam')}
                </Link>
              </Button>

              <div className="flex items-center gap-2 ml-2 pl-2 border-l border-border">
                <LanguageSwitcher />
                <AccessibilityControls />
              </div>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden min-h-11 min-w-11"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              aria-label="Ouvrir le menu de navigation"
            >
              {isMenuOpen ? (
                <X className="h-5 w-5" aria-hidden="true" />
              ) : (
                <Menu className="h-5 w-5" aria-hidden="true" />
              )}
            </Button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div 
              id="mobile-menu"
              className="lg:hidden border-t border-border bg-background"
            >
              <nav className="px-4 py-4 space-y-3" aria-label="Navigation mobile">
                {navigation.map((item) => (
                  <Link
                    key={item.key}
                    href={item.href}
                    className="block py-2 text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-brand rounded px-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {t(`navigation.${item.key}`)}
                  </Link>
                ))}
                
                <div className="pt-4 space-y-3 border-t border-border">
                  <Button
                    asChild
                    variant="outline"
                    className="w-full min-h-11"
                  >
                    <a href={`tel:${t('common.phone')}`}>
                      <Phone className="h-4 w-4 mr-2" aria-hidden="true" />
                      {t('buttons.callNow')}
                    </a>
                  </Button>

                  <Button
                    asChild
                    variant="destructive"
                    className="w-full min-h-11"
                  >
                    <Link href="/contact">
                      <Shield className="h-4 w-4 mr-2" aria-hidden="true" />
                      {t('buttons.reportScam')}
                    </Link>
                  </Button>

                  <div className="flex items-center justify-between pt-2">
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