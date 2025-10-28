import { useTranslations } from 'next-intl';
import { AlertTriangle, Calendar, Tag, Shield, Phone, Eye, MessageSquare, Lightbulb, AlertCircle, CheckCircle, MessageCircle } from 'lucide-react';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Callout } from '@/components/ui/callout';
import { alerts } from '@/lib/data/alerts';
import { formatDate } from '@/lib/utils';

const riskLevelColors = {
  low: 'bg-green-100 text-green-800 border-green-200',
  medium: 'bg-yellow-100 text-yellow-800 border-yellow-200',
  high: 'bg-orange-100 text-orange-800 border-orange-200',
  critical: 'bg-red-100 text-red-800 border-red-200',
};

const riskLevelAriaLabels = {
  low: 'Sécurisé : risque faible',
  medium: 'Attention : risque modéré',
  high: 'Alerte : risque élevé',
  critical: 'Danger : risque critique',
};

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  
  const title = locale === 'fr' 
    ? 'Alertes | Alertes aux arnaques et sécurité'
    : 'Alerts | Scam and security alerts';
    
  const description = locale === 'fr'
    ? 'Restez informé des dernières tentatives d\'escroquerie ciblant les aînés. Apprenez à reconnaître et éviter les arnaques en ligne.'
    : 'Stay informed about the latest scam attempts targeting seniors. Learn to recognize and avoid online scams.';

  return {
    title,
    description,
  };
}

