"use client";

import { useTranslations } from 'next-intl';
import { Phone, ArrowRight, Check } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function HeroSection() {
  const t = useTranslations();

  const badges = [
    t('home.hero.badges.local'),
    t('home.hero.badges.noJargon'),
    t('home.hero.badges.available'),
  ];

  return (
    <section 
      className="bg-gradient-to-br from-slate-50 to-white py-16 lg:py-24"
      aria-labelledby="hero-title"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Headlines */}
          <h1 
            id="hero-title"
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-brand leading-tight"
          >
            {t('home.hero.title')}
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto">
            {t('home.hero.subtitle')}
          </p>

          {/* Primary Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              asChild
              size="lg"
              className="min-h-14 px-8 text-xl-button bg-brand hover:bg-brand/90 focus-visible:outline-brand"
            >
              <a href={`tel:${t('common.phone')}`}>
                <Phone className="h-5 w-5 mr-3" aria-hidden="true" />
                {t('buttons.callNow')}
              </a>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="min-h-14 px-8 text-xl-button border-brand text-brand hover:bg-brand hover:text-white focus-visible:outline-brand"
            >
              <Link href="/contact">
                {t('buttons.getCallback')}
                <ArrowRight className="h-5 w-5 ml-3" aria-hidden="true" />
              </Link>
            </Button>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            {badges.map((badge, index) => (
              <div 
                key={index}
                className="flex items-center gap-2 text-muted-foreground bg-white rounded-full px-4 py-2 shadow-sm"
              >
                <Check className="h-4 w-4 text-green-600" aria-hidden="true" />
                <span className="text-sm font-medium">{badge}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}