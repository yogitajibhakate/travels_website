export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/'],
      },
    ],
    sitemap: 'https://suhalayatravels.com/sitemap.xml',
    host: 'https://suhalayatravels.com',
  };
}
