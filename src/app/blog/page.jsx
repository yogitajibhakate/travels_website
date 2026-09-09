import BlogContent from './BlogContent';

export const metadata = {
  title: 'Travel Blog — Tips, Routes & Corporate Mobility Insights',
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
  return <BlogContent />;
}
