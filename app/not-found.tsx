import Link from 'next/link';
import { ArrowRight, Home } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 overflow-x-hidden">
      <Navbar />

      <main className="flex-1 flex items-center justify-center py-16 px-4">
        <div className="max-w-md w-full text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-[#dc141b]">
            Erreur 404
          </p>
          <h1 className="font-display text-3xl sm:text-4xl font-extrabold text-[#041e4d] mt-2">
            Page introuvable
          </h1>
          <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
            La page que vous recherchez n&apos;existe plus ou a été déplacée. Nos équipes interviennent 7j/7 à Bruxelles et en Wallonie.
          </p>

          <div className="mt-7 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-[#041e4d] hover:bg-[#06296b] text-white font-bold text-sm shadow-md transition-colors"
            >
              <Home className="w-4 h-4" />
              <span>Retour à l&apos;accueil</span>
            </Link>
            <Link
              href="/tarifs"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-5 py-3 rounded-lg bg-slate-100 hover:bg-slate-200 text-[#041e4d] font-bold text-sm transition-colors"
            >
              <span>Consulter nos tarifs</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
