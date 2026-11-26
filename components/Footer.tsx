'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Globe, Share2, Camera, Briefcase, CheckCircle2, X } from 'lucide-react';
import { BrandMark, BelgianFlag } from './BrandMark';
import { SERVICES, PHONE_DISPLAY } from '@/lib/hydroheat-data';

interface FooterProps {
  onSelectCommune?: (commune: string) => void;
  onOpenAbout?: () => void;
  onOpenLegal?: (tab: 'mentions' | 'confidentialite' | 'conditions') => void;
}

export function Footer({
  onSelectCommune: _onSelectCommune,
  onOpenAbout,
  onOpenLegal,
}: FooterProps) {
  const [email, setEmail] = useState('');
  const [newsletterError, setNewsletterError] = useState<string | null>(null);
  const [subscribed, setSubscribed] = useState(false);
  const [internalLegalTab, setInternalLegalTab] = useState<
    'mentions' | 'confidentialite' | 'conditions' | null
  >(null);

  const footerZones = [
    { slug: 'bruxelles', label: 'Bruxelles' },
    { slug: 'ixelles', label: 'Ixelles' },
    { slug: 'uccle', label: 'Uccle' },
    { slug: 'anderlecht', label: 'Anderlecht' },
    { slug: 'namur', label: 'Namur' },
    { slug: 'liege', label: 'Liège' },
    { slug: 'charleroi', label: 'Charleroi' },
    { slug: 'waterloo', label: 'Waterloo' },
  ];

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    setNewsletterError(null);
    const trimmed = email.trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
      setNewsletterError('Adresse email invalide.');
      return;
    }
    setSubscribed(true);
    setEmail('');
  };

  const openLegal = (tab: 'mentions' | 'confidentialite' | 'conditions') => {
    if (onOpenLegal) {
      onOpenLegal(tab);
    } else {
      setInternalLegalTab(tab);
    }
  };

  return (
    <footer className="bg-[#021840] text-slate-300 border-t border-white/10">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-10 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-12 gap-8">
          {/* Column 1: Brand + Description + Social Icons */}
          <div className="sm:col-span-2 md:col-span-3 lg:col-span-3">
            <Link href="/#accueil" className="inline-block">
              <BrandMark />
            </Link>
            <p className="text-xs sm:text-[13px] text-slate-300 leading-relaxed mt-4">
              Votre spécialiste du débouchage de canalisation, curage haute pression et dépannage urgent à Bruxelles et en Belgique.
            </p>
            <div className="mt-5 flex items-center gap-2.5">
              <Link
                href="/#temoignages"
                aria-label="Notre fiche Google Avis"
                className="w-8 h-8 rounded-full border border-white/25 hover:border-white hover:bg-white/10 flex items-center justify-center text-white transition-colors"
              >
                <Globe className="w-3.5 h-3.5" />
              </Link>
              <Link
                href="/#accueil"
                aria-label="Partager Debouchage Turbo"
                className="w-8 h-8 rounded-full border border-white/25 hover:border-white hover:bg-white/10 flex items-center justify-center text-white transition-colors"
              >
                <Share2 className="w-3.5 h-3.5" />
              </Link>
              <Link
                href="/services"
                aria-label="Nos réalisations et services"
                className="w-8 h-8 rounded-full border border-white/25 hover:border-white hover:bg-white/10 flex items-center justify-center text-white transition-colors"
              >
                <Camera className="w-3.5 h-3.5" />
              </Link>
              <Link
                href="/a-propos"
                aria-label="Profil entreprise Debouchage Turbo"
                className="w-8 h-8 rounded-full border border-white/25 hover:border-white hover:bg-white/10 flex items-center justify-center text-white transition-colors"
              >
                <Briefcase className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Column 2: Nos Services */}
          <div className="lg:col-span-2">
            <h3 className="font-display text-sm font-bold text-white">Nos Services</h3>
            <ul className="mt-3.5 space-y-2 text-xs sm:text-[13px]">
              <li>
                <Link href="/services" className="font-semibold text-white hover:text-[#ef232a] transition-colors">
                  Tous nos services
                </Link>
              </li>
              {SERVICES.map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/services/${service.id}`}
                    className="hover:text-white transition-colors text-left block"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Liens utiles */}
          <div className="lg:col-span-2">
            <h3 className="font-display text-sm font-bold text-white">Liens utiles</h3>
            <ul className="mt-3.5 space-y-2 text-xs sm:text-[13px]">
              <li>
                <Link href="/a-propos" className="hover:text-white transition-colors">
                  À Propos
                </Link>
              </li>
              <li>
                <Link href="/tarifs" className="hover:text-white transition-colors">
                  Tarifs &amp; Devis
                </Link>
              </li>
              <li>
                <Link href="/conseils" className="hover:text-white transition-colors">
                  Conseils &amp; Guides
                </Link>
              </li>
              <li>
                <Link href="/conseils/locataire-ou-proprietaire" className="hover:text-white transition-colors">
                  Qui paie : locataire / bailleur ?
                </Link>
              </li>
              <li>
                <Link
                  href="/conseils/deboucher-canalisation-naturellement-vs-acide"
                  className="hover:text-white transition-colors"
                >
                  Débouchage naturel vs acide
                </Link>
              </li>
              <li>
                <Link
                  href="/conseils/bruit-glouglou-canalisation-causes-solutions"
                  className="hover:text-white transition-colors"
                >
                  Bruit de glouglou canalisation
                </Link>
              </li>
              <li>
                <Link
                  href="/conseils/comment-savoir-si-fosse-septique-est-pleine"
                  className="hover:text-white transition-colors"
                >
                  Fosse septique pleine : signes
                </Link>
              </li>
              <li>
                <Link href="/zones-d-intervention" className="hover:text-white transition-colors">
                  Zones d&apos;intervention
                </Link>
              </li>
              <li>
                <Link href="/#temoignages" className="hover:text-white transition-colors">
                  Avis Clients
                </Link>
              </li>
              <li>
                <Link href="/#faq" className="hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Zones d'intervention */}
          <div className="lg:col-span-2">
            <h3 className="font-display text-sm font-bold text-white">Zones d&apos;intervention</h3>
            <ul className="mt-3.5 space-y-2 text-xs sm:text-[13px]">
              <li>
                <Link
                  href="/zones-d-intervention"
                  className="font-semibold text-white hover:text-[#ef232a] transition-colors block"
                >
                  Toutes nos zones
                </Link>
              </li>
              {footerZones.map((zone) => (
                <li key={zone.slug}>
                  <Link
                    href={`/zones-d-intervention/${zone.slug}`}
                    className="hover:text-white transition-colors text-left block"
                  >
                    {zone.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5: Newsletter */}
          <div className="sm:col-span-2 md:col-span-3 lg:col-span-3">
            <h3 className="font-display text-sm font-bold text-white">Newsletter</h3>
            <p className="text-xs sm:text-[13px] text-slate-300 mt-3.5">
              Recevez nos conseils et nos offres exclusives !
            </p>

            {subscribed ? (
              <div className="mt-3 rounded-lg bg-emerald-500/15 border border-emerald-400/30 p-3 text-xs text-emerald-200 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Merci ! Votre inscription est confirmée.</span>
              </div>
            ) : (
              <form onSubmit={handleNewsletter} className="mt-3 space-y-2" noValidate>
                <label htmlFor="footer-newsletter" className="sr-only">
                  Votre email
                </label>
                <input
                  id="footer-newsletter"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Votre email"
                  required
                  className="w-full h-11 sm:h-10 px-3.5 rounded-lg bg-white text-slate-900 placeholder:text-slate-400 text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#ef232a]"
                />
                {newsletterError && (
                  <p className="text-xs text-red-300">{newsletterError}</p>
                )}
                <button
                  type="submit"
                  className="w-full min-h-[44px] sm:min-h-0 h-11 sm:h-10 bg-[#dc141b] hover:bg-[#b91016] text-white font-bold text-sm rounded-lg transition-colors cursor-pointer"
                >
                  S&apos;abonner
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Bottom Legal Bar */}
      <div className="border-t border-white/10 bg-[#011333]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-2 gap-y-1">
            <span>© 2025 Debouchage Turbo. Tous droits réservés.</span>
            <span aria-hidden="true">|</span>
            <button
              type="button"
              onClick={() => openLegal('mentions')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Mentions légales
            </button>
            <span aria-hidden="true">|</span>
            <button
              type="button"
              onClick={() => openLegal('confidentialite')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Politique de confidentialité
            </button>
            <span aria-hidden="true">|</span>
            <button
              type="button"
              onClick={() => openLegal('conditions')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Conditions générales
            </button>
          </div>

          <div className="inline-flex items-center gap-2 text-slate-200 font-semibold shrink-0">
            <BelgianFlag className="w-5 h-3.5" />
            <span>Entreprise Belge</span>
          </div>
        </div>
      </div>

      {/* Standalone Legal Modal fallback when Footer is used on /services routes */}
      {internalLegalTab && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/65 backdrop-blur-xs"
          role="dialog"
          aria-modal="true"
          onClick={() => setInternalLegalTab(null)}
        >
          <div
            className="relative w-full max-w-lg rounded-2xl bg-white text-slate-900 shadow-2xl border border-slate-200 p-6 sm:p-7"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setInternalLegalTab(null)}
              aria-label="Fermer la fenêtre"
              className="absolute top-3.5 right-3.5 w-8 h-8 rounded-full bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 flex items-center justify-center cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
            <p className="text-xs font-bold text-[#dc141b]">Informations réglementaires</p>
            <h3 className="font-display text-xl font-extrabold text-[#041e4d] mt-1">
              {internalLegalTab === 'mentions' && 'Mentions légales'}
              {internalLegalTab === 'confidentialite' && 'Politique de confidentialité'}
              {internalLegalTab === 'conditions' && 'Conditions générales d’intervention'}
            </h3>
            <div className="mt-3 text-sm text-slate-600 space-y-2.5 leading-relaxed">
              {internalLegalTab === 'mentions' && (
                <>
                  <p>
                    <strong>Debouchage Turbo SRL</strong> — Débouchage de canalisation, curage haute pression et dépannage urgent à Bruxelles et en Belgique.
                  </p>
                  <p>Numéro d&apos;entreprise BCE : BE 0812.345.678 · Téléphone : {PHONE_DISPLAY}.</p>
                </>
              )}
              {internalLegalTab === 'confidentialite' && (
                <p>
                  Les coordonnées saisies dans le formulaire de rappel gratuit et la newsletter sont utilisées exclusivement pour vous recontacter au sujet de votre demande d&apos;intervention, conformément au RGPD en vigueur en Belgique.
                </p>
              )}
              {internalLegalTab === 'conditions' && (
                <p>
                  Tout dépannage fait l&apos;objet d&apos;une annonce tarifaire claire avant exécution. Les installations et réparations réalisées par nos techniciens agréés bénéficient d&apos;une garantie de 5 ans pièces et main-d&apos;œuvre.
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </footer>
  );
}
