'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Clock } from 'lucide-react';
import {
  TARIFF_CATEGORY_TABS,
  TARIFF_ITEMS,
  TariffCategoryTab,
} from '@/lib/tarifs-data';

export function TarifsInteractiveView() {
  const [activeCategory, setActiveCategory] =
    useState<TariffCategoryTab['id']>('all');

  const filteredItems =
    activeCategory === 'all'
      ? TARIFF_ITEMS
      : TARIFF_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <div>
      {/* Interactive Category Tabs */}
      <div
        role="group"
        aria-label="Filtrer les tarifs par type d'intervention"
        className="inline-flex flex-wrap items-center gap-1 p-1 bg-slate-200/70 rounded-xl"
      >
        {TARIFF_CATEGORY_TABS.map((tab) => {
          const isActive = activeCategory === tab.id;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveCategory(tab.id)}
              aria-pressed={isActive}
              className={`px-3.5 py-2 rounded-lg text-xs sm:text-sm font-bold transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                isActive
                  ? 'bg-[#041e4d] text-white shadow-xs'
                  : 'text-slate-700 hover:text-[#041e4d] hover:bg-white/75'
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Pricing Table */}
      <div className="mt-6 overflow-x-auto rounded-xl border border-slate-200 shadow-xs bg-white">
        <table className="w-full text-left border-collapse text-sm">
          <thead>
            <tr className="bg-[#041e4d] text-white">
              <th className="py-3.5 px-4 font-display font-bold">Intervention</th>
              <th className="py-3.5 px-4 font-display font-bold">Ce qui est inclus</th>
              <th className="py-3.5 px-4 font-display font-bold whitespace-nowrap">Durée moy.</th>
              <th className="py-3.5 px-4 font-display font-bold text-right whitespace-nowrap">
                Tarif indicatif
              </th>
              <th className="py-3.5 px-4 font-display font-bold text-right">Service</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200">
            {filteredItems.map((item) => (
              <tr key={item.id} className="hover:bg-slate-50 transition-colors">
                <td className="py-3.5 px-4">
                  <p className="font-bold text-[#041e4d]">{item.title}</p>
                  <p className="text-xs text-slate-500 mt-0.5">{item.categoryLabel}</p>
                </td>
                <td className="py-3.5 px-4 text-slate-600 max-w-md">{item.detail}</td>
                <td className="py-3.5 px-4 text-slate-600 whitespace-nowrap tabular-nums">
                  <span className="inline-flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>{item.duration}</span>
                  </span>
                </td>
                <td className="py-3.5 px-4 font-extrabold text-emerald-700 text-right tabular-nums whitespace-nowrap">
                  {item.price}
                </td>
                <td className="py-3.5 px-4 text-right whitespace-nowrap">
                  <Link
                    href={`/services/${item.serviceSlug}`}
                    className="inline-flex items-center gap-1 font-bold text-[#dc141b] hover:underline"
                  >
                    <span>Détails</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
