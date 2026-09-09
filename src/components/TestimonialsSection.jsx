'use client';

import { Star, Quote, Building2, UserCheck, ShieldCheck } from 'lucide-react';

export default function TestimonialsSection() {
  const reviews = [
    {
      quote: "Suhalaya handled employee transportation for our 4,000+ staff across night shifts in Whitefield. Their 24/7 control desk response and zero-tolerance safety protocol make them our top mobility vendor in India.",
      author: "Rajesh Kumar N.",
      title: "Head of Corporate Facilities & Real Estate",
      company: "Leading Global IT Consulting Firm (Bengaluru)",
      stars: 5,
      service: "Corporate Employee Transportation"
    },
    {
      quote: "For our international executive board visit, Suhalaya deployed a fleet of Toyota Camry and Fortuners with impeccably groomed chauffeurs. Every airport transfer was synchronized down to the minute.",
      author: "Ananya Deshmukh",
      title: "Executive Assistant to Managing Director",
      company: "Pharma MNC (Hyderabad & Bengaluru)",
      stars: 5,
      service: "Executive Mobility & Airport Transfers"
    },
    {
      quote: "We organized a 4-day outstation road journey across Mysore, Coorg, and Kabini for our leadership team. The chauffeur's route knowledge, courtesy, and vehicle cleanliness exceeded all expectations.",
      author: "Vikramaditya Rao",
      title: "Vice President - Operations",
      company: "Fintech Enterprise (Chennai)",
      stars: 5,
      service: "South India Road Journeys"
    }
  ];

  return (
    <section className="section" style={{ backgroundColor: 'var(--color-navy-900)', color: '#FFF', position: 'relative', overflow: 'hidden' }}>
      {/* Background Accent Glow */}
      <div style={{ position: 'absolute', bottom: '-150px', left: '-100px', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(0, 180, 216, 0.18) 0%, transparent 70%)', pointerEvents: 'none' }} />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 52px' }}>
          <span className="eyebrow" style={{ color: 'var(--color-sky-400)' }}>Exploring the world of comfort</span>
          <div className="badge badge-sky" style={{ marginBottom: '16px', backgroundColor: 'rgba(0,180,216,0.15)', color: '#48CAE4', border: '1px solid rgba(0,180,216,0.3)' }}>
            <UserCheck size={14} style={{ marginRight: '6px' }} /> Client Testimonials & Trust
          </div>
          <h2 style={{ color: '#FFF', fontSize: '2.4rem' }}>
            What Corporate Leaders & Travellers Say About Us
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '1.05rem', marginTop: '12px' }}>
            Delivering precision mobility, safety, and reliability to businesses and journeys across India.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px' }}>
          {reviews.map((rev, idx) => (
            <div 
              key={idx}
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.04)',
                backdropFilter: 'blur(16px)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                borderRadius: '24px',
                padding: '36px 32px',
                display: 'flex',
                flexDirection: 'column',
                justify: 'space-between',
                position: 'relative',
                transition: 'transform 0.3s ease, border-color 0.3s ease'
              }}
              className="testimonial-card"
            >
              <div>
                {/* Header Stars & Quote Icon */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                  <div style={{ display: 'flex', gap: '4px' }}>
                    {[...Array(rev.stars)].map((_, i) => (
                      <Star key={i} size={18} fill="#D4AF37" color="#D4AF37" />
                    ))}
                  </div>
                  <Quote size={32} style={{ opacity: 0.2, color: '#00B4D8' }} />
                </div>

                <div className="badge badge-sky" style={{ marginBottom: '16px', fontSize: '0.72rem', backgroundColor: 'rgba(0,180,216,0.1)', color: '#90E0EF', border: 'none' }}>
                  {rev.service}
                </div>

                <p style={{ color: 'rgba(255,255,255,0.92)', fontSize: '1rem', lineHeight: '1.7', italic: 'true', marginBottom: '28px' }}>
                  "{rev.quote}"
                </p>
              </div>

              {/* Author Footer */}
              <div style={{ paddingTop: '20px', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                <div style={{ fontWeight: '700', color: '#FFF', fontSize: '1.05rem' }}>
                  {rev.author}
                </div>
                <div style={{ fontSize: '0.84rem', color: 'var(--color-sky-400)', fontWeight: '600', marginTop: '2px' }}>
                  {rev.title}
                </div>
                <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.55)', marginTop: '2px' }}>
                  {rev.company}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
