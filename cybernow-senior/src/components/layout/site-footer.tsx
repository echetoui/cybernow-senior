"use client";

import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { Phone, Mail, Facebook, Twitter, Linkedin } from 'lucide-react';
import { LogoLink } from '@/components/ui/logo';

export function SiteFooter() {
  const t = useTranslations();

  const quickLinks = [
    { href: '/', key: 'home' },
    { href: '/services', key: 'services' },
    { href: '/resources', key: 'resources' },
    { href: '/alerts', key: 'alerts' },
    { href: '/about', key: 'about' },
    { href: '/contact', key: 'contact' },
  ];

  const legalLinks = [
    { href: '/privacy', key: 'privacy' },
  ];

  return (
    <footer className="bg-secondary text-white" role="contentinfo">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Logo & Contact Principal */}
          <div className="sm:col-span-2 lg:col-span-1">
            <LogoLink
              href="/"
              size="sm"
              variant="white"
              ariaLabel="Accueil CyberNow Seniors"
              className="mb-4"
            />

            <p className="text-white/90 text-base leading-relaxed mb-6 max-w-md">
              {t('about.mission.description')}
            </p>

            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-success-green flex-shrink-0" aria-hidden="true" />
                <a
                  href={`tel:${t('common.phone')}`}
                  className="text-white hover:text-success-green transition-colors focus-visible:outline-white rounded px-1 text-base font-medium"
                  aria-label="Appeler CyberNow Seniors"
                >
                  {t('common.phone')}
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-success-green flex-shrink-0" aria-hidden="true" />
                <a
                  href={`mailto:${t('common.email')}`}
                  className="text-white hover:text-success-green transition-colors focus-visible:outline-white rounded px-1 text-base"
                  aria-label="Envoyer un courriel à CyberNow Seniors"
                >
                  {t('common.email')}
                </a>
              </div>
            </div>
          </div>

          {/* Navigation rapide - simplifié */}
          <div>
            <h3 className="font-semibold text-base mb-4 text-success-green">Navigation rapide</h3>
            <nav aria-label="Liens rapides">
              <ul className="space-y-2">
                {quickLinks.slice(0, 5).map((link) => (
                  <li key={link.key}>
                    <Link
                      href={link.href}
                      className="text-white/90 hover:text-white transition-colors focus-visible:outline-white rounded px-1 py-1 block text-base"
                    >
                      {t(`navigation.${link.key}`)}
                    </Link>
                  </li>
                ))}
                {legalLinks.map((link) => (
                  <li key={link.key}>
                    <Link
                      href={link.href}
                      className="text-white/90 hover:text-white transition-colors focus-visible:outline-white rounded px-1 py-1 block text-base"
                    >
                      {t(`navigation.${link.key}`)}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Suivez-nous */}
          <div>
            <h3 className="font-semibold text-base mb-4 text-success-green">{t('footer.social')}</h3>
            <div className="flex gap-3 mb-6">
              <a
                href="#"
                aria-label="Suivez-nous sur Facebook"
                className="p-3 bg-white/10 rounded-lg hover:bg-success-green/20 transition-colors focus-visible:outline-white min-w-[44px] min-h-[44px] flex items-center justify-center"
              >
                <Facebook className="h-6 w-6" aria-hidden="true" />
              </a>
              <a
                href="#"
                aria-label="Suivez-nous sur Twitter"
                className="p-3 bg-white/10 rounded-lg hover:bg-success-green/20 transition-colors focus-visible:outline-white min-w-[44px] min-h-[44px] flex items-center justify-center"
              >
                <Twitter className="h-6 w-6" aria-hidden="true" />
              </a>
              <a
                href="#"
                aria-label="Suivez-nous sur LinkedIn"
                className="p-3 bg-white/10 rounded-lg hover:bg-success-green/20 transition-colors focus-visible:outline-white min-w-[44px] min-h-[44px] flex items-center justify-center"
              >
                <Linkedin className="h-6 w-6" aria-hidden="true" />
              </a>
            </div>

            <p className="text-white/80 text-sm leading-relaxed">
              Restez informé des dernières alertes de sécurité et conseils pratiques.
            </p>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8 text-center">
          <p className="text-white/90 text-sm">
            {t('footer.tagline')}
          </p>
          <p className="text-white/60 text-xs mt-2">
            © 2024 CyberNow Seniors. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}