'use client';

import { use } from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { locationsData } from '@/data/locations';
import { servicesData } from '@/data/services';
import BookingWidget from '@/components/BookingWidget';
import { MapPin, Phone, Mail, Clock, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';

export default function LocationDetailPage({ params }) {
  const { slug } = use(params);
  const location = locationsData.find(l => l.slug === slug);

  if (!location) {
    notFound();
  }

  return (
    <div>
      {/* Location Hero */}
      <section className="section section-dark" style={{ paddingTop: '80px', paddingBottom: '60px' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '48px', alignItems: 'center' }}>
            <div>
              <div className="badge badge-gold" style={{ marginBottom: '16px' }}>
                {location.isHeadOffice ? 'Headquarters' : 'Regional Dispatch Point'}
              </div>
              <h1 style={{ color: '#FFF', marginBottom: '16px' }}>Suhalaya {location.city} Mobility Hub</h1>
              <p style={{ color: '#CBD4DC', fontSize: '1.1rem', marginBottom: '24px' }}>
                {location.type} — Serving {location.city} metropolitan area, airport terminals, and peripheral industrial belts.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.95rem', color: '#E4E8EC' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <MapPin size={18} color="#C9962F" /> {location.address}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <Phone size={18} color="#C9962F" /> {location.phone}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <Clock size={18} color="#C9962F" /> {location.hours}
                </div>
              </div>
            </div>

            <div>
              <BookingWidget sourcePage={`/locations/${location.slug}`} />
            </div>
          </div>
        </div>
      </section>

      {/* Details & Coverage Area */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
            <div>
              <div className="badge badge-navy" style={{ marginBottom: '12px' }}>Coverage Zone</div>
              <h2>Service Area & Dispatch Radius</h2>
              <p style={{ fontSize: '1.05rem', color: 'var(--color-ink-700)', lineHeight: '1.7', marginTop: '16px' }}>
                {location.serviceArea}
              </p>
            </div>

            <div>
              <div className="badge badge-gold" style={{ marginBottom: '12px' }}>Key Hubs Served</div>
              <h2>Airports & Tech Corridors Served</h2>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '16px' }}>
                {location.hubs.map((hub, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.95rem', fontWeight: '600', color: 'var(--color-navy-900)' }}>
                    <CheckCircle2 size={16} color="#C9962F" /> {hub}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services Available at Location */}
      <section className="section section-steel">
        <div className="container">
          <h2 style={{ marginBottom: '32px', textAlign: 'center' }}>Services Available from {location.city} Hub</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            {servicesData.slice(0, 6).map(s => (
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
