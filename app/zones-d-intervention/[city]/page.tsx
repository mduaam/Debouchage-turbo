import type { Metadata } from 'next';
import Link from 'next/link';
import { permanentRedirect } from 'next/navigation';
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Clock,
  MapPin,
  Phone,
  ShieldCheck,
  Truck,
} from 'lucide-react';
import { SERVICES, PHONE_DISPLAY, PHONE_HREF } from '@/lib/hydroheat-data';
import {
  ZONES_CITIES,
  getZoneCityBySlug,
  getCityMetaTitle,
  getCityMetaDescription,
  getCityFaqs,
  getCityServiceSections,
} from '@/lib/zones-data';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { BottomCtaBanner } from '@/components/BottomCtaBanner';
import { ServiceQuoteCard } from '@/components/ServiceQuoteCard';
import { ServiceFaqAccordion } from '@/components/ServiceFaqAccordion';

const baseUrl = (process.env.APP_URL || 'https://debouchage-turbo.be').replace(/\/$/, '');

export async function generateStaticParams() {
  return ZONES_CITIES.map((city) => ({
    city: city.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string }>;
}): Promise<Metadata> {
  const { city: citySlug } = await params;
  const city = getZoneCityBySlug(citySlug);

  if (!city) {
    return {
      title: 'Zones d’Intervention Bruxelles & Wallonie | Debouchage Turbo',
      alternates: {
        canonical: `${baseUrl}/zones-d-intervention`,
      },
    };
  }

  const title = getCityMetaTitle(city);
  const description = getCityMetaDescription(city);
  const pageUrl = `${baseUrl}/zones-d-intervention/${city.slug}`;

  return {
    title,
    description,
    keywords: [
      `débouchage ${city.name.toLowerCase()}`,
      `débouchage canalisation ${city.name.toLowerCase()}`,
      `débouchage wc ${city.name.toLowerCase()}`,
      `plombier urgence ${city.postalCodes[0]}`,
      `curage égout ${city.name.toLowerCase()}`,
    ],
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      title,
      description,
      url: pageUrl,
      siteName: 'Debouchage Turbo',
      type: 'website',
      locale: 'fr_BE',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  };
}

export default async function ZoneCityPage({
  params,
}: {
  params: Promise<{ city: string }>;
}) {
  const { city: citySlug } = await params;
  const city = getZoneCityBySlug(citySlug);

  // Permanently redirect any uncurated/pruned village slug to the main zones hub
  if (!city) {
    permanentRedirect('/zones-d-intervention');
  }

  const faqs = getCityFaqs(city);
  const serviceSections = getCityServiceSections(city);
  const nearbyCities = city.nearbySlugs
    .map((slug) => getZoneCityBySlug(slug))
    .filter((item): item is NonNullable<typeof item> => Boolean(item));

  const pageUrl = `${baseUrl}/zones-d-intervention/${city.slug}`;

  const plumberJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Plumber',
    name: `Debouchage Turbo — ${city.name}`,
    description: getCityMetaDescription(city),
    url: pageUrl,
    telephone: '+3228990417',
    priceRange: '€€',
    address: {
      '@type': 'PostalAddress',
      addressLocality: city.name,
      addressRegion: city.province,
      postalCode: city.postalCodes[0],
      addressCountry: 'BE',
    },
    areaServed: [
      {
        '@type': 'City',
        name: city.name,
      },
      ...city.districts.map((district) => ({
        '@type': 'Place',
        name: `${district}, ${city.name}`,
      })),
    ],
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday',
        ],
        opens: '00:00',
        closes: '23:59',
      },
    ],
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Accueil',
        item: `${baseUrl}/`,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: "Zones d'intervention",
        item: `${baseUrl}/zones-d-intervention`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: city.name,
        item: pageUrl,
      },
    ],
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(plumberJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-[#031d4f] text-white py-10 sm:py-14 border-b border-white/10">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
            <nav aria-label="Fil d'Ariane" className="flex flex-wrap items-center gap-1.5 text-xs sm:text-sm text-slate-300">
              <Link href="/" className="hover:text-white transition-colors">
                Accueil
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              <Link href="/zones-d-intervention" className="hover:text-white transition-colors">
                Zones d&apos;intervention
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              <span className="text-white font-semibold" aria-current="page">
                {city.name}
              </span>
            </nav>

            <div className="mt-5 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-7">
                <p className="text-xs sm:text-sm font-bold text-[#ef232a] tabular-nums">
                  {city.province} · Codes postaux {city.postalCodes.join(', ')}
                </p>

                <h1 className="font-display text-[28px] sm:text-[38px] lg:text-[42px] font-extrabold leading-[1.14] tracking-tight text-white mt-2 text-balance">
                  Débouchage de Canalisation à {city.name} ({city.postalCodes[0]})
                </h1>

                <p className="text-sm sm:text-base text-slate-200 leading-relaxed mt-3.5 max-w-2xl">
                  Besoin d&apos;un déboucheur urgent à <strong className="text-white">{city.name}</strong> ? Nos camions hydrocureurs interviennent 24h/24 et 7j/7 pour le débouchage de WC, évier, colonne, égout, inspection caméra et vidange de fosse septique avec devis annoncé avant départ.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6 py-3.5 border-y border-white/10">
                  <div className="flex items-center gap-2.5">
                    <Clock className="w-5 h-5 text-[#ef232a] shrink-0" />
                    <div>
                      <p className="text-[11px] text-slate-300">Délai à {city.name}</p>
                      <p className="text-sm font-bold text-white tabular-nums">{city.etaRange}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Truck className="w-5 h-5 text-emerald-400 shrink-0" />
                    <div>
                      <p className="text-[11px] text-slate-300">Tarif de départ</p>
                      <p className="text-sm font-bold text-white tabular-nums">Dès 75 € HTVA</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <ShieldCheck className="w-5 h-5 text-amber-400 shrink-0" />
                    <div>
                      <p className="text-[11px] text-slate-300">Agréé BCE</p>
                      <p className="text-sm font-bold text-white tabular-nums">Garantie 5 ans</p>
                    </div>
                  </div>
                </div>

                <div className="mt-5 flex flex-col sm:flex-row gap-3">
                  <a
                    href={PHONE_HREF}
                    className="inline-flex items-center justify-center gap-2.5 bg-[#dc141b] hover:bg-[#b91016] text-white font-bold text-sm px-5 py-3 rounded-lg shadow-md transition-colors tabular-nums"
                  >
                    <Phone className="w-4 h-4 shrink-0" />
                    <span>Urgence {city.name} : {PHONE_DISPLAY}</span>
                  </a>
                  <Link
                    href="/tarifs"
                    className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold text-sm px-5 py-3 rounded-lg border border-white/20 transition-colors"
                  >
                    <span>Consulter nos tarifs</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-5">
                <ServiceQuoteCard
                  defaultPostalCode={`${city.postalCodes[0]} — ${city.name}`}
                  heading={`Rappel express à ${city.name}`}
                  subheading={`Votre technicien pour ${city.name} (${city.postalCodes[0]}) vous rappelle en quelques minutes.`}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Local Expertise & Neighborhoods Section */}
        <section className="py-12 sm:py-16 bg-white">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7">
              <p className="text-xs sm:text-sm font-bold text-[#dc141b]">
                Expertise locale · {city.region}
              </p>
              <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-[#041e4d] mt-1.5 text-balance">
                Un service adapté au bâti et aux réseaux de {city.name}
              </h2>

              <div className="mt-4 space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
                <p>
                  <strong>Typologie des bâtiments à {city.name} :</strong> {city.housingProfile}
                </p>
                <p>
                  <strong>Spécificités techniques rencontrées :</strong> {city.localChallenge}
                </p>
                <p>
                  Avec {city.activeTeams} {city.activeTeams > 1 ? 'équipes mobiles dédiées' : 'équipe mobile dédiée'} dans le secteur {city.province}, nos techniciens arrivent sur place en{' '}
                  <strong className="text-[#041e4d] tabular-nums">{city.etaRange}</strong> munis d&apos;hydrocureurs haute pression jusqu&apos;à 200 bars, de furets mécaniques et de caméras endoscopiques haute définition.
                </p>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-xl bg-[#f8fafd] border border-slate-200 p-5 sm:p-6">
                <p className="font-display text-base sm:text-lg font-extrabold text-[#041e4d] flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#dc141b] shrink-0" />
                  <span>Quartiers &amp; entités couverts à {city.name}</span>
                </p>

                <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs sm:text-sm text-slate-700">
                  {city.districts.map((district) => (
                    <li key={district} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{district}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-5 pt-4 border-t border-slate-200 space-y-1.5 text-xs text-slate-600">
                  <div className="flex items-center justify-between gap-2">
                    <span>Codes postaux couverts</span>
                    <span className="font-bold text-[#041e4d] tabular-nums">
                      {city.postalCodes.join(', ')}
                    </span>
                  </div>
                  <div className="flex items-center justify-between gap-2">
                    <span>Délai d&apos;arrivée moyen</span>
                    <span className="font-bold text-emerald-700 tabular-nums">{city.etaRange}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Specialized Local Service Sections (H2 + Service-City H3s) */}
        <section className="py-12 sm:py-14 bg-[#f8fafd] border-t border-slate-100">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
            <div className="flex flex-wrap items-end justify-between gap-4 mb-7">
              <div className="max-w-2xl">
                <p className="text-xs sm:text-sm font-bold text-[#dc141b]">
                  Interventions ciblées · {city.postalCodes[0]}
                </p>
                <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-[#041e4d] mt-1 text-balance">
                  Services spécialisés à {city.name}
                </h2>
              </div>
              <Link
                href="/conseils/locataire-ou-proprietaire"
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#041e4d] hover:text-[#dc141b] transition-colors"
              >
                <span>Location à {city.name} : qui paie ?</span>
                <ArrowRight className="w-4 h-4 text-[#dc141b]" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {serviceSections.map((section) => (
                <article
                  key={section.slug}
                  className="rounded-xl bg-white border border-slate-200 p-5 sm:p-6 flex flex-col justify-between"
                >
                  <div>
                    <h3 className="font-display text-base sm:text-lg font-extrabold text-[#041e4d]">
                      {section.heading}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                      {section.description}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-100">
                    <Link
                      href={`/services/${section.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#041e4d] hover:text-[#dc141b] transition-colors"
                    >
                      <span>Découvrir la prestation</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#dc141b]" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* All 11 Services Available Locally */}
        <section className="py-12 sm:py-16 bg-[#f8fafd] border-y border-slate-100">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
            <div className="flex flex-wrap items-end justify-between gap-4 mb-7">
              <div className="max-w-2xl">
                <p className="text-xs sm:text-sm font-bold text-[#dc141b]">Prestations 7j/7</p>
                <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-[#041e4d] mt-1 text-balance">
                  Nos interventions de débouchage à {city.name}
                </h2>
              </div>
              <Link
                href="/tarifs"
                className="inline-flex items-center gap-1.5 text-sm font-bold text-[#041e4d] hover:text-[#dc141b] transition-colors"
              >
                <span>Grille tarifaire complète</span>
                <ArrowRight className="w-4 h-4 text-[#dc141b]" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {SERVICES.map((service) => (
                <Link
                  key={service.id}
                  href={`/services/${service.id}`}
                  className="group rounded-xl bg-white border border-slate-200 hover:border-[#041e4d]/40 hover:shadow-md p-5 flex flex-col justify-between transition-all"
                >
                  <div>
                    <p className="text-xs font-bold text-emerald-700 tabular-nums">
                      {service.startingPrice}
                    </p>
                    <h3 className="font-display text-base font-extrabold text-[#041e4d] group-hover:text-[#dc141b] transition-colors mt-1.5">
                      {service.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 mt-1.5 leading-relaxed">
                      {service.shortDescription}
                    </p>
                  </div>
                  <span className="mt-4 pt-3 border-t border-slate-100 inline-flex items-center gap-1.5 text-xs font-bold text-[#041e4d] group-hover:text-[#dc141b] transition-colors">
                    <span>Détails du service</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Local FAQ Section */}
        <section className="py-12 sm:py-16 bg-white">
          <div className="max-w-[900px] mx-auto px-4 sm:px-6">
            <div className="text-center">
              <p className="text-xs sm:text-sm font-bold text-[#dc141b]">Questions fréquentes</p>
              <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-[#041e4d] mt-1.5 text-balance">
                Questions fréquentes — Débouchage à {city.name}
              </h2>
            </div>

            <div className="mt-7">
              <ServiceFaqAccordion items={faqs} />
            </div>
          </div>
        </section>

        {/* Nearby Cities Internal Linking */}
        <section className="py-10 sm:py-12 bg-[#f8fafd] border-t border-slate-100">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="text-xs font-bold text-[#dc141b]">Secteurs voisins</p>
                <h2 className="font-display text-xl sm:text-2xl font-extrabold text-[#041e4d] mt-1">
                  Nous intervenons aussi près de {city.name}
                </h2>
              </div>
              <Link
                href="/zones-d-intervention"
                className="inline-flex items-center gap-1.5 text-sm font-bold text-[#041e4d] hover:text-[#dc141b] transition-colors"
              >
                <span>Toutes nos zones d&apos;intervention</span>
                <ArrowRight className="w-4 h-4 text-[#dc141b]" />
              </Link>
            </div>

            <div className="mt-5 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {nearbyCities.map((nearby) => (
                <Link
                  key={nearby.slug}
                  href={`/zones-d-intervention/${nearby.slug}`}
                  className="group rounded-xl bg-white border border-slate-200 hover:border-[#041e4d]/40 p-4 flex items-center justify-between gap-3 transition-all"
                >
                  <div>
                    <p className="font-display text-base font-extrabold text-[#041e4d] group-hover:text-[#dc141b] transition-colors">
                      {nearby.name}
                    </p>
                    <p className="text-xs text-slate-500 mt-0.5 tabular-nums">
                      CP {nearby.postalCodes[0]} · {nearby.etaRange}
                    </p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#dc141b] shrink-0" />
                </Link>
              ))}
            </div>
          </div>
        </section>

        <BottomCtaBanner />
      </main>

      <Footer />
    </div>
  );
}
