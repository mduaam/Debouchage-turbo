'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  MapPin,
  Clock,
  Truck,
  CheckCircle2,
  Phone,
  ArrowRight,
  Compass,
  ShieldCheck,
} from 'lucide-react';
import {
  BRUSSELS_COMMUNES_MAP,
  BrusselsCommuneMapItem,
  BrusselsSector,
  AvailabilityStatus,
} from '@/lib/brussels-map-data';
import { PHONE_DISPLAY, PHONE_HREF } from '@/lib/hydroheat-data';

interface BrusselsCoverageMapProps {
  onSelectCommune?: (commune: string) => void;
  variant?: 'home' | 'services';
}

const SECTOR_FILTERS: { id: 'all' | BrusselsSector; label: string }[] = [
  { id: 'all', label: 'Toutes (19)' },
  { id: 'centre-nord', label: 'Centre & Nord' },
  { id: 'ouest-sud', label: 'Ouest & Sud' },
  { id: 'est', label: 'Est' },
];

function getStatusStyles(status: AvailabilityStatus, isSelected: boolean) {
  if (isSelected) {
    return {
      card: 'bg-[#041e4d] text-white border-[#dc141b] ring-2 ring-[#dc141b]/35 shadow-lg',
      code: 'text-red-200',
      badge: 'text-emerald-300',
      eta: 'text-slate-200',
    };
  }

  switch (status) {
    case 'immediate':
      return {
        card: 'bg-white hover:bg-emerald-50/40 text-[#041e4d] border-emerald-200 hover:border-emerald-400 shadow-xs',
        code: 'text-slate-500',
        badge: 'text-emerald-700',
        eta: 'text-slate-600',
      };
    case 'fast':
      return {
        card: 'bg-white hover:bg-blue-50/40 text-[#041e4d] border-slate-200 hover:border-[#041e4d]/40 shadow-xs',
        code: 'text-slate-500',
        badge: 'text-[#1d63dc]',
        eta: 'text-slate-600',
      };
    case 'high-demand':
      return {
        card: 'bg-amber-50/50 hover:bg-amber-50 text-[#041e4d] border-amber-200 hover:border-amber-400 shadow-xs',
        code: 'text-slate-500',
        badge: 'text-amber-700',
        eta: 'text-slate-600',
      };
  }
}

function StatusIcon({
  status,
  className = 'w-3.5 h-3.5 shrink-0',
}: {
  status: AvailabilityStatus;
  className?: string;
}) {
  if (status === 'immediate') return <CheckCircle2 className={className} />;
  if (status === 'fast') return <Truck className={className} />;
  return <Clock className={className} />;
}

