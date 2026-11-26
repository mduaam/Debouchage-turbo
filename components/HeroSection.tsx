'use client';

import { useState, useRef, useEffect, RefObject } from 'react';
import Image from 'next/image';
import {
  Zap,
  Clock,
  ShieldCheck,
  Star,
  User,
  Phone,
  MapPin,
  PhoneCall,
  Award,
  CheckCircle2,
  X,
} from 'lucide-react';
import {
  POSTAL_CODE_SUGGESTIONS,
  PostalCodeEntry,
  PHONE_DISPLAY,
  PHONE_HREF,
} from '@/lib/hydroheat-data';
import {
  IMAGE_QUALITY,
  NAVY_BLUR_DATA_URL,
  SERVICE_IMAGE_SIZES,
} from '@/lib/image-optimization';
import { BelgianFlag } from './BrandMark';

interface HeroSectionProps {
  postalCodeValue: string;
  onPostalCodeChange: (value: string) => void;
  selectedServiceName: string | null;
  onClearServiceName: () => void;
  nameInputRef: RefObject<HTMLInputElement | null>;
}

function normalizeText(value: string) {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim();
}

export function HeroSection({
  postalCodeValue,
  onPostalCodeChange,
  selectedServiceName,
  onClearServiceName,
  nameInputRef,
}: HeroSectionProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [suggestionsOpen, setSuggestionsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const [error, setError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState<{
    name: string;
    phone: string;
    postalLabel: string;
    service: string | null;
  } | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const postalWrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutside = (e: MouseEvent) => {
      if (postalWrapperRef.current && !postalWrapperRef.current.contains(e.target as Node)) {
        setSuggestionsOpen(false);
        setActiveIndex(-1);
      }
    };
    document.addEventListener('mousedown', handleOutside);
    return () => document.removeEventListener('mousedown', handleOutside);
  }, []);

  const query = normalizeText(postalCodeValue);
  const filteredSuggestions: PostalCodeEntry[] = query
    ? POSTAL_CODE_SUGGESTIONS.filter((entry) => {
        const formatted = normalizeText(`${entry.code} — ${entry.commune}`);
        return (
          entry.code.startsWith(query) ||
          normalizeText(entry.commune).includes(query) ||
          formatted.includes(query)
        );
      }).slice(0, 7)
    : POSTAL_CODE_SUGGESTIONS.slice(0, 6);

  const selectSuggestion = (entry: PostalCodeEntry) => {
    onPostalCodeChange(`${entry.code} — ${entry.commune}`);
    setSuggestionsOpen(false);
    setActiveIndex(-1);
    setError(null);
  };

  const handlePostalKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!suggestionsOpen && (e.key === 'ArrowDown' || e.key === 'ArrowUp')) {
      setSuggestionsOpen(true);
      return;
    }

    if (!suggestionsOpen || filteredSuggestions.length === 0) return;

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActiveIndex((prev) => (prev + 1) % filteredSuggestions.length);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActiveIndex((prev) => (prev <= 0 ? filteredSuggestions.length - 1 : prev - 1));
    } else if (e.key === 'Enter' && activeIndex >= 0) {
      e.preventDefault();
      selectSuggestion(filteredSuggestions[activeIndex]);
    } else if (e.key === 'Escape') {
      setSuggestionsOpen(false);
      setActiveIndex(-1);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    const trimmedName = name.trim();
    const cleanedPhone = phone.replace(/[\s.-]/g, '');
    const trimmedPostal = postalCodeValue.trim();

    if (trimmedName.length < 2) {
      setError('Veuillez indiquer votre nom complet.');
      return;
    }

    if (!/^(\+?\d{8,14})$/.test(cleanedPhone)) {
      setError('Veuillez saisir un numéro de téléphone belge ou international valide.');
      return;
    }

    const postalDigitsMatch = trimmedPostal.match(/\b([1-9]\d{3})\b/);
    const matchingCommune = POSTAL_CODE_SUGGESTIONS.find(
      (entry) => normalizeText(entry.commune) === normalizeText(trimmedPostal)
    );

    if (!postalDigitsMatch && !matchingCommune) {
      setError('Veuillez saisir ou sélectionner un code postal belge valide (ex: 1000, 1050).');
      return;
    }

    const resolvedLabel = matchingCommune
      ? `${matchingCommune.code} — ${matchingCommune.commune}`
      : trimmedPostal;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSuggestionsOpen(false);
      setSubmitted({
        name: trimmedName,
        phone: phone.trim(),
        postalLabel: resolvedLabel,
        service: selectedServiceName,
      });
    }, 220);
  };

  return (
    <section
      id="accueil"
      className="relative overflow-hidden bg-[#031d4f] text-white"
    >
      {/* Background photograph on right side blended smoothly into deep navy on desktop */}
      <div className="hidden lg:block absolute inset-y-0 right-0 w-[64%] xl:w-[66%] pointer-events-none select-none">
        <Image
          src="/assets/aistudio/IMG_20261126_161752_d9940569.png"
          alt="Technicien Debouchage Turbo devant son utilitaire debouchage-turbo.be à Bruxelles"
          fill
          priority
          fetchPriority="high"
          decoding="sync"
          quality={IMAGE_QUALITY.hero}
          placeholder="blur"
          blurDataURL={NAVY_BLUR_DATA_URL}
          referrerPolicy="no-referrer"
          className="object-cover object-[36%_top]"
          sizes={SERVICE_IMAGE_SIZES.homeHeroDesktop}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(90deg, #031d4f 0%, rgba(3,29,79,0.96) 16%, rgba(3,29,79,0.6) 32%, rgba(3,29,79,0.1) 50%, rgba(3,29,79,0.08) 100%)',
          }}
        />
        <div
          className="absolute inset-x-0 top-0 h-14"
          style={{
            background: 'linear-gradient(180deg, rgba(3,29,79,0.8) 0%, transparent 100%)',
          }}
        />
        <div
          className="absolute inset-x-0 bottom-0 h-28"
          style={{
            background: 'linear-gradient(0deg, #031d4f 0%, rgba(3,29,79,0.65) 45%, transparent 100%)',
          }}
        />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 pt-6 pb-8 sm:pt-8 lg:pt-11 lg:pb-11">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-end">
          {/* Left Column: Headline + KPIs + Callback Form */}
          <div className="lg:col-span-6">
            {/* Emergency Tag */}
            <div className="inline-flex items-center gap-2 bg-[#dc141b] text-white px-3 sm:px-3.5 py-1.5 rounded-md text-xs sm:text-sm font-bold shadow-md">
              <Zap className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-white shrink-0" />
              <span>Dépannage d&apos;urgence 7j/7 – 24h/24</span>
            </div>

            {/* Hero Headline */}
            <h1 className="font-display text-[28px] sm:text-[40px] lg:text-[46px] font-extrabold leading-[1.12] tracking-tight text-white mt-3.5 sm:mt-4 text-balance">
              Débouchage de Canalisation à{' '}
              <span className="text-[#ef232a]">Bruxelles</span> et en Wallonie
            </h1>

            <p className="text-sm sm:text-base text-slate-200 leading-relaxed mt-3 max-w-xl">
              Débouchage canalisation, WC, évier, sterput, curage haute pression et vidange de fosse septique{' '}
              <strong className="text-white tabular-nums">dès 75 € HTVA</strong>. Intervention rapide avec tarif annoncé avant départ.
            </p>

            {/* 3 Trust KPIs */}
            <div className="grid grid-cols-1 min-[400px]:grid-cols-3 gap-3 sm:gap-4 mt-5 mb-6 py-3 sm:py-2.5 border-y border-white/10">
              <div className="flex items-center gap-2.5">
                <span className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/10 border border-white/20 flex items-center justify-center shrink-0">
                  <Clock className="w-4 h-4 text-white" />
                </span>
                <div className="leading-tight min-w-0">
                  <p className="text-[11px] sm:text-xs text-slate-300">Intervention</p>
                  <p className="text-xs sm:text-sm font-bold text-white tabular-nums">≤ 30 min</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <span className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-emerald-500/15 border border-emerald-400/30 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                </span>
                <div className="leading-tight min-w-0">
                  <p className="text-[11px] sm:text-xs text-slate-300">Travail Garanti</p>
                  <p className="text-xs sm:text-sm font-bold text-white tabular-nums">5 Ans</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <span className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-amber-400/15 border border-amber-400/30 flex items-center justify-center shrink-0">
                  <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                </span>
                <div className="leading-tight min-w-0">
                  <p className="text-xs sm:text-sm font-bold text-white tabular-nums">+4.8/5</p>
                  <p className="text-[11px] sm:text-xs text-slate-300">(2500+ avis)</p>
                </div>
              </div>
            </div>

            {/* Lead Capture Callback Form Card */}
            <div
              id="devis-form"
              className="bg-white text-slate-900 rounded-xl p-4 sm:p-6 shadow-2xl border border-slate-100"
            >
              <div className="flex flex-wrap items-start justify-between gap-2">
                <div>
                  <h2 className="font-display text-lg sm:text-xl font-extrabold text-[#041e4d]">
                    Obtenez votre devis gratuit
                  </h2>
                  <p className="text-xs sm:text-[13px] text-slate-500 mt-0.5">
                    Remplissez ce formulaire, nous vous rappelons rapidement.
                  </p>
                </div>
                {selectedServiceName && (
                  <button
                    type="button"
                    onClick={onClearServiceName}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-[#041e4d] bg-slate-100 hover:bg-slate-200 px-2.5 py-1 rounded-md shrink-0 cursor-pointer"
                    title="Retirer le service sélectionné"
                  >
                    <span className="truncate max-w-[160px]">{selectedServiceName}</span>
                    <X className="w-3.5 h-3.5 shrink-0" />
                  </button>
                )}
              </div>

              {submitted ? (
                <div className="mt-4 rounded-lg bg-emerald-50 border border-emerald-200 p-4 text-emerald-950">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <div className="text-sm">
                      <p className="font-bold">Demande de rappel enregistrée !</p>
                      <p className="text-emerald-800 mt-1 leading-relaxed">
                        Merci <span className="font-semibold">{submitted.name}</span>. Un technicien Debouchage Turbo
                        pour le secteur <span className="font-semibold">{submitted.postalLabel}</span> vous rappelle au{' '}
                        <span className="font-semibold tabular-nums">{submitted.phone}</span> dans les prochaines minutes.
                      </p>
                      <div className="mt-3 flex flex-wrap items-center gap-3">
                        <button
                          type="button"
                          onClick={() => {
                            setSubmitted(null);
                            setName('');
                            setPhone('');
                          }}
                          className="text-xs font-semibold text-emerald-800 underline hover:text-emerald-950 cursor-pointer"
                        >
                          Envoyer une autre demande
                        </button>
                        <a
                          href={PHONE_HREF}
                          className="text-xs font-semibold text-[#dc141b] hover:underline"
                        >
                          Urgence ? Appelez le {PHONE_DISPLAY}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-4 space-y-3" noValidate>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="relative">
                      <label htmlFor="hero-name" className="sr-only">
                        Votre nom
                      </label>
                      <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                      <input
                        ref={nameInputRef}
                        id="hero-name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Votre nom"
                        required
                        className="w-full h-11 pl-10 pr-3.5 text-base sm:text-sm rounded-lg border border-slate-200 bg-slate-50/70 text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#041e4d]/20 focus:border-[#041e4d] transition-colors"
                      />
                    </div>

                    <div className="relative">
                      <label htmlFor="hero-phone" className="sr-only">
                        Votre téléphone
                      </label>
                      <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                      <input
                        id="hero-phone"
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="Votre téléphone"
                        required
                        className="w-full h-11 pl-10 pr-3.5 text-base sm:text-sm rounded-lg border border-slate-200 bg-slate-50/70 text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#041e4d]/20 focus:border-[#041e4d] transition-colors"
                      />
                    </div>
                  </div>

                  {/* Postal Code Input with Auto-Suggestions */}
                  <div ref={postalWrapperRef} className="relative">
                    <label htmlFor="hero-postal" className="sr-only">
                      Code postal
                    </label>
                    <MapPin className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      id="hero-postal"
                      type="text"
                      inputMode="text"
                      autoComplete="postal-code"
                      role="combobox"
                      aria-expanded={suggestionsOpen && filteredSuggestions.length > 0}
                      aria-controls="postal-suggestions-listbox"
                      aria-autocomplete="list"
                      value={postalCodeValue}
                      onFocus={() => setSuggestionsOpen(true)}
                      onChange={(e) => {
                        onPostalCodeChange(e.target.value);
                        setSuggestionsOpen(true);
                        setActiveIndex(-1);
                      }}
                      onKeyDown={handlePostalKeyDown}
                      placeholder="Code postal (ex: 1000, 1050, Ixelles...)"
                      required
                      className="w-full h-11 pl-10 pr-9 text-base sm:text-sm rounded-lg border border-slate-200 bg-slate-50/70 text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#041e4d]/20 focus:border-[#041e4d] transition-colors"
                    />

                    {postalCodeValue && (
                      <button
                        type="button"
                        onClick={() => {
                          onPostalCodeChange('');
                          setSuggestionsOpen(true);
                          setActiveIndex(-1);
                        }}
                        aria-label="Effacer le code postal"
                        className="absolute right-2.5 top-1/2 -translate-y-1/2 p-1 rounded-md text-slate-400 hover:text-slate-700 hover:bg-slate-200/70 transition-colors cursor-pointer"
                      >
                        <X className="w-3.5 h-3.5" />
                      </button>
                    )}

                    {suggestionsOpen && (
                      <div
                        id="postal-suggestions-listbox"
                        role="listbox"
                        aria-label="Suggestions de codes postaux"
                        className="absolute left-0 right-0 top-full mt-1.5 z-30 bg-white border border-slate-200 rounded-xl shadow-xl overflow-hidden max-h-56 overflow-y-auto"
                      >
                        {filteredSuggestions.length > 0 ? (
                          filteredSuggestions.map((entry, idx) => {
                            const isActive = idx === activeIndex;
                            return (
                              <button
                                key={`${entry.code}-${entry.commune}`}
                                type="button"
                                role="option"
                                aria-selected={isActive}
                                onMouseDown={(e) => {
                                  e.preventDefault();
                                  selectSuggestion(entry);
                                }}
                                onMouseEnter={() => setActiveIndex(idx)}
                                className={`w-full text-left px-3.5 py-2.5 text-sm flex items-center justify-between gap-3 transition-colors cursor-pointer ${
                                  isActive
                                    ? 'bg-[#f1f5fb] text-[#041e4d]'
                                    : 'text-slate-700 hover:bg-slate-50'
                                }`}
                              >
                                <span className="flex items-center gap-2.5 min-w-0">
                                  <MapPin className="w-3.5 h-3.5 text-[#dc141b] shrink-0" />
                                  <span className="font-bold text-[#041e4d] tabular-nums shrink-0">
                                    {entry.code}
                                  </span>
                                  <span className="text-slate-400" aria-hidden="true">
                                    —
                                  </span>
                                  <span className="truncate font-medium">{entry.commune}</span>
                                </span>
                              </button>
                            );
                          })
                        ) : (
                          <div className="px-3.5 py-2.5 text-xs text-slate-500">
                            Aucune suggestion — vous pouvez saisir directement un code postal belge à 4 chiffres.
                          </div>
                        )}
                      </div>
                    )}
                  </div>

                  {error && (
                    <p role="alert" className="text-xs font-medium text-[#dc141b]">
                      {error}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full min-h-[44px] h-11 bg-[#dc141b] hover:bg-[#b91016] disabled:opacity-70 text-white font-bold text-sm sm:text-[15px] rounded-lg inline-flex items-center justify-center gap-2 shadow-md transition-colors cursor-pointer"
                  >
                    <PhoneCall className="w-4 h-4 shrink-0" />
                    <span>{isSubmitting ? 'Envoi en cours...' : 'Être rappelé gratuitement'}</span>
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Right Column: Mobile/Tablet preview + Trust Badges Bar */}
          <div className="lg:col-span-6 flex flex-col justify-end items-stretch lg:items-end">
            <div className="lg:hidden relative h-48 sm:h-64 md:h-72 rounded-xl overflow-hidden border border-white/15 mb-4">
              <Image
                src="/assets/aistudio/IMG_20261126_161752_d9940569.png"
                alt="Technicien Debouchage Turbo devant son utilitaire debouchage-turbo.be à Bruxelles"
                fill
                priority
                fetchPriority="high"
                decoding="sync"
                quality={IMAGE_QUALITY.hero}
                placeholder="blur"
                blurDataURL={NAVY_BLUR_DATA_URL}
                referrerPolicy="no-referrer"
                className="object-cover object-[42%_12%]"
                sizes={SERVICE_IMAGE_SIZES.homeHeroMobile}
              />
            </div>

            <div className="w-full lg:w-auto bg-[#021740]/85 backdrop-blur-md border border-white/15 rounded-xl px-4 sm:px-5 py-3 grid grid-cols-1 min-[460px]:grid-cols-3 gap-3 sm:gap-5 text-white shadow-xl">
              <div className="flex items-center gap-2.5">
                <BelgianFlag className="w-6 h-4" />
                <div className="leading-tight">
                  <p className="text-xs sm:text-[13px] font-bold">Entreprise</p>
                  <p className="text-[11px] sm:text-xs text-slate-300">Belge</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5 min-[460px]:border-l min-[460px]:border-white/15 min-[460px]:pl-3 sm:pl-5 pt-2 min-[460px]:pt-0 border-t min-[460px]:border-t-0 border-white/10">
                <Award className="w-6 h-6 text-amber-400 shrink-0" />
                <div className="leading-tight">
                  <p className="text-xs sm:text-[13px] font-bold tabular-nums">20+ Ans</p>
                  <p className="text-[11px] sm:text-xs text-slate-300">d&apos;expérience</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5 min-[460px]:border-l min-[460px]:border-white/15 min-[460px]:pl-3 sm:pl-5 pt-2 min-[460px]:pt-0 border-t min-[460px]:border-t-0 border-white/10">
                <ShieldCheck className="w-6 h-6 text-emerald-400 shrink-0" />
                <div className="leading-tight">
                  <p className="text-xs sm:text-[13px] font-bold">Lic. BCE</p>
                  <p className="text-[10px] sm:text-[11px] text-slate-300 tabular-nums whitespace-nowrap">
                    BE 0812.345.678
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
