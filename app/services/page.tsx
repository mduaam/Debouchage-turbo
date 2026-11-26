import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Clock,
  Phone,
  ShieldCheck,
  Star,
  Wrench,
} from 'lucide-react';
import {
  SERVICES,
  PHONE_DISPLAY,
  PHONE_HREF,
  BRUSSELS_COMMUNES,
} from '@/lib/hydroheat-data';
import {
  IMAGE_QUALITY,
  LIGHT_BLUR_DATA_URL,
  SERVICE_IMAGE_SIZES,
} from '@/lib/image-optimization';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { BottomCtaBanner } from '@/components/BottomCtaBanner';
import { ServiceQuoteCard } from '@/components/ServiceQuoteCard';
import { BrusselsCoverageMap } from '@/components/BrusselsCoverageMap';
import { RegionalCoverageLinks } from '@/components/RegionalCoverageLinks';

const baseUrl = (process.env.APP_URL || 'https://debouchage-turbo.be').replace(/\/$/, '');

export const metadata: Metadata = {
  title: 'Nos Services de Débouchage à Bruxelles | Debouchage Turbo',
  description:
    'Découvrez nos 11 services de débouchage de canalisation, WC, baignoire, sterput, curage haute pression, chemisage sans tranchée, inspection caméra et fosse septique.',
  alternates: {
    canonical: `${baseUrl}/services`,
  },
  openGraph: {
    title: 'Nos Services de Débouchage à Bruxelles | Debouchage Turbo',
    description:
      'Solutions complètes de débouchage de canalisation, WC, évier, baignoire, sterput, égouts, chemisage, inspection caméra et vidange de fosse septique.',
    url: `${baseUrl}/services`,
    type: 'website',
    locale: 'fr_BE',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nos Services de Débouchage à Bruxelles | Debouchage Turbo',
    description:
      '11 prestations spécialisées en débouchage et assainissement à Bruxelles et en Wallonie 7j/7 – 24h/24. Tarifs annoncés avant départ.',
  },
};

const INTENT_GUIDES = [
  {
    title: 'Urgence sanitaire : WC, évier ou refoulement',
    description:
      'Votre cuvette menace de déborder ou votre évier de cuisine refoule lors de la vidange du lave-vaisselle ? Optez pour une intervention rapide sans casse.',
    links: [
      { href: '/services/debouchage-wc', label: 'Débouchage WC' },
      { href: '/services/debouchage-evier', label: 'Débouchage Évier' },
      { href: '/services/debouchage-baignoire-douche', label: 'Baignoire & Douche' },
      { href: '/services/depannage-urgent', label: 'Dépannage Urgent 24/7' },
    ],
  },
  {
    title: 'Canalisations principales, sterput & curage d’égouts',
    description:
      'Plusieurs sanitaires s’évacuent lentement, votre sterput de cour ou chambre de visite déborde ? L’hydrocurage haute pression jusqu’à 200 bars remet la conduite à neuf.',
    links: [
      { href: '/services/debouchage-canalisation', label: 'Débouchage de Canalisation' },
      { href: '/services/debouchage-sterput', label: 'Débouchage Sterput & Regard' },
      { href: '/services/curage-egouts', label: 'Curage & Égouts' },
    ],
  },
  {
    title: 'Diagnostic vidéo, chemisage & réparation',
    description:
      'Des bouchons reviennent régulièrement ou une fuite souterraine est suspectée ? Localisez l’anomalie par caméra et réparez par chemisage sans casser votre terrasse.',
    links: [
      { href: '/services/inspection-camera', label: 'Inspection Caméra' },
      { href: '/services/chemisage-reparation-egouts', label: 'Chemisage sans Tranchée' },
      { href: '/services/reparation-plomberie', label: 'Réparation plomberie générale' },
    ],
  },
  {
    title: 'Vidange de fosse septique & bacs à graisse',
    description:
      'Entretien périodique obligatoire, odeurs dans le jardin ou contrôle avant vente immobilière ? Pompage intégral avec évacuation en centre agréé.',
    links: [
      { href: '/services/vidange-fosse-septique', label: 'Vidange Fosse Septique' },
    ],
  },
];

