'use client';

import { use } from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { packagesData } from '@/data/packages';
import { servicesData } from '@/data/services';
import BookingWidget from '@/components/BookingWidget';
import FAQAccordion from '@/components/FAQAccordion';
import { CheckCircle2, ArrowRight, Car, Clock, ShieldCheck, MapPin } from 'lucide-react';

export default function PackageDetailPage({ params }) {
  const { slug } = use(params);
  const pkg = packagesData.find(p => p.slug === slug);

  if (!pkg) {
    notFound();
  }

  const relatedServices = servicesData.slice(0, 3);

  return (
    <div>
      {/* Package Hero */}
      <section className="section section-dark" style={{ paddingTop: '80px', paddingBottom: '60px' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '48px', alignItems: 'center' }}>
            <div>
              <div className="badge badge-gold" style={{ marginBottom: '16px' }}>Curated Package Spec</div>
              <h1 style={{ color: '#FFF', marginBottom: '16px' }}>{pkg.name}</h1>
              <p style={{ color: '#CBD4DC', fontSize: '1.1rem', marginBottom: '24px', lineHeight: '1.7' }}>
                {pkg.tagline}
              </p>
              <div style={{ backgroundColor: '#0B1B2B', border: '1px solid rgba(255,255,255,0.1)', padding: '16px 20px', borderRadius: '12px' }}>
                <div style={{ fontSize: '0.85rem', color: '#9CA3AF' }}>Best For Occasions:</div>
                <div style={{ fontSize: '0.95rem', color: '#FFF', fontWeight: '600', marginTop: '4px' }}>{pkg.bestFor}</div>
              </div>
            </div>

            <div>
              <BookingWidget sourcePage={`/packages/${pkg.slug}`} />
            </div>
          </div>
        </div>
      </section>

      {/* Package Inclusions & Fleet */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
            <div>
              <div className="badge badge-navy" style={{ marginBottom: '12px' }}>Package Features</div>
              <h2>Complete Package Inclusions</h2>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '14px', marginTop: '20px' }}>
                {pkg.inclusions.map((inc, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', fontSize: '0.95rem', color: 'var(--color-navy-900)', fontWeight: '600' }}>
                    <CheckCircle2 size={20} color="#C9962F" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span>{inc}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="badge badge-gold" style={{ marginBottom: '12px' }}>Fleet & Itinerary</div>
              <h2>Fleet Deployed & Sample Journey Flow</h2>
              
              <div className="card" style={{ padding: '24px', marginBottom: '24px', backgroundColor: 'var(--color-steel-100)' }}>
                <div style={{ fontSize: '0.85rem', color: 'var(--color-navy-900)', fontWeight: '700', textTransform: 'uppercase' }}>Fleet Composition:</div>
                <div style={{ fontSize: '1.05rem', fontWeight: '600', color: 'var(--color-accent-600)', marginTop: '6px' }}>{pkg.fleetUsed}</div>
              </div>

              <div className="card" style={{ padding: '24px' }}>
                <div style={{ fontSize: '0.85rem', color: 'var(--color-navy-900)', fontWeight: '700', textTransform: 'uppercase', marginBottom: '8px' }}>Sample Operational Flow:</div>
                <p style={{ fontSize: '0.95rem', color: 'var(--color-ink-700)', lineHeight: '1.6' }}>{pkg.sampleFlow}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section section-steel">
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 style={{ marginBottom: '32px', textAlign: 'center' }}>Package FAQs</h2>
          <FAQAccordion faqs={pkg.faqs} />
        </div>
      </section>

      {/* Cross links */}
      <section className="section">
        <div className="container">
          <h2 style={{ marginBottom: '28px' }}>Related Services</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            {relatedServices.map(s => (
              <div key={s.slug} className="card" style={{ padding: '20px' }}>
                <h3 style={{ fontSize: '1.1rem', marginBottom: '8px' }}>{s.name}</h3>
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
