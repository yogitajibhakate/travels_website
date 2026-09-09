'use client';

import { useState } from 'react';
import Link from 'next/link';
import { servicesData } from '@/data/services';
import { packagesData } from '@/data/packages';
import { fleetData } from '@/data/fleet';
import { Phone, ChevronDown, Menu, X, ArrowRight } from 'lucide-react';

export default function Header({ onOpenQuoteModal, onOpenCorporateModal }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const businessServices = servicesData.filter(s => s.categoryCluster === 'for-business');
  const journeyServices = servicesData.filter(s => s.categoryCluster === 'for-journeys');
  const momentServices = servicesData.filter(s => s.categoryCluster === 'for-moments');

  const miniItineraries = packagesData.filter(p => p.category === 'mini-itinerary');

  return (
    <header className="header" id="main-header">
      <style jsx>{`
        .desktop-nav-container { display: none; }
        .phone-link-wrapper { display: none; }
        .corp-btn-desktop { display: none; }
        .mobile-toggle { display: block; }
        @media (min-width: 768px) {
          .corp-btn-desktop { display: inline-flex !important; }
        }
        @media (min-width: 992px) {
          .desktop-nav-container { display: flex !important; align-items: center; gap: 32px; }
          .mobile-toggle { display: none !important; }
        }
        @media (min-width: 1200px) {
          .phone-link-wrapper { display: inline-flex !important; }
        }
      `}</style>

      <div className="container">
        <div className="header-inner" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          
          {/* 1. Brand Logo - Extreme Left */}
          <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', flexShrink: 0 }}>
            <div className="logo-container">
              <img 
                src="/images/logo.png" 
                alt="Suhalaya Travels Pvt. Ltd." 
                style={{ height: '36px', width: 'auto', objectFit: 'contain' }} 
              />
            </div>
          </Link>

          {/* Right Group: Nav Links + Action Buttons */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
            
            {/* Desktop Navigation Links */}
            <nav className="desktop-nav-container">
              <ul className="nav-menu" style={{ display: 'flex', alignItems: 'center', gap: '24px', listStyle: 'none', margin: 0, padding: 0 }}>
                
                {/* Home */}
                <li className="nav-item">
                  <Link href="/" className="nav-link">Home</Link>
                </li>

                {/* Services (Dropdown) */}
                <li className="nav-item">
                  <Link href="/services" className="nav-link">
                    Services <ChevronDown size={14} style={{ opacity: 0.8 }} />
                  </Link>
                  
                  {/* 3-Cluster Mega Menu */}
                  <div className="mega-menu">
                    <div className="mega-column">
                      <h4>For Business</h4>
                      {businessServices.map(s => (
                        <Link key={s.slug} href={`/services/${s.slug}`} className="mega-link">
                          {s.name}
                          <small>{s.tagline}</small>
                        </Link>
                      ))}
                    </div>

                    <div className="mega-column">
                      <h4>For Journeys</h4>
                      {journeyServices.map(s => (
                        <Link key={s.slug} href={`/services/${s.slug}`} className="mega-link">
                          {s.name}
                          <small>{s.tagline}</small>
                        </Link>
                      ))}
                    </div>

                    <div className="mega-column">
                      <h4>For Moments</h4>
                      {momentServices.map(s => (
                        <Link key={s.slug} href={`/services/${s.slug}`} className="mega-link">
                          {s.name}
                          <small>{s.tagline}</small>
                        </Link>
                      ))}
                    </div>
                  </div>
                </li>

                {/* Corporate Mobility (Dropdown) */}
                <li className="nav-item">
                  <Link href="/corporate" className="nav-link">
                    Corporate Mobility <ChevronDown size={14} style={{ opacity: 0.8 }} />
                  </Link>
                  <div className="mega-menu" style={{ width: '380px', left: '-30px', gridTemplateColumns: '1fr' }}>
                    <div className="mega-column">
                      <h4>Enterprise Solutions</h4>
                      <Link href="/corporate" className="mega-link">
                        Overview & SLA Standards
                        <small>Dedicated key account management desk</small>
                      </Link>
                      <Link href="/corporate/create-account" className="mega-link">
                        Create Corporate Account
                        <small>Monthly credit terms & rate card</small>
                      </Link>
                      <Link href="/corporate/industries/it-ites-gcc" className="mega-link">
                        IT / ITES / GCC Tech Parks
                        <small>24/7 employee shift shuttles</small>
                      </Link>
                      <Link href="/corporate/industries/pharma-healthcare" className="mega-link">
                        Pharma & Healthcare
                        <small>Medical events & plant visits</small>
                      </Link>
                    </div>
                  </div>
                </li>

                {/* Fleet (Dropdown) */}
                <li className="nav-item">
                  <Link href="/fleet" className="nav-link">
                    Fleet <ChevronDown size={14} style={{ opacity: 0.8 }} />
                  </Link>
                  <div className="mega-menu" style={{ width: '420px', left: '-50px', gridTemplateColumns: '1fr' }}>
                    <div className="mega-column">
                      <h4>Fleet Categories</h4>
                      {fleetData.map(f => (
                        <Link key={f.id} href="/fleet" className="mega-link">
                          {f.name}
                          <small>{f.models.join(' • ')} ({f.capacity})</small>
                        </Link>
                      ))}
                    </div>
                  </div>
                </li>

                {/* Locations */}
                <li className="nav-item">
                  <Link href="/locations" className="nav-link">Locations</Link>
                </li>

                {/* Packages (Dropdown) */}
                <li className="nav-item">
                  <Link href="/packages" className="nav-link">
                    Packages <ChevronDown size={14} style={{ opacity: 0.8 }} />
                  </Link>
                  <div className="mega-menu" style={{ width: '400px', left: '-50px', gridTemplateColumns: '1fr' }}>
                    <div className="mega-column">
                      <h4>Curated Road Trip Circuits</h4>
                      {miniItineraries.map(pkg => (
                        <Link key={pkg.slug} href={`/packages/${pkg.slug}`} className="mega-link">
                          {pkg.name}
                          <small>{pkg.duration} — {pkg.tagline}</small>
                        </Link>
                      ))}
                      <Link href="/packages" className="mega-link" style={{ marginTop: '8px', color: '#29ABE2', fontWeight: '700' }}>
                        View All Packages & Event Mobility →
                      </Link>
                    </div>
                  </div>
                </li>

                {/* Blog */}
                <li className="nav-item">
                  <Link href="/blog" className="nav-link">Blog</Link>
                </li>
              </ul>
            </nav>

            {/* Action CTAs */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
              <a 
                href="tel:+918049007777" 
                style={{ 
                  display: 'inline-flex', 
                  alignItems: 'center', 
                  gap: '8px', 
                  color: '#FFF', 
                  fontSize: '0.88rem', 
                  fontWeight: '600',
                  padding: '8px 16px',
                  borderRadius: 'var(--radius-pill)',
                  backgroundColor: 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(255,255,255,0.12)',
                  transition: 'all 0.2s ease'
                }}
                className="phone-link-wrapper"
              >
                <Phone size={15} color="#29ABE2" className="pulse-icon" />
                <span>+91 80 4900 7777</span>
              </a>

              <button 
                onClick={onOpenCorporateModal}
                className="btn btn-outline-white corp-btn-desktop"
                style={{ padding: '9px 18px', fontSize: '0.85rem' }}
                id="header-corporate-btn"
              >
                Corporate Account
              </button>

              <button 
                onClick={onOpenQuoteModal} 
                className="btn btn-primary"
                style={{ padding: '10px 22px', fontSize: '0.88rem' }}
                id="header-quote-btn"
              >
                Request Quote <ArrowRight size={14} />
              </button>

              {/* Mobile Hamburger Toggle */}
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                style={{ background: 'none', border: 'none', color: '#FFF', padding: '6px', cursor: 'pointer' }}
                className="mobile-toggle"
              >
                {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
              </button>
            </div>

          </div>

        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div style={{ backgroundColor: 'var(--color-navy-900)', borderTop: '1px solid rgba(255,255,255,0.1)', padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <Link href="/" onClick={() => setMobileMenuOpen(false)} style={{ color: '#FFF', fontWeight: '600', fontSize: '1.05rem' }}>Home</Link>
          <Link href="/services" onClick={() => setMobileMenuOpen(false)} style={{ color: '#FFF', fontWeight: '600', fontSize: '1.05rem' }}>Services</Link>
          <Link href="/corporate" onClick={() => setMobileMenuOpen(false)} style={{ color: '#FFF', fontWeight: '600', fontSize: '1.05rem' }}>Corporate Mobility</Link>
          <Link href="/fleet" onClick={() => setMobileMenuOpen(false)} style={{ color: '#FFF', fontWeight: '600', fontSize: '1.05rem' }}>Our Fleet</Link>
          <Link href="/locations" onClick={() => setMobileMenuOpen(false)} style={{ color: '#FFF', fontWeight: '600', fontSize: '1.05rem' }}>Locations</Link>
          <Link href="/packages" onClick={() => setMobileMenuOpen(false)} style={{ color: '#FFF', fontWeight: '600', fontSize: '1.05rem' }}>Packages</Link>
          <Link href="/blog" onClick={() => setMobileMenuOpen(false)} style={{ color: '#FFF', fontWeight: '600', fontSize: '1.05rem' }}>Blog</Link>
          <Link href="/contact" onClick={() => setMobileMenuOpen(false)} style={{ color: '#FFF', fontWeight: '600', fontSize: '1.05rem' }}>Contact Us</Link>
        </div>
      )}
    </header>
  );
}
