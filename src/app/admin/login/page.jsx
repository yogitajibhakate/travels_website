'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Lock, User, ArrowRight } from 'lucide-react';

export default function AdminLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    // Simulate network request
    setTimeout(() => {
      // Hardcoded admin check
      if (username === 'admin' && password === 'admin123') {
        router.push('/admin/dashboard');
      } else {
        setError('Invalid admin credentials. Access denied.');
        setIsLoading(false);
      }
    }, 800);
  };

  return (
    <div style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f8f9fa', padding: '40px 20px' }}>
      <div style={{ width: '100%', maxWidth: '420px', backgroundColor: '#fff', borderRadius: '16px', boxShadow: '0 10px 40px rgba(0,0,0,0.08)', overflow: 'hidden' }}>
        
        {/* Header */}
        <div style={{ backgroundColor: 'var(--color-navy-900)', padding: '32px 24px', textAlign: 'center' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '64px', height: '64px', borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.1)', marginBottom: '16px' }}>
            <Lock size={32} color="#29ABE2" />
          </div>
          <h1 style={{ color: '#fff', fontSize: '1.5rem', margin: 0 }}>Admin Access</h1>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem', marginTop: '8px', marginBottom: 0 }}>
            Restricted area. Authorized personnel only.
          </p>
        </div>

        {/* Form */}
        <div style={{ padding: '32px 24px' }}>
          {error && (
            <div style={{ backgroundColor: '#fee2e2', color: '#ef4444', padding: '12px 16px', borderRadius: '8px', fontSize: '0.9rem', marginBottom: '24px', border: '1px solid #fecaca' }}>
              {error}
            </div>
          )}

          <form onSubmit={handleLogin}>
            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: '600', color: 'var(--color-navy-900)', marginBottom: '8px' }}>
                Admin Username
              </label>
              <div style={{ position: 'relative' }}>
                <div style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: 'var(--color-steel-400)' }}>
                  <User size={18} />
                </div>
                <input 
                  type="text" 
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Enter username"
                  style={{ 
                    width: '100%', 
                    padding: '14px 16px 14px 44px', 
                    borderRadius: '8px', 
                    border: '1px solid var(--color-steel-200)',
                    fontSize: '1rem',
                    outline: 'none',
                    transition: 'border-color 0.2s'
                  }}
                  required
                />
              </div>
            </div>

            <div style={{ marginBottom: '32px' }}>
              <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: '600', color: 'var(--color-navy-900)', marginBottom: '8px' }}>
                Password
              </label>
              <div style={{ position: 'relative' }}>
                <div style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: 'var(--color-steel-400)' }}>
                  <Lock size={18} />
                </div>
                <input 
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter password"
                  style={{ 
                    width: '100%', 
                    padding: '14px 16px 14px 44px', 
                    borderRadius: '8px', 
                    border: '1px solid var(--color-steel-200)',
                    fontSize: '1rem',
                    outline: 'none',
                    transition: 'border-color 0.2s'
                  }}
                  required
                />
              </div>
            </div>

            <button 
              type="submit" 
              disabled={isLoading}
              style={{ 
                width: '100%', 
                padding: '16px', 
                backgroundColor: '#29ABE2', 
                color: '#fff', 
                border: 'none', 
                borderRadius: '8px', 
                fontSize: '1rem', 
                fontWeight: '600',
                cursor: isLoading ? 'not-allowed' : 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                transition: 'background-color 0.2s',
                opacity: isLoading ? 0.8 : 1
              }}
            >
              {isLoading ? 'Authenticating...' : (
                <>
                  Secure Login <ArrowRight size={18} />
                </>
              )}
            </button>
          </form>
          
          <div style={{ textAlign: 'center', marginTop: '24px', fontSize: '0.85rem', color: 'var(--color-steel-500)' }}>
            For demo purposes, use: <br/>
            Username: <strong>admin</strong> | Password: <strong>admin123</strong>
          </div>
        </div>
      </div>
    </div>
  );
}
