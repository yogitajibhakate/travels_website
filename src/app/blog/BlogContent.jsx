'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { blogsData } from '@/data/blogs';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function BlogContent({ initialBlogs = [] }) {
  const [blogs, setBlogs] = useState(initialBlogs);
  const [isLoading, setIsLoading] = useState(initialBlogs.length === 0);

  useEffect(() => {
    // If we have initial blogs from the server, don't fetch on mount!
    if (initialBlogs.length > 0) return;

    const fetchBlogs = async () => {
      try {
        const response = await fetch('/api/blogs', { cache: 'no-store' });
        const text = await response.text();
        let data = [];
        try {
          data = JSON.parse(text);
        } catch (err) {
          data = [];
        }
        
        const formattedList = Array.isArray(data) ? data
          .filter(b => {
            const status = b.status || b.Status || '';
            return status.toLowerCase() === 'published';
          })
          .map(p => ({
            ...p,
            status: p.status || p.Status || 'Published',
            categoryName: p.category || p.Category || 'General',
            readTime: '5 min read',
            date: p.dateCreated || p.Date || new Date().toLocaleDateString(),
            image: p.image_url || p.imageUrl || p.Image || '/images/blog/corporate-car.jpg'
          })) : [];

        setBlogs(formattedList);
      } catch (e) {
        console.error('Error fetching blogs:', e);
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchBlogs();
  }, []);
  const comingSoonCategories = [
    { title: 'Corporate Mobility', desc: 'Ideas for making business travel easier to manage.' },
    { title: 'Travel & Destinations', desc: 'Routes, destinations and practical travel ideas.' },
    { title: 'Chauffeur Travel', desc: 'What to consider when planning a chauffeur-driven journey.' },
    { title: 'Events & Weddings', desc: 'Planning transportation when many people need to move together.' },
    { title: 'Safety & Mobility', desc: 'Thoughts on safer, more organised transportation.' },
    { title: 'South India Road Journeys', desc: 'Routes and ideas for travellers who prefer to build their own itinerary.' }
  ];

  return (
    <div>
      {/* 1. HERO */}
      <section className="section section-dark" style={{ paddingTop: '80px', paddingBottom: '70px' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '820px' }}>
          <div className="badge badge-sky" style={{ marginBottom: '16px', color: '#4DC0EC', backgroundColor: 'rgba(41,171,226,0.18)' }}>
            Suhalaya Blog
          </div>
          <h1 style={{ color: '#FFF', marginBottom: '16px', fontSize: '2.8rem' }}>
            Insights for Better Journeys.
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.92)', fontSize: '1.15rem', fontWeight: '600', marginBottom: '12px' }}>
            Travel keeps changing. So do the ways businesses, families and individuals move.
          </p>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.02rem', lineHeight: '1.7' }}>
            This space will bring together practical insights around chauffeur-driven travel, corporate mobility, employee transportation, executive journeys, road travel, event transportation and travel planning.
          </p>
        </div>
      </section>

      {/* 2. COMING SOON CATEGORIES GRID */}
      <section className="section">
        <div className="container">


          {/* Published Articles List */}
          <div style={{ marginBottom: '32px', textAlign: 'center' }}>
            <span className="eyebrow">Exploring the world of comfort</span>
            <h2>Published Articles & Mobility Guides</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '32px' }}>
            {isLoading ? (
              <div style={{ padding: '40px', textAlign: 'center', gridColumn: '1 / -1', color: 'var(--color-ink-600)' }}>
                Loading our latest insights...
              </div>
            ) : blogs.length === 0 ? (
              <div style={{ padding: '40px', textAlign: 'center', gridColumn: '1 / -1', color: 'var(--color-ink-600)' }}>
                No published blogs found.
              </div>
            ) : (
              blogs.map(blog => (
              <div key={blog.slug} className="card" style={{ padding: '0', display: 'flex', flexDirection: 'column', overflow: 'hidden', height: '100%' }}>
                {blog.image && (
                  <div style={{ width: '100%', height: '220px', overflow: 'hidden', flexShrink: 0 }}>
                    <img
                      src={blog.image}
                      alt={blog.title}
                      style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.4s ease' }}
                      onMouseEnter={e => e.target.style.transform = 'scale(1.05)'}
                      onMouseLeave={e => e.target.style.transform = 'scale(1)'}
                    />
                  </div>
                )}
                <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', flex: 1, backgroundColor: '#fff' }}>
                  <div>
                    <div style={{ fontSize: '0.75rem', fontWeight: '700', color: 'var(--color-sky-600, #0077b6)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '10px' }}>
                      {blog.categoryName}
                    </div>

                    <Link href={"/blog/" + blog.slug} style={{ textDecoration: 'none' }}>
                      <h3 style={{ fontSize: '1.2rem', marginBottom: '12px', lineHeight: '1.4', color: 'var(--color-navy-800, #003366)', fontWeight: '700' }}>
                        {blog.title}
                      </h3>
                    </Link>
                    
                    <p style={{ fontSize: '0.9rem', color: 'var(--color-ink-700, #444)', marginBottom: '24px', lineHeight: '1.6', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                      {blog.summary}
                    </p>
                  </div>
                  
                  <div style={{ marginTop: 'auto' }}>
                    <Link href={"/blog/" + blog.slug} style={{ fontSize: '0.85rem', fontWeight: '700', color: 'var(--color-navy-700, #004488)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                      Read Guide <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </div>
              ))
            )}
          </div>
        </div>
      </section>

      {/* 3. FINAL CTA */}
      <section className="section section-dark" style={{ textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '680px' }}>
          <h2 style={{ color: '#FFF', marginBottom: '16px', fontSize: '2.2rem' }}>
            Explore Travel Insights — Coming Soon
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1.05rem', marginBottom: '32px' }}>
            Stay tuned for regular guides and operational insights on business mobility and South India travel.
          </p>
          <button
            onClick={() => {
              const btn = document.getElementById('header-quote-btn');
              if (btn) btn.click();
            }}
            className="btn btn-primary"
            style={{ padding: '16px 36px', fontSize: '1rem' }}
          >
            Request a Mobility Quote
          </button>
        </div>
      </section>
    </div>
  );
}
