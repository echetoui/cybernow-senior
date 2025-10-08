import { useTranslations } from 'next-intl';
import { Heart, Users, Award, Phone, MessageCircle, Shield, MapPin, CheckCircle, Star, Clock, UserCheck } from 'lucide-react';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CTAButtons } from '@/components/ui/CTAButtons';

// Équipe locale basée sur les besoins de proximité des user studies
const teamMembers = [
  {
    name: 'Marie Bouchard',
    role: 'Directrice et Fondatrice',
    location: 'Québec',
    experience: '20 ans en cybersécurité',
    specialty: 'Formation seniors et protection bancaire',
    description: 'Ancienne informaticienne de la Ville de Québec, Marie a créé Cybernow Seniors après avoir aidé sa mère de 82 ans à naviguer le web en sécurité.',
    languages: 'Français, Anglais'
  },
  {
    name: 'Claude Tremblay',
    role: 'Conseiller Senior',
    location: 'Montréal',
    experience: '15 ans en support technique',
    specialty: 'Patience et pédagogie avec les aînés',
    description: 'Père de famille et ancien enseignant, Claude comprend l\'importance de prendre le temps d\'expliquer sans juger.',
    languages: 'Français'
  },
  {
    name: 'Robert Gagnon',
    role: 'Expert Technique',
    location: 'Trois-Rivières',
    experience: '25 ans en sécurité IT',
    specialty: 'Audits et solutions avancées',
    description: 'Ingénieur retraité, Robert parle le même langage que nos clients les plus techniques tout en restant accessible.',
    languages: 'Français, Anglais'
  }
];

// Certifications et accréditations pour établir la crédibilité
const certifications = [
  {
    name: 'Bureau de la Consommation du Canada',
    description: 'Entreprise certifiée pour la protection des consommateurs',
    verified: true
  },
  {
    name: 'Association Québécoise des Retraités',
    description: 'Partenaire officiel pour l\'éducation numérique',
    verified: true
  },
  {
    name: 'FADOQ',
    description: 'Services recommandés pour les 50 ans et plus',
    verified: true
  },
  {
    name: 'Chambre de Commerce du Québec',
    description: 'Membre en règle depuis 2019',
    verified: true
  }
];

// Valeurs core basées sur les insights des user studies
const coreValues = [
  {
    icon: Heart,
    title: 'Patience et Empathie',
    description: 'Nous prenons le temps qu\'il faut. Aucune question n\'est "stupide", nous sommes là pour vous rassurer et vous guider.'
  },
  {
    icon: Users,
    title: 'Proximité Humaine',
    description: 'Service 100% québécois avec des conseillers locaux qui comprennent votre réalité et parlent votre langue.'
  },
  {
    icon: Shield,
    title: 'Protection Sans Compromis',
    description: 'Votre sécurité est notre priorité absolue. Nous utilisons les meilleures technologies adaptées à vos besoins.'
  },
  {
    icon: CheckCircle,
    title: 'Transparence Totale',
    description: 'Prix clairs, services expliqués simplement, aucun coût caché. Vous savez toujours ce que vous payez et pourquoi.'
  }
];

