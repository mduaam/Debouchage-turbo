'use client';

import { useState } from 'react';
import { CheckCircle2, Mail, ShieldCheck, Sparkles } from 'lucide-react';

export function ConseilsNewsletter() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    const trimmed = email.trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
      setError('Veuillez saisir une adresse email valide.');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubscribed(true);
      setEmail('');
    }, 250);
  };

  return (
    <section className="py-12 sm:py-16 bg-white border-t border-slate-100">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="rounded-2xl bg-[#031d4f] text-white p-6 sm:p-10 lg:p-12 shadow-xl relative overflow-hidden">
          {/* Subtle decorative background gradient */}
          <div
            className="absolute inset-0 pointer-events-none opacity-15"
            style={{
              background:
                'radial-gradient(circle at 80% 20%, #ef232a 0%, transparent 50%), radial-gradient(circle at 10% 90%, #1d63dc 0%, transparent 60%)',
            }}
          />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <span className="inline-flex items-center gap-1.5 bg-[#dc141b] text-white px-3 py-1 rounded-md text-xs font-bold shadow-xs">
                <Sparkles className="w-3.5 h-3.5 shrink-0" />
                <span>Conseils d&apos;experts mensuels</span>
              </span>

              <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-white mt-3 text-balance">
                Recevez nos astuces d&apos;entretien pour vos canalisations
              </h2>

              <p className="text-sm sm:text-base text-slate-200 mt-2.5 leading-relaxed max-w-xl">
                Chaque mois, recevez directement dans votre boîte mail nos meilleurs conseils pour prévenir les engorgements, protéger vos siphons du calcaire et entretenir vos fosses septiques à Bruxelles et en Wallonie.
              </p>

              <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs sm:text-sm text-slate-300">
                <span className="inline-flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Zéro spam · Désabonnement facile</span>
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Rédigé par nos techniciens agréés</span>
                </span>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-white text-slate-900 rounded-xl p-5 sm:p-6 shadow-lg border border-white/20">
                {subscribed ? (
                  <div className="rounded-lg bg-emerald-50 border border-emerald-200 p-4 text-emerald-950">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                      <div>
                        <p className="font-bold text-sm">Inscription confirmée !</p>
                        <p className="text-xs sm:text-sm text-emerald-800 mt-1 leading-relaxed">
                          Merci ! Vous recevrez notre prochaine newsletter mensuelle avec nos guides exclusifs d&apos;entretien et de prévention.
                        </p>
                        <button
                          type="button"
                          onClick={() => setSubscribed(false)}
                          className="mt-3 text-xs font-semibold text-emerald-800 underline hover:text-emerald-950 cursor-pointer"
                        >
                          Inscrire une autre adresse
                        </button>
                      </div>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-3.5" noValidate>
                    <p className="font-display text-base font-extrabold text-[#041e4d]">
                      Abonnement gratuit à la newsletter
                    </p>

                    <div className="relative">
                      <label htmlFor="newsletter-email" className="sr-only">
                        Votre adresse email
                      </label>
                      <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                      <input
                        id="newsletter-email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="votre.email@domaine.be"
                        required
                        className="w-full h-11 pl-10 pr-3.5 text-base sm:text-sm rounded-lg border border-slate-200 bg-slate-50 text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#041e4d]/20 focus:border-[#041e4d] transition-colors"
                      />
                    </div>

                    {error && (
                      <p role="alert" className="text-xs font-medium text-[#dc141b]">
                        {error}
                      </p>
                    )}

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full min-h-[44px] h-11 bg-[#dc141b] hover:bg-[#b91016] disabled:opacity-70 text-white font-bold text-sm rounded-lg shadow-md transition-colors cursor-pointer"
                    >
                      {isSubmitting ? 'Inscription...' : 'Recevoir nos conseils'}
                    </button>

                    <p className="text-[11px] text-slate-500 text-center leading-tight">
                      En vous inscrivant, vous acceptez de recevoir nos e-mails d&apos;information. Conformément au RGPD.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
