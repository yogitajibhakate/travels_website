'use client';

import Link from 'next/link';
import Hero from '@/components/Hero';
import SafetyBlock from '@/components/SafetyBlock';
import { servicesData } from '@/data/services';
import { fleetData } from '@/data/fleet';
import { industriesData } from '@/data/industries';
import { packagesData } from '@/data/packages';
import { blogsData } from '@/data/blogs';
import { locationsData } from '@/data/locations';
import { ArrowRight, MapPin, ChevronRight, Compass, BookOpen } from 'lucide-react';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://suhalayatravels.com',
  name: 'Suhalaya Travels',
  description:
    'Premium chauffeur-driven mobility partner for corporate travel, airport transfers, employee transport, and South India road journeys.',
  url: 'https://suhalayatravels.com',
  telephone: '+91-80-XXXXXXXX',
  image: 'https://suhalayatravels.com/og-image.png',
  logo: 'https://suhalayatravels.com/icon.png',
  priceRange: '₹₹₹',
  currenciesAccepted: 'INR',
  paymentAccepted: 'Cash, Credit Card, Bank Transfer',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Bangalore',
    addressLocality: 'Bangalore',
    addressRegion: 'Karnataka',
    postalCode: '560001',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 12.9716,
    longitude: 77.5946,
  },
  areaServed: [
    'Bangalore', 'Hyderabad', 'Chennai', 'Mysore', 'Coimbatore',
    'Kochi', 'Thiruvananthapuram', 'Mangalore', 'South India',
  ],
  serviceType: [
    'Corporate Mobility', 'Airport Transfer', 'Employee Transport',
    'Executive Travel', 'Road Trips', 'Chauffeur Service',
  ],
  sameAs: [
    'https://www.linkedin.com/company/suhalayatravels',
  ],
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    opens: '00:00',
    closes: '23:59',
  },
};

