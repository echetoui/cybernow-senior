// import { useTranslations } from 'next-intl';
import { HeroSection } from '@/components/home/hero-section';
import { WhyChooseUsSection } from '@/components/home/why-choose-us-section';
import { ServicesSection } from '@/components/home/services-section';
import { FinalCtaSection } from '@/components/home/final-cta-section';
import { generateSchema } from '@/lib/utils';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  
  const title = locale === 'fr' 
    ? 'Accueil | Votre bouclier numérique, tout simplement'
    : 'Home | Your digital shield, simply';
    
  const description = locale === 'fr'
    ? 'Protection numérique adaptée aux aînés du Québec. Un conseiller patient, local et accessible pour vous protéger au quotidien.'
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
      
      <HeroSection />
      <WhyChooseUsSection />
      <ServicesSection />
      <FinalCtaSection />
    </>
  );
}