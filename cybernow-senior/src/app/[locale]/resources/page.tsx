import { BookOpen, Video, Users, Download, Phone, CheckCircle, Star, Award, Clock } from 'lucide-react';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CTAButtons } from '@/components/ui/CTAButtons';

// Ressources éducatives adaptées aux besoins identifiés dans les user studies
const learningCategories = [
  {
    id: 'guides-basics',
    icon: BookOpen,
    title: 'Guides de Base',
    description: 'Guides étape par étape avec gros caractères et langage simple',
    persona: 'Parfait pour Carmen (Apprenante Sociale)',
    difficulty: 'Débutant',
    resources: [
      'Reconnaître les emails suspects',
      'Créer des mots de passe sécuritaires', 
      'Naviguer internet en toute sécurité',
      'Protéger ses informations bancaires',
      'Identifier les arnaques courantes'
    ]
  },
  {
    id: 'video-tutorials',
    icon: Video,
    title: 'Vidéos Tutoriels',
    description: 'Vidéos courtes avec possibilité de pause et de replay',
    persona: 'Adapté pour Gisèle (Prudente Connectée)',
    difficulty: 'Intermédiaire',
    resources: [
      'Comment vérifier un site web',
      'Utiliser son téléphone en sécurité',
      'Faire ses achats en ligne sans risque',
      'Configurer la sécurité sur iPad',
      'Reconnaître les faux appels'
    ]
  },
  {
    id: 'workshops',
    icon: Users,
    title: 'Ateliers de Groupe',
    description: 'Apprentissage social avec d\'autres seniors de votre région',
    persona: 'Idéal pour Carmen et apprentissage communautaire',
    difficulty: 'Tous niveaux',
    resources: [
      'Ateliers en résidence',
      'Formations bibliothèque', 
      'Groupes d\'entraide',
      'Sessions questions-réponses',
      'Démonstrations pratiques'
    ]
  },
  {
    id: 'advanced-resources',
    icon: Award,
    title: 'Ressources Avancées',
    description: 'Documentation technique pour les utilisateurs expérimentés',
    persona: 'Pour Robert et Jean-Paul (Autonomes)',
    difficulty: 'Avancé',
    resources: [
      'Audits de sécurité personnels',
      'Configuration VPN',
      'Gestionnaires de mots de passe',
      'Sécurité multi-appareils',
      'Protection des investissements'
    ]
  }
];

// Types de ressources disponibles
const resourceTypes = [
  {
    icon: Download,
    title: 'Guides PDF',
    description: 'Téléchargeables et imprimables',
    count: '25+ guides'
  },
  {
    icon: Video,
    title: 'Vidéos',
    description: 'Courtes et faciles à suivre',
    count: '40+ vidéos'
  },
  {
    icon: Users,
    title: 'Ateliers',
    description: 'Sessions de groupe régulières',
    count: 'Chaque semaine'
  },
  {
    icon: Phone,
    title: 'Support Direct',
    description: 'Aide personnalisée',
    count: '7j/7 disponible'
  }
];

// Témoignages sur l'apprentissage
const learningTestimonials = [
  {
    name: 'Carmen B., 74 ans',
    location: 'Verdun',
    quote: 'Les ateliers de groupe m&apos;ont donné confiance. Maintenant j&apos;aide mes voisines !',
    type: 'Ateliers'
  },
  {
    name: 'Gisèle T., 68 ans', 
    location: 'Sainte-Foy',
    quote: 'Les guides sont parfaits - gros caractères, explications claires, pas de jargon.',
    type: 'Guides PDF'
  },
  {
    name: 'Robert G., 72 ans',
    location: 'Trois-Rivières', 
    quote: 'Enfin des ressources qui ne me traitent pas comme un enfant !',
    type: 'Ressources avancées'
  }
];

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  
  const title = locale === 'fr' 
    ? 'Ressources Éducatives | Apprentissage Cybersécurité Seniors | Cybernow'
    : 'Educational Resources | Seniors Cybersecurity Learning | Cybernow';
    
  const description = locale === 'fr'
    ? 'Ressources d\'apprentissage adaptées aux aînés : guides, vidéos, ateliers. Apprenez la cybersécurité à votre rythme avec support humain.'
    : 'Learning resources adapted for seniors: guides, videos, workshops. Learn cybersecurity at your own pace with human support.';

  return {
    title,
    description,
  };
}

