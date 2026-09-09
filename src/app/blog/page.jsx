'use client';

import { useState } from 'react';
import Link from 'next/link';
import { blogsData } from '@/data/blogs';
import { BookOpen, Clock, ArrowRight, Sparkles } from 'lucide-react';

export default function BlogHubPage() {
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
          <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 48px' }}>
            <div className="badge badge-sky" style={{ marginBottom: '12px', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
              <Sparkles size={14} /> Coming Soon
            </div>
            <h2>Upcoming Editorial Topics</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '28px', marginBottom: '56px' }}>
            {comingSoonCategories.map((cat, idx) => (
              <div key={idx} className="card" style={{ padding: '28px' }}>
                <div style={{ fontSize: '0.78rem', fontWeight: '700', color: '#29ABE2', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '8px' }}>Category 0{idx + 1}</div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '10px', color: 'var(--color-navy-900)' }}>{cat.title}</h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--color-ink-700)', lineHeight: '1.6' }}>{cat.desc}</p>
              </div>
            ))}
          </div>

          {/* Published Articles List */}
          <div style={{ marginBottom: '32px', textAlign: 'center' }}>
            <span className="eyebrow">Exploring the world of comfort</span>
            <h2>Published Articles & Mobility Guides</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px' }}>
            {blogsData.map(blog => (
              <div key={blog.slug} className="card" style={{ padding: '28px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                    <div className="badge badge-sky" style={{ fontSize: '0.75rem' }}>{blog.categoryName}</div>
                    <span style={{ fontSize: '0.8rem', color: 'var(--color-grey-500)' }}>{blog.readTime}</span>
                  </div>
                  <h3 style={{ fontSize: '1.3rem', marginBottom: '12px', lineHeight: '1.35' }}>{blog.title}</h3>
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
