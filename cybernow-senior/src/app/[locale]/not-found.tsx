import { useTranslations } from 'next-intl';
import { Home, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  const t = useTranslations();

  return (
    <div className="min-h-[60vh] flex items-center justify-center py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          {/* 404 Illustration */}
          <div className="mb-8">
            <div className="text-8xl md:text-9xl font-bold text-primary/20 mb-4">
              404
            </div>
          </div>

          {/* Error Message */}
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            {t('errors.404.title')}
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-lg mx-auto">
            {t('errors.404.description')}
          </p>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="min-h-12 px-8 bg-gradient-cta hover:bg-gradient-cta/90"
            >
              <Link href="/">
                <Home className="h-5 w-5 mr-3" aria-hidden="true" />
                {t('errors.404.backHome')}
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="min-h-12 px-8 border-primary text-primary hover:bg-gradient-cta hover:text-white"
              onClick={() => window.history.back()}
            >
              <button type="button">
                <ArrowLeft className="h-5 w-5 mr-3" aria-hidden="true" />
                {t('common.back')}
              </button>
            </Button>
          </div>

          {/* Help Section */}
          <div className="mt-12 p-6 bg-slate-50 rounded-2xl">
            <h2 className="text-lg font-semibold mb-2">
              Besoin d&apos;aide ?
            </h2>
            <p className="text-muted-foreground mb-4">
              Si vous ne trouvez pas ce que vous cherchez, contactez notre équipe.
            </p>
            <Button
              asChild
              variant="outline"
              size="sm"
            >
              <a href={`tel:${t('common.phone')}`}>
                {t('buttons.callNow')}
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}