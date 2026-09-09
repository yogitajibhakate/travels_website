export default function sitemap() {
  const baseUrl = 'https://suhalayatravels.com';
  const now = new Date();

  const staticRoutes = [
    { url: baseUrl, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${baseUrl}/about`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/services`, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/fleet`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/corporate`, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${baseUrl}/packages`, changeFrequency: 'monthly', priority: 0.75 },
    { url: `${baseUrl}/locations`, changeFrequency: 'monthly', priority: 0.75 },
    { url: `${baseUrl}/blog`, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${baseUrl}/contact`, changeFrequency: 'yearly', priority: 0.6 },
  ].map((route) => ({ ...route, lastModified: now }));

  return staticRoutes;
}
