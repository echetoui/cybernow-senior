// import { useTranslations } from 'next-intl';
import { HeroSection } from '@/components/home/hero-section';
import { HowItWorksSection } from '@/components/home/how-it-works-section';
import { WhyChooseUsSection } from '@/components/home/why-choose-us-section';
import { TrustBadgesSection } from '@/components/home/trust-badges-section';
import { ServicesSection } from '@/components/home/services-section';
import { TestimonialsSection } from '@/components/home/testimonials-section';
import { FinalCtaSection } from '@/components/home/final-cta-section';
import { generateSchema } from '@/lib/utils';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  
  const title = locale === 'fr' 
    ? 'Accueil | Restez connectés, en toute tranquillité'
    : 'Home | Your digital shield, simply';
    
  const description = locale === 'fr'
    ? 'Avec Cybernow Seniors, bénéficiez d\'un accompagnement humain et local pour sécuriser vos appareils et éviter les arnaques en ligne.'
    : 'Digital protection adapted for Quebec seniors. A patient, local and accessible advisor to protect you daily.';

  return {
    title,
    description,
  };
}

export default function HomePage() {
  const organizationSchema = generateSchema('Organization', {});
  
  return (
    <>
      {/* Structured data for homepage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            name: 'CyberNow Seniors - Accueil',
            description: 'Services de cybersécurité pour les aînés au Québec',
            url: process.env.NEXT_PUBLIC_SITE_URL,
            mainEntity: organizationSchema,
          }),
        }}
      />

      <main role="main" id="main-content">
        <HeroSection />
        <HowItWorksSection />
        <TrustBadgesSection />
        <WhyChooseUsSection />
        <ServicesSection />
        <TestimonialsSection />
        <FinalCtaSection />
      </main>
    </>
  );
}