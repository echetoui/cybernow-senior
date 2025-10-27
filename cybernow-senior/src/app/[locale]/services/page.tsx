import { Shield, Users, UserCheck, Phone, Mail, CheckCircle, Star } from 'lucide-react';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CTAButtons } from '@/components/ui/CTAButtons';
import { generateSchema } from '@/lib/utils';
import { getTranslations } from 'next-intl/server';

// Niveaux de service basés sur les personas des user studies
// TODO: Implement translations using servicesPage.tiers keys from fr.json/en.json
const servicesTiers = [
  {
    id: 'essentiel',
    persona: 'Carmen - L\'Apprenante Sociale',
    icon: Users,
    price: '25',
    popular: false,
    features: [
      'Support téléphonique patient et bienveillant',
      'Guides simplifiés en gros caractères',
      'Ateliers de groupe dans votre région',
      'Aide étape par étape sans jugement',
      'Vérification de vos questions de sécurité',
      'Support email avec réponse garantie'
    ],
    description: 'Pour débuter en toute confiance avec la technologie'
  },
  {
    id: 'confort',
    persona: 'Gisèle - La Prudente Connectée',
    icon: Shield,
    price: '50',
    popular: true,
    features: [
      'Analyse proactive de vos appareils',
      'Formation personnalisée à domicile possible',
      'Support prioritaire (réponse < 2h)',
      'Validation avant tout clic suspect',
      'Protection bancaire renforcée',
      'Suivi régulier de votre sécurité',
      'Conseil pour vos achats en ligne',
      'Support familial inclus'
    ],
    description: 'Protection complète avec accompagnement personnel'
  },
  {
    id: 'expert',
    persona: 'Robert & Jean-Paul - Les Autonomes',
    icon: UserCheck,
    price: '100',
    popular: false,
    features: [
      'Audit complet multi-appareils',
      'Conseiller dédié expert',
      'Solutions avancées (VPN, gestionnaire mots de passe)',
      'Monitoring 24/7 de vos comptes',
      'Support trading et crypto-monnaies',
      'Formation technique approfondie',
      'Consultation stratégie familiale',
      'Priorité absolue sur tous les canaux'
    ],
    description: 'Service premium pour utilisateurs avancés'
  }
];

// Services complémentaires basés sur les besoins identifiés
const additionalServices = [
  {
    icon: Phone,
    title: 'Ligne directe seniors',
    description: 'Numéro dédié sans menu automatisé - Réponse humaine garantie en moins de 2 sonneries',
    highlight: '9h à 17h, 7 jours sur 7'
  },
  {
    icon: Users,
    title: 'Ateliers communautaires',
    description: 'Sessions de groupe dans les résidences et centres communautaires',
    highlight: 'Apprentissage en groupe'
  },
  {
    icon: Mail,
    title: 'Vérification d\'emails suspects',
    description: 'Transférez-nous vos emails douteux pour vérification immédiate',
    highlight: 'Réponse en 30 minutes'
  }
];

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'servicesPage.meta' });

  return {
    title: t('title'),
    description: t('description'),
  };
}

