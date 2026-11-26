import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Clock,
  Handshake,
  MapPin,
  Phone,
  ShieldCheck,
} from 'lucide-react';
import { PHONE_DISPLAY, PHONE_HREF } from '@/lib/hydroheat-data';
import { TARIFF_ITEMS, TARIFF_FAQS, CITY_TARIFF_HIGHLIGHTS } from '@/lib/tarifs-data';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { BottomCtaBanner } from '@/components/BottomCtaBanner';
import { ServiceQuoteCard } from '@/components/ServiceQuoteCard';
import { ServiceFaqAccordion } from '@/components/ServiceFaqAccordion';
import { TarifsInteractiveView } from '@/components/TarifsInteractiveView';

const baseUrl = (process.env.APP_URL || 'https://debouchage-turbo.be').replace(/\/$/, '');

export const metadata: Metadata = {
  title: 'Tarifs Débouchage Canalisation Dès 75 € | Debouchage Turbo',
  description:
    'Prix transparents pour débouchage canalisation, WC (dès 75 €), sterput (dès 95 €), curage haute pression (dès 120 €), chemisage et fosse septique à Bruxelles, Liège, Mons et Wallonie.',
  keywords: [
    'débouchage canalisation prix',
    'tarif plombier wc bouché',
    'prix débouchage canalisation belgique',
    'débouchage canalisation prix bruxelles',
    'débouchage canalisation liège prix',
    'prix débouchage canalisation mons',
    'vidange fosse septique et bac à graisse prix',
    'tarif hydrocurage bruxelles',
  ],
  alternates: {
    canonical: `${baseUrl}/tarifs`,
  },
  openGraph: {
    title: 'Tarifs Débouchage Canalisation Dès 75 € | Debouchage Turbo',
    description:
      'Consultez nos forfaits transparents annoncés avant départ à Bruxelles et en Wallonie : débouchage WC dès 75 €, évier dès 75 €, hydrocurage dès 120 €.',
    url: `${baseUrl}/tarifs`,
    siteName: 'Debouchage Turbo',
    type: 'website',
    locale: 'fr_BE',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tarifs Débouchage Canalisation Dès 75 € | Debouchage Turbo',
    description:
      'Forfaits clairs dès 75 € HTVA à Bruxelles et en Wallonie. Devis gratuit par téléphone et garantie 5 ans.',
  },
};

const PRICING_FACTORS = [
  {
    title: 'Localisation & longueur du bouchon',
    description:
      'Un engorgement dans le siphon sous évier ou le premier mètre d’un WC nécessite un outillage léger, tandis qu’un bouchon à 25 mètres dans la conduite vers l’égout demande un camion hydrocureur haute pression.',
  },
  {
    title: 'Technique mécanique ou hydrocurage',
    description:
      'Nos opérateurs sélectionnent le procédé le plus économique et le plus sûr : pompe à pression, furet électrique rotatif ou curage hydrodynamique jusqu’à 200 bars.',
  },
  {
    title: 'Créneau horaire (jour vs astreinte nuit/week-end)',
    description:
      'En journée en semaine, nos tarifs de base s’appliquent sans majoration. Pour les urgences de nuit, le dimanche ou les jours fériés, la majoration exacte est annoncée avant tout déplacement.',
  },
  {
    title: 'Taux de TVA réduit à 6 % en Belgique',
    description:
      'Les logements privés belges de plus de 10 ans bénéficient légalement d’une TVA à 6 % sur la main-d’œuvre, contre 21 % pour les locaux commerciaux ou constructions récentes.',
  },
];

