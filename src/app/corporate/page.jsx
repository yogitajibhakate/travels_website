'use client';

import Link from 'next/link';
import { industriesData } from '@/data/industries';
import { Building2, ShieldCheck, CheckCircle2, ArrowRight, Phone, Award, Users, Globe, Lock } from 'lucide-react';

export default function CorporatePage() {
  return (
    <div>
      {/* Corporate Hero */}
      <section className="section section-dark" style={{ paddingTop: '80px', paddingBottom: '70px' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '48px', alignItems: 'center' }}>
            <div>
              <div className="badge badge-sky" style={{ marginBottom: '16px', color: '#4DC0EC', backgroundColor: 'rgba(41,171,226,0.18)' }}>
                Corporate Mobility Partner
              </div>
              <h1 style={{ color: '#FFF', marginBottom: '16px', fontSize: '2.4rem' }}>
                Mobility That Keeps Business Moving
              </h1>
              <p style={{ color: '#29ABE2', fontSize: '1.2rem', fontWeight: '600', marginBottom: '16px' }}>
                Business Travel That Moves at Your Pace
              </p>
              <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1rem', marginBottom: '28px', lineHeight: '1.7' }}>
                Your business may have one office or twenty. Your employees may travel every day or only when a project demands it. Suhalaya provides chauffeur-driven corporate transportation designed around the way businesses actually operate.
              </p>
              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                <Link href="/corporate/create-account" className="btn btn-primary">
                  Create Corporate Account <ArrowRight size={16} />
                </Link>
                <a href="tel:+918049007777" className="btn btn-outline-white">
                  Call Corporate Desk
                </a>
              </div>
            </div>

            <div style={{ backgroundColor: 'var(--color-navy-800)', padding: '36px', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.12)' }}>
              <h3 style={{ color: '#FFF', marginBottom: '16px' }}>Enterprise Mobility Features</h3>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '14px', color: '#E4E8EC', fontSize: '0.9rem' }}>
                <li style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                  <CheckCircle2 size={18} color="#29ABE2" /> Background-Vetted Professional Chauffeurs
                </li>
                <li style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                  <CheckCircle2 size={18} color="#29ABE2" /> 24/7 Key Account & Dispatch Desk
                </li>
                <li style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                  <CheckCircle2 size={18} color="#29ABE2" /> Itemized GST Digital Duty Slips
                </li>
                <li style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                  <CheckCircle2 size={18} color="#29ABE2" /> Hourly, Daily & Intercity Travel Options
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Overview: Business Travel That Moves at Your Pace */}
      <section className="section" style={{ backgroundColor: '#FFF' }}>
        <div className="container" style={{ maxWidth: '860px' }}>
          <div style={{ textAlign: 'center', marginBottom: '32px' }}>
            <span className="eyebrow">Corporate Mobility Blueprint</span>
            <h2>Flexible Transportation Designed for Modern Enterprise</h2>
          </div>

          <div style={{ fontSize: '1.05rem', color: 'var(--color-ink-700)', lineHeight: '1.8', display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <p>
              From airport transfers and client meetings to site visits, inter-office movement, executive travel, and corporate events, transportation can be arranged around your schedule rather than the other way around.
            </p>
            <p>
              For companies, this can mean individual cars for executives, recurring employee transportation, dedicated vehicles for visiting clients or coordinated fleets for business events.
            </p>
            <p>
              Our corporate mobility services can be used for hourly travel, full-day requirements, point-to-point journeys, multiple stops and longer intercity travel.
            </p>
            <div style={{ backgroundColor: 'var(--color-steel-100)', padding: '24px', borderRadius: '12px', borderLeft: '4px solid #29ABE2', fontWeight: '600', color: 'var(--color-navy-900)' }}>
              Whether you are moving one important guest or managing transportation for an entire team, the objective remains the same: make business travel easier to coordinate, easier to manage and more comfortable for the people travelling.
            </div>
          </div>
        </div>
      </section>

      {/* Executive Security & Secure Chauffeur Mobility (Section 8) */}
      <section className="section section-steel">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '48px', alignItems: 'center' }}>
            <div>
              <div className="badge badge-sky" style={{ marginBottom: '12px' }}>
                <Lock size={14} style={{ marginRight: '6px' }} /> Security-First Mobility
              </div>
              <h2 style={{ fontSize: '1.8rem', marginBottom: '16px' }}>
                Executive Security & Secure Chauffeur Mobility
              </h2>
              <p style={{ color: 'var(--color-ink-600)', fontSize: '0.98rem', marginBottom: '20px', lineHeight: '1.7' }}>
                When an executive, VIP or important guest is travelling, transportation can become part of the overall movement plan. Suhalaya can support security-conscious chauffeur transportation through controlled pickup and drop coordination, discreet vehicle movement, chauffeur and vehicle information, journey monitoring where available and defined escalation procedures.
              </p>
              <p style={{ color: 'var(--color-ink-600)', fontSize: '0.95rem', marginBottom: '24px', lineHeight: '1.6' }}>
                For sensitive business travel, the vehicle can also provide a private environment for conversations, calls and work between destinations.
              </p>
              <div style={{ padding: '16px 20px', borderRadius: '10px', backgroundColor: '#FFF', border: '1px solid var(--color-steel-200)', fontSize: '0.9rem', fontWeight: '600', color: 'var(--color-navy-900)' }}>
                Controlled movement. Professional chauffeurs. Greater discretion.
              </div>
            </div>

            <div className="card" style={{ padding: '32px', backgroundColor: '#FFF' }}>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '16px' }}>Security Protocol Scope</h3>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.9rem', color: 'var(--color-ink-700)' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <CheckCircle2 size={16} color="#29ABE2" /> Controlled advance pickup & drop coordination
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <CheckCircle2 size={16} color="#29ABE2" /> Advance driver & vehicle verification details
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <CheckCircle2 size={16} color="#29ABE2" /> Discreet movement & private cabin environment
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <CheckCircle2 size={16} color="#29ABE2" /> Journey monitoring & escalation protocols
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pan-India Mobility (Section 19) */}
      <section className="section" style={{ backgroundColor: '#0B1B2B', color: '#FFF' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '760px', margin: '0 auto 40px' }}>
            <div className="badge badge-sky" style={{ marginBottom: '12px', color: '#4DC0EC', backgroundColor: 'rgba(41,171,226,0.18)' }}>
              <Globe size={14} style={{ marginRight: '6px' }} /> Nationwide Coverage
            </div>
            <h2 style={{ color: '#FFF', fontSize: '2.2rem', marginBottom: '16px' }}>
              One Mobility Partner. Across India.
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1.05rem', lineHeight: '1.7' }}>
              Your business may begin in Bengaluru. Your business travel doesn't. Suhalaya's corporate and chauffeur-driven transportation services can support requirements across India, subject to operational availability.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px', marginBottom: '40px' }}>
            <div style={{ backgroundColor: 'rgba(255,255,255,0.06)', padding: '20px', borderRadius: '12px', textAlign: 'center', color: '#FFF', fontWeight: '600' }}>
              Bengaluru & Mysuru
            </div>
            <div style={{ backgroundColor: 'rgba(255,255,255,0.06)', padding: '20px', borderRadius: '12px', textAlign: 'center', color: '#FFF', fontWeight: '600' }}>
              Hyderabad & Cyberabad
            </div>
            <div style={{ backgroundColor: 'rgba(255,255,255,0.06)', padding: '20px', borderRadius: '12px', textAlign: 'center', color: '#FFF', fontWeight: '600' }}>
              Mumbai & Pune
            </div>
            <div style={{ backgroundColor: 'rgba(255,255,255,0.06)', padding: '20px', borderRadius: '12px', textAlign: 'center', color: '#FFF', fontWeight: '600' }}>
              Delhi NCR & Ahmedabad
            </div>
            <div style={{ backgroundColor: 'rgba(255,255,255,0.06)', padding: '20px', borderRadius: '12px', textAlign: 'center', color: '#FFF', fontWeight: '600' }}>
              Chennai & Kochi
            </div>
            <div style={{ backgroundColor: 'rgba(255,255,255,0.06)', padding: '20px', borderRadius: '12px', textAlign: 'center', color: '#FFF', fontWeight: '600' }}>
              Kolkata & Jaipur
            </div>
          </div>

          <div style={{ textAlign: 'center', fontSize: '1.1rem', fontWeight: '700', color: '#29ABE2' }}>
            "Business moves across cities. Your mobility partner should too."
          </div>
        </div>
      </section>

      {/* Industries We Serve (Section 20) */}
      <section className="section" id="industries">
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 48px' }}>
            <span className="eyebrow">Exploring the world of comfort</span>
            <div className="badge badge-sky" style={{ marginBottom: '12px' }}>Industry Expertise</div>
            <h2>Mobility That Understands Your Industry</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '28px' }}>
            {industriesData.map(ind => (
              <div key={ind.slug} className="card" style={{ padding: '28px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <h3 style={{ fontSize: '1.3rem', marginBottom: '10px' }}>{ind.name}</h3>
                  <p style={{ fontSize: '0.9rem', color: 'var(--color-ink-600)', marginBottom: '16px', lineHeight: '1.6' }}>
                    {ind.tagline}
                  </p>
                  
                  <div style={{ marginBottom: '20px' }}>
                    <strong style={{ fontSize: '0.85rem', color: 'var(--color-navy-900)' }}>Key Use Cases:</strong>
                    <ul style={{ listStyle: 'none', padding: 0, marginTop: '8px', fontSize: '0.85rem', color: 'var(--color-ink-700)', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                      {ind.useCases.map((uc, i) => (
                        <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                          <span style={{ color: '#29ABE2' }}>•</span> {uc}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div style={{ paddingTop: '16px', borderTop: '1px solid var(--color-steel-200)' }}>
                  <Link href={`/corporate/industries/${ind.slug}`} className="btn btn-outline" style={{ width: '100%', fontSize: '0.88rem' }}>
                    View Industry Blueprint <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* CTA Band */}
      <section className="section section-dark" style={{ textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '640px' }}>
          <h2 style={{ color: '#FFF', marginBottom: '16px', fontSize: '2rem' }}>
            Tell Us Where You Need to Go. We'll Plan the Mobility.
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.8)', marginBottom: '28px' }}>
            Create a corporate account today for custom credit limits and dedicated key account management.
          </p>
          <Link href="/corporate/create-account" className="btn btn-primary" style={{ padding: '14px 32px' }}>
            Create Corporate Account Now
          </Link>
        </div>
      </section>
    </div>
  );
}