export default function ServicesPage() {

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
          <div className="max-w-7xl mx-auto">
            {/* Page Header */}
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
                Services de Protection Numérique
              </h1>
              <p className="text-xl text-foreground max-w-4xl mx-auto leading-relaxed">
                Des solutions de cybersécurité pensées spécialement pour les aînés. 
                Choisissez le niveau de protection qui correspond à vos besoins et votre expertise.
              </p>
              
              {/* Trust indicators */}
              <div className="flex flex-wrap justify-center gap-6 mt-8 text-sm text-foreground">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-secondary" />
                  <span>Service 100% québécois</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-secondary" />
                  <span>Support humain garanti</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-secondary" />
                  <span>Sans engagement de durée</span>
                </div>
              </div>
            </div>

            {/* Service Tiers */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-center mb-4 text-primary">
                Nos Forfaits de Protection
              </h2>
              <p className="text-center text-foreground mb-12 max-w-3xl mx-auto">
                Basés sur nos études avec plus de 250 aînés québécois, nos services s&apos;adaptent à votre niveau de confort avec la technologie.
              </p>
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {servicesTiers.map((tier) => {
                  const Icon = tier.icon;
                  return (
                    <Card 
                      key={tier.id}
                      className={`relative border-2 transition-all h-full flex flex-col ${
                        tier.popular 
                          ? 'border-secondary shadow-lg scale-105' 
                          : 'border-border hover:border-primary/20 hover:shadow-lg'
                      }`}
                    >
                      {tier.popular && (
                        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                          <div className="bg-secondary text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                            <Star className="h-4 w-4" />
                            Le plus populaire
                          </div>
                        </div>
                      )}
                      
                      <CardHeader className="text-center">
                        <div className="flex justify-center mb-4">
                          <div className={`p-4 rounded-2xl ${
                            tier.popular ? 'bg-secondary/10' : 'bg-primary/10'
                          }`}>
                            <Icon 
                              className={`h-12 w-12 ${
                                tier.popular ? 'text-secondary' : 'text-primary'
                              }`} 
                              aria-hidden="true"
                            />
                          </div>
                        </div>
                        
                        <CardTitle className="text-2xl mb-2">
                          Forfait {tier.id.charAt(0).toUpperCase() + tier.id.slice(1)}
                        </CardTitle>
                        
                        <div className="text-sm text-muted-foreground mb-4">
                          {tier.persona}
                        </div>
                        
                        {/* Pricing temporarily commented - not yet launched
                        <div className="mb-4">
                          <span className="text-4xl font-bold text-primary">{tier.price}$</span>
                          <span className="text-muted-foreground">/mois</span>
                        </div>
                        */}
                        <div className="mb-4">
                          <span className="text-2xl font-bold text-primary">Prix sur demande</span>
                        </div>
                        
                        <p className="text-muted-foreground text-base">
                          {tier.description}
                        </p>
                      </CardHeader>
                      
                      <CardContent className="flex-1 flex flex-col">
                        <div className="flex-1">
                          <h4 className="font-semibold mb-4 text-foreground">Inclus dans ce forfait :</h4>
                          <ul className="space-y-3">
                            {tier.features.map((feature, index) => (
                              <li key={index} className="flex items-start gap-3">
                                <CheckCircle className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                                <span className="text-foreground">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div className="mt-8">
                          <Button
                            asChild
                            className={`w-full min-h-12 ${
                              tier.popular 
                                ? 'bg-secondary hover:bg-secondary/90 text-white' 
                                : 'bg-primary hover:bg-primary/90 text-white'
                            }`}
                          >
                            <Link href="/contact">
                              Choisir ce forfait
                            </Link>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>

            {/* Additional Services */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-center mb-4 text-primary">
                Services Spécialisés Inclus
              </h2>
              <p className="text-center text-foreground mb-12 max-w-3xl mx-auto">
                Tous nos forfaits incluent ces services pensés spécialement pour les aînés.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {additionalServices.map((service, index) => {
                  const Icon = service.icon;
                  return (
                    <Card key={index} className="border-2 border-border hover:border-primary/20 hover:shadow-lg transition-all">
                      <CardHeader className="text-center">
                        <div className="flex justify-center mb-4">
                          <div className="p-4 bg-info/10 rounded-2xl">
                            <Icon className="h-8 w-8 text-info" aria-hidden="true" />
                          </div>
                        </div>
                        <CardTitle className="text-xl text-primary">{service.title}</CardTitle>
                      </CardHeader>
                      
                      <CardContent className="text-center">
                        <p className="text-foreground mb-4">{service.description}</p>
                        <div className="bg-secondary/10 rounded-lg p-3">
                          <span className="text-secondary font-semibold">{service.highlight}</span>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>

            {/* Testimonials Section - Commented out: fake testimonials not credible */}
            {/*
            <div className="mb-16 bg-slate-50 rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-center mb-8 text-primary">
                Ce que disent nos clients
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card className="border-none shadow-md">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center">
                        <span className="text-secondary font-bold text-lg">G</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">Gisèle T., 68 ans</h4>
                        <p className="text-sm text-muted-foreground">Sainte-Foy, Québec</p>
                      </div>
                    </div>
                    <p className="text-foreground italic">
                      &quot;Enfin un service qui me parle dans mes mots ! Je n&apos;ai plus peur de faire mes achats en ligne.
                      L&apos;équipe est très patiente et me rappelle toujours pour vérifier que tout va bien.&quot;
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-md">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center">
                        <span className="text-secondary font-bold text-lg">R</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">Robert G., 72 ans</h4>
                        <p className="text-sm text-muted-foreground">Trois-Rivières</p>
                      </div>
                    </div>
                    <p className="text-foreground italic">
                      &quot;J&apos;étais sceptique au début, mais l&apos;audit gratuit m&apos;a convaincu.
                      Maintenant mes investissements sont mieux protégés et ma femme aussi a appris à se protéger.&quot;
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
            */}

            {/* Call to Action */}
            <div className="text-center bg-primary/5 rounded-2xl p-8 border border-primary/20">
              <h2 className="text-3xl font-bold mb-4 text-primary">
                Prêt à protéger votre vie numérique ?
              </h2>
              <p className="text-lg text-foreground mb-8 max-w-2xl mx-auto">
                Appelez-nous pour une consultation gratuite. Un conseiller spécialisé seniors 
                répondra à toutes vos questions, sans jargon technique.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                <CTAButtons size="lg" layout="horizontal" className="max-w-2xl mx-auto" />
              </div>
              
              <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>Consultation gratuite • Sans engagement • Réponse immédiate</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}