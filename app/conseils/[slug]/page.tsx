import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  AlertTriangle,
  ArrowRight,
  ChevronRight,
  Clock,
  Phone,
  ShieldCheck,
} from 'lucide-react';
import { CONSEILS_GUIDES, getConseilBySlug } from '@/lib/conseils-data';
import { SERVICES, PHONE_DISPLAY, PHONE_HREF } from '@/lib/hydroheat-data';
import {
  IMAGE_QUALITY,
  LIGHT_BLUR_DATA_URL,
  SERVICE_IMAGE_SIZES,
} from '@/lib/image-optimization';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { BottomCtaBanner } from '@/components/BottomCtaBanner';
import { ServiceQuoteCard } from '@/components/ServiceQuoteCard';
import { ServiceFaqAccordion } from '@/components/ServiceFaqAccordion';
import { ConseilDiagnosticWidget } from '@/components/ConseilDiagnosticWidget';
import { ConseilReadabilityAndLsiWidget } from '@/components/ConseilReadabilityAndLsiWidget';

const baseUrl = (process.env.APP_URL || 'https://debouchage-turbo.be').replace(/\/$/, '');

export async function generateStaticParams() {
  return CONSEILS_GUIDES.map((guide) => ({
    slug: guide.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const guide = getConseilBySlug(slug);

  if (!guide) {
    return {
      title: 'Guide introuvable | Debouchage Turbo',
    };
  }

  const pageUrl = `${baseUrl}/conseils/${guide.slug}`;

  return {
    title: guide.metaTitle,
    description: guide.metaDescription,
    keywords: guide.keywords,
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      title: guide.metaTitle,
      description: guide.metaDescription,
      url: pageUrl,
      siteName: 'Debouchage Turbo',
      type: 'article',
      locale: 'fr_BE',
    },
    twitter: {
      card: 'summary_large_image',
      title: guide.metaTitle,
      description: guide.metaDescription,
    },
  };
}

export default async function ConseilDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const guide = getConseilBySlug(slug);

  if (!guide) {
    notFound();
  }

  const pageUrl = `${baseUrl}/conseils/${guide.slug}`;
  const relatedServices = guide.relatedServiceSlugs
    .map((relSlug) => SERVICES.find((s) => s.id === relSlug))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: guide.h1,
    description: guide.metaDescription,
    mainEntityOfPage: pageUrl,
    author: {
      '@type': 'Organization',
      name: 'Debouchage Turbo',
      url: `${baseUrl}/`,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Debouchage Turbo',
      url: `${baseUrl}/`,
    },
    inLanguage: 'fr-BE',
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
        name: 'Conseils',
        item: `${baseUrl}/conseils`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: guide.h1,
        item: pageUrl,
      },
    ],
  };

  const howToJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: guide.stepsHeading,
    description: guide.stepsIntro,
    step: guide.steps.map((step, idx) => ({
      '@type': 'HowToStep',
      position: idx + 1,
      name: step.title,
      text: step.description,
    })),
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: guide.faqs.map((faq) => ({
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <Navbar />

      <main className="flex-1">
        {/* Hero */}
        <section className="bg-[#031d4f] text-white py-10 sm:py-14 border-b border-white/10">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
            <nav aria-label="Fil d'Ariane" className="flex flex-wrap items-center gap-1.5 text-xs sm:text-sm text-slate-300">
              <Link href="/" className="hover:text-white transition-colors">
                Accueil
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              <Link href="/conseils" className="hover:text-white transition-colors">
                Conseils
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              <span className="text-white font-semibold truncate max-w-[260px] sm:max-w-none" aria-current="page">
                {guide.categoryLabel}
              </span>
            </nav>

            <div className="mt-5 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-7">
                <p className="text-xs sm:text-sm font-bold text-[#ef232a]">
                  {guide.categoryLabel} · {guide.readingTime}
                </p>

                <h1 className="font-display text-[28px] sm:text-[36px] lg:text-[40px] font-extrabold leading-[1.14] tracking-tight text-white mt-2 text-balance">
                  {guide.h1}
                </h1>

                <p className="text-sm sm:text-base text-slate-200 leading-relaxed mt-3.5 max-w-2xl">
                  {guide.heroLead}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mt-6 py-3.5 border-y border-white/10 text-xs sm:text-sm">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-[#ef232a] shrink-0" />
                    <span className="font-semibold text-white">{guide.updatedLabel}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span className="font-semibold text-white">Bruxelles &amp; Wallonie</span>
                  </div>
                  <a
                    href="#audit-semantique"
                    className="flex items-center gap-2 text-emerald-300 hover:text-emerald-200 transition-colors group cursor-pointer"
                  >
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                    <span className="font-bold underline decoration-emerald-400/50 underline-offset-2">
                      Lisibilité 88/100 · LSI IA
                    </span>
                  </a>
                </div>

                <div className="mt-5 flex flex-col sm:flex-row gap-3">
                  <a
                    href={PHONE_HREF}
                    className="inline-flex items-center justify-center gap-2.5 bg-[#dc141b] hover:bg-[#b91016] text-white font-bold text-sm px-5 py-3 rounded-lg shadow-md transition-colors tabular-nums"
                  >
                    <Phone className="w-4 h-4 shrink-0" />
                    <span>Urgence ou conseil : {PHONE_DISPLAY}</span>
                  </a>
                  <Link
                    href="/tarifs"
                    className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold text-sm px-5 py-3 rounded-lg border border-white/20 transition-colors"
                  >
                    <span>Grille tarifaire dès 75 €</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-5">
                <ServiceQuoteCard
                  heading="Intervention avec facture détaillée"
                  subheading="Indiquez votre code postal pour obtenir un tarif clair et un rapport exploitable."
                />
              </div>
            </div>
          </div>
        </section>

        {/* Intro + Interactive Diagnostic Widget */}
        <section className="py-12 sm:py-16 bg-white">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-6">
              <p className="text-xs sm:text-sm font-bold text-[#dc141b]">L&apos;essentiel à savoir</p>
              <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-[#041e4d] mt-1.5 text-balance">
                {guide.introHeading}
              </h2>

              <div className="mt-4 space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
                {guide.introParagraphs.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6">
              <ConseilDiagnosticWidget slug={guide.slug} />
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-12 sm:py-16 bg-[#f8fafd] border-y border-slate-100">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
            <div className="max-w-2xl">
              <p className="text-xs sm:text-sm font-bold text-[#dc141b]">Tableau comparatif</p>
              <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-[#041e4d] mt-1.5 text-balance">
                {guide.comparisonHeading}
              </h2>
              <p className="text-sm sm:text-base text-slate-600 mt-2 leading-relaxed">
                {guide.comparisonIntro}
              </p>
            </div>

            <div className="mt-7 overflow-x-auto rounded-xl border border-slate-200 shadow-xs bg-white">
              <table className="w-full text-left border-collapse text-sm">
                <thead>
                  <tr className="bg-[#041e4d] text-white">
                    <th className="py-3.5 px-4 font-display font-bold">{guide.comparisonCol1}</th>
                    <th className="py-3.5 px-4 font-display font-bold whitespace-nowrap">{guide.comparisonCol2}</th>
                    <th className="py-3.5 px-4 font-display font-bold">{guide.comparisonCol3}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {guide.comparisonRows.map((row) => (
                    <tr key={row.situation} className="hover:bg-slate-50 transition-colors">
                      <td className="py-3.5 px-4 font-bold text-[#041e4d]">{row.situation}</td>
                      <td className="py-3.5 px-4 font-bold text-[#dc141b] whitespace-nowrap">
                        {row.responsibleOrSafe}
                      </td>
                      <td className="py-3.5 px-4 text-slate-600 leading-relaxed">{row.explanation}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* 4 Steps + Key Box */}
        <section className="py-12 sm:py-16 bg-white">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto">
              <p className="text-xs sm:text-sm font-bold text-[#dc141b]">Marche à suivre</p>
              <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-[#041e4d] mt-1.5 text-balance">
                {guide.stepsHeading}
              </h2>
              <p className="text-sm sm:text-base text-slate-600 mt-2">{guide.stepsIntro}</p>
            </div>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {guide.steps.map((step) => (
                <div
                  key={step.step}
                  className="rounded-xl border border-slate-200 bg-[#f8fafd] p-5 flex flex-col"
                >
                  <span className="font-display text-2xl font-extrabold text-[#dc141b] tabular-nums">
                    {step.step}
                  </span>
                  <h3 className="font-display text-base font-extrabold text-[#041e4d] mt-2">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-2xl bg-[#041e4d] text-white p-6 sm:p-8">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-6 h-6 text-[#ef232a] shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-display text-lg sm:text-xl font-extrabold text-white">
                    {guide.legalOrSafetyBoxTitle}
                  </h3>
                  <ul className="mt-3 space-y-2.5 text-xs sm:text-sm text-slate-200 leading-relaxed">
                    {guide.legalOrSafetyBoxPoints.map((pt) => (
                      <li key={pt} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#ef232a] mt-2 shrink-0" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Readability Score Indicator & AI Semantic Keywords Checklist */}
        <ConseilReadabilityAndLsiWidget guide={guide} />

        {/* FAQs */}
        <section className="py-12 sm:py-16 bg-[#f8fafd] border-t border-slate-100">
          <div className="max-w-[900px] mx-auto px-4 sm:px-6">
            <div className="text-center">
              <p className="text-xs sm:text-sm font-bold text-[#dc141b]">Questions fréquentes</p>
              <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-[#041e4d] mt-1.5 text-balance">
                Vos questions sur ce sujet
              </h2>
            </div>
            <div className="mt-7">
              <ServiceFaqAccordion items={guide.faqs} />
            </div>
          </div>
        </section>

        {/* Related Services */}
        <section className="py-12 sm:py-16 bg-white border-t border-slate-100">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="text-xs sm:text-sm font-bold text-[#dc141b]">Intervention adaptée</p>
                <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-[#041e4d] mt-1">
                  Services associés recommandés
                </h2>
              </div>
              <Link
                href="/conseils"
                className="inline-flex items-center gap-1.5 text-sm font-bold text-[#041e4d] hover:text-[#dc141b] transition-colors"
              >
                <span>Tous nos conseils</span>
                <ArrowRight className="w-4 h-4 text-[#dc141b]" />
              </Link>
            </div>

            <div className="mt-7 grid grid-cols-1 md:grid-cols-3 gap-5">
              {relatedServices.map((rel) => (
                <article
                  key={rel.id}
                  className="group bg-[#f8fafd] rounded-xl border border-slate-200 overflow-hidden hover:shadow-md transition-shadow flex flex-col"
                >
                  <Link
                    href={`/services/${rel.id}`}
                    className="relative h-44 w-full bg-slate-100 block overflow-hidden"
                  >
                    <Image
                      src={rel.image}
                      alt={rel.imageAlt}
                      fill
                      loading="lazy"
                      decoding="async"
                      quality={IMAGE_QUALITY.card}
                      placeholder="blur"
                      blurDataURL={LIGHT_BLUR_DATA_URL}
                      referrerPolicy="no-referrer"
                      className="object-cover object-center group-hover:scale-[1.03] transition-transform duration-300"
                      sizes={SERVICE_IMAGE_SIZES.relatedCard}
                    />
                  </Link>
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <p className="text-xs font-bold text-emerald-700 tabular-nums">{rel.startingPrice}</p>
                      <h3 className="font-display text-base font-extrabold text-[#041e4d] group-hover:text-[#dc141b] transition-colors mt-1">
                        <Link href={`/services/${rel.id}`}>{rel.title}</Link>
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 mt-1.5 leading-relaxed">
                        {rel.shortDescription}
                      </p>
                    </div>
                    <div className="mt-4 pt-3 border-t border-slate-200/80">
                      <Link
                        href={`/services/${rel.id}`}
                        className="inline-flex items-center gap-1.5 text-sm font-bold text-[#041e4d] group-hover:text-[#dc141b] transition-colors"
                      >
                        <span>Voir ce service</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Suggested Reading (Autres guides conseillés) */}
        <section className="py-12 sm:py-16 bg-[#f8fafd] border-t border-slate-100">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="text-xs sm:text-sm font-bold text-[#dc141b]">Lectures recommandées</p>
                <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-[#041e4d] mt-1">
                  Autres guides et conseils pratiques
                </h2>
              </div>
              <Link
                href="/conseils"
                className="inline-flex items-center gap-1.5 text-sm font-bold text-[#041e4d] hover:text-[#dc141b] transition-colors"
              >
                <span>Tous nos articles</span>
                <ArrowRight className="w-4 h-4 text-[#dc141b]" />
              </Link>
            </div>

            <div className="mt-7 grid grid-cols-1 md:grid-cols-2 gap-5">
              {CONSEILS_GUIDES.filter((g) => g.slug !== guide.slug).map((other) => (
                <article
                  key={other.slug}
                  className="group bg-white rounded-xl border border-slate-200 hover:border-[#041e4d]/40 hover:shadow-md p-6 flex flex-col justify-between transition-all"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 text-xs font-semibold text-slate-500">
                      <span className="text-[#dc141b] font-bold">{other.categoryLabel}</span>
                      <span className="inline-flex items-center gap-1 tabular-nums">
                        <Clock className="w-3.5 h-3.5" />
                        <span>{other.readingTime}</span>
                      </span>
                    </div>

                    <h3 className="font-display text-lg sm:text-xl font-extrabold text-[#041e4d] group-hover:text-[#dc141b] transition-colors mt-2.5">
                      <Link href={`/conseils/${other.slug}`}>{other.h1}</Link>
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed line-clamp-2">
                      {other.heroLead}
                    </p>
                  </div>

                  <div className="mt-5 pt-3.5 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs text-slate-500">{other.updatedLabel}</span>
                    <Link
                      href={`/conseils/${other.slug}`}
                      className="inline-flex items-center gap-1 text-xs sm:text-sm font-bold text-[#041e4d] group-hover:text-[#dc141b] transition-colors"
                    >
                      <span>Lire le guide</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#dc141b]" />
                    </Link>
                  </div>
                </article>
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
