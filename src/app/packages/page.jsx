'use client';

import Link from 'next/link';
import { packagesData } from '@/data/packages';
import { Package, ArrowRight, CheckCircle2, Car, Compass, Calendar } from 'lucide-react';

export default function PackagesHubPage() {
  const miniItineraries = packagesData.filter(p => p.category === 'mini-itinerary');
  const eventPackages = packagesData.filter(p => p.category === 'event-package');

  return (
    <div>
      {/* Packages Hero */}
      <section className="section section-dark" style={{ paddingTop: '80px', paddingBottom: '70px' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '820px' }}>
          <div className="badge badge-sky" style={{ marginBottom: '16px', color: '#4DC0EC', backgroundColor: 'rgba(41,171,226,0.18)' }}>
            Curated Packages
          </div>
          <h1 style={{ color: '#FFF', marginBottom: '16px', fontSize: '2.5rem' }}>
            South India Mini-Itineraries & Event Packages
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.15rem', fontWeight: '600', marginBottom: '12px' }}>
            You Plan the Journey. We Handle the Road.
          </p>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1rem', lineHeight: '1.7' }}>
            Choose from self-planned chauffeur-driven road trips across South India or comprehensive event & wedding fleet packages.
          </p>
        </div>
      </section>

      {/* Mini-Itineraries Section */}
      <section className="section">
        <div className="container">
          <div style={{ marginBottom: '40px' }}>
            <span className="eyebrow">South India Road Trips</span>
            <div className="badge badge-sky" style={{ marginBottom: '8px' }}>Chauffeur Road Trips</div>
            <h2 style={{ fontSize: '1.8rem' }}>South India Mini-Itineraries</h2>
            <p style={{ color: 'var(--color-ink-600)', marginTop: '8px' }}>
              Explore coffee country, hill stations, heritage ruins, sacred temples, and coastal beaches at your own pace.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '32px' }}>
            {miniItineraries.map(pkg => (
              <div key={pkg.slug} className="card" style={{ padding: '28px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div className="badge badge-sky" style={{ marginBottom: '14px', fontSize: '0.75rem' }}>{pkg.duration}</div>
                  <h3 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>{pkg.name}</h3>
                  <p style={{ fontSize: '0.95rem', color: 'var(--color-ink-600)', marginBottom: '16px', lineHeight: '1.6' }}>
                    {pkg.tagline}
                  </p>

                  <div style={{ backgroundColor: 'var(--color-steel-100)', padding: '14px', borderRadius: '10px', marginBottom: '16px', fontSize: '0.85rem' }}>
                    <strong>Best for:</strong> <span style={{ color: 'var(--color-navy-900)' }}>{pkg.bestFor}</span>
                  </div>

                  <div style={{ marginBottom: '20px' }}>
                    <strong style={{ fontSize: '0.85rem', color: 'var(--color-navy-900)' }}>Day-by-Day Highlights:</strong>
                    <ul style={{ listStyle: 'none', padding: 0, marginTop: '8px', fontSize: '0.85rem', color: 'var(--color-ink-700)', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                      {pkg.itineraryDays.map((d, idx) => (
                        <li key={idx} style={{ display: 'flex', gap: '8px' }}>
                          <span style={{ color: '#29ABE2', fontWeight: 'bold' }}>{d.day}:</span> {d.title}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div style={{ paddingTop: '16px', borderTop: '1px solid var(--color-steel-200)' }}>
                  <Link href={`/packages/${pkg.slug}`} className="btn btn-navy" style={{ width: '100%', fontSize: '0.88rem' }}>
                    View Complete Itinerary <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Packages Section */}
      <section className="section section-steel">
        <div className="container">
          <div style={{ marginBottom: '40px' }}>
            <span className="eyebrow">Life Events & Summits</span>
            <div className="badge badge-sky" style={{ marginBottom: '8px' }}>Event Mobility Packages</div>
            <h2 style={{ fontSize: '1.8rem' }}>Weddings & Corporate Event Packages</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '32px' }}>
            {eventPackages.map(pkg => (
              <div key={pkg.slug} className="card" style={{ padding: '28px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div className="badge badge-navy" style={{ marginBottom: '14px', fontSize: '0.75rem' }}>{pkg.duration}</div>
                  <h3 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>{pkg.name}</h3>
                  <p style={{ fontSize: '0.95rem', color: 'var(--color-ink-600)', marginBottom: '16px', lineHeight: '1.6' }}>
                    {pkg.tagline}
                  </p>

                  <div style={{ backgroundColor: '#FFF', padding: '14px', borderRadius: '10px', border: '1px solid var(--color-steel-200)', marginBottom: '16px', fontSize: '0.85rem' }}>
                    <strong>Fleet Deployed:</strong> <span style={{ color: '#1E8FC2', fontWeight: '700' }}>{pkg.fleetUsed}</span>
                  </div>
                </div>

                <div style={{ paddingTop: '16px', borderTop: '1px solid var(--color-steel-200)' }}>
                  <Link href={`/packages/${pkg.slug}`} className="btn btn-navy" style={{ width: '100%', fontSize: '0.88rem' }}>
                    View Package Details <ArrowRight size={14} />
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
