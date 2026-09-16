import Link from 'next/link';
import { fleetData } from '@/data/fleet';
import { Car, ShieldCheck, CheckCircle2, ArrowRight, Users, Snowflake, Briefcase, ChevronRight } from 'lucide-react';
import { QuoteButton, DiscussButton } from '@/components/QuoteButton';
import SafetyBlock from '@/components/SafetyBlock';

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

      {/* 2. Fleet Categories Showcase - Horizontal Row Scroll */}
      <section className="section" style={{ backgroundColor: 'var(--color-steel-50, #f8fafc)' }}>
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '64px' }}>
            {fleetData.map(f => (
              <div key={f.id} id={f.id} style={{ scrollMarginTop: '100px' }}>
                
                {/* Category Header */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '20px', flexWrap: 'wrap', gap: '12px' }}>
                  <div>
                    <div className="badge badge-sky" style={{ marginBottom: '8px', fontSize: '0.78rem' }}>{f.tag}</div>
                    <h2 style={{ fontSize: '1.85rem', color: 'var(--color-navy-900)' }}>{f.name} Class</h2>
                  </div>
                  <div style={{ fontSize: '0.85rem', color: '#64748B', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '4px' }}>
                    Scroll to view cars <ChevronRight size={16} color="#29ABE2" />
                  </div>
                </div>

                {/* Horizontal Scroll Row */}
                <div
                  className="hide-scroll"
                  style={{
                    display: 'flex',
                    overflowX: 'auto',
                    gap: '24px',
                    paddingBottom: '16px',
                    scrollSnapType: 'x mandatory',
                    WebkitOverflowScrolling: 'touch',
                    alignItems: 'stretch'
                  }}
                >
                  {/* 1. First Card: Category Overview Box ("pahile abhi joh box hai") */}
                  <div
                    className="card"
                    style={{
                      minWidth: '340px',
                      maxWidth: '360px',
                      flex: '0 0 340px',
                      scrollSnapAlign: 'start',
                      padding: '28px',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      background: 'linear-gradient(135deg, #0A192F 0%, #172A45 100%)',
                      color: '#FFFFFF',
                      borderRadius: '16px',
                      boxShadow: '0 12px 30px rgba(10,25,47,0.18)'
                    }}
                  >
                    <div>
                      <div
                        style={{
                          display: 'inline-block',
                          backgroundColor: 'rgba(41,171,226,0.22)',
                          color: '#4DC0EC',
                          padding: '4px 12px',
                          borderRadius: '20px',
                          fontSize: '0.72rem',
                          fontWeight: '700',
                          textTransform: 'uppercase',
                          letterSpacing: '0.05em',
                          marginBottom: '14px'
                        }}
                      >
                        Category Overview
                      </div>
                      
                      <h3 style={{ fontSize: '1.45rem', color: '#FFFFFF', marginBottom: '12px' }}>
                        {f.name} Fleet
                      </h3>
                      
                      <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.9rem', marginBottom: '20px', lineHeight: '1.6' }}>
                        {f.idealFor}
                      </p>

                      <div style={{ backgroundColor: 'rgba(255,255,255,0.08)', borderRadius: '10px', padding: '12px 16px', marginBottom: '20px' }}>
                        <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.6)', textTransform: 'uppercase', fontWeight: '700' }}>
                          Standard Capacity
                        </div>
                        <div style={{ fontSize: '0.92rem', color: '#4DC0EC', fontWeight: '700', marginTop: '3px' }}>
                          {f.capacity}
                        </div>
                      </div>

                      <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.7)', textTransform: 'uppercase', fontWeight: '700', marginBottom: '10px' }}>
                        Key Amenities & Standards:
                      </div>
                      <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px', padding: 0, margin: '0 0 20px 0' }}>
                        {f.features.map((feat, idx) => (
                          <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.86rem', color: 'rgba(255,255,255,0.92)' }}>
                            <CheckCircle2 size={15} color="#29ABE2" /> {feat}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <QuoteButton
                      className="btn btn-primary"
                      style={{ width: '100%', justifyContent: 'center', padding: '12px 20px', fontSize: '0.92rem' }}
                    >
                      Request Quote for {f.name} <ArrowRight size={14} />
                    </QuoteButton>
                  </div>

                  {/* 2. Individual Car Cards ("then first car then second then aise karke") */}
                  {(f.cars || []).map((car, idx) => (
                    <div
                      key={idx}
                      className="card"
                      style={{
                        minWidth: '310px',
                        maxWidth: '330px',
                        flex: '0 0 310px',
                        scrollSnapAlign: 'start',
                        padding: '24px',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        backgroundColor: '#FFFFFF',
                        borderRadius: '16px',
                        border: '1px solid #E2E8F0',
                        boxShadow: 'var(--shadow-card)',
                        transition: 'transform 0.2s ease, box-shadow 0.2s ease'
                      }}
                    >
                      <div>
                        <div className="badge badge-sky" style={{ marginBottom: '10px', fontSize: '0.72rem' }}>
                          {car.type || f.tag}
                        </div>
                        
                        <h4 style={{ fontSize: '1.22rem', color: 'var(--color-navy-900)', marginBottom: '14px', fontWeight: '700' }}>
                          {car.name}
                        </h4>

                        {/* Car Image Preview Container */}
                        <div
                          style={{
                            backgroundColor: '#F8FAFC',
                            borderRadius: '12px',
                            border: '1px solid #E2E8F0',
                            padding: '12px',
                            marginBottom: '16px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            height: '160px',
                            overflow: 'hidden'
                          }}
                        >
                          {car.image ? (
                            <img
                              src={car.image}
                              alt={car.name}
                              style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain' }}
                            />
                          ) : (
                            <div style={{ textAlign: 'center', color: '#94A3B8' }}>
                              <Car size={42} strokeWidth={1.4} style={{ margin: '0 auto 8px', opacity: 0.55 }} />
                              <div style={{ fontSize: '0.78rem', fontWeight: '600', color: '#64748B' }}>
                                Verified Chauffeur Vehicle
                              </div>
                            </div>
                          )}
                        </div>

                        {/* Key Specs Pill List */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '9px', marginBottom: '20px' }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.88rem', color: 'var(--color-navy-900)', fontWeight: '600' }}>
                            <Users size={16} color="#29ABE2" /> {car.seats}
                          </div>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.88rem', color: 'var(--color-navy-900)', fontWeight: '600' }}>
                            <Snowflake size={16} color="#29ABE2" /> {car.ac}
                          </div>
                          {car.luggage && (
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.88rem', color: 'var(--color-ink-700)' }}>
                              <Briefcase size={16} color="#64748B" /> {car.luggage}
                            </div>
                          )}
                        </div>
                      </div>

                      <div style={{ paddingTop: '16px', borderTop: '1px solid #F1F5F9' }}>
                        <QuoteButton
                          className="btn btn-navy"
                          style={{ width: '100%', justifyContent: 'center', fontSize: '0.9rem', padding: '11px 18px' }}
                        >
                          Request Quote <ArrowRight size={14} />
                        </QuoteButton>
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2.5 Trust & Women Safety */}
      <SafetyBlock />

      {/* 3. Fleet Maintenance Assurance */}
      <section className="section">
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
