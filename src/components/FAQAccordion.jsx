'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQAccordion({ faqs = [] }) {
  const [openIndex, setOpenIndex] = useState(0);

  if (!faqs.length) return null;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        return (
          <div 
            key={index} 
            style={{ backgroundColor: 'var(--white)', borderRadius: '12px', border: '1px solid var(--color-steel-200)', overflow: 'hidden', transition: 'all 0.2s' }}
          >
            <button 
              onClick={() => setOpenIndex(isOpen ? -1 : index)} 
              style={{ width: '100%', padding: '20px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', border: 'none', background: 'none', textAlign: 'left', cursor: 'pointer', fontFamily: 'var(--font-body)', fontWeight: '600', fontSize: '1rem', color: 'var(--jet-black)' }}
            >
              <span>{faq.q}</span>
              <ChevronDown size={18} style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 0.2s', color: 'var(--teal)' }} />
            </button>
            {isOpen && (
              <div style={{ padding: '0 24px 20px', color: 'var(--color-ink-600)', fontSize: '0.95rem', lineHeight: '1.6', borderTop: '1px solid var(--color-steel-100)', paddingTop: '16px' }}>
                {faq.a}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
