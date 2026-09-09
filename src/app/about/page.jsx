'use client';

import Link from 'next/link';

export const metadata = {
  title: 'About Us — Our Story & Values',
  description:
    'Learn about Suhalaya Travels — South India\'s premium chauffeur-driven mobility partner. Our story, mission, safety protocols, and the values behind every journey.',
  alternates: { canonical: 'https://suhalayatravels.com/about' },
  openGraph: {
    title: 'About Suhalaya Travels — Our Story & Values',
    description: 'Premium chauffeur-driven journeys in South India. Meet the team behind every safe, comfortable ride.',
    url: 'https://suhalayatravels.com/about',
  },
};
import { ShieldCheck, Award, MapPin, Users, ArrowRight, HeartHandshake, Car, Compass } from 'lucide-react';

export default function AboutPage() {
  return (
    <div>
      {/* About Hero */}
      <section className="section section-dark" style={{ paddingTop: '80px', paddingBottom: '70px' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '780px' }}>
          <div className="badge badge-sky" style={{ marginBottom: '16px', color: '#4DC0EC', backgroundColor: 'rgba(41,171,226,0.18)' }}>
            About Suhalaya Travels
          </div>
          <h1 style={{ color: '#FFF', marginBottom: '20px', fontSize: '2.5rem' }}>
            Moving People Since 1999
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1.15rem', lineHeight: '1.7' }}>
            Chauffeur-driven corporate mobility, employee transportation, executive travel, and South India road journeys.
          </p>
        </div>
      </section>

      {/* Brand Story Section 32 */}
      <section className="section" style={{ backgroundColor: '#FFF' }}>
        <div className="container" style={{ maxWidth: '860px' }}>
          <div style={{ textAlign: 'center', marginBottom: '36px' }}>
            <span className="eyebrow">Our Journey & Philosophy</span>
            <h2>Transportation is About People First and Vehicles Second</h2>
          </div>

          <div style={{ fontSize: '1.08rem', color: 'var(--color-ink-700)', lineHeight: '1.8', display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <p>
              Suhalaya has been delivering mobility services since 1999 as a trusted corporate car rental, employee transportation, and chauffeur mobility partner.
            </p>
            <div style={{ backgroundColor: 'var(--color-steel-100)', padding: '24px', borderRadius: '12px', borderLeft: '4px solid #29ABE2', fontWeight: '600', color: 'var(--color-navy-900)' }}>
              Our journey has been built around a simple understanding: Transportation is about people first and vehicles second.
            </div>
            <p>
              Businesses need employees to reach work. Executives need to move between meetings. Guests need to arrive comfortably. Events need hundreds of people to reach the right place at the right time. Families need the freedom to travel without the responsibility of driving.
            </p>
            <p>
              Suhalaya brings these requirements together through chauffeur-driven mobility, a diverse fleet and a growing range of transportation solutions.
            </p>
            <p>
              From everyday corporate movement in Bengaluru to executive travel across India and self-planned road journeys through South India, our focus remains on making the journey dependable, comfortable and well coordinated.
            </p>
            <div style={{ textAlign: 'center', marginTop: '16px', fontSize: '1.2rem', fontWeight: '700', color: 'var(--color-navy-900)' }}>
              "Wherever the journey takes you, Suhalaya moves with you."
            </div>
          </div>
        </div>
      </section>

      {/* Why Organisations Choose Suhalaya (Section 22) */}
      <section className="section section-steel">
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 48px' }}>
            <span className="eyebrow">Exploring the world of comfort</span>
            <div className="badge badge-sky" style={{ marginBottom: '12px' }}>Why Suhalaya</div>
            <h2>Why Organisations Choose Suhalaya: Built for Business</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '28px' }}>
            <div className="card" style={{ padding: '28px' }}>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '8px', color: '#29ABE2' }}>A Fleet That Scales</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--color-ink-600)' }}>
                One executive sedan or an entire event fleet—the vehicle mix can be built around the exact requirement.
              </p>
            </div>

            <div className="card" style={{ padding: '28px' }}>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '8px', color: '#29ABE2' }}>Professional Chauffeur Experience</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--color-ink-600)' }}>
                The chauffeur is part of the service. Professional conduct, communication and familiarity with the journey matter.
              </p>
            </div>

            <div className="card" style={{ padding: '28px' }}>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '8px', color: '#29ABE2' }}>Flexible by Design</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--color-ink-600)' }}>
                Hourly. Point-to-point. Multiple stops. Full-day. Multi-day. Event-based.
              </p>
            </div>

            <div className="card" style={{ padding: '28px' }}>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '8px', color: '#29ABE2' }}>Corporate & Event Experience</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--color-ink-600)' }}>
                From daily employee movement to large conferences, transportation can be planned according to the scale.
              </p>
            </div>

            <div className="card" style={{ padding: '28px' }}>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '8px', color: '#29ABE2' }}>South India Expertise</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--color-ink-600)' }}>
                Our chauffeur road trips allow travellers to create their own itineraries across South India.
              </p>
            </div>

            <div className="card" style={{ padding: '28px' }}>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '8px', color: '#29ABE2' }}>One Partner, Multiple Journeys</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--color-ink-600)' }}>
                Airport. Office. Event. Wedding. Road trip. Executive meeting. Different journeys — one mobility partner.
              </p>
            </div>
          </div>
        </div>
      </section>



      {/* Final CTA */}
      <section className="section section-dark" style={{ textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '640px' }}>
          <h2 style={{ color: '#FFF', marginBottom: '16px', fontSize: '2rem' }}>
            Tell Us Where You Need to Go. We'll Plan the Mobility.
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.8)', marginBottom: '28px' }}>
            Connect with our dispatch desk to plan corporate, event, or outstation mobility.
          </p>
          <Link href="/contact" className="btn btn-primary" style={{ padding: '14px 32px' }}>
            Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  );
}