export default function ResourcesPage() {

  return (
    <div className="py-12 lg:py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Page Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
              Apprenez à Votre Rythme
            </h1>
            <p className="text-xl text-foreground max-w-4xl mx-auto leading-relaxed">
              Des ressources d&apos;apprentissage pensées pour les aînés. Guides simples, vidéos claires, 
              ateliers de groupe et support humain - tout pour vous sentir en sécurité avec la technologie.
            </p>
            
            {/* Trust indicators */}
            <div className="flex flex-wrap justify-center gap-6 mt-8 text-sm text-foreground">
              <div className="flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-secondary" />
                <span>Langage simplifié</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-secondary" />
                <span>Apprentissage social</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-secondary" />
                <span>Support humain inclus</span>
              </div>
            </div>
          </div>

          {/* Resource Types Overview */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-4 text-primary">
              4 Façons d&apos;Apprendre Selon Vos Préférences
            </h2>
            <p className="text-center text-foreground mb-12 max-w-3xl mx-auto">
              Nos études montrent que chaque senior a sa façon préférée d&apos;apprendre. 
              Choisissez ce qui vous convient le mieux !
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {resourceTypes.map((type, index) => {
                const Icon = type.icon;
                return (
                  <Card key={index} className="text-center border-2 border-border hover:border-secondary/20 hover:shadow-lg transition-all">
                    <CardContent className="p-6">
                      <div className="flex justify-center mb-4">
                        <div className="p-3 bg-secondary/10 rounded-2xl">
                          <Icon className="h-8 w-8 text-secondary" />
                        </div>
                      </div>
                      <h3 className="text-lg font-semibold mb-2 text-primary">{type.title}</h3>
                      <p className="text-foreground text-sm mb-3">{type.description}</p>
                      <div className="text-secondary font-semibold text-sm">{type.count}</div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Learning Categories */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12 text-primary">
              Ressources Par Niveau d&apos;Expérience
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {learningCategories.map((category) => {
                const Icon = category.icon;
                return (
                  <Card key={category.id} className="border-2 border-border hover:border-primary/20 hover:shadow-lg transition-all">
                    <CardHeader>
                      <div className="flex items-center gap-4 mb-4">
                        <div className="p-3 bg-primary/10 rounded-2xl">
                          <Icon className="h-8 w-8 text-primary" />
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-xl text-primary">{category.title}</CardTitle>
                          <div className="text-sm text-secondary font-semibold mt-1">
                            Niveau : {category.difficulty}
                          </div>
                        </div>
                      </div>
                      
                      <p className="text-foreground">{category.description}</p>
                      <div className="text-sm text-muted-foreground italic">
                        {category.persona}
                      </div>
                    </CardHeader>
                    
                    <CardContent>
                      <h4 className="font-semibold mb-3 text-foreground">Ressources disponibles :</h4>
                      <ul className="space-y-2 mb-6">
                        {category.resources.map((resource, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-secondary mt-1 flex-shrink-0" />
                            <span className="text-foreground text-sm">{resource}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <Button 
                        asChild 
                        className="w-full bg-primary hover:bg-primary/90 text-white"
                      >
                        <Link href="/contact">
                          Accéder aux ressources
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Workshop Schedule */}
          <div className="mb-16">
            <Card className="bg-gradient-to-br from-secondary/5 to-transparent border-2 border-secondary/20">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold text-center mb-6 text-primary">
                  Ateliers de Groupe Cette Semaine
                </h2>
                <p className="text-center text-foreground mb-8 max-w-3xl mx-auto">
                  Apprentissage social dans un environnement bienveillant. 
                  Posez vos questions, partagez vos expériences !
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-secondary mb-2">Mardi 10h</div>
                    <div className="text-lg font-semibold text-primary mb-2">Emails Suspects</div>
                    <div className="text-foreground">Bibliothèque Gabrielle-Roy</div>
                    <div className="text-sm text-muted-foreground">Québec</div>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-2xl font-bold text-secondary mb-2">Jeudi 14h</div>
                    <div className="text-lg font-semibold text-primary mb-2">Achats en Ligne</div>
                    <div className="text-foreground">Centre communautaire</div>
                    <div className="text-sm text-muted-foreground">Montréal</div>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-2xl font-bold text-secondary mb-2">Samedi 10h</div>
                    <div className="text-lg font-semibold text-primary mb-2">Questions Ouvertes</div>
                    <div className="text-foreground">En ligne (Zoom)</div>
                    <div className="text-sm text-muted-foreground">Partout au Québec</div>
                  </div>
                </div>
                
                <div className="text-center mt-8">
                  <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white">
                    <a href="tel:1-800-CYBERNOW">Réserver ma place</a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Learning Testimonials - Commented out: fake testimonials not credible */}
          {/*
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8 text-primary">
              L&apos;Apprentissage Qui Transforme
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {learningTestimonials.map((testimonial, index) => (
                <Card key={index} className="border-none shadow-md">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-4">
                      {Array.from({length: 5}, (_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>

                    <p className="text-foreground italic mb-4">
                      &quot;{testimonial.quote}&quot;
                    </p>

                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-secondary/20 rounded-full flex items-center justify-center">
                        <span className="text-secondary font-bold">
                          {testimonial.name.split(' ')[0][0]}
                        </span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                        <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                      </div>
                    </div>

                    <div className="mt-3 text-xs text-secondary font-semibold">
                      {testimonial.type}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          */}

          {/* Learning Principles */}
          <div className="mb-16">
            <Card className="bg-gradient-to-br from-primary/5 to-transparent border-2 border-primary/20">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold text-center mb-8 text-primary">
                  Notre Approche Pédagogique
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-secondary">✨ Principes d&apos;apprentissage</h3>
                    <ul className="space-y-3 text-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-secondary mt-0.5" />
                        <span>À votre rythme, sans pression</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-secondary mt-0.5" />
                        <span>Répétition bienvenue et encouragée</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-secondary mt-0.5" />
                        <span>Aucune question &quot;stupide&quot;</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-secondary mt-0.5" />
                        <span>Exemples concrets du quotidien</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-secondary">🎯 Support continu</h3>
                    <ul className="space-y-3 text-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-secondary mt-0.5" />
                        <span>Aide humaine toujours disponible</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-secondary mt-0.5" />
                        <span>Suivi personnalisé de vos progrès</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-secondary mt-0.5" />
                        <span>Communauté d&apos;entraide</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-secondary mt-0.5" />
                        <span>Certification de vos acquis</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Call to Action */}
          <div className="text-center bg-primary/5 rounded-2xl p-8 border border-primary/20">
            <h2 className="text-3xl font-bold mb-4 text-primary">
              Prêt à Commencer Votre Apprentissage ?
            </h2>
            <p className="text-lg text-foreground mb-8 max-w-2xl mx-auto">
              Appelez-nous pour discuter de vos objectifs d&apos;apprentissage. 
              Nous vous orienterons vers les meilleures ressources pour vous.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <CTAButtons size="lg" layout="horizontal" className="max-w-2xl mx-auto" />
            </div>
            
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <Clock className="h-4 w-4" />
              <span>Première session d&apos;orientation gratuite • Support continu inclus</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}