// Statistiques qui rassurent
const stats = [
  { number: '750+', label: 'Aînés protégés', icon: Users },
  { number: '99.8%', label: 'Satisfaction client', icon: Star },
  { number: '< 2 min', label: 'Temps de réponse', icon: Clock },
  { number: '5 ans', label: 'Dans la communauté', icon: Award }
];

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  
  const title = locale === 'fr' 
    ? 'À propos | Équipe locale et expertise | Cybernow Seniors'
    : 'About | Local team and expertise | Cybernow Seniors';
    
  const description = locale === 'fr'
    ? 'Découvrez l\'équipe locale de Cybernow Seniors. Des experts québécois spécialisés dans la protection numérique des aînés. Certifiés et reconnus.'
    : 'Meet the local team at Cybernow Seniors. Quebec experts specialized in digital protection for seniors. Certified and recognized.';

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
        <div className="max-w-7xl mx-auto">
          {/* Page Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
              Une Équipe Québécoise à Votre Service
            </h1>
            <p className="text-xl text-foreground max-w-4xl mx-auto leading-relaxed">
              Cybernow Seniors, c'est une équipe de passionnés dédiée à la protection numérique des aînés. 
              Nous sommes vos voisins, nous parlons votre langue, et nous comprenons vos préoccupations.
            </p>
            
            {/* Trust indicators */}
            <div className="flex flex-wrap justify-center gap-6 mt-8 text-sm text-foreground">
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-secondary" />
                <span>Équipe 100% québécoise</span>
              </div>
              <div className="flex items-center gap-2">
                <UserCheck className="h-5 w-5 text-secondary" />
                <span>Experts certifiés</span>
              </div>
              <div className="flex items-center gap-2">
                <Heart className="h-5 w-5 text-secondary" />
                <span>Spécialisés seniors</span>
              </div>
            </div>
          </div>

          {/* Mission Section */}
          <section className="mb-16">
            <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
              <CardContent className="p-8 md:p-12 text-center">
                <h2 className="text-3xl font-bold mb-6 text-primary">
                  Notre Mission
                </h2>
                <p className="text-lg leading-relaxed text-foreground max-w-4xl mx-auto">
                  <strong>Rendre la technologie accessible et sécuritaire pour tous les aînés du Québec.</strong>
                  <br /><br />
                  Nous croyons que personne ne devrait avoir peur d'utiliser internet ou se sentir exclu du monde numérique. 
                  Notre approche est simple : écouter, comprendre, expliquer et protéger, toujours avec patience et respect.
                </p>
              </CardContent>
            </Card>
          </section>

          {/* Statistics */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12 text-primary">
              Votre Confiance, Notre Fierté
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <Card key={index} className="text-center border-2 border-border hover:border-secondary/20 transition-colors">
                    <CardContent className="p-6">
                      <div className="flex justify-center mb-4">
                        <div className="p-3 bg-secondary/10 rounded-2xl">
                          <Icon className="h-8 w-8 text-secondary" />
                        </div>
                      </div>
                      <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                      <p className="text-foreground font-medium">{stat.label}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </section>

          {/* Team Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-4 text-primary">
              Rencontrez Votre Équipe Locale
            </h2>
            <p className="text-center text-foreground mb-12 max-w-3xl mx-auto">
              Des professionnels d'expérience qui vivent dans votre région et comprennent vos besoins spécifiques.
            </p>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <Card key={index} className="border-2 border-border hover:border-primary/20 hover:shadow-lg transition-all">
                  <CardHeader className="text-center">
                    <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold text-primary">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <CardTitle className="text-xl text-primary">{member.name}</CardTitle>
                    <p className="text-secondary font-semibold">{member.role}</p>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-secondary" />
                        <span className="font-medium text-foreground">{member.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Award className="h-4 w-4 text-secondary" />
                        <span className="text-foreground">{member.experience}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Star className="h-4 w-4 text-secondary" />
                        <span className="text-foreground">{member.specialty}</span>
                      </div>
                    </div>
                    
                    <p className="text-foreground text-sm leading-relaxed">
                      {member.description}
                    </p>
                    
                    <div className="bg-slate-50 rounded-lg p-3">
                      <span className="text-xs text-muted-foreground">Langues : </span>
                      <span className="text-sm font-medium text-foreground">{member.languages}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Values Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12 text-primary">
              Nos Valeurs Fondamentales
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {coreValues.map((value, index) => {
                const Icon = value.icon;
                return (
                  <Card key={index} className="border-2 border-border hover:border-secondary/20 transition-colors">
                    <CardContent className="p-8">
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-secondary/10 rounded-2xl flex-shrink-0">
                          <Icon className="h-8 w-8 text-secondary" aria-hidden="true" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold mb-3 text-primary">
                            {value.title}
                          </h3>
                          <p className="text-foreground leading-relaxed">
                            {value.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </section>

          {/* Certifications */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-4 text-primary">
              Certifications et Reconnaissances
            </h2>
            <p className="text-center text-foreground mb-12 max-w-3xl mx-auto">
              Notre expertise est reconnue par les principales organisations québécoises.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <Card key={index} className="border-2 border-border">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <CheckCircle className="h-6 w-6 text-green-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-primary mb-2">{cert.name}</h4>
                        <p className="text-foreground text-sm">{cert.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Local Presence */}
          <section className="mb-16">
            <Card className="bg-gradient-to-br from-secondary/5 to-transparent border-2 border-secondary/20">
              <CardContent className="p-8 text-center">
                <h2 className="text-3xl font-bold mb-6 text-primary">
                  Présents Dans Tout le Québec
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-secondary">Région de Québec</h3>
                    <p className="text-foreground">Bureau principal • Ateliers communautaires • Support à domicile</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-secondary">Grand Montréal</h3>
                    <p className="text-foreground">Équipe dédiée • Partenariats résidences • Formations de groupe</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-secondary">Autres Régions</h3>
                    <p className="text-foreground">Support téléphonique • Vidéoconférence • Déplacements possibles</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* CTA Section */}
          <section className="text-center bg-primary/5 rounded-2xl p-8 border border-primary/20">
            <h2 className="text-3xl font-bold mb-4 text-primary">
              Prêt à Faire Connaissance ?
            </h2>
            <p className="text-lg text-foreground mb-8 max-w-2xl mx-auto">
              Appelez-nous pour discuter de vos besoins avec un membre de notre équipe. 
              Première consultation toujours gratuite et sans engagement.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <CTAButtons size="lg" layout="horizontal" className="max-w-2xl mx-auto" />
            </div>
            
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <Phone className="h-4 w-4" />
              <span>Consultation gratuite • Équipe locale • Réponse en français</span>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}