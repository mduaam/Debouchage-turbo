'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  Phone,
  Scale,
  ShieldCheck,
} from 'lucide-react';
import { PHONE_DISPLAY, PHONE_HREF } from '@/lib/hydroheat-data';

interface ConseilDiagnosticWidgetProps {
  slug: string;
}

export function ConseilDiagnosticWidget({ slug }: ConseilDiagnosticWidgetProps) {
  if (slug === 'locataire-ou-proprietaire') {
    return <TenantLandlordChecker />;
  }
  if (slug === 'bruit-glouglou-canalisation-causes-solutions') {
    return <GlouglouDiagnosticChecker />;
  }
  if (slug === 'comment-savoir-si-fosse-septique-est-pleine') {
    return <FosseDiagnosticChecker />;
  }
  return <NaturalVsAcidChecker />;
}

function TenantLandlordChecker() {
  const [region, setRegion] = useState<'bruxelles' | 'wallonie'>('bruxelles');
  const [location, setLocation] = useState<'siphon' | 'wc' | 'colonne' | 'racines'>('siphon');
  const [timing, setTiming] = useState<'recent' | 'normal'>('normal');

  const getVerdict = () => {
    if (timing === 'recent') {
      return {
        payer: 'À charge du Propriétaire (Bailleur)',
        tone: 'emerald' as const,
        summary:
          region === 'bruxelles'
            ? 'En Région bruxelloise, le bailleur doit délivrer un logement en bon état. Un bouchon survenu dès les premiers jours relève d’un défaut préexistant.'
            : 'En Wallonie, le décret bail impose au propriétaire de remettre un bien dont les évacuations fonctionnent correctement dès l’entrée.',
        actionLabel: 'Demander une inspection caméra & facture détaillée',
        serviceHref: '/services/inspection-camera',
      };
    }

    if (location === 'colonne') {
      return {
        payer: 'À charge du Propriétaire / Syndic (ACP)',
        tone: 'emerald' as const,
        summary:
          'Une colonne montante commune ou un collecteur d’immeuble relève des parties communes (syndic / propriétaire), sauf preuve de faute isolée d’un occupant.',
        actionLabel: 'Planifier un curage avec rapport syndic',
        serviceHref: '/services/curage-egouts',
      };
    }

    if (location === 'racines') {
      return {
        payer: 'À charge du Propriétaire (et/ou Assurance)',
        tone: 'emerald' as const,
        summary:
          'L’intrusion de racines, une cassure de tuyau ou une contre-pente relèvent de la vétusté ou du gros œuvre. Faites établir un rapport caméra pour être remboursé.',
        actionLabel: 'Réserver un diagnostic caméra pour preuve',
        serviceHref: '/services/inspection-camera',
      };
    }

    return {
      payer: 'En principe à charge du Locataire',
      tone: 'navy' as const,
      summary:
        location === 'wc'
          ? 'Un bouchon localisé dans la cuvette ou le premier coude (papier, lingettes, objet) relève de l’usage courant, sauf défaut structurel prouvé.'
          : 'Le nettoyage des bondes, siphons d’évier, lavabo ou douche relève de l’entretien locatif courant dès 75 € HTVA.',
      actionLabel: 'Voir le tarif forfaitaire dès 75 € HTVA',
      serviceHref: '/tarifs',
    };
  };

  const verdict = getVerdict();

  return (
    <div className="rounded-2xl bg-[#f8fafd] border border-slate-200 p-5 sm:p-6 shadow-xs">
      <div className="flex items-start gap-3">
        <span className="w-10 h-10 rounded-xl bg-[#041e4d] text-white flex items-center justify-center shrink-0">
          <Scale className="w-5 h-5" />
        </span>
        <div>
          <p className="text-xs font-bold text-[#dc141b]">Simulateur express · Droit belge</p>
          <h3 className="font-display text-lg sm:text-xl font-extrabold text-[#041e4d] mt-0.5">
            Qui paie le débouchage dans votre situation ?
          </h3>
        </div>
      </div>

      <div className="mt-5 space-y-4">
        {/* Step 1: Region */}
        <div>
          <p className="text-xs font-bold text-slate-600 mb-2">1. Où se situe le logement ?</p>
          <div className="grid grid-cols-2 gap-2">
            <button
              type="button"
              onClick={() => setRegion('bruxelles')}
              className={`px-3 py-2 rounded-lg text-xs sm:text-sm font-bold border transition-colors cursor-pointer ${
                region === 'bruxelles'
                  ? 'bg-[#041e4d] text-white border-[#041e4d]'
                  : 'bg-white text-slate-700 border-slate-200 hover:border-[#041e4d]/40'
              }`}
            >
              Bruxelles-Capitale
            </button>
            <button
              type="button"
              onClick={() => setRegion('wallonie')}
              className={`px-3 py-2 rounded-lg text-xs sm:text-sm font-bold border transition-colors cursor-pointer ${
                region === 'wallonie'
                  ? 'bg-[#041e4d] text-white border-[#041e4d]'
                  : 'bg-white text-slate-700 border-slate-200 hover:border-[#041e4d]/40'
              }`}
            >
              Wallonie
            </button>
          </div>
        </div>

        {/* Step 2: Location */}
        <div>
          <p className="text-xs font-bold text-slate-600 mb-2">2. Quel élément est bloqué ?</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {[
              { id: 'siphon', label: 'Évier, lavabo ou douche' },
              { id: 'wc', label: 'WC privatif bouché' },
              { id: 'colonne', label: 'Colonne d’immeuble / plusieurs appart.' },
              { id: 'racines', label: 'Égout cassé, racines ou récidive' },
            ].map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setLocation(item.id as typeof location)}
                className={`px-3 py-2 rounded-lg text-xs font-bold border text-left transition-colors cursor-pointer ${
                  location === item.id
                    ? 'bg-[#041e4d] text-white border-[#041e4d]'
                    : 'bg-white text-slate-700 border-slate-200 hover:border-[#041e4d]/40'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>

        {/* Step 3: Entry timing */}
        <div>
          <p className="text-xs font-bold text-slate-600 mb-2">3. Date d’entrée dans les lieux</p>
          <div className="grid grid-cols-2 gap-2">
            <button
              type="button"
              onClick={() => setTiming('normal')}
              className={`px-3 py-2 rounded-lg text-xs font-bold border transition-colors cursor-pointer ${
                timing === 'normal'
                  ? 'bg-[#041e4d] text-white border-[#041e4d]'
                  : 'bg-white text-slate-700 border-slate-200 hover:border-[#041e4d]/40'
              }`}
            >
              Plus de 15 jours d’occupation
            </button>
            <button
              type="button"
              onClick={() => setTiming('recent')}
              className={`px-3 py-2 rounded-lg text-xs font-bold border transition-colors cursor-pointer ${
                timing === 'recent'
                  ? 'bg-[#041e4d] text-white border-[#041e4d]'
                  : 'bg-white text-slate-700 border-slate-200 hover:border-[#041e4d]/40'
              }`}
            >
              Moins de 15 jours (entrée récente)
            </button>
          </div>
        </div>
      </div>

      {/* Verdict Box */}
      <div
        className={`mt-5 rounded-xl p-4 border ${
          verdict.tone === 'emerald'
            ? 'bg-emerald-50 border-emerald-200 text-emerald-950'
            : 'bg-white border-slate-200 text-slate-900'
        }`}
      >
        <div className="flex items-start gap-2.5">
          <CheckCircle2
            className={`w-5 h-5 shrink-0 mt-0.5 ${
              verdict.tone === 'emerald' ? 'text-emerald-600' : 'text-[#041e4d]'
            }`}
          />
          <div>
            <p className="font-display text-base font-extrabold">{verdict.payer}</p>
            <p className="text-xs sm:text-sm opacity-90 mt-1 leading-relaxed">{verdict.summary}</p>
          </div>
        </div>

        <div className="mt-4 flex flex-col sm:flex-row gap-2.5">
          <a
            href={PHONE_HREF}
            className="inline-flex items-center justify-center gap-2 bg-[#dc141b] hover:bg-[#b91016] text-white font-bold text-xs sm:text-sm px-4 py-2.5 rounded-lg transition-colors tabular-nums"
          >
            <Phone className="w-4 h-4 shrink-0" />
            <span>Avis pro : {PHONE_DISPLAY}</span>
          </a>
          <Link
            href={verdict.serviceHref}
            className="inline-flex items-center justify-center gap-1.5 bg-white hover:bg-slate-100 text-[#041e4d] font-bold text-xs sm:text-sm px-4 py-2.5 rounded-lg border border-slate-200 transition-colors"
          >
            <span>{verdict.actionLabel}</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#dc141b]" />
          </Link>
        </div>
      </div>
    </div>
  );
}

function NaturalVsAcidChecker() {
  const [symptom, setSymptom] = useState<'slow' | 'stagnant' | 'multi' | 'acid-used'>('slow');

  const adviceMap = {
    slow: {
      badge: 'Méthode naturelle adaptée',
      title: 'Testez le nettoyage du siphon + bicarbonate et vinaigre blanc',
      description:
        'Si l’eau s’écoule encore lentement dans un seul lavabo ou évier, nettoyez le siphon et utilisez 100 g de bicarbonate avec 20 cl de vinaigre blanc et eau chaude.',
      danger: false,
      ctaHref: '/services/debouchage-evier',
      ctaText: 'Si ça persiste : débouchage évier dès 75 €',
    },
    stagnant: {
      badge: 'Évitez tout déboucheur chimique',
      title: 'Passez directement à la ventouse ou au furet mécanique',
      description:
        'Dans une eau stagnante, l’acide chlorhydrique ou la soude ne circule pas : ils stagnent au niveau du siphon, chauffent et risquent de déformer le PVC.',
      danger: true,
      ctaHref: '/services/debouchage-baignoire-douche',
      ctaText: 'Intervention mécanique sans chimie dès 75 €',
    },
    multi: {
      badge: 'Obstruction sur colonne principale',
      title: 'Appelez un hydrocureur haute pression — le DIY est inefficace',
      description:
        'Lorsque l’eau d’un sanitaire refoule dans un autre (douche, WC ou sterput), le bouchon se situe plusieurs mètres plus loin dans l’égouttage.',
      danger: true,
      ctaHref: '/services/debouchage-canalisation',
      ctaText: 'Hydrocurage haute pression 200 bars',
    },
    'acid-used': {
      badge: 'Précaution sécurité chimique',
      title: 'Ne rajoutez aucun produit et prévenez notre technicien',
      description:
        'Ne mélangez surtout pas acide chlorhydrique et eau de Javel (gaz toxique). Ventilez la pièce et appelez-nous : nos équipes interviennent avec équipement de protection.',
      danger: true,
      ctaHref: '/services/depannage-urgent',
      ctaText: 'Dépannage sécurisé 24/7',
    },
  };

  const current = adviceMap[symptom];

  return (
    <div className="rounded-2xl bg-[#f8fafd] border border-slate-200 p-5 sm:p-6 shadow-xs">
      <div className="flex items-start gap-3">
        <span className="w-10 h-10 rounded-xl bg-[#041e4d] text-white flex items-center justify-center shrink-0">
          <ShieldCheck className="w-5 h-5" />
        </span>
        <div>
          <p className="text-xs font-bold text-[#dc141b]">Diagnostic sécurité tuyauterie</p>
          <h3 className="font-display text-lg sm:text-xl font-extrabold text-[#041e4d] mt-0.5">
            Méthode naturelle ou intervention professionnelle ?
          </h3>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2">
        {[
          { id: 'slow', label: 'Écoulement lent dans 1 seul évier/douche' },
          { id: 'stagnant', label: 'Eau totalement bloquée et stagnante' },
          { id: 'multi', label: 'Refoulement dans plusieurs sanitaires' },
          { id: 'acid-used', label: 'J’ai déjà versé de l’acide / déboucheur' },
        ].map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setSymptom(item.id as typeof symptom)}
            className={`px-3 py-2.5 rounded-lg text-xs font-bold border text-left transition-colors cursor-pointer ${
              symptom === item.id
                ? 'bg-[#041e4d] text-white border-[#041e4d]'
                : 'bg-white text-slate-700 border-slate-200 hover:border-[#041e4d]/40'
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>

      <div
        className={`mt-5 rounded-xl p-4 border ${
          current.danger
            ? 'bg-amber-50 border-amber-200 text-amber-950'
            : 'bg-emerald-50 border-emerald-200 text-emerald-950'
        }`}
      >
        <div className="flex items-start gap-2.5">
          {current.danger ? (
            <AlertTriangle className="w-5 h-5 text-[#dc141b] shrink-0 mt-0.5" />
          ) : (
            <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
          )}
          <div>
            <p className="text-xs font-bold uppercase tracking-wide">{current.badge}</p>
            <p className="font-display text-base font-extrabold mt-0.5">{current.title}</p>
            <p className="text-xs sm:text-sm opacity-90 mt-1 leading-relaxed">{current.description}</p>
          </div>
        </div>

        <div className="mt-4 flex flex-col sm:flex-row gap-2.5">
          <a
            href={PHONE_HREF}
            className="inline-flex items-center justify-center gap-2 bg-[#dc141b] hover:bg-[#b91016] text-white font-bold text-xs sm:text-sm px-4 py-2.5 rounded-lg transition-colors tabular-nums"
          >
            <Phone className="w-4 h-4 shrink-0" />
            <span>Urgence : {PHONE_DISPLAY}</span>
          </a>
          <Link
            href={current.ctaHref}
            className="inline-flex items-center justify-center gap-1.5 bg-white hover:bg-slate-100 text-[#041e4d] font-bold text-xs sm:text-sm px-4 py-2.5 rounded-lg border border-slate-200 transition-colors"
          >
            <span>{current.ctaText}</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#dc141b]" />
          </Link>
        </div>
      </div>
    </div>
  );
}

function GlouglouDiagnosticChecker() {
  const [trigger, setTrigger] = useState<'machine' | 'wc' | 'odeur' | 'immeuble'>('machine');

  const adviceMap = {
    machine: {
      badge: 'Dépression de vidange',
      title: 'Bouchon partiel sur la conduite sous évier',
      description:
        'L’eau de vidange rapide sature le tuyau encombré de dépôts savonneux et aspire l’air par l’évier le plus proche. Un nettoyage de siphon et un furet résolvent souvent le problème.',
      ctaText: 'Débouchage canalisation dès 75 €',
      ctaHref: '/services/debouchage-canalisation',
    },
    wc: {
      badge: 'Problème de ventilation de toit',
      title: 'Évent de décompression ou chapeau de toit bouché',
      description:
        'Tirer la chasse aspire la garde d’eau de la douche car l’air ne circule plus par le toit. Une inspection d’évent ou un clapet anti-vide sous lavabo compense la pression.',
      ctaText: 'Inspection caméra & diagnostic',
      ctaHref: '/services/inspection-camera',
    },
    odeur: {
      badge: 'Désiphonage régulier',
      title: 'Garde d’eau asséchée et remontée de gaz toxiques',
      description:
        'Sans barrière d’eau dans le siphon, le sulfure d’hydrogène remonte dans vos pièces de vie. Un équilibreur de pression ou un curage complet restaure la garde d’eau.',
      ctaText: 'Curage colonne haute pression',
      ctaHref: '/services/curage-egouts',
    },
    immeuble: {
      badge: 'Collecteur vertical encrassé',
      title: 'Entartrage progressif de la colonne commune',
      description:
        'Lorsque le bruit résonne à plusieurs étages, les parois internes de la chute sont réduites par le tartre et nécessitent un hydrocurage professionnel.',
      ctaText: 'Curage hydrodynamique collectif',
      ctaHref: '/services/curage-egouts',
    },
  };

  const current = adviceMap[trigger];

  return (
    <div className="rounded-2xl border border-slate-200 bg-[#f8fafd] p-6 shadow-xs">
      <div className="flex items-center gap-2">
        <Scale className="w-5 h-5 text-[#dc141b]" />
        <h3 className="font-display text-lg font-bold text-[#041e4d]">
          Diagnostic interactif : Quel est votre bruit ?
        </h3>
      </div>
      <p className="text-xs text-slate-600 mt-1">
        Sélectionnez le moment où survient le gargouillement pour identifier la cause exacte.
      </p>

      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2">
        <button
          type="button"
          onClick={() => setTrigger('machine')}
          className={`text-left p-3 rounded-xl border text-xs font-semibold transition-all cursor-pointer ${
            trigger === 'machine'
              ? 'bg-[#041e4d] text-white border-[#041e4d]'
              : 'bg-white text-slate-700 border-slate-200 hover:border-[#041e4d]/40'
          }`}
        >
          Quand la machine à laver vidange
        </button>
        <button
          type="button"
          onClick={() => setTrigger('wc')}
          className={`text-left p-3 rounded-xl border text-xs font-semibold transition-all cursor-pointer ${
            trigger === 'wc'
              ? 'bg-[#041e4d] text-white border-[#041e4d]'
              : 'bg-white text-slate-700 border-slate-200 hover:border-[#041e4d]/40'
          }`}
        >
          Quand on tire la chasse d’eau
        </button>
        <button
          type="button"
          onClick={() => setTrigger('odeur')}
          className={`text-left p-3 rounded-xl border text-xs font-semibold transition-all cursor-pointer ${
            trigger === 'odeur'
              ? 'bg-[#041e4d] text-white border-[#041e4d]'
              : 'bg-white text-slate-700 border-slate-200 hover:border-[#041e4d]/40'
          }`}
        >
          Glouglou permanent avec odeurs
        </button>
        <button
          type="button"
          onClick={() => setTrigger('immeuble')}
          className={`text-left p-3 rounded-xl border text-xs font-semibold transition-all cursor-pointer ${
            trigger === 'immeuble'
              ? 'bg-[#041e4d] text-white border-[#041e4d]'
              : 'bg-white text-slate-700 border-slate-200 hover:border-[#041e4d]/40'
          }`}
        >
          Dans plusieurs logements / étages
        </button>
      </div>

      <div className="mt-5 rounded-xl p-4 border bg-emerald-50 border-emerald-200 text-emerald-950">
        <div className="flex items-start gap-2.5">
          <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
          <div>
            <p className="text-xs font-bold uppercase tracking-wide">{current.badge}</p>
            <p className="font-display text-base font-extrabold mt-0.5">{current.title}</p>
            <p className="text-xs sm:text-sm opacity-90 mt-1 leading-relaxed">{current.description}</p>
          </div>
        </div>

        <div className="mt-4 flex flex-col sm:flex-row gap-2.5">
          <a
            href={PHONE_HREF}
            className="inline-flex items-center justify-center gap-2 bg-[#dc141b] hover:bg-[#b91016] text-white font-bold text-xs sm:text-sm px-4 py-2.5 rounded-lg transition-colors tabular-nums"
          >
            <Phone className="w-4 h-4 shrink-0" />
            <span>Conseil direct : {PHONE_DISPLAY}</span>
          </a>
          <Link
            href={current.ctaHref}
            className="inline-flex items-center justify-center gap-1.5 bg-white hover:bg-slate-100 text-[#041e4d] font-bold text-xs sm:text-sm px-4 py-2.5 rounded-lg border border-slate-200 transition-colors"
          >
            <span>{current.ctaText}</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#dc141b]" />
          </Link>
        </div>
      </div>
    </div>
  );
}

function FosseDiagnosticChecker() {
  const [level, setLevel] = useState<'boues' | 'odeurs' | 'refoulement' | 'date'>('boues');

  const adviceMap = {
    boues: {
      badge: 'Règle des 50 % de boues',
      title: 'Vidange impérative par camion hydrocureur',
      description:
        'Lorsque la hauteur des boues atteint la moitié du volume de la fosse, le drain de dispersion risque un colmatage irréversible. Un pompage avec bordereau de dépotage SPGE s’impose.',
      ctaText: 'Vidange fosse septique dès 250 €',
      ctaHref: '/services/vidange-fosse-septique',
    },
    odeurs: {
      badge: 'Dérèglement bactérien',
      title: 'Croûte superficielle épaisse ou bactéries affaiblies',
      description:
        'Les odeurs d’œuf pourri indiquent souvent une surcharge ou un arrêt de la flore bactérienne. Un curage du bac dégraisseur et un réensemencement biologique rééquilibrent la fosse.',
      ctaText: 'Vidange bac dégraisseur',
      ctaHref: '/services/vidange-fosse-septique',
    },
    refoulement: {
      badge: 'Urgence sanitaire critique',
      title: 'Fosse pleine à saturation ou collecteur bouché',
      description:
        'L’eau qui remonte dans les toilettes du bas signale un blocage complet. Notre camion de pompage intervient en urgence 7j/7 avec aspiration et remise en route.',
      ctaText: 'Pompage d’urgence 24/7',
      ctaHref: '/services/vidange-fosse-septique',
    },
    date: {
      badge: 'Entretien réglementaire Wallonie',
      title: 'Fréquence moyenne atteinte (4 à 5 ans)',
      description:
        'Pour un foyer de 4 personnes, la vidange doit être effectuée tous les 4 à 5 ans conformément aux recommandations de la SPGE et de l’environnement wallon.',
      ctaText: 'Demander un devis vidange',
      ctaHref: '/services/vidange-fosse-septique',
    },
  };

  const current = adviceMap[level];

  return (
    <div className="rounded-2xl border border-slate-200 bg-[#f8fafd] p-6 shadow-xs">
      <div className="flex items-center gap-2">
        <ShieldCheck className="w-5 h-5 text-emerald-600" />
        <h3 className="font-display text-lg font-bold text-[#041e4d]">
          Diagnostic Fosse Septique (Wallonie)
        </h3>
      </div>
      <p className="text-xs text-slate-600 mt-1">
        Évaluez la situation de votre cuve pour déterminer si une vidange est nécessaire.
      </p>

      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2">
        <button
          type="button"
          onClick={() => setLevel('boues')}
          className={`text-left p-3 rounded-xl border text-xs font-semibold transition-all cursor-pointer ${
            level === 'boues'
              ? 'bg-[#041e4d] text-white border-[#041e4d]'
              : 'bg-white text-slate-700 border-slate-200 hover:border-[#041e4d]/40'
          }`}
        >
          Hauteur des boues &gt; 50 %
        </button>
        <button
          type="button"
          onClick={() => setLevel('odeurs')}
          className={`text-left p-3 rounded-xl border text-xs font-semibold transition-all cursor-pointer ${
            level === 'odeurs'
              ? 'bg-[#041e4d] text-white border-[#041e4d]'
              : 'bg-white text-slate-700 border-slate-200 hover:border-[#041e4d]/40'
          }`}
        >
          Odeurs persistantes de gaz
        </button>
        <button
          type="button"
          onClick={() => setLevel('refoulement')}
          className={`text-left p-3 rounded-xl border text-xs font-semibold transition-all cursor-pointer ${
            level === 'refoulement'
              ? 'bg-[#041e4d] text-white border-[#041e4d]'
              : 'bg-white text-slate-700 border-slate-200 hover:border-[#041e4d]/40'
          }`}
        >
          Eaux qui refoulent au rez-de-chaussée
        </button>
        <button
          type="button"
          onClick={() => setLevel('date')}
          className={`text-left p-3 rounded-xl border text-xs font-semibold transition-all cursor-pointer ${
            level === 'date'
              ? 'bg-[#041e4d] text-white border-[#041e4d]'
              : 'bg-white text-slate-700 border-slate-200 hover:border-[#041e4d]/40'
          }`}
        >
          Dernière vidange il y a 4 ans ou plus
        </button>
      </div>

      <div className="mt-5 rounded-xl p-4 border bg-emerald-50 border-emerald-200 text-emerald-950">
        <div className="flex items-start gap-2.5">
          <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
          <div>
            <p className="text-xs font-bold uppercase tracking-wide">{current.badge}</p>
            <p className="font-display text-base font-extrabold mt-0.5">{current.title}</p>
            <p className="text-xs sm:text-sm opacity-90 mt-1 leading-relaxed">{current.description}</p>
          </div>
        </div>

        <div className="mt-4 flex flex-col sm:flex-row gap-2.5">
          <a
            href={PHONE_HREF}
            className="inline-flex items-center justify-center gap-2 bg-[#dc141b] hover:bg-[#b91016] text-white font-bold text-xs sm:text-sm px-4 py-2.5 rounded-lg transition-colors tabular-nums"
          >
            <Phone className="w-4 h-4 shrink-0" />
            <span>Devis vidange : {PHONE_DISPLAY}</span>
          </a>
          <Link
            href={current.ctaHref}
            className="inline-flex items-center justify-center gap-1.5 bg-white hover:bg-slate-100 text-[#041e4d] font-bold text-xs sm:text-sm px-4 py-2.5 rounded-lg border border-slate-200 transition-colors"
          >
            <span>{current.ctaText}</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#dc141b]" />
          </Link>
        </div>
      </div>
    </div>
  );
}
