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

export function generateSchema(type: 'Organization' | 'Service' | 'FAQ', data: Record<string, unknown>) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://cybernowseniors.ca';
  
  switch (type) {
    case 'Organization':
      return {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'CyberNow Seniors',
        description: 'Services de sécurité numérique pour les aînés au Québec',
        url: baseUrl,
        telephone: '+1-514-555-0123',
        email: 'contact@cybernowseniors.ca',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Montréal',
          addressRegion: 'QC',
          addressCountry: 'CA',
        },
        areaServed: {
          '@type': 'State',
          name: 'Quebec',
        },
        serviceType: 'Cybersecurity Services',
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
        mainEntity: Array.isArray(data) ? data.map((item: {question: string; answer: string}) => ({
          '@type': 'Question',
          name: item.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.answer,
          },
        })) : [],
      };
      
    default:
      return null;
  }
}