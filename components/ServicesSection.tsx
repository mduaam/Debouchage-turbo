import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { SERVICES } from '@/lib/hydroheat-data';
import {
  IMAGE_QUALITY,
  LIGHT_BLUR_DATA_URL,
  NAVY_BLUR_DATA_URL,
  SERVICE_IMAGE_SIZES,
} from '@/lib/image-optimization';

export function ServicesSection() {
  return (
    <section id="services" className="py-14 sm:py-16 bg-[#f8fafd]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        {/* Eyebrow with side hairlines */}
        <div className="flex items-center justify-center gap-3">
          <span className="w-8 h-px bg-slate-300" aria-hidden="true" />
          <span className="text-xs sm:text-sm font-bold text-[#dc141b]">Nos Services</span>
          <span className="w-8 h-px bg-slate-300" aria-hidden="true" />
        </div>

        <h2 className="font-display text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-[#041e4d] text-center mt-2 text-balance">
          Des solutions complètes pour votre confort
        </h2>

        {/* Balanced 4x3 Desktop / 2x6 Tablet / 1-col Mobile Service Grid */}
        <div className="mt-8 sm:mt-9 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {SERVICES.map((service) => (
            <article
              key={service.id}
              className="group bg-white rounded-xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-md hover:border-slate-300 transition-all duration-200 flex flex-col"
            >
              <Link
                href={`/services/${service.id}`}
                className="relative h-48 sm:h-52 w-full bg-slate-100 overflow-hidden block"
              >
                <Image
                  src={service.image}
                  alt={service.imageAlt}
                  fill
                  loading="lazy"
                  decoding="async"
                  quality={IMAGE_QUALITY.card}
                  placeholder="blur"
                  blurDataURL={LIGHT_BLUR_DATA_URL}
                  referrerPolicy="no-referrer"
                  className="object-cover object-center group-hover:scale-[1.03] transition-transform duration-300"
                  sizes={SERVICE_IMAGE_SIZES.gridCard}
                />
              </Link>

              <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-display text-base sm:text-[17px] font-extrabold text-[#041e4d] group-hover:text-[#dc141b] transition-colors">
                    <Link href={`/services/${service.id}`}>{service.title}</Link>
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1.5 leading-relaxed">
                    {service.shortDescription}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100">
                  <Link
                    href={`/services/${service.id}`}
                    className="inline-flex items-center gap-1.5 text-sm font-bold text-[#041e4d] group-hover:text-[#dc141b] transition-colors"
                  >
                    <span>En savoir plus</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                </div>
              </div>
            </article>
          ))}

          {/* 12th Card: Conseils & Guides pratiques (balances 4x3 desktop grid) */}
          <article className="group bg-[#041e4d] text-white rounded-xl border border-[#041e4d] overflow-hidden shadow-xs hover:shadow-md transition-all duration-200 flex flex-col">
            <Link
              href="/conseils"
              className="relative h-48 sm:h-52 w-full bg-slate-900 overflow-hidden block"
            >
              <Image
                src="/images/canalisation-interieur.jpg"
                alt="Guides pratiques et droits locataire ou propriétaire en Belgique"
                fill
                loading="lazy"
                decoding="async"
                quality={IMAGE_QUALITY.card}
                placeholder="blur"
                blurDataURL={NAVY_BLUR_DATA_URL}
                referrerPolicy="no-referrer"
                className="object-cover object-center opacity-85 group-hover:scale-[1.03] transition-transform duration-300"
                sizes={SERVICE_IMAGE_SIZES.gridCard}
              />
            </Link>

            <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="font-display text-base sm:text-[17px] font-extrabold text-white group-hover:text-[#ef232a] transition-colors">
                  <Link href="/conseils">Guides &amp; Droits Locataire</Link>
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-1.5 leading-relaxed">
                  Qui paie le débouchage en Belgique ? Naturel vs acide chlorhydrique : tous nos conseils pratiques.
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-white/15">
                <Link
                  href="/conseils"
                  className="inline-flex items-center gap-1.5 text-sm font-bold text-white group-hover:text-[#ef232a] transition-colors"
                >
                  <span>Consulter les guides</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </div>
            </div>
          </article>
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-slate-300 bg-white hover:bg-slate-50 text-sm font-bold text-[#041e4d] hover:text-[#dc141b] shadow-xs transition-colors"
          >
            <span>Voir tous nos services et tarifs indicatifs</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
