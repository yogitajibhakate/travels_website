'use client';

import Link from 'next/link';
import { servicesData } from '@/data/services';
import { ShieldCheck, Clock, Award, Lock, Phone, ArrowRight } from 'lucide-react';

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
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '36px', marginBottom: '48px', justifyContent: 'space-between' }}>

          {/* Column 1: Brand & Description */}
          <div style={{ flex: '1.2 1 240px' }}>
            <Link href="/" style={{ display: 'inline-block', marginBottom: '16px' }}>
              <div style={{ backgroundColor: '#FFFFFF', padding: '6px 14px', borderRadius: '8px', display: 'inline-flex', alignItems: 'center' }}>
                <img
                  src="/images/logo.png"
                  alt="Suhalaya Travels"
                  style={{ height: '36px', width: 'auto', objectFit: 'contain' }}
                />
              </div>
            </Link>
            <p style={{ fontSize: '0.95rem', fontWeight: '700', color: '#29ABE2', marginBottom: '8px' }}>
              A Mobility Partner Since 1999.
            </p>
            <p style={{ fontSize: '0.88rem', color: 'rgba(255,255,255,0.75)', marginBottom: '14px', lineHeight: '1.6' }}>
              From everyday corporate transportation to executive journeys, events and long-distance travel, Suhalaya Travels continues to move people across the journeys that matter.
            </p>
            <p style={{ fontSize: '0.88rem', fontWeight: '600', color: '#FFF', marginBottom: '0' }}>
              Wherever you're going, start with Suhalaya.
            </p>
          </div>

          {/* Column 2: QUICK LINKS */}
          <div style={{ flex: '0.8 1 150px' }}>
            <h4 style={{ color: '#29ABE2', fontSize: '0.85rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '16px' }}>QUICK LINKS</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.88rem', padding: 0, margin: 0 }}>
              <li><Link href="/" style={{ color: 'rgba(255,255,255,0.85)' }}>Home</Link></li>
              <li><Link href="/services" style={{ color: 'rgba(255,255,255,0.85)' }}>Services</Link></li>
              <li><Link href="/fleet" style={{ color: 'rgba(255,255,255,0.85)' }}>Fleet</Link></li>
              <li><Link href="/locations" style={{ color: 'rgba(255,255,255,0.85)' }}>Office Locations</Link></li>
              <li><Link href="/blog" style={{ color: 'rgba(255,255,255,0.85)' }}>Blog</Link></li>
              <li><Link href="/contact" style={{ color: 'rgba(255,255,255,0.85)' }}>Contact Us</Link></li>
            </ul>
          </div>

          {/* Column 3 & 4: SERVICES LIST */}
          <div style={{ flex: '1.8 1 300px' }}>
            <h4 style={{ color: '#29ABE2', fontSize: '0.85rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '16px' }}>SERVICES</h4>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '10px' }}>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.88rem', padding: 0, margin: 0 }}>
                {servicesData.slice(0, 6).map(s => (
                  <li key={s.slug}>
                    <Link href={`/services/${s.slug}`} style={{ color: 'rgba(255,255,255,0.85)' }}>
                      {s.name}
                    </Link>
                  </li>
                ))}
              </ul>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.88rem', padding: 0, margin: 0 }}>
                {servicesData.slice(6).map(s => (
                  <li key={s.slug}>
                    <Link href={`/services/${s.slug}`} style={{ color: 'rgba(255,255,255,0.85)' }}>
                      {s.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Column 5: CONTACT US */}
          <div style={{ flex: '1.2 1 220px' }}>
            <h4 style={{ color: '#29ABE2', fontSize: '0.85rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '16px' }}>CONTACT US</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '18px', fontSize: '0.88rem', color: 'rgba(255,255,255,0.85)' }}>
              <div>
                <strong style={{ color: '#FFF' }}>WhatsApp & Calls</strong>
                <div style={{ marginTop: '4px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <a href="https://wa.me/919845655466" style={{ color: 'rgba(255,255,255,0.85)', display: 'block' }}>+91 9845655466</a>
                  <a href="tel:+918553344393" style={{ color: 'rgba(255,255,255,0.85)', display: 'block' }}>+91 8553344393</a>
                  <a href="tel:+919900556611" style={{ color: 'rgba(255,255,255,0.85)', display: 'block' }}>+91 9900556611</a>
                </div>
              </div>
              <div>
                <strong style={{ color: '#FFF' }}>Email Support</strong>
                <div style={{ marginTop: '4px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <a href="mailto:fleetcare@suhalayatravels.in" style={{ color: 'rgba(255,255,255,0.85)', wordBreak: 'break-word', display: 'block' }}>fleetcare@suhalayatravels.in</a>
                  <a href="mailto:reachus@suhalayatravels.in" style={{ color: 'rgba(255,255,255,0.85)', wordBreak: 'break-word', display: 'block' }}>reachus@suhalayatravels.in</a>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div style={{ paddingTop: '24px', borderTop: '1px solid rgba(255,255,255,0.1)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px', fontSize: '0.8rem', color: 'rgba(255,255,255,0.6)' }}>
          <div>
            © Suhalaya Travels. All rights reserved.
          </div>
          <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', alignItems: 'center' }}>
            <Link href="/" style={{ color: 'rgba(255,255,255,0.6)' }}>Home</Link>
            <Link href="/services" style={{ color: 'rgba(255,255,255,0.6)' }}>Services</Link>
            <Link href="/fleet" style={{ color: 'rgba(255,255,255,0.6)' }}>Fleet</Link>
            <Link href="/locations" style={{ color: 'rgba(255,255,255,0.6)' }}>Locations</Link>
            <Link href="/blog" style={{ color: 'rgba(255,255,255,0.6)' }}>Blog</Link>
            <Link href="/contact" style={{ color: 'rgba(255,255,255,0.6)' }}>Contact Us</Link>
            <Link href="/admin/login" style={{ color: 'rgba(255,255,255,0.6)' }}>Admin Login</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
