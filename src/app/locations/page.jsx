'use client';

import Link from 'next/link';
import { locationsData } from '@/data/locations';
import { MapPin, Phone, Mail, Clock, ArrowRight, Building2 } from 'lucide-react';

export default function LocationsHubPage() {
  return (
    <div>
      {/* Locations Hero */}
      <section className="section section-dark" style={{ paddingTop: '80px', paddingBottom: '60px' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '760px' }}>
          <div className="badge badge-gold" style={{ marginBottom: '16px' }}>Regional Footprint</div>
          <h1 style={{ color: '#FFF', marginBottom: '20px' }}>
            South India Dispatch Network & Offices
          </h1>
          <p style={{ color: '#CBD4DC', fontSize: '1.1rem' }}>
            Head office control room in Bengaluru with regional operations hubs and airport dispatch desks in Hyderabad, Chennai, Mysuru, Kochi, and Coimbatore.
          </p>
        </div>
      </section>

      {/* Office Locations Grid */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '32px' }}>
            {locationsData.map(loc => (
              <div key={loc.slug} className="card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
                    <div className="badge badge-navy">{loc.isHeadOffice ? 'Headquarters' : 'Regional Hub'}</div>
                    <MapPin size={24} color="#C9962F" />
                  </div>

                  <h2 style={{ fontSize: '1.5rem', marginBottom: '8px' }}>{loc.city}</h2>
                  <div style={{ fontSize: '0.85rem', color: 'var(--color-accent-600)', fontWeight: '700', marginBottom: '16px' }}>
                    {loc.type}
                  </div>

                  <p style={{ fontSize: '0.9rem', color: 'var(--color-ink-600)', marginBottom: '20px', lineHeight: '1.6' }}>
                    <strong>Address:</strong> {loc.address}
                  </p>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.88rem', color: 'var(--color-navy-900)', marginBottom: '24px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <Phone size={14} color="#C9962F" /> <strong>Phone:</strong> {loc.phone}
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <Clock size={14} color="#C9962F" /> <strong>Hours:</strong> {loc.hours}
                    </div>
                  </div>
                </div>

                <div style={{ paddingTop: '20px', borderTop: '1px solid var(--color-steel-200)' }}>
                  <Link href={`/locations/${loc.slug}`} className="btn btn-navy" style={{ width: '100%', fontSize: '0.88rem' }}>
                    View Location Details <ArrowRight size={14} />
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
