'use client';

import { useState } from 'react';
import { X, Building2, CheckCircle2 } from 'lucide-react';
import { submitLeadToCRM } from '@/data/crm';

export default function CorporateAccountModal({ isOpen, onClose }) {
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

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    submitLeadToCRM({
      ...formData,
      segment: 'hr_admin',
      stage: 'new',
      submitted_from_page: '/modal-corporate-account'
    });
    setSubmitted(true);
  };

  return (
    <div className="modal-overlay" onClick={onClose} role="button" tabIndex={0} aria-label="Close modal" onKeyDown={(e) => e.key === 'Escape' && onClose()}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div style={{ padding: '24px 28px 16px', borderBottom: '1px solid var(--color-steel-200)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ width: '40px', height: '40px', borderRadius: '8px', backgroundColor: 'rgba(41,171,226,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#1E8FC2' }}>
              <Building2 size={20} />
            </div>
            <div>
              <h3 style={{ fontSize: '1.25rem', color: 'var(--color-navy-900)' }}>Create Corporate Account</h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--color-ink-600)' }}>Dedicated rates, monthly billing, and key account manager</p>
            </div>
          </div>
          <button onClick={onClose} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--color-ink-600)' }}>
            <X size={24} />
          </button>
        </div>

        <div style={{ padding: '24px 28px' }}>
          {submitted ? (
            <div style={{ textAlign: 'center', padding: '20px 0' }}>
              <CheckCircle2 size={54} color="#29ABE2" style={{ margin: '0 auto 16px' }} />
              <h3 style={{ fontSize: '1.4rem', color: 'var(--color-navy-900)', marginBottom: '8px' }}>Corporate Account Desk Contacted</h3>
              <p style={{ color: 'var(--color-ink-600)', fontSize: '0.95rem', marginBottom: '20px' }}>
                Thank you, <strong>{formData.contact_name}</strong> from <strong>{formData.company_name}</strong>. Our enterprise travel director will reach out with customized SLA options and corporate rate cards.
              </p>
              <button onClick={() => { setSubmitted(false); onClose(); }} className="btn btn-navy">
                Close Window
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', marginBottom: '16px' }}>
                <div>
                  <label className="form-label">Company Name *</label>
                  <input type="text" name="company_name" value={formData.company_name} onChange={(e) => setFormData({ ...formData, company_name: e.target.value })} placeholder="e.g. Acme Tech India Solutions" className="form-input" required />
                </div>
                <div>
                  <label className="form-label">Industry Vertical</label>
                  <select name="industry" value={formData.industry} onChange={(e) => setFormData({ ...formData, industry: e.target.value })} className="form-select">
                    <option value="it-ites-gcc">IT / ITES / GCC Tech Parks</option>
                    <option value="pharma-healthcare">Pharma & Healthcare</option>
                    <option value="industrial-manufacturing">Industrial & Manufacturing</option>
                    <option value="bfsi-consulting">BFSI & Consulting</option>
                    <option value="business-parks">Business & Real Estate Parks</option>
                    <option value="hospitality-events">Hospitality & Events</option>
                  </select>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', marginBottom: '16px' }}>
                <div>
                  <label className="form-label">Contact Person Name *</label>
                  <input type="text" name="contact_name" value={formData.contact_name} onChange={(e) => setFormData({ ...formData, contact_name: e.target.value })} placeholder="HR / Travel Manager Name" className="form-input" required />
                </div>
                <div>
                  <label className="form-label">Work Email *</label>
                  <input type="email" name="contact_email" value={formData.contact_email} onChange={(e) => setFormData({ ...formData, contact_email: e.target.value })} placeholder="corporate@company.com" className="form-input" required />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', marginBottom: '16px' }}>
                <div>
                  <label className="form-label">Contact Phone *</label>
                  <input type="tel" name="contact_phone" value={formData.contact_phone} onChange={(e) => setFormData({ ...formData, contact_phone: e.target.value })} placeholder="+91 98765 43210" className="form-input" required />
                </div>
                <div>
                  <label className="form-label">Employee Strength Band</label>
                  <select name="employee_band" value={formData.employee_band} onChange={(e) => setFormData({ ...formData, employee_band: e.target.value })} className="form-select">
                    <option value="0-50">1 to 50 employees</option>
                    <option value="51-250">51 to 250 employees</option>
                    <option value="251-500">251 to 500 employees</option>
                    <option value="500+">500+ enterprise strength</option>
                  </select>
                </div>
              </div>

              <div className="form-group" style={{ marginBottom: '20px' }}>
                <label className="form-label">Mobility Requirements Brief</label>
                <textarea name="requirements" value={formData.requirements} onChange={(e) => setFormData({ ...formData, requirements: e.target.value })} rows={3} placeholder="e.g. Daily shift shuttles for 80 employees in Bellandur OR executive spot hires." className="form-textarea" />
              </div>

              <div style={{ marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <input type="checkbox" id="corp_consent" checked={formData.consent_marketing} onChange={(e) => setFormData({ ...formData, consent_marketing: e.target.checked })} style={{ width: '18px', height: '18px', accentColor: '#29ABE2' }} />
                <label htmlFor="corp_consent" style={{ fontSize: '0.8rem', color: 'var(--color-ink-600)' }}>
                  I consent to Suhalaya corporate desk contacting me with rate cards and customized contract proposals.
                </label>
              </div>

              <div style={{ display: 'flex', gap: '12px' }}>
                <button type="button" onClick={onClose} className="btn btn-outline" style={{ flex: 1 }}>
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary" style={{ flex: 2 }}>
                  Submit Corporate Account Request
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
