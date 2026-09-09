'use client';

import Link from 'next/link';
import { servicesData } from '@/data/services';
import SafetyBlock from '@/components/SafetyBlock';
import { ArrowRight, ChevronRight, CheckCircle2 } from 'lucide-react';

export default function ServicesHubPage() {
  const businessServices = servicesData.filter(s => s.categoryCluster === 'for-business');
  const journeyServices = servicesData.filter(s => s.categoryCluster === 'for-journeys');
  const momentServices = servicesData.filter(s => s.categoryCluster === 'for-moments');

  return (
    <div>
      {/* Services Hero */}
      <section className="section section-dark" style={{ paddingTop: '80px', paddingBottom: '70px' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '820px' }}>
          <div className="badge badge-sky" style={{ marginBottom: '16px', color: '#4DC0EC', backgroundColor: 'rgba(41,171,226,0.18)' }}>
            Our Services
          </div>
          <h1 style={{ color: '#FFF', marginBottom: '20px', fontSize: '2.5rem' }}>
            Mobility Built Around Your Journey
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1.1rem', lineHeight: '1.7' }}>
            Not every journey needs the same vehicle, schedule, or service. A business executive may need a car for an entire day. A technology company may require daily employee transportation. A conference may need hundreds of airport and hotel transfers. A family may need a chauffeur for a week-long road journey. Suhalaya brings these requirements together under one mobility partner.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '56px' }}>
            
            {/* For Business Cluster */}
            <div>
              <div style={{ marginBottom: '28px' }}>
                <span className="eyebrow">Corporate & Enterprise</span>
                <div className="badge badge-sky" style={{ marginBottom: '8px' }}>Corporate Solutions</div>
                <h2 style={{ fontSize: '1.8rem' }}>Mobility That Keeps Business Moving</h2>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '28px' }}>
                {businessServices.map(s => (
                  <div key={s.slug} className="card" style={{ padding: '28px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <div>
                      <h3 style={{ fontSize: '1.3rem', marginBottom: '10px', color: 'var(--color-navy-900)' }}>{s.name}</h3>
                      <p style={{ fontSize: '0.92rem', color: 'var(--color-ink-600)', marginBottom: '20px', lineHeight: '1.6' }}>
                        {s.tagline}
                      </p>
                    </div>

                    <div style={{ paddingTop: '16px', borderTop: '1px solid var(--color-steel-200)' }}>
                      <Link href={`/services/${s.slug}`} className="btn btn-navy" style={{ width: '100%', fontSize: '0.88rem' }}>
                        View Service Details <ArrowRight size={14} />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* For Journeys Cluster */}
            <div>
              <div style={{ marginBottom: '28px' }}>
                <span className="eyebrow">Outstation & Travel</span>
                <div className="badge badge-sky" style={{ marginBottom: '8px' }}>Outstation Journeys</div>
                <h2 style={{ fontSize: '1.8rem' }}>You Plan the Journey. We Handle the Road.</h2>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '28px' }}>
                {journeyServices.map(s => (
                  <div key={s.slug} className="card" style={{ padding: '28px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <div>
                      <h3 style={{ fontSize: '1.3rem', marginBottom: '10px', color: 'var(--color-navy-900)' }}>{s.name}</h3>
                      <p style={{ fontSize: '0.92rem', color: 'var(--color-ink-600)', marginBottom: '20px', lineHeight: '1.6' }}>
                        {s.tagline}
                      </p>
                    </div>

                    <div style={{ paddingTop: '16px', borderTop: '1px solid var(--color-steel-200)' }}>
                      <Link href={`/services/${s.slug}`} className="btn btn-navy" style={{ width: '100%', fontSize: '0.88rem' }}>
                        View Journey Details <ArrowRight size={14} />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* For Moments Cluster */}
            <div>
              <div style={{ marginBottom: '28px' }}>
                <span className="eyebrow">Weddings & Events</span>
                <div className="badge badge-sky" style={{ marginBottom: '8px' }}>Events & Celebrations</div>
                <h2 style={{ fontSize: '1.8rem' }}>One Event. Hundreds of Movements. One Mobility Plan.</h2>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '28px' }}>
                {momentServices.map(s => (
                  <div key={s.slug} className="card" style={{ padding: '28px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <div>
                      <h3 style={{ fontSize: '1.3rem', marginBottom: '10px', color: 'var(--color-navy-900)' }}>{s.name}</h3>
                      <p style={{ fontSize: '0.92rem', color: 'var(--color-ink-600)', marginBottom: '20px', lineHeight: '1.6' }}>
                        {s.tagline}
                      </p>
                    </div>

                    <div style={{ paddingTop: '16px', borderTop: '1px solid var(--color-steel-200)' }}>
                      <Link href={`/services/${s.slug}`} className="btn btn-navy" style={{ width: '100%', fontSize: '0.88rem' }}>
                        View Event Mobility <ArrowRight size={14} />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      <SafetyBlock />

      {/* Final CTA */}
      <section className="section section-dark" style={{ textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '640px' }}>
          <h2 style={{ color: '#FFF', marginBottom: '16px', fontSize: '2rem' }}>
            Tell Us Where You Need to Go. We'll Plan the Mobility.
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.8)', marginBottom: '28px' }}>
            Get an instant custom quote from our 24/7 corporate dispatch desk.
          </p>
          <button 
            onClick={() => {
              const btn = document.getElementById('header-quote-btn');
              if (btn) btn.click();
            }} 
            className="btn btn-primary"
            style={{ padding: '14px 32px' }}
          >
            Request a Quote Now
          </button>
        </div>
      </section>
    </div>
  );
}