export function BrusselsCoverageMap({
  onSelectCommune,
  variant = 'home',
}: BrusselsCoverageMapProps) {
  const [sector, setSector] = useState<'all' | BrusselsSector>('all');
  const [selectedId, setSelectedId] = useState<string>('bruxelles-ville');

  const selectedCommune: BrusselsCommuneMapItem =
    BRUSSELS_COMMUNES_MAP.find((item) => item.id === selectedId) ?? BRUSSELS_COMMUNES_MAP[2];

  const totalTeams = BRUSSELS_COMMUNES_MAP.reduce((acc, item) => acc + item.activeTeams, 0);
  const immediateCount = BRUSSELS_COMMUNES_MAP.filter(
    (item) => item.availability === 'immediate'
  ).length;

  const handleSectorChange = (nextSector: 'all' | BrusselsSector) => {
    setSector(nextSector);
    if (nextSector !== 'all') {
      const currentMatches = selectedCommune.sector === nextSector;
      if (!currentMatches) {
        const firstInSector = BRUSSELS_COMMUNES_MAP.find((item) => item.sector === nextSector);
        if (firstInSector) setSelectedId(firstInSector.id);
      }
    }
  };

  const handleDispatchRequest = () => {
    if (onSelectCommune) {
      onSelectCommune(selectedCommune.name);
    } else {
      const formEl = document.getElementById('devis-form');
      if (formEl) {
        formEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  };

  return (
    <section
      id="carte-bruxelles"
      className={`py-12 sm:py-16 ${
        variant === 'home' ? 'bg-[#f8fafd] border-t border-slate-100' : 'bg-white border-t border-slate-100'
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-5">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3">
              <span className="w-8 h-px bg-slate-300" aria-hidden="true" />
              <span className="text-xs sm:text-sm font-bold text-[#dc141b]">
                Disponibilité en temps réel
              </span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-[#041e4d] mt-1.5 text-balance">
              Carte interactive des 19 communes de Bruxelles
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2 leading-relaxed">
              Sélectionnez votre commune pour consulter la disponibilité de nos camions hydrocureurs et le délai d&apos;arrivée estimé pour un dépannage d&apos;urgence.
            </p>
          </div>

          {/* Sector Filter Controls */}
          <div
            role="group"
            aria-label="Filtrer par secteur bruxellois"
            className="inline-flex flex-wrap items-center gap-1 p-1 bg-slate-200/70 rounded-xl self-start lg:self-end"
          >
            {SECTOR_FILTERS.map((item) => {
              const active = sector === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleSectorChange(item.id)}
                  aria-pressed={active}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                    active
                      ? 'bg-[#041e4d] text-white shadow-xs'
                      : 'text-slate-700 hover:text-[#041e4d] hover:bg-white/70'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Map + Live Inspector Split */}
        <div className="mt-7 grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Left 8 Cols: Spatial Brussels 19-Communes Cartogram */}
          <div className="lg:col-span-8 rounded-2xl bg-[#eef3fb] border border-slate-200 p-4 sm:p-5 flex flex-col justify-between">
            {/* Map Top Bar: Compass + Legend */}
            <div className="flex flex-wrap items-center justify-between gap-3 pb-3.5 mb-4 border-b border-slate-300/70 text-xs">
              <div className="flex items-center gap-2 font-bold text-[#041e4d]">
                <Compass className="w-4 h-4 text-[#dc141b] shrink-0" />
                <span>Région de Bruxelles-Capitale · 19 communes</span>
              </div>

              <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-slate-700 font-medium">
                <span className="inline-flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Disponible ({immediateCount})</span>
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Truck className="w-3.5 h-3.5 text-[#1d63dc]" />
                  <span>Rapide</span>
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-amber-600" />
                  <span>Forte demande</span>
                </span>
              </div>
            </div>

            {/* Geographic Grid Cartogram (6x4 on md+, 2-col on mobile) */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 md:grid-rows-4 gap-2 sm:gap-2.5">
              {BRUSSELS_COMMUNES_MAP.map((commune) => {
                const isSelected = commune.id === selectedCommune.id;
                const isDimmed = sector !== 'all' && commune.sector !== sector;
                const styles = getStatusStyles(commune.availability, isSelected);

                return (
                  <button
                    key={commune.id}
                    type="button"
                    onClick={() => setSelectedId(commune.id)}
                    aria-pressed={isSelected}
                    className={`${commune.gridClass} ${styles.card} ${
                      isDimmed ? 'opacity-35' : 'opacity-100'
                    } rounded-xl border p-2.5 sm:p-3 text-left transition-all duration-150 flex flex-col justify-between min-h-[78px] cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#dc141b]`}
                  >
                    <div className="flex items-center justify-between gap-1.5">
                      <span className={`text-[11px] font-bold tabular-nums ${styles.code}`}>
                        {commune.postalCode}
                      </span>
                      <StatusIcon
                        status={commune.availability}
                        className={`w-3.5 h-3.5 shrink-0 ${styles.badge}`}
                      />
                    </div>

                    <div className="mt-1.5">
                      <p className="font-display text-xs sm:text-[13px] font-extrabold leading-tight truncate">
                        {commune.shortName}
                      </p>
                      <p className={`text-[10px] sm:text-[11px] font-semibold mt-0.5 tabular-nums ${styles.eta}`}>
                        {commune.etaMinutes}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Bottom Summary Strip */}
            <div className="mt-4 pt-3 border-t border-slate-300/70 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-600">
              <span>
                Flotte active en Île-de-Bruxelles :{' '}
                <strong className="text-[#041e4d] tabular-nums">{totalTeams} unités mobiles</strong> en service continu
              </span>
              <span>Brabant wallon &amp; flamand desservis également 7j/7</span>
            </div>
          </div>

          {/* Right 4 Cols: Selected Commune Live Dispatch Inspector */}
          <div className="lg:col-span-4 rounded-2xl bg-white border border-slate-200 shadow-sm p-5 sm:p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-xs font-bold text-[#dc141b] tabular-nums">
                    Code postal {selectedCommune.postalCode}
                  </p>
                  <h3 className="font-display text-xl sm:text-2xl font-extrabold text-[#041e4d] mt-0.5">
                    {selectedCommune.name}
                  </h3>
                </div>
                <span className="w-10 h-10 rounded-xl bg-[#041e4d] text-white flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </span>
              </div>

              {/* Availability Metrics */}
              <div className="mt-5 space-y-2.5">
                <div className="rounded-xl bg-[#f8fafd] border border-slate-200 p-3.5 flex items-center justify-between gap-3">
                  <span className="text-xs font-medium text-slate-600">Statut actuel</span>
                  <span
                    className={`inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold ${
                      selectedCommune.availability === 'immediate'
                        ? 'text-emerald-700'
                        : selectedCommune.availability === 'fast'
                          ? 'text-[#1d63dc]'
                          : 'text-amber-700'
                    }`}
                  >
                    <StatusIcon status={selectedCommune.availability} />
                    <span>{selectedCommune.availabilityLabel}</span>
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2.5">
                  <div className="rounded-xl bg-[#f8fafd] border border-slate-200 p-3.5">
                    <p className="text-[11px] font-medium text-slate-500">Arrivée estimée</p>
                    <p className="font-display text-base font-extrabold text-[#041e4d] mt-0.5 tabular-nums">
                      {selectedCommune.etaMinutes}
                    </p>
                  </div>

                  <div className="rounded-xl bg-[#f8fafd] border border-slate-200 p-3.5">
                    <p className="text-[11px] font-medium text-slate-500">Équipes actives</p>
                    <p className="font-display text-base font-extrabold text-[#041e4d] mt-0.5 tabular-nums">
                      {selectedCommune.activeTeams}{' '}
                      {selectedCommune.activeTeams > 1 ? 'camions' : 'camion'}
                    </p>
                  </div>
                </div>
              </div>

              {/* Local Context */}
              <div className="mt-5 pt-4 border-t border-slate-100">
                <p className="text-xs font-bold text-[#041e4d]">
                  Interventions fréquentes dans ce secteur
                </p>
                <p className="text-xs sm:text-sm text-slate-600 mt-1.5 leading-relaxed">
                  {selectedCommune.localNote}
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-6 pt-4 border-t border-slate-100 space-y-2.5">
              <button
                type="button"
                onClick={handleDispatchRequest}
                className="w-full min-h-[44px] h-11 px-4 bg-[#dc141b] hover:bg-[#b91016] text-white font-bold text-sm rounded-lg inline-flex items-center justify-center gap-2 shadow-sm transition-colors cursor-pointer"
              >
                <span className="truncate">Demander un dépannage ({selectedCommune.postalCode})</span>
                <ArrowRight className="w-4 h-4 shrink-0" />
              </button>

              <a
                href={PHONE_HREF}
                className="w-full min-h-[44px] h-11 px-4 bg-[#041e4d] hover:bg-[#06296b] text-white font-bold text-sm rounded-lg inline-flex items-center justify-center gap-2 transition-colors tabular-nums"
              >
                <Phone className="w-4 h-4 shrink-0" />
                <span>Appel direct · {PHONE_DISPLAY}</span>
              </a>

              <Link
                href={`/zones-d-intervention/${
                  selectedCommune.id === 'bruxelles-ville' ? 'bruxelles' : selectedCommune.id
                }`}
                className="w-full min-h-[40px] h-10 px-4 bg-slate-100 hover:bg-slate-200 text-[#041e4d] font-bold text-xs sm:text-sm rounded-lg inline-flex items-center justify-center gap-1.5 transition-colors"
              >
                <span className="truncate">Infos &amp; délais à {selectedCommune.shortName}</span>
                <ArrowRight className="w-3.5 h-3.5 shrink-0" />
              </Link>

              <p className="text-[11px] text-slate-500 flex items-center justify-center gap-1.5 pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Tarif annoncé avant départ · Garantie 5 ans</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
