'use client';

import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import QuoteModal from '@/components/QuoteModal';
import CorporateAccountModal from '@/components/CorporateAccountModal';
import StickyMobileBar from '@/components/StickyMobileBar';
import Chatbot from '@/components/Chatbot';

import { Headset } from 'lucide-react';

export default function ClientLayoutProvider({ children }) {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [corporateModalOpen, setCorporateModalOpen] = useState(false);
  const [chatbotOpen, setChatbotOpen] = useState(false);
  const [showSupportBtn, setShowSupportBtn] = useState(false);

  useEffect(() => {
    const handleOpenChatbot = () => setChatbotOpen(true);
    window.addEventListener('open-chatbot', handleOpenChatbot);
    return () => window.removeEventListener('open-chatbot', handleOpenChatbot);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const footer = document.querySelector('footer');
      if (!footer) return;

      const rect = footer.getBoundingClientRect();
      // Show when the footer is within 250px of entering viewport or already visible
      if (rect.top <= window.innerHeight + 250) {
        setShowSupportBtn(true);
      } else {
        setShowSupportBtn(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <>
      <Header 
        onOpenQuoteModal={() => setQuoteModalOpen(true)} 
        onOpenCorporateModal={() => setCorporateModalOpen(true)} 
      />
      
      <main>{children}</main>

      <Footer 
        onOpenQuoteModal={() => setQuoteModalOpen(true)} 
        onOpenCorporateModal={() => setCorporateModalOpen(true)} 
      />

      <StickyMobileBar 
        onOpenQuoteModal={() => setQuoteModalOpen(true)} 
      />

      <QuoteModal 
        isOpen={quoteModalOpen} 
        onClose={() => setQuoteModalOpen(false)} 
      />

      <CorporateAccountModal 
        isOpen={corporateModalOpen} 
        onClose={() => setCorporateModalOpen(false)} 
      />

      {/* Floating Live Support Button - Appears only when reaching footer */}
      <div
        className="floating-support-btn"
        style={{
          position: 'fixed',
          zIndex: 9998,
          opacity: showSupportBtn && !chatbotOpen ? 1 : 0,
          transform: showSupportBtn && !chatbotOpen ? 'translateY(0) scale(1)' : 'translateY(24px) scale(0.9)',
          pointerEvents: showSupportBtn && !chatbotOpen ? 'auto' : 'none',
          transition: 'opacity 0.3s cubic-bezier(0.16, 1, 0.3, 1), transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
        }}
      >
        <button
          onClick={() => setChatbotOpen(true)}
          aria-label="Open Live Support"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            backgroundColor: '#0F2C59',
            color: '#FFFFFF',
            border: 'none',
            borderRadius: '50px',
            padding: '12px 22px',
            boxShadow: '0 8px 24px rgba(15, 44, 89, 0.35)',
            cursor: 'pointer',
            fontSize: '0.92rem',
            fontWeight: '600',
            transition: 'transform 0.2s ease, box-shadow 0.2s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-2px) scale(1.02)';
            e.currentTarget.style.boxShadow = '0 12px 28px rgba(15, 44, 89, 0.45)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0) scale(1)';
            e.currentTarget.style.boxShadow = '0 8px 24px rgba(15, 44, 89, 0.35)';
          }}
        >
          <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
            <Headset size={20} color="#29ABE2" />
            <span
              style={{
                position: 'absolute',
                top: '-2px',
                right: '-2px',
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                backgroundColor: '#22c55e',
                border: '2px solid #0F2C59'
              }}
            />
          </div>
          <span>Live Support</span>
        </button>
      </div>

      <Chatbot 
        isOpen={chatbotOpen}
        onClose={() => setChatbotOpen(false)}
      />
    </>
  );
}