export default function ServicesHubPage() {
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
    ],
  };

  const itemListJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Services de débouchage et assainissement Debouchage Turbo',
    itemListElement: SERVICES.map((service, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: service.title,
      url: `${baseUrl}/services/${service.id}`,
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
                Nos Services
              </span>
            </nav>

            <div className="mt-5 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7">
                <p className="text-xs sm:text-sm font-bold text-[#ef232a]">
                  Intervention 7j/7 – 24h/24 à Bruxelles et en Belgique
                </p>

                <h1 className="font-display text-[28px] sm:text-[38px] lg:text-[42px] font-extrabold leading-[1.14] tracking-tight text-white mt-2 text-balance">
                  Nos Services de Débouchage de Canalisation et Assainissement
                </h1>

                <p className="text-sm sm:text-base text-slate-200 leading-relaxed mt-3.5 max-w-2xl">
                  Que vous fassiez face à un WC bloqué en pleine nuit, un évier de cuisine engorgé, une colonne d’immeuble obstruée ou une fosse septique à vidanger, Debouchage Turbo déploie l’équipement adapté en moins de 30 minutes partout à Bruxelles.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6 pt-5 border-t border-white/10">
                  <div className="flex items-center gap-2.5">
                    <Clock className="w-5 h-5 text-[#ef232a] shrink-0" />
                    <div>
                      <p className="text-xs text-slate-300">Délai d&apos;arrivée</p>
                      <p className="text-sm font-bold text-white tabular-nums">≤ 30 min à Bruxelles</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
                    <div>
                      <p className="text-xs text-slate-300">Travail garanti</p>
                      <p className="text-sm font-bold text-white tabular-nums">5 Ans pièces &amp; MO</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Star className="w-5 h-5 text-amber-400 fill-amber-400 shrink-0" />
                    <div>
                      <p className="text-xs text-slate-300">Satisfaction clients</p>
                      <p className="text-sm font-bold text-white tabular-nums">+4.8/5 (2500+ avis)</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="bg-white/5 border border-white/15 rounded-xl p-5 sm:p-6">
                  <p className="font-display text-base sm:text-lg font-bold text-white">
                    Besoin d&apos;une intervention immédiate ?
                  </p>
                  <p className="text-xs sm:text-sm text-slate-300 mt-1.5 leading-relaxed">
                    Nos opérateurs évaluent votre situation par téléphone et vous communiquent le tarif clair avant le départ du camion.
                  </p>
                  <div className="mt-4 flex flex-col sm:flex-row lg:flex-col gap-3">
                    <a
                      href={PHONE_HREF}
                      className="w-full h-11 bg-[#dc141b] hover:bg-[#b91016] text-white font-bold text-sm rounded-lg inline-flex items-center justify-center gap-2 shadow-md transition-colors tabular-nums"
                    >
                      <Phone className="w-4 h-4 shrink-0" />
                      <span>Appeler le {PHONE_DISPLAY}</span>
                    </a>
                    <a
                      href="#devis-form"
                      className="w-full h-11 bg-white hover:bg-slate-100 text-[#041e4d] font-bold text-sm rounded-lg inline-flex items-center justify-center gap-2 transition-colors"
                    >
                      <span>Demander un rappel gratuit</span>
                      <ArrowRight className="w-4 h-4 text-[#dc141b]" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Search-Intent Mapping Guide */}
        <section className="py-12 sm:py-14 bg-white border-b border-slate-100">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
            <div className="max-w-2xl">
              <p className="text-xs sm:text-sm font-bold text-[#dc141b]">Orientation rapide</p>
              <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-[#041e4d] mt-1.5 text-balance">
                Choisir l&apos;intervention adaptée à votre situation
              </h2>
              <p className="text-sm sm:text-base text-slate-600 mt-2 leading-relaxed">
                Chaque obstruction nécessite une technique mécanique ou hydraulique précise pour libérer le conduit sans abîmer vos installations sanitaires.
              </p>
            </div>

            <div className="mt-7 grid grid-cols-1 md:grid-cols-2 gap-5">
              {INTENT_GUIDES.map((guide) => (
                <div
                  key={guide.title}
                  className="rounded-xl border border-slate-200 bg-[#f8fafd] p-5 sm:p-6 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-start gap-3">
                      <span className="w-9 h-9 rounded-lg bg-[#041e4d] text-white flex items-center justify-center shrink-0 mt-0.5">
                        <Wrench className="w-4 h-4" />
                      </span>
                      <div>
                        <h3 className="font-display text-base sm:text-lg font-extrabold text-[#041e4d]">
                          {guide.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-600 mt-1.5 leading-relaxed">
                          {guide.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 pt-3.5 border-t border-slate-200/80 flex flex-wrap gap-x-4 gap-y-2">
                    {guide.links.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="inline-flex items-center gap-1 text-xs sm:text-sm font-bold text-[#041e4d] hover:text-[#dc141b] transition-colors"
                      >
                        <span>{link.label}</span>
                        <ArrowRight className="w-3.5 h-3.5 text-[#dc141b]" />
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Complete 11-Service Catalog */}
        <section className="py-12 sm:py-16 bg-[#f8fafd]">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto">
              <p className="text-xs sm:text-sm font-bold text-[#dc141b]">Catalogue complet</p>
              <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-[#041e4d] mt-1.5 text-balance">
                Nos 11 prestations spécialisées à Bruxelles et en Wallonie
              </h2>
              <p className="text-sm sm:text-base text-slate-600 mt-2">
                Consultez le détail technique, la méthode d&apos;intervention et la grille tarifaire de chaque service.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              {SERVICES.map((service, index) => (
                <article
                  key={service.id}
                  className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-md transition-shadow flex flex-col sm:flex-row"
                >
                  <Link
                    href={`/services/${service.id}`}
                    className="relative h-52 sm:h-auto sm:w-48 lg:w-52 bg-slate-100 shrink-0 block overflow-hidden"
                  >
                    <Image
                      src={service.image}
                      alt={service.imageAlt}
                      fill
                      priority={index < 2}
                      loading={index < 2 ? 'eager' : 'lazy'}
                      decoding="async"
                      quality={index < 2 ? IMAGE_QUALITY.hero : IMAGE_QUALITY.card}
                      placeholder="blur"
                      blurDataURL={LIGHT_BLUR_DATA_URL}
                      referrerPolicy="no-referrer"
                      className="object-cover object-center hover:scale-[1.03] transition-transform duration-300"
                      sizes={SERVICE_IMAGE_SIZES.catalogCard}
                    />
                  </Link>

                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-semibold">
                        <span className="text-emerald-700 tabular-nums">{service.startingPrice}</span>
                        <span className="text-slate-500">{service.responseDelay}</span>
                      </div>

                      <h3 className="font-display text-lg font-extrabold text-[#041e4d] mt-1.5">
                        <Link
                          href={`/services/${service.id}`}
                          className="hover:text-[#dc141b] transition-colors"
                        >
                          {service.title}
                        </Link>
                      </h3>

                      <p className="text-xs sm:text-sm text-slate-600 mt-1.5 leading-relaxed">
                        {service.shortDescription}
                      </p>

                      <ul className="mt-3 space-y-1.5">
                        {service.highlights.slice(0, 2).map((point) => (
                          <li key={point} className="flex items-start gap-2 text-xs text-slate-700">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-4 pt-3 border-t border-slate-100">
                      <Link
                        href={`/services/${service.id}`}
                        className="inline-flex items-center gap-1.5 text-sm font-bold text-[#041e4d] hover:text-[#dc141b] transition-colors"
                      >
                        <span>Voir la fiche complète &amp; tarifs</span>
                        <ArrowRight className="w-4 h-4 text-[#dc141b]" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Transparent Pricing Comparison Table */}
        <section className="py-12 sm:py-16 bg-white border-y border-slate-100">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
            <div className="max-w-2xl">
              <p className="text-xs sm:text-sm font-bold text-[#dc141b]">Transparence tarifaire</p>
              <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-[#041e4d] mt-1.5 text-balance">
                Grille indicative des tarifs et délais d&apos;intervention
              </h2>
              <p className="text-sm sm:text-base text-slate-600 mt-2">
                Nos tarifs sont confirmés par téléphone avant tout déplacement. Aucun supplément imprévu à l&apos;issue du chantier.
              </p>
            </div>

            <div className="mt-7 overflow-x-auto rounded-xl border border-slate-200 shadow-xs">
              <table className="w-full text-left border-collapse text-sm">
                <thead>
                  <tr className="bg-[#041e4d] text-white">
                    <th className="py-3.5 px-4 font-display font-bold">Prestation</th>
                    <th className="py-3.5 px-4 font-display font-bold">Délai d&apos;intervention</th>
                    <th className="py-3.5 px-4 font-display font-bold text-right">Tarif indicatif</th>
                    <th className="py-3.5 px-4 font-display font-bold text-right">Détail</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 bg-white">
                  {SERVICES.map((service) => (
                    <tr key={service.id} className="hover:bg-slate-50 transition-colors">
                      <td className="py-3.5 px-4 font-bold text-[#041e4d]">{service.title}</td>
                      <td className="py-3.5 px-4 text-slate-600">{service.responseDelay}</td>
                      <td className="py-3.5 px-4 font-bold text-emerald-700 text-right tabular-nums whitespace-nowrap">
                        {service.startingPrice}
                      </td>
                      <td className="py-3.5 px-4 text-right whitespace-nowrap">
                        <Link
                          href={`/services/${service.id}`}
                          className="inline-flex items-center gap-1 font-bold text-[#dc141b] hover:underline"
                        >
                          <span>Consulter</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Local Coverage + Quote Form */}
        <section className="py-12 sm:py-16 bg-[#f8fafd]">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-6 space-y-4">
              <p className="text-xs sm:text-sm font-bold text-[#dc141b]">Couverture locale</p>
              <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-[#041e4d] text-balance">
                Pourquoi confier votre débouchage à Debouchage Turbo ?
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Depuis plus de 20 ans, nos techniciens interviennent chez les particuliers, copropriétés, commerces Horeca et entreprises dans les 19 communes de Bruxelles-Capitale ainsi que dans le Brabant wallon, le Brabant flamand et les grandes agglomérations belges.
              </p>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Chaque camion embarque des unités d&apos;hydrocurage haute pression, des furets électriques rotatifs, des pompes d&apos;aspiration et des caméras endoscopiques HD. Cette autonomie technique nous permet de résoudre plus de 95 % des blocages dès la première visite, sans recours aux déboucheurs chimiques corrosifs.
              </p>

              <div className="pt-2">
                <p className="text-xs font-bold uppercase tracking-wide text-slate-500 mb-2.5">
                  Communes bruxelloises desservies en ≤ 30 min
                </p>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  {BRUSSELS_COMMUNES.slice(0, 19).join(' · ')}
                </p>
              </div>
            </div>

            <div className="lg:col-span-6">
              <ServiceQuoteCard
                heading="Demandez votre devis gratuit"
                subheading="Indiquez votre code postal belge pour être rappelé par l'équipe de votre secteur."
              />
            </div>
          </div>
        </section>

        <BrusselsCoverageMap variant="services" />

        <RegionalCoverageLinks variant="subtle" />

        <BottomCtaBanner />
      </main>

      <Footer />
    </div>
  );
}
