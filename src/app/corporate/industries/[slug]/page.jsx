'use client';

import { use } from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { industriesData } from '@/data/industries';
import { servicesData } from '@/data/services';
import { blogsData } from '@/data/blogs';
import BookingWidget from '@/components/BookingWidget';
import { Building2, CheckCircle2, ArrowRight, ShieldCheck } from 'lucide-react';

export default function IndustryDetailPage({ params }) {
  const { slug } = use(params);
  const industry = industriesData.find(i => i.slug === slug);

  if (!industry) {
    notFound();
  }

  const linkedServices = servicesData.filter(s => industry.relevantServices.includes(s.slug));
  const relatedBlogs = blogsData.slice(0, 2);

  return (
    <div>
      {/* Industry Hero */}
      <section className="section section-dark" style={{ paddingTop: '80px', paddingBottom: '60px' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '48px', alignItems: 'center' }}>
            <div>
              <div className="badge badge-gold" style={{ marginBottom: '16px' }}>Industry Mobility Solution</div>
              <h1 style={{ color: '#FFF', marginBottom: '16px' }}>{industry.name}</h1>
              <p style={{ color: '#CBD4DC', fontSize: '1.1rem', marginBottom: '24px', lineHeight: '1.7' }}>
                {industry.tagline}
              </p>
              <p style={{ color: '#9CA3AF', fontSize: '0.95rem' }}>
                {industry.description}
              </p>
            </div>

            <div>
              <BookingWidget sourcePage={`/corporate/industries/${industry.slug}`} />
            </div>
          </div>
        </div>
      </section>

      {/* Industry Use Cases */}
      <section className="section">
        <div className="container">
          <div style={{ maxWidth: '640px', margin: '0 auto 40px', textAlign: 'center' }}>
            <div className="badge badge-navy" style={{ marginBottom: '12px' }}>Operational Scenarios</div>
            <h2>Key Industry Mobility Workflows</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            {industry.useCases.map((uc, index) => (
              <div key={index} className="card" style={{ padding: '24px', display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                <CheckCircle2 size={22} color="#C9962F" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span style={{ fontSize: '0.95rem', fontWeight: '600', color: 'var(--color-navy-900)' }}>{uc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Relevant Services */}
      <section className="section section-steel">
        <div className="container">
          <h2 style={{ marginBottom: '32px', textAlign: 'center' }}>Recommended Mobility Services for {industry.name}</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            {linkedServices.map(s => (
              <div key={s.slug} className="card" style={{ padding: '24px' }}>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '8px' }}>{s.name}</h3>
                <p style={{ fontSize: '0.88rem', color: 'var(--color-ink-600)', marginBottom: '16px' }}>{s.tagline}</p>
                <Link href={`/services/${s.slug}`} style={{ fontSize: '0.85rem', fontWeight: '700', color: 'var(--color-navy-900)' }}>
                  View Service Details →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
