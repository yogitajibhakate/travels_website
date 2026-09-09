'use client';

import { Phone, MessageSquare, Calendar } from 'lucide-react';

export default function StickyMobileBar({ onOpenQuoteModal }) {
  return (
    <div className="mobile-sticky-bar" id="mobile-sticky-bar">
      <a 
        href="tel:+918049007777" 
        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', color: '#FFF', fontSize: '0.75rem', gap: '2px' }}
      >
        <Phone size={18} color="#29ABE2" />
        <span>Call Desk</span>
      </a>

      <a 
        href="https://wa.me/918049007777" 
        target="_blank" 
        rel="noopener noreferrer" 
        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', color: '#25D366', fontSize: '0.75rem', gap: '2px' }}
      >
        <MessageSquare size={18} color="#25D366" />
        <span>WhatsApp</span>
      </a>

      <button 
        onClick={onOpenQuoteModal} 
        style={{ background: '#29ABE2', color: '#FFF', border: 'none', borderRadius: '6px', padding: '8px 14px', fontWeight: '700', fontSize: '0.8rem', display: 'flex', alignItems: 'center', gap: '6px', boxShadow: '0 2px 10px rgba(41,171,226,0.4)' }}
      >
        <Calendar size={14} /> Request Quote
      </button>
    </div>
  );
}
