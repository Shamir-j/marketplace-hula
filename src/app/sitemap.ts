import { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://hula.co.ke';

  // Core pages
  const corePages = [
    '',
    '/about-hula',
    '/cart',
    '/checkout',
    '/product-detail',
    '/results-page',
    '/shipping-rates-policies',
    '/returns-replacements',
  ];

  // Legal pages
  const legalPages = [
    '/legal/terms-of-service',
    '/legal/privacy-notice',
    '/legal/cookie-policy',
    '/legal/acceptable-use',
    '/legal/ads-privacy-choices',
    '/legal/consumer-health-data',
    '/legal/seller-agreement',
  ];

  const allPages = [...corePages, ...legalPages];

  return allPages.map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date(),
    changeFrequency: page === '' ? 'daily' : 'weekly',
    priority: page === '' ? 1 : 0.8,
  }));
}
