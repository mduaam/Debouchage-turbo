'use client';

import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

interface FaqEntry {
  question: string;
  answer: string;
}

interface ServiceFaqAccordionProps {
  items: FaqEntry[];
}

export function ServiceFaqAccordion({ items }: ServiceFaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {items.map((item, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div
            key={item.question}
            className={`rounded-xl border transition-colors ${
              isOpen
                ? 'border-[#041e4d]/25 bg-slate-50/70'
                : 'border-slate-200 bg-white hover:border-slate-300'
            }`}
          >
            <h3 className="m-0">
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : idx)}
                aria-expanded={isOpen}
                className="w-full px-4 sm:px-5 py-3.5 text-left flex items-center justify-between gap-4 cursor-pointer"
              >
                <span className="font-display text-sm sm:text-[15px] font-bold text-[#041e4d]">
                  {item.question}
                </span>
                <span className="w-6 h-6 rounded-md bg-slate-100 text-[#041e4d] flex items-center justify-center shrink-0">
                  {isOpen ? (
                    <Minus className="w-3.5 h-3.5" />
                  ) : (
                    <Plus className="w-3.5 h-3.5" />
                  )}
                </span>
              </button>
            </h3>

            {isOpen && (
              <div className="px-4 sm:px-5 pb-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
                {item.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
