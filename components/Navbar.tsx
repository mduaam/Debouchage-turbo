'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { Home, ChevronDown, Phone, Menu, X, ArrowRight, MapPin } from 'lucide-react';
import { BrandMark } from './BrandMark';
import { SERVICES, PHONE_DISPLAY, PHONE_HREF } from '@/lib/hydroheat-data';

interface NavbarProps {
  onSelectCommune?: (commune: string) => void;
}

const FEATURED_ZONES = [
  { slug: 'bruxelles', label: 'Bruxelles-Ville (1000)' },
  { slug: 'ixelles', label: 'Ixelles (1050)' },
  { slug: 'uccle', label: 'Uccle (1180)' },
  { slug: 'anderlecht', label: 'Anderlecht (1070)' },
  { slug: 'namur', label: 'Namur (5000)' },
  { slug: 'liege', label: 'Liège (4000)' },
  { slug: 'charleroi', label: 'Charleroi (6000)' },
  { slug: 'waterloo', label: 'Waterloo (1410)' },
];

export function Navbar({ onSelectCommune: _onSelectCommune }: NavbarProps) {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [zonesOpen, setZonesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSubmenu, setMobileSubmenu] = useState<'services' | 'zones' | null>(null);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
        setZonesOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header
      ref={navRef}
      className="sticky top-0 z-40 w-full bg-[#031c4e]/95 backdrop-blur-md border-b border-white/10 text-white"
    >
      <div className="max-w-[1200px] mx-auto px-3 sm:px-6 h-14 sm:h-[72px] flex items-center justify-between gap-2 sm:gap-4 lg:gap-8">
        {/* Zone 1: Brand */}
        <Link
          href="/#accueil"
          className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 rounded-lg shrink-0"
          aria-label="Debouchage Turbo Accueil"
        >
          <BrandMark hideTaglineOnMobile />
        </Link>

        {/* Zone 2: Single-line navigation links */}
        <nav className="hidden lg:flex items-center gap-5 xl:gap-6 text-sm font-medium text-slate-200" aria-label="Navigation principale">
          <Link
            href="/#accueil"
            className="p-1.5 text-white hover:text-[#ef232a] transition-colors whitespace-nowrap shrink-0"
            aria-label="Accueil"
          >
            <Home className="w-4 h-4" />
          </Link>

          {/* Services Dropdown */}
          <div className="relative">
            <button
              type="button"
              onClick={() => {
                setServicesOpen((prev) => !prev);
                setZonesOpen(false);
              }}
              aria-expanded={servicesOpen}
              className="inline-flex items-center gap-1 py-2 text-slate-200 hover:text-white transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              <span>Nos Services</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-150 ${servicesOpen ? 'rotate-180' : ''}`} />
            </button>

            {servicesOpen && (
              <div className="absolute left-0 top-full mt-2 w-[560px] rounded-xl bg-white text-slate-900 shadow-2xl border border-slate-200 p-2.5 z-50">
                <Link
                  href="/services"
                  onClick={() => setServicesOpen(false)}
                  className="w-full px-3 py-2 mb-2 rounded-lg bg-[#f1f5fb] hover:bg-[#e4ecf9] flex items-center justify-between gap-2 transition-colors"
                >
                  <span className="text-xs font-bold text-[#041e4d]">
                    Voir nos 11 services &amp; tarifs indicatifs
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#dc141b] shrink-0" />
                </Link>
                <div className="grid grid-cols-2 gap-1">
                  {SERVICES.map((service) => (
                    <Link
                      key={service.id}
                      href={`/services/${service.id}`}
                      onClick={() => setServicesOpen(false)}
                      className="w-full text-left px-3 py-2 rounded-lg hover:bg-slate-50 flex items-center justify-between gap-2 transition-colors group"
                    >
                      <div className="min-w-0">
                        <p className="text-[13px] font-semibold text-[#041e4d] group-hover:text-[#dc141b] transition-colors truncate">
                          {service.title}
                        </p>
                        <p className="text-[11px] text-slate-500 tabular-nums truncate">{service.startingPrice}</p>
                      </div>
                      <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#dc141b] shrink-0" />
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Zones Dropdown */}
          <div className="relative">
            <button
              type="button"
              onClick={() => {
                setZonesOpen((prev) => !prev);
                setServicesOpen(false);
              }}
              aria-expanded={zonesOpen}
              className="inline-flex items-center gap-1 py-2 text-slate-200 hover:text-white transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              <span>Zones d&apos;intervention</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-150 ${zonesOpen ? 'rotate-180' : ''}`} />
            </button>

            {zonesOpen && (
              <div className="absolute left-0 top-full mt-2 w-72 rounded-xl bg-white text-slate-900 shadow-2xl border border-slate-200 p-2 z-50">
                <Link
                  href="/zones-d-intervention"
                  onClick={() => setZonesOpen(false)}
                  className="w-full px-3 py-2 mb-1 rounded-lg bg-[#f1f5fb] hover:bg-[#e4ecf9] flex items-center justify-between gap-2 transition-colors"
                >
                  <span className="text-xs font-bold text-[#041e4d]">
                    Toutes nos zones (Bruxelles &amp; Wallonie)
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#dc141b] shrink-0" />
                </Link>
                <div className="grid grid-cols-1 gap-0.5 mt-1">
                  {FEATURED_ZONES.map((zone) => (
                    <Link
                      key={zone.slug}
                      href={`/zones-d-intervention/${zone.slug}`}
                      onClick={() => setZonesOpen(false)}
                      className="w-full text-left px-3 py-2 rounded-lg hover:bg-slate-50 text-sm font-medium text-[#041e4d] hover:text-[#dc141b] flex items-center gap-2 transition-colors"
                    >
                      <MapPin className="w-3.5 h-3.5 text-[#dc141b] shrink-0" />
                      <span className="truncate">{zone.label}</span>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <Link
            href="/tarifs"
            className="py-2 hover:text-white transition-colors whitespace-nowrap shrink-0"
          >
            Tarifs
          </Link>
          <Link
            href="/conseils"
            className="py-2 hover:text-white transition-colors whitespace-nowrap shrink-0"
          >
            Conseils
          </Link>
          <Link
            href="/#temoignages"
            className="py-2 hover:text-white transition-colors whitespace-nowrap shrink-0"
          >
            Avis Clients
          </Link>
          <Link
            href="/a-propos"
            className="py-2 hover:text-white transition-colors whitespace-nowrap shrink-0"
          >
            À Propos
          </Link>
          <Link
            href="/contact"
            className="py-2 hover:text-white transition-colors whitespace-nowrap shrink-0"
          >
            Contact
          </Link>
        </nav>

        {/* Zone 3: Single Primary Action + Mobile Trigger */}
        <div className="flex items-center gap-2 shrink-0">
          <a
            href={PHONE_HREF}
            className="inline-flex items-center gap-1.5 sm:gap-2.5 bg-[#dc141b] hover:bg-[#b91016] text-white px-2.5 sm:px-4 py-2 rounded-lg shadow-md transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-white/15 shrink-0" />
            <span className="flex flex-col leading-tight text-left">
              <span className="font-display text-xs sm:text-[15px] font-extrabold tabular-nums">
                {PHONE_DISPLAY}
              </span>
              <span className="text-[10px] font-medium text-red-100 hidden sm:block">
                Appel immédiat
              </span>
            </span>
          </a>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            className="lg:hidden min-w-[40px] min-h-[40px] p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors flex items-center justify-center cursor-pointer"
            aria-label={mobileOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile & Tablet Navigation Drawer */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#041d4a] border-t border-white/10 px-4 py-3 space-y-1 max-h-[calc(100dvh-3.5rem)] overflow-y-auto">
          {/* Expandable Services */}
          <div>
            <button
              type="button"
              onClick={() => setMobileSubmenu((prev) => (prev === 'services' ? null : 'services'))}
              aria-expanded={mobileSubmenu === 'services'}
              className="w-full min-h-[44px] px-3 py-2.5 rounded-lg text-sm font-medium text-white hover:bg-white/10 flex items-center justify-between cursor-pointer"
            >
              <span>Nos Services</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform ${mobileSubmenu === 'services' ? 'rotate-180' : ''}`}
              />
            </button>
            {mobileSubmenu === 'services' && (
              <div className="pl-3 pr-1 py-1 space-y-1">
                <Link
                  href="/services"
                  onClick={() => {
                    setMobileOpen(false);
                    setMobileSubmenu(null);
                  }}
                  className="w-full min-h-[40px] text-left px-3 py-2 rounded-lg text-xs sm:text-sm font-bold text-white bg-white/10 hover:bg-white/15 flex items-center justify-between"
                >
                  <span>Tous nos services &amp; tarifs</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#ef232a] shrink-0" />
                </Link>
                {SERVICES.map((service) => (
                  <Link
                    key={service.id}
                    href={`/services/${service.id}`}
                    onClick={() => {
                      setMobileOpen(false);
                      setMobileSubmenu(null);
                    }}
                    className="w-full min-h-[40px] text-left px-3 py-2 rounded-lg text-xs sm:text-sm text-slate-200 hover:text-white hover:bg-white/10 flex items-center justify-between"
                  >
                    <span>{service.title}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#ef232a] shrink-0" />
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Expandable Zones */}
          <div>
            <button
              type="button"
              onClick={() => setMobileSubmenu((prev) => (prev === 'zones' ? null : 'zones'))}
              aria-expanded={mobileSubmenu === 'zones'}
              className="w-full min-h-[44px] px-3 py-2.5 rounded-lg text-sm font-medium text-white hover:bg-white/10 flex items-center justify-between cursor-pointer"
            >
              <span>Zones d&apos;intervention</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform ${mobileSubmenu === 'zones' ? 'rotate-180' : ''}`}
              />
            </button>
            {mobileSubmenu === 'zones' && (
              <div className="pl-3 pr-1 py-1 space-y-1">
                <Link
                  href="/zones-d-intervention"
                  onClick={() => {
                    setMobileOpen(false);
                    setMobileSubmenu(null);
                  }}
                  className="w-full min-h-[40px] text-left px-3 py-2 rounded-lg text-xs sm:text-sm font-bold text-white bg-white/10 hover:bg-white/15 flex items-center justify-between"
                >
                  <span>Toutes nos zones (Bruxelles &amp; Wallonie)</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#ef232a] shrink-0" />
                </Link>
                <div className="grid grid-cols-2 gap-1">
                  {FEATURED_ZONES.map((zone) => (
                    <Link
                      key={zone.slug}
                      href={`/zones-d-intervention/${zone.slug}`}
                      onClick={() => {
                        setMobileOpen(false);
                        setMobileSubmenu(null);
                      }}
                      className="min-h-[40px] text-left px-2.5 py-2 rounded-lg text-xs text-slate-200 hover:text-white hover:bg-white/10 flex items-center gap-1.5"
                    >
                      <MapPin className="w-3 h-3 text-[#ef232a] shrink-0" />
                      <span className="truncate">{zone.label}</span>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <Link
            href="/tarifs"
            onClick={() => setMobileOpen(false)}
            className="flex items-center min-h-[44px] px-3 py-2.5 rounded-lg text-sm font-medium text-white hover:bg-white/10"
          >
            Tarifs dès 75 €
          </Link>
          <Link
            href="/conseils"
            onClick={() => setMobileOpen(false)}
            className="flex items-center min-h-[44px] px-3 py-2.5 rounded-lg text-sm font-medium text-white hover:bg-white/10"
          >
            Conseils &amp; Droits Locataire
          </Link>
          <Link
            href="/a-propos"
            onClick={() => setMobileOpen(false)}
            className="flex items-center min-h-[44px] px-3 py-2.5 rounded-lg text-sm font-medium text-white hover:bg-white/10"
          >
            À Propos
          </Link>
          <Link
            href="/contact"
            onClick={() => setMobileOpen(false)}
            className="flex items-center min-h-[44px] px-3 py-2.5 rounded-lg text-sm font-medium text-white hover:bg-white/10"
          >
            Contact
          </Link>
          <Link
            href="/#temoignages"
            onClick={() => setMobileOpen(false)}
            className="flex items-center min-h-[44px] px-3 py-2.5 rounded-lg text-sm font-medium text-white hover:bg-white/10"
          >
            Avis Clients
          </Link>
          <Link
            href="/#faq"
            onClick={() => setMobileOpen(false)}
            className="flex items-center min-h-[44px] px-3 py-2.5 rounded-lg text-sm font-medium text-white hover:bg-white/10"
          >
            Questions fréquentes
          </Link>
          <Link
            href="/contact"
            onClick={() => setMobileOpen(false)}
            className="flex items-center justify-center min-h-[44px] px-3 py-2.5 rounded-lg text-sm font-bold bg-white text-[#041e4d] mt-2"
          >
            Demander un devis gratuit
          </Link>
        </div>
      )}
    </header>
  );
}
