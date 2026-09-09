/**
 * Suhalaya CRM Lead Processing Service
 * Derived strictly from 07-data-model-crm.md
 */

export function submitLeadToCRM(leadData) {
  const leadRecord = {
    id: `lead_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
    source: leadData.source || 'website',
    stage: leadData.stage || 'new',
    submitted_from_page: leadData.submitted_from_page || (typeof window !== 'undefined' ? window.location.pathname : '/'),
    service_interest: leadData.service_interest || 'corporate-mobility',
    package_interest: leadData.package_interest || null,
    segment: leadData.segment || (leadData.company_name ? 'hr_admin' : 'executive'),
    city: leadData.city || 'Bengaluru',
    contact_name: leadData.contact_name || '',
    contact_phone: leadData.contact_phone || '',
    contact_email: leadData.contact_email || '',
    company_name: leadData.company_name || null,
    vehicle_preference: leadData.vehicle_preference || 'Executive Sedan',
    pickup_date: leadData.pickup_date || null,
    notes: leadData.notes || '',
    consent_marketing: Boolean(leadData.consent_marketing),
    created_at: new Date().toISOString()
  };

  // In client environment, store lead in localStorage array for local demonstration & audit trail
  if (typeof window !== 'undefined') {
    try {
      const existingLeads = JSON.parse(localStorage.getItem('suhalaya_crm_leads') || '[]');
      existingLeads.unshift(leadRecord);
      localStorage.setItem('suhalaya_crm_leads', JSON.stringify(existingLeads));
      console.log('CRM Lead successfully registered:', leadRecord);
    } catch (e) {
      console.error('Error saving CRM lead to local storage:', e);
    }
  }

  return { success: true, lead: leadRecord };
}
