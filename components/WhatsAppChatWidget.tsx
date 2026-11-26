'use client';

import { useState, useEffect, useRef } from 'react';
import {
  MessageCircle,
  X,
  Send,
  Phone,
  Clock,
  Check,
} from 'lucide-react';
import { PHONE_DISPLAY, PHONE_HREF, WHATSAPP_NUMBER } from '@/lib/hydroheat-data';

const QUICK_TOPICS = [
  { id: 'canalisation', label: 'Canalisation / Égout bouché' },
  { id: 'wc', label: 'WC bloqué en urgence' },
  { id: 'evier', label: 'Évier / Douche engorgé' },
  { id: 'fosse', label: 'Vidange fosse septique' },
] as const;

export function WhatsAppChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState<string>(QUICK_TOPICS[0].label);
  const [customDetails, setCustomDetails] = useState('');
  const wrapperRef = useRef<HTMLDivElement>(null);
  const launcherRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
        launcherRef.current?.focus();
      }
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const trimmedDetails = customDetails.trim();
  const composedMessage = trimmedDetails
    ? `Bonjour Debouchage Turbo, j'ai besoin d'une intervention pour : ${selectedTopic}. Précisions / Code postal : ${trimmedDetails}`
    : `Bonjour Debouchage Turbo, j'ai besoin d'une intervention urgente pour : ${selectedTopic}. Pouvez-vous me rappeler rapidement ?`;

  const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(composedMessage)}`;

  return (
    <div
      ref={wrapperRef}
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end gap-3"
    >
      {/* Chat Popover Card */}
      {isOpen && (
        <div
          id="whatsapp-support-panel"
          role="dialog"
          aria-label="Assistance immédiate WhatsApp Debouchage Turbo"
          className="w-[calc(100vw-2rem)] sm:w-[360px] rounded-2xl bg-white text-slate-900 shadow-2xl border border-slate-200 overflow-hidden transition-all duration-150"
        >
          {/* Header */}
          <div className="bg-[#031d4f] text-white px-4 py-3.5 flex items-start justify-between gap-3">
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-[#4ade80] shrink-0" />
                <p className="font-display text-sm font-extrabold tracking-tight truncate">
                  Debouchage Turbo · Chat Direct
                </p>
              </div>
              <p className="text-xs text-slate-300 mt-0.5 flex items-center gap-1.5">
                <Clock className="w-3 h-3 text-[#ef232a] shrink-0" />
                <span>Réponse immédiate 7j/7 – 24h/24</span>
              </p>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Fermer la fenêtre de chat"
              className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 text-white flex items-center justify-center shrink-0 transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Body */}
          <div className="p-4 space-y-3.5 bg-[#f8fafd]">
            <div className="bg-white rounded-xl border border-slate-200 p-3 text-xs sm:text-[13px] text-slate-700 leading-relaxed">
              Bonjour ! Décrivez brièvement votre urgence pour être mis en relation directe avec un déboucheur à Bruxelles ou en Belgique.
            </div>

            {/* Quick Situation Selector */}
            <div>
              <p className="text-xs font-bold text-[#041e4d] mb-2">
                Nature de votre urgence
              </p>
              <div className="grid grid-cols-1 gap-1.5">
                {QUICK_TOPICS.map((topic) => {
                  const isSelected = selectedTopic === topic.label;
                  return (
                    <button
                      key={topic.id}
                      type="button"
                      onClick={() => setSelectedTopic(topic.label)}
                      className={`w-full text-left px-3 py-2 rounded-lg text-xs font-semibold border flex items-center justify-between gap-2 transition-colors cursor-pointer ${
                        isSelected
                          ? 'bg-[#041e4d] text-white border-[#041e4d]'
                          : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                      }`}
                    >
                      <span className="truncate">{topic.label}</span>
                      {isSelected && <Check className="w-3.5 h-3.5 shrink-0 text-[#4ade80]" />}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Optional Postal Code / Message */}
            <div>
              <label htmlFor="wa-quick-details" className="block text-xs font-bold text-[#041e4d] mb-1.5">
                Code postal ou précision (optionnel)
              </label>
              <input
                id="wa-quick-details"
                type="text"
                value={customDetails}
                onChange={(e) => setCustomDetails(e.target.value)}
                placeholder="Ex : 1050 Ixelles, eau qui remonte..."
                className="w-full h-10 px-3 rounded-lg border border-slate-200 bg-white text-base sm:text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#041e4d]/20 focus:border-[#041e4d]"
              />
            </div>

            {/* Primary WhatsApp Launch Link */}
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full min-h-[44px] px-4 py-2.5 rounded-lg bg-[#15803d] hover:bg-[#166534] text-white font-bold text-sm inline-flex items-center justify-center gap-2 shadow-md transition-colors whitespace-nowrap"
            >
              <Send className="w-4 h-4 shrink-0" />
              <span>Démarrer sur WhatsApp</span>
            </a>

            {/* Emergency Direct Call Fallback */}
            <div className="pt-2 border-t border-slate-200 flex items-center justify-between gap-2 text-xs">
              <span className="text-slate-600">Besoin d&apos;appeler de suite ?</span>
              <a
                href={PHONE_HREF}
                className="inline-flex items-center gap-1.5 font-bold text-[#dc141b] hover:underline tabular-nums whitespace-nowrap shrink-0"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>{PHONE_DISPLAY}</span>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Floating Launcher Button */}
      <button
        ref={launcherRef}
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        aria-controls="whatsapp-support-panel"
        aria-label={isOpen ? 'Fermer le chat WhatsApp' : 'Ouvrir le chat WhatsApp d’urgence'}
        className="h-12 sm:h-[52px] px-4 sm:px-5 rounded-full bg-[#15803d] hover:bg-[#166534] text-white shadow-xl border border-white/20 inline-flex items-center gap-2.5 transition-transform duration-150 hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#041e4d] focus-visible:ring-offset-2 cursor-pointer whitespace-nowrap shrink-0"
      >
        {isOpen ? (
          <>
            <X className="w-5 h-5 shrink-0" />
            <span className="font-display text-sm font-bold">Fermer</span>
          </>
        ) : (
          <>
            <MessageCircle className="w-5 h-5 shrink-0" />
            <span className="font-display text-xs sm:text-sm font-bold">
              WhatsApp · Urgent 24/7
            </span>
          </>
        )}
      </button>
    </div>
  );
}
