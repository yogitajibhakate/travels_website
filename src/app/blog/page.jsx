import BlogContent from './BlogContent';

export const metadata = {
  title: 'Travel Blog - Tips, Routes & Corporate Mobility Insights',
  description:
    "Read Suhalaya Travels' blog for expert tips on corporate mobility, South India road trip routes, airport transfer guides, and chauffeur-driven travel insights.",
  alternates: { canonical: 'https://suhalayatravels.com/blog' },
  openGraph: {
    title: 'Travel Blog | Suhalaya Travels',
    description: 'Corporate mobility insights, South India road trip routes, and expert chauffeur travel tips from Suhalaya Travels.',
    url: 'https://suhalayatravels.com/blog',
  },
};

export default function BlogPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'Suhalaya Travels Blog',
    description: "Read Suhalaya Travels' blog for expert tips on corporate mobility, South India road trip routes, airport transfer guides, and chauffeur-driven travel insights.",
    url: 'https://suhalayatravels.com/blog',
    publisher: {
      '@type': 'Organization',
      name: 'Suhalaya Travels',
      logo: {
        '@type': 'ImageObject',
        url: 'https://suhalayatravels.com/logo.png',
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BlogContent />
    </>
  );
}
