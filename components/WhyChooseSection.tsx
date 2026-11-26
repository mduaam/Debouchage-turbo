'use client';

import Link from 'next/link';
import { Zap, ShieldCheck, ThumbsUp, Handshake, ArrowRight } from 'lucide-react';

interface WhyChooseSectionProps {
  onLearnMore?: () => void;
}

const VALUE_PROPS = [
  {
    id: 'rapide',
    icon: Zap,
    iconColor: 'text-[#dc141b]',
    iconBg: 'bg-red-50 border-red-100',
    title: 'Intervention rapide',
    subtitle: '≤ 30 min',
  },
  {
    id: 'garanti',
    icon: ShieldCheck,
    iconColor: 'text-emerald-600',
    iconBg: 'bg-emerald-50 border-emerald-100',
    title: 'Travail garanti',
    subtitle: '5 ans',
  },
  {
    id: 'avis',
    icon: ThumbsUp,
    iconColor: 'text-[#1d63dc]',
    iconBg: 'bg-blue-50 border-blue-100',
    title: 'Avis clients exceptionnels',
    subtitle: '+4.8/5',
  },
  {
    id: 'prix',
    icon: Handshake,
    iconColor: 'text-[#041e4d]',
    iconBg: 'bg-slate-100 border-slate-200',
    title: 'Prix transparents',
    subtitle: 'Sans surprise',
  },
];

export function WhyChooseSection({ onLearnMore }: WhyChooseSectionProps) {
  return (
    <section id="pourquoi-nous" className="py-10 sm:py-12 bg-white">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="rounded-2xl overflow-hidden bg-[#f1f5fb] border border-slate-200 shadow-sm grid grid-cols-1 lg:grid-cols-12 items-stretch">
          {/* Left Diagonal Navy Panel */}
          <div className="lg:col-span-4 bg-[#041e4d] text-white p-7 sm:p-8 lg:pr-12 why-slant-panel flex flex-col justify-center">
            <h2 className="font-display text-2xl sm:text-[28px] font-extrabold leading-[1.15] text-balance">
              Pourquoi choisir Debouchage <span className="text-[#ef232a]">Turbo</span> ?
            </h2>
            <p className="text-sm text-slate-200 leading-relaxed mt-3">
              Depuis plus de 20 ans, nos experts en débouchage de canalisation interviennent chez les particuliers et professionnels à Bruxelles et en Belgique.
            </p>
            <div className="mt-5">
              <Link
                href="/a-propos"
                className="inline-flex items-center gap-2 bg-[#dc141b] hover:bg-[#b91016] text-white font-bold text-sm px-5 py-2.5 rounded-lg shadow-sm transition-colors whitespace-nowrap shrink-0"
              >
                <span>En savoir plus</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right 4-Column Commitments */}
          <div className="lg:col-span-8 p-6 sm:p-8 grid grid-cols-2 sm:grid-cols-4 gap-5 items-center">
            {VALUE_PROPS.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.id} className="text-center flex flex-col items-center">
                  <span
                    className={`w-12 h-12 rounded-xl border flex items-center justify-center mb-3 ${item.iconBg}`}
                  >
                    <Icon className={`w-6 h-6 ${item.iconColor}`} strokeWidth={2.2} />
                  </span>
                  <h3 className="font-display text-sm sm:text-[15px] font-extrabold text-[#041e4d] leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-medium text-slate-600 mt-1 tabular-nums">
                    {item.subtitle}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
