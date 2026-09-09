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

export default function HomePage() {
  const featuredServices = servicesData.slice(0, 8);
  const featuredBlogs = blogsData.slice(0, 3);
  const miniItineraries = packagesData.filter(p => p.category === 'mini-itinerary').slice(0, 3);

  return (
    <div>
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

      {/* 2. Introduction: More Than a Ride. A Mobility Partner. */}
      <section className="section" id="introduction-section" style={{ backgroundColor: '#FFF' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '48px', alignItems: 'center' }}>
            <div>
              {/* Tagline eyebrow: italic grey-500 mirroring "Exploring the world of comfort" */}
              <span className="eyebrow">Exploring the world of comfort</span>
              <div className="badge badge-sky" style={{ marginBottom: '16px' }}>Welcome to Suhalaya Travels</div>
              <h2 style={{ fontSize: '2.4rem', color: 'var(--color-navy-900)', marginBottom: '20px' }}>
                More Than a Ride. A Mobility Partner.
              </h2>

              <div style={{ fontSize: '1.05rem', color: 'var(--color-ink-900)', lineHeight: '1.8', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <p>
                  Business travel doesn't always happen between two fixed points.
                </p>
                <p style={{ backgroundColor: 'var(--color-steel-100)', padding: '18px 22px', borderRadius: 'var(--radius-md)', borderLeft: '4px solid #29ABE2', fontWeight: '500', fontSize: '0.98rem' }}>
                  Employees travel across shifts. Executives move between airports, offices and meetings. Clients arrive from different cities. Conferences bring hundreds of people together. Families travel across states for weddings, pilgrimages and celebrations.
                </p>
                <p>
                  <strong>Suhalaya helps manage that movement.</strong>
                </p>
                <p style={{ fontSize: '0.95rem' }}>
                  Our chauffeur-driven mobility services cover corporate travel, employee transportation, airport transfers, executive mobility, events, weddings and large group transportation across India.
                </p>
                <p style={{ fontSize: '0.95rem', fontWeight: '600', color: 'var(--color-navy-900)' }}>
                  For travellers who want to explore South India at their own pace, we also offer customised chauffeur-driven road journeys where <em>you decide the route and we take care of the road.</em>
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

      {/* 3. Services Grid: Mobility Built Around Your Journey */}
      <section className="section section-steel" id="services-overview">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '48px', flexWrap: 'wrap', gap: '16px' }}>
            <div>
              <span className="eyebrow">Exploring the world of comfort</span>
              <div className="badge badge-sky" style={{ marginBottom: '12px' }}>Our Services</div>
              <h2>Mobility Built Around Your Journey</h2>
              <p style={{ color: 'var(--color-grey-500)', marginTop: '8px', maxWidth: '600px' }}>
                Not every journey needs the same vehicle, schedule, or service. Suhalaya brings these requirements together under one mobility partner.
              </p>
            </div>
            <Link href="/services" className="btn btn-outline">
              Explore All Services <ArrowRight size={16} />
            </Link>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '28px' }}>
            {featuredServices.map(service => (
              <div key={service.slug} className="card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '28px' }}>
                <div>
                  <div className="badge badge-sky" style={{ marginBottom: '16px', fontSize: '0.75rem' }}>
                    {service.categoryCluster.replace('for-', 'For ')}
                  </div>
                  <h3 style={{ fontSize: '1.25rem', marginBottom: '10px' }}>{service.name}</h3>
                  <p style={{ fontSize: '0.9rem', color: 'var(--color-ink-900)', marginBottom: '20px', lineHeight: '1.6' }}>
                    {service.tagline}
                  </p>
                </div>
                <Link href={`/services/${service.slug}`} style={{ color: '#29ABE2', fontWeight: '700', fontSize: '0.9rem', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                  Explore Service Details <ChevronRight size={16} color="#29ABE2" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. South India Chauffeur Road Trips (Section 17 - Heritage Gold Accent reserved here §2a) */}
      <section className="section" style={{ backgroundColor: '#0F2A52', color: '#FFF' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '48px', alignItems: 'center' }}>
            <div>
              <span className="eyebrow" style={{ color: 'rgba(255,255,255,0.7)' }}>Exploring the world of comfort</span>
              {/* Reserved Heritage Gold Accent badge for Heritage/Pilgrimage story */}
              <div className="badge badge-heritage" style={{ marginBottom: '16px' }}>
                <Compass size={14} style={{ marginRight: '6px' }} /> South Indian Heritage Journeys
              </div>
              <h2 style={{ color: '#FFF', fontSize: '2.4rem', marginBottom: '20px' }}>
                South India. Your Route. Your Pace. Our Chauffeur.
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.08rem', marginBottom: '20px', lineHeight: '1.7' }}>
                You choose where you want to go. Add a few places you've always wanted to visit. Stop when the landscape changes. Stay another night if you like the place. Your chauffeur takes care of the driving.
              </p>
              <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.98rem', marginBottom: '28px', lineHeight: '1.6' }}>
                From the coffee plantations of Coorg to the ruins of Hampi, the beaches of Gokarna, the hills of Ooty, the forests of Kabini and the backwaters of Kerala, South India is best experienced from the road.
              </p>

              <div style={{ padding: '16px 20px', borderRadius: 'var(--radius-md)', backgroundColor: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.15)', marginBottom: '32px', display: 'inline-block' }}>
                <span style={{ fontSize: '1.05rem', fontWeight: '700', color: '#29ABE2' }}>
                  "You plan the journey. We handle the road."
                </span>
              </div>

              <div>
                <Link href="/services/south-india-road-journeys" className="btn btn-primary">
                  Explore South India Road Trips <ArrowRight size={16} />
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

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '28px' }}>
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

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '28px' }}>
            {fleetData.map(f => (
              <div key={f.id} className="card" style={{ padding: '24px' }}>
                <div className="badge badge-sky" style={{ marginBottom: '12px', fontSize: '0.75rem' }}>{f.tag}</div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '8px' }}>{f.name}</h3>
                <div style={{ fontSize: '0.85rem', color: '#1E8FC2', fontWeight: '700', marginBottom: '12px' }}>
                  {f.models.join(' | ')}
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

      {/* 8. Industry Expertise (Section 20) */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 48px' }}>
            <span className="eyebrow">Exploring the world of comfort</span>
            <div className="badge badge-sky" style={{ marginBottom: '12px' }}>Industry Expertise</div>
            <h2>Mobility That Understands Your Industry</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            {industriesData.map(ind => (
              <div key={ind.slug} className="card" style={{ padding: '24px' }}>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '10px' }}>{ind.name}</h3>
                <p style={{ fontSize: '0.88rem', color: 'var(--color-ink-900)', marginBottom: '16px', lineHeight: '1.5' }}>{ind.tagline}</p>
                <Link href={`/corporate/industries/${ind.slug}`} style={{ fontSize: '0.85rem', fontWeight: '700', color: '#29ABE2', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                  Explore Vertical Mobility <ChevronRight size={14} color="#29ABE2" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

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

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            {locationsData.map(loc => (
              <div key={loc.slug} className="card" style={{ padding: '24px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                  <MapPin size={20} color="#29ABE2" />
                  <h3 style={{ fontSize: '1.2rem' }}>{loc.city}</h3>
                </div>
                <div style={{ fontSize: '0.8rem', color: '#1E8FC2', fontWeight: '700', marginBottom: '8px' }}>{loc.type}</div>
                <p style={{ fontSize: '0.85rem', color: 'var(--color-ink-900)', marginBottom: '16px' }}>{loc.address}</p>
                <Link href={`/locations/${loc.slug}`} style={{ fontSize: '0.85rem', fontWeight: '700', color: 'var(--color-navy-900)' }}>
                  View Dispatch Point Details →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 12. Final CTA Band (Section 34) */}
      <section className="section section-dark" style={{ textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '720px' }}>
          <span className="eyebrow" style={{ color: 'rgba(255,255,255,0.7)' }}>Exploring the world of comfort</span>
          <div className="badge badge-sky" style={{ marginBottom: '20px', color: '#29ABE2', backgroundColor: 'rgba(41,171,226,0.18)' }}>Get Started Today</div>
          <h2 style={{ color: '#FFF', marginBottom: '20px', fontSize: '2.4rem' }}>
            Tell Us Where You Need to Go. We'll Plan the Mobility.
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1.1rem', marginBottom: '36px' }}>
            Corporate travel. Employee transportation. Airport transfers. Executive mobility. Conferences. Weddings. Large events. Or a road trip where the only thing you have to decide is where to stop next.
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
              Call 24/7 Desk: +91 80 4900 7777
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
