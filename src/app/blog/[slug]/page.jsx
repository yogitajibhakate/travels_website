import Link from 'next/link';
import { notFound } from 'next/navigation';
import { blogsData } from '@/data/blogs';
import { servicesData } from '@/data/services';
import BookingWidget from '@/components/BookingWidget';
import { ArrowRight } from 'lucide-react';

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = blogsData.find(b => b.slug === slug);
  if (!post) return {};

  return {
    title: `${post.title} | Suhalaya Travels Blog`,
    description: post.summary,
    alternates: { canonical: `https://suhalayatravels.com/blog/${slug}` },
    openGraph: {
      title: post.title,
      description: post.summary,
      url: `https://suhalayatravels.com/blog/${slug}`,
      images: [
        {
          url: `https://suhalayatravels.com${post.image}`,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      type: 'article',
      publishedTime: new Date(post.date).toISOString(),
      authors: [post.author],
    },
  };
}

export default async function BlogDetailPage({ params }) {
  const { slug } = await params;
  const post = blogsData.find(b => b.slug === slug);

  if (!post) {
    notFound();
  }

  const relatedService = servicesData.find(s => s.slug === post.relatedServiceSlug) || servicesData[0];
  const relatedPosts = blogsData.filter(b => b.slug !== slug && b.category === post.category).slice(0, 2);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    image: `https://suhalayatravels.com${post.image}`,
    author: {
      '@type': 'Organization',
      name: post.author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Suhalaya Travels',
      logo: {
        '@type': 'ImageObject',
        url: 'https://suhalayatravels.com/logo.png',
      },
    },
    datePublished: new Date(post.date).toISOString(),
    description: post.summary,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://suhalayatravels.com/blog/${slug}`,
    },
  };

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Blog Article Header */}
      <section className="section section-dark" style={{ paddingTop: '80px', paddingBottom: '60px' }}>
        <div className="container" style={{ maxWidth: '840px' }}>
          <div className="badge badge-gold" style={{ marginBottom: '16px' }}>{post.categoryName}</div>
          <h1 style={{ color: '#FFF', marginBottom: '20px', lineHeight: '1.25' }}>{post.title}</h1>
          <div style={{ display: 'flex', gap: '20px', fontSize: '0.88rem', color: '#CBD4DC' }}>
            <span>Author: {post.author}</span>
            <span>•</span>
            <span>{post.date}</span>
            <span>•</span>
            <span>{post.readTime}</span>
          </div>
        </div>
      </section>

      {/* Article Content & Contextual CTA */}
      <section className="section">
        <div className="container" style={{ maxWidth: '840px' }}>
          {/* Main Article Body */}
          <div 
            style={{ fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--color-ink-900)', marginBottom: '48px' }}
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Contextual Service Callout */}
          <div className="card" style={{ padding: '32px', backgroundColor: 'var(--color-steel-100)', borderLeft: '6px solid var(--color-navy-900)', marginBottom: '48px' }}>
            <div className="badge badge-navy" style={{ marginBottom: '10px' }}>Recommended Service</div>
            <h3 style={{ fontSize: '1.3rem', marginBottom: '8px' }}>{relatedService.name}</h3>
            <p style={{ fontSize: '0.95rem', color: 'var(--color-ink-600)', marginBottom: '20px' }}>{relatedService.tagline}</p>
            <Link href={`/services/${relatedService.slug}`} className="btn btn-navy">
              Explore {relatedService.shortTitle} Solutions <ArrowRight size={14} />
            </Link>
          </div>

          {/* Related Articles */}
          {relatedPosts.length > 0 && (
            <div style={{ paddingTop: '40px', borderTop: '1px solid var(--color-steel-200)' }}>
              <h3 style={{ marginBottom: '24px' }}>Related Travel Journal Articles</h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
                {relatedPosts.map(p => (
                  <div key={p.slug} className="card" style={{ padding: '20px' }}>
                    <h4 style={{ fontSize: '1.1rem', marginBottom: '8px' }}>{p.title}</h4>
                    <p style={{ fontSize: '0.85rem', color: 'var(--color-ink-600)', marginBottom: '14px' }}>{p.summary.substring(0, 90)}...</p>
                    <Link href={`/blog/${p.slug}`} style={{ fontSize: '0.85rem', fontWeight: '700', color: 'var(--color-navy-900)' }}>
                      Read Article →
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Embedded Quote Form */}
      <section className="section section-steel">
        <div className="container" style={{ maxWidth: '640px' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '24px' }}>Request a Mobility Quote</h2>
          <BookingWidget sourcePage={`/blog/${post.slug}`} />
        </div>
      </section>
    </div>
  );
}
