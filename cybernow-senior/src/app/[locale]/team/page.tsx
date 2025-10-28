import { TeamMemberCard } from '@/components/team/team-member-card';
import { CTAButtons } from '@/components/ui/CTAButtons';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  const title = locale === 'fr'
    ? 'Notre équipe | Des experts bienveillants à votre service'
    : 'Our Team | Caring experts at your service';

  const description = locale === 'fr'
    ? 'Rencontrez notre équipe de conseillers en cybersécurité, formés pour accompagner les aînés avec patience et bienveillance.'
    : 'Meet our team of cybersecurity advisors, trained to support seniors with patience and kindness.';

  return {
    title,
    description,
  };
}

export default async function TeamPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  // Données de l'équipe (à terme, pourrait venir d'un CMS)
  const teamMembers = [
    {
      key: 'jean',
      imagePath: '/images/team/jean-tremblay.jpg', // Placeholder - à remplacer par vraies photos
    },
    {
      key: 'marie',
      imagePath: '/images/team/marie-gagnon.jpg',
    },
    {
      key: 'pierre',
      imagePath: '/images/team/pierre-lavoie.jpg',
    },
    {
      key: 'sophie',
      imagePath: '/images/team/sophie-roy.jpg',
    },
  ];

  return (
    <main role="main" id="main-content">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-soft-beige via-white to-slate-50 py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
              {locale === 'fr' ? 'Notre équipe' : 'Our Team'}
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              {locale === 'fr'
                ? 'Des professionnels passionnés et patients, formés pour vous accompagner dans votre sécurité numérique.'
                : 'Passionate and patient professionals, trained to support you in your digital security.'}
            </p>

            {/* Statistiques */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <p className="text-4xl font-bold text-primary mb-2">15+</p>
                <p className="text-sm text-muted-foreground">
                  {locale === 'fr' ? "Années d'expérience moyenne" : 'Years average experience'}
                </p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <p className="text-4xl font-bold text-success-green mb-2">500+</p>
                <p className="text-sm text-muted-foreground">
                  {locale === 'fr' ? 'Familles accompagnées' : 'Families supported'}
                </p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <p className="text-4xl font-bold text-trust-blue mb-2">100%</p>
                <p className="text-sm text-muted-foreground">
                  {locale === 'fr' ? 'Satisfaction client' : 'Client satisfaction'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {teamMembers.map((member) => (
                <TeamMemberCard
                  key={member.key}
                  name={locale === 'fr' ? `team.${member.key}.name` : `team.${member.key}.name`}
                  role={locale === 'fr' ? `team.${member.key}.role` : `team.${member.key}.role`}
                  bio={locale === 'fr' ? `team.${member.key}.bio` : `team.${member.key}.bio`}
                  experience={locale === 'fr' ? `team.${member.key}.experience` : `team.${member.key}.experience`}
                  email={`${member.key}@cybernow.io`}
                  phone="+1-581-705-0399"
                  imagePath={member.imagePath}
                  specialties={
                    locale === 'fr'
                      ? [`team.${member.key}.specialty1`, `team.${member.key}.specialty2`, `team.${member.key}.specialty3`]
                      : [`team.${member.key}.specialty1`, `team.${member.key}.specialty2`, `team.${member.key}.specialty3`]
                  }
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Valeurs de l'équipe */}
      <section className="py-16 md:py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
              {locale === 'fr' ? 'Nos valeurs' : 'Our Values'}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-warm rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                    <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-primary">
                  {locale === 'fr' ? 'Patience' : 'Patience'}
                </h3>
                <p className="text-base text-muted-foreground">
                  {locale === 'fr'
                    ? 'Nous prenons le temps nécessaire pour bien expliquer chaque étape.'
                    : 'We take the time needed to explain every step clearly.'}
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-peach rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-primary">
                  {locale === 'fr' ? 'Bienveillance' : 'Kindness'}
                </h3>
                <p className="text-base text-muted-foreground">
                  {locale === 'fr'
                    ? 'Aucune question n\'est bête. Nous sommes là pour vous aider, sans jugement.'
                    : 'No question is silly. We\'re here to help, without judgment.'}
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-success-green rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-primary">
                  {locale === 'fr' ? 'Expertise' : 'Expertise'}
                </h3>
                <p className="text-base text-muted-foreground">
                  {locale === 'fr'
                    ? 'Une équipe certifiée et formée aux dernières menaces cybernétiques.'
                    : 'A certified team trained on the latest cybersecurity threats.'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 md:py-20 bg-gradient-warm text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {locale === 'fr'
                ? 'Prêt à rencontrer notre équipe ?'
                : 'Ready to meet our team?'}
            </h2>
            <p className="text-xl mb-8 text-white/90">
              {locale === 'fr'
                ? 'Appelez-nous pour discuter avec un conseiller bienveillant.'
                : 'Call us to speak with a caring advisor.'}
            </p>
            <CTAButtons size="lg" layout="horizontal" />
          </div>
        </div>
      </section>
    </main>
  );
}
