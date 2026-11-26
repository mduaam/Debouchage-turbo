export interface TariffItem {
  id: string;
  category: 'sanitaire' | 'canalisations' | 'diagnostic' | 'fosses';
  categoryLabel: string;
  serviceSlug: string;
  title: string;
  detail: string;
  price: string;
  duration: string;
}

export interface TariffCategoryTab {
  id: 'all' | 'sanitaire' | 'canalisations' | 'diagnostic' | 'fosses';
  label: string;
}

export const TARIFF_CATEGORY_TABS: TariffCategoryTab[] = [
  { id: 'all', label: 'Tous les tarifs' },
  { id: 'sanitaire', label: 'WC, Évier & Douche' },
  { id: 'canalisations', label: 'Canalisations & Égouts' },
  { id: 'diagnostic', label: 'Caméra & Réparations' },
  { id: 'fosses', label: 'Fosses Septiques' },
];

export const TARIFF_ITEMS: TariffItem[] = [
  {
    id: 'wc-classique',
    category: 'sanitaire',
    categoryLabel: 'WC, Évier & Douche',
    serviceSlug: 'debouchage-wc',
    title: 'Débouchage WC classique',
    detail: 'Intervention pompe à vide ou canne gainée anti-rayure sans démontage',
    price: 'À partir de 75 € HTVA',
    duration: '30 – 45 min',
  },
  {
    id: 'wc-suspendu',
    category: 'sanitaire',
    categoryLabel: 'WC, Évier & Douche',
    serviceSlug: 'debouchage-wc',
    title: 'Débouchage WC suspendu ou sanibroyeur',
    detail: 'Dégorgement sur bâti encastré Geberit ou extraction sur turbine broyeur',
    price: 'À partir de 95 € HTVA',
    duration: '45 – 60 min',
  },
  {
    id: 'lavabo-douche',
    category: 'sanitaire',
    categoryLabel: 'WC, Évier & Douche',
    serviceSlug: 'debouchage-baignoire-douche',
    title: 'Débouchage baignoire, douche ou lavabo',
    detail: 'Extraction cheveux/savon, nettoyage bonde, siphon et douche à l’italienne',
    price: 'À partir de 75 € HTVA',
    duration: '30 – 45 min',
  },
  {
    id: 'evier-cuisine',
    category: 'sanitaire',
    categoryLabel: 'WC, Évier & Douche',
    serviceSlug: 'debouchage-evier',
    title: 'Débouchage évier de cuisine (graisses)',
    detail: 'Curage rotatif complet du siphon jusqu’à la colonne d’évacuation',
    price: 'À partir de 85 € HTVA',
    duration: '30 – 60 min',
  },
  {
    id: 'canalisation-interieure',
    category: 'canalisations',
    categoryLabel: 'Canalisations & Égouts',
    serviceSlug: 'debouchage-canalisation',
    title: 'Débouchage canalisation intérieure',
    detail: 'Furet électrique rotatif jusqu’à 10 mètres sur conduite secondaire',
    price: 'À partir de 85 € HTVA',
    duration: '45 min',
  },
  {
    id: 'sterput-avaloir',
    category: 'canalisations',
    categoryLabel: 'Canalisations & Égouts',
    serviceSlug: 'debouchage-sterput',
    title: 'Débouchage & nettoyage sterput / avaloir',
    detail: 'Nettoyage complet de la cuve, cloche coupe-odeur et conduite vers l’égout',
    price: 'À partir de 95 € HTVA',
    duration: '45 min',
  },
  {
    id: 'hydrocurage-principal',
    category: 'canalisations',
    categoryLabel: 'Canalisations & Égouts',
    serviceSlug: 'curage-egouts',
    title: 'Hydrocurage haute pression (égout / chambre de visite)',
    detail: 'Nettoyage complet jusqu’à 200 bars sur conduite principale et regard',
    price: 'À partir de 120 € HTVA',
    duration: '45 – 90 min',
  },
  {
    id: 'nettoyage-gouttieres',
    category: 'canalisations',
    categoryLabel: 'Canalisations & Égouts',
    serviceSlug: 'curage-egouts',
    title: 'Nettoyage gouttières & descentes pluviales',
    detail: 'Dégagement des feuilles et curage des descentes raccordées à l’égout',
    price: 'À partir de 95 € HTVA',
    duration: '45 – 60 min',
  },
  {
    id: 'coupe-racines',
    category: 'canalisations',
    categoryLabel: 'Canalisations & Égouts',
    serviceSlug: 'curage-egouts',
    title: 'Coupe-racines hydraulique haute pression',
    detail: 'Sectionnement de racines infiltrées dans les conduites extérieures',
    price: 'À partir de 160 € HTVA',
    duration: '60 – 90 min',
  },
  {
    id: 'inspection-camera-base',
    category: 'diagnostic',
    categoryLabel: 'Caméra & Réparations',
    serviceSlug: 'inspection-camera',
    title: 'Inspection caméra HD canalisation',
    detail: 'Exploration endoscopique jusqu’à 20 m avec visionnage en direct',
    price: 'À partir de 110 € HTVA',
    duration: '45 min',
  },
  {
    id: 'inspection-sonde',
    category: 'diagnostic',
    categoryLabel: 'Caméra & Réparations',
    serviceSlug: 'inspection-camera',
    title: 'Inspection caméra + localisation par sonde (sinistre / achat)',
    detail: 'Traçage en surface de cassure ou fuite + rapport écrit et vidéo HD',
    price: 'À partir de 145 € HTVA',
    duration: '60 min',
  },
  {
    id: 'chemisage-canalisation',
    category: 'diagnostic',
    categoryLabel: 'Caméra & Réparations',
    serviceSlug: 'chemisage-reparation-egouts',
    title: 'Chemisage de canalisation sans tranchée',
    detail: 'Réparation structurelle par manchette (dès 490 €) ou gaine époxy continue',
    price: 'À partir de 350 € / ml HTVA',
    duration: '1 – 2 jours',
  },
  {
    id: 'remplacement-siphon',
    category: 'diagnostic',
    categoryLabel: 'Caméra & Réparations',
    serviceSlug: 'reparation-plomberie',
    title: 'Remplacement siphon, joint ou flexible',
    detail: 'Pièce neuve certifiée et test d’étanchéité complet garanti 5 ans',
    price: 'À partir de 85 € HTVA',
    duration: '30 – 45 min',
  },
  {
    id: 'vidange-fosse-3000',
    category: 'fosses',
    categoryLabel: 'Fosses Septiques',
    serviceSlug: 'vidange-fosse-septique',
    title: 'Vidange fosse septique jusqu’à 3 m³ (3 000 L)',
    detail: 'Pompage intégral, curage haute pression des parois et attestation agréée',
    price: 'À partir de 165 € HTVA',
    duration: '45 – 75 min',
  },
  {
    id: 'vidange-fosse-6000',
    category: 'fosses',
    categoryLabel: 'Fosses Septiques',
    serviceSlug: 'vidange-fosse-septique',
    title: 'Vidange fosse grande capacité (3 à 6 m³)',
    detail: 'Fosses toutes eaux multi-logements avec rinçage des conduites',
    price: 'À partir de 210 € HTVA',
    duration: '60 – 90 min',
  },
  {
    id: 'nettoyage-bac-graisse',
    category: 'fosses',
    categoryLabel: 'Fosses Septiques',
    serviceSlug: 'debouchage-sterput',
    title: 'Nettoyage & vidange bac à graisse / dégraisseur',
    detail: 'Aspiration complète des graisses figées, curage et certificat Horeca',
    price: 'À partir de 145 € HTVA',
    duration: '45 – 60 min',
  },
  {
    id: 'fosse-et-bac-graisse',
    category: 'fosses',
    categoryLabel: 'Fosses Septiques',
    serviceSlug: 'vidange-fosse-septique',
    title: 'Forfait combiné vidange fosse septique + bac à graisse',
    detail: 'Pompage simultané fosse + dégraisseur et curage des conduites reliées',
    price: 'À partir de 245 € HTVA',
    duration: '75 – 90 min',
  },
  {
    id: 'nettoyage-citerne',
    category: 'fosses',
    categoryLabel: 'Fosses Septiques',
    serviceSlug: 'vidange-fosse-septique',
    title: 'Nettoyage citerne d’eau de pluie',
    detail: 'Pompage des sédiments, brossage haute pression et désinfection',
    price: 'À partir de 155 € HTVA',
    duration: '60 min',
  },
];

