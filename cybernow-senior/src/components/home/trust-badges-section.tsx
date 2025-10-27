"use client";

// Logos de partenaires/certifications (placeholders - à remplacer par vraies images)
const trustBadges = [
  {
    name: 'Gouvernement du Québec',
    logoPath: '/images/partners/quebec-gov.svg',
    description: 'Partenaire officiel'
  },
  {
    name: 'FADOQ',
    logoPath: '/images/partners/fadoq.svg',
    description: 'Réseau reconnu'
  },
  {
    name: 'Cyber sécurité Canada',
    logoPath: '/images/partners/cyber-canada.svg',
    description: 'Certifié'
  },
  {
    name: 'AQDR',
    logoPath: '/images/partners/aqdr.svg',
    description: 'Membre affilié'
  },
  {
    name: 'ISO 27001',
    logoPath: '/images/partners/iso-27001.svg',
    description: 'Certifié sécurité'
  },
];

const statistics = [
  {
    number: 'Nouveau',
    label: 'Service en lancement',
    icon: '🚀',
  },
  {
    number: '100%',
    label: 'Engagement qualité',
    icon: '✅',
  },
  {
    number: 'Gratuit',
    label: 'Première consultation',
    icon: '💬',
  },
  {
    number: 'Local',
    label: 'Équipe québécoise',
    icon: '🍁',
  },
];

export function TrustBadgesSection() {
  return (
    <section className="py-16 md:py-20 bg-white border-y border-border">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Titre */}
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-primary">
              Ils nous font confiance
            </h2>
            <p className="text-lg text-muted-foreground">
              Reconnus et recommandés par les organismes québécois pour aînés
            </p>
          </div>

          {/* Logos partenaires */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center mb-16">
            {trustBadges.map((badge, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center p-6 hover:bg-slate-50 rounded-xl transition-colors group"
              >
                {/* Placeholder pour logo - à remplacer par vraies images */}
                <div className="w-24 h-24 bg-gradient-to-br from-slate-100 to-slate-200 rounded-xl flex items-center justify-center mb-3 group-hover:shadow-lg transition-shadow">
                  <div className="text-4xl text-slate-400">🏛️</div>
                  {/* Futur: <Image src={badge.logoPath} alt={badge.name} width={96} height={96} /> */}
                </div>
                <p className="text-xs text-center text-muted-foreground font-medium">
                  {badge.description}
                </p>
              </div>
            ))}
          </div>

          {/* Statistiques */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {statistics.map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 bg-gradient-to-br from-soft-beige to-white rounded-2xl shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="text-4xl mb-3">{stat.icon}</div>
                <p className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.number}
                </p>
                <p className="text-sm text-muted-foreground font-medium">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          {/* Message de confiance */}
          <div className="mt-16 max-w-3xl mx-auto">
            <div className="relative bg-gradient-to-br from-soft-beige to-white rounded-2xl p-8 shadow-lg border-2 border-sage-green/20">
              <div className="text-center">
                <div className="text-4xl mb-4">🤝</div>
                <h3 className="text-2xl font-bold text-primary mb-4">
                  Notre engagement envers vous
                </h3>
                <p className="text-lg text-secondary leading-relaxed">
                  Nous sommes une nouvelle entreprise québécoise dédiée exclusivement aux aînés.
                  Pas de fausses promesses : juste un accompagnement humain, patient et transparent.
                  Votre première consultation est gratuite et sans engagement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
