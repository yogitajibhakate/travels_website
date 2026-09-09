'use client';

import BookingWidget from './BookingWidget';
import { ShieldCheck, Clock, Navigation, Award, ArrowRight } from 'lucide-react';

export default function Hero({ onOpenQuoteModal, onOpenCorporateModal }) {
  return (
    <section 
      style={{ 
        backgroundImage: `linear-gradient(to right, rgba(7, 15, 30, 0.45) 0%, rgba(7, 15, 30, 0.25) 50%, rgba(7, 15, 30, 0.1) 100%), url('/images/hero-bg.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center right',
        backgroundRepeat: 'no-repeat',
        color: '#FFF', 
        paddingTop: '80px', 
        paddingBottom: '90px', 
        position: 'relative', 
        overflow: 'hidden' 
      }}
    >
      {/* Hero Background Image Displayed Cleanly */}

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '48px', alignItems: 'center' }}>
          
          {/* Left Column: Hero Copy */}
          <div>
            {/* Tagline-Style Eyebrow (Grey Italic as specified in §3) */}
            <span className="eyebrow" style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.95rem' }}>
              Exploring the world of comfort
            </span>

            <div className="badge badge-sky" style={{ marginBottom: '22px', backdropFilter: 'blur(12px)', backgroundColor: 'rgba(41,171,226,0.15)', border: '1px solid rgba(41,171,226,0.35)', color: '#29ABE2', padding: '7px 18px' }}>
              <ShieldCheck size={14} color="#29ABE2" /> Suhalaya Mobility Solutions
            </div>
            
            <h1 style={{ color: '#FFF', marginBottom: '20px', lineHeight: '1.12', fontSize: 'clamp(2.5rem, 4.5vw, 3.8rem)' }}>
              Move Business. Move People. <br />
              <span className="gradient-text-sky">Move with Confidence.</span>
            </h1>

            <p style={{ color: 'rgba(255,255,255,0.92)', fontSize: '1.18rem', fontWeight: '600', marginBottom: '14px', lineHeight: '1.4' }}>
              Chauffeur-driven mobility for businesses, executives, events and journeys across India.
            </p>

            <p style={{ color: 'rgba(255,255,255,0.78)', fontSize: '0.98rem', marginBottom: '36px', lineHeight: '1.65', maxWidth: '580px' }}>
              From an airport transfer for an important client to employee transportation for an entire organisation, Suhalaya brings together professional chauffeurs, a diverse fleet, and coordinated mobility solutions for journeys of every scale.
            </p>

            {/* Dual CTAs — §2a: sky-500 (#29ABE2) is primary action color */}
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginBottom: '44px' }}>
              <button 
                onClick={onOpenQuoteModal} 
                className="btn btn-primary"
                style={{ padding: '16px 36px', fontSize: '1rem' }}
                id="hero-quote-btn"
              >
                Plan Your Journey <ArrowRight size={18} />
              </button>
              
              <button 
                onClick={onOpenCorporateModal} 
                className="btn btn-outline-white"
                style={{ padding: '16px 32px', fontSize: '1rem' }}
                id="hero-corporate-btn"
              >
                Corporate Enquiry
              </button>
            </div>

            {/* Key Value Pillars */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', fontSize: '0.9rem', color: 'rgba(255,255,255,0.85)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ color: '#29ABE2', fontWeight: 'bold' }}>✓</span> Professional Uniformed Chauffeurs
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ color: '#29ABE2', fontWeight: 'bold' }}>✓</span> 24/7 Corporate Dispatch Desk
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ color: '#29ABE2', fontWeight: 'bold' }}>✓</span> Diverse Scalable Fleet
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ color: '#29ABE2', fontWeight: 'bold' }}>✓</span> Journeys Across South India & Pan-India
              </div>
            </div>
          </div>

          {/* Right Column: Enquiry Widget */}
          <div>
            <BookingWidget sourcePage="/" />
          </div>
        </div>

        {/* Trust Metrics Strip (§4 & §5) */}
        <div style={{ marginTop: '72px', paddingTop: '36px', borderTop: '1px solid rgba(255,255,255,0.12)', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '14px', borderRadius: 'var(--radius-md)', backgroundColor: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
            <div style={{ width: '46px', height: '46px', borderRadius: '10px', backgroundColor: 'rgba(41,171,226,0.18)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#29ABE2', flexShrink: 0 }}>
              <ShieldCheck size={24} />
            </div>
            <div>
              <div style={{ fontWeight: '700', color: '#FFF', fontSize: '0.96rem' }}>Background-Vetted Drivers</div>
              <div style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.65)' }}>Professional conduct & safety</div>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '14px', borderRadius: 'var(--radius-md)', backgroundColor: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
            <div style={{ width: '46px', height: '46px', borderRadius: '10px', backgroundColor: 'rgba(41,171,226,0.18)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#29ABE2', flexShrink: 0 }}>
              <Clock size={24} />
            </div>
            <div>
              <div style={{ fontWeight: '700', color: '#FFF', fontSize: '0.96rem' }}>Flight Tracking Transfers</div>
              <div style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.65)' }}>Zero waiting time guaranteed</div>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '14px', borderRadius: 'var(--radius-md)', backgroundColor: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
            <div style={{ width: '46px', height: '46px', borderRadius: '10px', backgroundColor: 'rgba(41,171,226,0.18)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#29ABE2', flexShrink: 0 }}>
              <Navigation size={24} />
            </div>
            <div>
              <div style={{ fontWeight: '700', color: '#FFF', fontSize: '0.96rem' }}>24/7 Journey Control</div>
              <div style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.65)' }}>Central dispatch & tracking</div>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '14px', borderRadius: 'var(--radius-md)', backgroundColor: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
            <div style={{ width: '46px', height: '46px', borderRadius: '10px', backgroundColor: 'rgba(41,171,226,0.18)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#29ABE2', flexShrink: 0 }}>
              <Award size={24} />
            </div>
            <div>
              <div style={{ fontWeight: '700', color: '#FFF', fontSize: '0.96rem' }}>Consolidated Billing</div>
              <div style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.65)' }}>GST itemized digital invoices</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
