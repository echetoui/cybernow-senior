"use client";

import { useTranslations } from 'next-intl';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ColoredIcon } from '@/components/ui/ColoredIcon';

const services = [
  {
    iconName: 'heart-handshake' as const, // Main guidant une autre main → Soutien et pédagogie
    key: 'proactiveShield',
    href: '/services/proactive-shield',
  },
  {
    iconName: 'shield' as const, // Utilise shield pour privacy
    key: 'privacyConsent',
    href: '/services/privacy-consent',
  },
  {
    iconName: 'help-circle' as const,
    key: 'onlineHelp',
    href: '/services/online-help',
  },
  {
    iconName: 'alert-triangle' as const,
    key: 'scamSupport',
    href: '/services/scam-support',
  },
];

export function ServicesSection() {
  const t = useTranslations();

  return (
    <section 
      className="py-16 lg:py-20 bg-slate-50"
      aria-labelledby="services-title"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 
              id="services-title"
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              {t('home.services.title')}
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t('home.services.subtitle')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {services.map((service) => {
              return (
                <Card 
                  key={service.key}
                  className="border-2 hover:border-primary/20 hover:shadow-lg transition-all group"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-white rounded-xl shadow-md group-hover:shadow-lg transition-all flex-shrink-0">
                        <ColoredIcon 
                          name={service.iconName}
                          size="md"
                        />
                      </div>
                      
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold mb-2">
                          {t(`home.services.${service.key}.title`)}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed mb-4">
                          {t(`home.services.${service.key}.description`)}
                        </p>
                        
                        <Link
                          href={service.href}
                          className="inline-flex items-center text-primary hover:text-primary/80 font-medium focus-visible:outline-primary rounded px-1 py-1"
                          aria-label={`${t('common.learnMore')} - ${t(`home.services.${service.key}.title`)}`}
                        >
                          {t('common.learnMore')} - {t(`home.services.${service.key}.title`)}
                          <ArrowRight className="h-4 w-4 ml-1" aria-hidden="true" />
                        </Link>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="text-center">
            <Button
              asChild
              variant="outline"
              size="lg"
              className="min-h-12 px-8 border-primary text-primary hover:bg-gradient-cta hover:text-white focus-visible:outline-primary"
            >
              <Link href="/services">
                {t('buttons.getAllServices')}
                <ArrowRight className="h-5 w-5 ml-2" aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}