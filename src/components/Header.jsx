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
                  <Link href="/" className="nav-link">HOME</Link>
                </li>

                {/* Services (Dropdown) */}
                <li className="nav-item">
                  <Link href="/services" className="nav-link">
                    SERVICES <ChevronDown size={14} style={{ opacity: 0.8 }} />
                  </Link>
                  
                  {/* 3-Column Mega Menu */}
                  <div className="mega-menu" style={{ width: '960px', left: '-220px' }}>
                    
                    {/* Column 1: BUSINESS MOBILITY */}
                    <div className="mega-column">
                      <h4>BUSINESS MOBILITY</h4>
                      <Link href="/services/corporate-mobility" className="mega-link">
                        Corporate Mobility
                        <small>Business travel, meetings, client visits and inter-office movement.</small>
                      </Link>
                      <Link href="/services/employee-transportation" className="mega-link">
                        Employee Transportation
                        <small>Regular employee movement, office commutes and shift-based travel.</small>
                      </Link>
                      <Link href="/services/airport-transfers" className="mega-link">
                        Airport Transfers
                        <small>Airport-to-office, hotel, home and onward transfers.</small>
                      </Link>
                      <Link href="/services/chauffeur-on-call" className="mega-link">
                        Chauffeur on Call
                        <small>A chauffeur and vehicle available around your schedule.</small>
                      </Link>
                      <Link href="/services/executive-vip-travel" className="mega-link">
                        Executive & VIP Travel
                        <small>Executive cars and chauffeur-driven travel for important guests and leadership.</small>
                      </Link>
                    </div>

                    {/* Column 2: EVENTS & GROUPS */}
                    <div className="mega-column">
                      <h4>EVENTS & GROUPS</h4>
                      <Link href="/services/corporate-events-conferences" className="mega-link">
                        Corporate Events & Conferences
                        <small>Delegate, speaker, airport, hotel and venue transportation.</small>
                      </Link>
                      <Link href="/services/team-outings-offsites" className="mega-link">
                        Team Outings & Offsites
                        <small>Group transportation for corporate outings and multi-day offsites.</small>
                      </Link>
                      <Link href="/services/weddings-family-events" className="mega-link">
                        Weddings & Family Events
                        <small>Guest transfers, family movement and wedding transportation.</small>
                      </Link>
                      <Link href="/services/large-events-air-shows" className="mega-link">
                        Large Events & Air Shows
                        <small>Fleet planning and transportation coordination for large gatherings.</small>
                      </Link>
                    </div>

                    {/* Column 3: JOURNEYS BEYOND THE CITY */}
                    <div className="mega-column">
                      <h4>JOURNEYS BEYOND THE CITY</h4>
                      <Link href="/services/south-india-chauffeur-travel" className="mega-link">
                        South India Chauffeur Travel
                        <small>Self-planned chauffeur-driven road journeys across South India.</small>
                      </Link>
                      <Link href="/services/pilgrimage-heritage-travel" className="mega-link">
                        Pilgrimage & Heritage Travel
                        <small>Comfortable journeys to pilgrimage, heritage and culturally significant destinations.</small>
                      </Link>
                      
                      <div style={{ marginTop: '20px', paddingTop: '12px', borderTop: '1px solid var(--color-steel-200)' }}>
                        <Link href="/services" style={{ color: '#29ABE2', fontWeight: '700', fontSize: '0.9rem', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                          View All Services →
                        </Link>
                      </div>
                    </div>

                  </div>
                </li>

                {/* Fleet - Direct link without dropdown */}
                <li className="nav-item">
                  <Link href="/fleet" className="nav-link">FLEET</Link>
                </li>

                {/* Blog */}
                <li className="nav-item">
                  <Link href="/blog" className="nav-link">BLOG</Link>
                </li>

                {/* Contact Us */}
                <li className="nav-item">
                  <Link href="/contact" className="nav-link">CONTACT US</Link>
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
                  color: 'var(--color-navy-900)', 
                  fontSize: '0.88rem', 
                  fontWeight: '600',
                  padding: '8px 16px',
                  borderRadius: 'var(--radius-pill)',
                  backgroundColor: 'rgba(15, 42, 82, 0.04)',
                  border: '1px solid var(--color-steel-200)',
                  transition: 'all 0.2s ease'
                }}
                className="phone-link-wrapper"
              >
                <Phone size={15} color="#29ABE2" className="pulse-icon" />
                <span>+91 80 4900 7777</span>
              </a>

              {/* Login Button */}
              <Link 
                href="/login" 
                style={{ 
                  display: 'inline-flex', 
                  alignItems: 'center', 
                  gap: '6px', 
                  color: '#FFFFFF', 
                  fontSize: '0.88rem', 
                  fontWeight: '600',
                  padding: '8px 20px',
                  borderRadius: 'var(--radius-pill)',
                  backgroundColor: '#29ABE2',
                  border: 'none',
                  transition: 'all 0.2s ease',
                  textDecoration: 'none'
                }}
                className="login-btn-header"
              >
                Login
              </Link>

              {/* Hidden trigger elements for modal triggers */}
              <button id="header-corporate-btn" onClick={onOpenCorporateModal} style={{ display: 'none' }} aria-hidden="true" />
              <button id="header-quote-btn" onClick={onOpenQuoteModal} style={{ display: 'none' }} aria-hidden="true" />

              {/* Mobile Hamburger Toggle */}
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                style={{ background: 'none', border: 'none', color: 'var(--color-navy-900)', padding: '6px', cursor: 'pointer' }}
                className="mobile-toggle"
                aria-label="Toggle mobile navigation menu"
                id="mobile-menu-toggle-btn"
              >
                {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
              </button>
            </div>

          </div>

        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div style={{ backgroundColor: '#FFFFFF', borderTop: '1px solid var(--color-steel-200)', padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px', boxShadow: '0 10px 30px rgba(0,0,0,0.08)' }}>
          <Link href="/" onClick={() => setMobileMenuOpen(false)} style={{ color: 'var(--color-navy-900)', fontWeight: '600', fontSize: '1.05rem' }}>Home</Link>
          <Link href="/services" onClick={() => setMobileMenuOpen(false)} style={{ color: 'var(--color-navy-900)', fontWeight: '600', fontSize: '1.05rem' }}>Services</Link>
          <Link href="/corporate" onClick={() => setMobileMenuOpen(false)} style={{ color: 'var(--color-navy-900)', fontWeight: '600', fontSize: '1.05rem' }}>Corporate Mobility</Link>
          <Link href="/fleet" onClick={() => setMobileMenuOpen(false)} style={{ color: 'var(--color-navy-900)', fontWeight: '600', fontSize: '1.05rem' }}>Our Fleet</Link>
          <Link href="/locations" onClick={() => setMobileMenuOpen(false)} style={{ color: 'var(--color-navy-900)', fontWeight: '600', fontSize: '1.05rem' }}>Locations</Link>
          <Link href="/packages" onClick={() => setMobileMenuOpen(false)} style={{ color: 'var(--color-navy-900)', fontWeight: '600', fontSize: '1.05rem' }}>Packages</Link>
          <Link href="/blog" onClick={() => setMobileMenuOpen(false)} style={{ color: 'var(--color-navy-900)', fontWeight: '600', fontSize: '1.05rem' }}>Blog</Link>
          <Link href="/contact" onClick={() => setMobileMenuOpen(false)} style={{ color: 'var(--color-navy-900)', fontWeight: '600', fontSize: '1.05rem' }}>Contact Us</Link>
          <Link href="/login" onClick={() => setMobileMenuOpen(false)} style={{ color: '#29ABE2', fontWeight: '600', fontSize: '1.05rem', marginTop: '8px' }}>Login</Link>
        </div>
      )}
    </header>
  );
}
