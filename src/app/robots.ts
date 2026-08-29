import { MetadataRoute } from 'next';

const robots = (): MetadataRoute.Robots => {
  const baseUrl = process.env.URL ?? 'http://localhost:3000';

  return {
    rules: {
      userAgent: '*',
      allow: '/'
    },
    host: baseUrl,
    sitemap: `${baseUrl}/sitemap.xml`
  };
};

export default robots;
