import { notFound } from 'next/navigation';
import { getTranslations } from 'next-intl/server';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Calendar, Clock, User, Tag, ArrowLeft, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { blogPosts, type BlogPost } from '@/lib/data/blog';
import { formatDate, generateSchema } from '@/lib/utils';

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: 'Article non trouvé',
    };
  }

  const title = post.title[locale as 'fr' | 'en'];
  const description = post.description[locale as 'fr' | 'en'];
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://cybernowseniors.ca';

  return {
    title,
    description,
    keywords: post.tags[locale as 'fr' | 'en'],
    authors: [{ name: post.author.name }],
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt || post.publishedAt,
      authors: [post.author.name],
      tags: post.tags[locale as 'fr' | 'en'],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
    alternates: {
      canonical: `${baseUrl}/${locale}/blog/${slug}`,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://cybernowseniors.ca';

  // Generate Article schema
  const articleSchema = generateSchema('Article', {
    url: `${baseUrl}/${locale}/blog/${slug}`,
    title: post.title[locale as 'fr' | 'en'],
    description: post.description[locale as 'fr' | 'en'],
    publishedAt: post.publishedAt,
    modifiedAt: post.updatedAt || post.publishedAt,
    category: post.category[locale as 'fr' | 'en'],
    keywords: post.tags[locale as 'fr' | 'en'],
    locale,
  });

  const content = post.content[locale as 'fr' | 'en'];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema),
        }}
      />

      <article className="py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Back Button */}
            <Link
              href={`/${locale}/blog`}
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-8 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              {locale === 'fr' ? 'Retour au blog' : 'Back to blog'}
            </Link>

            {/* Article Header */}
            <header className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                  {post.category[locale as 'fr' | 'en']}
                </span>
                {post.featured && (
                  <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">
                    ⭐ {locale === 'fr' ? 'En vedette' : 'Featured'}
                  </span>
                )}
              </div>

              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                {post.title[locale as 'fr' | 'en']}
              </h1>

              <p className="text-xl text-muted-foreground mb-6">
                {post.description[locale as 'fr' | 'en']}
              </p>

              {/* Article Meta */}
              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground pb-6 border-b">
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  <span className="font-medium">{post.author.name}</span>
                  <span>•</span>
                  <span>{post.author.role[locale as 'fr' | 'en']}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  <span>{formatDate(post.publishedAt, locale)}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  <span>
                    {post.readingTime} {locale === 'fr' ? 'min de lecture' : 'min read'}
                  </span>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-6">
                {post.tags[locale as 'fr' | 'en'].map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1 bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm"
                  >
                    <Tag className="h-3 w-3" />
                    {tag}
                  </span>
                ))}
              </div>
            </header>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none mb-12">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={{
                  h1: ({ node, ...props }) => (
                    <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground" {...props} />
                  ),
                  h2: ({ node, ...props }) => (
                    <h3 className="text-2xl font-bold mt-10 mb-4 text-foreground" {...props} />
                  ),
                  h3: ({ node, ...props }) => (
                    <h4 className="text-xl font-semibold mt-8 mb-3 text-foreground" {...props} />
                  ),
                  p: ({ node, ...props }) => (
                    <p className="mb-6 text-muted-foreground leading-relaxed" {...props} />
                  ),
                  ul: ({ node, ...props }) => (
                    <ul className="my-6 ml-6 list-disc space-y-2" {...props} />
                  ),
                  ol: ({ node, ...props }) => (
                    <ol className="my-6 ml-6 list-decimal space-y-2" {...props} />
                  ),
                  li: ({ node, ...props }) => (
                    <li className="text-muted-foreground" {...props} />
                  ),
                  blockquote: ({ node, ...props }) => (
                    <blockquote
                      className="border-l-4 border-primary pl-6 py-4 my-6 bg-primary/5 italic"
                      {...props}
                    />
                  ),
                  code: ({ node, inline, ...props }: any) =>
                    inline ? (
                      <code
                        className="bg-secondary px-2 py-1 rounded text-sm font-mono"
                        {...props}
                      />
                    ) : (
                      <code
                        className="block bg-secondary p-4 rounded-lg overflow-x-auto my-6 font-mono text-sm"
                        {...props}
                      />
                    ),
                  table: ({ node, ...props }) => (
                    <div className="overflow-x-auto my-6">
                      <table className="min-w-full border border-border" {...props} />
                    </div>
                  ),
                  th: ({ node, ...props }) => (
                    <th className="border border-border bg-secondary px-4 py-2 text-left font-semibold" {...props} />
                  ),
                  td: ({ node, ...props }) => (
                    <td className="border border-border px-4 py-2" {...props} />
                  ),
                  a: ({ node, ...props }) => (
                    <a className="text-primary hover:underline font-medium" {...props} />
                  ),
                  strong: ({ node, ...props }) => (
                    <strong className="font-bold text-foreground" {...props} />
                  ),
                }}
              >
                {content}
              </ReactMarkdown>
            </div>

            {/* Share Section */}
            <Card className="mb-12">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold mb-2">
                      {locale === 'fr' ? 'Cet article vous a été utile?' : 'Was this article helpful?'}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {locale === 'fr'
                        ? 'Partagez-le avec vos proches pour les protéger!'
                        : 'Share it with your loved ones to protect them!'}
                    </p>
                  </div>
                  <Button variant="outline">
                    <Share2 className="h-4 w-4 mr-2" />
                    {locale === 'fr' ? 'Partager' : 'Share'}
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* CTA Section */}
            <Card className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">
                  {locale === 'fr'
                    ? 'Besoin d\'une protection complète?'
                    : 'Need complete protection?'}
                </h3>
                <p className="mb-6 opacity-90">
                  {locale === 'fr'
                    ? 'Notre service Bouclier Proactif vous protège automatiquement contre ces menaces et bien plus encore.'
                    : 'Our Proactive Shield service automatically protects you against these threats and much more.'}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" variant="secondary" asChild>
                    <a href="tel:+15817050399">📞 581-705-0399</a>
                  </Button>
                  <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-primary" asChild>
                    <Link href={`/${locale}/services`}>
                      {locale === 'fr' ? 'Découvrir nos services' : 'Discover our services'}
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Related Posts */}
            <div className="mt-16">
              <h3 className="text-2xl font-bold mb-6">
                {locale === 'fr' ? 'Articles similaires' : 'Related articles'}
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                {blogPosts
                  .filter((p) => p.slug !== post.slug && p.category[locale as 'fr' | 'en'] === post.category[locale as 'fr' | 'en'])
                  .slice(0, 2)
                  .map((relatedPost) => (
                    <Card key={relatedPost.slug} className="hover:shadow-lg transition-shadow">
                      <CardContent className="p-6">
                        <div className="text-sm text-primary font-medium mb-2">
                          {relatedPost.category[locale as 'fr' | 'en']}
                        </div>
                        <h4 className="text-xl font-semibold mb-3">
                          <Link
                            href={`/${locale}/blog/${relatedPost.slug}`}
                            className="hover:text-primary transition-colors"
                          >
                            {relatedPost.title[locale as 'fr' | 'en']}
                          </Link>
                        </h4>
                        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                          {relatedPost.description[locale as 'fr' | 'en']}
                        </p>
                        <Link href={`/${locale}/blog/${relatedPost.slug}`}>
                          <Button variant="ghost" size="sm">
                            {locale === 'fr' ? 'Lire l\'article' : 'Read article'}
                          </Button>
                        </Link>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
