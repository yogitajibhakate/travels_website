'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import QuoteModal from '@/components/QuoteModal';
import CorporateAccountModal from '@/components/CorporateAccountModal';
import StickyMobileBar from '@/components/StickyMobileBar';

export default function ClientLayoutProvider({ children }) {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [corporateModalOpen, setCorporateModalOpen] = useState(false);

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
    </>
  );
}
