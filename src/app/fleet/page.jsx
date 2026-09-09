'use client';

import Link from 'next/link';
import { fleetData } from '@/data/fleet';
import { Car, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';

export default function FleetPage() {
  return (
    <div>
      {/* Fleet Hero */}
      <section className="section section-dark" style={{ paddingTop: '80px', paddingBottom: '70px' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '820px' }}>
          <div className="badge badge-sky" style={{ marginBottom: '16px', color: '#4DC0EC', backgroundColor: 'rgba(41,171,226,0.18)' }}>
            Our Fleet
          </div>
          <h1 style={{ color: '#FFF', marginBottom: '16px', fontSize: '2.5rem' }}>
            A Vehicle for Every Requirement
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.15rem', fontWeight: '600', marginBottom: '12px' }}>
            The Right Vehicle for Every Requirement.
          </p>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1rem', lineHeight: '1.7' }}>
            From a single executive travelling to a 49-member corporate delegation, Suhalaya's fleet is built around different passenger requirements. Our fleet ranges from practical sedans and executive cars to premium SUVs, luxury vehicles, VIP vans, tempo travellers and large air-conditioned coaches. Choose a vehicle based on passenger capacity, comfort, luggage, occasion and level of service.
          </p>
        </div>
      </section>

      {/* Fleet Categories Showcase */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
            {fleetData.map(f => (
              <div key={f.id} className="card" style={{ padding: '36px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>
                  <div>
                    <div className="badge badge-sky" style={{ marginBottom: '16px' }}>{f.tag}</div>
                    <h2 style={{ fontSize: '1.8rem', marginBottom: '12px' }}>{f.name}</h2>
                    <p style={{ color: 'var(--color-ink-600)', fontSize: '1rem', marginBottom: '20px', lineHeight: '1.6' }}>
                      {f.idealFor}
                    </p>

                    <div style={{ backgroundColor: 'var(--color-steel-100)', padding: '16px 20px', borderRadius: '12px', marginBottom: '20px' }}>
                      <div style={{ fontSize: '0.85rem', color: 'var(--color-navy-900)', fontWeight: '700', textTransform: 'uppercase' }}>Included Fleet Models:</div>
                      <div style={{ fontSize: '1.05rem', fontWeight: '700', color: '#1E8FC2', marginTop: '4px' }}>
                        {f.models.join(' • ')}
                      </div>
                    </div>

                    <div style={{ fontSize: '0.95rem', fontWeight: '700', color: 'var(--color-navy-900)' }}>
                      Passenger & Luggage Capacity: <span style={{ color: 'var(--color-ink-700)', fontWeight: '400' }}>{f.capacity}</span>
                    </div>
                  </div>

                  <div>
                    <h3 style={{ fontSize: '1.15rem', marginBottom: '16px' }}>Features & Standards</h3>
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                      {f.features.map((feat, idx) => (
                        <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.9rem', color: 'var(--color-ink-700)' }}>
                          <CheckCircle2 size={16} color="#29ABE2" /> {feat}
                        </li>
                      ))}
                    </ul>

                    <div style={{ marginTop: '28px' }}>
                      <button 
                        onClick={() => {
                          const btn = document.getElementById('header-quote-btn');
                          if (btn) btn.click();
                        }}
                        className="btn btn-navy"
                      >
                        Request Quote for {f.category} <ArrowRight size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fleet Maintenance Banner */}
      <section className="section section-steel">
        <div className="container" style={{ textAlign: 'center', maxWidth: '640px' }}>
          <ShieldCheck size={48} color="#29ABE2" style={{ margin: '0 auto 16px' }} />
          <h2>Strict Maintenance & Inspection Standards</h2>
          <p style={{ color: 'var(--color-ink-600)', marginTop: '12px', fontSize: '1rem', lineHeight: '1.6' }}>
            Every vehicle undergoes regular mechanical audits, AC sanitization, and safety checks before dispatch to ensure total reliability for your journey.
          </p>
        </div>
      </section>
    </div>
  );
}
