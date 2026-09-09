import './globals.css';
import ClientLayoutProvider from '@/components/ClientLayoutProvider';

export const metadata = {
  metadataBase: new URL('https://suhalayatravels.com'),
  title: {
    default: 'Suhalaya Travels — Premium Chauffeur-Driven Mobility in South India',
    template: '%s | Suhalaya Travels',
  },
  description:
    'Suhalaya is South India\'s premium chauffeur-driven mobility partner for corporate travel, airport transfers, employee transport, executive journeys, and curated road trips.',
  keywords: [
    'chauffeur driven car South India',
    'corporate mobility Bangalore',
    'premium cab service Hyderabad',
    'airport transfer South India',
    'executive travel service',
    'employee transport service',
    'luxury car rental South India',
    'Suhalaya Travels',
  ],
  authors: [{ name: 'Suhalaya Travels', url: 'https://suhalayatravels.com' }],
  creator: 'Suhalaya Travels',
  publisher: 'Suhalaya Travels',
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://suhalayatravels.com',
    siteName: 'Suhalaya Travels',
    title: 'Suhalaya Travels — Premium Chauffeur-Driven Mobility in South India',
    description:
      'South India\'s trusted premium chauffeur service for corporate travel, airport transfers, employee transport, and executive road journeys.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Suhalaya Travels — Premium Chauffeur-Driven Mobility',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Suhalaya Travels — Premium Chauffeur-Driven Mobility in South India',
    description:
      'South India\'s trusted premium chauffeur service for corporate travel, airport transfers and executive journeys.',
    images: ['/og-image.png'],
    creator: '@suhalayatravels',
  },
  alternates: {
    canonical: 'https://suhalayatravels.com',
  },
  other: {
    'theme-color': '#0F2A52',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ClientLayoutProvider>{children}</ClientLayoutProvider>
      </body>
    </html>
  );
}
