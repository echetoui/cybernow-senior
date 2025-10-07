import { useTranslations } from 'next-intl';
import { Shield, Lock, HelpCircle, AlertTriangle, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { generateSchema } from '@/lib/utils';

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

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  
  const title = locale === 'fr' 
    ? 'Services | Solutions de cybersécurité pour aînés'
    : 'Services | Cybersecurity solutions for seniors';
    
  const description = locale === 'fr'
    ? 'Découvrez nos services de protection numérique adaptés aux aînés : surveillance proactive, gestion de la vie privée, aide aux démarches et support en cas d\'arnaque.'
    : 'Discover our digital protection services adapted for seniors: proactive monitoring, privacy management, online assistance and scam support.';

  return {
    title,
    description,
  };
}

export default function ServicesPage() {
  const t = useTranslations();

  const servicesSchema = generateSchema('Service', {
    name: 'Services de cybersécurité pour aînés',
    description: 'Protection numérique complète adaptée aux besoins des aînés',
  });

  return (
    <>
      {/* Structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(servicesSchema),
        }}
      />

      <div className="py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Page Header */}
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                {t('services.title')}
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                {t('services.subtitle')}
              </p>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <Card 
                    key={service.key}
                    className="border-2 hover:border-primary/20 hover:shadow-lg transition-all group h-full"
                  >
                    <CardHeader>
                      <div className="flex items-center gap-4 mb-4">
                        <div className="p-4 bg-primary/10 rounded-2xl group-hover:bg-primary/20 transition-colors">
                          <Icon 
                            className="h-8 w-8 text-primary" 
                            aria-hidden="true"
                          />
                        </div>
                        <CardTitle className="text-2xl">
                          {t(`services.${service.key}.title`)}
                        </CardTitle>
                      </div>
                    </CardHeader>
                    
                    <CardContent className="space-y-6">
                      <p className="text-muted-foreground text-lg leading-relaxed">
                        {t(`services.${service.key}.description`)}
                      </p>

                      {/* Features List */}
                      <div>
                        <h4 className="font-semibold mb-3">Fonctionnalités incluses :</h4>
                        <ul className="space-y-2">
                          {Array.from({ length: 4 }, (_, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" aria-hidden="true" />
                              <span className="text-sm text-muted-foreground">
                                {t(`services.${service.key}.features.${i}`)}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <Button
                        asChild
                        variant="outline"
                        className="w-full min-h-12 border-primary text-primary hover:bg-gradient-cta hover:text-white"
                      >
                        <Link href={service.href}>
                          {t('common.learnMore')}
                          <ArrowRight className="h-4 w-4 ml-2" aria-hidden="true" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Call to Action */}
            <div className="text-center bg-slate-50 rounded-2xl p-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                {t('home.cta.title')}
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                {t('home.cta.subtitle')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="min-h-12 px-8 bg-gradient-cta hover:bg-gradient-cta/90"
                >
                  <a href={`tel:${t('common.phone')}`}>
                    {t('buttons.callNow')}
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="min-h-12 px-8 border-primary text-primary hover:bg-gradient-cta hover:text-white"
                >
                  <Link href="/contact">
                    {t('buttons.contactUs')}
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}