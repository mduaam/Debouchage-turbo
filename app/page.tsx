import type { Metadata } from 'next';
import { HydroHeatHome } from '@/components/HydroHeatHome';

const baseUrl = (process.env.APP_URL || 'https://debouchage-turbo.be').replace(/\/$/, '');

export const metadata: Metadata = {
  title: 'Débouchage Canalisation Bruxelles & Wallonie Dès 75 € | Turbo',
  description:
    'Débouchage de canalisation à Bruxelles et en Wallonie en ≤ 30 min 7j/7 dès 75 € HTVA. WC, évier, sterput, curage haute pression et fosse septique. Devis gratuit.',
  keywords: [
    'débouchage canalisation Bruxelles',
    'débouchage canalisation Wallonie',
    'débouchage canalisation prix',
    'déboucheur urgent Bruxelles',
    'débouchage sterput Bruxelles',
    'débouchage WC Wallonie',
    'curage haute pression Bruxelles',
    'vidange fosse septique Wallonie',
  ],
  alternates: {
    canonical: `${baseUrl}/`,
  },
  openGraph: {
    title: 'Débouchage Canalisation Bruxelles & Wallonie Dès 75 € | Turbo',
    description:
      'Débouchage de canalisation à Bruxelles et en Wallonie en ≤ 30 min 7j/7 dès 75 € HTVA. WC, évier, sterput, curage haute pression et fosse septique. Devis gratuit.',
    url: `${baseUrl}/`,
    siteName: 'Debouchage Turbo',
    type: 'website',
    locale: 'fr_BE',
    images: [
      {
        url: `${baseUrl}/assets/aistudio/IMG_20261126_161752_d9940569.png`,
        alt: 'Technicien Debouchage Turbo devant son utilitaire à Bruxelles et en Wallonie',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Débouchage Canalisation Bruxelles & Wallonie Dès 75 € | Turbo',
    description:
      'Débouchage de canalisation à Bruxelles et en Wallonie en ≤ 30 min 7j/7 dès 75 € HTVA. WC, évier, sterput, curage haute pression et fosse septique. Devis gratuit.',
    images: [`${baseUrl}/assets/aistudio/IMG_20261126_161752_d9940569.png`],
  },
};

export default function HomePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Plumber',
    name: 'Debouchage Turbo',
    url: `${baseUrl}/`,
    description:
      'Spécialiste du débouchage de canalisation à Bruxelles et en Wallonie. Intervention d’urgence 7j/7 et 24h/24, curage haute pression, inspection caméra, débouchage WC, évier, égouts et vidange fosse septique.',
    telephone: '+3228990417',
    areaServed: [
      'Bruxelles',
      'Wallonie',
      'Brabant wallon',
      'Liège',
      'Namur',
      'Charleroi',
      'Mons',
      'Tournai',
      'Wavre',
      'Nivelles',
    ],
    openingHours: 'Mo-Su 00:00-23:59',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '2500',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HydroHeatHome />
    </>
  );
}
