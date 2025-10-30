import Link from 'next/link';
import { Calendar, Clock, Tag, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { blogPosts, getAllCategories } from '@/lib/data/blog';
import { formatDate } from '@/lib/utils';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  const title = locale === 'fr'
    ? 'Blog | Conseils et guides de cybersécurité pour aînés'
    : 'Blog | Cybersecurity tips and guides for seniors';

  const description = locale === 'fr'
    ? 'Découvrez nos articles, guides pratiques et conseils d\'experts pour naviguer en ligne en toute sécurité. Alertes, tutoriels et ressources pour les aînés du Québec.'
    : 'Discover our articles, practical guides and expert advice for safe online navigation. Alerts, tutorials and resources for Quebec seniors.';

  return {
    title,
    description,
    keywords: locale === 'fr'
      ? ['blog cybersécurité', 'guides sécurité internet', 'conseils aînés', 'tutoriels informatique', 'arnaques québec']
      : ['cybersecurity blog', 'internet security guides', 'senior tips', 'computer tutorials', 'quebec scams'],
    openGraph: {
      title,
      description,
      type: 'website',
    },
  };
}

export default async function BlogPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const categories = getAllCategories(locale as 'fr' | 'en');

  // Sort posts by date (most recent first)
  const sortedPosts = [...blogPosts].sort((a, b) =>
    new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );

  const featuredPost = sortedPosts.find(post => post.featured);
  const regularPosts = sortedPosts.filter(post => !post.featured);

  return (
    <div className="py-12 lg:py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {locale === 'fr' ? 'Blog & Ressources' : 'Blog & Resources'}
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {locale === 'fr'
                ? 'Conseils pratiques, guides détaillés et alertes pour vous protéger en ligne'
                : 'Practical tips, detailed guides and alerts to protect yourself online'}
            </p>
          </div>

          {/* Categories Filter */}
          <div className="flex flex-wrap gap-2 justify-center mb-12">
            <Button variant="outline" size="sm">
              {locale === 'fr' ? 'Tous les articles' : 'All articles'}
            </Button>
            {categories.map((category) => (
              <Button key={category} variant="ghost" size="sm">
                {category}
              </Button>
            ))}
          </div>

          {/* Featured Post */}
          {featuredPost && (
            <Card className="mb-12 border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
              <CardHeader>
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                    {locale === 'fr' ? 'Article en vedette' : 'Featured article'}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    {featuredPost.category[locale as 'fr' | 'en']}
                  </span>
                </div>
                <CardTitle className="text-3xl md:text-4xl mb-4">
                  <Link
                    href={`/${locale}/blog/${featuredPost.slug}`}
                    className="hover:text-primary transition-colors"
                  >
                    {featuredPost.title[locale as 'fr' | 'en']}
                  </Link>
                </CardTitle>
                <p className="text-lg text-muted-foreground mb-4">
                  {featuredPost.description[locale as 'fr' | 'en']}
                </p>
                <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>{formatDate(featuredPost.publishedAt, locale)}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>
                      {featuredPost.readingTime} {locale === 'fr' ? 'min' : 'min'}
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Tag className="h-4 w-4" />
                    <span>{featuredPost.tags[locale as 'fr' | 'en'][0]}</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Link href={`/${locale}/blog/${featuredPost.slug}`}>
                  <Button size="lg" className="group">
                    {locale === 'fr' ? 'Lire l\'article' : 'Read article'}
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          )}

          {/* Regular Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularPosts.map((post) => (
              <Card key={post.slug} className="flex flex-col hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2 text-sm">
                    <span className="text-primary font-medium">
                      {post.category[locale as 'fr' | 'en']}
                    </span>
                    <span className="text-muted-foreground">•</span>
                    <span className="text-muted-foreground">
                      {post.readingTime} min
                    </span>
                  </div>
                  <CardTitle className="text-xl line-clamp-2">
                    <Link
                      href={`/${locale}/blog/${post.slug}`}
                      className="hover:text-primary transition-colors"
                    >
                      {post.title[locale as 'fr' | 'en']}
                    </Link>
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <p className="text-muted-foreground mb-4 line-clamp-3 flex-1">
                    {post.description[locale as 'fr' | 'en']}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>{formatDate(post.publishedAt, locale)}</span>
                    </div>
                    <Link href={`/${locale}/blog/${post.slug}`}>
                      <Button variant="ghost" size="sm" className="group">
                        {locale === 'fr' ? 'Lire' : 'Read'}
                        <ArrowRight className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <Card className="mt-16 bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20">
            <CardContent className="p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">
                {locale === 'fr'
                  ? 'Besoin d\'aide personnalisée?'
                  : 'Need personalized help?'}
              </h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                {locale === 'fr'
                  ? 'Notre équipe est là pour vous accompagner. Appelez-nous pour une consultation gratuite et découvrez comment nous pouvons vous aider à naviguer en ligne en toute sécurité.'
                  : 'Our team is here to support you. Call us for a free consultation and discover how we can help you navigate online safely.'}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg">
                  <a href="tel:+15817050399">
                    📞 581-705-0399
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href={`/${locale}/contact`}>
                    {locale === 'fr' ? 'Nous contacter' : 'Contact us'}
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