export default function TarifsPage() {
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
        name: 'Tarifs',
        item: `${baseUrl}/tarifs`,
      },
    ],
  };

  const offerCatalogJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'OfferCatalog',
    name: 'Grille tarifaire Debouchage Turbo — Bruxelles & Wallonie',
    itemListElement: TARIFF_ITEMS.map((item) => ({
      '@type': 'Offer',
      name: item.title,
      description: item.detail,
      priceCurrency: 'EUR',
      url: `${baseUrl}/services/${item.serviceSlug}`,
    })),
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: TARIFF_FAQS.map((faq) => ({
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(offerCatalogJsonLd) }}
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
            <nav aria-label="Fil d'Ariane" className="flex items-center gap-1.5 text-xs sm:text-sm text-slate-300">
              <Link href="/" className="hover:text-white transition-colors">
                Accueil
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              <span className="text-white font-semibold" aria-current="page">
                Tarifs
              </span>
            </nav>

            <div className="mt-5 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-7">
                <p className="text-xs sm:text-sm font-bold text-[#ef232a]">
                  Transparence totale · Tarif annoncé avant départ
                </p>

                <h1 className="font-display text-[28px] sm:text-[38px] lg:text-[42px] font-extrabold leading-[1.14] tracking-tight text-white mt-2 text-balance">
                  Tarifs de Débouchage de Canalisation à Bruxelles et en Wallonie
                </h1>

                <p className="text-sm sm:text-base text-slate-200 leading-relaxed mt-3.5 max-w-2xl">
                  Pas de mauvaise surprise sur votre facture : nos forfaits démarrent à{' '}
                  <strong className="text-white tabular-nums">75 € HTVA</strong> et sont systématiquement confirmés par téléphone avant l&apos;envoi du camion hydrocureur.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6 py-3.5 border-y border-white/10">
                  <div className="flex items-center gap-2.5">
                    <Handshake className="w-5 h-5 text-[#ef232a] shrink-0" />
                    <div>
                      <p className="text-[11px] text-slate-300">Sanitaire simple</p>
                      <p className="text-sm font-bold text-white tabular-nums">Dès 75 € HTVA</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Clock className="w-5 h-5 text-emerald-400 shrink-0" />
                    <div>
                      <p className="text-[11px] text-slate-300">Intervention urgence</p>
                      <p className="text-sm font-bold text-white tabular-nums">≤ 30 min · 24/7</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <ShieldCheck className="w-5 h-5 text-amber-400 shrink-0" />
                    <div>
                      <p className="text-[11px] text-slate-300">Couverture travaux</p>
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
                    <span>Devis immédiat : {PHONE_DISPLAY}</span>
                  </a>
                  <Link
                    href="/zones-d-intervention"
                    className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold text-sm px-5 py-3 rounded-lg border border-white/20 transition-colors"
                  >
                    <span>Vérifier votre commune</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-5">
                <ServiceQuoteCard
                  heading="Obtenez votre tarif exact gratuit"
                  subheading="Indiquez votre code postal pour recevoir une estimation ferme avant notre déplacement."
                />
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Rate Grid */}
        <section className="py-12 sm:py-16 bg-[#f8fafd]">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
            <div className="max-w-2xl mb-7">
              <p className="text-xs sm:text-sm font-bold text-[#dc141b]">Grille détaillée</p>
              <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-[#041e4d] mt-1.5 text-balance">
                Prix indicatifs par type d&apos;intervention
              </h2>
              <p className="text-sm sm:text-base text-slate-600 mt-2">
                Filtrez par catégorie pour consulter le tarif de départ, la durée moyenne et les prestations incluses.
              </p>
            </div>

            <TarifsInteractiveView />

            <div className="mt-6 rounded-xl bg-white border border-slate-200 p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div className="text-xs sm:text-sm text-slate-700 leading-relaxed space-y-1">
                  <p>
                    <strong className="text-[#041e4d]">Engagement zéro surprise :</strong> si la configuration sur place nécessite un équipement différent (ex. passage caméra ou camion hydrocureur), un nouveau devis vous est soumis pour accord avant toute action.
                  </p>
                  <p>
                    Vous êtes locataire ?{' '}
                    <Link
                      href="/conseils/locataire-ou-proprietaire"
                      className="font-bold text-[#041e4d] hover:text-[#dc141b] underline"
                    >
                      Vérifiez qui paie le débouchage en Belgique (locataire ou propriétaire)
                    </Link>
                    .
                  </p>
                </div>
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

        {/* City Pricing Anchors Section */}
        <section id="tarifs-villes" className="py-12 sm:py-16 bg-white border-t border-slate-100">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div className="max-w-2xl">
                <p className="text-xs sm:text-sm font-bold text-[#dc141b]">
                  Tarification locale · Déplacement inclus
                </p>
                <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-[#041e4d] mt-1.5 text-balance">
                  Tarifs par ville à Bruxelles et en Wallonie
                </h2>
                <p className="text-sm sm:text-base text-slate-600 mt-2">
                  Nos forfaits restent identiques et transparents dans les grandes agglomérations wallonnes et les 19 communes bruxelloises.
                </p>
              </div>
              <nav aria-label="Accès rapide par ville" className="flex flex-wrap gap-x-4 gap-y-1.5 text-xs sm:text-sm font-bold text-[#041e4d]">
                {CITY_TARIFF_HIGHLIGHTS.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className="hover:text-[#dc141b] underline underline-offset-4 transition-colors"
                  >
                    {item.cityName.split(' ')[0]}
                  </a>
                ))}
              </nav>
            </div>

            <div className="mt-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {CITY_TARIFF_HIGHLIGHTS.map((city) => (
                <article
                  key={city.id}
                  id={city.id}
                  className="scroll-mt-24 rounded-xl border border-slate-200 bg-[#f8fafd] p-5 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="font-display text-base sm:text-lg font-extrabold text-[#041e4d] flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-[#dc141b] shrink-0" />
                        <span>{city.cityName}</span>
                      </h3>
                      <span className="text-xs font-bold text-slate-500 tabular-nums shrink-0">
                        {city.eta}
                      </span>
                    </div>

                    <div className="mt-4 pt-3 border-t border-slate-200/80 grid grid-cols-2 gap-3 text-xs">
                      <div>
                        <p className="text-slate-500">Sanitaire (WC / douche)</p>
                        <p className="font-bold text-emerald-700 tabular-nums mt-0.5">
                          {city.sanitaryPrice}
                        </p>
                      </div>
                      <div>
                        <p className="text-slate-500">Hydrocurage égout</p>
                        <p className="font-bold text-[#041e4d] tabular-nums mt-0.5">
                          {city.hydroPrice}
                        </p>
                      </div>
                    </div>

                    <p className="text-xs text-slate-600 mt-3 leading-relaxed">{city.note}</p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-200/80">
                    <Link
                      href={`/zones-d-intervention/${city.citySlug}`}
                      className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#041e4d] hover:text-[#dc141b] transition-colors"
                    >
                      <span>Voir la fiche {city.cityName.split(' ')[0]}</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#dc141b]" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Factors Section */}
        <section className="py-12 sm:py-16 bg-white border-y border-slate-100">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
            <div className="max-w-2xl">
              <p className="text-xs sm:text-sm font-bold text-[#dc141b]">Comment est calculé le devis</p>
              <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-[#041e4d] mt-1.5 text-balance">
                Les 4 critères qui déterminent le prix d&apos;un débouchage
              </h2>
            </div>

            <div className="mt-7 grid grid-cols-1 md:grid-cols-2 gap-5">
              {PRICING_FACTORS.map((factor, idx) => (
                <div
                  key={factor.title}
                  className="rounded-xl border border-slate-200 bg-[#f8fafd] p-5 sm:p-6"
                >
                  <span className="font-display text-lg font-extrabold text-[#dc141b] tabular-nums">
                    0{idx + 1}
                  </span>
                  <h3 className="font-display text-base sm:text-lg font-extrabold text-[#041e4d] mt-1.5">
                    {factor.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                    {factor.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing FAQs */}
        <section className="py-12 sm:py-16 bg-[#f8fafd]">
          <div className="max-w-[900px] mx-auto px-4 sm:px-6">
            <div className="text-center">
              <p className="text-xs sm:text-sm font-bold text-[#dc141b]">Questions fréquentes</p>
              <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-[#041e4d] mt-1.5 text-balance">
                Questions fréquentes sur nos tarifs et devis
              </h2>
            </div>

            <div className="mt-7">
              <ServiceFaqAccordion items={TARIFF_FAQS} />
            </div>
          </div>
        </section>

        <BottomCtaBanner />
      </main>

      <Footer />
    </div>
  );
}
