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
      className="bg-gradient-to-br from-slate-50 to-white py-16 lg:py-24"
      aria-labelledby="hero-title"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo imposant */}
          <div className="mb-8 flex justify-center">
            <Logo 
              size="xl" 
              variant="default" 
              showText={false}
              className="transform hover:scale-105 transition-transform duration-300"
            />
          </div>
          
          {/* Main Headlines */}
          <h1 
            id="hero-title"
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-primary leading-tight"
          >
            {t('home.hero.title')}
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground mb-8 leading-relaxed max-w-6xl mx-auto text-center px-4 lg:whitespace-nowrap">
            {t('home.hero.subtitle')}
          </p>

          {/* Primary Actions - Style moderne avec data-slot */}
          <div className="mb-12">
            <CTAButtons 
              size="lg"
              layout="horizontal"
              className="max-w-md mx-auto"
            />
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            {badges.map((badge, index) => {
              return (
                <div 
                  key={index}
                  className="flex items-center gap-3 text-muted-foreground bg-white rounded-full px-5 py-3 shadow-md hover:shadow-lg transition-shadow"
                >
                  <ColoredIcon 
                    name={badge.iconName}
                    size="sm"
                  />
                  <span className="text-sm font-medium">{badge.text}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}