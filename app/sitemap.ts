import type { MetadataRoute } from 'next';
import { SERVICES } from '@/lib/hydroheat-data';
import { ZONES_CITIES } from '@/lib/zones-data';
import { CONSEILS_GUIDES } from '@/lib/conseils-data';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = (process.env.APP_URL || 'https://debouchage-turbo.be').replace(/\/$/, '');
  const now = new Date();

  const serviceRoutes: MetadataRoute.Sitemap = SERVICES.map((service) => ({
    url: `${baseUrl}/services/${service.id}`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: 0.85,
  }));

  const conseilRoutes: MetadataRoute.Sitemap = CONSEILS_GUIDES.map((guide) => ({
    url: `${baseUrl}/conseils/${guide.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.85,
  }));

  const zoneRoutes: MetadataRoute.Sitemap = ZONES_CITIES.map((city) => ({
    url: `${baseUrl}/zones-d-intervention/${city.slug}`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: city.activeTeams >= 2 ? 0.8 : 0.75,
  }));

  return [
    {
      url: `${baseUrl}/`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/tarifs`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/conseils`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/zones-d-intervention`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/a-propos`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    ...serviceRoutes,
    ...conseilRoutes,
    ...zoneRoutes,
  ];
}
