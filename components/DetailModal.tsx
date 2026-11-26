'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import { X, CheckCircle2, Clock, ShieldCheck, Phone, ArrowRight } from 'lucide-react';
import { ServiceItem, PHONE_DISPLAY, PHONE_HREF } from '@/lib/hydroheat-data';

export type ModalState =
  | { type: 'service'; service: ServiceItem }
  | { type: 'about' }
  | { type: 'legal'; tab: 'mentions' | 'confidentialite' | 'conditions' }
  | null;

interface DetailModalProps {
  modal: ModalState;
  onClose: () => void;
  onRequestServiceQuote: (serviceTitle: string) => void;
}

export function DetailModal({
  modal,
  onClose,
  onRequestServiceQuote,
}: DetailModalProps) {
  useEffect(() => {
    if (!modal) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [modal, onClose]);

  if (!modal) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/65 backdrop-blur-xs"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-xl max-h-[90dvh] overflow-y-auto rounded-2xl bg-white text-slate-900 shadow-2xl border border-slate-200"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Fermer la fenêtre"
          className="absolute top-3.5 right-3.5 z-10 w-8 h-8 rounded-full bg-white/90 hover:bg-slate-100 text-slate-700 border border-slate-200 flex items-center justify-center transition-colors cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        {modal.type === 'service' && (
          <div>
            <div className="relative h-48 w-full bg-slate-100">
              <Image
                src={modal.service.image}
                alt={modal.service.imageAlt}
                fill
                referrerPolicy="no-referrer"
                className="object-cover"
                sizes="576px"
              />
            </div>
            <div className="p-6">
              <div className="flex flex-wrap items-center gap-2 text-xs text-slate-600">
                <span className="inline-flex items-center gap-1 font-semibold text-[#041e4d]">
                  <Clock className="w-3.5 h-3.5 text-[#dc141b]" />
                  {modal.service.responseDelay}
                </span>
                <span aria-hidden="true">·</span>
                <span className="font-semibold text-emerald-700">{modal.service.startingPrice}</span>
              </div>

              <h3 className="font-display text-2xl font-extrabold text-[#041e4d] mt-2">
                {modal.service.title}
              </h3>
              <p className="text-sm text-slate-600 mt-1">{modal.service.shortDescription}</p>

              <ul className="mt-4 space-y-2.5">
                {modal.service.highlights.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center gap-3">
                <button
                  type="button"
                  onClick={() => onRequestServiceQuote(modal.service.title)}
                  className="w-full sm:flex-1 h-11 bg-[#dc141b] hover:bg-[#b91016] text-white font-bold text-sm rounded-lg inline-flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  <span>Demander un devis gratuit</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <a
                  href={PHONE_HREF}
                  className="w-full sm:w-auto h-11 px-4 bg-[#041e4d] hover:bg-[#06296b] text-white font-bold text-sm rounded-lg inline-flex items-center justify-center gap-2 transition-colors tabular-nums"
                >
                  <Phone className="w-4 h-4" />
                  <span>{PHONE_DISPLAY}</span>
                </a>
              </div>
            </div>
          </div>
        )}

        {modal.type === 'about' && (
          <div className="p-6 sm:p-7">
            <p className="text-xs font-bold text-[#dc141b]">À propos de Debouchage Turbo</p>
            <h3 className="font-display text-2xl font-extrabold text-[#041e4d] mt-1">
              Plus de 20 ans d&apos;expertise en débouchage de canalisation à Bruxelles
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed mt-3">
              Basée à Bruxelles, Debouchage Turbo rassemble des techniciens spécialisés disponibles 7j/7 et 24h/24 pour le débouchage de canalisation, le curage haute pression, l&apos;inspection caméra et le dépannage sanitaire urgent.
            </p>
            <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <p className="text-xs text-slate-500">Entreprise enregistrée</p>
                <p className="font-display text-sm font-bold text-[#041e4d] mt-0.5 tabular-nums">
                  BCE BE 0812.345.678
                </p>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <p className="text-xs text-slate-500">Garantie intervention & pièces</p>
                <p className="font-display text-sm font-bold text-emerald-700 mt-0.5 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4" />
                  Travail garanti 5 ans
                </p>
              </div>
            </div>
            <div className="mt-6 flex justify-end">
              <button
                type="button"
                onClick={() => onRequestServiceQuote('Débouchage de Canalisation')}
                className="h-10 px-5 bg-[#dc141b] hover:bg-[#b91016] text-white font-bold text-sm rounded-lg inline-flex items-center gap-2 transition-colors cursor-pointer"
              >
                <span>Demander un devis</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {modal.type === 'legal' && (
          <div className="p-6 sm:p-7">
            <p className="text-xs font-bold text-[#dc141b]">Informations réglementaires</p>
            <h3 className="font-display text-xl font-extrabold text-[#041e4d] mt-1">
              {modal.tab === 'mentions' && 'Mentions légales'}
              {modal.tab === 'confidentialite' && 'Politique de confidentialité'}
              {modal.tab === 'conditions' && 'Conditions générales d’intervention'}
            </h3>
            <div className="mt-3 text-sm text-slate-600 space-y-2.5 leading-relaxed">
              {modal.tab === 'mentions' && (
                <>
                  <p>
                    <strong>Debouchage Turbo SRL</strong> — Débouchage de canalisation, curage haute pression et dépannage urgent à Bruxelles et en Belgique.
                  </p>
                  <p>Numéro d&apos;entreprise BCE : BE 0812.345.678 · Téléphone : {PHONE_DISPLAY}.</p>
                </>
              )}
              {modal.tab === 'confidentialite' && (
                <p>
                  Les coordonnées saisies dans le formulaire de rappel gratuit et la newsletter sont utilisées exclusivement pour vous recontacter au sujet de votre demande d&apos;intervention, conformément au RGPD en vigueur en Belgique.
                </p>
              )}
              {modal.tab === 'conditions' && (
                <p>
                  Tout dépannage fait l&apos;objet d&apos;une annonce tarifaire claire avant exécution. Les installations et réparations réalisées par nos techniciens agréés bénéficient d&apos;une garantie de 5 ans pièces et main-d&apos;œuvre.
                </p>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
