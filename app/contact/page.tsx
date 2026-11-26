'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Phone, MessageCircle, MapPin, Clock, ShieldCheck, Mail, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { PHONE_DISPLAY, PHONE_HREF, WHATSAPP_NUMBER } from '@/lib/hydroheat-data';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [honeypot, setHoneypot] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    "Bonjour Debouchage Turbo, j'ai besoin d'une intervention urgente pour un problème de canalisation / plomberie."
  )}`;

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 overflow-x-hidden">
      <Navbar />

      <main className="flex-1">
        {/* Header Hero */}
        <section className="bg-gradient-to-b from-[#031c4e] to-[#041e4d] text-white py-16 lg:py-20 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#ef232a]/20 text-[#ef232a] text-xs font-bold tracking-wide uppercase">
              <Clock className="w-4 h-4" />
              <span>Intervention d&apos;urgence 7j/7 &amp; 24h/24</span>
            </div>
            <h1 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight">
              Contactez <span className="text-[#ef232a]">Debouchage Turbo</span>
            </h1>
            <p className="text-sm sm:text-base text-slate-200 max-w-xl mx-auto leading-relaxed">
              Une canalisation bouchée, un WC engorgé ou une urgence de plomberie ? Nos équipes se déplacent en moins de 30 minutes à Bruxelles et dans toute la Wallonie.
            </p>
          </div>
        </section>

        {/* Contact Methods Grid */}
        <section className="py-16 px-4 sm:px-6 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Phone Card */}
            <div className="bg-[#f8fafd] rounded-2xl p-8 border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#dc141b]/10 text-[#dc141b] flex items-center justify-center mb-6">
                  <Phone className="w-6 h-6" />
                </div>
                <h3 className="font-display text-xl font-bold text-[#041e4d] mb-2">
                  Téléphone d&apos;urgence
                </h3>
                <p className="text-xs text-slate-600 mb-6 leading-relaxed">
                  Ligne directe ouverte 24h/24 et 7j/7 pour toute intervention immédiate sur site.
                </p>
              </div>
              <a
                href={PHONE_HREF}
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#dc141b] hover:bg-[#b91016] text-white font-bold text-sm shadow-md transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>{PHONE_DISPLAY}</span>
              </a>
            </div>

            {/* WhatsApp Card */}
            <div className="bg-[#f8fafd] rounded-2xl p-8 border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#15803d]/10 text-[#15803d] flex items-center justify-center mb-6">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <h3 className="font-display text-xl font-bold text-[#041e4d] mb-2">
                  Chat WhatsApp Rapide
                </h3>
                <p className="text-xs text-slate-600 mb-6 leading-relaxed">
                  Envoyez-nous une photo de votre problème ou votre code postal pour une estimation instantanée.
                </p>
              </div>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#15803d] hover:bg-[#166534] text-white font-bold text-sm shadow-md transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Ouvrir WhatsApp</span>
              </a>
            </div>

            {/* Email / Hours Card */}
            <div className="bg-[#f8fafd] rounded-2xl p-8 border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#041e4d]/10 text-[#041e4d] flex items-center justify-center mb-6">
                  <Mail className="w-6 h-6" />
                </div>
                <h3 className="font-display text-xl font-bold text-[#041e4d] mb-2">
                  Disponibilité &amp; Bureaux
                </h3>
                <p className="text-xs text-slate-600 mb-4 leading-relaxed">
                  Interventions garanties 365 jours par an, week-ends et jours fériés compris.
                </p>
                <div className="space-y-1.5 text-xs text-slate-700 font-semibold">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#15803d]" />
                    <span>Bruxelles (19 communes)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#15803d]" />
                    <span>Wallonie (64+ localités)</span>
                  </div>
                </div>
              </div>
              <div className="pt-4 border-t border-slate-200 text-xs text-slate-500">
                BCE : BE 0812.345.678
              </div>
            </div>
          </div>

          {/* Quick Quote Form Section */}
          <div id="devis-form" className="bg-[#031d4f] rounded-3xl p-8 sm:p-12 text-white shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#ef232a]/10 rounded-full blur-3xl pointer-events-none" />
            <div className="max-w-2xl mx-auto text-center space-y-4 mb-8">
              <h2 className="font-display text-2xl sm:text-3xl font-extrabold">
                Demande de Devis ou Rappel Immédiat
              </h2>
              <p className="text-xs sm:text-sm text-slate-300">
                Remplissez vos coordonnées pour être rappelé en moins de 2 minutes par notre équipe de permanence technique.
              </p>
            </div>

            {submitted ? (
              <div className="max-w-xl mx-auto bg-white/10 border border-white/20 rounded-2xl p-8 text-center space-y-4">
                <CheckCircle2 className="w-12 h-12 text-[#4ade80] mx-auto" />
                <h3 className="font-display text-xl font-bold">Demande envoyée avec succès !</h3>
                <p className="text-sm text-slate-200">
                  Notre équipe technique a bien reçu votre message. Un déboucheur vous contacte immédiatement au numéro indiqué.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setHoneypot('');
                  }}
                  className="px-5 py-2.5 rounded-xl bg-[#ef232a] text-white text-xs font-bold hover:bg-[#d91d24] transition-colors"
                >
                  Envoyer une autre demande
                </button>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  // Honeypot bot protection: if the hidden field is filled, silently drop the submission
                  if (honeypot.trim() !== '') {
                    // Bot detected: simulate success without processing to prevent evasion
                    setSubmitted(true);
                    return;
                  }
                  setIsSubmitting(true);
                  setTimeout(() => {
                    setIsSubmitting(false);
                    setSubmitted(true);
                  }, 400);
                }}
                className="max-w-2xl mx-auto space-y-4"
              >
                {/* Honeypot anti-bot trap: hidden from humans, enticing to automated scrapers & bots */}
                <div
                  className="opacity-0 absolute -left-[9999px] -top-[9999px] h-0 w-0 overflow-hidden pointer-events-none select-none"
                  aria-hidden="true"
                  tabIndex={-1}
                >
                  <label htmlFor="contact-website-honeypot">Site web ou confirmation (laisser vide)</label>
                  <input
                    id="contact-website-honeypot"
                    type="text"
                    name="website_url"
                    value={honeypot}
                    onChange={(e) => setHoneypot(e.target.value)}
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-bold text-slate-200 mb-1.5">
                      Votre nom complet *
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      placeholder="Jean Dupont"
                      className="w-full h-11 px-3.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#ef232a]"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-phone" className="block text-xs font-bold text-slate-200 mb-1.5">
                      Votre numéro de téléphone *
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      required
                      placeholder="0470 12 34 56"
                      className="w-full h-11 px-3.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#ef232a]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-city" className="block text-xs font-bold text-slate-200 mb-1.5">
                      Commune / Code postal *
                    </label>
                    <input
                      id="contact-city"
                      type="text"
                      required
                      placeholder="Ex : 1050 Ixelles ou 5000 Namur"
                      className="w-full h-11 px-3.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#ef232a]"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-service" className="block text-xs font-bold text-slate-200 mb-1.5">
                      Type d&apos;intervention *
                    </label>
                    <select
                      id="contact-service"
                      className="w-full h-11 px-3.5 rounded-xl bg-[#031c4e] border border-white/20 text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#ef232a]"
                    >
                      <option value="wc">Débouchage WC / Toilette</option>
                      <option value="evier">Évier / Douche / Baignoire</option>
                      <option value="egout">Égout principal / Colonne</option>
                      <option value="curage">Curage haute pression</option>
                      <option value="camera">Inspection par caméra</option>
                      <option value="autre">Autre urgence plomberie</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-xs font-bold text-slate-200 mb-1.5">
                    Description de votre situation (optionnel)
                  </label>
                  <textarea
                    id="contact-message"
                    rows={3}
                    placeholder="Décrivez brièvement le problème (ex: eau qui remonte dans la douche...)"
                    className="w-full p-3.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#ef232a]"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full min-h-[48px] rounded-xl bg-[#ef232a] hover:bg-[#d91d24] text-white font-bold text-base shadow-xl transition-colors flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75"
                >
                  <span>{isSubmitting ? 'Transmission en cours...' : 'Envoyer ma demande (Rappel immédiat)'}</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </form>
            )}
          </div>
        </section>

        {/* About & Trust reassurance */}
        <section className="pb-16 px-4 sm:px-6 max-w-4xl mx-auto text-center">
          <p className="text-xs font-bold uppercase tracking-wider text-[#dc141b]">En savoir plus</p>
          <h3 className="font-display text-xl font-bold text-[#041e4d] mt-1">
            Découvrez nos engagements et notre équipe
          </h3>
          <p className="text-sm text-slate-600 mt-2 max-w-xl mx-auto">
            15 ans d&apos;expérience, garantie 5 ans et transparence tarifaire totale à Bruxelles et en Wallonie.
          </p>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/a-propos"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-[#041e4d] text-xs font-bold transition-colors"
            >
              <span>À propos de Debouchage Turbo</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <Link
              href="/tarifs"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-[#041e4d] text-xs font-bold transition-colors"
            >
              <span>Consulter notre grille tarifaire</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
