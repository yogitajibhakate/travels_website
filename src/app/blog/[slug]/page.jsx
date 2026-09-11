import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { blogsData } from '@/data/blogs';
import { servicesData } from '@/data/services';
import BookingWidget from '@/components/BookingWidget';
import { ArrowRight, Calendar, Clock, User } from 'lucide-react';

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
      <section className="section section-dark" style={{ paddingTop: '100px', paddingBottom: '120px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, opacity: 0.1, backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        <div className="container" style={{ maxWidth: '880px', position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <div className="badge badge-sky" style={{ marginBottom: '24px', backgroundColor: 'rgba(41, 171, 226, 0.15)', borderColor: 'rgba(41, 171, 226, 0.3)' }}>{post.categoryName}</div>
          <h1 style={{ color: '#FFF', marginBottom: '32px', lineHeight: '1.2' }}>{post.title}</h1>
          <div style={{ display: 'flex', gap: '24px', justifyContent: 'center', flexWrap: 'wrap', fontSize: '0.95rem', color: '#CBD4DC', fontWeight: '500' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><User size={16} color="var(--color-sky-500)" /> {post.author}</span>
            <span style={{ color: 'var(--color-navy-700)' }}>|</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><Calendar size={16} color="var(--color-sky-500)" /> {post.date}</span>
            <span style={{ color: 'var(--color-navy-700)' }}>|</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><Clock size={16} color="var(--color-sky-500)" /> {post.readTime}</span>
          </div>
        </div>
      </section>

      {/* Article Content & Contextual CTA */}
      <section className="section" style={{ paddingTop: '0' }}>
        <div className="container" style={{ maxWidth: '840px' }}>
          
          {/* Hero Image pulled up to overlap header slightly */}
          <div style={{ marginTop: '-80px', marginBottom: '60px', borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: '0 20px 40px rgba(15, 42, 82, 0.15)', position: 'relative', zIndex: 2, backgroundColor: 'var(--color-steel-100)', aspectRatio: '16/9' }}>
            <Image 
              src={post.image} 
              alt={post.title} 
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 840px) 100vw, 840px"
              priority
            />
          </div>

          {/* Main Article Body */}
          <div className="blog-content" dangerouslySetInnerHTML={{ __html: post.content }} />

          {/* Contextual Service Callout */}
          <div style={{ 
            marginTop: '64px',
            marginBottom: '64px',
            borderRadius: 'var(--radius-lg)', 
            overflow: 'hidden',
            position: 'relative',
            backgroundColor: 'var(--color-navy-900)',
            color: 'var(--color-white)',
            boxShadow: '0 20px 40px rgba(15, 42, 82, 0.2)'
          }}>
            {/* Background Pattern */}
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, opacity: 0.1, backgroundImage: 'linear-gradient(135deg, transparent 25%, rgba(255,255,255,0.2) 25%, rgba(255,255,255,0.2) 50%, transparent 50%, transparent 75%, rgba(255,255,255,0.2) 75%, rgba(255,255,255,0.2) 100%)', backgroundSize: '20px 20px' }}></div>
            
            <div style={{ padding: '48px', position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'flex-start', borderLeft: '6px solid var(--color-sky-500)' }}>
              <div style={{ 
                display: 'inline-flex', 
                alignItems: 'center', 
                gap: '8px', 
                backgroundColor: 'rgba(255,255,255,0.1)', 
                padding: '6px 14px', 
                borderRadius: 'var(--radius-pill)', 
                fontSize: '0.8rem', 
                fontWeight: '700', 
                textTransform: 'uppercase', 
                letterSpacing: '0.05em', 
                color: 'var(--color-sky-500)', 
                marginBottom: '20px' 
              }}>
                <ArrowRight size={14} /> Recommends
              </div>
              
              <h3 style={{ fontSize: '1.8rem', marginBottom: '16px', color: '#FFF' }}>{relatedService.name}</h3>
              <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.85)', marginBottom: '32px', lineHeight: '1.7', maxWidth: '600px' }}>
                {relatedService.tagline}
              </p>
              
              <Link href={`/services/${relatedService.slug}`} className="btn btn-primary" style={{ backgroundColor: 'var(--color-sky-500)', color: '#fff', border: 'none', padding: '14px 28px' }}>
                Explore Solutions <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          {/* Related Articles */}
          {relatedPosts.length > 0 && (
            <div style={{ paddingTop: '56px', borderTop: '2px solid var(--color-steel-100)' }}>
              <h3 style={{ marginBottom: '32px', fontSize: '1.8rem' }}>More from our Journal</h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px' }}>
                {relatedPosts.map(p => (
                  <Link href={`/blog/${p.slug}`} key={p.slug} className="card" style={{ padding: '24px', display: 'flex', flexDirection: 'column', height: '100%' }}>
                    <div className="badge badge-navy" style={{ alignSelf: 'flex-start', marginBottom: '16px', fontSize: '0.7rem' }}>{p.categoryName}</div>
                    <h4 style={{ fontSize: '1.2rem', marginBottom: '12px', lineHeight: '1.4' }}>{p.title}</h4>
                    <p style={{ fontSize: '0.95rem', color: 'var(--color-ink-600)', marginBottom: '24px', flexGrow: 1 }}>{p.summary.substring(0, 100)}...</p>
                    <span style={{ fontSize: '0.9rem', fontWeight: '700', color: 'var(--color-sky-500)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                      Read Article <ArrowRight size={14} />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Embedded Quote Form */}
      <section className="section section-steel">
        <div className="container" style={{ maxWidth: '640px' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '32px' }}>Require Professional Mobility?</h2>
          <div className="card" style={{ padding: '0', overflow: 'hidden', border: 'none', boxShadow: 'var(--shadow-hover)' }}>
            <div style={{ padding: '32px 32px 0' }}>
              <BookingWidget sourcePage={`/blog/${post.slug}`} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