export default function AlertsPage() {
  const t = useTranslations();

  return (
    <div className="py-12 lg:py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {t('alerts.title')}
            </h1>
            <p className="text-xl text-muted-foreground">
              {t('alerts.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              {alerts.map((alert) => (
                <Card key={alert.id} className="border-l-4 border-l-red-500">
                  <CardHeader>
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <CardTitle className="text-xl mb-2">
                          {alert.title.fr}
                        </CardTitle>

                        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" aria-hidden="true" />
                            <span>{t('alerts.date', { date: formatDate(alert.publishedAt) })}</span>
                          </div>

                          <div className="flex items-center gap-1">
                            <Tag className="h-4 w-4" aria-hidden="true" />
                            <span>{t('alerts.category', { category: alert.category.fr })}</span>
                          </div>
                        </div>
                      </div>

                      <div
                        className={`px-3 py-1 rounded-full text-xs font-medium border ${riskLevelColors[alert.riskLevel]}`}
                        aria-label={riskLevelAriaLabels[alert.riskLevel]}
                        role="status"
                      >
                        {t(`alerts.riskLevels.${alert.riskLevel}`)}
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-6">
                    {/* Description */}
                    <p className="text-muted-foreground leading-relaxed text-base">
                      {alert.description.fr}
                    </p>

                    {/* Examples Section */}
                    {alert.details?.fr.examples && alert.details.fr.examples.length > 0 && (
                      <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-lg">
                        <div className="flex items-start gap-3">
                          <Lightbulb className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                          <div className="flex-1">
                            <h3 className="font-semibold text-blue-900 mb-3">
                              Exemples de messages frauduleux
                            </h3>
                            <ul className="space-y-2">
                              {alert.details.fr.examples.map((example, idx) => (
                                <li key={idx} className="text-sm text-blue-800 italic">
                                  &quot;{example}&quot;
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Warning Signs Section */}
                    {alert.details?.fr.warningSignes && alert.details.fr.warningSignes.length > 0 && (
                      <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-lg">
                        <div className="flex items-start gap-3">
                          <AlertCircle className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                          <div className="flex-1">
                            <h3 className="font-semibold text-amber-900 mb-3">
                              Signes d&apos;alerte à surveiller
                            </h3>
                            <ul className="space-y-2">
                              {alert.details.fr.warningSignes.map((sign, idx) => (
                                <li key={idx} className="text-sm text-amber-800 flex items-start gap-2">
                                  <span className="text-amber-600 font-bold flex-shrink-0">⚠</span>
                                  <span>{sign}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* What To Do Section */}
                    {alert.details?.fr.whatToDo && alert.details.fr.whatToDo.length > 0 && (
                      <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded-r-lg">
                        <div className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                          <div className="flex-1">
                            <h3 className="font-semibold text-green-900 mb-3">
                              Que faire si vous recevez ce message?
                            </h3>
                            <ol className="space-y-2">
                              {alert.details.fr.whatToDo.map((step, idx) => (
                                <li key={idx} className="text-sm text-green-800 flex items-start gap-2">
                                  <span className="text-green-600 font-bold flex-shrink-0">{idx + 1}.</span>
                                  <span>{step}</span>
                                </li>
                              ))}
                            </ol>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Real Example Section */}
                    {alert.details?.fr.realExample && (
                      <div className="bg-gray-50 border-l-4 border-gray-400 p-4 rounded-r-lg">
                        <div className="flex items-start gap-3">
                          <MessageCircle className="h-5 w-5 text-gray-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                          <div className="flex-1">
                            <h3 className="font-semibold text-gray-900 mb-3">
                              Exemple réel reçu par nos clients
                            </h3>
                            <div className="bg-white p-4 rounded-lg border border-gray-200 text-sm text-gray-700 italic">
                              {alert.details.fr.realExample}
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* What to do */}
              <Callout variant="info" icon={Shield}>
                <h3 className="font-semibold text-lg mb-4">
                  {t('alerts.whatToDo.title')}
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div 
                      className="w-6 h-6 bg-red-100 text-red-600 rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0"
                      aria-label="Alerte : étape critique de sécurité"
                      role="img"
                    >
                      1
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Ne pas répondre</h4>
                      <p className="text-sm text-muted-foreground">
                        N&apos;ouvrez aucun lien et ne donnez aucune information
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div 
                      className="w-6 h-6 bg-yellow-100 text-yellow-600 rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0"
                      aria-label="Attention : étape de vérification"
                      role="img"
                    >
                      2
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Vérifier</h4>
                      <p className="text-sm text-muted-foreground">
                        Contactez directement l&apos;organisation par téléphone
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div 
                      className="w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0"
                      aria-label="Sécurisé : étape de signalement"
                      role="img"
                    >
                      3
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Signaler</h4>
                      <p className="text-sm text-muted-foreground">
                        Appelez-nous pour signaler la tentative d&apos;arnaque
                      </p>
                    </div>
                  </div>
                </div>
              </Callout>

              {/* Report Scam CTA */}
              <Card className="bg-red-50 border-red-200" aria-label="Alerte : signalement d'arnaque urgent">
                <CardContent className="p-6 text-center">
                  <AlertTriangle className="h-12 w-12 text-red-600 mx-auto mb-4" aria-label="Alerte : icône d'avertissement" />
                  <h3 className="font-semibold text-lg mb-2">
                    {t('alerts.reportScam')}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Si vous avez reçu un message suspect, contactez-nous immédiatement.
                  </p>
                  <div className="space-y-2">
                    <Button
                      asChild
                      variant="destructive"
                      className="w-full"
                      aria-label="Alerte : appeler immédiatement pour signaler"
                    >
                      <a href={`tel:${t('common.phone')}`}>
                        <Phone className="h-4 w-4 mr-2" aria-hidden="true" />
                        {t('buttons.callNow')}
                      </a>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      className="w-full border-red-300 text-red-700 hover:bg-red-50"
                    >
                      <Link href="/contact">
                        <MessageSquare className="h-4 w-4 mr-2" aria-hidden="true" />
                        {t('buttons.contactUs')}
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Resources Link */}
              <Card>
                <CardContent className="p-6 text-center">
                  <Eye className="h-8 w-8 text-primary mx-auto mb-3" aria-label="Sécurisé : icône de prévention" />
                  <h3 className="font-medium mb-2">
                    Guides de prévention
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Consultez nos guides pour apprendre à vous protéger.
                  </p>
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="border-primary text-primary hover:bg-gradient-cta hover:text-white"
                  >
                    <Link href="/resources">
                      {t('buttons.viewAllResources')}
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}