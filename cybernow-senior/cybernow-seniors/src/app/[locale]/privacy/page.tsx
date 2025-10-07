import { useTranslations } from 'next-intl';
import { formatDate } from '@/lib/utils';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  
  const title = locale === 'fr' 
    ? 'Politique de confidentialité | Protection de vos données'
    : 'Privacy Policy | Protection of your data';
    
  const description = locale === 'fr'
    ? 'Notre politique de confidentialité explique comment nous collectons, utilisons et protégeons vos informations personnelles.'
    : 'Our privacy policy explains how we collect, use and protect your personal information.';

  return {
    title,
    description,
  };
}

export default function PrivacyPage() {
  const t = useTranslations();
  const lastUpdated = '2024-01-01';

  return (
    <div className="py-12 lg:py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Page Header */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {t('privacy.title')}
            </h1>
            <p className="text-muted-foreground">
              {t('privacy.lastUpdated', { date: formatDate(lastUpdated) })}
            </p>
          </div>

          {/* Privacy Policy Content */}
          <div className="prose prose-lg max-w-none">
            <div className="space-y-12">
              {/* Overview */}
              <section>
                <h2 className="text-2xl font-semibold mb-4">
                  {t('privacy.sections.overview.title')}
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {t('privacy.sections.overview.content')}
                </p>
              </section>

              {/* Information Collection */}
              <section>
                <h2 className="text-2xl font-semibold mb-4">
                  {t('privacy.sections.collection.title')}
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {t('privacy.sections.collection.content')}
                </p>
              </section>

              {/* Data Usage */}
              <section>
                <h2 className="text-2xl font-semibold mb-4">
                  {t('privacy.sections.usage.title')}
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {t('privacy.sections.usage.content')}
                </p>
              </section>

              {/* Security */}
              <section>
                <h2 className="text-2xl font-semibold mb-4">
                  {t('privacy.sections.security.title')}
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {t('privacy.sections.security.content')}
                </p>
              </section>

              {/* Your Rights */}
              <section>
                <h2 className="text-2xl font-semibold mb-4">
                  {t('privacy.sections.rights.title')}
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {t('privacy.sections.rights.content')}
                </p>
              </section>

              {/* Contact */}
              <section className="bg-slate-50 rounded-2xl p-8">
                <h2 className="text-2xl font-semibold mb-4">
                  {t('privacy.sections.contact.title')}
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {t('privacy.sections.contact.content', { 
                    phone: t('common.phone'),
                    email: t('common.email')
                  })}
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}