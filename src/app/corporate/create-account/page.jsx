'use client';

import { useState } from 'react';
import { submitLeadToCRM } from '@/data/crm';
import { Building2, CheckCircle2, ShieldCheck, Phone, ArrowRight } from 'lucide-react';

export default function CreateCorporateAccountPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    company_name: '',
    contact_name: '',
    contact_email: '',
    contact_phone: '',
    industry: 'it-ites-gcc',
    employee_band: '51-250',
    city: 'Bengaluru',
    requirements: '',
    consent_marketing: true
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    submitLeadToCRM({
      ...formData,
      segment: 'hr_admin',
      stage: 'new',
      submitted_from_page: '/corporate/create-account'
    });
    setSubmitted(true);
  };

  return (
    <div>
      <section className="section section-dark" style={{ paddingTop: '80px', paddingBottom: '60px' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '720px' }}>
          <div className="badge badge-gold" style={{ marginBottom: '16px' }}>Corporate Account Setup</div>
          <h1 style={{ color: '#FFF', marginBottom: '16px' }}>
            Create a Suhalaya Corporate Account
          </h1>
          <p style={{ color: '#CBD4DC', fontSize: '1.1rem' }}>
            Unlock monthly billing credit terms, preferential corporate rate cards, and a dedicated key account manager for your enterprise.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: '800px' }}>
          {submitted ? (
            <div className="card" style={{ textAlign: 'center', padding: '48px' }}>
              <CheckCircle2 size={64} color="#C9962F" style={{ margin: '0 auto 20px' }} />
              <h2 style={{ marginBottom: '12px' }}>Corporate Account Request Received</h2>
              <p style={{ color: 'var(--color-ink-600)', fontSize: '1.05rem', marginBottom: '24px' }}>
                Thank you, <strong>{formData.contact_name}</strong>. Our enterprise travel desk has logged your account creation request for <strong>{formData.company_name}</strong> and will email you the corporate agreement and rate card within 2 business hours.
              </p>
              <div style={{ backgroundColor: 'var(--color-steel-100)', padding: '16px', borderRadius: '10px', fontSize: '0.9rem', color: 'var(--color-navy-900)' }}>
                Need urgent setup? Call Corporate Helpdesk: <strong>+91 80 4900 7777</strong>
              </div>
            </div>
          ) : (
            <div className="card" style={{ padding: '40px' }}>
              <h2 style={{ marginBottom: '24px' }}>Enterprise Registration Form</h2>
              
              <form onSubmit={handleSubmit}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px', marginBottom: '20px' }}>
                  <div>
                    <label className="form-label">Company Legal Name *</label>
                    <input type="text" value={formData.company_name} onChange={(e) => setFormData({ ...formData, company_name: e.target.value })} placeholder="e.g. Infosys Technologies Ltd" className="form-input" required />
                  </div>
                  <div>
                    <label className="form-label">Industry Sector</label>
                    <select value={formData.industry} onChange={(e) => setFormData({ ...formData, industry: e.target.value })} className="form-select">
                      <option value="it-ites-gcc">IT / ITES / GCC Tech Park</option>
                      <option value="pharma-healthcare">Pharma & Healthcare</option>
                      <option value="industrial-manufacturing">Industrial & Manufacturing</option>
                      <option value="bfsi-consulting">BFSI & Consulting</option>
                      <option value="business-parks">Business Parks / Facilities</option>
                      <option value="hospitality-events">Hospitality & Events</option>
                    </select>
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px', marginBottom: '20px' }}>
                  <div>
                    <label className="form-label">Key Contact Person *</label>
                    <input type="text" value={formData.contact_name} onChange={(e) => setFormData({ ...formData, contact_name: e.target.value })} placeholder="HR Director / Admin Head" className="form-input" required />
                  </div>
                  <div>
                    <label className="form-label">Official Work Email *</label>
                    <input type="email" value={formData.contact_email} onChange={(e) => setFormData({ ...formData, contact_email: e.target.value })} placeholder="name@company.com" className="form-input" required />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px', marginBottom: '20px' }}>
                  <div>
                    <label className="form-label">Direct Contact Phone *</label>
                    <input type="tel" value={formData.contact_phone} onChange={(e) => setFormData({ ...formData, contact_phone: e.target.value })} placeholder="+91 98765 43210" className="form-input" required />
                  </div>
                  <div>
                    <label className="form-label">Employee Strength Band</label>
                    <select value={formData.employee_band} onChange={(e) => setFormData({ ...formData, employee_band: e.target.value })} className="form-select">
                      <option value="0-50">1 to 50 employees</option>
                      <option value="51-250">51 to 250 employees</option>
                      <option value="251-500">251 to 500 employees</option>
                      <option value="500+">500+ enterprise employees</option>
                    </select>
                  </div>
                </div>

                <div className="form-group" style={{ marginBottom: '20px' }}>
                  <label className="form-label">Primary Headquarter City</label>
                  <select value={formData.city} onChange={(e) => setFormData({ ...formData, city: e.target.value })} className="form-select">
                    <option value="Bengaluru">Bengaluru</option>
                    <option value="Hyderabad">Hyderabad</option>
                    <option value="Chennai">Chennai</option>
                    <option value="Mysuru">Mysuru</option>
                    <option value="Kochi">Kochi</option>
                    <option value="Coimbatore">Coimbatore</option>
                  </select>
                </div>

                <div className="form-group" style={{ marginBottom: '24px' }}>
                  <label className="form-label">Specific Mobility Requirements (Optional)</label>
                  <textarea value={formData.requirements} onChange={(e) => setFormData({ ...formData, requirements: e.target.value })} rows={4} placeholder="Describe shift patterns, fleet mix needs, or monthly budget targets..." className="form-textarea" />
                </div>

                <div style={{ marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <input type="checkbox" id="page_corp_consent" checked={formData.consent_marketing} onChange={(e) => setFormData({ ...formData, consent_marketing: e.target.checked })} style={{ width: '18px', height: '18px', accentColor: '#C9962F' }} />
                  <label htmlFor="page_corp_consent" style={{ fontSize: '0.85rem', color: 'var(--color-ink-700)' }}>
                    I confirm I am authorized to submit this corporate enquiry on behalf of the company.
                  </label>
                </div>

                <button type="submit" className="btn btn-navy" style={{ width: '100%', padding: '16px' }}>
                  Submit Corporate Account Registration <ArrowRight size={16} />
                </button>
              </form>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
