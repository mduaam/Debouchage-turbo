'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { TESTIMONIAL_PAGES } from '@/lib/hydroheat-data';

export function TestimonialsSection() {
  const [page, setPage] = useState(0);
  const currentReviews = TESTIMONIAL_PAGES[page];

  return (
    <section id="temoignages" className="py-12 sm:py-14 bg-white">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-3">
          <span className="w-8 h-px bg-slate-300" aria-hidden="true" />
          <span className="text-xs sm:text-sm font-bold text-[#dc141b]">Témoignages</span>
          <span className="w-8 h-px bg-slate-300" aria-hidden="true" />
        </div>

        <h2 className="font-display text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-[#041e4d] text-center mt-2">
          Ils nous font confiance
        </h2>

        {/* 3-Card Row (balanced 2+1 on tablet, 3-col on desktop) */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
          {currentReviews.map((review, index) => (
            <article
              key={review.id}
              className={`bg-[#f4f7fc] border border-slate-200/80 rounded-xl p-5 sm:p-6 flex flex-col justify-between ${
                index === 2 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div>
                <Quote className="w-6 h-6 text-[#dc141b] fill-[#dc141b]/15 mb-3" />
                <p className="text-sm sm:text-[15px] text-slate-700 leading-relaxed font-medium">
                  {review.quote}
                </p>

                <div className="flex items-center gap-1 mt-4" aria-label={`Note : ${review.rating} sur 5`}>
                  {Array.from({ length: review.rating }).map((_, idx) => (
                    <Star
                      key={idx}
                      className="w-4 h-4 text-amber-400 fill-amber-400"
                    />
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-3 mt-5 pt-4 border-t border-slate-200/80">
                {review.avatar ? (
                  <div className="relative w-10 h-10 rounded-full overflow-hidden border border-slate-200 shrink-0 bg-slate-200">
                    <Image
                      src={review.avatar}
                      alt={review.name}
                      fill
                      referrerPolicy="no-referrer"
                      className="object-cover"
                      sizes="40px"
                    />
                  </div>
                ) : (
                  <div className="w-10 h-10 rounded-full bg-[#041e4d] text-white font-display font-bold text-xs flex items-center justify-center shrink-0">
                    {review.initials}
                  </div>
                )}

                <div className="leading-tight">
                  <p className="text-sm font-bold text-[#041e4d]">{review.name}</p>
                  <p className="text-xs text-slate-500 mt-0.5">{review.commune}</p>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Carousel Controls & Pagination Dots */}
        <div className="mt-6 flex items-center justify-center gap-3">
          <button
            type="button"
            onClick={() => setPage((prev) => (prev === 0 ? TESTIMONIAL_PAGES.length - 1 : prev - 1))}
            className="p-1.5 rounded-full text-slate-400 hover:text-[#041e4d] hover:bg-slate-100 transition-colors cursor-pointer"
            aria-label="Avis précédents"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <div className="flex items-center gap-2">
            {TESTIMONIAL_PAGES.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setPage(idx)}
                aria-label={`Afficher la page d'avis ${idx + 1}`}
                aria-current={page === idx ? 'true' : undefined}
                className={`h-2.5 rounded-full transition-all cursor-pointer ${
                  page === idx ? 'w-6 bg-[#1d63dc]' : 'w-2.5 bg-slate-300 hover:bg-slate-400'
                }`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={() => setPage((prev) => (prev + 1) % TESTIMONIAL_PAGES.length)}
            className="p-1.5 rounded-full text-slate-400 hover:text-[#041e4d] hover:bg-slate-100 transition-colors cursor-pointer"
            aria-label="Avis suivants"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
