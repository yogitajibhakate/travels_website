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

export default async function BlogPage() {
  let initialBlogs = [];
  try {
    const scriptUrl = 'https://script.google.com/macros/s/AKfycbxZa8Us-jLPF6ffpNTui5z64_ocpuB5FCZQAw1vN8wOu3MIfBhLwi6BsjlewOIfamQI4w/exec';
    const response = await fetch(scriptUrl, { next: { revalidate: 60 } });
    if (response.ok) {
      const text = await response.text();
      let data = [];
      try {
        data = JSON.parse(text);
      } catch (err) {
        console.warn('Server blog fetch: not valid JSON', text.slice(0, 100));
        data = [];
      }
      initialBlogs = data
        .filter(b => {
          const status = b.status || b.Status || '';
          return status.toLowerCase() === 'published';
        })
        .map(p => ({
          ...p,
          status: p.status || p.Status || 'Published',
          categoryName: p.category || p.Category || 'General',
          readTime: '5 min read',
          date: p.dateCreated || p.Date || new Date().toLocaleDateString(),
          image: p.image_url || p.imageUrl || p.Image || '/images/blog/corporate-car.jpg'
        }));
    }
  } catch (error) {
    console.error('Error fetching blogs on server:', error);
  }

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
      <BlogContent initialBlogs={initialBlogs} />
    </>
  );
}
