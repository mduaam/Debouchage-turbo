'use client';

import { Phone, Clock, Truck, ChevronRight } from 'lucide-react';
import { PHONE_DISPLAY, PHONE_HREF } from '@/lib/hydroheat-data';

interface EmergencyBannerProps {
  onQuoteClick: () => void;
}

export function EmergencyBanner({ onQuoteClick }: EmergencyBannerProps) {
  return (
    <section
      aria-label="Disponibilité et appel d'urgence"
      className="w-full bg-[#052259] text-white border-b border-white/10"
    >
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-12 items-stretch">
        {/* Crimson Phone Callout Block */}
        <a
          href={PHONE_HREF}
          className="lg:col-span-3 bg-[#c81018] hover:bg-[#b00d14] transition-colors px-5 py-4 flex items-center gap-3.5 group"
        >
          <span className="w-10 h-10 rounded-full bg-white/15 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
            <Phone className="w-5 h-5 text-white" />
          </span>
          <span className="leading-tight">
            <span className="block font-display text-lg font-extrabold tracking-tight tabular-nums">
              {PHONE_DISPLAY}
            </span>
            <span className="block text-xs text-red-100 font-medium">Appel immédiat</span>
          </span>
        </a>

        {/* Availability + Coverage + Quote Button */}
        <div className="lg:col-span-9 px-4 sm:px-5 py-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex flex-col sm:flex-row sm:items-center gap-3.5 sm:gap-6 lg:gap-8">
            <div className="flex items-center gap-3">
              <Clock className="w-5 h-5 text-slate-300 shrink-0" />
              <div className="leading-tight">
                <p className="text-sm font-bold text-white">Intervention 7j/7 – 24h/24</p>
                <p className="text-xs text-slate-300">Même les jours fériés</p>
              </div>
            </div>

            <div className="hidden sm:block w-px h-8 bg-white/15" aria-hidden="true" />

            <div className="flex items-center gap-3">
              <Truck className="w-5 h-5 text-slate-300 shrink-0" />
              <div className="leading-tight">
                <p className="text-sm font-bold text-white">Déplacement partout à Bruxelles</p>
                <p className="text-xs text-slate-300">et en Belgique</p>
              </div>
            </div>
          </div>

          <button
            type="button"
            onClick={onQuoteClick}
            className="w-full md:w-auto min-h-[44px] bg-white hover:bg-slate-100 text-[#041e4d] font-bold text-sm px-5 py-2.5 rounded-lg inline-flex items-center justify-center gap-1.5 shadow-sm transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            <span>Devis gratuit</span>
            <ChevronRight className="w-4 h-4 text-[#dc141b]" />
          </button>
        </div>
      </div>
    </section>
  );
}