export default function HomePage() {
  const featuredServices = servicesData.slice(0, 8);
  const featuredBlogs = blogsData.slice(0, 3);
  const miniItineraries = packagesData.filter(p => p.category === 'mini-itinerary').slice(0, 3);

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* 1. Hero */}
      <Hero
        onOpenQuoteModal={() => {
          const btn = document.getElementById('header-quote-btn');
          if (btn) btn.click();
        }}
        onOpenCorporateModal={() => {
          const btn = document.getElementById('header-corporate-btn');
          if (btn) btn.click();
        }}
      />

      {/* 1.5 Benchmark Stats Counter Band */}
      <section style={{ backgroundColor: 'var(--color-navy-900)', color: '#FFF', borderTop: '1px solid rgba(255,255,255,0.1)', padding: '24px 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '24px', textAlign: 'center' }}>
            <div style={{ borderRight: '1px solid rgba(255,255,255,0.1)', paddingRight: '12px' }}>
              <div style={{ fontSize: '2.2rem', fontWeight: '800', color: '#29ABE2', fontFamily: 'var(--font-display)' }}>25+ Years</div>
              <div style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.75)', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Mobility Excellence (Since 1999)</div>
            </div>
            <div style={{ borderRight: '1px solid rgba(255,255,255,0.1)', paddingRight: '12px' }}>
              <div style={{ fontSize: '2.2rem', fontWeight: '800', color: '#29ABE2', fontFamily: 'var(--font-display)' }}>500+</div>
              <div style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.75)', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Corporate & Enterprise Accounts</div>
            </div>
            <div style={{ borderRight: '1px solid rgba(255,255,255,0.1)', paddingRight: '12px' }}>
              <div style={{ fontSize: '2.2rem', fontWeight: '800', color: '#29ABE2', fontFamily: 'var(--font-display)' }}>100+</div>
              <div style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.75)', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Cities & Outstation Routes</div>
            </div>
            <div>
              <div style={{ fontSize: '2.2rem', fontWeight: '800', color: '#29ABE2', fontFamily: 'var(--font-display)' }}>99.8%</div>
              <div style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.75)', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px' }}>On-Time Dispatch SLA Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Introduction: More Than a Ride. A Mobility Partner. */}
      <section className="section" id="introduction-section" style={{ backgroundColor: '#FFF' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '48px', alignItems: 'center' }}>
            <div>
              <span className="eyebrow">Exploring the world of comfort</span>
              <div className="badge badge-sky" style={{ marginBottom: '16px' }}>Welcome to Suhalaya Travels</div>
              <h2 style={{ fontSize: '2.4rem', color: 'var(--color-navy-900)', marginBottom: '20px' }}>
                More Than a Ride. A Mobility Partner.
              </h2>

              <div style={{ fontSize: '1.05rem', color: 'var(--color-ink-900)', lineHeight: '1.8', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <p style={{ fontSize: '1.15rem', fontWeight: '700', color: 'var(--color-navy-900)' }}>
                  Some journeys need a car. Others need coordination.
                </p>
                <p style={{ backgroundColor: 'var(--color-steel-100)', padding: '18px 22px', borderRadius: 'var(--radius-md)', borderLeft: '4px solid #29ABE2', fontWeight: '500', fontSize: '0.98rem' }}>
                  Daily employee movement. Visiting executives. Airport schedules. Multiple event venues. Wedding guests arriving from different cities.
                </p>
                <p style={{ fontStyle: 'italic', color: 'var(--color-grey-500)' }}>
                  The requirement changes. The expectation doesn't.
                </p>
                <p>
                  With operations built around corporate and chauffeur-driven travel, Suhalaya Travels brings vehicles, chauffeurs and journey planning together under one roof.
                </p>
                <p style={{ fontSize: '1.05rem', fontWeight: '700', color: 'var(--color-sky-600)' }}>
                  One partner. Multiple ways to move.
                </p>
              </div>
            </div>

            {/* Visual Image Banner */}
            <div style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-card)', border: '1px solid var(--color-steel-200)' }}>
              <img
                src="/images/executive-chauffeur.png"
                alt="Suhalaya Executive Chauffeur Mobility"
                style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. Services Grid: One Partner. Every Journey. */}
      <section className="section section-steel" id="services-overview">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '48px', flexWrap: 'wrap', gap: '16px' }}>
            <div>
              <span className="eyebrow">Exploring the world of comfort</span>
              <div className="badge badge-sky" style={{ marginBottom: '12px' }}>Our Services</div>
              <h2>One Partner. Every Journey.</h2>
            </div>
            <Link href="/services" className="btn btn-outline">
              Explore All Services <ArrowRight size={16} />
            </Link>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '28px' }}>
            <div className="card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '28px' }}>
              <div>
                <div className="badge badge-sky" style={{ marginBottom: '16px', fontSize: '0.75rem' }}>Business Mobility</div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '10px' }}>Corporate Mobility</h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--color-ink-900)', marginBottom: '20px', lineHeight: '1.6' }}>
                  Business travel that keeps pace with meetings, offices, hotels and changing schedules.
                </p>
              </div>
              <Link href="/services/corporate-mobility" style={{ color: '#29ABE2', fontWeight: '700', fontSize: '0.9rem', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                Explore Details <ChevronRight size={16} color="#29ABE2" />
              </Link>
            </div>

            <div className="card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '28px' }}>
              <div>
                <div className="badge badge-sky" style={{ marginBottom: '16px', fontSize: '0.75rem' }}>Business Mobility</div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '10px' }}>Employee Transportation</h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--color-ink-900)', marginBottom: '20px', lineHeight: '1.6' }}>
                  Planned mobility for teams travelling to and from workplaces, campuses and business hubs.
                </p>
              </div>
              <Link href="/services/employee-transportation" style={{ color: '#29ABE2', fontWeight: '700', fontSize: '0.9rem', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                Explore Details <ChevronRight size={16} color="#29ABE2" />
              </Link>
            </div>

            <div className="card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '28px' }}>
              <div>
                <div className="badge badge-sky" style={{ marginBottom: '16px', fontSize: '0.75rem' }}>Business Mobility</div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '10px' }}>Airport Transfers</h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--color-ink-900)', marginBottom: '20px', lineHeight: '1.6' }}>
                  A straightforward journey between the airport, hotel, office or home.
                </p>
              </div>
              <Link href="/services/airport-transfers" style={{ color: '#29ABE2', fontWeight: '700', fontSize: '0.9rem', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                Explore Details <ChevronRight size={16} color="#29ABE2" />
              </Link>
            </div>

            <div className="card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '28px' }}>
              <div>
                <div className="badge badge-sky" style={{ marginBottom: '16px', fontSize: '0.75rem' }}>Business Mobility</div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '10px' }}>Chauffeur on Call</h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--color-ink-900)', marginBottom: '20px', lineHeight: '1.6' }}>
                  Need a car for a few hours, a full day or a specific engagement? Book around your schedule.
                </p>
              </div>
              <Link href="/services/chauffeur-on-call" style={{ color: '#29ABE2', fontWeight: '700', fontSize: '0.9rem', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                Explore Details <ChevronRight size={16} color="#29ABE2" />
              </Link>
            </div>

            <div className="card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '28px' }}>
              <div>
                <div className="badge badge-sky" style={{ marginBottom: '16px', fontSize: '0.75rem' }}>Business Mobility</div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '10px' }}>Executive & VIP Travel</h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--color-ink-900)', marginBottom: '20px', lineHeight: '1.6' }}>
                  Quiet, comfortable transportation for executives, guests and important business engagements.
                </p>
              </div>
              <Link href="/services/executive-vip-travel" style={{ color: '#29ABE2', fontWeight: '700', fontSize: '0.9rem', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                Explore Details <ChevronRight size={16} color="#29ABE2" />
              </Link>
            </div>

            <div className="card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '28px' }}>
              <div>
                <div className="badge badge-sky" style={{ marginBottom: '16px', fontSize: '0.75rem' }}>Events & Groups</div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '10px' }}>Events & Offsites</h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--color-ink-900)', marginBottom: '20px', lineHeight: '1.6' }}>
                  From conferences to team outings, coordinate people and vehicles without juggling multiple providers.
                </p>
              </div>
              <Link href="/services/corporate-events-conferences" style={{ color: '#29ABE2', fontWeight: '700', fontSize: '0.9rem', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                Explore Details <ChevronRight size={16} color="#29ABE2" />
              </Link>
            </div>

            <div className="card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '28px' }}>
              <div>
                <div className="badge badge-sky" style={{ marginBottom: '16px', fontSize: '0.75rem' }}>Events & Groups</div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '10px' }}>Weddings & Family Events</h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--color-ink-900)', marginBottom: '20px', lineHeight: '1.6' }}>
                  Guest transfers, venue movement and family travel—planned around the celebration.
                </p>
              </div>
              <Link href="/services/weddings-family-events" style={{ color: '#29ABE2', fontWeight: '700', fontSize: '0.9rem', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                Explore Details <ChevronRight size={16} color="#29ABE2" />
              </Link>
            </div>

            <div className="card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '28px' }}>
              <div>
                <div className="badge badge-sky" style={{ marginBottom: '16px', fontSize: '0.75rem' }}>Journeys Beyond</div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '10px' }}>South India Chauffeur Travel</h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--color-ink-900)', marginBottom: '20px', lineHeight: '1.6' }}>
                  Build your own road journey across South India and enjoy the route without driving it yourself.
                </p>
              </div>
              <Link href="/services/south-india-chauffeur-travel" style={{ color: '#29ABE2', fontWeight: '700', fontSize: '0.9rem', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                Explore Details <ChevronRight size={16} color="#29ABE2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. South India: You Plan the Journey. We Handle the Road. */}
      <section className="section" style={{ backgroundColor: '#0F2A52', color: '#FFF' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '48px', alignItems: 'center' }}>
            <div>
              <span className="eyebrow" style={{ color: 'rgba(255,255,255,0.7)' }}>Exploring the world of comfort</span>
              <div className="badge badge-heritage" style={{ marginBottom: '16px' }}>
                <Compass size={14} style={{ marginRight: '6px' }} /> South India Chauffeur Travel
              </div>
              <h2 style={{ color: '#FFF', fontSize: '2.4rem', marginBottom: '20px' }}>
                You Plan the Journey. We Handle the Road.
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.92)', fontSize: '1.1rem', marginBottom: '18px', fontWeight: '600' }}>
                Some of the best journeys aren't built around a fixed itinerary.
              </p>

              <div style={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.98rem', marginBottom: '24px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <div>📍 Bengaluru to Mysuru and Coorg</div>
                <div>📍 Hampi and Badami</div>
                <div>📍 Ooty and Coonoor</div>
                <div>📍 Wayanad</div>
                <div>📍 Gokarna and Udupi</div>
              </div>

              <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1rem', marginBottom: '20px', lineHeight: '1.6' }}>
                Take the route you want. Stop where you want. Stay longer when a place deserves it.
              </p>
              <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.95rem', marginBottom: '32px', lineHeight: '1.6' }}>
                For customised chauffeur-driven road travel across South India, the journey can be planned around your pace, your destinations and your group.
              </p>

              <div>
                <Link href="/services/south-india-chauffeur-travel" className="btn btn-primary">
                  Plan a South India Journey <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            {/* Scenic South India Road Trip Image */}
            <div style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.15)', boxShadow: '0 20px 40px rgba(0,0,0,0.4)' }}>
              <img
                src="/images/south-india-trip.png"
                alt="South India Scenic Road Trips"
                style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 5. Why Organisations Choose Suhalaya (Section 22) */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 48px' }}>
            <span className="eyebrow">Exploring the world of comfort</span>
            <div className="badge badge-sky" style={{ marginBottom: '12px' }}>Why Suhalaya</div>
            <h2>Why Organisations Choose Suhalaya: Built for Business</h2>
            <p style={{ color: 'var(--color-grey-500)', marginTop: '10px' }}>
              Corporate transportation needs coordination, not just cars. Our services are structured around employees, executives, guests, meetings and events.
            </p>
          </div>

          <div className="grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '28px' }}>
            <div className="card" style={{ padding: '28px' }}>
              <div style={{ color: '#29ABE2', fontWeight: '800', fontSize: '1.2rem', marginBottom: '8px' }}>A Fleet That Scales</div>
              <p style={{ fontSize: '0.9rem', color: 'var(--color-ink-900)' }}>
                One executive sedan or an entire event fleet—the vehicle mix can be built around the exact scale of your requirement.
              </p>
            </div>

            <div className="card" style={{ padding: '28px' }}>
              <div style={{ color: '#29ABE2', fontWeight: '800', fontSize: '1.2rem', marginBottom: '8px' }}>Professional Chauffeur Experience</div>
              <p style={{ fontSize: '0.9rem', color: 'var(--color-ink-900)' }}>
                The chauffeur is part of the service. Professional conduct, clear communication, and route familiarity matter on every trip.
              </p>
            </div>

            <div className="card" style={{ padding: '28px' }}>
              <div style={{ color: '#29ABE2', fontWeight: '800', fontSize: '1.2rem', marginBottom: '8px' }}>Flexible by Design</div>
              <p style={{ fontSize: '0.9rem', color: 'var(--color-ink-900)' }}>
                Hourly rentals, point-to-point transfers, multiple stops, full-day packages, multi-day outstation, and event mobility.
              </p>
            </div>

            <div className="card" style={{ padding: '28px' }}>
              <div style={{ color: '#29ABE2', fontWeight: '800', fontSize: '1.2rem', marginBottom: '8px' }}>Corporate & Event Experience</div>
              <p style={{ fontSize: '0.9rem', color: 'var(--color-ink-900)' }}>
                From daily employee commuting to large corporate conventions, transportation is planned around your operational scale.
              </p>
            </div>

            <div className="card" style={{ padding: '28px' }}>
              <div style={{ color: '#29ABE2', fontWeight: '800', fontSize: '1.2rem', marginBottom: '8px' }}>South India Expertise</div>
              <p style={{ fontSize: '0.9rem', color: 'var(--color-ink-900)' }}>
                Our outstation chauffeur road trips allow travellers to create their own custom itineraries across South India.
              </p>
            </div>

            <div className="card" style={{ padding: '28px' }}>
              <div style={{ color: '#29ABE2', fontWeight: '800', fontSize: '1.2rem', marginBottom: '8px' }}>One Partner, Multiple Journeys</div>
              <p style={{ fontSize: '0.9rem', color: 'var(--color-ink-900)' }}>
                Airport. Office. Event. Wedding. Road trip. Executive meeting. Different journeys — one trusted mobility partner.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Fleet Showcase (Section 21 with Visual Banner) */}
      <section className="section section-steel" id="fleet-section">
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 48px' }}>
            <span className="eyebrow">Exploring the world of comfort</span>
            <div className="badge badge-sky" style={{ marginBottom: '12px' }}>Our Fleet</div>
            <h2>A Vehicle for Every Requirement</h2>
            <p style={{ color: 'var(--color-grey-500)' }}>
              From a single executive travelling to a 49-member corporate delegation, Suhalaya's fleet is built around different passenger requirements.
            </p>
          </div>

          {/* Visual Showcase Banner */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '28px', marginBottom: '40px' }}>
            <div style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-card)' }}>
              <img src="/images/employee-shuttle-fleet.png" alt="Corporate & Employee Transportation Fleet" style={{ width: '100%', height: '220px', objectFit: 'cover' }} />
              <div style={{ padding: '16px', backgroundColor: '#FFF', fontWeight: '700', color: 'var(--color-navy-900)' }}>
                Corporate Staff Coaches & Shuttles
              </div>
            </div>

            <div style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-card)' }}>
              <img src="/images/wedding-event-fleet.png" alt="Wedding & VIP Luxury Cars" style={{ width: '100%', height: '220px', objectFit: 'cover' }} />
              <div style={{ padding: '16px', backgroundColor: '#FFF', fontWeight: '700', color: 'var(--color-navy-900)' }}>
                Bridal & VIP Luxury Sedans
              </div>
            </div>
          </div>

          <div className="hide-scroll" style={{ display: 'flex', overflowX: 'auto', gap: '28px', paddingBottom: '20px', scrollSnapType: 'x mandatory', WebkitOverflowScrolling: 'touch', alignItems: 'stretch' }}>
            {fleetData.map(f => (
              <div key={f.id} className="card" style={{ minWidth: '340px', flex: '0 0 340px', scrollSnapAlign: 'start', padding: '24px', display: 'flex', flexDirection: 'column' }}>
                <div className="badge badge-sky" style={{ marginBottom: '12px', fontSize: '0.75rem' }}>{f.tag}</div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '8px' }}>{f.name}</h3>
                <div style={{ fontSize: '0.85rem', color: '#1E8FC2', fontWeight: '700', marginBottom: '12px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  {f.models.map((model, idx) => (
                    <span key={idx}>{model}</span>
                  ))}
                </div>
                <p style={{ fontSize: '0.88rem', color: 'var(--color-ink-900)', marginBottom: '16px' }}>{f.idealFor}</p>
                <div style={{ paddingTop: '14px', borderTop: '1px solid var(--color-steel-200)', fontSize: '0.85rem', fontWeight: '600', color: 'var(--color-navy-900)' }}>
                  Capacity: {f.capacity}
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <Link href="/fleet" className="btn btn-outline">
              View Complete Fleet Specifications <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* 7. Safety Block */}
      <SafetyBlock />



      {/* 9. South India Mini-Itineraries Showcase (Section 18) */}
      <section className="section section-steel">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '48px', flexWrap: 'wrap', gap: '16px' }}>
            <div>
              <span className="eyebrow">Exploring the world of comfort</span>
              <div className="badge badge-sky" style={{ marginBottom: '12px' }}>South India Mini-Itineraries</div>
              <h2>Curated Chauffeur Road Trip Circuits</h2>
            </div>
            <Link href="/packages" className="btn btn-outline">
              View All Mini-Itineraries <ArrowRight size={16} />
            </Link>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '28px' }}>
            {miniItineraries.map(pkg => (
              <div key={pkg.slug} className="card" style={{ padding: '28px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div className="badge badge-sky" style={{ marginBottom: '12px', fontSize: '0.75rem' }}>{pkg.duration}</div>
                  <h3 style={{ fontSize: '1.3rem', marginBottom: '8px' }}>{pkg.name}</h3>
                  <p style={{ fontSize: '0.9rem', color: 'var(--color-ink-900)', marginBottom: '16px' }}>{pkg.tagline}</p>

                  <div style={{ backgroundColor: 'var(--color-white)', padding: '12px', borderRadius: '8px', border: '1px solid var(--color-steel-200)', fontSize: '0.85rem', color: 'var(--color-navy-900)', marginBottom: '20px' }}>
                    <strong>Best for:</strong> {pkg.bestFor}
                  </div>
                </div>

                <Link href={`/packages/${pkg.slug}`} className="btn btn-navy" style={{ width: '100%', fontSize: '0.88rem' }}>
                  View Circuit Itinerary
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. Featured Blogs / Travel Journal (Sections 24-31) */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '48px', flexWrap: 'wrap', gap: '16px' }}>
            <div>
              <span className="eyebrow">Exploring the world of comfort</span>
              <div className="badge badge-sky" style={{ marginBottom: '12px' }}>Blog & Guides</div>
              <h2>Insights for Corporate Mobility & Travel</h2>
            </div>
            <Link href="/blog" className="btn btn-outline">
              Read Blog Articles <BookOpen size={16} />
            </Link>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '28px' }}>
            {featuredBlogs.map(blog => (
              <div key={blog.slug} className="card" style={{ padding: '24px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div className="badge badge-sky" style={{ marginBottom: '12px', fontSize: '0.75rem' }}>
                    {blog.categoryName}
                  </div>
                  <h3 style={{ fontSize: '1.15rem', marginBottom: '10px', lineHeight: '1.35' }}>{blog.title}</h3>
                  <p style={{ fontSize: '0.88rem', color: 'var(--color-grey-500)', marginBottom: '20px' }}>{blog.summary}</p>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.8rem', color: 'var(--color-grey-500)', paddingTop: '16px', borderTop: '1px solid var(--color-steel-100)' }}>
                  <span>{blog.date}</span>
                  <Link href={`/blog/${blog.slug}`} style={{ color: '#29ABE2', fontWeight: '700' }}>
                    Read Article →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. Regional Operations Network */}
      <section className="section section-steel">
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto 48px' }}>
            <span className="eyebrow">Exploring the world of comfort</span>
            <div className="badge badge-navy" style={{ marginBottom: '12px' }}>Regional Operations</div>
            <h2>Head Office & Dispatch Network Across South India</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
            {locationsData.map(loc => (
              <div key={loc.slug} className="card" style={{ padding: '24px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                  <MapPin size={20} color="#29ABE2" />
                  <h3 style={{ fontSize: '1.2rem' }}>{loc.city}</h3>
                </div>
                <div style={{ fontSize: '0.8rem', color: '#1E8FC2', fontWeight: '700', marginBottom: '8px' }}>{loc.type}</div>
                <p style={{ fontSize: '0.85rem', color: 'var(--color-ink-900)', margin: '0' }}>{loc.address}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 12. Final CTA Band: Wherever You're Going, Start With Suhalaya. */}
      <section className="section section-dark" style={{ textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '720px' }}>
          <span className="eyebrow" style={{ color: 'rgba(255,255,255,0.7)' }}>Exploring the world of comfort</span>
          <div className="badge badge-sky" style={{ marginBottom: '20px', color: '#29ABE2', backgroundColor: 'rgba(41,171,226,0.18)' }}>Get Started Today</div>
          <h2 style={{ color: '#FFF', marginBottom: '20px', fontSize: '2.5rem' }}>
            Wherever You're Going, Start With Suhalaya.
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.92)', fontSize: '1.15rem', marginBottom: '10px', fontWeight: '600' }}>
            Tell us what needs to move, where it needs to go and when.
          </p>
          <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '1rem', marginBottom: '36px' }}>
            We'll work out the transportation around it.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button
              onClick={() => {
                const btn = document.getElementById('header-quote-btn');
                if (btn) btn.click();
              }}
              className="btn btn-primary"
              style={{ padding: '16px 36px', fontSize: '1rem' }}
            >
              Request a Quote
            </button>
            <a
              href="tel:+918049007777"
              className="btn btn-outline-white"
              style={{ padding: '16px 36px', fontSize: '1rem' }}
            >
              Call Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
