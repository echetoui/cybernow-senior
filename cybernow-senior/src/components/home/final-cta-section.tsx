"use client";

import { useTranslations } from 'next-intl';
import { Phone, MessageCircle } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function FinalCtaSection() {
  const t = useTranslations();

  return (
    <section 
      className="py-16 lg:py-20 bg-gradient-cta text-white"
      aria-labelledby="cta-title"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 
            id="cta-title"
            className="text-3xl md:text-4xl font-heading font-bold mb-4 text-white"
          >
            {t('home.cta.title')}
          </h2>
          
          <p className="text-xl mb-8 text-white/90 font-sans">
            {t('home.cta.subtitle')}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="min-h-14 px-8 text-xl-button bg-white text-primary hover:bg-white/90 focus-visible:outline-white"
            >
              <a href={`tel:${t('common.phone')}`}>
                <Phone className="h-5 w-5 mr-3" aria-hidden="true" />
                {t('buttons.callNow')}
              </a>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="min-h-14 px-8 text-xl-button border-white text-white hover:bg-white hover:text-primary focus-visible:outline-white"
            >
              <Link href="/contact">
                <MessageCircle className="h-5 w-5 mr-3" aria-hidden="true" />
                {t('buttons.contactUs')}
              </Link>
            </Button>
          </div>

          <div className="mt-8 text-sm text-white/80">
            <p>{t('contact.phoneInfo.schedule')}</p>
          </div>
        </div>
      </div>
    </section>
  );
}