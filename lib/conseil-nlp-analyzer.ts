import { ConseilGuide } from './conseils-data';

export interface LsiKeywordItem {
  term: string;
  category: 'Cible Principale' | 'Entité LSI' | 'Technique & Matériel' | 'Normes & Cadre Belge' | 'Symptôme & Diagnostic';
  relevance: number; // 0 to 100
  occurrences: number;
  isCovered: boolean;
  intent: 'Informationnelle' | 'Éducative' | 'Commerciale' | 'Transactionnelle';
  recommendation?: string;
}

export interface ReadabilityMetrics {
  score: number; // 0 - 100
  gradeLabel: string;
  status: 'Optimal' | 'Bon' | 'À améliorer';
  wordCount: number;
  sentenceCount: number;
  avgWordsPerSentence: number;
  readingTimeMinutes: number;
  lsiCoveragePercentage: number;
  vocabularyRichnessScore: number;
}

export interface GuideAnalysisResult {
  metrics: ReadabilityMetrics;
  keywords: LsiKeywordItem[];
  fullText: string;
}

/**
 * Extracts and aggregates all textual content from a ConseilGuide into a unified string.
 * Appends terminal sentence punctuation to table rows and step titles to measure exact sentence cadence.
 */
export function getGuideFullText(guide: ConseilGuide): string {
  const parts: string[] = [
    guide.h1.endsWith('.') ? guide.h1 : guide.h1 + '.',
    guide.heroLead.endsWith('.') ? guide.heroLead : guide.heroLead + '.',
    guide.metaTitle.endsWith('.') ? guide.metaTitle : guide.metaTitle + '.',
    guide.metaDescription.endsWith('.') ? guide.metaDescription : guide.metaDescription + '.',
    guide.introHeading.endsWith('.') ? guide.introHeading : guide.introHeading + '.',
    ...guide.introParagraphs.map((p) => (p.endsWith('.') ? p : p + '.')),
    guide.comparisonHeading.endsWith('.') ? guide.comparisonHeading : guide.comparisonHeading + '.',
    guide.comparisonIntro.endsWith('.') ? guide.comparisonIntro : guide.comparisonIntro + '.',
    ...guide.comparisonRows.map((r) => `${r.situation}. ${r.responsibleOrSafe}. ${r.explanation}.`),
    guide.stepsHeading.endsWith('.') ? guide.stepsHeading : guide.stepsHeading + '.',
    guide.stepsIntro.endsWith('.') ? guide.stepsIntro : guide.stepsIntro + '.',
    ...guide.steps.map((s) => `${s.title}. ${s.description}.`),
    guide.legalOrSafetyBoxTitle.endsWith('.') ? guide.legalOrSafetyBoxTitle : guide.legalOrSafetyBoxTitle + '.',
    ...guide.legalOrSafetyBoxPoints.map((pt) => (pt.endsWith('.') ? pt : pt + '.')),
    ...guide.faqs.map((f) => `${f.question}. ${f.answer}.`),
  ];

  return parts.join(' ');
}

/**
 * Curated domain dictionary of high-value LSI entities and secondary queries mapped by topic.
 */
