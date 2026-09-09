'use client';

import { useState } from 'react';
import { submitLeadToCRM } from '@/data/crm';
import { CheckCircle2, ArrowRight, Car, MapPin, Calendar, User, Phone, Mail, Building, Sparkles } from 'lucide-react';

export default function BookingWidget({ sourcePage = '/', onSubmitted }) {
  const todayDate = new Date().toLocaleDateString('en-CA');
  
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    service_interest: 'corporate-mobility',
    city: 'Bengaluru',
    pickup_date: todayDate,
    pickup_time: '09:00',
    vehicle_preference: 'Executive SUV',
    contact_name: '',
    contact_phone: '',
    contact_email: '',
    company_name: '',
    consent_marketing: true
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (name === 'pickup_date' && value && value < todayDate) {
      setFormData(prev => ({ ...prev, pickup_date: todayDate }));
      return;
    }
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    submitLeadToCRM({
      ...formData,
      submitted_from_page: sourcePage,
      stage: 'quote'
    });
    setSubmitted(true);
    if (onSubmitted) onSubmitted();
  };

  if (submitted) {
    return (
      <div style={{ backgroundColor: 'rgba(11, 25, 44, 0.95)', backdropFilter: 'blur(20px)', borderRadius: 'var(--radius-xl)', border: '1px solid rgba(0, 180, 216, 0.35)', padding: '40px', color: '#FFF', textAlign: 'center', boxShadow: '0 25px 60px rgba(0,0,0,0.5)' }}>
        <CheckCircle2 size={56} color="#00B4D8" style={{ margin: '0 auto 16px', filter: 'drop-shadow(0 4px 12px rgba(0, 180, 216, 0.4))' }} />
        <h3 style={{ color: '#FFF', fontSize: '1.6rem', marginBottom: '10px' }}>Quote Request Submitted!</h3>
        <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.98rem', marginBottom: '24px', lineHeight: '1.6' }}>
          Thank you, <strong>{formData.contact_name}</strong>. Our corporate mobility manager will review your requirement for {formData.city} and contact you at <strong>{formData.contact_phone}</strong> within 15 minutes.
        </p>
        <div style={{ padding: '14px', backgroundColor: 'rgba(255,255,255,0.06)', borderRadius: 'var(--radius-md)', fontSize: '0.85rem', color: 'rgba(255,255,255,0.7)', border: '1px solid rgba(255,255,255,0.1)' }}>
          Reference ID: #{Math.floor(100000 + Math.random() * 900000)} | CRM Priority Desk Registered
        </div>
        <button 
          onClick={() => { setSubmitted(false); setStep(1); }} 
          className="btn btn-outline-white" 
          style={{ marginTop: '24px', fontSize: '0.88rem' }}
        >
          Submit Another Enquiry
        </button>
      </div>
    );
  }

  return (
    <div style={{ 
      backgroundColor: 'rgba(11, 25, 44, 0.92)', 
      backdropFilter: 'blur(20px)',
      WebkitBackdropFilter: 'blur(20px)',
      borderRadius: 'var(--radius-xl)', 
      border: '1px solid rgba(255, 255, 255, 0.15)', 
      padding: '32px', 
      color: '#FFF', 
      boxShadow: '0 25px 60px rgba(0,0,0,0.5), 0 0 30px rgba(0,180,216,0.12)' 
    }}>
      {/* Header */}
      <div style={{ marginBottom: '20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div>
          <span style={{ fontSize: '0.78rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-sky-400)' }}>Quick Enquiry</span>
          <h3 style={{ color: '#FFF', fontSize: '1.3rem', marginTop: '2px' }}>Request a Custom Quote</h3>
        </div>
        <div style={{ padding: '6px 12px', borderRadius: 'var(--radius-pill)', backgroundColor: 'rgba(0,180,216,0.15)', border: '1px solid rgba(0,180,216,0.3)', color: '#48CAE4', fontSize: '0.75rem', fontWeight: '700', display: 'flex', alignItems: 'center', gap: '4px' }}>
          <Sparkles size={12} /> 15 Min SLA
        </div>
      </div>

      {/* Widget Service Category Tabs Header */}
      <div style={{ display: 'flex', backgroundColor: 'rgba(255,255,255,0.06)', borderRadius: 'var(--radius-pill)', padding: '4px', marginBottom: '24px', gap: '4px' }}>
        <button 
          type="button"
          onClick={() => setFormData(p => ({ ...p, service_interest: 'corporate-mobility' }))}
          style={{ flex: 1, padding: '9px 12px', borderRadius: 'var(--radius-pill)', border: 'none', background: formData.service_interest === 'corporate-mobility' ? 'var(--color-sky-500)' : 'transparent', color: formData.service_interest === 'corporate-mobility' ? '#FFF' : 'rgba(255,255,255,0.7)', fontSize: '0.82rem', fontWeight: '700', cursor: 'pointer', transition: 'all 0.2s ease' }}
        >
          Corporate
        </button>
        <button 
          type="button"
          onClick={() => setFormData(p => ({ ...p, service_interest: 'airport-transfers' }))}
          style={{ flex: 1, padding: '9px 12px', borderRadius: 'var(--radius-pill)', border: 'none', background: formData.service_interest === 'airport-transfers' ? 'var(--color-sky-500)' : 'transparent', color: formData.service_interest === 'airport-transfers' ? '#FFF' : 'rgba(255,255,255,0.7)', fontSize: '0.82rem', fontWeight: '700', cursor: 'pointer', transition: 'all 0.2s ease' }}
        >
          Airport
        </button>
        <button 
          type="button"
          onClick={() => setFormData(p => ({ ...p, service_interest: 'south-india-road-journeys' }))}
          style={{ flex: 1, padding: '9px 12px', borderRadius: 'var(--radius-pill)', border: 'none', background: formData.service_interest === 'south-india-road-journeys' || formData.service_interest === 'outstation-chauffeur-south-india' ? 'var(--color-sky-500)' : 'transparent', color: formData.service_interest === 'south-india-road-journeys' || formData.service_interest === 'outstation-chauffeur-south-india' ? '#FFF' : 'rgba(255,255,255,0.7)', fontSize: '0.82rem', fontWeight: '700', cursor: 'pointer', transition: 'all 0.2s ease' }}
        >
          Outstation
        </button>
      </div>

      <form onSubmit={handleSubmit}>
        {step === 1 ? (
          <div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', marginBottom: '16px' }}>
              <div>
                <label className="form-label" style={{ color: 'rgba(255,255,255,0.9)' }}>Service Category</label>
                <select name="service_interest" value={formData.service_interest} onChange={handleChange} className="form-select" style={{ backgroundColor: 'rgba(255,255,255,0.08)', color: '#FFF', borderColor: 'rgba(255,255,255,0.2)' }}>
                  <option value="corporate-mobility" style={{ background: '#0B192C' }}>Corporate Mobility</option>
                  <option value="employee-transportation" style={{ background: '#0B192C' }}>Employee Transportation</option>
                  <option value="airport-transfers" style={{ background: '#0B192C' }}>Airport Transfer</option>
                  <option value="chauffeur-on-call" style={{ background: '#0B192C' }}>Chauffeur on Call</option>
                  <option value="outstation-chauffeur-south-india" style={{ background: '#0B192C' }}>Outstation South India</option>
                  <option value="weddings-family-events" style={{ background: '#0B192C' }}>Weddings & Events</option>
                  <option value="executive-vip-travel" style={{ background: '#0B192C' }}>Executive VIP Travel</option>
                </select>
              </div>

              <div>
                <label className="form-label" style={{ color: 'rgba(255,255,255,0.9)' }}>City / Hub</label>
                <select name="city" value={formData.city} onChange={handleChange} className="form-select" style={{ backgroundColor: 'rgba(255,255,255,0.08)', color: '#FFF', borderColor: 'rgba(255,255,255,0.2)' }}>
                  <option value="Bengaluru" style={{ background: '#0B192C' }}>Bengaluru (Bangalore)</option>
                  <option value="Hyderabad" style={{ background: '#0B192C' }}>Hyderabad</option>
                  <option value="Chennai" style={{ background: '#0B192C' }}>Chennai</option>
                  <option value="Mysuru" style={{ background: '#0B192C' }}>Mysuru</option>
                  <option value="Kochi" style={{ background: '#0B192C' }}>Kochi</option>
                  <option value="Coimbatore" style={{ background: '#0B192C' }}>Coimbatore</option>
                </select>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '16px', marginBottom: '24px' }}>
              <div>
                <label className="form-label" style={{ color: 'rgba(255,255,255,0.9)' }}>Pickup Date *</label>
                <input 
                  type="date" 
                  name="pickup_date" 
                  value={formData.pickup_date} 
                  min={todayDate} 
                  onChange={handleChange} 
                  className="form-input" 
                  style={{ backgroundColor: 'rgba(255,255,255,0.08)', color: '#FFF', borderColor: 'rgba(255,255,255,0.2)' }} 
                  required 
                />
              </div>

              <div>
                <label className="form-label" style={{ color: 'rgba(255,255,255,0.9)' }}>Pickup Time *</label>
                <input 
                  type="time" 
                  name="pickup_time" 
                  value={formData.pickup_time} 
                  onChange={handleChange} 
                  className="form-input" 
                  style={{ backgroundColor: 'rgba(255,255,255,0.08)', color: '#FFF', borderColor: 'rgba(255,255,255,0.2)' }} 
                  required 
                />
              </div>

              <div>
                <label className="form-label" style={{ color: 'rgba(255,255,255,0.9)' }}>Vehicle Preference</label>
                <select name="vehicle_preference" value={formData.vehicle_preference} onChange={handleChange} className="form-select" style={{ backgroundColor: 'rgba(255,255,255,0.08)', color: '#FFF', borderColor: 'rgba(255,255,255,0.2)' }}>
                  <option value="Executive Sedan" style={{ background: '#0B192C' }}>Executive Sedan (3 Passengers + Driver)</option>
                  <option value="Executive SUV" style={{ background: '#0B192C' }}>Executive SUV / MPV (6 Passengers + Driver)</option>
                  <option value="Tempo Traveller" style={{ background: '#0B192C' }}>Van / Tempo Traveller (9-15 Passengers + Driver)</option>
                  <option value="Staff Coach" style={{ background: '#0B192C' }}>Staff Bus / Coach (21-48 Passengers + Driver & Crew)</option>
                  <option value="Luxury Flagship" style={{ background: '#0B192C' }}>Luxury Flagship (3 Passengers + Driver)</option>
                </select>
              </div>
            </div>

            <button 
              type="button" 
              onClick={() => setStep(2)} 
              className="btn btn-primary" 
              style={{ width: '100%', padding: '14px', borderRadius: 'var(--radius-pill)' }}
            >
              Continue to Contact Details <ArrowRight size={16} />
            </button>
          </div>
        ) : (
          <div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', marginBottom: '16px' }}>
              <div>
                <label className="form-label" style={{ color: 'rgba(255,255,255,0.9)' }}>Full Name *</label>
                <input type="text" name="contact_name" value={formData.contact_name} onChange={handleChange} placeholder="e.g. Ramesh Kumar" className="form-input" style={{ backgroundColor: 'rgba(255,255,255,0.08)', color: '#FFF', borderColor: 'rgba(255,255,255,0.2)' }} required />
              </div>

              <div>
                <label className="form-label" style={{ color: 'rgba(255,255,255,0.9)' }}>Phone Number *</label>
                <input type="tel" name="contact_phone" value={formData.contact_phone} onChange={handleChange} placeholder="+91 98765 43210" className="form-input" style={{ backgroundColor: 'rgba(255,255,255,0.08)', color: '#FFF', borderColor: 'rgba(255,255,255,0.2)' }} required />
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', marginBottom: '16px' }}>
              <div>
                <label className="form-label" style={{ color: 'rgba(255,255,255,0.9)' }}>Work / Personal Email *</label>
                <input type="email" name="contact_email" value={formData.contact_email} onChange={handleChange} placeholder="name@company.com" className="form-input" style={{ backgroundColor: 'rgba(255,255,255,0.08)', color: '#FFF', borderColor: 'rgba(255,255,255,0.2)' }} required />
              </div>

              <div>
                <label className="form-label" style={{ color: 'rgba(255,255,255,0.9)' }}>Company Name (Optional)</label>
                <input type="text" name="company_name" value={formData.company_name} onChange={handleChange} placeholder="e.g. Infosys / Self" className="form-input" style={{ backgroundColor: 'rgba(255,255,255,0.08)', color: '#FFF', borderColor: 'rgba(255,255,255,0.2)' }} />
              </div>
            </div>

            <div style={{ marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <input type="checkbox" id="consent_marketing" name="consent_marketing" checked={formData.consent_marketing} onChange={handleChange} style={{ width: '18px', height: '18px', accentColor: '#00B4D8' }} />
              <label htmlFor="consent_marketing" style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.85)' }}>
                I agree to receive quote details and travel updates via WhatsApp / Email.
              </label>
            </div>

            <div style={{ display: 'flex', gap: '12px' }}>
              <button 
                type="button" 
                onClick={() => setStep(1)} 
                className="btn btn-outline-white" 
                style={{ flex: 1, padding: '14px' }}
              >
                Back
              </button>
              <button 
                type="submit" 
                className="btn btn-primary" 
                style={{ flex: 2, padding: '14px' }}
              >
                Submit & Get Quote
              </button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
}
