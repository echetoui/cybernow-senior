import { useTranslations } from 'next-intl';
import { Phone, Clock, AlertTriangle } from 'lucide-react';
import { ContactForm } from '@/components/forms/contact-form';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Callout } from '@/components/ui/callout';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  
  const title = locale === 'fr' 
    ? 'Contact | Nous contacter'
    : 'Contact | Contact us';
    
  const description = locale === 'fr'
    ? 'Contactez notre équipe de cybersécurité pour aînés. Appelez-nous ou envoyez un message pour obtenir de l\'aide.'
    : 'Contact our cybersecurity team for seniors. Call us or send a message to get help.';

  return {
    title,
    description,
  };
}

export default function ContactPage() {
  const t = useTranslations();

  return (
    <div className="py-12 lg:py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {t('contact.title')}
            </h1>
            <p className="text-xl text-muted-foreground">
              {t('contact.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">
                    {t('contact.form.title')}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ContactForm />
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              {/* Phone Contact */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-3">
                    <Phone className="h-6 w-6 text-brand" aria-hidden="true" />
                    {t('contact.phoneInfo.title')}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    {t('contact.phoneInfo.description')}
                  </p>
                  
                  <Button
                    asChild
                    size="lg"
                    className="w-full min-h-14 text-xl-button bg-brand hover:bg-brand/90"
                  >
                    <a href={`tel:${t('common.phone')}`}>
                      <Phone className="h-5 w-5 mr-3" aria-hidden="true" />
                      {t('common.phone')}
                    </a>
                  </Button>

                  <div className="flex items-start gap-3 text-sm">
                    <Clock className="h-5 w-5 text-muted-foreground mt-0.5" aria-hidden="true" />
                    <div>
                      <p className="font-medium">{t('contact.phoneInfo.hours')}</p>
                      <p className="text-muted-foreground">{t('contact.phoneInfo.schedule')}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Emergency Contact */}
              <Callout variant="danger" icon={AlertTriangle}>
                <h3 className="font-semibold mb-2">
                  {t('contact.emergency.title')}
                </h3>
                <p className="mb-4">
                  {t('contact.emergency.description')}
                </p>
                <Button
                  asChild
                  variant="destructive"
                  size="sm"
                  className="min-h-11"
                >
                  <a href={`tel:${t('common.phone')}`}>
                    <Phone className="h-4 w-4 mr-2" aria-hidden="true" />
                    {t('buttons.callNow')}
                  </a>
                </Button>
              </Callout>

              {/* Additional Contact Info */}
              <Card>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-medium mb-2">Courriel</h3>
                      <a 
                        href={`mailto:${t('common.email')}`}
                        className="text-brand hover:text-brand/80 transition-colors focus-visible:outline-brand rounded px-1 py-1"
                      >
                        {t('common.email')}
                      </a>
                    </div>
                    
                    <div>
                      <h3 className="font-medium mb-2">Adresse</h3>
                      <p className="text-muted-foreground">
                        {t('common.address')}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}