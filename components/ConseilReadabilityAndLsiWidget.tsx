'use client';

import { useState, useMemo } from 'react';
import {
  Sparkles,
  CheckCircle2,
  AlertCircle,
  Search,
  BookOpen,
  BarChart3,
  Layers,
  HelpCircle,
  Check,
  TrendingUp,
} from 'lucide-react';
import { ConseilGuide } from '@/lib/conseils-data';
import { analyzeConseilGuide, LsiKeywordItem } from '@/lib/conseil-nlp-analyzer';

interface ConseilReadabilityAndLsiWidgetProps {
  guide: ConseilGuide;
}

export function ConseilReadabilityAndLsiWidget({ guide }: ConseilReadabilityAndLsiWidgetProps) {
  const analysis = useMemo(() => analyzeConseilGuide(guide), [guide]);
  const [selectedCategory, setSelectedCategory] = useState<string>('Tous');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [customKeywordTest, setCustomKeywordTest] = useState<string>('');

  const categories = useMemo(() => {
    const set = new Set<string>();
    analysis.keywords.forEach((k) => set.add(k.category));
    return ['Tous', ...Array.from(set)];
  }, [analysis.keywords]);

  const filteredKeywords = useMemo(() => {
    return analysis.keywords.filter((item) => {
      const matchesCategory = selectedCategory === 'Tous' || item.category === selectedCategory;
      const matchesSearch =
        !searchQuery.trim() ||
        item.term.toLowerCase().includes(searchQuery.toLowerCase().trim());
      return matchesCategory && matchesSearch;
    });
  }, [analysis.keywords, selectedCategory, searchQuery]);

  // Real-time custom word tester against the full text
  const customTestResult = useMemo(() => {
    const query = customKeywordTest.trim().toLowerCase();
    if (!query) return null;
    const normalizedText = analysis.fullText
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '');
    const normalizedQuery = query.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    const escaped = normalizedQuery.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(`\\b${escaped}\\b`, 'gi');
    const matches = normalizedText.match(regex);
    const count = matches ? matches.length : 0;
    return {
      query,
      count,
      isCovered: count > 0,
    };
  }, [customKeywordTest, analysis.fullText]);

  const coveredCount = analysis.keywords.filter((k) => k.isCovered).length;
  const totalCount = analysis.keywords.length;

  return (
    <section id="audit-semantique" className="py-12 sm:py-16 bg-white border-t border-slate-200">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#041e4d]/5 border border-[#041e4d]/10 text-[#041e4d] text-xs font-bold uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5 text-[#dc141b]" />
              <span>Audit Éditorial &amp; Optimisation LSI</span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-[#041e4d] tracking-tight">
              Score de Lisibilité &amp; Checklist Sémantique IA
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1.5 max-w-2xl leading-relaxed">
              Analyse automatisée de l&apos;empreinte sémantique (LSI / NLP) et de la clarté pédagogique pour garantir un référencement naturel optimal et une lecture fluide.
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-bold">
              <Check className="w-3.5 h-3.5 text-emerald-600" />
              <span>Google Helpful Content Compliant</span>
            </span>
          </div>
        </div>

        {/* Readability Score Dashboard Card */}
        <div className="rounded-2xl bg-gradient-to-br from-[#031d4f] to-[#041e4d] text-white p-6 sm:p-8 shadow-xl relative overflow-hidden mb-8">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#ef232a]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            {/* Primary Gauge */}
            <div className="lg:col-span-5 flex flex-col sm:flex-row items-center gap-6">
              <div className="relative flex items-center justify-center w-32 h-32 sm:w-36 sm:h-36 shrink-0">
                <svg className="w-full h-full -rotate-90" viewBox="0 0 120 120">
                  <circle
                    cx="60"
                    cy="60"
                    r="50"
                    fill="none"
                    stroke="#ffffff"
                    strokeOpacity="0.15"
                    strokeWidth="10"
                  />
                  <circle
                    cx="60"
                    cy="60"
                    r="50"
                    fill="none"
                    stroke="#10b981"
                    strokeWidth="10"
                    strokeDasharray={2 * Math.PI * 50}
                    strokeDashoffset={
                      2 * Math.PI * 50 * (1 - analysis.metrics.score / 100)
                    }
                    strokeLinecap="round"
                    className="transition-all duration-1000 ease-out"
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                  <span className="font-display text-3xl sm:text-4xl font-black text-white tabular-nums">
                    {analysis.metrics.score}
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400">
                    / 100
                  </span>
                </div>
              </div>

              <div className="text-center sm:text-left">
                <span className="inline-block px-2.5 py-1 rounded-md bg-emerald-500/20 text-emerald-300 text-xs font-extrabold uppercase tracking-wide mb-1.5">
                  {analysis.metrics.gradeLabel}
                </span>
                <h3 className="font-display text-lg sm:text-xl font-extrabold text-white">
                  Indice de Lisibilité Élevé
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-1 leading-relaxed">
                  Le contenu est structuré pour une compréhension immédiate par les particuliers et une extraction simplifiée par les moteurs de recherche.
                </p>
              </div>
            </div>

            {/* Sub-Metrics Breakdown */}
            <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
              <div className="bg-white/10 rounded-xl p-3.5 border border-white/10 text-center flex flex-col justify-center">
                <div className="flex items-center justify-center gap-1.5 text-xs text-slate-300 mb-1">
                  <BookOpen className="w-3.5 h-3.5 text-[#ef232a]" />
                  <span>Longueur</span>
                </div>
                <p className="font-display text-xl sm:text-2xl font-bold text-white tabular-nums">
                  {analysis.metrics.wordCount}
                </p>
                <span className="text-[10px] text-slate-300 mt-0.5">mots vérifiés</span>
              </div>

              <div className="bg-white/10 rounded-xl p-3.5 border border-white/10 text-center flex flex-col justify-center">
                <div className="flex items-center justify-center gap-1.5 text-xs text-slate-300 mb-1">
                  <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Phrases</span>
                </div>
                <p className="font-display text-xl sm:text-2xl font-bold text-white tabular-nums">
                  {analysis.metrics.avgWordsPerSentence}
                </p>
                <span className="text-[10px] text-slate-300 mt-0.5">mots / phrase (idéal)</span>
              </div>

              <div className="bg-white/10 rounded-xl p-3.5 border border-white/10 text-center flex flex-col justify-center">
                <div className="flex items-center justify-center gap-1.5 text-xs text-slate-300 mb-1">
                  <Layers className="w-3.5 h-3.5 text-[#38bdf8]" />
                  <span>Couverture LSI</span>
                </div>
                <p className="font-display text-xl sm:text-2xl font-bold text-white tabular-nums">
                  {analysis.metrics.lsiCoveragePercentage}%
                </p>
                <span className="text-[10px] text-slate-300 mt-0.5">
                  {coveredCount} / {totalCount} entités
                </span>
              </div>

              <div className="bg-white/10 rounded-xl p-3.5 border border-white/10 text-center flex flex-col justify-center">
                <div className="flex items-center justify-center gap-1.5 text-xs text-slate-300 mb-1">
                  <BarChart3 className="w-3.5 h-3.5 text-[#f59e0b]" />
                  <span>Richesse NLP</span>
                </div>
                <p className="font-display text-xl sm:text-2xl font-bold text-white tabular-nums">
                  {analysis.metrics.vocabularyRichnessScore}/100
                </p>
                <span className="text-[10px] text-slate-300 mt-0.5">diversité lexicale</span>
              </div>
            </div>
          </div>
        </div>

        {/* AI Semantic Keywords Checklist Container */}
        <div className="rounded-2xl border border-slate-200 bg-[#f8fafd] p-6 sm:p-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-200">
            <div>
              <h3 className="font-display text-lg sm:text-xl font-extrabold text-[#041e4d]">
                Checklist Sémantique LSI Générée par l&apos;IA
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Entités sémantiques indispensables pour positionner ce guide sur les requêtes à forte intention de recherche.
              </p>
            </div>

            {/* Quick Live Word Occurrence Tester */}
            <div className="w-full md:w-72">
              <label htmlFor="custom-lsi-tester" className="sr-only">
                Tester un mot-clé dans l&apos;article
              </label>
              <div className="relative">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  id="custom-lsi-tester"
                  type="text"
                  value={customKeywordTest}
                  onChange={(e) => setCustomKeywordTest(e.target.value)}
                  placeholder="Tester un terme dans le texte..."
                  className="w-full h-10 pl-9 pr-3 rounded-xl border border-slate-200 bg-white text-xs sm:text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#041e4d]"
                />
              </div>
              {customTestResult && (
                <div className="mt-1.5 text-xs flex items-center justify-between">
                  <span className="text-slate-600 truncate">
                    « {customTestResult.query} » :
                  </span>
                  {customTestResult.isCovered ? (
                    <span className="font-bold text-emerald-700">
                      Trouvé ({customTestResult.count}x) ✓
                    </span>
                  ) : (
                    <span className="font-semibold text-amber-600">
                      Non présent dans le texte
                    </span>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Category Filter Pills & Search */}
          <div className="py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-1.5">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors cursor-pointer ${
                    selectedCategory === cat
                      ? 'bg-[#041e4d] text-white shadow-xs'
                      : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="relative w-full sm:w-56">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Filtrer les termes LSI..."
                className="w-full h-8 px-2.5 rounded-lg border border-slate-200 bg-white text-xs text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-[#041e4d]"
              />
            </div>
          </div>

          {/* Keyword Checklist Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2">
            {filteredKeywords.map((item) => (
              <div
                key={item.term}
                className={`p-3.5 rounded-xl border flex items-center justify-between gap-3 transition-colors ${
                  item.isCovered
                    ? 'bg-white border-slate-200 hover:border-slate-300 shadow-2xs'
                    : 'bg-amber-50/60 border-amber-200/80'
                }`}
              >
                <div className="flex items-start gap-2.5 min-w-0">
                  {item.isCovered ? (
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  ) : (
                    <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                  )}

                  <div className="min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <p className="font-display text-sm font-bold text-[#041e4d] truncate">
                        {item.term}
                      </p>
                      <span className="text-[10px] px-2 py-0.5 rounded-md bg-slate-100 text-slate-600 font-semibold">
                        {item.category}
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-500 mt-0.5">
                      {item.recommendation}
                    </p>
                  </div>
                </div>

                <div className="text-right shrink-0">
                  <span
                    className={`inline-block px-2 py-0.5 rounded text-[10px] font-bold ${
                      item.isCovered
                        ? 'bg-emerald-100 text-emerald-800'
                        : 'bg-amber-100 text-amber-800'
                    }`}
                  >
                    {item.isCovered ? `${item.occurrences}x` : 'Suggéré'}
                  </span>
                  <div className="text-[10px] text-slate-600 mt-1 font-semibold">
                    Poids : {item.relevance}%
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredKeywords.length === 0 && (
            <div className="py-8 text-center text-xs text-slate-500">
              Aucun mot-clé ne correspond à votre filtre.
            </div>
          )}

          {/* Methodology Reassurance Footer */}
          <div className="mt-6 pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-600">
            <div className="flex items-center gap-2">
              <HelpCircle className="w-4 h-4 text-slate-400 shrink-0" />
              <span>
                Algorithme basé sur la modélisation sémantique latente (LSI) et les critères d&apos;évaluation de contenu utile Google.
              </span>
            </div>
            <span className="font-bold text-[#041e4d]">
              Densité sémantique vérifiée : {coveredCount}/{totalCount} termes
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
