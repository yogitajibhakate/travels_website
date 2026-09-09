'use client';

import { useState } from 'react';
import Link from 'next/link';
import { blogsData } from '@/data/blogs';
import { BookOpen, Clock, ArrowRight, ChevronRight } from 'lucide-react';

export default function BlogHubPage() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredBlogs = activeCategory === 'all'
    ? blogsData
    : blogsData.filter(b => b.category === activeCategory);

  return (
    <div>
      {/* Blog Hero */}
      <section className="section section-dark" style={{ paddingTop: '80px', paddingBottom: '70px' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '800px' }}>
          <div className="badge badge-sky" style={{ marginBottom: '16px', color: '#4DC0EC', backgroundColor: 'rgba(41,171,226,0.18)' }}>
            Suhalaya Travel Journal
          </div>
          <h1 style={{ color: '#FFF', marginBottom: '16px', fontSize: '2.5rem' }}>
            Mobility Insights, Event Logistics & Route Guides
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1.1rem', lineHeight: '1.7' }}>
            Expert guides on corporate car selection, night-shift safety, AI summit planning, air show logistics, and South India road trips.
          </p>
        </div>
      </section>

      {/* Filter Tabs & Grid */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', marginBottom: '48px', flexWrap: 'wrap' }}>
            <button 
              onClick={() => setActiveCategory('all')} 
              className={`btn ${activeCategory === 'all' ? 'btn-navy' : 'btn-outline'}`}
              style={{ padding: '10px 20px', fontSize: '0.88rem' }}
            >
              All Articles
            </button>
            <button 
              onClick={() => setActiveCategory('corporate-mobility')} 
              className={`btn ${activeCategory === 'corporate-mobility' ? 'btn-navy' : 'btn-outline'}`}
              style={{ padding: '10px 20px', fontSize: '0.88rem' }}
            >
              Corporate Mobility
            </button>
            <button 
              onClick={() => setActiveCategory('corporate-events')} 
              className={`btn ${activeCategory === 'corporate-events' ? 'btn-navy' : 'btn-outline'}`}
              style={{ padding: '10px 20px', fontSize: '0.88rem' }}
            >
              Event Mobility
            </button>
            <button 
              onClick={() => setActiveCategory('outstation-travel')} 
              className={`btn ${activeCategory === 'outstation-travel' ? 'btn-navy' : 'btn-outline'}`}
              style={{ padding: '10px 20px', fontSize: '0.88rem' }}
            >
              South India Journeys
            </button>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px' }}>
            {filteredBlogs.map(blog => (
              <div key={blog.slug} className="card" style={{ padding: '28px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                    <div className="badge badge-sky" style={{ fontSize: '0.75rem' }}>{blog.categoryName}</div>
                    <span style={{ fontSize: '0.8rem', color: 'var(--color-grey-500)' }}>{blog.readTime}</span>
                  </div>
                  <h2 style={{ fontSize: '1.35rem', marginBottom: '12px', lineHeight: '1.35' }}>{blog.title}</h2>
                  <p style={{ fontSize: '0.92rem', color: 'var(--color-ink-600)', marginBottom: '20px', lineHeight: '1.6' }}>
                    {blog.summary}
                  </p>
                </div>

                <div style={{ paddingTop: '20px', borderTop: '1px solid var(--color-steel-200)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '0.8rem', color: 'var(--color-grey-500)' }}>{blog.date}</span>
                  <Link href={`/blog/${blog.slug}`} className="btn btn-navy" style={{ padding: '8px 16px', fontSize: '0.85rem' }}>
                    Read Article <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
