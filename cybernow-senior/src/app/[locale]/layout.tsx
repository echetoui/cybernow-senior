import { Inter, Sora } from 'next/font/google';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { locales, type Locale } from '@/lib/i18n/config';
import { SiteHeader } from '@/components/layout/site-header';
import { SiteFooter } from '@/components/layout/site-footer';
import { generateSchema } from '@/lib/utils';
import '../globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  weight: ['400', '500'],
});

const sora = Sora({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sora',
  weight: ['600', '700'],
});

interface LayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  if (!locales.includes(locale as Locale)) {
    notFound();
  }

  // Use the production URL for canonical, or the current deployment URL for previews
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ||
                  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'https://cybernowseniors.ca');
  
  const title = locale === 'fr' 
    ? 'CyberNow Seniors | Sécurité numérique pour les aînés au Québec'
    : 'CyberNow Seniors | Digital security for Quebec seniors';
    
  const description = locale === 'fr'
    ? 'Services de cybersécurité adaptés aux aînés. Protection proactive, formation et support humain pour naviguer en ligne en toute sécurité.'
    : 'Cybersecurity services adapted for seniors. Proactive protection, training and human support to navigate online safely.';

  return {
    metadataBase: new URL(baseUrl),
    title: {
      default: title,
      template: `%s | CyberNow Seniors`,
    },
    description,
    keywords: locale === 'fr' 
      ? ['cybersécurité', 'aînés', 'Québec', 'protection numérique', 'formation informatique', 'support technique']
      : ['cybersecurity', 'seniors', 'Quebec', 'digital protection', 'computer training', 'technical support'],
    authors: [{ name: 'CyberNow Seniors' }],
    creator: 'CyberNow Seniors',
    publisher: 'CyberNow Seniors',
    category: 'Technology',
    classification: 'Cybersecurity Services',
    
    openGraph: {
      type: 'website',
      locale: locale === 'fr' ? 'fr_CA' : 'en_CA',
      url: `${baseUrl}/${locale}`,
      title,
      description,
      siteName: 'CyberNow Seniors',
      images: [
        {
          url: `${baseUrl}/og-image.svg`,
          width: 1200,
          height: 630,
          alt: title,
          type: 'image/svg+xml',
        },
      ],
    },
    
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [`${baseUrl}/images/og-image.svg`],
      creator: '@cybernowseniors',
    },
    
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    
    alternates: {
      canonical: `${baseUrl}/${locale}`,
      languages: {
        'fr': `${baseUrl}/fr`,
        'en': `${baseUrl}/en`,
        'x-default': `${baseUrl}/fr`, // Default to French for Quebec
      },
    },
    
    verification: {
      google: process.env.GOOGLE_VERIFICATION,
    },
  };
}

export default async function LocaleLayout({ children, params }: LayoutProps) {
  const { locale } = await params;
  
  if (!locales.includes(locale as Locale)) {
    notFound();
  }

  const messages = await getMessages();
  const organizationSchema = generateSchema('Organization', {});
  const localBusinessSchema = generateSchema('LocalBusiness', {});

  return (
    <html lang={locale} className={`${inter.variable} ${sora.variable}`}>
      <head>
        {/* PWA Manifest */}
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#004C97" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="CyberNow Seniors" />

        {/* Schema.org structured data - Organization */}
        {organizationSchema && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(organizationSchema),
            }}
          />
        )}

        {/* Schema.org structured data - LocalBusiness */}
        {localBusinessSchema && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(localBusinessSchema),
            }}
          />
        )}
        
        {/* Analytics */}
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
                `,
              }}
            />
          </>
        )}
        
        {process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN && (
          <script
            defer
            data-domain={process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN}
            src="https://plausible.io/js/script.js"
          />
        )}
      </head>
      
      <body className="min-h-screen bg-background font-sans antialiased">
        <NextIntlClientProvider messages={messages}>
          {/* Skip link pour l'accessibilité */}
          <a href="#main-content" className="skip-link">
            {locale === 'fr' ? 'Aller au contenu principal' : 'Skip to main content'}
          </a>
          
          <div className="relative flex min-h-screen flex-col">
            <SiteHeader />
            
            <main id="main-content" className="flex-1">
              {children}
            </main>
            
            <SiteFooter />
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}