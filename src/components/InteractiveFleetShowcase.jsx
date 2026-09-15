'use client';

import { useState } from 'react';
import Link from 'next/link';
import { fleetData } from '@/data/fleet';
import { Users, Briefcase, ShieldCheck, Check, ArrowRight, Sparkles } from 'lucide-react';

export default function InteractiveFleetShowcase({ onOpenQuoteModal }) {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Fleet' },
    { id: 'Economy', label: 'Economy' },
    { id: 'Executive', label: 'Executive' },
    { id: 'Premium', label: 'Premium' },
    { id: 'Luxury', label: 'Luxury' },
    { id: 'Multi-passenger', label: 'Multi-passenger' },
  ];

  const filteredFleet = activeCategory === 'all' 
    ? fleetData 
    : fleetData.filter(item => item.tag === activeCategory);

  const fleetImages = {
    'economy': '/images/executive-chauffeur.png',
    'executive': '/images/executive-chauffeur.png',
    'premium': '/images/south-india-trip.png',
    'luxury': '/images/wedding-event-fleet.png',
    'multi-passenger': '/images/employee-shuttle-fleet.png',
  };

  return (
    <section className="section section-steel" id="interactive-fleet">
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 40px' }}>
          <span className="eyebrow">Exploring the world of comfort</span>
          <div className="badge badge-sky" style={{ marginBottom: '12px' }}>
            <Sparkles size={14} style={{ marginRight: '6px' }} /> Premium Fleet Selection
          </div>
          <h2 style={{ fontSize: '2.4rem', color: 'var(--color-navy-900)' }}>
            A Chauffeur-Driven Vehicle for Every Journey
          </h2>
          <p style={{ color: 'var(--color-ink-600)', marginTop: '12px', fontSize: '1.05rem' }}>
            Maintained to factory standards, sanitized before every dispatch, and driven by background-verified professional chauffeurs.
          </p>

          {/* Category Filter Pills */}
          <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap', marginTop: '28px' }}>
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                style={{
                  padding: '10px 22px',
                  borderRadius: 'var(--radius-pill)',
                  fontWeight: '700',
                  fontSize: '0.88rem',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.25s ease',
                  backgroundColor: activeCategory === cat.id ? 'var(--color-navy-900)' : 'var(--color-white)',
                  color: activeCategory === cat.id ? '#FFF' : 'var(--color-ink-700)',
                  boxShadow: activeCategory === cat.id ? '0 8px 20px rgba(11, 25, 44, 0.25)' : '0 2px 8px rgba(0,0,0,0.04)',
                  border: activeCategory === cat.id ? '1px solid var(--color-navy-900)' : '1px solid var(--color-steel-300)'
                }}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        <style jsx>{`
          .fleet-scroll-container {
            display: flex;
            gap: 24px;
            overflow-x: auto;
            padding-bottom: 24px;
            scroll-snap-type: x mandatory;
            -webkit-overflow-scrolling: touch;
            scrollbar-width: none; /* Firefox */
          }
          .fleet-scroll-container::-webkit-scrollbar {
            display: none; /* Chrome, Safari */
          }
          .fleet-card {
            flex: 0 0 340px;
            scroll-snap-align: start;
          }
          @media (min-width: 768px) {
            .fleet-scroll-container {
              gap: 32px;
            }
            .fleet-card {
              flex: 0 0 380px;
            }
          }
        `}</style>
        
        {/* Fleet Grid / Scroll */}
        <div className="fleet-scroll-container">
          {filteredFleet.map(vehicle => {
            const vehicleImage = fleetImages[vehicle.id] || '/images/executive-chauffeur.png';
            return (
              <div 
                key={vehicle.id} 
                className="card fleet-card"
                style={{
                  padding: '0',
                  display: 'flex',
                  flexDirection: 'column',
                  justify: 'space-between',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  border: '1px solid var(--color-steel-200)',
                  backgroundColor: '#FFF',
                  boxShadow: 'var(--shadow-card)'
                }}
              >
                {/* Vehicle Image Banner with Overlay Badge */}
                <div style={{ position: 'relative', height: '210px', overflow: 'hidden' }}>
                  <img 
                    src={vehicleImage} 
                    alt={vehicle.name} 
                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                    className="fleet-card-img"
                  />
                  <div style={{ position: 'absolute', top: '16px', left: '16px' }}>
                    <span className="badge badge-sky" style={{ backdropFilter: 'blur(8px)', backgroundColor: 'rgba(11, 25, 44, 0.85)', color: '#48CAE4', border: '1px solid rgba(0,180,216,0.3)' }}>
                      {vehicle.tag}
                    </span>
                  </div>
                  <div style={{ position: 'absolute', bottom: '16px', right: '16px', backgroundColor: 'rgba(0,180,216,0.95)', color: '#FFF', padding: '4px 12px', borderRadius: 'var(--radius-pill)', fontWeight: '700', fontSize: '0.8rem', backdropFilter: 'blur(6px)' }}>
                    {vehicle.capacity}
                  </div>
                </div>

                {/* Card Content */}
                <div style={{ padding: '28px', flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <h3 style={{ fontSize: '1.4rem', color: 'var(--color-navy-900)', marginBottom: '8px' }}>
                      {vehicle.name}
                    </h3>
                    
                    <div style={{ fontSize: '0.88rem', color: 'var(--color-sky-600)', fontWeight: '700', marginBottom: '14px' }}>
                      {vehicle.models.join(' • ')}
                    </div>

                    <p style={{ fontSize: '0.92rem', color: 'var(--color-ink-600)', lineHeight: '1.6', marginBottom: '20px' }}>
                      {vehicle.idealFor}
                    </p>

                    {/* Features List */}
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '24px', backgroundColor: 'var(--color-steel-50)', padding: '14px', borderRadius: '12px' }}>
                      <div style={{ fontSize: '0.8rem', color: 'var(--color-navy-900)', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <Check size={14} color="#00B4D8" /> GPS Live Tracking
                      </div>
                      <div style={{ fontSize: '0.8rem', color: 'var(--color-navy-900)', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <Check size={14} color="#00B4D8" /> Bottled Water
                      </div>
                      <div style={{ fontSize: '0.8rem', color: 'var(--color-navy-900)', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <Check size={14} color="#00B4D8" /> Clean Leather Interior
                      </div>
                      <div style={{ fontSize: '0.8rem', color: 'var(--color-navy-900)', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <Check size={14} color="#00B4D8" /> Uniformed Chauffeur
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                    <button 
                      onClick={() => {
                        if (onOpenQuoteModal) onOpenQuoteModal();
                        else {
                          const btn = document.getElementById('header-quote-btn');
                          if (btn) btn.click();
                        }
                      }}
                      className="btn btn-navy"
                      style={{ flex: 1, padding: '12px 18px', fontSize: '0.88rem' }}
                    >
                      Book / Request Quote
                    </button>
                    <Link 
                      href="/fleet" 
                      className="btn btn-outline"
                      style={{ padding: '12px 16px', fontSize: '0.88rem' }}
                    >
                      Details
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div style={{ textAlign: 'center', marginTop: '48px' }}>
          <Link href="/fleet" className="btn btn-primary" style={{ padding: '14px 32px' }}>
            View Full Fleet Catalog & Specifications <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
