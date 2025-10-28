import { Phone, Clock, AlertTriangle, Users, Mail, MapPin, Headphones, Heart, Shield, CheckCircle } from 'lucide-react';
import { ContactForm } from '@/components/forms/contact-form';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Callout } from '@/components/ui/callout';
import { CTAButtons } from '@/components/ui/CTAButtons';

// Canaux de contact préférés basés sur les user studies
const contactMethods = [
  {
    icon: Phone,
    title: 'Téléphone (Priorité #1)',
    description: 'Ligne directe sans menu automatisé - Un humain répond en moins de 2 sonneries',
    action: 'Appelez maintenant',
    highlight: 'Préféré par 78% des seniors',
    emergency: false,
    primary: true
  },
  {
    icon: Users,
    title: 'Visite en personne',
    description: 'Rencontrons-nous dans nos bureaux ou chez vous si nécessaire',
    action: 'Prendre rendez-vous',
    highlight: 'Préféré par 67% des seniors',
    emergency: false,
    primary: false
  },
  {
    icon: Mail,
    title: 'Email avec suivi',
    description: 'Écrivez-nous, nous vous rappelons dans les 2 heures',
    action: 'Envoyer un message',
    highlight: 'Suivi téléphonique garanti',
    emergency: false,
    primary: false
  }
];

// Moments privilégiés selon les user studies
const availabilitySchedule = [
  { time: '9h à 12h', preference: '64%', label: 'Matinée (Préféré)' },
  { time: '13h à 17h', preference: '31%', label: 'Après-midi' },
  { time: 'Urgences', preference: '24/7', label: 'Fin de semaine' }
];

// Situations d'urgence courantes
const emergencyScenarios = [
  'Email ou SMS suspect reçu',
  'Demande d\'argent inattendue',
  'Compte bancaire possiblement compromis',
  'Pop-up de "virus détecté" sur votre écran',
  'Appel se faisant passer pour votre banque'
];

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  
  const title = locale === 'fr' 
    ? 'Contact | Ligne directe seniors | Cybernow Seniors'
    : 'Contact | Senior direct line | Cybernow Seniors';
    
  const description = locale === 'fr'
    ? 'Contactez notre ligne directe seniors : réponse humaine garantie, sans menu automatisé. Support patient spécialisé aînés du Québec.'
    : 'Contact our senior direct line: guaranteed human response, no automated menu. Patient support specialized for Quebec seniors.';

  return {
    title,
    description,
  };
}

