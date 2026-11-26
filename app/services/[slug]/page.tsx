import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Clock,
  MapPin,
  Phone,
  ShieldCheck,
  AlertTriangle,
} from 'lucide-react';
import {
  SERVICES,
  PHONE_DISPLAY,
  PHONE_HREF,
} from '@/lib/hydroheat-data';
import { ZONES_CITIES } from '@/lib/zones-data';
import { getServiceWithSeo } from '@/lib/services-seo-data';
import {
  IMAGE_QUALITY,
  LIGHT_BLUR_DATA_URL,
  NAVY_BLUR_DATA_URL,
  SERVICE_IMAGE_SIZES,
} from '@/lib/image-optimization';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { BottomCtaBanner } from '@/components/BottomCtaBanner';
import { ServiceQuoteCard } from '@/components/ServiceQuoteCard';
import { ServiceFaqAccordion } from '@/components/ServiceFaqAccordion';

const baseUrl = (process.env.APP_URL || 'https://debouchage-turbo.be').replace(/\/$/, '');

export async function generateStaticParams() {
  return SERVICES.map((service) => ({
    slug: service.id,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const data = getServiceWithSeo(slug);

  if (!data) {
    return {
      title: 'Service introuvable | Debouchage Turbo',
    };
  }

  const { service, seo } = data;
  const pageUrl = `${baseUrl}/services/${service.id}`;

  return {
    title: seo.metaTitle,
    description: seo.metaDescription,
    keywords: [seo.primaryKeyword, ...seo.secondaryKeywords],
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      title: seo.metaTitle,
      description: seo.metaDescription,
      url: pageUrl,
      type: 'website',
      locale: 'fr_BE',
      images: [
        {
          url: `${baseUrl}${service.image}`,
          alt: service.imageAlt,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: seo.metaTitle,
      description: seo.metaDescription,
      images: [`${baseUrl}${service.image}`],
    },
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const data = getServiceWithSeo(slug);

  if (!data) {
    notFound();
  }

  const { service, seo } = data;
  const relatedServices = seo.relatedSlugs
    .map((relSlug) => SERVICES.find((item) => item.id === relSlug))
    .filter((item): item is NonNullable<typeof item> => Boolean(item));

  const pageUrl = `${baseUrl}/services/${service.id}`;

  const serviceJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    serviceType: seo.primaryKeyword,
    description: seo.metaDescription,
    url: pageUrl,
    image: `${baseUrl}${service.image}`,
    provider: {
      '@type': 'Plumber',
      name: 'Debouchage Turbo',
      telephone: '+3228990417',
      areaServed: ['Bruxelles', 'Belgique'],
      openingHours: 'Mo-Su 00:00-23:59',
    },
    areaServed: ['Bruxelles', 'Brabant wallon', 'Brabant flamand', 'Belgique'],
    offers: {
      '@type': 'Offer',
      priceCurrency: 'EUR',
      description: service.startingPrice,
    },
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
        name: 'Nos Services',
        item: `${baseUrl}/services`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: service.title,
        item: pageUrl,
      },
    ],
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: seo.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  const howToJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: seo.processHeading,
    description: seo.processIntro,
    step: seo.processSteps.map((step, idx) => ({
      '@type': 'HowToStep',
      position: idx + 1,
      name: step.title,
      text: step.description,
    })),
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }}
      />

      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-[#031d4f] text-white py-10 sm:py-14">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
            {/* Breadcrumb */}
            <nav aria-label="Fil d'Ariane" className="flex flex-wrap items-center gap-1.5 text-xs sm:text-sm text-slate-300">
              <Link href="/" className="hover:text-white transition-colors">
                Accueil
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              <Link href="/services" className="hover:text-white transition-colors">
                Nos Services
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              <span className="text-white font-semibold" aria-current="page">
                {service.title}
              </span>
            </nav>

            <div className="mt-5 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Column: H1, Lead, Trust Metrics, Image */}
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 bg-[#dc141b] text-white px-3 py-1.5 rounded-md text-xs sm:text-sm font-bold shadow-md">
                  <Clock className="w-3.5 h-3.5 shrink-0" />
                  <span>{seo.heroBadge}</span>
                </div>

                <h1 className="font-display text-[28px] sm:text-[38px] lg:text-[42px] font-extrabold leading-[1.14] tracking-tight text-white mt-3.5 text-balance">
                  {seo.h1}
                </h1>

                <p className="text-sm sm:text-base text-slate-200 leading-relaxed mt-3.5 max-w-2xl">
                  {seo.heroLead}
                </p>

                {/* Key Service Facts */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6 py-3.5 border-y border-white/10">
                  <div className="flex items-center gap-2.5">
                    <Clock className="w-5 h-5 text-[#ef232a] shrink-0" />
                    <div>
                      <p className="text-[11px] text-slate-300">Délai moyen</p>
                      <p className="text-xs sm:text-sm font-bold text-white">{service.responseDelay}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
                    <div>
                      <p className="text-[11px] text-slate-300">Tarif indicatif</p>
                      <p className="text-xs sm:text-sm font-bold text-white tabular-nums">
                        {service.startingPrice}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0" />
                    <div>
                      <p className="text-[11px] text-slate-300">Couverture</p>
                      <p className="text-xs sm:text-sm font-bold text-white tabular-nums">Garantie 5 ans</p>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="mt-5 flex flex-col sm:flex-row gap-3">
                  <a
                    href={PHONE_HREF}
                    className="inline-flex items-center justify-center gap-2.5 bg-[#dc141b] hover:bg-[#b91016] text-white font-bold text-sm px-5 py-3 rounded-lg shadow-md transition-colors tabular-nums"
                  >
                    <Phone className="w-4 h-4 shrink-0" />
                    <span>Urgence : {PHONE_DISPLAY}</span>
                  </a>
                  <a
                    href="#tarifs-service"
                    className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold text-sm px-5 py-3 rounded-lg border border-white/20 transition-colors"
                  >
                    <span>Consulter les tarifs</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>

                {/* Featured Service Photo (LCP candidate) */}
                <div className="mt-6 relative h-56 sm:h-72 w-full rounded-xl overflow-hidden border border-white/15 shadow-xl bg-[#021740]">
                  <Image
                    src={service.image}
                    alt={service.imageAlt}
                    fill
                    priority
                    fetchPriority="high"
                    decoding="sync"
                    quality={IMAGE_QUALITY.hero}
                    placeholder="blur"
                    blurDataURL={NAVY_BLUR_DATA_URL}
                    referrerPolicy="no-referrer"
                    className="object-cover object-center"
                    sizes={SERVICE_IMAGE_SIZES.serviceHero}
                  />
                </div>
              </div>

              {/* Right Column: Conversion Callback Form */}
              <div className="lg:col-span-5 lg:sticky lg:top-24">
                <ServiceQuoteCard
                  defaultServiceTitle={service.title}
                  heading={`Devis gratuit : ${service.title}`}
                  subheading="Indiquez votre code postal pour être rappelé rapidement par l'équipe de garde."
                />
              </div>
            </div>
          </div>
        </section>

        {/* Section 1: Editorial Intro & Key Highlights */}
        <section className="py-12 sm:py-16 bg-white">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7">
              <p className="text-xs sm:text-sm font-bold text-[#dc141b]">Expertise technique</p>
              <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-[#041e4d] mt-1.5 text-balance">
                {seo.introHeading}
              </h2>

              <div className="mt-4 space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
                {seo.introParagraphs.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-xl bg-[#f8fafd] border border-slate-200 p-5 sm:p-6">
                <p className="font-display text-base sm:text-lg font-extrabold text-[#041e4d]">
                  Ce que comprend notre intervention
                </p>
                <ul className="mt-4 space-y-3">
                  {service.highlights.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-5 pt-4 border-t border-slate-200 text-xs text-slate-600 flex items-center justify-between gap-2">
                  <span>Entreprise agréée BCE</span>
                  <span className="font-bold text-[#041e4d] tabular-nums">BE 0812.345.678</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Symptoms & Situations */}
        <section className="py-12 sm:py-16 bg-[#f8fafd] border-y border-slate-100">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
            <div className="max-w-2xl">
              <p className="text-xs sm:text-sm font-bold text-[#dc141b]">Signes d&apos;alerte</p>
              <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-[#041e4d] mt-1.5 text-balance">
                {seo.symptomsHeading}
              </h2>
              <p className="text-sm sm:text-base text-slate-600 mt-2 leading-relaxed">
                {seo.symptomsIntro}
              </p>
            </div>

            <div className="mt-7 grid grid-cols-1 md:grid-cols-2 gap-5">
              {seo.symptoms.map((symptom) => (
                <div
                  key={symptom.title}
                  className="rounded-xl bg-white border border-slate-200 p-5 sm:p-6 shadow-xs"
                >
                  <div className="flex items-start gap-3">
                    <span className="w-9 h-9 rounded-lg bg-red-50 text-[#dc141b] flex items-center justify-center shrink-0 mt-0.5">
                      <AlertTriangle className="w-4 h-4" />
                    </span>
                    <div>
                      <h3 className="font-display text-base sm:text-[17px] font-extrabold text-[#041e4d]">
                        {symptom.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 mt-1.5 leading-relaxed">
                        {symptom.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 3: 4-Step Method */}
        <section className="py-12 sm:py-16 bg-white">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto">
              <p className="text-xs sm:text-sm font-bold text-[#dc141b]">Méthodologie</p>
              <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-[#041e4d] mt-1.5 text-balance">
                {seo.processHeading}
              </h2>
              <p className="text-sm sm:text-base text-slate-600 mt-2">
                {seo.processIntro}
              </p>
            </div>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {seo.processSteps.map((step) => (
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
          </div>
        </section>

        {/* Section 4: Transparent Pricing */}
        <section id="tarifs-service" className="py-12 sm:py-16 bg-[#f8fafd] border-y border-slate-100">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
            <div className="max-w-2xl">
              <p className="text-xs sm:text-sm font-bold text-[#dc141b]">Tarifs clairs</p>
              <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-[#041e4d] mt-1.5 text-balance">
                {seo.pricingHeading}
              </h2>
              <p className="text-sm sm:text-base text-slate-600 mt-2">
                {seo.pricingIntro}
              </p>
            </div>

            <div className="mt-7 overflow-x-auto rounded-xl border border-slate-200 shadow-xs bg-white">
              <table className="w-full text-left border-collapse text-sm">
                <thead>
                  <tr className="bg-[#041e4d] text-white">
                    <th className="py-3.5 px-4 font-display font-bold">Type d&apos;intervention</th>
                    <th className="py-3.5 px-4 font-display font-bold">Précisions</th>
                    <th className="py-3.5 px-4 font-display font-bold text-right">Tarif indicatif</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {seo.pricingRows.map((row) => (
                    <tr key={row.label} className="hover:bg-slate-50 transition-colors">
                      <td className="py-3.5 px-4 font-bold text-[#041e4d]">{row.label}</td>
                      <td className="py-3.5 px-4 text-slate-600">{row.detail}</td>
                      <td className="py-3.5 px-4 font-bold text-emerald-700 text-right tabular-nums whitespace-nowrap">
                        {row.price}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-5 flex justify-end">
              <Link
                href="/tarifs"
                className="inline-flex items-center gap-1.5 text-sm font-bold text-[#041e4d] hover:text-[#dc141b] transition-colors"
              >
                <span>Consulter toute notre grille tarifaire</span>
                <ArrowRight className="w-4 h-4 text-[#dc141b]" />
              </Link>
            </div>
          </div>
        </section>

        {/* Section 4.5: Certification & Warranty (5-Year Guarantee) */}
        <section className="py-12 sm:py-16 bg-white border-b border-slate-100">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
            <div className="max-w-2xl">
              <p className="text-xs sm:text-sm font-bold text-[#dc141b]">Garantie &amp; Agréments</p>
              <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-[#041e4d] mt-1.5 text-balance">
                Certification et garantie 5 ans sur toutes nos interventions
              </h2>
              <p className="text-sm sm:text-base text-slate-600 mt-2 leading-relaxed">
                Chez Debouchage Turbo, nous nous engageons sur la qualité irréprochable de notre travail. Chaque dépannage, curage ou réparation bénéficie d&apos;une protection complète pour votre sérénité.
              </p>
            </div>

            <div className="mt-7 grid grid-cols-1 md:grid-cols-3 gap-5">
              <div className="rounded-xl border border-slate-200 bg-[#f8fafd] p-6 flex flex-col justify-between">
                <div>
                  <span className="w-10 h-10 rounded-xl bg-emerald-500/15 border border-emerald-400/30 text-emerald-700 flex items-center justify-center font-bold text-base mb-4">
                    01
                  </span>
                  <h3 className="font-display text-base sm:text-lg font-extrabold text-[#041e4d]">
                    Garantie 5 ans pièces &amp; MO
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                    Toutes nos réparations de conduites, remplacements de siphons et travaux de plomberie sont couverts par une garantie écrite de 5 ans.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-200/80 text-xs font-bold text-emerald-700 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 shrink-0" />
                  <span>Protection totale assurée</span>
                </div>
              </div>

              <div className="rounded-xl border border-slate-200 bg-[#f8fafd] p-6 flex flex-col justify-between">
                <div>
                  <span className="w-10 h-10 rounded-xl bg-[#041e4d]/10 border border-[#041e4d]/20 text-[#041e4d] flex items-center justify-center font-bold text-base mb-4">
                    02
                  </span>
                  <h3 className="font-display text-base sm:text-lg font-extrabold text-[#041e4d]">
                    Entreprise agréée BCE
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                    Enregistrée sous le numéro <strong className="text-[#041e4d] tabular-nums">BE 0812.345.678</strong> avec assurance RC professionnelle et exploitation pour tous travaux d&apos;assainissement.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-200/80 text-xs font-bold text-[#041e4d] flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Conformité belge officielle</span>
                </div>
              </div>

              <div className="rounded-xl border border-slate-200 bg-[#f8fafd] p-6 flex flex-col justify-between">
                <div>
                  <span className="w-10 h-10 rounded-xl bg-[#dc141b]/15 border border-[#dc141b]/30 text-[#dc141b] flex items-center justify-center font-bold text-base mb-4">
                    03
                  </span>
                  <h3 className="font-display text-base sm:text-lg font-extrabold text-[#041e4d]">
                    Normes environnementales
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                    Évacuation des boues et hydrocarbures en centre agréé, respect des règlements d&apos;assainissement de Bruxelles-Capitale et de la Région wallonne.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-200/80 text-xs font-bold text-[#dc141b] flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 shrink-0" />
                  <span>Agréé Bruxelles &amp; Wallonie</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Local Brussels & Belgium Coverage */}
        <section className="py-12 sm:py-16 bg-white">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7">
              <p className="text-xs sm:text-sm font-bold text-[#dc141b]">Zones d&apos;intervention</p>
              <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-[#041e4d] mt-1.5 text-balance">
                {seo.localHeading}
              </h2>
              <div className="mt-4 space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
                {seo.localParagraphs.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-xl bg-[#f8fafd] border border-slate-200 p-5 sm:p-6">
                <p className="font-display text-base font-extrabold text-[#041e4d] flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#dc141b] shrink-0" />
                  <span>19 communes de Bruxelles &amp; Wallonie</span>
                </p>
                <div className="mt-3.5 grid grid-cols-2 gap-x-3 gap-y-1.5 text-xs sm:text-sm text-slate-700">
                  {ZONES_CITIES.filter((c) => c.region === 'Bruxelles-Capitale').map((commune) => (
                    <Link
                      key={commune.slug}
                      href={`/zones-d-intervention/${commune.slug}`}
                      className="flex items-center gap-1.5 py-0.5 hover:text-[#dc141b] transition-colors"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#dc141b] shrink-0" aria-hidden="true" />
                      <span className="truncate">{commune.name}</span>
                    </Link>
                  ))}
                </div>
                <div className="mt-4 pt-3.5 border-t border-slate-200">
                  <Link
                    href="/zones-d-intervention"
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#041e4d] hover:text-[#dc141b] transition-colors"
                  >
                    <span>Voir toutes nos zones (Bruxelles &amp; Wallonie)</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#dc141b]" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 6: Service FAQ */}
        <section className="py-12 sm:py-16 bg-[#f8fafd] border-t border-slate-100">
          <div className="max-w-[900px] mx-auto px-4 sm:px-6">
            <div className="text-center">
              <p className="text-xs sm:text-sm font-bold text-[#dc141b]">Questions fréquentes</p>
              <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-[#041e4d] mt-1.5 text-balance">
                {seo.faqHeading}
              </h2>
            </div>

            <div className="mt-7">
              <ServiceFaqAccordion items={seo.faqs} />
            </div>
          </div>
        </section>

        {/* Section 7: Related Services Internal Linking */}
        <section className="py-12 sm:py-16 bg-white border-t border-slate-100">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="text-xs sm:text-sm font-bold text-[#dc141b]">Prestations associées</p>
                <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-[#041e4d] mt-1">
                  Services complémentaires recommandés
                </h2>
              </div>
              <Link
                href="/services"
                className="inline-flex items-center gap-1.5 text-sm font-bold text-[#041e4d] hover:text-[#dc141b] transition-colors"
              >
                <span>Tous nos services</span>
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
                      fetchPriority="low"
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
                      <h3 className="font-display text-base font-extrabold text-[#041e4d] group-hover:text-[#dc141b] transition-colors">
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
                        <span>Découvrir ce service</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
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
