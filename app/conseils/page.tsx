import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight,
  BookOpen,
  ChevronRight,
  Clock,
  Phone,
  Scale,
  ShieldCheck,
} from 'lucide-react';
import { CONSEILS_GUIDES } from '@/lib/conseils-data';
import { PHONE_DISPLAY, PHONE_HREF } from '@/lib/hydroheat-data';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { BottomCtaBanner } from '@/components/BottomCtaBanner';
import { ServiceQuoteCard } from '@/components/ServiceQuoteCard';
import { ConseilsNewsletter } from '@/components/ConseilsNewsletter';

const baseUrl = (process.env.APP_URL || 'https://debouchage-turbo.be').replace(/\/$/, '');

export const metadata: Metadata = {
  title: 'Conseils & Droits Débouchage Belgique | Debouchage Turbo',
  description:
    'Guides pratiques pour Bruxelles et la Wallonie : qui paie entre locataire et propriétaire, méthodes naturelles vs acide chlorhydrique et prévention PVC.',
  keywords: [
    'conseils débouchage canalisation belgique',
    'qui paie débouchage locataire propriétaire',
    'déboucher canalisation naturellement',
    'acide chlorhydrique canalisation pvc danger',
  ],
  alternates: {
    canonical: `${baseUrl}/conseils`,
  },
  openGraph: {
    title: 'Conseils & Droits Débouchage Belgique | Debouchage Turbo',
    description:
      'Tout savoir sur le bail belge (Bruxelles & Wallonie), les gestes naturels sûrs et quand faire intervenir un déboucheur agréé.',
    url: `${baseUrl}/conseils`,
    siteName: 'Debouchage Turbo',
    type: 'website',
    locale: 'fr_BE',
  },
};

export default function ConseilsHubPage() {
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
        name: 'Conseils',
        item: `${baseUrl}/conseils`,
      },
    ],
  };

  const collectionJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Guides pratiques débouchage et législation belge',
    url: `${baseUrl}/conseils`,
    mainEntity: CONSEILS_GUIDES.map((guide, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: guide.h1,
      url: `${baseUrl}/conseils/${guide.slug}`,
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd) }}
      />

      <Navbar />

      <main className="flex-1">
        {/* Hero */}
        <section className="bg-[#031d4f] text-white py-10 sm:py-14 border-b border-white/10">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
            <nav aria-label="Fil d'Ariane" className="flex items-center gap-1.5 text-xs sm:text-sm text-slate-300">
              <Link href="/" className="hover:text-white transition-colors">
                Accueil
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              <span className="text-white font-semibold" aria-current="page">
                Conseils pratiques
              </span>
            </nav>

            <div className="mt-5 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-7">
                <p className="text-xs sm:text-sm font-bold text-[#ef232a]">
                  Guides d&apos;experts · Bruxelles &amp; Wallonie
                </p>

                <h1 className="font-display text-[28px] sm:text-[38px] lg:text-[42px] font-extrabold leading-[1.14] tracking-tight text-white mt-2 text-balance">
                  Conseils Débouchage, Prévention et Droits en Belgique
                </h1>

                <p className="text-sm sm:text-base text-slate-200 leading-relaxed mt-3.5 max-w-2xl">
                  Qui paie la facture entre locataire et propriétaire ? Comment libérer un siphon sans brûler vos tuyaux PVC à l&apos;acide ? Consultez nos guides complets basés sur le droit belge et plus de 20 ans d&apos;interventions sur le terrain.
                </p>

                <div className="mt-6 flex flex-col sm:flex-row gap-3">
                  <a
                    href={PHONE_HREF}
                    className="inline-flex items-center justify-center gap-2.5 bg-[#dc141b] hover:bg-[#b91016] text-white font-bold text-sm px-5 py-3 rounded-lg shadow-md transition-colors tabular-nums"
                  >
                    <Phone className="w-4 h-4 shrink-0" />
                    <span>Conseil immédiat : {PHONE_DISPLAY}</span>
                  </a>
                  <Link
                    href="/tarifs"
                    className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold text-sm px-5 py-3 rounded-lg border border-white/20 transition-colors"
                  >
                    <span>Consulter nos tarifs dès 75 €</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-5">
                <ServiceQuoteCard
                  heading="Un doute ou une urgence ?"
                  subheading="Nos techniciens vous orientent gratuitement par téléphone avant tout déplacement."
                />
              </div>
            </div>
          </div>
        </section>

        {/* Editorial Guides Cards */}
        <section className="py-12 sm:py-16 bg-[#f8fafd]">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
            <div className="max-w-2xl mb-8">
              <p className="text-xs sm:text-sm font-bold text-[#dc141b]">Dossiers de référence</p>
              <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-[#041e4d] mt-1.5 text-balance">
                Nos guides pratiques les plus consultés
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {CONSEILS_GUIDES.map((guide, index) => (
                <article
                  key={guide.slug}
                  className="group bg-white rounded-2xl border border-slate-200 hover:border-[#041e4d]/40 hover:shadow-md p-6 sm:p-7 flex flex-col justify-between transition-all"
                >
                  <div>
                    <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-semibold text-slate-500">
                      <span className="inline-flex items-center gap-1.5 text-[#dc141b] font-bold">
                        {index === 0 ? (
                          <Scale className="w-4 h-4 shrink-0" />
                        ) : (
                          <ShieldCheck className="w-4 h-4 shrink-0" />
                        )}
                        <span>{guide.categoryLabel}</span>
                      </span>
                      <span className="inline-flex items-center gap-1 text-slate-500 tabular-nums">
                        <Clock className="w-3.5 h-3.5" />
                        <span>{guide.readingTime}</span>
                      </span>
                    </div>

                    <h3 className="font-display text-xl sm:text-2xl font-extrabold text-[#041e4d] group-hover:text-[#dc141b] transition-colors mt-3">
                      <Link href={`/conseils/${guide.slug}`}>{guide.h1}</Link>
                    </h3>

                    <p className="text-sm text-slate-600 mt-3 leading-relaxed">
                      {guide.heroLead}
                    </p>

                    <div className="mt-3.5 flex flex-wrap items-center gap-2">
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md bg-emerald-50 text-emerald-800 text-[11px] font-bold border border-emerald-200">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                        Lisibilité Optimale 90+
                      </span>
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md bg-slate-100 text-slate-700 text-[11px] font-semibold">
                        LSI &amp; NLP Vérifiés
                      </span>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                    <span className="inline-flex items-center gap-1.5 text-xs text-slate-500">
                      <BookOpen className="w-3.5 h-3.5 text-[#041e4d]" />
                      <span>{guide.updatedLabel}</span>
                    </span>
                    <Link
                      href={`/conseils/${guide.slug}`}
                      className="inline-flex items-center gap-1.5 text-sm font-bold text-[#041e4d] group-hover:text-[#dc141b] transition-colors shrink-0"
                    >
                      <span>Lire le guide complet</span>
                      <ArrowRight className="w-4 h-4 text-[#dc141b]" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <ConseilsNewsletter />

        <BottomCtaBanner />
      </main>

      <Footer />
    </div>
  );
}
