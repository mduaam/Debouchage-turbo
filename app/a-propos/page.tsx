import type { Metadata } from 'next';
import Link from 'next/link';
import { ShieldCheck, Clock, MapPin, Award, CheckCircle2, Phone, ArrowRight, Wrench } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { PHONE_DISPLAY, PHONE_HREF } from '@/lib/hydroheat-data';

export const metadata: Metadata = {
  title: 'À Propos | Debouchage Turbo – Experts en Plomberie & Débouchage en Belgique',
  description:
    'Découvrez Debouchage Turbo : entreprise agréée leader en débouchage de canalisation, curage haute pression et inspection par caméra à Bruxelles et en Wallonie. 15 ans d’expérience, intervention en 30 min 7j/7.',
  openGraph: {
    title: 'À Propos | Debouchage Turbo – Experts en Plomberie & Débouchage en Belgique',
    description:
      'Découvrez Debouchage Turbo : entreprise agréée leader en débouchage de canalisation, curage haute pression et inspection par caméra à Bruxelles et en Wallonie. 15 ans d’expérience, intervention en 30 min 7j/7.',
    siteName: 'Debouchage Turbo',
    type: 'website',
    locale: 'fr_BE',
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 overflow-x-hidden">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-b from-[#031c4e] to-[#041e4d] text-white py-16 lg:py-24 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 text-white text-xs font-bold tracking-wide uppercase">
              <ShieldCheck className="w-4 h-4 text-[#ef232a]" />
              <span>Entreprise agréée &amp; certifiée en Belgique</span>
            </div>
            <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
              À Propos de <span className="text-[#ef232a]">Debouchage Turbo</span>
            </h1>
            <p className="text-base sm:text-lg text-slate-200 max-w-2xl mx-auto leading-relaxed">
              Depuis plus de 15 ans, notre équipe d’artisans plombiers et déboucheurs qualifiés intervient 7j/7 et 24h/24 pour résoudre tous vos problèmes de canalisations à Bruxelles et dans toute la Wallonie.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
              <a
                href={PHONE_HREF}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#dc141b] hover:bg-[#b91016] text-white font-bold text-base shadow-xl transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span>Urgence 24/7 : {PHONE_DISPLAY}</span>
              </a>
              <Link
                href="/tarifs"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-base transition-colors"
              >
                <span>Voir nos tarifs transparents</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Core Values & Stats */}
        <section className="py-16 px-4 sm:px-6 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-[#f8fafd] rounded-2xl p-8 border border-slate-200">
              <div className="w-12 h-12 rounded-xl bg-[#041e4d]/10 flex items-center justify-center text-[#041e4d] mb-6">
                <Clock className="w-6 h-6 text-[#dc141b]" />
              </div>
              <h3 className="font-display text-xl font-bold text-[#041e4d] mb-3">
                Intervention en 30 Minutes
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Grâce à notre flotte de véhicules répartis stratégiquement à Bruxelles et dans les grandes villes wallonnes (Liège, Namur, Charleroi, Mons, Wavre), nous arrivons chez vous en moins de 30 minutes en cas d’urgence.
              </p>
            </div>

            <div className="bg-[#f8fafd] rounded-2xl p-8 border border-slate-200">
              <div className="w-12 h-12 rounded-xl bg-[#041e4d]/10 flex items-center justify-center text-[#041e4d] mb-6">
                <Award className="w-6 h-6 text-[#dc141b]" />
              </div>
              <h3 className="font-display text-xl font-bold text-[#041e4d] mb-3">
                Garantie 5 Ans sur Travaux
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Toutes nos réparations de canalisations, remplacements de tuyauterie et installations bénéficient d’une garantie décennale / 5 ans, témoignant de la qualité irréprochable de notre matériel et de notre savoir-faire.
              </p>
            </div>

            <div className="bg-[#f8fafd] rounded-2xl p-8 border border-slate-200">
              <div className="w-12 h-12 rounded-xl bg-[#041e4d]/10 flex items-center justify-center text-[#041e4d] mb-6">
                <MapPin className="w-6 h-6 text-[#dc141b]" />
              </div>
              <h3 className="font-display text-xl font-bold text-[#041e4d] mb-3">
                Couverture 100% Belgique
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Présents dans les 19 communes de Bruxelles et couvrant plus de 64 localités en Wallonie (Brabant wallon, Hainaut, Namur, Liège, Luxembourg), aucun secteur ne nous échappe.
              </p>
            </div>
          </div>

          {/* Detailed Editorial Story */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#dc141b]">
                Notre Histoire &amp; Philosophie
              </div>
              <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-[#041e4d] leading-tight">
                L’expertise technique au service des particuliers, syndics et entreprises
              </h2>
              <p className="text-base text-slate-600 leading-relaxed">
                Fondée par des passionnés de plomberie et d’assainissement, <strong>Debouchage Turbo</strong> s’est imposée comme la référence incontournable en Belgique pour tous les travaux d’urgence et de maintenance de réseaux d’évacuation.
              </p>
              <p className="text-base text-slate-600 leading-relaxed">
                Nous investissons continuellement dans des équipements de pointe : camions hydrocureurs haute pression, caméras endoscopiques haute définition pour inspection non destructive, détecteurs de canalisations et têtes de fraise désintégratrices de tartre ou de racines.
              </p>
              <div className="space-y-3 pt-2">
                {[
                  'Tarifs transparents communiqués avant intervention (dès 75 €)',
                  'Aucun frais de déplacement caché',
                  'Agréé par la majorité des compagnies d’assurance habitation',
                  'Équipe joignable directement 7j/7, jours fériés inclus',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#15803d] shrink-0" />
                    <span className="text-sm font-semibold text-slate-800">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#031d4f] rounded-3xl p-8 sm:p-10 text-white shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#ef232a]/10 rounded-full blur-3xl pointer-events-none" />
              <h3 className="font-display text-2xl font-extrabold mb-6">
                Chiffres Clés &amp; Engagements
              </h3>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div>
                  <p className="font-display text-3xl sm:text-4xl font-black text-[#4ade80]">15+</p>
                  <p className="text-xs sm:text-sm text-slate-300 mt-1">Années d&apos;expérience</p>
                </div>
                <div>
                  <p className="font-display text-3xl sm:text-4xl font-black text-[#4ade80]">12 500+</p>
                  <p className="text-xs sm:text-sm text-slate-300 mt-1">Interventions réussies</p>
                </div>
                <div>
                  <p className="font-display text-3xl sm:text-4xl font-black text-[#4ade80]">30 min</p>
                  <p className="text-xs sm:text-sm text-slate-300 mt-1">Délai moyen d&apos;arrivée</p>
                </div>
                <div>
                  <p className="font-display text-3xl sm:text-4xl font-black text-[#4ade80]">4.9 / 5</p>
                  <p className="text-xs sm:text-sm text-slate-300 mt-1">Satisfaction client</p>
                </div>
              </div>
              <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                <div>
                  <p className="text-xs text-slate-300">BCE / Entreprise</p>
                  <p className="text-sm font-bold text-white">BE 0812.345.678</p>
                </div>
                <a
                  href={PHONE_HREF}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#ef232a] hover:bg-[#d91d24] text-white font-bold text-xs transition-colors"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Appeler un expert</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Banner */}
        <section className="bg-[#f1f5fb] py-16 px-4 sm:px-6 border-t border-slate-200">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-[#041e4d]">
              Besoin d&apos;un dépannage urgent ou d&apos;un devis gratuit ?
            </h2>
            <p className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto">
              Nos techniciens sont en route près de chez vous à Bruxelles et en Wallonie. Contactez-nous dès maintenant pour une intervention immédiate.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={PHONE_HREF}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#041e4d] hover:bg-[#06296b] text-white font-bold text-sm shadow-md transition-colors"
              >
                <Phone className="w-4 h-4 text-[#ef232a]" />
                <span>{PHONE_DISPLAY}</span>
              </a>
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-[#041e4d] border border-slate-300 font-bold text-sm transition-colors"
              >
                <Wrench className="w-4 h-4 text-[#dc141b]" />
                <span>Accéder à la page contact</span>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
