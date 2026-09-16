import BookingWidget from '@/components/BookingWidget';
import SafetyBlock from '@/components/SafetyBlock';
import { ShieldCheck, Clock, Award, Phone } from 'lucide-react';

export const metadata = {
  title: 'Book a Journey — Instant Quote | Suhalaya Travels',
  description: 'Book chauffeur-driven cars, airport transfers, corporate mobility, and luxury coaches with Suhalaya Travels. 15-minute dispatch response SLA.',
  alternates: { canonical: 'https://suhalayatravels.com/booking' },
};

export default function BookingPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="section section-dark" style={{ paddingTop: '72px', paddingBottom: '60px' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '760px' }}>
          <div className="badge badge-sky" style={{ marginBottom: '14px', color: '#4DC0EC', backgroundColor: 'rgba(41,171,226,0.18)' }}>
            Instant Reservation & Quotation
          </div>
          <h1 style={{ color: '#FFF', marginBottom: '14px', fontSize: '2.5rem' }}>
            Book Your Journey with Suhalaya
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1.05rem', lineHeight: '1.6', margin: '0 auto 20px' }}>
            Fill in your trip details below. Our 24/7 corporate dispatch desk will confirm your quotation within 15 minutes.
          </p>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(255,255,255,0.1)', padding: '8px 18px', borderRadius: '30px', color: '#FFF', fontSize: '0.9rem' }}>
            <Phone size={15} color="#29ABE2" />
            <span>Need immediate dispatch? Call 24/7 Helpline: <strong>+91 99005 56611</strong></span>
          </div>
        </div>
      </section>

      {/* Booking Form Section */}
      <section className="section" style={{ backgroundColor: '#F8FAFC', paddingTop: '40px', paddingBottom: '60px' }}>
        <div className="container" style={{ maxWidth: '850px' }}>
          <div style={{ backgroundColor: '#FFF', borderRadius: '16px', boxShadow: '0 10px 30px rgba(0,0,0,0.06)', border: '1px solid #E2E8F0', padding: '32px 24px' }}>
            <BookingWidget />
          </div>
        </div>
      </section>

      {/* Trust & Safety Protocol */}
      <SafetyBlock />
    </div>
  );
}
