"use client";

import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Logo & Description */}
          <div className="lg:col-span-1">
            <LogoLink 
              href="/" 
              size="sm"
              variant="white"
              ariaLabel="Accueil CyberNow Seniors"
              className="mb-4"
            />
            
            <p className="text-white/80 text-seniors-sm leading-relaxed mb-4">
              {t('about.mission.description')}
            </p>

            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-trust-blue" aria-label="Sécurisé : icône de téléphone de confiance" />
                <a 
                  href={`tel:${t('common.phone')}`}
                  className="text-white/80 hover:text-white transition-colors focus-visible:outline-white rounded px-1"
                >
                  {t('common.phone')}
                </a>
              </div>
              
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-trust-blue" aria-label="Sécurisé : icône d'email de confiance" />
                <a 
                  href={`mailto:${t('common.email')}`}
                  className="text-white/80 hover:text-white transition-colors focus-visible:outline-white rounded px-1"
                >
                  {t('common.email')}
                </a>
              </div>
              
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-trust-blue" aria-label="Sécurisé : icône d'adresse de confiance" />
                <span className="text-white/80">{t('common.address')}</span>
              </div>
            </div>
          </div>

          {/* Ressources & Liens */}
          <div>
            <h3 className="font-semibold text-seniors-base mb-4">Ressources & Liens</h3>
            
            {/* Navigation principale */}
            <nav aria-label="Liens rapides" className="mb-6">
              <h4 className="font-medium text-base mb-2 text-success-green">Navigation</h4>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.key}>
                    <Link
                      href={link.href}
                      className="text-white/80 hover:text-white transition-colors focus-visible:outline-white rounded px-1 py-1 block text-base"
                    >
                      {t(`navigation.${link.key}`)}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Liens légaux */}
            <nav aria-label="Mentions légales">
              <h4 className="font-medium text-base mb-2 text-success-green">Informations légales</h4>
              <ul className="space-y-2">
                {legalLinks.map((link) => (
                  <li key={link.key}>
                    <Link
                      href={link.href}
                      className="text-white/80 hover:text-white transition-colors focus-visible:outline-white rounded px-1 py-1 block text-base"
                    >
                      {t(`navigation.${link.key}`)}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Newsletter & Social */}
          <div>
            <h3 className="font-semibold text-seniors-base mb-4">{t('footer.newsletter.title')}</h3>
            <p className="text-white/80 text-seniors-sm mb-4">
              {t('footer.newsletter.description')}
            </p>
            
            <form 
              className="space-y-2 mb-6"
              onSubmit={(e) => {
                e.preventDefault();
                // Handle newsletter subscription
              }}
            >
              <Input
                type="email"
                placeholder={t('footer.newsletter.placeholder')}
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-trust-blue"
                aria-label={t('footer.newsletter.placeholder')}
              />
              <Button 
                type="submit"
                className="w-full min-h-11 bg-success-green hover:bg-success-green/90 text-black font-medium"
                aria-label="Sécurisé : s'inscrire à la newsletter"
              >
                {t('footer.newsletter.subscribe')}
              </Button>
            </form>

            <div>
              <h4 className="font-medium mb-3">{t('footer.social')}</h4>
              <div className="flex gap-3">
                <a
                  href="#"
                  aria-label="Facebook"
                  className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors focus-visible:outline-white"
                >
                  <Facebook className="h-5 w-5" aria-hidden="true" />
                </a>
                <a
                  href="#"
                  aria-label="Twitter"
                  className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors focus-visible:outline-white"
                >
                  <Twitter className="h-5 w-5" aria-hidden="true" />
                </a>
                <a
                  href="#"
                  aria-label="LinkedIn"
                  className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors focus-visible:outline-white"
                >
                  <Linkedin className="h-5 w-5" aria-hidden="true" />
                </a>
              </div>
            </div>
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