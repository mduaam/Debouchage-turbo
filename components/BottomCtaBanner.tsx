import Image from 'next/image';
import Link from 'next/link';
import { Phone, ArrowRight } from 'lucide-react';
import { PHONE_DISPLAY, PHONE_HREF } from '@/lib/hydroheat-data';

interface BottomCtaBannerProps {
  onQuoteClick?: () => void;
}

export function BottomCtaBanner({ onQuoteClick }: BottomCtaBannerProps) {
  return (
    <section
      aria-label="Contact d'urgence à Bruxelles"
      className="relative overflow-hidden bg-[#031d4f] text-white py-12 sm:py-14"
    >
      {/* Left & Right Brussels Grand-Place Architecture Photographs Feathered into Navy */}
      <div className="hidden md:block absolute inset-y-0 left-0 w-72 lg:w-96 pointer-events-none select-none">
        <Image
          src="/images/brussels-left.jpg"
          alt="Façades historiques de la Grand-Place de Bruxelles"
          fill
          referrerPolicy="no-referrer"
          className="object-cover opacity-55"
          sizes="384px"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(90deg, rgba(3,29,79,0.25) 0%, rgba(3,29,79,0.75) 55%, #031d4f 100%)',
          }}
        />
      </div>

      <div className="hidden md:block absolute inset-y-0 right-0 w-72 lg:w-96 pointer-events-none select-none">
        <Image
          src="/images/brussels-right.jpg"
          alt="Beffroi de l'Hôtel de Ville de Bruxelles"
          fill
          referrerPolicy="no-referrer"
          className="object-cover opacity-55"
          sizes="384px"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(270deg, rgba(3,29,79,0.25) 0%, rgba(3,29,79,0.75) 55%, #031d4f 100%)',
          }}
        />
      </div>

      {/* Centered Conversion Content */}
      <div className="relative z-10 max-w-[900px] mx-auto px-4 sm:px-6 text-center">
        <h2 className="font-display text-2xl sm:text-3xl lg:text-[36px] font-extrabold tracking-tight text-balance">
          Besoin d&apos;un débouchage à <span className="text-[#ef232a]">Bruxelles</span> ?
        </h2>
        <p className="text-sm sm:text-base text-slate-200 mt-2">
          Contactez Debouchage Turbo dès maintenant pour une intervention rapide !
        </p>

        <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3.5">
          <a
            href={PHONE_HREF}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#dc141b] hover:bg-[#b91016] text-white px-6 py-3 rounded-lg shadow-lg transition-colors whitespace-nowrap shrink-0"
          >
            <Phone className="w-5 h-5 shrink-0" />
            <span className="text-left leading-tight">
              <span className="block font-display text-base font-extrabold tabular-nums">
                {PHONE_DISPLAY}
              </span>
              <span className="block text-[11px] font-medium text-red-100">Appel immédiat</span>
            </span>
          </a>

          {onQuoteClick ? (
            <button
              type="button"
              onClick={onQuoteClick}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-100 text-[#041e4d] font-bold text-sm sm:text-[15px] px-6 py-4 rounded-lg shadow-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              <span>Demander un devis gratuit</span>
              <ArrowRight className="w-4 h-4 text-[#dc141b]" />
            </button>
          ) : (
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-100 text-[#041e4d] font-bold text-sm sm:text-[15px] px-6 py-4 rounded-lg shadow-lg transition-colors whitespace-nowrap shrink-0"
            >
              <span>Demander un devis gratuit</span>
              <ArrowRight className="w-4 h-4 text-[#dc141b]" />
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