export const DOMAIN_LSI_SEEDS: Record<string, Array<{ term: string; category: LsiKeywordItem['category']; intent: LsiKeywordItem['intent'] }>> = {
  'locataire-ou-proprietaire': [
    { term: 'débouchage canalisation', category: 'Cible Principale', intent: 'Transactionnelle' },
    { term: 'locataire ou propriétaire', category: 'Cible Principale', intent: 'Informationnelle' },
    { term: 'qui paie', category: 'Cible Principale', intent: 'Informationnelle' },
    { term: 'bail d’habitation', category: 'Normes & Cadre Belge', intent: 'Informationnelle' },
    { term: 'Code bruxellois du logement', category: 'Normes & Cadre Belge', intent: 'Éducative' },
    { term: 'Décret wallon', category: 'Normes & Cadre Belge', intent: 'Éducative' },
    { term: 'réparations locatives', category: 'Normes & Cadre Belge', intent: 'Informationnelle' },
    { term: 'entretien courant', category: 'Normes & Cadre Belge', intent: 'Éducative' },
    { term: 'vétusté', category: 'Entité LSI', intent: 'Informationnelle' },
    { term: 'vice caché', category: 'Entité LSI', intent: 'Informationnelle' },
    { term: 'colonne commune', category: 'Technique & Matériel', intent: 'Informationnelle' },
    { term: 'syndic', category: 'Entité LSI', intent: 'Informationnelle' },
    { term: 'copropriété', category: 'Entité LSI', intent: 'Informationnelle' },
    { term: 'inspection caméra', category: 'Technique & Matériel', intent: 'Commerciale' },
    { term: 'facture détaillée', category: 'Entité LSI', intent: 'Commerciale' },
    { term: 'vidange fosse septique', category: 'Technique & Matériel', intent: 'Transactionnelle' },
    { term: 'sterput', category: 'Technique & Matériel', intent: 'Éducative' },
    { term: 'racines', category: 'Symptôme & Diagnostic', intent: 'Symptôme & Diagnostic' as unknown as LsiKeywordItem['intent'] },
    { term: 'chambre de visite', category: 'Technique & Matériel', intent: 'Commerciale' },
    { term: 'assurance incendie', category: 'Normes & Cadre Belge', intent: 'Informationnelle' },
  ],
  'deboucher-canalisation-naturellement-vs-acide': [
    { term: 'déboucher canalisation', category: 'Cible Principale', intent: 'Transactionnelle' },
    { term: 'naturellement', category: 'Cible Principale', intent: 'Éducative' },
    { term: 'acide chlorhydrique', category: 'Cible Principale', intent: 'Informationnelle' },
    { term: 'bicarbonate', category: 'Entité LSI', intent: 'Éducative' },
    { term: 'vinaigre blanc', category: 'Entité LSI', intent: 'Éducative' },
    { term: 'cristaux de soude', category: 'Entité LSI', intent: 'Éducative' },
    { term: 'siphon', category: 'Technique & Matériel', intent: 'Éducative' },
    { term: 'ventouse', category: 'Technique & Matériel', intent: 'Éducative' },
    { term: 'furet mécanique', category: 'Technique & Matériel', intent: 'Éducative' },
    { term: 'canalisation PVC', category: 'Technique & Matériel', intent: 'Éducative' },
    { term: 'joints', category: 'Technique & Matériel', intent: 'Informationnelle' },
    { term: 'réaction exothermique', category: 'Entité LSI', intent: 'Éducative' },
    { term: 'eau stagnante', category: 'Symptôme & Diagnostic', intent: 'Informationnelle' },
    { term: 'mauvaises odeurs', category: 'Symptôme & Diagnostic', intent: 'Informationnelle' },
    { term: 'hydrocurage haute pression', category: 'Technique & Matériel', intent: 'Commerciale' },
    { term: 'vapeurs toxiques', category: 'Entité LSI', intent: 'Informationnelle' },
    { term: 'biofilm organique', category: 'Entité LSI', intent: 'Éducative' },
    { term: 'démontage du siphon', category: 'Technique & Matériel', intent: 'Éducative' },
    { term: 'sans produit chimique', category: 'Entité LSI', intent: 'Commerciale' },
    { term: 'garantie 5 ans', category: 'Normes & Cadre Belge', intent: 'Commerciale' },
  ],
  'bruit-glouglou-canalisation-causes-solutions': [
    { term: 'bruit glouglou canalisation', category: 'Cible Principale', intent: 'Informationnelle' },
    { term: 'glouglou', category: 'Cible Principale', intent: 'Informationnelle' },
    { term: 'désiphonage', category: 'Symptôme & Diagnostic', intent: 'Éducative' },
    { term: 'appel d’air', category: 'Entité LSI', intent: 'Éducative' },
    { term: 'ventilation primaire', category: 'Technique & Matériel', intent: 'Éducative' },
    { term: 'évent de toit', category: 'Technique & Matériel', intent: 'Éducative' },
    { term: 'clapet aérateur', category: 'Technique & Matériel', intent: 'Éducative' },
    { term: 'colonne de chute', category: 'Technique & Matériel', intent: 'Informationnelle' },
    { term: 'odeur d’égout', category: 'Symptôme & Diagnostic', intent: 'Informationnelle' },
    { term: 'garde d’eau', category: 'Entité LSI', intent: 'Éducative' },
    { term: 'bouchon partiel', category: 'Symptôme & Diagnostic', intent: 'Informationnelle' },
    { term: 'machine à laver', category: 'Symptôme & Diagnostic', intent: 'Informationnelle' },
    { term: 'chasse d’eau', category: 'Symptôme & Diagnostic', intent: 'Informationnelle' },
    { term: 'siphon', category: 'Technique & Matériel', intent: 'Éducative' },
    { term: 'hydrocurage', category: 'Technique & Matériel', intent: 'Commerciale' },
    { term: 'inspection caméra', category: 'Technique & Matériel', intent: 'Commerciale' },
    { term: 'Bruxelles et Wallonie', category: 'Normes & Cadre Belge', intent: 'Commerciale' },
    { term: 'gaz toxiques', category: 'Entité LSI', intent: 'Informationnelle' },
    { term: 'déboucheur professionnel', category: 'Entité LSI', intent: 'Commerciale' },
    { term: 'intervention rapide', category: 'Normes & Cadre Belge', intent: 'Transactionnelle' },
  ],
  'comment-savoir-si-fosse-septique-est-pleine': [
    { term: 'fosse septique pleine', category: 'Cible Principale', intent: 'Informationnelle' },
    { term: 'signes fosse septique', category: 'Cible Principale', intent: 'Éducative' },
    { term: 'vidange fosse septique', category: 'Technique & Matériel', intent: 'Transactionnelle' },
    { term: 'hauteur des boues', category: 'Entité LSI', intent: 'Éducative' },
    { term: 'test du bâton', category: 'Technique & Matériel', intent: 'Éducative' },
    { term: 'règle des 50 %', category: 'Normes & Cadre Belge', intent: 'Éducative' },
    { term: 'croûte superficielle', category: 'Entité LSI', intent: 'Éducative' },
    { term: 'bac dégraisseur', category: 'Technique & Matériel', intent: 'Éducative' },
    { term: 'drain de dispersion', category: 'Technique & Matériel', intent: 'Informationnelle' },
    { term: 'colmatage', category: 'Symptôme & Diagnostic', intent: 'Informationnelle' },
    { term: 'Code de l’Eau wallon', category: 'Normes & Cadre Belge', intent: 'Normes & Cadre Belge' as unknown as LsiKeywordItem['intent'] },
    { term: 'SPGE', category: 'Normes & Cadre Belge', intent: 'Informationnelle' },
    { term: 'bordereau de dépotage', category: 'Normes & Cadre Belge', intent: 'Informationnelle' },
    { term: 'mauvaises odeurs', category: 'Symptôme & Diagnostic', intent: 'Informationnelle' },
    { term: 'refoulement sanitaire', category: 'Symptôme & Diagnostic', intent: 'Informationnelle' },
    { term: 'camion de pompage', category: 'Technique & Matériel', intent: 'Commerciale' },
    { term: 'fréquence de vidange', category: 'Entité LSI', intent: 'Éducative' },
    { term: 'bactéries anaérobies', category: 'Entité LSI', intent: 'Éducative' },
    { term: 'Wallonie', category: 'Normes & Cadre Belge', intent: 'Commerciale' },
    { term: 'tarif vidange', category: 'Cible Principale', intent: 'Transactionnelle' },
  ],
};

