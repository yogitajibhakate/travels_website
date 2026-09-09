'use client';

import { useState } from 'react';
import { Phone, MessageCircle, FileText, ChevronUp, X } from 'lucide-react';

export default function FloatingActions({ onOpenQuoteModal }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div 
      style={{
        position: 'fixed',
        bottom: '24px',
        right: '24px',
        zIndex: 1500,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        gap: '12px'
      }}
      id="floating-actions-container"
    >
      {/* Expanded Quick Options */}
      {expanded && (
        <div 
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
            animation: 'fadeIn 0.25s ease',
            backgroundColor: 'rgba(11, 25, 44, 0.95)',
            backdropFilter: 'blur(16px)',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            borderRadius: '16px',
            padding: '14px',
            boxShadow: '0 16px 40px rgba(0,0,0,0.4)'
          }}
        >
          {/* WhatsApp Direct Chat */}
          <a
            href="https://wa.me/918049007777?text=Hello%20Suhalaya%20Travels,%20I%20would%20like%20to%20enquire%20about%20chauffeur%20mobility%20services."
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              color: '#FFF',
              backgroundColor: '#25D366',
              padding: '10px 16px',
              borderRadius: '10px',
              fontSize: '0.88rem',
              fontWeight: '700',
              textDecoration: 'none'
            }}
          >
            <MessageCircle size={18} fill="#FFF" color="#25D366" />
            WhatsApp Booking Desk
          </a>

          {/* 24/7 Phone Call */}
          <a
            href="tel:+918049007777"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              color: '#FFF',
              backgroundColor: 'rgba(255,255,255,0.1)',
              padding: '10px 16px',
              borderRadius: '10px',
              fontSize: '0.88rem',
              fontWeight: '700',
              textDecoration: 'none',
              border: '1px solid rgba(255,255,255,0.15)'
            }}
          >
            <Phone size={18} color="#00B4D8" />
            Call 24/7 Hotline
          </a>

          {/* Instant Quote Modal */}
          <button
            onClick={() => {
              setExpanded(false);
              if (onOpenQuoteModal) onOpenQuoteModal();
              else {
                const btn = document.getElementById('header-quote-btn');
                if (btn) btn.click();
              }
            }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              color: '#FFF',
              background: 'linear-gradient(135deg, #00B4D8 0%, #0077B6 100%)',
              padding: '10px 16px',
              borderRadius: '10px',
              fontSize: '0.88rem',
              fontWeight: '700',
              border: 'none',
              cursor: 'pointer'
            }}
          >
            <FileText size={18} color="#FFF" />
            Request Instant Quote
          </button>
        </div>
      )}

      {/* Main Trigger Button */}
      <button
        onClick={() => setExpanded(!expanded)}
        style={{
          width: '56px',
          height: '56px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #00B4D8 0%, #0B192C 100%)',
          color: '#FFF',
          border: '2px solid rgba(255,255,255,0.3)',
          boxShadow: '0 8px 24px rgba(0, 180, 216, 0.45)',
          display: 'flex',
          alignItems: 'center',
          justify: 'center',
          cursor: 'pointer',
          transition: 'transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)'
        }}
        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.08)'}
        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
        aria-label="Toggle Quick Contact Menu"
      >
        {expanded ? <X size={26} /> : <MessageCircle size={26} />}
      </button>
    </div>
  );
}
