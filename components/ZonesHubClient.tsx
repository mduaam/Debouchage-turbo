'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { ArrowRight, Clock, MapPin, Search, X } from 'lucide-react';
import {
  ZONES_CITIES,
  PROVINCE_FILTERS,
  ZoneProvince,
} from '@/lib/zones-data';

function normalizeText(value: string): string {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim();
}

export function ZonesHubClient() {
  const [selectedProvince, setSelectedProvince] = useState<'Toutes' | ZoneProvince>('Toutes');
  const [search, setSearch] = useState('');

  const filteredCities = useMemo(() => {
    const query = normalizeText(search);

    return ZONES_CITIES.filter((city) => {
      if (selectedProvince !== 'Toutes' && city.province !== selectedProvince) {
        return false;
      }

      if (!query) return true;

      const haystack = [
        city.name,
        city.province,
        city.region,
        ...city.postalCodes,
        ...city.districts,
      ]
        .map(normalizeText)
        .join(' ');

      return haystack.includes(query);
    });
  }, [selectedProvince, search]);

  const handleReset = () => {
    setSelectedProvince('Toutes');
    setSearch('');
  };

  return (
    <div>
      {/* Search + Province Filter Bar */}
      <div className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-5 shadow-xs space-y-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="relative flex-1 max-w-xl">
            <label htmlFor="zones-search" className="sr-only">
              Rechercher une commune, une ville ou un code postal
            </label>
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              id="zones-search"
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Rechercher une ville, commune ou code postal (ex: 1050, Namur, Liège)..."
              className="w-full h-11 pl-10 pr-10 text-base sm:text-sm rounded-xl border border-slate-200 bg-slate-50/80 text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#041e4d]/20 focus:border-[#041e4d] transition-colors"
            />
            {search && (
              <button
                type="button"
                onClick={() => setSearch('')}
                aria-label="Effacer la recherche"
                className="absolute right-2.5 top-1/2 -translate-y-1/2 p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-200/70 transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          <p className="text-xs sm:text-sm text-slate-600 font-medium tabular-nums shrink-0">
            <strong className="text-[#041e4d]">{filteredCities.length}</strong>{' '}
            {filteredCities.length > 1 ? 'localités trouvées' : 'localité trouvée'}
          </p>
        </div>

        {/* Province Segmented Filter Tabs */}
        <div
          role="group"
          aria-label="Filtrer par province ou région"
          className="flex flex-wrap items-center gap-1.5 pt-3 border-t border-slate-100"
        >
          {PROVINCE_FILTERS.map((province) => {
            const active = selectedProvince === province;
            const count =
              province === 'Toutes'
                ? ZONES_CITIES.length
                : ZONES_CITIES.filter((c) => c.province === province).length;

            return (
              <button
                key={province}
                type="button"
                onClick={() => setSelectedProvince(province)}
                aria-pressed={active}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors whitespace-nowrap shrink-0 cursor-pointer tabular-nums ${
                  active
                    ? 'bg-[#041e4d] text-white shadow-xs'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200/80 hover:text-[#041e4d]'
                }`}
              >
                {province} ({count})
              </button>
            );
          })}
        </div>
      </div>

      {/* Results Grid or Empty State */}
      {filteredCities.length === 0 ? (
        <div className="mt-8 rounded-2xl bg-white border border-slate-200 p-8 sm:p-10 text-center">
          <MapPin className="w-8 h-8 text-[#dc141b] mx-auto" />
          <h3 className="font-display text-lg font-extrabold text-[#041e4d] mt-3">
            Aucune commune ou ville ne correspond à votre recherche
          </h3>
          <p className="text-sm text-slate-600 mt-1.5 max-w-md mx-auto">
            Nos équipes couvrent l&apos;ensemble de Bruxelles et de la Wallonie. Réinitialisez les filtres ou appelez-nous pour confirmer votre secteur.
          </p>
          <button
            type="button"
            onClick={handleReset}
            className="mt-5 inline-flex items-center justify-center px-4 py-2.5 rounded-lg bg-[#041e4d] hover:bg-[#06296b] text-white text-sm font-bold transition-colors cursor-pointer"
          >
            Réinitialiser les filtres
          </button>
        </div>
      ) : (
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredCities.map((city) => (
            <Link
              key={city.slug}
              href={`/zones-d-intervention/${city.slug}`}
              className="group bg-white rounded-xl border border-slate-200 hover:border-[#041e4d]/40 hover:shadow-md p-5 flex flex-col justify-between transition-all"
            >
              <div>
                <div className="flex items-center justify-between gap-2 text-xs font-semibold text-slate-500">
                  <span className="truncate">
                    {city.province} · {city.activeTeams}{' '}
                    {city.activeTeams > 1 ? 'équipes' : 'équipe'}
                  </span>
                  <span className="inline-flex items-center gap-1 text-emerald-700 font-bold tabular-nums shrink-0">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{city.etaRange}</span>
                  </span>
                </div>

                <h3 className="font-display text-lg font-extrabold text-[#041e4d] group-hover:text-[#dc141b] transition-colors mt-2">
                  {city.name}
                </h3>

                <p className="text-xs font-semibold text-[#041e4d]/80 mt-1 tabular-nums">
                  CP : {city.postalCodes.slice(0, 4).join(', ')}
                  {city.postalCodes.length > 4 ? '…' : ''}
                </p>

                <p className="text-xs sm:text-sm text-slate-600 mt-2.5 leading-relaxed line-clamp-2">
                  Secteurs : {city.districts.slice(0, 4).join(', ')}.
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs sm:text-sm font-bold text-[#041e4d] group-hover:text-[#dc141b] transition-colors">
                <span>Débouchage à {city.name}</span>
                <ArrowRight className="w-4 h-4 shrink-0" />
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