export interface CityTariffHighlight {
  id: string;
  citySlug: string;
  cityName: string;
  eta: string;
  sanitaryPrice: string;
  hydroPrice: string;
  note: string;
}

export const CITY_TARIFF_HIGHLIGHTS: CityTariffHighlight[] = [
  {
    id: 'prix-bruxelles',
    citySlug: 'bruxelles',
    cityName: 'Bruxelles (19 communes)',
    eta: '15–30 min',
    sanitaryPrice: 'Dès 75 € HTVA',
    hydroPrice: 'Dès 120 € HTVA',
    note: 'Déplacement inclus dans les 19 communes bruxelloises (Ixelles, Uccle, Anderlecht, Schaerbeek, Etterbeek...).',
  },
  {
    id: 'prix-liege',
    citySlug: 'liege',
    cityName: 'Liège & Bassin liégeois',
    eta: '30–45 min',
    sanitaryPrice: 'Dès 75 € HTVA',
    hydroPrice: 'Dès 120 € HTVA',
    note: 'Forfaits annoncés avant départ sur Liège, Seraing, Ans, Herstal, Amay, Huy et Waremme.',
  },
  {
    id: 'prix-mons',
    citySlug: 'mons',
    cityName: 'Mons & Borinage',
    eta: '35–45 min',
    sanitaryPrice: 'Dès 75 € HTVA',
    hydroPrice: 'Dès 120 € HTVA',
    note: 'Tarifs transparents sur Mons, Saint-Ghislain, Quaregnon, Colfontaine et Dour sans frais cachés.',
  },
  {
    id: 'prix-mouscron',
    citySlug: 'mouscron',
    cityName: 'Mouscron & Wallonie picarde',
    eta: '40–55 min',
    sanitaryPrice: 'Dès 75 € HTVA',
    hydroPrice: 'Dès 120 € HTVA',
    note: 'Interventions planifiées ou urgentes sur Mouscron, Tournai, Péruwelz et Leuze-en-Hainaut.',
  },
  {
    id: 'prix-charleroi',
    citySlug: 'charleroi',
    cityName: 'Charleroi & Hainaut Centre',
    eta: '30–45 min',
    sanitaryPrice: 'Dès 75 € HTVA',
    hydroPrice: 'Dès 120 € HTVA',
    note: 'Équipes mobiles sur Charleroi, Fleurus, Courcelles, Seneffe, Manage et La Louvière.',
  },
  {
    id: 'prix-namur',
    citySlug: 'namur',
    cityName: 'Namur & Brabant wallon',
    eta: '25–40 min',
    sanitaryPrice: 'Dès 75 € HTVA',
    hydroPrice: 'Dès 120 € HTVA',
    note: 'Débouchage et vidange fosse septique sur Namur, Éghezée, Andenne, Wavre, Waterloo et Nivelles.',
  },
];

