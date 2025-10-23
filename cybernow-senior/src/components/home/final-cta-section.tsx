"use client";

import { useTranslations } from 'next-intl';
import { CTAButtons } from '@/components/ui/CTAButtons';

export function FinalCtaSection() {
  const t = useTranslations();

  return (
    <section
      className="py-16 lg:py-20 bg-gradient-warm text-white relative overflow-hidden"
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

          <CTAButtons 
            size="lg"
            layout="horizontal"
            className="max-w-lg mx-auto"
          />

          <div className="mt-8 text-sm text-white/80">
            <p>{t('contact.phoneInfo.schedule')}</p>
          </div>
        </div>
      </div>
    </section>
  );
}