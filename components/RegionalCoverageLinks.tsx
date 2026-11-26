'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { ArrowRight, ChevronDown, ChevronUp, MapPin } from 'lucide-react';
import {
  PROVINCE_FILTERS,
  ZONES_CITIES,
  ZoneCity,
  ZoneProvince,
} from '@/lib/zones-data';

interface RegionalCoverageLinksProps {
  variant?: 'white' | 'subtle';
  initialMajorCount?: number;
}

const PROVINCES: ZoneProvince[] = PROVINCE_FILTERS.filter(
  (item): item is ZoneProvince => item !== 'Toutes'
);

const PROVINCE_SLUG_ANCHORS: Record<ZoneProvince, string> = {
  'Bruxelles-Capitale': 'bruxelles',
  'Brabant wallon': 'wavre',
  Hainaut: 'charleroi',
  Liège: 'liege',
  Namur: 'namur',
  Luxembourg: 'arlon',
};

export function RegionalCoverageLinks({
  variant = 'white',
  initialMajorCount = 8,
}: RegionalCoverageLinksProps) {
  const [activeProvince, setActiveProvince] = useState<'Toutes' | ZoneProvince>('Toutes');
  const [expandedProvinces, setExpandedProvinces] = useState<Record<string, boolean>>({});

  const groupedByProvince = useMemo(() => {
    const map = new Map<ZoneProvince, ZoneCity[]>();
    for (const province of PROVINCES) {
      map.set(province, []);
    }
    for (const city of ZONES_CITIES) {
      const list = map.get(city.province);
      if (list) list.push(city);
    }
    return map;
  }, []);

  const visibleProvinces =
    activeProvince === 'Toutes' ? PROVINCES : [activeProvince];

  const toggleProvinceExpand = (province: ZoneProvince) => {
    setExpandedProvinces((prev) => ({
      ...prev,
      [province]: !prev[province],
    }));
  };

  return (
    <section
      id="couverture-regionale"
      aria-labelledby="couverture-regionale-heading"
      className={`py-12 sm:py-16 border-t border-slate-100 ${
        variant === 'white' ? 'bg-white' : 'bg-[#f8fafd]'
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-5">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3">
              <span className="w-8 h-px bg-slate-300" aria-hidden="true" />
              <span className="text-xs sm:text-sm font-bold text-[#dc141b]">
                Bruxelles &amp; Wallonie · 6 provinces desservies
              </span>
            </div>
            <h2
              id="couverture-regionale-heading"
              className="font-display text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-[#041e4d] mt-1.5 text-balance"
            >
              Provinces et grandes villes d&apos;intervention
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2 leading-relaxed">
              Accédez directement à la page locale de votre commune à Bruxelles ou de votre ville en Wallonie pour consulter les délais d&apos;arrivée, tarifs et équipes mobiles disponibles.
            </p>
          </div>

          <Link
            href="/zones-d-intervention"
            className="inline-flex items-center gap-1.5 text-sm font-bold text-[#041e4d] hover:text-[#dc141b] transition-colors whitespace-nowrap shrink-0 self-start lg:self-end"
          >
            <span>Annuaire complet ({ZONES_CITIES.length} localités)</span>
            <ArrowRight className="w-4 h-4 text-[#dc141b]" />
          </Link>
        </div>

        {/* Province Segmented Filter Controls */}
        <div
          role="group"
          aria-label="Filtrer par province couverte"
          className="mt-6 flex flex-wrap items-center gap-1.5 p-1 bg-slate-100 rounded-xl w-fit max-w-full"
        >
          <button
            type="button"
            onClick={() => setActiveProvince('Toutes')}
            aria-pressed={activeProvince === 'Toutes'}
            className={`px-3 py-2 min-h-[40px] rounded-lg text-xs font-bold transition-colors whitespace-nowrap shrink-0 cursor-pointer tabular-nums ${
              activeProvince === 'Toutes'
                ? 'bg-[#041e4d] text-white shadow-xs'
                : 'text-slate-700 hover:text-[#041e4d] hover:bg-white/80'
            }`}
          >
            Toutes ({ZONES_CITIES.length})
          </button>

          {PROVINCES.map((province) => {
            const count = groupedByProvince.get(province)?.length ?? 0;
            const active = activeProvince === province;
            return (
              <button
                key={province}
                type="button"
                onClick={() => setActiveProvince(province)}
                aria-pressed={active}
                className={`px-3 py-2 min-h-[40px] rounded-lg text-xs font-bold transition-colors whitespace-nowrap shrink-0 cursor-pointer tabular-nums ${
                  active
                    ? 'bg-[#041e4d] text-white shadow-xs'
                    : 'text-slate-700 hover:text-[#041e4d] hover:bg-white/80'
                }`}
              >
                {province} ({count})
              </button>
            );
          })}
        </div>

        {/* Provinces & Major Cities Link Grid */}
        <div
          className={`mt-6 grid gap-5 ${
            activeProvince === 'Toutes'
              ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
              : 'grid-cols-1'
          }`}
        >
          {visibleProvinces.map((province) => {
            const cities = groupedByProvince.get(province) ?? [];
            const isSingleProvinceView = activeProvince !== 'Toutes';
            const isExpanded = isSingleProvinceView || Boolean(expandedProvinces[province]);
            const displayedCities = isExpanded
              ? cities
              : cities.slice(0, initialMajorCount);
            const hiddenCount = cities.length - displayedCities.length;
            const anchorSlug = PROVINCE_SLUG_ANCHORS[province];

            return (
              <article
                key={province}
                className={`rounded-xl border border-slate-200 p-5 flex flex-col justify-between ${
                  variant === 'white' ? 'bg-[#f8fafd]' : 'bg-white'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-3 pb-3 border-b border-slate-200/80">
                    <h3 className="font-display text-base sm:text-lg font-extrabold text-[#041e4d]">
                      <Link
                        href={`/zones-d-intervention/${anchorSlug}`}
                        className="inline-flex items-center gap-2 hover:text-[#dc141b] transition-colors"
                      >
                        <MapPin className="w-4 h-4 text-[#dc141b] shrink-0" />
                        <span>{province}</span>
                      </Link>
                    </h3>
                    <span className="text-xs font-semibold text-slate-500 tabular-nums whitespace-nowrap shrink-0">
                      {cities.length} {cities.length > 1 ? 'localités' : 'localité'}
                    </span>
                  </div>

                  <ul
                    className={`mt-3.5 ${
                      isSingleProvinceView
                        ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-2'
                        : 'grid grid-cols-2 gap-x-4 gap-y-1.5'
                    }`}
                  >
                    {displayedCities.map((city) => (
                      <li key={city.slug} className="min-w-0">
                        <Link
                          href={`/zones-d-intervention/${city.slug}`}
                          className="group py-1 inline-flex items-baseline justify-between gap-2 w-full text-xs sm:text-sm text-slate-700 hover:text-[#dc141b] transition-colors"
                        >
                          <span className="font-semibold text-[#041e4d] group-hover:text-[#dc141b] truncate transition-colors">
                            {city.name}
                          </span>
                          <span className="text-[11px] text-slate-400 tabular-nums shrink-0">
                            {city.postalCodes[0]}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {!isSingleProvinceView && cities.length > initialMajorCount && (
                  <div className="mt-4 pt-3 border-t border-slate-200/80 flex items-center justify-between gap-2">
                    <button
                      type="button"
                      onClick={() => toggleProvinceExpand(province)}
                      aria-expanded={isExpanded}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#041e4d] hover:text-[#dc141b] transition-colors cursor-pointer py-1"
                    >
                      {isExpanded ? (
                        <>
                          <span>Réduire la liste</span>
                          <ChevronUp className="w-3.5 h-3.5" />
                        </>
                      ) : (
                        <>
                          <span>+{hiddenCount} autres communes</span>
                          <ChevronDown className="w-3.5 h-3.5" />
                        </>
                      )}
                    </button>

                    <button
                      type="button"
                      onClick={() => setActiveProvince(province)}
                      className="text-xs font-semibold text-slate-500 hover:text-[#041e4d] transition-colors cursor-pointer py-1"
                    >
                      Filtrer
                    </button>
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
