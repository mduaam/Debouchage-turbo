'use client';

import { useState, useRef, useEffect } from 'react';
import {
  User,
  Phone,
  MapPin,
  PhoneCall,
  CheckCircle2,
  X,
} from 'lucide-react';
import {
  POSTAL_CODE_SUGGESTIONS,
  PostalCodeEntry,
  PHONE_DISPLAY,
  PHONE_HREF,
} from '@/lib/hydroheat-data';

interface ServiceQuoteCardProps {
  defaultServiceTitle?: string;
  defaultPostalCode?: string;
  heading?: string;
  subheading?: string;
  id?: string;
}

function normalizeText(value: string) {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim();
}

export function ServiceQuoteCard({
  defaultServiceTitle,
  defaultPostalCode = '',
  heading = 'Obtenez votre devis gratuit',
  subheading = 'Remplissez ce formulaire, un technicien vous rappelle en quelques minutes.',
  id = 'devis-form',
}: ServiceQuoteCardProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [postalCodeValue, setPostalCodeValue] = useState(defaultPostalCode);
  const [suggestionsOpen, setSuggestionsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState<{
    name: string;
    phone: string;
    postalLabel: string;
  } | null>(null);

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
    setPostalCodeValue(`${entry.code} — ${entry.commune}`);
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
      });
    }, 220);
  };

  return (
    <div
      id={id}
      className="bg-white text-slate-900 rounded-xl p-5 sm:p-6 shadow-2xl border border-slate-200"
    >
      <div className="flex flex-wrap items-start justify-between gap-2">
        <div>
          <p className="font-display text-lg sm:text-xl font-extrabold text-[#041e4d]">
            {heading}
          </p>
          <p className="text-xs sm:text-[13px] text-slate-500 mt-0.5">
            {subheading}
          </p>
        </div>
        {defaultServiceTitle && (
          <span className="inline-flex items-center text-xs font-semibold text-[#041e4d] bg-slate-100 px-2.5 py-1 rounded-md shrink-0">
            {defaultServiceTitle}
          </span>
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
                    setPostalCodeValue('');
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
              <label htmlFor={`${id}-name`} className="sr-only">
                Votre nom
              </label>
              <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                id={`${id}-name`}
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Votre nom"
                required
                className="w-full h-11 pl-10 pr-3.5 text-base sm:text-sm rounded-lg border border-slate-200 bg-slate-50/70 text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#041e4d]/20 focus:border-[#041e4d] transition-colors"
              />
            </div>

            <div className="relative">
              <label htmlFor={`${id}-phone`} className="sr-only">
                Votre téléphone
              </label>
              <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                id={`${id}-phone`}
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Votre téléphone"
                required
                className="w-full h-11 pl-10 pr-3.5 text-base sm:text-sm rounded-lg border border-slate-200 bg-slate-50/70 text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#041e4d]/20 focus:border-[#041e4d] transition-colors"
              />
            </div>
          </div>

          <div ref={postalWrapperRef} className="relative">
            <label htmlFor={`${id}-postal`} className="sr-only">
              Code postal
            </label>
            <MapPin className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              id={`${id}-postal`}
              type="text"
              inputMode="text"
              autoComplete="postal-code"
              role="combobox"
              aria-expanded={suggestionsOpen && filteredSuggestions.length > 0}
              aria-controls={`${id}-postal-listbox`}
              aria-autocomplete="list"
              value={postalCodeValue}
              onFocus={() => setSuggestionsOpen(true)}
              onChange={(e) => {
                setPostalCodeValue(e.target.value);
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
                  setPostalCodeValue('');
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
                id={`${id}-postal-listbox`}
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
  );
}
