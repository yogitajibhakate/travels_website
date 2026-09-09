'use client';

import { useState } from 'react';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import QuoteModal from '@/components/QuoteModal';
import CorporateAccountModal from '@/components/CorporateAccountModal';
import StickyMobileBar from '@/components/StickyMobileBar';

export default function RootLayout({ children }) {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [corporateModalOpen, setCorporateModalOpen] = useState(false);

  return (
    <html lang="en">
      <head>
        <title>Suhalaya — Premium Chauffeur-Driven Mobility Partner South India</title>
        <meta name="description" content="Suhalaya is a premium chauffeur-driven mobility partner for corporate mobility, employee transport, airport transfers, executive travel, and South India road journeys." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
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
      </body>
    </html>
  );
}
