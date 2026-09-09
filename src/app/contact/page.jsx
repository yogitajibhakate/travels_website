'use client';

import BookingWidget from '@/components/BookingWidget';
import { MapPin, Phone, Mail, Clock, Building2, Calendar, Compass, UserCheck, Sparkles, CheckCircle2 } from 'lucide-react';
import { locationsData } from '@/data/locations';

export default function ContactPage() {
  const headOffice = locationsData.find(l => l.isHeadOffice) || locationsData[0];

  const lookingForOptions = [
    'Corporate Travel',
    'Employee Transportation',
    'Airport Transfer',
    'Chauffeur on Call',
    'Executive / VIP Travel',
    'Event Transportation',
    'Wedding Transportation',
    'Team Outing / Offsite',
    'South India Road Trip',
    'Group / Coach Travel'
  ];

  return (
    <div>
      {/* 1. HERO */}
      <section className="section section-dark" style={{ paddingTop: '80px', paddingBottom: '70px' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '820px' }}>
          <div className="badge badge-sky" style={{ marginBottom: '16px', color: '#4DC0EC', backgroundColor: 'rgba(41,171,226,0.18)' }}>
            Contact Suhalaya
          </div>
          <h1 style={{ color: '#FFF', marginBottom: '16px', fontSize: '2.8rem' }}>
            Tell Us What You Need to Move.
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.92)', fontSize: '1.2rem', fontWeight: '600', marginBottom: '12px' }}>
            A person. A team. A group of guests. An executive. An entire event.
          </p>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.02rem', lineHeight: '1.7' }}>
            Give us the basics and we'll take it from there.
          </p>
        </div>
      </section>

      {/* 2. WHAT ARE YOU LOOKING FOR & FORM SECTION */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 48px' }}>
            <span className="eyebrow">Exploring the world of comfort</span>
            <div className="badge badge-sky" style={{ marginBottom: '12px' }}>Service Selector</div>
            <h2>What Are You Looking For?</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px', marginBottom: '56px' }}>
            {lookingForOptions.map((opt, idx) => (
              <div 
                key={idx} 
                className="card" 
                style={{ padding: '18px 20px', display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.95rem', fontWeight: '600', color: 'var(--color-navy-900)' }}
              >
                <CheckCircle2 size={18} color="#29ABE2" style={{ flexShrink: 0 }} />
                <span>{opt}</span>
              </div>
            ))}
          </div>

          {/* Form & Direct Contact Split */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '48px', alignItems: 'flex-start' }}>
            
            {/* Left: Prefer to Speak Directly */}
            <div className="card" style={{ padding: '36px', backgroundColor: 'var(--color-steel-100)' }}>
              <div className="badge badge-navy" style={{ marginBottom: '16px' }}>Direct Contact</div>
              <h2 style={{ fontSize: '1.8rem', marginBottom: '20px', color: 'var(--color-navy-900)' }}>
                PREFER TO SPEAK DIRECTLY?
              </h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', fontSize: '1.05rem', color: 'var(--color-navy-900)', marginBottom: '32px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                  <MapPin size={22} color="#29ABE2" />
                  <div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--color-grey-500)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Location</div>
                    <strong>Bengaluru, India</strong>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                  <Phone size={22} color="#29ABE2" />
                  <div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--color-grey-500)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Phone / WhatsApp</div>
                    <a href="tel:+919900556611" style={{ color: 'var(--color-navy-900)', fontWeight: '700' }}>+91 99005 56611</a>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                  <Mail size={22} color="#29ABE2" />
                  <div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--color-grey-500)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Direct Email</div>
                    <a href="mailto:swamy@suhalayatravels.in" style={{ color: '#29ABE2', fontWeight: '700' }}>swamy@suhalayatravels.in</a>
                  </div>
                </div>
              </div>

              <div style={{ padding: '18px', backgroundColor: '#FFF', borderRadius: '12px', border: '1px solid var(--color-steel-200)' }}>
                <div style={{ fontWeight: '700', fontSize: '0.92rem', color: 'var(--color-navy-900)', marginBottom: '4px' }}>Headquarters Address</div>
                <div style={{ fontSize: '0.88rem', color: 'var(--color-ink-700)' }}>{headOffice.address}</div>
                <div style={{ fontSize: '0.82rem', color: 'var(--color-grey-500)', marginTop: '8px' }}>24/7 Corporate Control Desk: +91 80 4900 7777</div>
              </div>
            </div>

            {/* Right: Booking Quote Form */}
            <div>
              <div style={{ marginBottom: '16px' }}>
                <div className="badge badge-sky" style={{ marginBottom: '8px' }}>TELL US</div>
                <h2 style={{ fontSize: '1.8rem' }}>Request a Custom Quote</h2>
                <p style={{ color: 'var(--color-grey-500)', fontSize: '0.9rem', marginTop: '4px' }}>
                  Provide your pickup location, destination, date & time, passengers, and vehicle preferences.
                </p>
              </div>
              <BookingWidget sourcePage="/contact" />
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
