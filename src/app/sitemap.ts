import { getMultilingualUrls } from 'intlayer';
import { MetadataRoute } from 'next';

const sitemap = (): MetadataRoute.Sitemap => [
  {
    url: process.env.URL ?? 'http://localhost:3000',
    alternates: {
      languages: {
        ...getMultilingualUrls(''),
        'x-default': ''
      }
    },
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 1
  }
];

export default sitemap;
