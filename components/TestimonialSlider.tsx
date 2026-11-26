'use client';

import { useState, useEffect, useMemo } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'motion/react';
import {
  ArrowRight,
  BadgeCheck,
  ChevronLeft,
  ChevronRight,
  Pause,
  Phone,
  Play,
  Quote,
  ShieldCheck,
  Star,
} from 'lucide-react';
import {
  HOMEPAGE_REVIEWS,
  PHONE_DISPLAY,
  PHONE_HREF,
} from '@/lib/hydroheat-data';
import {
  IMAGE_QUALITY,
  LIGHT_BLUR_DATA_URL,
} from '@/lib/image-optimization';

interface TestimonialSliderProps {
  onQuoteClick?: () => void;
}

type RatingFilter = 'all' | 5 | 4 | 3;

const RATING_FILTERS: { id: RatingFilter; label: string }[] = [
  { id: 'all', label: 'Tous les avis' },
  { id: 5, label: '5 étoiles' },
  { id: 4, label: '4 étoiles' },
  { id: 3, label: '3 étoiles' },
];

const CARDS_PER_SLIDE = 3;

export function TestimonialSlider({ onQuoteClick }: TestimonialSliderProps) {
  const [ratingFilter, setRatingFilter] = useState<RatingFilter>('all');
  const [slideIndex, setSlideIndex] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  const filteredReviews = useMemo(() => {
    if (ratingFilter === 'all') return HOMEPAGE_REVIEWS;
    return HOMEPAGE_REVIEWS.filter((review) => review.rating === ratingFilter);
  }, [ratingFilter]);

  const totalSlides = Math.max(1, Math.ceil(filteredReviews.length / CARDS_PER_SLIDE));
  const safeSlideIndex = slideIndex >= totalSlides ? 0 : slideIndex;

  const visibleReviews = filteredReviews.slice(
    safeSlideIndex * CARDS_PER_SLIDE,
    safeSlideIndex * CARDS_PER_SLIDE + CARDS_PER_SLIDE
  );

  useEffect(() => {
    if (!isAutoPlaying || isHovered || totalSlides <= 1) return;
    const timer = setInterval(() => {
      setDirection(1);
      setSlideIndex((prev) => (prev + 1) % totalSlides);
    }, 6500);
    return () => clearInterval(timer);
  }, [isAutoPlaying, isHovered, totalSlides]);

  const handleFilterChange = (nextFilter: RatingFilter) => {
    setRatingFilter(nextFilter);
    setSlideIndex(0);
    setDirection(1);
  };

  const handlePrev = () => {
    setDirection(-1);
    setSlideIndex((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection(1);
    setSlideIndex((prev) => (prev + 1) % totalSlides);
  };

  const handleQuoteAction = () => {
    if (onQuoteClick) {
      onQuoteClick();
      return;
    }
    const formEl = document.getElementById('devis-form');
    if (formEl) {
      formEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <section
      id="temoignages"
      aria-labelledby="temoignages-heading"
      className="py-12 sm:py-16 bg-white"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        {/* Header + Aggregate Verified Rating */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3">
              <span className="w-8 h-px bg-slate-300" aria-hidden="true" />
              <span className="text-xs sm:text-sm font-bold text-[#dc141b]">
                Avis clients vérifiés
              </span>
            </div>

            <h2
              id="temoignages-heading"
              className="font-display text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-[#041e4d] mt-1.5 text-balance"
            >
              Ils nous font confiance à Bruxelles et en Wallonie
            </h2>

            <div className="mt-2.5 flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs sm:text-sm text-slate-600">
              <span className="inline-flex items-center gap-1 font-bold text-[#041e4d] tabular-nums">
                <Star className="w-4 h-4 text-amber-400 fill-amber-400 shrink-0" />
                <span>4,8 / 5</span>
              </span>
              <span aria-hidden="true" className="text-slate-300">
                ·
              </span>
              <span className="tabular-nums">2 500+ interventions évaluées</span>
              <span aria-hidden="true" className="text-slate-300">
                ·
              </span>
              <span className="inline-flex items-center gap-1 text-emerald-700 font-semibold">
                <BadgeCheck className="w-4 h-4 shrink-0" />
                <span>Transparence 3 à 5 étoiles</span>
              </span>
            </div>
          </div>

          {/* Interactive Rating Filter Tabs */}
          <div
            role="group"
            aria-label="Filtrer les avis par note"
            className="inline-flex flex-wrap items-center gap-1 p-1 bg-slate-100 rounded-xl self-start lg:self-end"
          >
            {RATING_FILTERS.map((item) => {
              const count =
                item.id === 'all'
                  ? HOMEPAGE_REVIEWS.length
                  : HOMEPAGE_REVIEWS.filter((r) => r.rating === item.id).length;
              const active = ratingFilter === item.id;

              return (
                <button
                  key={String(item.id)}
                  type="button"
                  onClick={() => handleFilterChange(item.id)}
                  aria-pressed={active}
                  className={`px-3 py-2 min-h-[40px] rounded-lg text-xs font-bold transition-colors whitespace-nowrap shrink-0 cursor-pointer tabular-nums ${
                    active
                      ? 'bg-[#041e4d] text-white shadow-xs'
                      : 'text-slate-700 hover:text-[#041e4d] hover:bg-white/80'
                  }`}
                >
                  {item.label} ({count})
                </button>
              );
            })}
          </div>
        </div>

        {/* Animated Slider Viewport */}
        <div className="mt-7 overflow-hidden">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={`${String(ratingFilter)}-${safeSlideIndex}`}
              initial={{ opacity: 0, x: direction * 18 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction * -18 }}
              transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6"
            >
              {visibleReviews.map((review, index) => (
                <article
                  key={review.id}
                  className={`bg-[#f8fafd] border border-slate-200 rounded-xl p-5 sm:p-6 flex flex-col justify-between ${
                    visibleReviews.length === 3 && index === 2 ? 'md:col-span-2 lg:col-span-1' : ''
                  }`}
                >
                  <div>
                    {/* Top Row: Star Rating (out of 5) + Verified Icon */}
                    <div className="flex items-center justify-between gap-2 pb-3 border-b border-slate-200/80">
                      <div
                        className="flex items-center gap-1"
                        aria-label={`Note vérifiée : ${review.rating} sur 5`}
                      >
                        {Array.from({ length: 5 }).map((_, idx) => (
                          <Star
                            key={idx}
                            className={`w-4 h-4 shrink-0 ${
                              idx < review.rating
                                ? 'text-amber-400 fill-amber-400'
                                : 'text-slate-300'
                            }`}
                          />
                        ))}
                        <span className="ml-1.5 text-xs font-bold text-[#041e4d] tabular-nums">
                          {review.rating}/5
                        </span>
                      </div>

                      {review.verified !== false && (
                        <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-700 whitespace-nowrap shrink-0">
                          <BadgeCheck className="w-4 h-4 shrink-0" />
                          <span>Avis vérifié</span>
                        </span>
                      )}
                    </div>

                    <Quote className="w-5 h-5 text-[#dc141b] fill-[#dc141b]/15 mt-4 mb-2.5" />

                    <p className="text-sm sm:text-[15px] text-slate-700 leading-relaxed font-medium">
                      {review.quote}
                    </p>
                  </div>

                  {/* Author + Intervention Metadata */}
                  <div className="mt-5 pt-4 border-t border-slate-200/80 flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3 min-w-0">
                      {review.avatar ? (
                        <div className="relative w-10 h-10 rounded-full overflow-hidden border border-slate-200 shrink-0 bg-slate-200">
                          <Image
                            src={review.avatar}
                            alt={review.name}
                            fill
                            loading="lazy"
                            decoding="async"
                            quality={IMAGE_QUALITY.avatar}
                            placeholder="blur"
                            blurDataURL={LIGHT_BLUR_DATA_URL}
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

                      <div className="leading-tight min-w-0">
                        <p className="text-sm font-bold text-[#041e4d] truncate">
                          {review.name}
                        </p>
                        <p className="text-xs text-slate-500 mt-0.5 truncate">
                          {review.commune}
                        </p>
                      </div>
                    </div>

                    {(review.service || review.dateLabel) && (
                      <div className="text-right text-[11px] text-slate-500 leading-tight shrink-0">
                        {review.service && (
                          <p className="font-semibold text-[#041e4d]">{review.service}</p>
                        )}
                        {review.dateLabel && (
                          <p className="mt-0.5 tabular-nums">{review.dateLabel}</p>
                        )}
                      </div>
                    )}
                  </div>
                </article>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Slider Controls + Auto-Play Toggle */}
        <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handlePrev}
              disabled={totalSlides <= 1}
              className="min-w-[40px] min-h-[40px] p-2 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 disabled:opacity-40 text-[#041e4d] flex items-center justify-center transition-colors cursor-pointer disabled:cursor-default"
              aria-label="Avis précédents"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-1.5 px-2">
              {Array.from({ length: totalSlides }).map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => {
                    setDirection(idx >= safeSlideIndex ? 1 : -1);
                    setSlideIndex(idx);
                  }}
                  aria-label={`Afficher la diapositive d'avis ${idx + 1} sur ${totalSlides}`}
                  aria-current={safeSlideIndex === idx ? 'true' : undefined}
                  className={`h-2.5 rounded-full transition-all cursor-pointer ${
                    safeSlideIndex === idx
                      ? 'w-6 bg-[#041e4d]'
                      : 'w-2.5 bg-slate-300 hover:bg-slate-400'
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={handleNext}
              disabled={totalSlides <= 1}
              className="min-w-[40px] min-h-[40px] p-2 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 disabled:opacity-40 text-[#041e4d] flex items-center justify-center transition-colors cursor-pointer disabled:cursor-default"
              aria-label="Avis suivants"
            >
              <ChevronRight className="w-4 h-4" />
            </button>

            <span className="ml-1 text-xs font-semibold text-slate-500 tabular-nums">
              {safeSlideIndex + 1} / {totalSlides}
            </span>
          </div>

          {totalSlides > 1 && (
            <button
              type="button"
              onClick={() => setIsAutoPlaying((prev) => !prev)}
              aria-pressed={!isAutoPlaying}
              className="inline-flex items-center gap-1.5 px-3 py-2 min-h-[40px] rounded-lg border border-slate-200 bg-white hover:bg-slate-50 text-xs font-semibold text-slate-600 hover:text-[#041e4d] transition-colors cursor-pointer whitespace-nowrap shrink-0"
            >
              {isAutoPlaying ? (
                <>
                  <Pause className="w-3.5 h-3.5" />
                  <span>Pause</span>
                </>
              ) : (
                <>
                  <Play className="w-3.5 h-3.5" />
                  <span>Lecture auto</span>
                </>
              )}
            </button>
          )}
        </div>

        {/* Conversion Trust Strip */}
        <div className="mt-7 rounded-xl bg-[#031d4f] text-white p-5 sm:p-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
            <div>
              <p className="font-display text-base sm:text-lg font-extrabold text-white">
                Tarif annoncé avant intervention et travaux garantis 5 ans
              </p>
              <p className="text-xs sm:text-sm text-slate-300 mt-0.5 tabular-nums">
                Dépannage dès 75 € HTVA · Arrivée ≤ 30 min à Bruxelles et intervention 7j/7 en Wallonie.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 shrink-0">
            <a
              href={PHONE_HREF}
              className="inline-flex items-center justify-center gap-2 bg-[#dc141b] hover:bg-[#b91016] text-white font-bold text-xs sm:text-sm px-4 py-2.5 min-h-[42px] rounded-lg transition-colors whitespace-nowrap shrink-0 tabular-nums"
            >
              <Phone className="w-4 h-4 shrink-0" />
              <span>Appeler : {PHONE_DISPLAY}</span>
            </a>

            <button
              type="button"
              onClick={handleQuoteAction}
              className="inline-flex items-center justify-center gap-1.5 bg-white hover:bg-slate-100 text-[#041e4d] font-bold text-xs sm:text-sm px-4 py-2.5 min-h-[42px] rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              <span>Devis gratuit</span>
              <ArrowRight className="w-4 h-4 text-[#dc141b]" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
