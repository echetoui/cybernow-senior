"use client";

import { useTranslations } from 'next-intl';
import { Card, CardContent } from '@/components/ui/card';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    key: 'marie',
    age: 68,
    city: 'Montréal',
    photoPath: '/images/testimonials/marie.jpg', // Placeholder - à remplacer
  },
  {
    key: 'jean',
    age: 72,
    city: 'Québec',
    photoPath: '/images/testimonials/jean.jpg', // Placeholder - à remplacer
  },
  {
    key: 'louise',
    age: 65,
    city: 'Laval',
    photoPath: '/images/testimonials/louise.jpg', // Placeholder - à remplacer
  },
];

export function TestimonialsSection() {
  const t = useTranslations();

  return (
    <section
      className="py-16 lg:py-20 bg-gradient-to-br from-slate-50 to-white"
      aria-labelledby="testimonials-title"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Titre */}
          <div className="text-center mb-12">
            <h2
              id="testimonials-title"
              className="text-3xl md:text-4xl font-bold mb-4 text-primary"
            >
              {t('home.testimonials.title')}
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t('home.testimonials.subtitle')}
            </p>
          </div>

          {/* Grille de témoignages */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => {
              return (
                <Card
                  key={testimonial.key}
                  className="border-2 hover:border-sage-green/30 hover:shadow-xl transition-all bg-white relative overflow-hidden group"
                >
                  {/* Icône de citation */}
                  <div className="absolute -top-3 -right-3 w-16 h-16 bg-gradient-peach rounded-full flex items-center justify-center opacity-20 group-hover:opacity-30 transition-opacity">
                    <Quote className="h-8 w-8 text-white" aria-hidden="true" />
                  </div>

                  <CardContent className="p-6">
                    {/* Photo ou Avatar avec initiales */}
                    <div className="mb-4 flex justify-center">
                      {testimonial.photoPath ? (
                        <div className="relative w-20 h-20 rounded-full overflow-hidden shadow-lg ring-4 ring-white">
                          <img
                            src={testimonial.photoPath}
                            alt={`Photo de ${t(`home.testimonials.${testimonial.key}.name`)}`}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              // Fallback to initials if image fails to load
                              e.currentTarget.style.display = 'none';
                              const parent = e.currentTarget.parentElement;
                              if (parent) {
                                parent.innerHTML = `
                                  <div class="w-full h-full bg-gradient-warm flex items-center justify-center">
                                    <span class="text-white text-2xl font-bold">
                                      ${t(`home.testimonials.${testimonial.key}.name`).charAt(0)}
                                    </span>
                                  </div>
                                `;
                              }
                            }}
                          />
                        </div>
                      ) : (
                        <div className="w-20 h-20 bg-gradient-warm rounded-full flex items-center justify-center shadow-lg ring-4 ring-white">
                          <span className="text-white text-2xl font-bold">
                            {t(`home.testimonials.${testimonial.key}.name`).charAt(0)}
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Citation */}
                    <blockquote className="mb-6">
                      <p className="text-base text-foreground leading-relaxed italic">
                        "{t(`home.testimonials.${testimonial.key}.quote`)}"
                      </p>
                    </blockquote>

                    {/* Auteur */}
                    <div className="text-center">
                      <p className="font-semibold text-primary text-lg">
                        {t(`home.testimonials.${testimonial.key}.name`)}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.age} ans • {testimonial.city}
                      </p>
                    </div>

                    {/* Étoiles (5/5) */}
                    <div className="flex justify-center gap-1 mt-4" aria-label="Évaluation 5 étoiles sur 5">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg
                          key={star}
                          className="w-5 h-5 text-warm-peach fill-current"
                          viewBox="0 0 20 20"
                          aria-hidden="true"
                        >
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                        </svg>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Badge de confiance */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-3 bg-white rounded-full px-6 py-4 shadow-lg border-2 border-success-green/20">
              <svg className="w-8 h-8 text-success-green" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-base font-semibold text-secondary">
                {t('home.testimonials.trust')}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
