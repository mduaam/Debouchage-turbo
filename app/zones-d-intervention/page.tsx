import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Clock,
  MapPin,
  Phone,
  ShieldCheck,
} from 'lucide-react';
import { PHONE_DISPLAY, PHONE_HREF } from '@/lib/hydroheat-data';
import { ZONES_CITIES } from '@/lib/zones-data';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { BottomCtaBanner } from '@/components/BottomCtaBanner';
import { ServiceQuoteCard } from '@/components/ServiceQuoteCard';
import { ZonesHubClient } from '@/components/ZonesHubClient';
import { BrusselsCoverageMap } from '@/components/BrusselsCoverageMap';

const baseUrl = (process.env.APP_URL || 'https://debouchage-turbo.be').replace(/\/$/, '');

export const metadata: Metadata = {
  title: 'Zones d’Intervention Bruxelles & Wallonie | Debouchage Turbo',
  description:
    'Débouchage de canalisation, WC et égouts dans les 19 communes de Bruxelles et les grandes villes de Wallonie (Namur, Liège, Charleroi, Mons, Wavre) 24/7.',
  keywords: [
    'zones intervention débouchage bruxelles',
    'débouchage canalisation wallonie',
    'déboucheur brabant wallon hainaut liège namur',
    'dépannage plomberie 19 communes bruxelles',
  ],
  alternates: {
    canonical: `${baseUrl}/zones-d-intervention`,
  },
  openGraph: {
    title: 'Zones d’Intervention Bruxelles & Wallonie | Debouchage Turbo',
    description:
      'Camions hydrocureurs 24/7 dans les 19 communes de Bruxelles et 64 villes majeures de Wallonie. Intervention rapide dès 75 € HTVA.',
    url: `${baseUrl}/zones-d-intervention`,
    siteName: 'Debouchage Turbo',
    type: 'website',
    locale: 'fr_BE',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zones d’Intervention Bruxelles & Wallonie | Debouchage Turbo',
    description:
      'Consultez nos secteurs couverts à Bruxelles et en Wallonie avec délai d’arrivée estimé et devis gratuit.',
  },
};

export default function ZonesHubPage() {
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
    ],
  };

  const itemListJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Communes et villes desservies par Debouchage Turbo',
    numberOfItems: ZONES_CITIES.length,
    itemListElement: ZONES_CITIES.map((city, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      name: `Débouchage à ${city.name}`,
      url: `${baseUrl}/zones-d-intervention/${city.slug}`,
    })),
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />

      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-[#031d4f] text-white py-10 sm:py-14 border-b border-white/10">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
            <nav aria-label="Fil d'Ariane" className="flex items-center gap-1.5 text-xs sm:text-sm text-slate-300">
              <Link href="/" className="hover:text-white transition-colors">
                Accueil
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              <span className="text-white font-semibold" aria-current="page">
                Zones d&apos;intervention
              </span>
            </nav>

            <div className="mt-5 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-7">
                <p className="text-xs sm:text-sm font-bold text-[#ef232a]">
                  Flotte mobile 24/7 · Bruxelles &amp; Wallonie
                </p>

                <h1 className="font-display text-[28px] sm:text-[38px] lg:text-[42px] font-extrabold leading-[1.14] tracking-tight text-white mt-2 text-balance">
                  Nos Zones d&apos;Intervention à Bruxelles et en Wallonie
                </h1>

                <p className="text-sm sm:text-base text-slate-200 leading-relaxed mt-3.5 max-w-2xl">
                  Nos techniciens en débouchage et curage haute pression sillonnent en permanence les{' '}
                  <strong className="text-white">19 communes de Bruxelles-Capitale</strong> et l&apos;ensemble des{' '}
                  <strong className="text-white">provinces wallonnes</strong> pour intervenir chez vous sans délai excessif.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6 py-3.5 border-y border-white/10">
                  <div className="flex items-center gap-2.5">
                    <Clock className="w-5 h-5 text-[#ef232a] shrink-0" />
                    <div>
                      <p className="text-[11px] text-slate-300">Arrivée Bruxelles</p>
                      <p className="text-sm font-bold text-white tabular-nums">15–30 min</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <MapPin className="w-5 h-5 text-emerald-400 shrink-0" />
                    <div>
                      <p className="text-[11px] text-slate-300">Couverture Wallonie</p>
                      <p className="text-sm font-bold text-white tabular-nums">5 provinces 7j/7</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <ShieldCheck className="w-5 h-5 text-amber-400 shrink-0" />
                    <div>
                      <p className="text-[11px] text-slate-300">Tarif transparent</p>
                      <p className="text-sm font-bold text-white tabular-nums">Dès 75 € HTVA</p>
                    </div>
                  </div>
                </div>

                <div className="mt-5 flex flex-col sm:flex-row gap-3">
                  <a
                    href={PHONE_HREF}
                    className="inline-flex items-center justify-center gap-2.5 bg-[#dc141b] hover:bg-[#b91016] text-white font-bold text-sm px-5 py-3 rounded-lg shadow-md transition-colors tabular-nums"
                  >
                    <Phone className="w-4 h-4 shrink-0" />
                    <span>Urgence : {PHONE_DISPLAY}</span>
                  </a>
                  <Link
                    href="/tarifs"
                    className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold text-sm px-5 py-3 rounded-lg border border-white/20 transition-colors"
                  >
                    <span>Voir nos tarifs dès 75 €</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-5">
                <ServiceQuoteCard
                  heading="Vérifiez notre disponibilité locale"
                  subheading="Indiquez votre code postal pour connaître le délai exact du camion le plus proche."
                />
              </div>
            </div>
          </div>
        </section>

        {/* Searchable Directory Section */}
        <section className="py-12 sm:py-16 bg-[#f8fafd]">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
            <div className="max-w-2xl mb-7">
              <p className="text-xs sm:text-sm font-bold text-[#dc141b]">Annuaire des secteurs</p>
              <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-[#041e4d] mt-1.5 text-balance">
                Trouvez votre commune à Bruxelles ou votre ville en Wallonie
              </h2>
              <p className="text-sm sm:text-base text-slate-600 mt-2 leading-relaxed">
                Sélectionnez une province ou saisissez votre code postal pour consulter les délais d&apos;intervention, les spécificités locales du réseau et les coordonnées d&apos;urgence.
              </p>
            </div>

            <ZonesHubClient />

            <div className="mt-8 rounded-xl bg-white border border-slate-200 p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  <strong className="text-[#041e4d]">Votre village wallon ne figure pas dans la liste ?</strong>{' '}
                  Nos équipes basées à Wavre, Nivelles, Charleroi, Mons, Namur, Liège et Arlon desservent également toutes les communes avoisinantes sans surcoût caché.
                </p>
              </div>
              <a
                href={PHONE_HREF}
                className="inline-flex items-center justify-center gap-2 bg-[#041e4d] hover:bg-[#06296b] text-white font-bold text-xs sm:text-sm px-4 py-2.5 rounded-lg whitespace-nowrap shrink-0 tabular-nums"
              >
                <Phone className="w-4 h-4" />
                <span>{PHONE_DISPLAY}</span>
              </a>
            </div>
          </div>
        </section>

        {/* Interactive 19 Brussels Communes Map */}
        <BrusselsCoverageMap variant="services" />

        <BottomCtaBanner />
      </main>

      <Footer />
    </div>
  );
}
