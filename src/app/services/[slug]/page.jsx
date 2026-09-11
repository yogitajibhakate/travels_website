'use client';

import { use } from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { servicesData } from '@/data/services';
import { fleetData } from '@/data/fleet';
import { blogsData } from '@/data/blogs';
import { locationsData } from '@/data/locations';
import FAQAccordion from '@/components/FAQAccordion';
import BookingWidget from '@/components/BookingWidget';
import { CheckCircle2, ArrowRight, ShieldCheck, UserCheck, Clock, MapPin, Car, BookOpen } from 'lucide-react';

export default function ServiceDetailPage({ params }) {
  const { slug } = use(params);
  const service = servicesData.find(s => s.slug === slug);

  if (!service) {
    notFound();
  }

  // Cross-linking rule (IA §5): link to 2-3 related services, 1 package, 2-3 related blogs
  const relatedServices = servicesData.filter(s => s.slug !== slug).slice(0, 3);
  const relatedBlogs = blogsData.filter(b => b.relatedServiceSlug === slug || b.category === service.categoryCluster).slice(0, 3);

  const parseWhoItsFor = (text) => {
    if (!text) return [];
    if (Array.isArray(text)) return text;
    const normalized = text
      .replace(/,?\s+and\s+/gi, ', ')
      .replace(/\s+&\s+/gi, ', ')
      .replace(/\.$/, '');
    return normalized
      .split(',')
      .map(item => item.trim())
      .filter(Boolean)
      .map(item => item.charAt(0).toUpperCase() + item.slice(1));
  };

  const targetAudienceList = parseWhoItsFor(service.whoItsFor);

  const getServiceImage = (serviceSlug) => {
    switch (serviceSlug) {
      case 'weddings-family-events':
        return '/images/wedding-event-fleet.png';
      case 'employee-transportation':
      case 'large-events-air-shows':
      case 'corporate-events-conferences':
        return '/images/employee-shuttle-fleet.png';
      case 'south-india-chauffeur-travel':
      case 'pilgrimage-heritage-travel':
      case 'team-outings-offsites':
        return '/images/south-india-trip.png';
      case 'corporate-mobility':
      case 'executive-vip-travel':
      case 'chauffeur-on-call':
        return '/images/executive-chauffeur.png';
      default:
        return '/images/hero-bg.jpg';
    }
  };

  return (
    <div>
      {/* 1. Service Hero */}
      <section className="section section-dark" style={{ paddingTop: '80px', paddingBottom: '80px' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '48px', alignItems: 'center' }}>
            <div>
              <div className="badge badge-gold" style={{ marginBottom: '16px' }}>
                {service.categoryName || 'Service Category'}
              </div>
              <h1 style={{ color: '#FFF', marginBottom: '20px' }}>{service.heroHeadline}</h1>
              <p style={{ color: '#CBD4DC', fontSize: '1.1rem', marginBottom: '32px', lineHeight: '1.7' }}>
                {service.heroSubheadline}
              </p>
              
              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                <button 
                  onClick={() => {
                    const btn = document.getElementById('header-quote-btn');
                    if (btn) btn.click();
                  }}
                  className="btn btn-primary"
                >
                  {service.ctaText || `Request ${service.shortTitle} Quote`} <ArrowRight size={16} />
                </button>
                
                <a href="https://wa.me/918049007777" target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp">
                  WhatsApp Helpline
                </a>
              </div>
            </div>

            {/* Embedded Quote Widget pre-filled with service */}
            <div>
              <BookingWidget sourcePage={`/services/${service.slug}`} defaultService={service.slug} />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Who It's For & Overview */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
            <div>
              <div className="badge badge-navy" style={{ marginBottom: '12px' }}>Target Audience</div>
              <h2>Who This Service Is Built For</h2>
              <ul style={{ listStyle: 'none', padding: 0, margin: '20px 0 0 0', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {targetAudienceList.map((item, index) => (
                  <li 
                    key={index} 
                    style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: '12px', 
                      padding: '12px 18px',
                      backgroundColor: 'var(--color-steel-100)',
                      borderRadius: 'var(--radius-md)',
                      border: '1px solid var(--color-steel-200)',
                      fontSize: '0.96rem', 
                      color: 'var(--color-navy-900)', 
                      fontWeight: '600',
                      boxShadow: '0 2px 6px rgba(15, 42, 82, 0.03)'
                    }}
                  >
                    <div style={{ 
                      width: '24px', 
                      height: '24px', 
                      borderRadius: '50%', 
                      backgroundColor: 'rgba(41, 171, 226, 0.12)', 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center',
                      flexShrink: 0 
                    }}>
                      <CheckCircle2 size={15} color="#29ABE2" />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>

              <p style={{ fontSize: '1.05rem', color: 'var(--color-ink-700)', lineHeight: '1.7', marginTop: '16px', whiteSpace: 'pre-line' }}>
                {service.description}
              </p>
            </div>
          </div>

          {/* Service Relevant Visual Image Banner */}
          <div style={{ marginTop: '48px', borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-card)', border: '1px solid var(--color-steel-200)' }}>
            <img 
              src={getServiceImage(service.slug)} 
              alt={service.name} 
              style={{ width: '100%', height: '380px', objectFit: 'cover', display: 'block' }}
            />
          </div>
        </div>
      </section>

      {/* 3. What's Included */}
      <section className="section section-steel">
        <div className="container">
          <div style={{ maxWidth: '640px', margin: '0 auto 40px', textAlign: 'center' }}>
            <div className="badge badge-navy" style={{ marginBottom: '12px' }}>Inclusions</div>
            <h2>What’s Included in {service.name}</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
            {service.whatsIncluded.map((item, index) => (
              <div key={index} className="card" style={{ padding: '24px', display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                <CheckCircle2 size={22} color="#C9962F" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span style={{ fontSize: '0.95rem', fontWeight: '600', color: 'var(--color-navy-900)' }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Vehicle Options */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto 40px' }}>
            <div className="badge badge-gold" style={{ marginBottom: '12px' }}>Fleet Deployment</div>
            <h2>Available Vehicle Classes</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px' }}>
            {fleetData.map(f => (
              <div key={f.id} className="card" style={{ padding: '24px' }}>
                <Car size={28} color="#C9962F" style={{ marginBottom: '12px' }} />
                <h3 style={{ fontSize: '1.2rem', marginBottom: '8px' }}>{f.name}</h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--color-ink-600)', marginBottom: '12px' }}>{f.capacity}</p>
                <div style={{ fontSize: '0.8rem', color: 'var(--color-accent-600)', fontWeight: '700' }}>{f.models.slice(0, 2).join(', ')}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. How It Works (Numbered Steps) */}
      <section className="section section-steel">
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto 48px' }}>
            <div className="badge badge-navy" style={{ marginBottom: '12px' }}>Process</div>
            <h2>How It Works</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '28px' }}>
            {service.steps.map((step, i) => (
              <div key={i} className="card" style={{ padding: '28px' }}>
                <div style={{ fontSize: '2.5rem', fontWeight: '800', fontFamily: 'var(--font-display)', color: 'var(--color-accent-500)', marginBottom: '8px' }}>
                  {step.number}
                </div>
                <h3 style={{ fontSize: '1.15rem', marginBottom: '8px' }}>{step.title}</h3>
                <p style={{ fontSize: '0.88rem', color: 'var(--color-ink-600)' }}>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Typical Use Cases */}
      <section className="section">
        <div className="container">
          <div style={{ maxWidth: '640px', margin: '0 auto 40px', textAlign: 'center' }}>
            <div className="badge badge-gold" style={{ marginBottom: '12px' }}>Scenarios</div>
            <h2>Typical Use Cases</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
            {service.useCases.map((uc, idx) => (
              <div key={idx} style={{ backgroundColor: 'var(--color-white)', padding: '20px 24px', borderRadius: '12px', border: '1px solid var(--color-steel-200)', fontWeight: '600', color: 'var(--color-navy-900)', display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{ color: '#C9962F', fontWeight: 'bold' }}>•</span> {uc}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Safety Block Component */}


      {/* 8. Locations Served */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto 40px' }}>
            <div className="badge badge-navy" style={{ marginBottom: '12px' }}>Regional Coverage</div>
            <h2>Dispatch Network for {service.shortTitle}</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
            {locationsData.map(loc => (
              <div key={loc.slug} className="card" style={{ padding: '20px', textAlign: 'center' }}>
                <MapPin size={24} color="#C9962F" style={{ margin: '0 auto 8px' }} />
                <h3 style={{ fontSize: '1.1rem' }}>{loc.city}</h3>
                <span style={{ fontSize: '0.8rem', color: 'var(--color-ink-600)' }}>{loc.type.split('&')[0]}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. FAQs */}
      <section className="section section-steel">
        <div className="container" style={{ maxWidth: '800px' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <div className="badge badge-gold" style={{ marginBottom: '12px' }}>Frequently Asked Questions</div>
            <h2>{service.shortTitle} FAQs</h2>
          </div>
          <FAQAccordion faqs={service.faqs} />
        </div>
      </section>

      {/* 10. Related Services & Blogs (IA §5 Cross-linking) */}
      <section className="section">
        <div className="container">
          <h2 style={{ marginBottom: '32px' }}>Related Services & Travel Journal Articles</h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', marginBottom: '40px' }}>
            {relatedServices.map(rs => (
              <div key={rs.slug} className="card" style={{ padding: '20px' }}>
                <div className="badge badge-navy" style={{ marginBottom: '10px', fontSize: '0.7rem' }}>Related Service</div>
                <h3 style={{ fontSize: '1.1rem', marginBottom: '8px' }}>{rs.name}</h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--color-ink-600)', marginBottom: '14px' }}>{rs.tagline}</p>
                <Link href={`/services/${rs.slug}`} style={{ fontSize: '0.85rem', fontWeight: '700', color: 'var(--color-navy-900)' }}>
                  View Service →
                </Link>
              </div>
            ))}
          </div>

          {relatedBlogs.length > 0 && (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
              {relatedBlogs.map(b => (
                <div key={b.slug} className="card" style={{ padding: '20px' }}>
                  <div className="badge badge-gold" style={{ marginBottom: '10px', fontSize: '0.7rem' }}>Travel Article</div>
                  <h3 style={{ fontSize: '1.05rem', marginBottom: '8px' }}>{b.title}</h3>
                  <Link href={`/blog/${b.slug}`} style={{ fontSize: '0.85rem', fontWeight: '700', color: 'var(--color-navy-900)' }}>
                    Read Guide →
                  </Link>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* 11. Closing CTA */}
      <section className="section section-dark" style={{ textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '640px' }}>
          <h2 style={{ color: '#FFF', marginBottom: '16px' }}>Book Your {service.shortTitle} Solution</h2>
          <p style={{ color: '#CBD4DC', marginBottom: '28px' }}>
            Our corporate dispatch team will confirm vehicle availability and send a customized quote.
          </p>
          <button 
            onClick={() => {
              const btn = document.getElementById('header-quote-btn');
              if (btn) btn.click();
            }} 
            className="btn btn-primary"
            style={{ padding: '14px 32px' }}
          >
            Request a Quote Now
          </button>
        </div>
      </section>
    </div>
  );
}
