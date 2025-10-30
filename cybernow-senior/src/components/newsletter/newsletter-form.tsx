'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Mail, Loader2, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const newsletterSchema = z.object({
  email: z.string().email('Adresse courriel invalide'),
});

type NewsletterFormData = z.infer<typeof newsletterSchema>;

interface NewsletterFormProps {
  locale: 'fr' | 'en';
}

export function NewsletterForm({ locale }: NewsletterFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<NewsletterFormData>({
    resolver: zodResolver(newsletterSchema),
  });

  const onSubmit = async (data: NewsletterFormData) => {
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: data.email, locale }),
      });

      if (!response.ok) {
        throw new Error('Failed to subscribe');
      }

      setIsSuccess(true);
      reset();

      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    } catch {
      setError(
        locale === 'fr'
          ? 'Une erreur est survenue. Veuillez réessayer.'
          : 'An error occurred. Please try again.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      {isSuccess ? (
        <div className="flex items-center gap-2 text-green-600 bg-green-50 p-4 rounded-lg">
          <CheckCircle2 className="h-5 w-5" />
          <p className="text-sm font-medium">
            {locale === 'fr'
              ? 'Merci! Vérifiez votre courriel pour confirmer votre inscription.'
              : 'Thank you! Check your email to confirm your subscription.'}
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
          <div className="flex flex-col sm:flex-row gap-2">
            <div className="flex-1">
              <Input
                type="email"
                placeholder={
                  locale === 'fr' ? 'Votre adresse courriel' : 'Your email address'
                }
                {...register('email')}
                disabled={isSubmitting}
                className="h-11 bg-white border-border"
                aria-label={locale === 'fr' ? 'Adresse courriel' : 'Email address'}
              />
              {errors.email && (
                <p className="text-sm text-red-600 mt-1">{errors.email.message}</p>
              )}
            </div>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="h-11 px-6 sm:w-auto w-full"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                  {locale === 'fr' ? 'Envoi...' : 'Sending...'}
                </>
              ) : (
                <>
                  <Mail className="h-4 w-4 mr-2" />
                  {locale === 'fr' ? 'S\'abonner' : 'Subscribe'}
                </>
              )}
            </Button>
          </div>
          {error && <p className="text-sm text-red-600">{error}</p>}
          <p className="text-xs text-muted-foreground">
            {locale === 'fr'
              ? 'En vous abonnant, vous acceptez de recevoir nos alertes de sécurité et conseils. Vous pouvez vous désabonner à tout moment.'
              : 'By subscribing, you agree to receive our security alerts and tips. You can unsubscribe at any time.'}
          </p>
        </form>
      )}
    </div>
  );
}
