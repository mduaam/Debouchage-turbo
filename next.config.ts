import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  // Modern image optimization: AVIF/WebP negotiation + tailored responsive srcset widths
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [384, 640, 750, 828, 1080, 1200, 1920],
    imageSizes: [64, 96, 128, 256, 384],
    minimumCacheTTL: 2592000,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**', // This allows any path under the hostname
      },
    ],
  },
  output: 'standalone',
  transpilePackages: ['motion'],
  async redirects() {
    const prunedFlemishCities = [
      'de-panne',
      'nieuwpoort',
      'middelkerke',
      'bredene',
      'antwerpen',
      'boom',
      'genk',
      'gent',
      'mechelen',
      'dendermonde',
      'aalst',
      'sint-niklaas',
      'zemst',
      'merchtem',
      'londerzeel',
      'opwijk',
      'affligem',
      'liedekerke',
      'ninove',
      'kortenberg',
      'meise',
      'vilvoorde',
      'zaventem',
      'dilbeek',
      'wemmel',
      'tervuren',
      'hoeilaart',
      'beersel',
      'drogenbos',
      'sint-pieters-leeuw',
      'wezembeek-oppem',
      'kraainem',
      'leuven',
      'asse',
      'halle',
      'grimbergen',
      'overijse',
      'brugge',
      'oostende',
      'knokke-heist',
      'kortrijk',
      'hasselt',
      'roeselare',
    ];

    const brusselsAliases = [
      'bruxelles-ville',
      'laeken',
      'haren',
      'neder-over-heembeek',
    ];

    return [
      // Legacy root service URLs -> clean /services/[slug]
      {
        source: '/debouchage-wc',
        destination: '/services/debouchage-wc',
        permanent: true,
      },
      {
        source: '/vidange-fosse-septique-bruxelles',
        destination: '/services/vidange-fosse-septique',
        permanent: true,
      },
      {
        source: '/debouchage-urgent-bruxelles',
        destination: '/services/depannage-urgent',
        permanent: true,
      },
      {
        source: '/debouchage-haute-pression-bruxelles',
        destination: '/services/debouchage-canalisation',
        permanent: true,
      },
      {
        source: '/debouchage-sterput-bruxelles',
        destination: '/services/debouchage-sterput',
        permanent: true,
      },
      {
        source: '/service-inspection-camera-canalisation',
        destination: '/services/inspection-camera',
        permanent: true,
      },
      {
        source: '/curage-canalisation-bruxelles-et-wallonie',
        destination: '/services/curage-egouts',
        permanent: true,
      },
      {
        source: '/service-debouchage-egout',
        destination: '/services/curage-egouts',
        permanent: true,
      },
      {
        source: '/nettoyage-debouchage-chambre-de-visite',
        destination: '/services/debouchage-sterput',
        permanent: true,
      },
      {
        source: '/nettoyage-et-debouchage-gouttieres',
        destination: '/services/curage-egouts',
        permanent: true,
      },
      {
        source: '/services/entretien-plomberie',
        destination: '/services/reparation-plomberie',
        permanent: true,
      },

      // Legacy navigation bloat & taxonomy cleanup -> clean hubs
      {
        source: '/plan-de-site',
        destination: '/',
        permanent: true,
      },
      {
        source: '/nos-services',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/conseil',
        destination: '/conseils',
        permanent: true,
      },
      {
        source: '/communes-:slug',
        destination: '/zones-d-intervention',
        permanent: true,
      },
      {
        source: '/province-:slug',
        destination: '/zones-d-intervention',
        permanent: true,
      },

      // Legacy advice & high-intent blog posts -> specific guides & service pages (BEFORE wildcard)
      {
        source: '/comment-deboucher-wc',
        destination: '/services/debouchage-wc',
        permanent: true,
      },
      {
        source: '/post/debouchage-canalisation-qui-paye-locataire-ou-proprietaire',
        destination: '/conseils/locataire-ou-proprietaire',
        permanent: true,
      },
      {
        source: '/post/deboucher-douche-baignoire',
        destination: '/services/debouchage-baignoire-douche',
        permanent: true,
      },
      {
        source: '/post/astuces-pour-deboucher-canalisation-naturellement',
        destination: '/conseils/deboucher-canalisation-naturellement-vs-acide',
        permanent: true,
      },
      {
        source: '/post/astuces-pour-d%C3%A9boucher-canalisation-naturellement',
        destination: '/conseils/deboucher-canalisation-naturellement-vs-acide',
        permanent: true,
      },
      {
        source: '/post/deboucher-canalisation-a-l-acide-chlorhydrique',
        destination: '/conseils/deboucher-canalisation-naturellement-vs-acide',
        permanent: true,
      },
      {
        source: '/post/d%C3%A9boucher-canalisation-%C3%A0-l-acide-chlorhydrique',
        destination: '/conseils/deboucher-canalisation-naturellement-vs-acide',
        permanent: true,
      },
      {
        source: '/post/deboucher-un-evier-naturellement',
        destination: '/services/debouchage-evier',
        permanent: true,
      },
      {
        source: '/post/curage-des-canalisations',
        destination: '/services/curage-egouts',
        permanent: true,
      },
      {
        source: '/post/canalisation-wc-bouchee-les-causes',
        destination: '/services/debouchage-wc',
        permanent: true,
      },
      {
        source: '/post/:slug*',
        destination: '/services',
        permanent: true,
      },

      // Brussels sub-district aliases -> canonical /zones-d-intervention/bruxelles
      ...brusselsAliases.map((alias) => ({
        source: `/zones-d-intervention/${alias}`,
        destination: '/zones-d-intervention/bruxelles',
        permanent: true,
      })),

      // Pruned Flemish & coastal city pages -> /zones-d-intervention hub
      ...prunedFlemishCities.map((slug) => ({
        source: `/zones-d-intervention/${slug}`,
        destination: '/zones-d-intervention',
        permanent: true,
      })),
    ];
  },
  webpack: (config, {dev}) => {
    // HMR is disabled in AI Studio via DISABLE_HMR env var.
    // Do not modify—file watching is disabled to prevent flickering during agent edits.
    if (dev && process.env.DISABLE_HMR === 'true') {
      config.watchOptions = {
        ignored: /.*/,
      };
    }
    return config;
  },
};

export default nextConfig;