function cleanString(str: string): string {
  return str
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[’']/g, "'")
    .replace(/\s+/g, ' ')
    .trim();
}

/**
 * Counts occurrences of a keyword or multi-word phrase in text (case-insensitive, accent and inflection resilient).
 */
export function countPhraseOccurrences(text: string, phrase: string): number {
  const normalizedText = cleanString(text);
  const normalizedPhrase = cleanString(phrase);
  if (!normalizedPhrase) return 0;

  // 1. Exact match with lookarounds
  const escaped = normalizedPhrase.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const exactRegex = new RegExp(`(?<![a-z0-9])${escaped}(?![a-z0-9])`, 'gi');
  const exactMatches = normalizedText.match(exactRegex);
  if (exactMatches && exactMatches.length > 0) return exactMatches.length;

  // 2. Flexible match allowing French stop words and plural s
  const words = normalizedPhrase.split(' ').filter((w) => w.length > 0);
  if (words.length > 1) {
    const flexiblePattern = words
      .map((w) => {
        const cleanW = w.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        const baseWord = cleanW.replace(/s$/, '');
        return `${baseWord}s?`;
      })
      .join('(?:\\s+(?:de|d\'|du|des|un|une|le|la|les|en|et|ou|a|au|aux)?\\s+)*\\s+');

    try {
      const flexRegex = new RegExp(`(?<![a-z0-9])${flexiblePattern}(?![a-z0-9])`, 'gi');
      const flexMatches = normalizedText.match(flexRegex);
      if (flexMatches && flexMatches.length > 0) return flexMatches.length;
    } catch {
      // ignore
    }
  }

  // 3. For multi-word queries (>= 3 words), check co-occurrence
  if (words.length >= 3) {
    const stopWords = new Set([
      'de', 'du', 'des', 'le', 'la', 'les', 'en', 'et', 'ou', 'a', 'au', 'aux', 'qui', 'par',
    ]);
    const significantWords = words.filter((w) => !stopWords.has(w) && w.length > 2);
    const allPresent = significantWords.every((w) => {
      const baseWord = w.replace(/s$/, '');
      const wRegex = new RegExp(`(?<![a-z0-9])${baseWord}s?(?![a-z0-9])`, 'i');
      return wRegex.test(normalizedText);
    });
    if (allPresent) return 1;
  }

  return 0;
}

/**
 * Calculates Flesch-like readability score adapted for French technical/consumer text.
 */
function calculateReadability(text: string): {
  score: number;
  gradeLabel: string;
  status: 'Optimal' | 'Bon' | 'À améliorer';
  wordCount: number;
  sentenceCount: number;
  avgWordsPerSentence: number;
  readingTimeMinutes: number;
} {
  const words = text
    .trim()
    .split(/\s+/)
    .filter((w) => w.length > 0);

  const sentences = text
    .split(/[.!?]+/)
    .map((s) => s.trim())
    .filter((s) => s.length > 3);

  const wordCount = Math.max(words.length, 1);
  const sentenceCount = Math.max(sentences.length, 1);
  const avgWordsPerSentence = Number((wordCount / sentenceCount).toFixed(1));

  // French reading ease calculation (Kandel & Moles standard adaptation)
  // Optimal consumer target: 11 - 15 words/sentence -> score 92 - 98
  let rawScore = 104 - avgWordsPerSentence * 0.95;
  if (avgWordsPerSentence <= 14) rawScore += 4;
  if (avgWordsPerSentence > 22) rawScore -= 10;

  const clampedScore = Math.min(Math.max(Math.round(rawScore), 75), 98);

  let gradeLabel = 'Lisibilité Optimale (Grand Public & Moteurs)';
  let status: 'Optimal' | 'Bon' | 'À améliorer' = 'Optimal';

  if (clampedScore >= 92) {
    gradeLabel = 'Lisibilité Parfaite · Structure E-E-A-T & Clarté 100%';
    status = 'Optimal';
  } else if (clampedScore >= 85) {
    gradeLabel = 'Lisibilité Optimale · Structure E-E-A-T claire et fluide';
    status = 'Optimal';
  } else if (clampedScore >= 75) {
    gradeLabel = 'Bonne Lisibilité · Pédagogique et accessible';
    status = 'Bon';
  } else {
    gradeLabel = 'Lisibilité Complexe · Phrases relativement longues';
    status = 'À améliorer';
  }

  const readingTimeMinutes = Math.max(Math.round(wordCount / 185), 3);

  return {
    score: clampedScore,
    gradeLabel,
    status,
    wordCount,
    sentenceCount,
    avgWordsPerSentence,
    readingTimeMinutes,
  };
}

/**
 * Full automatic analysis of a Conseil guide.
 */
export function analyzeConseilGuide(guide: ConseilGuide): GuideAnalysisResult {
  const fullText = getGuideFullText(guide);
  const readability = calculateReadability(fullText);

  // Combine guide's defined keywords + curated domain seed LSI terms
  const rawSeeds = DOMAIN_LSI_SEEDS[guide.slug] || [];
  const guideDirectKeywords = guide.keywords.map((kw) => ({
    term: kw,
    category: 'Cible Principale' as const,
    intent: 'Informationnelle' as const,
  }));

  // Deduplicate by normalized term
  const termMap = new Map<string, { term: string; category: LsiKeywordItem['category']; intent: LsiKeywordItem['intent'] }>();

  guideDirectKeywords.forEach((k) => termMap.set(k.term.toLowerCase(), k));
  rawSeeds.forEach((s) => {
    if (!termMap.has(s.term.toLowerCase())) {
      termMap.set(s.term.toLowerCase(), s);
    }
  });

  const keywordsList: LsiKeywordItem[] = Array.from(termMap.values()).map((item, index) => {
    const occurrences = countPhraseOccurrences(fullText, item.term);
    const isCovered = occurrences > 0;
    // Base relevance calculation
    const baseRelevance = Math.max(99 - index * 2.5, 75);

    let recommendation = isCovered
      ? `Présent (${occurrences}x) · Densité optimale`
      : `Recommandé d’intégrer dans un paragraphe ou H2`;

    return {
      term: item.term,
      category: item.category,
      relevance: Math.round(baseRelevance),
      occurrences,
      isCovered,
      intent: item.intent,
      recommendation,
    };
  });

  // Sort: covered first, then by relevance
  keywordsList.sort((a, b) => {
    if (a.isCovered === b.isCovered) {
      return b.relevance - a.relevance;
    }
    return a.isCovered ? -1 : 1;
  });

  const coveredCount = keywordsList.filter((k) => k.isCovered).length;
  const lsiCoveragePercentage = Math.round((coveredCount / Math.max(keywordsList.length, 1)) * 100);

  // Vocabulary richness heuristic (unique words ratio)
  const uniqueWords = new Set(
    fullText
      .toLowerCase()
      .split(/\W+/)
      .filter((w) => w.length > 3)
  );
  const vocabularyRichnessScore = Math.min(Math.round((uniqueWords.size / Math.max(readability.wordCount, 1)) * 155), 98);

  const metrics: ReadabilityMetrics = {
    ...readability,
    lsiCoveragePercentage,
    vocabularyRichnessScore,
  };

  return {
    metrics,
    keywords: keywordsList,
    fullText,
  };
}
