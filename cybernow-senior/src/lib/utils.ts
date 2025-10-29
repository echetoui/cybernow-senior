import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPhoneNumber(phone: string): string {
  const cleaned = phone.replace(/\D/g, '');
  
  if (cleaned.length === 10) {
    return `+1-${cleaned.slice(0, 3)}-${cleaned.slice(3, 6)}-${cleaned.slice(6)}`;
  }
  
  if (cleaned.length === 11 && cleaned.startsWith('1')) {
    return `+1-${cleaned.slice(1, 4)}-${cleaned.slice(4, 7)}-${cleaned.slice(7)}`;
  }
  
  return phone;
}

export function createPhoneLink(phone: string): string {
  const cleaned = phone.replace(/\D/g, '');
  return `tel:${cleaned.startsWith('1') ? `+${cleaned}` : `+1${cleaned}`}`;
}

export function formatDate(date: Date | string, locale: string = 'fr-CA'): string {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  return dateObj.toLocaleDateString(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export function getReadingTime(text: string): number {
  const wordsPerMinute = 200;
  const words = text.trim().split(/\s+/).length;
  return Math.ceil(words / wordsPerMinute);
}

export function generateSchema(type: 'Organization' | 'LocalBusiness' | 'Service' | 'FAQ' | 'Article', data: Record<string, unknown> = {}) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://cybernowseniors.ca';

  switch (type) {
    case 'Organization':
      return {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        '@id': `${baseUrl}/#organization`,
        name: 'CyberNow Seniors',
        legalName: 'CyberNow Seniors',
        description: 'Services de sécurité numérique pour les aînés au Québec',
        url: baseUrl,
        logo: `${baseUrl}/icon-digital-care.svg`,
        image: `${baseUrl}/og-image.svg`,
        telephone: '+1-581-705-0399',
        email: 'info@cybernow.io',
        foundingDate: '2024',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Montréal',
          addressRegion: 'QC',
          addressCountry: 'CA',
        },
        areaServed: {
          '@type': 'State',
          name: 'Quebec',
          '@id': 'https://www.wikidata.org/wiki/Q176',
        },
        serviceType: ['Cybersecurity Services', 'Computer Training', 'Technical Support'],
        sameAs: [
          // TODO: Ajouter réseaux sociaux quand créés
        ],
      };

    case 'LocalBusiness':
      return {
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        '@id': `${baseUrl}/#localbusiness`,
        name: 'CyberNow Seniors',
        description: 'Services de cybersécurité adaptés aux aînés au Québec',
        url: baseUrl,
        logo: `${baseUrl}/icon-digital-care.svg`,
        image: `${baseUrl}/og-image.svg`,
        telephone: '+1-581-705-0399',
        email: 'info@cybernow.io',
        priceRange: '$$',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Montréal',
          addressRegion: 'QC',
          postalCode: '',
          addressCountry: 'CA',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 45.5017,
          longitude: -73.5673,
        },
        areaServed: [
          {
            '@type': 'City',
            name: 'Montréal',
          },
          {
            '@type': 'City',
            name: 'Québec',
          },
          {
            '@type': 'City',
            name: 'Laval',
          },
          {
            '@type': 'City',
            name: 'Gatineau',
          },
          {
            '@type': 'State',
            name: 'Quebec',
          },
        ],
        openingHoursSpecification: [
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            opens: '09:00',
            closes: '17:00',
          },
        ],
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Services de cybersécurité',
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Bouclier Proactif',
                description: 'Protection en temps réel contre les menaces en ligne',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Aide en Ligne',
                description: 'Support technique accessible 24/7',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Support Anti-Arnaque',
                description: 'Assistance en cas de tentative de fraude',
              },
            },
          ],
        },
        aggregateRating: data.rating ? {
          '@type': 'AggregateRating',
          ratingValue: data.rating,
          reviewCount: data.reviewCount || 1,
        } : undefined,
      };
      
    case 'Service':
      return {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: data.name,
        description: data.description,
        provider: {
          '@type': 'Organization',
          name: 'CyberNow Seniors',
        },
        areaServed: {
          '@type': 'State',
          name: 'Quebec',
        },
        serviceType: 'Cybersecurity Services',
      };
      
    case 'FAQ':
      return {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: Array.isArray(data.questions) ? data.questions.map((item: {question: string; answer: string}) => ({
          '@type': 'Question',
          name: item.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.answer,
          },
        })) : [],
      };

    case 'Article':
      return {
        '@context': 'https://schema.org',
        '@type': 'Article',
        '@id': data.url as string,
        headline: data.title as string,
        description: data.description as string,
        image: data.image || `${baseUrl}/og-image.svg`,
        datePublished: data.publishedAt as string,
        dateModified: data.modifiedAt || data.publishedAt as string,
        author: {
          '@type': 'Organization',
          name: 'CyberNow Seniors',
          url: baseUrl,
        },
        publisher: {
          '@type': 'Organization',
          name: 'CyberNow Seniors',
          logo: {
            '@type': 'ImageObject',
            url: `${baseUrl}/icon-digital-care.svg`,
          },
        },
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': data.url as string,
        },
        articleSection: data.category as string || 'Cybersecurity Alert',
        keywords: data.keywords as string[] || ['cybersécurité', 'aînés', 'arnaques', 'sécurité numérique'],
        inLanguage: data.locale === 'en' ? 'en-CA' : 'fr-CA',
      };

    default:
      return null;
  }
}