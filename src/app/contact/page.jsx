'use client';

import BookingWidget from '@/components/BookingWidget';
import { MapPin, Phone, Mail, Clock, Building2, Calendar, Compass, UserCheck, MessageSquare } from 'lucide-react';
import { locationsData } from '@/data/locations';

export default function ContactPage() {
  const headOffice = locationsData.find(l => l.isHeadOffice) || locationsData[0];

  return (
    <div>
      {/* Contact Hero */}
      <section className="section section-dark" style={{ paddingTop: '80px', paddingBottom: '70px' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '820px' }}>
          <div className="badge badge-sky" style={{ marginBottom: '16px', color: '#4DC0EC', backgroundColor: 'rgba(41,171,226,0.18)' }}>
            Contact Us
          </div>
          <h1 style={{ color: '#FFF', marginBottom: '16px', fontSize: '2.5rem' }}>
            Tell Us What You Need to Move
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.1rem', lineHeight: '1.7' }}>
            One executive. A team. An entire workforce. Conference delegates. Wedding guests. Or a family planning a road trip across South India. Tell us about your journey, and we'll help you identify the right vehicle and transportation solution.
          </p>
        </div>
      </section>

      {/* 4 Enquiry Types & Contact Info */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 40px' }}>
            <span className="eyebrow">Select Enquiry Type</span>
            <h2>Let's plan the mobility before the journey begins</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px', marginBottom: '56px' }}>
            <div className="card" style={{ padding: '24px' }}>
              <Building2 size={28} color="#29ABE2" style={{ marginBottom: '12px' }} />
              <h3 style={{ fontSize: '1.2rem', marginBottom: '8px' }}>Corporate Enquiry</h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--color-ink-600)' }}>
                Tell us your organisation, locations, travel requirements and approximate number of travellers.
              </p>
            </div>

            <div className="card" style={{ padding: '24px' }}>
              <Calendar size={28} color="#29ABE2" style={{ marginBottom: '12px' }} />
              <h3 style={{ fontSize: '1.2rem', marginBottom: '8px' }}>Event Enquiry</h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--color-ink-600)' }}>
                Share your event date, venues, guest numbers and movement requirements.
              </p>
            </div>

            <div className="card" style={{ padding: '24px' }}>
              <Compass size={28} color="#29ABE2" style={{ marginBottom: '12px' }} />
              <h3 style={{ fontSize: '1.2rem', marginBottom: '8px' }}>Travel Enquiry</h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--color-ink-600)' }}>
                Tell us your South India route, dates, number of travellers and preferred vehicle.
              </p>
            </div>

            <div className="card" style={{ padding: '24px' }}>
              <UserCheck size={28} color="#29ABE2" style={{ marginBottom: '12px' }} />
              <h3 style={{ fontSize: '1.2rem', marginBottom: '8px' }}>Chauffeur Enquiry</h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--color-ink-600)' }}>
                Tell us where you need to go and how long you need the vehicle.
              </p>
            </div>
          </div>

          {/* Form & Address Split */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '48px' }}>
            <div>
              <div className="badge badge-sky" style={{ marginBottom: '16px' }}>Headquarters & Control Center</div>
              <h2 style={{ marginBottom: '16px' }}>{headOffice.city} Desk</h2>
              <p style={{ fontSize: '1.05rem', color: 'var(--color-ink-700)', marginBottom: '24px', lineHeight: '1.6' }}>
                {headOffice.address}
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', fontSize: '1rem', color: 'var(--color-navy-900)', marginBottom: '32px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <Phone size={20} color="#29ABE2" /> <strong>24/7 Control Desk:</strong> {headOffice.phone}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <Mail size={20} color="#29ABE2" /> <strong>Corporate Email:</strong> {headOffice.email}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <Clock size={20} color="#29ABE2" /> <strong>Operations Hours:</strong> {headOffice.hours}
                </div>
              </div>

              {/* Action Buttons */}
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <a href="tel:+918049007777" className="btn btn-navy" style={{ padding: '12px 24px', fontSize: '0.9rem' }}>
                  <Phone size={16} /> Call Us Now
                </a>
                <a href="https://wa.me/918049007777" target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp" style={{ padding: '12px 24px', fontSize: '0.9rem' }}>
                  WhatsApp Us
                </a>
              </div>
            </div>

            <div>
              <h2 style={{ marginBottom: '20px' }}>Request a Custom Quote</h2>
              <BookingWidget sourcePage="/contact" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
