import { Droplet, Zap } from 'lucide-react';

interface BrandMarkProps {
  compact?: boolean;
  hideTaglineOnMobile?: boolean;
}

export function BrandMark({ compact = false, hideTaglineOnMobile = false }: BrandMarkProps) {
  return (
    <span className="inline-flex items-center gap-2 sm:gap-2.5 shrink-0 select-none">
      <span className="relative flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-white/10 border border-white/15 shrink-0">
        <Droplet className="w-5 h-5 sm:w-6 sm:h-6 text-[#38bdf8] fill-[#0ea5e9]/25" strokeWidth={2.2} />
        <Zap className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-[#ef232a] fill-[#ef232a] absolute mt-0.5" strokeWidth={2.2} />
        <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-tr-sm bg-[#ef232a]" aria-hidden="true" />
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-display text-base sm:text-[19px] font-extrabold tracking-tight text-white whitespace-nowrap">
          Debouchage <span className="text-[#ef232a]">Turbo</span>
        </span>
        {!compact && (
          <span
            className={`text-[10px] font-medium tracking-wide text-slate-300 whitespace-nowrap mt-0.5 ${
              hideTaglineOnMobile ? 'hidden sm:block' : ''
            }`}
          >
            Débouchage de Canalisation · 24h/24
          </span>
        )}
      </span>
    </span>
  );
}

export function BelgianFlag({ className = 'w-6 h-4' }: { className?: string }) {
  return (
    <span
      className={`inline-grid grid-cols-3 overflow-hidden rounded-[3px] border border-white/25 shrink-0 ${className}`}
      aria-hidden="true"
    >
      <span className="bg-neutral-950" />
      <span className="bg-[#fdda24]" />
      <span className="bg-[#ef3340]" />
    </span>
  );
}
