'use client';

import { Building2, ShieldCheck, Award, Star, CheckCircle } from 'lucide-react';

export default function ClientLogosMarquee() {
  const clients = [
    { name: 'Global Tech Parks', category: 'IT / ITES Enterprise' },
    { name: 'Apex Pharma India', category: 'Healthcare & Research' },
    { name: 'Vanguard Capital', category: 'BFSI & Private Equity' },
    { name: 'Horizon Aerospace', category: 'Defense & Aviation' },
    { name: 'Royal South Hospitality', category: 'Luxury Hotels' },
    { name: 'Summit Conventions', category: 'MICE & Event Management' },
  ];

  return (
    <section style={{ backgroundColor: 'var(--color-navy-950)', color: '#FFF', padding: '40px 0', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '24px' }}>
          <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.85rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.12em' }}>
            Trusted by Enterprise Leaders & Fortune 500 Travel Desks Across India
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))', gap: '20px', alignItems: 'center' }}>
          {clients.map((client, idx) => (
            <div 
              key={idx}
              style={{
                backgroundColor: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '12px',
                padding: '16px 20px',
                textAlign: 'center',
                transition: 'all 0.3s ease',
                cursor: 'default'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(0, 180, 216, 0.1)';
                e.currentTarget.style.borderColor = 'rgba(0, 180, 216, 0.4)';
                e.currentTarget.style.transform = 'translateY(-3px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.03)';
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <div style={{ fontWeight: '800', color: '#FFF', fontSize: '0.98rem', letterSpacing: '-0.01em' }}>
                {client.name}
              </div>
              <div style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.5)', marginTop: '4px' }}>
                {client.category}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
