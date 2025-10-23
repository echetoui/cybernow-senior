"use client";

import { useTranslations } from 'next-intl';
import { ColoredIcon } from '@/components/ui/ColoredIcon';
import { CTAButtons } from '@/components/ui/CTAButtons';
import { Logo } from '@/components/ui/logo';

export function HeroSection() {
  const t = useTranslations();

  const badges = [
    {
      text: t('home.hero.badges.local'),
      iconName: 'users' as const
    },
    {
      text: t('home.hero.badges.noJargon'),
      iconName: 'message-square' as const
    },
    {
      text: t('home.hero.badges.available'),
      iconName: 'clock' as const
    },
  ];

  return (
    <section
      className="bg-gradient-to-br from-soft-beige via-white to-slate-50 py-12 md:py-16 lg:py-24"
      aria-labelledby="hero-title"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo imposant - Responsive */}
          <div className="mb-6 md:mb-8 flex justify-center">
            <Logo 
              size="lg" 
              variant="default" 
              showText={false}
              className="transform hover:scale-105 transition-transform duration-300"
            />
          </div>
          
          {/* Main Headlines - Mobile optimized */}
          <h1 
            id="hero-title"
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 md:mb-6 text-primary leading-tight px-2"
          >
            {t('home.hero.title')}
          </h1>
          
          {/* Subtitle - Mobile-first typography */}
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-8 md:mb-10 leading-relaxed max-w-3xl mx-auto px-4 sm:px-2">
            {t('home.hero.subtitle')}
          </p>

          {/* Primary Actions - Horizontal layout */}
          <div className="mb-8 md:mb-12 px-4 sm:px-0">
            <CTAButtons 
              size="lg"
              layout="horizontal"
              className="max-w-2xl mx-auto"
            />
          </div>

          {/* Trust Badges - Mobile stacked */}
          <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center gap-3 sm:gap-4 md:gap-6 px-2">
            {badges.map((badge, index) => {
              return (
                <div 
                  key={index}
                  className="flex items-center justify-center gap-3 text-foreground bg-white rounded-full px-4 py-3 sm:px-5 shadow-md hover:shadow-lg transition-shadow min-h-[44px] touch-manipulation border border-border"
                >
                  <ColoredIcon 
                    name={badge.iconName}
                    size="sm"
                    decorative={true}
                  />
                  <span className="text-base sm:text-sm font-medium whitespace-nowrap">{badge.text}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}