export default function ContactPage() {

  return (
    <div className="py-12 lg:py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Page Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
              Contactez-Nous Sans Attente
            </h1>
            <p className="text-xl text-foreground max-w-4xl mx-auto leading-relaxed">
              Une équipe humaine dédiée aux aînés vous répond. Pas de menu automatisé, 
              pas de robot - juste des personnes patientes qui comprennent vos besoins.
            </p>
            
            {/* Trust indicators */}
            <div className="flex flex-wrap justify-center gap-6 mt-8 text-sm text-foreground">
              <div className="flex items-center gap-2">
                <Headphones className="h-5 w-5 text-secondary" />
                <span>Réponse humaine en &lt; 2 min</span>
              </div>
              <div className="flex items-center gap-2">
                <Heart className="h-5 w-5 text-secondary" />
                <span>Équipe spécialisée seniors</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-secondary" />
                <span>Disponible 7 jours sur 7</span>
              </div>
            </div>
          </div>

          {/* Emergency Contact Section */}
          <div className="mb-16">
            <Callout variant="danger" icon={AlertTriangle} className="border-2 border-red-200">
              <div className="text-center">
                <h2 className="text-2xl font-bold mb-4 text-red-800">
                  🚨 Situation Urgente ? Appelez Immédiatement
                </h2>
                <p className="mb-6 text-red-700 text-lg">
                  Si vous pensez être victime d&apos;une arnaque EN CE MOMENT ou si quelqu&apos;un vous demande 
                  de l&apos;argent par téléphone, email ou internet :
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h3 className="font-semibold mb-3 text-red-800">Appelez-nous D&apos;ABORD :</h3>
                    <Button
                      asChild
                      size="lg"
                      className="w-full min-h-16 text-xl bg-red-600 hover:bg-red-700 text-white"
                    >
                      <a href="tel:+1-581-705-0399">
                        <Phone className="h-6 w-6 mr-3" />
                        581-705-0399
                      </a>
                    </Button>
                  </div>
                  
                  <div className="text-left">
                    <h4 className="font-semibold mb-2 text-red-800">Situations urgentes courantes :</h4>
                    <ul className="text-sm text-red-700 space-y-1">
                      {emergencyScenarios.map((scenario, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <AlertTriangle className="h-4 w-4 mt-0.5 text-red-600 flex-shrink-0" />
                          <span>{scenario}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <p className="text-red-700 font-semibold">
                  ⚠️ En cas de doute, ARRÊTEZ tout et appelez-nous. Il vaut mieux prévenir que guérir !
                </p>
              </div>
            </Callout>
          </div>

          {/* Main Contact Methods */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-4 text-primary">
              Choisissez Votre Méthode de Contact Préférée
            </h2>
            <p className="text-center text-foreground mb-12 max-w-3xl mx-auto">
              Basé sur nos études avec 250+ aînés québécois, voici les moyens de contact 
              dans l&apos;ordre de préférence de notre clientèle :
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {contactMethods.map((method, index) => {
                const Icon = method.icon;
                return (
                  <Card 
                    key={index} 
                    className={`border-2 transition-all h-full ${
                      method.primary 
                        ? 'border-secondary shadow-lg scale-105 bg-secondary/5' 
                        : 'border-border hover:border-primary/20 hover:shadow-lg'
                    }`}
                  >
                    {method.primary && (
                      <div className="bg-secondary text-white text-center py-2 rounded-t-lg">
                        <span className="text-sm font-semibold">⭐ RECOMMANDÉ</span>
                      </div>
                    )}
                    
                    <CardHeader className="text-center">
                      <div className="flex justify-center mb-4">
                        <div className={`p-4 rounded-2xl ${
                          method.primary ? 'bg-secondary/20' : 'bg-primary/10'
                        }`}>
                          <Icon className={`h-12 w-12 ${
                            method.primary ? 'text-secondary' : 'text-primary'
                          }`} />
                        </div>
                      </div>
                      <CardTitle className="text-xl text-primary">{method.title}</CardTitle>
                      <div className="text-sm text-secondary font-semibold">
                        {method.highlight}
                      </div>
                    </CardHeader>
                    
                    <CardContent className="flex-1 flex flex-col">
                      <p className="text-foreground mb-6 flex-1">{method.description}</p>
                      
                      <Button
                        asChild
                        className={`w-full min-h-12 ${
                          method.primary 
                            ? 'bg-secondary hover:bg-secondary/90 text-white' 
                            : 'bg-primary hover:bg-primary/90 text-white'
                        }`}
                      >
                        {method.title.includes('Téléphone') ? (
                          <a href="tel:+1-581-705-0399">{method.action}</a>
                        ) : method.title.includes('personne') ? (
                          <a href="tel:+1-581-705-0399">Appelez pour rendez-vous</a>
                        ) : (
                          <a href="#contact-form">{method.action}</a>
                        )}
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Availability Schedule */}
          <div className="mb-16">
            <Card className="bg-gradient-to-br from-primary/5 to-transparent border-2 border-primary/20">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold text-center mb-6 text-primary">
                  Nos Heures d&apos;Ouverture Adaptées à Vous
                </h2>
                <p className="text-center text-foreground mb-8 max-w-3xl mx-auto">
                  Nous avons adapté nos horaires selon les préférences exprimées par nos clients seniors.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {availabilitySchedule.map((schedule, index) => (
                    <div key={index} className="text-center">
                      <div className="text-2xl font-bold text-secondary mb-2">
                        {schedule.preference}
                      </div>
                      <div className="text-lg font-semibold text-primary mb-1">
                        {schedule.time}
                      </div>
                      <div className="text-foreground">
                        {schedule.label}
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="text-center mt-8 p-4 bg-white rounded-lg border border-primary/20">
                  <p className="text-foreground">
                    <Clock className="h-5 w-5 inline mr-2 text-secondary" />
                    <strong>Lundi au Dimanche :</strong> 9h à 17h • 
                    <strong> Urgences :</strong> 24h/24, 7j/7
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div id="contact-form">
              <Card className="border-2 border-border">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">
                    Envoyez-Nous Un Message
                  </CardTitle>
                  <p className="text-foreground">
                    Remplissez ce formulaire et nous vous rappellerons dans les 2 heures 
                    (ou le matin suivant si vous écrivez le soir).
                  </p>
                </CardHeader>
                <CardContent>
                  <ContactForm />
                </CardContent>
              </Card>
            </div>

            {/* Contact Information & Location */}
            <div className="space-y-6">
              {/* Phone Contact */}
              <Card className="border-2 border-secondary/20">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-3 text-primary">
                    <Phone className="h-6 w-6 text-secondary" />
                    Ligne Directe Seniors
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-foreground">
                    Notre promesse : Un humain bienveillant répond en moins de 2 sonneries, 
                    sans menu automatisé complexe.
                  </p>
                  
                  <Button
                    asChild
                    size="lg"
                    className="w-full min-h-16 text-xl bg-secondary hover:bg-secondary/90 text-white"
                  >
                    <a href="tel:+1-581-705-0399">
                      <Phone className="h-6 w-6 mr-3" />
                      581-705-0399
                    </a>
                  </Button>

                  <div className="bg-secondary/10 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle className="h-5 w-5 text-secondary" />
                      <span className="font-semibold text-foreground">Ce que vous pouvez attendre :</span>
                    </div>
                    <ul className="text-sm text-foreground space-y-1 ml-7">
                      <li>• Accueil chaleureux en français</li>
                      <li>• Écoute patiente de votre situation</li>
                      <li>• Explications simples, sans jargon</li>
                      <li>• Solutions adaptées à vos besoins</li>
                      <li>• Suivi personnalisé garanti</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              {/* Other Contact Methods */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-primary">Autres Moyens de Contact</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Mail className="h-5 w-5 text-secondary mt-1" />
                    <div>
                      <h4 className="font-semibold text-foreground">Courriel</h4>
                      <a
                        href="mailto:info@cybernow.io"
                        className="text-primary hover:text-primary/80 transition-colors"
                      >
                        info@cybernow.io
                      </a>
                      <p className="text-sm text-muted-foreground">Réponse garantie avec suivi téléphonique</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-secondary mt-1" />
                    <div>
                      <h4 className="font-semibold text-foreground">Bureaux Québec</h4>
                      <p className="text-foreground">1234 Rue de la Cybersécurité</p>
                      <p className="text-foreground">Québec, QC G1A 1A1</p>
                      <p className="text-sm text-muted-foreground">Rendez-vous sur demande</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Users className="h-5 w-5 text-secondary mt-1" />
                    <div>
                      <h4 className="font-semibold text-foreground">Ateliers Communautaires</h4>
                      <p className="text-foreground">Résidences pour aînés • Centres communautaires</p>
                      <p className="text-sm text-muted-foreground">Formations de groupe disponibles</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Final CTA */}
          <div className="mt-16 text-center bg-gradient-to-br from-primary/5 via-secondary/5 to-primary/5 rounded-2xl p-8 border border-primary/20">
            <h2 className="text-3xl font-bold mb-4 text-primary">
              Une Question ? N&apos;Hésitez Pas !
            </h2>
            <p className="text-lg text-foreground mb-8 max-w-2xl mx-auto">
              Aucune question n&apos;est &quot;stupide&quot;. Notre équipe est là pour vous rassurer et vous guider, 
              quel que soit votre niveau avec la technologie.
            </p>
            
            <CTAButtons size="lg" layout="horizontal" className="max-w-2xl mx-auto mb-6" />
            
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <Heart className="h-4 w-4" />
              <span>Patience garantie • Écoute bienveillante • Expertise locale</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}