'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Plus, Minus } from 'lucide-react';
import { FAQ_ITEMS } from '@/lib/hydroheat-data';

export function FaqSection() {
  const [openId, setOpenId] = useState<string | null>(FAQ_ITEMS[0].id);

  return (
    <section id="faq" className="py-12 sm:py-16 bg-[#f8fafd]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          {/* Left Technician Photo */}
          <div className="lg:col-span-5">
            <div className="relative w-full h-64 sm:h-80 lg:h-full min-h-[290px] rounded-xl overflow-hidden shadow-md border border-slate-200 bg-slate-200">
              <Image
                src="/assets/aistudio/Plombier_r_parant_un_siphon_chrom__0ce1e443.png"
                alt="Technicien Debouchage Turbo réparant un siphon chromé sous évier"
                fill
                referrerPolicy="no-referrer"
                className="object-cover object-[40%_center]"
                sizes="(min-width: 1024px) 460px, 100vw"
              />
            </div>
          </div>

          {/* Right Accordion */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="flex items-center gap-3">
              <span className="w-8 h-px bg-slate-300" aria-hidden="true" />
              <span className="text-xs sm:text-sm font-bold text-[#dc141b]">
                Questions fréquentes
              </span>
              <span className="w-8 h-px bg-slate-300" aria-hidden="true" />
            </div>

            <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-[#041e4d] mt-2">
              Questions fréquentes
            </h2>
            <p className="text-sm text-slate-600 mt-1">
              Trouvez rapidement les réponses à vos questions les plus courantes.
            </p>

            <div className="mt-5 space-y-2.5">
              {FAQ_ITEMS.map((item) => {
                const isOpen = openId === item.id;
                return (
                  <div
                    key={item.id}
                    className="bg-white border border-slate-200 rounded-lg overflow-hidden transition-colors"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenId(isOpen ? null : item.id)}
                      aria-expanded={isOpen}
                      className="w-full px-4 sm:px-5 py-3.5 text-left flex items-center justify-between gap-4 hover:bg-slate-50/80 transition-colors cursor-pointer"
                    >
                      <span className="font-display text-sm sm:text-[15px] font-bold text-[#041e4d]">
                        {item.question}
                      </span>
                      <span className="w-6 h-6 rounded-md bg-slate-100 text-[#041e4d] flex items-center justify-center shrink-0">
                        {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                      </span>
                    </button>

                    {isOpen && (
                      <div className="px-4 sm:px-5 pb-4 pt-0.5 text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                        {item.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
