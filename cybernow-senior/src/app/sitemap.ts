import { MetadataRoute } from 'next';
import { locales } from '@/lib/i18n/config';
import { blogPosts } from '@/lib/data/blog';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://cybernowseniors.ca';

  const routes = [
    '',
    '/services',
    '/services/proactive-shield',
    '/services/privacy-consent',
    '/services/online-help',
    '/services/scam-support',
    '/resources',
    '/alerts',
    '/blog',
    '/about',
    '/contact',
    '/privacy',
  ];

  const sitemap: MetadataRoute.Sitemap = [];

  // Add routes for each locale
  locales.forEach((locale) => {
    routes.forEach((route) => {
      sitemap.push({
        url: `${baseUrl}/${locale}${route}`,
        lastModified: new Date(),
        changeFrequency: route === '' ? 'daily' :
                        route.includes('alerts') || route.includes('blog') ? 'weekly' :
                        route.includes('resources') ? 'monthly' : 'yearly',
        priority: route === '' ? 1 :
                 route.includes('services') || route.includes('contact') ? 0.9 :
                 route.includes('alerts') || route.includes('blog') || route.includes('resources') ? 0.8 : 0.7,
      });
    });
  });

  // Add blog posts for each locale
  locales.forEach((locale) => {
    blogPosts.forEach((post) => {
      sitemap.push({
        url: `${baseUrl}/${locale}/blog/${post.slug}`,
        lastModified: post.updatedAt ? new Date(post.updatedAt) : new Date(post.publishedAt),
        changeFrequency: 'monthly',
        priority: post.featured ? 0.9 : 0.7,
      });
    });
  });

  return sitemap;
}