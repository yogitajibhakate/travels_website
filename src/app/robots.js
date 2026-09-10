export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/'],
      },
      {
        userAgent: ['GPTBot', 'Claude-Web', 'anthropic-ai', 'Google-Extended', 'PerplexityBot'],
        allow: ['/', '/llms.txt'],
      }
    ],
    sitemap: 'https://suhalayatravels.com/sitemap.xml',
    host: 'https://suhalayatravels.com',
  };
}
