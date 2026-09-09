import Link from 'next/link';
import { fleetData } from '@/data/fleet';
import { Car, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';
import { QuoteButton, DiscussButton } from '@/components/QuoteButton';

export const metadata = {
  title: 'Our Fleet — Premium Vehicles for Every Journey',
  description:
    'Explore Suhalaya\'s fleet of premium chauffeur-driven vehicles — sedans, SUVs, Tempo Travellers, and luxury coaches for corporate travel, airport transfers, and road trips across South India.',
  alternates: { canonical: 'https://suhalayatravels.com/fleet' },
  openGraph: {
    title: 'Our Fleet — Premium Vehicles | Suhalaya Travels',
    description: 'Sedans, SUVs, luxury coaches — every vehicle chauffeur-driven and meticulously maintained for your comfort across South India.',
    url: 'https://suhalayatravels.com/fleet',
  },
};

export default function FleetPage() {
  return (
    <div>
      {/* 1. Fleet Hero */}
      <section className="section section-dark" style={{ paddingTop: '80px', paddingBottom: '70px' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '820px' }}>
          <div className="badge badge-sky" style={{ marginBottom: '16px', color: '#4DC0EC', backgroundColor: 'rgba(41,171,226,0.18)' }}>
            Suhalaya Fleet
          </div>
          <h1 style={{ color: '#FFF', marginBottom: '18px', fontSize: '2.6rem' }}>
            The Right Vehicle for Every Requirement.
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.92)', fontSize: '1.15rem', fontWeight: '600', marginBottom: '12px' }}>
            One journey may call for practicality. Another calls for presence.
          </p>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1rem', lineHeight: '1.7' }}>
            The fleet ranges from everyday sedans and executive cars to premium SUVs, luxury vehicles, vans and large-capacity coaches.
          </p>
        </div>
      </section>

      {/* 2. Fleet Categories Showcase */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
            {fleetData.map(f => (
              <div key={f.id} id={f.id} className="card" style={{ padding: '36px', scrollMarginTop: '100px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>
                  <div>
                    <div className="badge badge-sky" style={{ marginBottom: '16px' }}>{f.tag}</div>
                    <h2 style={{ fontSize: '1.8rem', marginBottom: '12px' }}>{f.name}</h2>
                    <p style={{ color: 'var(--color-ink-700)', fontSize: '1rem', marginBottom: '20px', lineHeight: '1.6' }}>
                      {f.idealFor}
                    </p>

                    <div style={{ backgroundColor: 'var(--color-steel-100)', padding: '16px 20px', borderRadius: '12px', marginBottom: '20px' }}>
                      <div style={{ fontSize: '0.85rem', color: 'var(--color-navy-900)', fontWeight: '700', textTransform: 'uppercase' }}>Fleet Models & Options:</div>
                      <div style={{ fontSize: '1.02rem', fontWeight: '700', color: '#1E8FC2', marginTop: '4px' }}>
                        {f.models.join(' • ')}
                      </div>
                    </div>

                    <div style={{ fontSize: '0.95rem', fontWeight: '700', color: 'var(--color-navy-900)' }}>
                      Capacity Spec: <span style={{ color: 'var(--color-ink-700)', fontWeight: '400' }}>{f.capacity}</span>
                    </div>
                  </div>

                  <div>
                    <h3 style={{ fontSize: '1.15rem', marginBottom: '16px' }}>Features & Amenities</h3>
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', padding: 0, margin: 0 }}>
                      {f.features.map((feat, idx) => (
                        <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.92rem', color: 'var(--color-ink-900)', fontWeight: '500' }}>
                          <CheckCircle2 size={16} color="#29ABE2" /> {feat}
                        </li>
                      ))}
                    </ul>

                    <div style={{ marginTop: '28px' }}>
                      <QuoteButton className="btn btn-navy">
                        Request Quote for {f.name} <ArrowRight size={14} />
                      </QuoteButton>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Fleet Maintenance Assurance */}
      <section className="section section-steel">
        <div className="container" style={{ textAlign: 'center', maxWidth: '640px' }}>
          <ShieldCheck size={48} color="#29ABE2" style={{ margin: '0 auto 16px' }} />
          <h2>Strict Maintenance & Inspection Standards</h2>
          <p style={{ color: 'var(--color-ink-700)', marginTop: '12px', fontSize: '1rem', lineHeight: '1.6' }}>
            Every vehicle undergoes regular mechanical audits, AC sanitization, and safety checks before dispatch to ensure total reliability for your journey.
          </p>
        </div>
      </section>

      {/* 4. FLEET CTA */}
      <section className="section section-dark" style={{ textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '680px' }}>
          <h2 style={{ color: '#FFF', marginBottom: '16px', fontSize: '2.2rem' }}>
            Not Sure Which Vehicle You Need?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1.08rem', marginBottom: '32px', lineHeight: '1.6' }}>
            Tell us the passenger count, journey type and destination. We'll help identify the appropriate vehicle category.
          </p>
          <DiscussButton className="btn btn-primary" style={{ padding: '16px 36px', fontSize: '1rem' }}>
            Discuss Your Requirement
          </DiscussButton>
        </div>
      </section>
    </div>
  );
}
