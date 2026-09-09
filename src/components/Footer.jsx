'use client';

import Link from 'next/link';
import { servicesData } from '@/data/services';
import { locationsData } from '@/data/locations';
import { ShieldCheck, Clock, MapPin, Phone, Mail, Award, Lock } from 'lucide-react';

export default function Footer({ onOpenQuoteModal, onOpenCorporateModal }) {
  return (
    <footer style={{ backgroundColor: 'var(--color-navy-900)', color: '#FFF', paddingTop: '64px', paddingBottom: '36px', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
      <div className="container">
        
        {/* Top Trust Metrics Strip */}
        <div style={{ paddingBottom: '48px', marginBottom: '48px', borderBottom: '1px solid rgba(255,255,255,0.1)', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <ShieldCheck size={28} color="#29ABE2" />
            <div>
              <div style={{ fontWeight: '700', fontSize: '0.95rem' }}>Move with Confidence</div>
              <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.7)' }}>Audited & background-vetted chauffeurs</div>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <Clock size={28} color="#29ABE2" />
            <div>
              <div style={{ fontWeight: '700', fontSize: '0.95rem' }}>24/7 Control Desk</div>
              <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.7)' }}>Real-time trip monitoring & tracking</div>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <Award size={28} color="#29ABE2" />
            <div>
              <div style={{ fontWeight: '700', fontSize: '0.95rem' }}>Consolidated Billing</div>
              <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.7)' }}>Itemized digital GST compliance</div>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <Lock size={28} color="#29ABE2" />
            <div>
              <div style={{ fontWeight: '700', fontSize: '0.95rem' }}>Security-First Mobility</div>
              <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.7)' }}>Discreet executive protocols</div>
            </div>
          </div>
        </div>

        {/* Sitemap Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '36px', marginBottom: '48px' }}>
          
          {/* Column 1: Brand & Contact */}
          <div>
            <Link href="/" style={{ display: 'inline-block', marginBottom: '16px' }}>
              <div style={{ backgroundColor: '#FFFFFF', padding: '6px 14px', borderRadius: '8px', display: 'inline-flex', alignItems: 'center' }}>
                <img 
                  src="/images/logo.png" 
                  alt="Suhalaya Travels Pvt. Ltd." 
                  style={{ height: '36px', width: 'auto', objectFit: 'contain' }} 
                />
              </div>
            </Link>
            <p style={{ fontSize: '0.95rem', fontWeight: '700', color: '#29ABE2', marginBottom: '8px' }}>
              Move Business. Move People. Move with Confidence.
            </p>
            <p style={{ fontSize: '0.88rem', color: 'rgba(255,255,255,0.7)', marginBottom: '16px', lineHeight: '1.6' }}>
              Chauffeur-driven mobility for businesses, executives, events and journeys across India.
            </p>
            <div style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.75)', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <div><strong>HQ:</strong> Bellandur Outer Ring Rd, Bengaluru</div>
              <div><strong>Call 24/7 Desk:</strong> +91 80 4900 7777</div>
              <div><strong>Email:</strong> corporate@suhalayamobility.com</div>
            </div>
          </div>

          {/* Column 2: Services */}
          <div>
            <h4 style={{ color: '#29ABE2', fontSize: '0.85rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '16px' }}>Our Services</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.88rem', color: 'rgba(255,255,255,0.75)' }}>
              {servicesData.slice(0, 6).map(s => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`}>
                    {s.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/services" style={{ color: '#29ABE2', fontWeight: '700' }}>
                  View All Services →
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Corporate & Vertical Solutions */}
          <div>
            <h4 style={{ color: '#29ABE2', fontSize: '0.85rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '16px' }}>Corporate Solutions</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.88rem', color: 'rgba(255,255,255,0.75)' }}>
              <li><Link href="/corporate">Corporate Mobility Overview</Link></li>
              <li><button onClick={onOpenCorporateModal} style={{ background: 'none', border: 'none', color: 'rgba(255,255,255,0.75)', cursor: 'pointer', padding: 0, font: 'inherit' }}>Create Corporate Account</button></li>
              <li><Link href="/corporate/industries/it-ites-gcc">IT / ITES / GCC Mobility</Link></li>
              <li><Link href="/corporate/industries/pharma-healthcare">Pharma & Healthcare Events</Link></li>
              <li><Link href="/corporate/industries/ai-technology">AI & Tech Summits</Link></li>
              <li><Link href="/fleet">Our Fleet</Link></li>
            </ul>
          </div>

          {/* Column 4: Regional Hubs */}
          <div>
            <h4 style={{ color: '#29ABE2', fontSize: '0.85rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '16px' }}>Regional Dispatch Hubs</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.88rem', color: 'rgba(255,255,255,0.75)' }}>
              {locationsData.map(loc => (
                <li key={loc.slug}>
                  <Link href={`/locations/${loc.slug}`}>
                    {loc.city} ({loc.type.split('&')[0]})
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Legal Copyright */}
        <div style={{ paddingTop: '24px', borderTop: '1px solid rgba(255,255,255,0.1)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px', fontSize: '0.8rem', color: 'rgba(255,255,255,0.6)' }}>
          <div>
            © {new Date().getFullYear()} Suhalaya Travels Pvt. Ltd. Moving People Since 1999. All rights reserved.
          </div>
          <div style={{ display: 'flex', gap: '20px' }}>
            <Link href="/about">About Us</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/contact">Contact Us</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
