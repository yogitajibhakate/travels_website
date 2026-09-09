'use client';

import Link from 'next/link';
import { servicesData } from '@/data/services';
import { ArrowRight, ChevronRight, CheckCircle2, Phone, Compass, Calendar, Building2, Users } from 'lucide-react';

export const metadata = {
  title: 'Our Services — Corporate, Airport & Executive Travel',
  description:
    'Suhalaya offers premium chauffeur-driven services across South India — corporate mobility, airport transfers, employee transport, executive travel, and curated heritage road trips.',
  alternates: { canonical: 'https://suhalayatravels.com/services' },
  openGraph: {
    title: 'Our Services — Corporate & Executive Travel | Suhalaya Travels',
    description: 'From corporate mobility to airport transfers and heritage road trips — premium chauffeur-driven services across South India.',
    url: 'https://suhalayatravels.com/services',
  },
};

export default function ServicesHubPage() {
  const businessServices = servicesData.filter(s => s.categoryCluster === 'business-mobility');
  const eventServices = servicesData.filter(s => s.categoryCluster === 'events-groups');
  const journeyServices = servicesData.filter(s => s.categoryCluster === 'journeys-beyond');

  return (
    <div>
      {/* 1. HERO */}
      <section className="section section-dark" style={{ paddingTop: '80px', paddingBottom: '80px' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '840px' }}>
          <div className="badge badge-sky" style={{ marginBottom: '18px', color: '#4DC0EC', backgroundColor: 'rgba(41,171,226,0.18)' }}>
            Suhalaya Services
          </div>
          <h1 style={{ color: '#FFF', marginBottom: '20px', fontSize: '2.8rem' }}>
            Mobility for Every Kind of Journey.
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.92)', fontSize: '1.18rem', fontWeight: '600', marginBottom: '16px' }}>
            One requirement rarely looks exactly like another.
          </p>
          <div style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1.02rem', lineHeight: '1.7', marginBottom: '28px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <p>• An employee needs to get to work.</p>
            <p>• An executive needs to reach three meetings.</p>
            <p>• A conference has hundreds of delegates arriving from different locations.</p>
            <p>• A family needs to move between hotels and a wedding venue.</p>
          </div>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1rem', lineHeight: '1.6', marginBottom: '36px' }}>
            The vehicle is only one part of the equation - Timing, people, locations and coordination matter just as much. Suhalaya Travels brings these moving parts together through chauffeur-driven mobility designed for businesses, groups, events and individual journeys.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="#service-categories" className="btn btn-primary" style={{ padding: '14px 32px' }}>
              Explore Our Services <ArrowRight size={16} />
            </a>
            <Link href="/contact" className="btn btn-outline-white" style={{ padding: '14px 32px' }}>
              Talk to Our Team
            </Link>
          </div>
        </div>
      </section>

      {/* 2. SERVICE CATEGORIES */}
      <section className="section" id="service-categories">
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '740px', margin: '0 auto 56px' }}>
            <span className="eyebrow">Exploring the world of comfort</span>
            <div className="badge badge-sky" style={{ marginBottom: '12px' }}>Service Categories</div>
            <h2>More Than Point-to-Point Travel.</h2>
            <p style={{ color: 'var(--color-ink-700)', marginTop: '12px', fontSize: '1.05rem', lineHeight: '1.7' }}>
              Some journeys are simple. Others need planning. Our services cover the everyday and the exceptional—from regular employee transportation and airport transfers to executive travel, corporate events, weddings and long-distance journeys.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '64px' }}>
            
            {/* Column 1: BUSINESS MOBILITY */}
            <div>
              <div style={{ marginBottom: '28px', borderBottom: '2px solid var(--color-steel-200)', paddingBottom: '16px' }}>
                <span className="eyebrow">Category 01</span>
                <h3 style={{ fontSize: '1.8rem', color: 'var(--color-navy-900)' }}>BUSINESS MOBILITY</h3>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
                {businessServices.map(s => (
                  <div key={s.slug} className="card" style={{ padding: '28px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <div>
                      <h4 style={{ fontSize: '1.25rem', marginBottom: '10px', color: 'var(--color-navy-900)' }}>{s.name}</h4>
                      <p style={{ fontSize: '0.9rem', color: 'var(--color-ink-700)', marginBottom: '20px', lineHeight: '1.6' }}>
                        {s.tagline}
                      </p>
                    </div>
                    <div style={{ paddingTop: '16px', borderTop: '1px solid var(--color-steel-200)' }}>
                      <Link href={`/services/${s.slug}`} className="btn btn-navy" style={{ width: '100%', fontSize: '0.88rem' }}>
                        {s.ctaText || 'View Details'} <ArrowRight size={14} />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Column 2: EVENTS & GROUPS */}
            <div>
              <div style={{ marginBottom: '28px', borderBottom: '2px solid var(--color-steel-200)', paddingBottom: '16px' }}>
                <span className="eyebrow">Category 02</span>
                <h3 style={{ fontSize: '1.8rem', color: 'var(--color-navy-900)' }}>EVENTS & GROUPS</h3>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
                {eventServices.map(s => (
                  <div key={s.slug} className="card" style={{ padding: '28px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <div>
                      <h4 style={{ fontSize: '1.25rem', marginBottom: '10px', color: 'var(--color-navy-900)' }}>{s.name}</h4>
                      <p style={{ fontSize: '0.9rem', color: 'var(--color-ink-700)', marginBottom: '20px', lineHeight: '1.6' }}>
                        {s.tagline}
                      </p>
                    </div>
                    <div style={{ paddingTop: '16px', borderTop: '1px solid var(--color-steel-200)' }}>
                      <Link href={`/services/${s.slug}`} className="btn btn-navy" style={{ width: '100%', fontSize: '0.88rem' }}>
                        {s.ctaText || 'View Details'} <ArrowRight size={14} />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Column 3: JOURNEYS BEYOND THE CITY */}
            <div>
              <div style={{ marginBottom: '28px', borderBottom: '2px solid var(--color-steel-200)', paddingBottom: '16px' }}>
                <span className="eyebrow">Category 03</span>
                <h3 style={{ fontSize: '1.8rem', color: 'var(--color-navy-900)' }}>JOURNEYS BEYOND THE CITY</h3>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
                {journeyServices.map(s => (
                  <div key={s.slug} className="card" style={{ padding: '28px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <div>
                      <h4 style={{ fontSize: '1.25rem', marginBottom: '10px', color: 'var(--color-navy-900)' }}>{s.name}</h4>
                      <p style={{ fontSize: '0.9rem', color: 'var(--color-ink-700)', marginBottom: '20px', lineHeight: '1.6' }}>
                        {s.tagline}
                      </p>
                    </div>
                    <div style={{ paddingTop: '16px', borderTop: '1px solid var(--color-steel-200)' }}>
                      <Link href={`/services/${s.slug}`} className="btn btn-navy" style={{ width: '100%', fontSize: '0.88rem' }}>
                        {s.ctaText || 'View Details'} <ArrowRight size={14} />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. DIFFERENT REQUIREMENTS */}
      <section className="section section-steel">
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 48px' }}>
            <span className="eyebrow">Exploring the world of comfort</span>
            <div className="badge badge-sky" style={{ marginBottom: '12px' }}>Operational Approach</div>
            <h2>Different Journey. Different Approach.</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', marginBottom: '40px' }}>
            <div className="card" style={{ padding: '28px' }}>
              <div style={{ color: '#29ABE2', fontWeight: '800', fontSize: '1.15rem', marginBottom: '10px' }}>A Daily Commute</div>
              <p style={{ fontSize: '0.92rem', color: 'var(--color-ink-900)' }}>
                Routes, timings and recurring employee movement need consistency.
              </p>
            </div>

            <div className="card" style={{ padding: '28px' }}>
              <div style={{ color: '#29ABE2', fontWeight: '800', fontSize: '1.15rem', marginBottom: '10px' }}>An Executive Visit</div>
              <p style={{ fontSize: '0.92rem', color: 'var(--color-ink-900)' }}>
                The focus shifts to comfort, convenience and keeping the day moving.
              </p>
            </div>

            <div className="card" style={{ padding: '28px' }}>
              <div style={{ color: '#29ABE2', fontWeight: '800', fontSize: '1.15rem', marginBottom: '10px' }}>A Corporate Event</div>
              <p style={{ fontSize: '0.92rem', color: 'var(--color-ink-900)' }}>
                Multiple people, locations and schedules call for coordinated transportation.
              </p>
            </div>

            <div className="card" style={{ padding: '28px' }}>
              <div style={{ color: '#29ABE2', fontWeight: '800', fontSize: '1.15rem', marginBottom: '10px' }}>A Wedding</div>
              <p style={{ fontSize: '0.92rem', color: 'var(--color-ink-900)' }}>
                Guest movement becomes part of the celebration—from arrival to departure.
              </p>
            </div>

            <div className="card" style={{ padding: '28px' }}>
              <div style={{ color: '#29ABE2', fontWeight: '800', fontSize: '1.15rem', marginBottom: '10px' }}>A Road Journey</div>
              <p style={{ fontSize: '0.92rem', color: 'var(--color-ink-900)' }}>
                The destination is only part of the experience. The route matters too.
              </p>
            </div>
          </div>

          <div style={{ textAlign: 'center', backgroundColor: '#FFF', padding: '24px 32px', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-steel-200)', maxWidth: '780px', margin: '0 auto' }}>
            <p style={{ fontSize: '1.02rem', fontWeight: '600', color: 'var(--color-navy-900)' }}>
              That's why every requirement starts with understanding who is travelling, where they're going, when they need to move and what the journey involves.
            </p>
          </div>
        </div>
      </section>

      {/* 4. FLEET APPROACH */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '48px', alignItems: 'center' }}>
            <div>
              <span className="eyebrow">Exploring the world of comfort</span>
              <div className="badge badge-sky" style={{ marginBottom: '16px' }}>Fleet Approach</div>
              <h2 style={{ fontSize: '2.4rem', color: 'var(--color-navy-900)', marginBottom: '20px' }}>
                Built Around People, Not Just Vehicles.
              </h2>
              <div style={{ fontSize: '1.02rem', color: 'var(--color-ink-900)', lineHeight: '1.8', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <p>
                  A fleet can provide options. Good mobility planning puts those options to work.
                </p>
                <p>
                  Depending on the requirement, transportation can range from a comfortable sedan to an executive car, premium SUV, luxury vehicle, van or full-size coach.
                </p>
                <p style={{ backgroundColor: 'var(--color-steel-100)', padding: '16px 20px', borderRadius: 'var(--radius-md)', borderLeft: '4px solid #29ABE2', fontWeight: '500' }}>
                  For corporate and event requirements, multiple vehicle categories can also be brought together as one coordinated movement plan.
                </p>
                <p style={{ fontSize: '1.05rem', fontWeight: '700', color: 'var(--color-navy-900)' }}>
                  Tell us what the journey looks like. We'll help work out the transportation.
                </p>
              </div>
            </div>

            <div className="card" style={{ padding: '36px', backgroundColor: 'var(--color-navy-900)', color: '#FFF' }}>
              <h3 style={{ color: '#FFF', marginBottom: '20px' }}>Vehicle Spectrum</h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '14px', fontSize: '0.95rem' }}>
                <li>✓ Economy & Executive Sedans</li>
                <li>✓ Premium MUVs (Innova Crysta & Hycross)</li>
                <li>✓ Executive Luxury (E-Class, Vellfire, S-Class)</li>
                <li>✓ Luxury Monocoque Vans (Force Urbania)</li>
                <li>✓ AC Staff & Tour Coaches (24 to 49 Seater)</li>
              </ul>
              <div style={{ marginTop: '28px' }}>
                <Link href="/fleet" className="btn btn-primary" style={{ width: '100%' }}>
                  View Full Fleet Specs <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CORPORATE SECTION */}
      <section className="section section-steel">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '48px', alignItems: 'center' }}>
            <div>
              <span className="eyebrow">Exploring the world of comfort</span>
              <div className="badge badge-navy" style={{ marginBottom: '16px' }}>Corporate Desk</div>
              <h2 style={{ fontSize: '2.3rem', color: 'var(--color-navy-900)', marginBottom: '20px' }}>
                Where Mobility Meets the Working Day.
              </h2>
              <div style={{ fontSize: '1rem', color: 'var(--color-ink-900)', lineHeight: '1.7', display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '28px' }}>
                <p>For businesses, transportation doesn't happen in isolation.</p>
                <p>It connects employees to workplaces, executives to meetings, clients to offices and delegates to events.</p>
                <p>Across Bengaluru's business districts and beyond, Suhalaya's corporate mobility services are designed to fit into the way organisations actually operate.</p>
                <p style={{ fontWeight: '600', color: 'var(--color-navy-900)' }}>
                  From a single executive journey to recurring employee transportation, the requirement can be handled according to scale.
                </p>
              </div>
              <Link href="/services/corporate-mobility" className="btn btn-navy">
                Explore Corporate Services <ArrowRight size={16} />
              </Link>
            </div>

            <div style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-card)' }}>
              <img src="/images/executive-chauffeur.png" alt="Corporate Mobility Services" style={{ width: '100%', height: 'auto', display: 'block' }} />
            </div>
          </div>
        </div>
      </section>

      {/* 6. EVENTS SECTION */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '48px', alignItems: 'center' }}>
            <div style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-card)' }}>
              <img src="/images/wedding-event-fleet.png" alt="Events & Celebrations Mobility" style={{ width: '100%', height: 'auto', display: 'block' }} />
            </div>

            <div>
              <span className="eyebrow">Exploring the world of comfort</span>
              <div className="badge badge-sky" style={{ marginBottom: '16px' }}>Events & Groups</div>
              <h2 style={{ fontSize: '2.3rem', color: 'var(--color-navy-900)', marginBottom: '20px' }}>
                When the Occasion Calls for More.
              </h2>
              <div style={{ fontSize: '1rem', color: 'var(--color-ink-900)', lineHeight: '1.7', display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '28px' }}>
                <p>• Not every journey belongs on a regular taxi booking.</p>
                <p>• A wedding may need guest transfers across multiple hotels.</p>
                <p>• An offsite may need an entire team moved together.</p>
                <p>• A conference may involve airport, hotel and venue transportation.</p>
                <p>• A large event may require a sizeable fleet working to a common schedule.</p>
                <p style={{ fontWeight: '700', color: 'var(--color-sky-600)', marginTop: '8px', fontSize: '1.05rem' }}>
                  These are mobility requirements—not just rides.
                </p>
              </div>
              <Link href="/services/corporate-events-conferences" className="btn btn-primary">
                Explore Event Services <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 7. OUTSTATION SECTION */}
      <section className="section" style={{ backgroundColor: '#0F2A52', color: '#FFF' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '48px', alignItems: 'center' }}>
            <div>
              <span className="eyebrow" style={{ color: 'rgba(255,255,255,0.7)' }}>Exploring the world of comfort</span>
              <div className="badge badge-heritage" style={{ marginBottom: '16px' }}>South India Journeys</div>
              <h2 style={{ color: '#FFF', fontSize: '2.3rem', marginBottom: '20px' }}>
                And Then There Are the Journeys You Remember.
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.92)', fontSize: '1.1rem', marginBottom: '16px', fontWeight: '600' }}>
                Some trips are about getting there. Others are about the road itself.
              </p>
              <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1rem', marginBottom: '24px', lineHeight: '1.7' }}>
                Take the family to Coorg. Plan a heritage trail through Hampi and Badami. Combine Ooty with Coonoor. Head towards Wayanad, Gokarna, Udupi or further into South India.
              </p>
              <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.95rem', marginBottom: '32px', lineHeight: '1.6' }}>
                With chauffeur-driven travel, you can build the itinerary around your interests while someone else handles the driving.
              </p>
              <Link href="/services/south-india-chauffeur-travel" className="btn btn-primary">
                Explore South India Travel <ArrowRight size={16} />
              </Link>
            </div>

            <div style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.15)' }}>
              <img src="/images/south-india-trip.png" alt="South India Chauffeur Travel" style={{ width: '100%', height: 'auto', display: 'block' }} />
            </div>
          </div>
        </div>
      </section>

      {/* 8. SERVICE FINDER */}
      <section className="section section-steel">
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 48px' }}>
            <span className="eyebrow">Exploring the world of comfort</span>
            <div className="badge badge-sky" style={{ marginBottom: '12px' }}>Service Finder</div>
            <h2>Find the Service That Fits.</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '20px' }}>
            <Link href="/services/corporate-mobility" className="card" style={{ padding: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <div style={{ fontSize: '0.88rem', color: 'var(--color-grey-500)' }}>Need regular business transportation?</div>
                <div style={{ fontWeight: '700', fontSize: '1.1rem', color: 'var(--color-navy-900)', marginTop: '4px' }}>→ Corporate Mobility</div>
              </div>
              <ChevronRight size={20} color="#29ABE2" />
            </Link>

            <Link href="/services/employee-transportation" className="card" style={{ padding: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <div style={{ fontSize: '0.88rem', color: 'var(--color-grey-500)' }}>Moving employees every day?</div>
                <div style={{ fontWeight: '700', fontSize: '1.1rem', color: 'var(--color-navy-900)', marginTop: '4px' }}>→ Employee Transportation</div>
              </div>
              <ChevronRight size={20} color="#29ABE2" />
            </Link>

            <Link href="/services/airport-transfers" className="card" style={{ padding: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <div style={{ fontSize: '0.88rem', color: 'var(--color-grey-500)' }}>Meeting someone at the airport?</div>
                <div style={{ fontWeight: '700', fontSize: '1.1rem', color: 'var(--color-navy-900)', marginTop: '4px' }}>→ Airport Transfers</div>
              </div>
              <ChevronRight size={20} color="#29ABE2" />
            </Link>

            <Link href="/services/chauffeur-on-call" className="card" style={{ padding: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <div style={{ fontSize: '0.88rem', color: 'var(--color-grey-500)' }}>Need a car for the day?</div>
                <div style={{ fontWeight: '700', fontSize: '1.1rem', color: 'var(--color-navy-900)', marginTop: '4px' }}>→ Chauffeur on Call</div>
              </div>
              <ChevronRight size={20} color="#29ABE2" />
            </Link>

            <Link href="/services/executive-vip-travel" className="card" style={{ padding: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <div style={{ fontSize: '0.88rem', color: 'var(--color-grey-500)' }}>Travelling with executives or VIP guests?</div>
                <div style={{ fontWeight: '700', fontSize: '1.1rem', color: 'var(--color-navy-900)', marginTop: '4px' }}>→ Executive & VIP Travel</div>
              </div>
              <ChevronRight size={20} color="#29ABE2" />
            </Link>

            <Link href="/services/corporate-events-conferences" className="card" style={{ padding: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <div style={{ fontSize: '0.88rem', color: 'var(--color-grey-500)' }}>Planning a conference or corporate event?</div>
                <div style={{ fontWeight: '700', fontSize: '1.1rem', color: 'var(--color-navy-900)', marginTop: '4px' }}>→ Events & Conferences</div>
              </div>
              <ChevronRight size={20} color="#29ABE2" />
            </Link>

            <Link href="/services/team-outings-offsites" className="card" style={{ padding: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <div style={{ fontSize: '0.88rem', color: 'var(--color-grey-500)' }}>Taking your team away from the office?</div>
                <div style={{ fontWeight: '700', fontSize: '1.1rem', color: 'var(--color-navy-900)', marginTop: '4px' }}>→ Team Outings & Offsites</div>
              </div>
              <ChevronRight size={20} color="#29ABE2" />
            </Link>

            <Link href="/services/weddings-family-events" className="card" style={{ padding: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <div style={{ fontSize: '0.88rem', color: 'var(--color-grey-500)' }}>Coordinating a wedding?</div>
                <div style={{ fontWeight: '700', fontSize: '1.1rem', color: 'var(--color-navy-900)', marginTop: '4px' }}>→ Weddings & Family Events</div>
              </div>
              <ChevronRight size={20} color="#29ABE2" />
            </Link>

            <Link href="/services/south-india-chauffeur-travel" className="card" style={{ padding: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <div style={{ fontSize: '0.88rem', color: 'var(--color-grey-500)' }}>Planning your own South India road trip?</div>
                <div style={{ fontWeight: '700', fontSize: '1.1rem', color: 'var(--color-navy-900)', marginTop: '4px' }}>→ South India Chauffeur Travel</div>
              </div>
              <ChevronRight size={20} color="#29ABE2" />
            </Link>

            <Link href="/services/large-events-air-shows" className="card" style={{ padding: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <div style={{ fontSize: '0.88rem', color: 'var(--color-grey-500)' }}>Travelling as a group or for a large event?</div>
                <div style={{ fontWeight: '700', fontSize: '1.1rem', color: 'var(--color-navy-900)', marginTop: '4px' }}>→ Large Events & Air Shows</div>
              </div>
              <ChevronRight size={20} color="#29ABE2" />
            </Link>
          </div>
        </div>
      </section>



      {/* 9. FINAL CTA */}
      <section className="section section-dark" style={{ textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '720px' }}>
          <h2 style={{ color: '#FFF', marginBottom: '18px', fontSize: '2.4rem' }}>
            Tell Us What You're Planning.
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.92)', fontSize: '1.1rem', fontWeight: '600', marginBottom: '10px' }}>
            You don't need to know exactly which service you need.
          </p>
          <p style={{ color: 'rgba(255,255,255,0.78)', fontSize: '1rem', marginBottom: '36px', lineHeight: '1.6' }}>
            Share the destination, date, number of people and what you're trying to organise. We'll help you identify the right mobility solution.
          </p>
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
        </div>
      </section>
    </div>
  );
}
