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
    number: '500+',
    label: 'Familles protégées',
    icon: '👨‍👩‍👧‍👦',
  },
  {
    number: '15 ans',
    label: 'D&apos;expérience moyenne',
    icon: '🛡️',
  },
  {
    number: '98%',
    label: 'Satisfaction client',
    icon: '⭐',
  },
  {
    number: '24/7',
    label: 'Support disponible',
    icon: '📞',
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

          {/* Citation testimoniale */}
          <div className="mt-16 max-w-3xl mx-auto">
            <blockquote className="relative">
              <div className="absolute -top-4 -left-4 text-6xl text-sage-green/20">
                &quot;
              </div>
              <p className="text-xl md:text-2xl text-center text-secondary font-medium italic px-8">
                CyberNow Seniors nous a permis d&apos;offrir un service essentiel à nos membres.
                Leur approche bienveillante fait toute la différence.
              </p>
              <footer className="mt-6 text-center">
                <p className="font-semibold text-primary">Marie-Claude Bertrand</p>
                <p className="text-sm text-muted-foreground">
                  Directrice, Réseau FADOQ Montréal
                </p>
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
