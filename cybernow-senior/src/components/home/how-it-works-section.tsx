"use client";

import { useTranslations } from 'next-intl';
import { Phone, ShieldCheck, CheckCircle } from 'lucide-react';
import { ColoredIcon } from '@/components/ui/ColoredIcon';

const steps = [
  {
    number: 1,
    iconName: 'phone' as const,
    key: 'call',
    color: 'text-sky-blue'
  },
  {
    number: 2,
    iconName: 'shield' as const,
    key: 'diagnostic',
    color: 'text-sage-green'
  },
  {
    number: 3,
    iconName: 'check-circle' as const,
    key: 'protection',
    color: 'text-success-green'
  },
];

export function HowItWorksSection() {
  const t = useTranslations();

  return (
    <section
      className="py-16 lg:py-20 bg-soft-beige"
      aria-labelledby="how-it-works-title"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Titre principal */}
          <div className="text-center mb-12">
            <h2
              id="how-it-works-title"
              className="text-3xl md:text-4xl font-bold mb-4 text-primary"
            >
              {t('home.howItWorks.title')}
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t('home.howItWorks.subtitle')}
            </p>
          </div>

          {/* Les 3 étapes */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
            {steps.map((step, index) => {
              return (
                <div
                  key={step.key}
                  className="relative flex flex-col items-center text-center bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all group"
                >
                  {/* Numéro de l'étape */}
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-warm rounded-full flex items-center justify-center shadow-md">
                    <span className="text-white font-bold text-xl">
                      {step.number}
                    </span>
                  </div>

                  {/* Icône */}
                  <div className="mb-6 p-4 bg-gradient-to-br from-sky-blue/10 to-sage-green/10 rounded-2xl group-hover:scale-110 transition-transform">
                    <ColoredIcon
                      name={step.iconName}
                      size="lg"
                    />
                  </div>

                  {/* Titre de l'étape */}
                  <h3 className="text-xl font-semibold mb-3 text-primary">
                    {t(`home.howItWorks.steps.${step.key}.title`)}
                  </h3>

                  {/* Description */}
                  <p className="text-base text-muted-foreground leading-relaxed">
                    {t(`home.howItWorks.steps.${step.key}.description`)}
                  </p>

                  {/* Flèche de connexion (sauf dernière étape) */}
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute -right-4 top-1/2 transform -translate-y-1/2 text-sage-green">
                      <svg
                        className="w-8 h-8"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Message de réassurance */}
          <div className="mt-12 text-center">
            <p className="text-lg text-secondary font-medium bg-white rounded-xl py-4 px-6 inline-block shadow-md">
              ✨ {t('home.howItWorks.reassurance')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
