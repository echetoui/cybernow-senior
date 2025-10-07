"use client";

import { useTranslations } from 'next-intl';
import { Shield, Lock, HelpCircle, AlertTriangle, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const services = [
  {
    icon: Shield,
    key: 'proactiveShield',
    href: '/services/proactive-shield',
  },
  {
    icon: Lock,
    key: 'privacyConsent',
    href: '/services/privacy-consent',
  },
  {
    icon: HelpCircle,
    key: 'onlineHelp',
    href: '/services/online-help',
  },
  {
    icon: AlertTriangle,
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
              const Icon = service.icon;
              return (
                <Card 
                  key={service.key}
                  className="border-2 hover:border-brand/20 hover:shadow-lg transition-all group"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-brand/10 rounded-xl group-hover:bg-brand/20 transition-colors flex-shrink-0">
                        <Icon 
                          className="h-6 w-6 text-brand" 
                          aria-hidden="true"
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
                          className="inline-flex items-center text-brand hover:text-brand/80 font-medium focus-visible:outline-brand rounded px-1 py-1"
                        >
                          {t('common.learnMore')}
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
              className="min-h-12 px-8 border-brand text-brand hover:bg-brand hover:text-white focus-visible:outline-brand"
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