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
    <footer className="bg-slate-900 text-white" role="contentinfo">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="lg:col-span-1">
            <LogoLink 
              href="/" 
              size="sm"
              variant="white"
              ariaLabel="Accueil CyberNow Seniors"
              className="mb-4"
            />
            
            <p className="text-slate-200 text-body leading-relaxed mb-4">
              {t('about.mission.description')}
            </p>

            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-accent" aria-hidden="true" />
                <a 
                  href={`tel:${t('common.phone')}`}
                  className="text-slate-200 hover:text-white transition-colors focus-visible:outline-white rounded px-1"
                >
                  {t('common.phone')}
                </a>
              </div>
              
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-accent" aria-hidden="true" />
                <a 
                  href={`mailto:${t('common.email')}`}
                  className="text-slate-200 hover:text-white transition-colors focus-visible:outline-white rounded px-1"
                >
                  {t('common.email')}
                </a>
              </div>
              
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-accent" aria-hidden="true" />
                <span className="text-slate-200">{t('common.address')}</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">{t('footer.quickLinks')}</h3>
            <nav aria-label="Liens rapides">
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.key}>
                    <Link
                      href={link.href}
                      className="text-slate-200 hover:text-white transition-colors focus-visible:outline-white rounded px-1 py-1 block"
                    >
                      {t(`navigation.${link.key}`)}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">{t('footer.legal')}</h3>
            <nav aria-label="Mentions légales">
              <ul className="space-y-2">
                {legalLinks.map((link) => (
                  <li key={link.key}>
                    <Link
                      href={link.href}
                      className="text-slate-200 hover:text-white transition-colors focus-visible:outline-white rounded px-1 py-1 block"
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
            <h3 className="font-semibold text-lg mb-4">{t('footer.newsletter.title')}</h3>
            <p className="text-slate-200 text-sm mb-4">
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
                className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-400 focus:border-accent"
                aria-label={t('footer.newsletter.placeholder')}
              />
              <Button 
                type="submit"
                variant="secondary"
                className="w-full min-h-11"
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
                  className="p-2 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors focus-visible:outline-white"
                >
                  <Facebook className="h-5 w-5" aria-hidden="true" />
                </a>
                <a
                  href="#"
                  aria-label="Twitter"
                  className="p-2 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors focus-visible:outline-white"
                >
                  <Twitter className="h-5 w-5" aria-hidden="true" />
                </a>
                <a
                  href="#"
                  aria-label="LinkedIn"
                  className="p-2 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors focus-visible:outline-white"
                >
                  <Linkedin className="h-5 w-5" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 text-center">
          <p className="text-slate-300 text-sm">
            {t('footer.tagline')}
          </p>
          <p className="text-slate-400 text-xs mt-2">
            © 2024 CyberNow Seniors. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}