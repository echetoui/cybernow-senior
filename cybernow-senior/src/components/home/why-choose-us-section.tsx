"use client";

import { useTranslations } from 'next-intl';
import { Card, CardContent } from '@/components/ui/card';
import { ColoredIcon } from '@/components/ui/ColoredIcon';

const features = [
  {
    iconName: 'heart-handshake' as const,
    key: 'humanHelp',
  },
  {
    iconName: 'map-pin' as const,
    key: 'localService',
  },
  {
    iconName: 'accessibility' as const,
    key: 'inclusive',
  },
];

export function WhyChooseUsSection() {
  const t = useTranslations();

  return (
    <section 
      className="py-16 lg:py-20"
      aria-labelledby="why-choose-us-title"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 
            id="why-choose-us-title"
            className="text-3xl md:text-4xl font-bold text-center mb-4"
          >
            {t('home.whyChooseUs.title')}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {features.map((feature) => {
              return (
                <Card 
                  key={feature.key}
                  className="text-center border-2 hover:border-primary/20 transition-colors group"
                >
                  <CardContent className="p-8">
                    <div className="mb-6 flex justify-center">
                      <div className="p-3 bg-white rounded-2xl shadow-lg group-hover:shadow-xl transition-all">
                        <ColoredIcon 
                          name={feature.iconName}
                          size="lg"
                        />
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-semibold mb-4">
                      {t(`home.whyChooseUs.${feature.key}.title`)}
                    </h3>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      {t(`home.whyChooseUs.${feature.key}.description`)}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}