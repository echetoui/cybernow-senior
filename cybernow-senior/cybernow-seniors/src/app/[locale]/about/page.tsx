import { useTranslations } from 'next-intl';
import { Heart, Users, Award, Phone, MessageCircle } from 'lucide-react';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const values = [
  {
    icon: Heart,
    key: 'patience',
  },
  {
    icon: Users,
    key: 'respect',
  },
  {
    icon: Award,
    key: 'expertise',
  },
];

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  
  const title = locale === 'fr' 
    ? 'À propos | Notre mission et nos valeurs'
    : 'About | Our mission and values';
    
  const description = locale === 'fr'
    ? 'Découvrez CyberNow Seniors, votre partenaire de confiance pour la sécurité numérique. Notre mission : rendre la technologie accessible aux aînés du Québec.'
    : 'Discover CyberNow Seniors, your trusted partner for digital security. Our mission: making technology accessible to Quebec seniors.';

  return {
    title,
    description,
  };
}

export default function AboutPage() {
  const t = useTranslations();

  return (
    <div className="py-12 lg:py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Page Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {t('about.title')}
            </h1>
            <p className="text-xl text-muted-foreground">
              {t('about.subtitle')}
            </p>
          </div>

          {/* Mission Section */}
          <section className="mb-16">
            <Card className="border-2 border-brand/20 bg-gradient-to-br from-brand/5 to-transparent">
              <CardContent className="p-8 md:p-12 text-center">
                <h2 className="text-3xl font-bold mb-6 text-brand">
                  {t('about.mission.title')}
                </h2>
                <p className="text-lg leading-relaxed text-muted-foreground max-w-3xl mx-auto">
                  {t('about.mission.description')}
                </p>
              </CardContent>
            </Card>
          </section>

          {/* Values Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">
              {t('about.values.title')}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((value) => {
                const Icon = value.icon;
                return (
                  <Card key={value.key} className="text-center border-2 hover:border-brand/20 transition-colors group">
                    <CardContent className="p-8">
                      <div className="mb-6 flex justify-center">
                        <div className="p-4 bg-brand/10 rounded-2xl group-hover:bg-brand/20 transition-colors">
                          <Icon 
                            className="h-8 w-8 text-brand" 
                            aria-hidden="true"
                          />
                        </div>
                      </div>
                      
                      <h3 className="text-xl font-semibold mb-4">
                        {t(`about.values.${value.key}.title`)}
                      </h3>
                      
                      <p className="text-muted-foreground leading-relaxed">
                        {t(`about.values.${value.key}.description`)}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </section>

          {/* Team Section */}
          <section className="mb-16">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">
                {t('about.team.title')}
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                {t('about.team.description')}
              </p>
            </div>

            {/* Team highlights could go here */}
            <Card className="bg-slate-50">
              <CardContent className="p-8 text-center">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                  <div>
                    <div className="text-3xl font-bold text-brand mb-2">15+</div>
                    <p className="text-muted-foreground">Années d&apos;expérience</p>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-brand mb-2">500+</div>
                    <p className="text-muted-foreground">Aînés accompagnés</p>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-brand mb-2">24/7</div>
                    <p className="text-muted-foreground">Support disponible</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* CTA Section */}
          <section className="text-center bg-brand text-white rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl font-bold mb-4">
              Prêt à protéger votre vie numérique ?
            </h2>
            <p className="text-xl mb-8 text-brand-foreground/90">
              Notre équipe est là pour vous accompagner à chaque étape.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="min-h-12 px-8 bg-white text-brand hover:bg-white/90"
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
                className="min-h-12 px-8 border-white text-white hover:bg-white hover:text-brand"
              >
                <Link href="/contact">
                  <MessageCircle className="h-5 w-5 mr-3" aria-hidden="true" />
                  {t('buttons.contactUs')}
                </Link>
              </Button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}