export const TARIFF_FAQS = [
  {
    question: 'Combien coûte un débouchage de canalisation à Bruxelles, Liège, Mons ou Mouscron ?',
    answer:
      'Un débouchage sanitaire simple (WC classique, baignoire, douche, lavabo ou siphon d’évier) démarre à 75 € HTVA, aussi bien à Bruxelles qu’à Liège, Mons, Charleroi, Namur ou Mouscron. Un hydrocurage haute pression d’égout ou de sterput démarre entre 95 € et 120 € HTVA. Le montant ferme est toujours confirmé par téléphone avant le départ.',
  },
  {
    question: 'Quel est le prix d’une vidange de fosse septique avec bac à graisse (dégraisseur) ?',
    answer:
      'La vidange d’une fosse septique jusqu’à 3 m³ démarre à 165 € HTVA et le nettoyage d’un bac à graisse seul à 145 € HTVA. En optant pour notre forfait combiné fosse septique + bac à graisse dans la même intervention (dès 245 € HTVA), vous économisez sur le déplacement du camion hydrocureur.',
  },
  {
    question: 'Combien coûte un chemisage de canalisation sans tranchée en Belgique ?',
    answer:
      'Pour une réparation ponctuelle d’une fissure ou d’un joint par manchette époxy, les tarifs démarrent à 490 € HTVA. Pour un chemisage continu sur plusieurs mètres linéaires, comptez à partir de 350 € / ml HTVA selon le diamètre et le diagnostic caméra préalable.',
  },
  {
    question: 'Les frais de déplacement sont-ils inclus dans vos tarifs ?',
    answer:
      'Oui, dans les 19 communes de Bruxelles-Capitale et dans nos zones d’intervention en Wallonie, le déplacement est intégré au forfait communiqué lors de la prise en charge téléphonique. Vous ne payez aucun supplément caché à l’arrivée.',
  },
  {
    question: 'Y a-t-il un supplément pour une intervention de nuit, le dimanche ou un jour férié ?',
    answer:
      'Nos équipes d’astreinte assurent une permanence 7j/7 et 24h/24. Une majoration horaire encadrée s’applique uniquement en soirée tardive (après 20h), la nuit, le week-end ou les jours fériés belges — et son montant précis vous est toujours confirmé à l’avance par téléphone.',
  },
  {
    question: 'Quel taux de TVA s’applique en Belgique et qui paie entre locataire et propriétaire ?',
    answer:
      'Pour les habitations privées belges de plus de 10 ans, le taux de TVA réduit de 6 % s’applique (21 % pour les locaux professionnels ou récents). Si le bouchon vient d’une colonne commune, de racines ou d’une cassure, la facture est à charge du propriétaire ou du syndic.',
  },
];
