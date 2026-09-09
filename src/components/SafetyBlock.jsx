import { ShieldCheck, Lock, UserCheck, Eye } from 'lucide-react';

export default function SafetyBlock() {
  return (
    <section className="section section-steel" id="safety-section">
      <div className="container">
        <div style={{ maxWidth: '720px', margin: '0 auto 56px', textAlign: 'center' }}>
          <span className="eyebrow">Exploring the world of comfort & safety</span>
          <div className="badge badge-sky" style={{ marginBottom: '16px' }}>
            <ShieldCheck size={14} color="#1E8FC2" /> Trust & Safety Protocol
          </div>
          <h2 style={{ marginBottom: '16px' }}>
            Women-Friendly Corporate Mobility: Safer Travel for Every Shift
          </h2>
          <p style={{ fontSize: '1.05rem', color: 'var(--color-ink-600)' }}>
            We implement strict procedural protocols for employee safety, late-night drops, and background-vetted chauffeurs across all client operations.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px' }}>
          
          <div className="card" style={{ borderLeft: '4px solid var(--color-navy-900)' }}>
            <div style={{ width: '48px', height: '48px', borderRadius: '12px', backgroundColor: 'rgba(15,42,82,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-navy-900)', marginBottom: '20px' }}>
              <UserCheck size={24} />
            </div>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '10px' }}>Mandatory Police Background Check</h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--color-ink-600)' }}>
              100% of Suhalaya chauffeurs undergo criminal record verification, permanent address checks, and formal defensive driving certification before driving a client.
            </p>
          </div>

          <div className="card" style={{ borderLeft: '4px solid var(--color-sky-500)' }}>
            <div style={{ width: '48px', height: '48px', borderRadius: '12px', backgroundColor: 'rgba(41,171,226,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#1E8FC2', marginBottom: '20px' }}>
              <Lock size={24} />
            </div>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '10px' }}>Night-Shift Drop Compliance</h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--color-ink-600)' }}>
              Between 8 PM and 6 AM, female employees are never dropped last on a shared route. Security escorts accompany night drop vehicles per corporate policy.
            </p>
          </div>

          <div className="card" style={{ borderLeft: '4px solid var(--color-navy-700)' }}>
            <div style={{ width: '48px', height: '48px', borderRadius: '12px', backgroundColor: 'rgba(27,58,102,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-navy-700)', marginBottom: '20px' }}>
              <Eye size={24} />
            </div>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '10px' }}>Live Central Telematics Control</h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--color-ink-600)' }}>
              Real-time GPS tracking monitors active trips. Speed governors enforce a max speed of 60–80 km/h with instant alerts for route deviations.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
