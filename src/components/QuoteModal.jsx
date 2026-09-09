'use client';

import { X } from 'lucide-react';
import BookingWidget from './BookingWidget';

export default function QuoteModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div style={{ padding: '24px 28px 16px', borderBottom: '1px solid var(--color-steel-200)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div>
            <h3 style={{ fontSize: '1.25rem', color: 'var(--color-navy-900)' }}>Request a Quote</h3>
            <p style={{ fontSize: '0.85rem', color: 'var(--color-ink-600)' }}>Quick enquiry for corporate mobility, outstation, or event travel</p>
          </div>
          <button 
            onClick={onClose} 
            style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--color-ink-600)', padding: '4px' }}
          >
            <X size={24} />
          </button>
        </div>
        <div style={{ padding: '20px' }}>
          <BookingWidget sourcePage="/modal-quote" onSubmitted={() => setTimeout(onClose, 3000)} />
        </div>
      </div>
    </div>
  );
}
