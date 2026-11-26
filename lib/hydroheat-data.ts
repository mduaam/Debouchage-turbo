export interface ServiceItem {
  id: string;
  title: string;
  shortDescription: string;
  image: string;
  imageAlt: string;
  startingPrice: string;
  responseDelay: string;
  highlights: string[];
}

export interface TestimonialItem {
  id: string;
  name: string;
  commune: string;
  quote: string;
  rating: number;
  avatar?: string;
  initials: string;
  service?: string;
  dateLabel?: string;
  verified?: boolean;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface PostalCodeEntry {
  code: string;
  commune: string;
}

export const PHONE_DISPLAY = '02 899 04 17';
export const PHONE_HREF = 'tel:+3228990417';
export const WHATSAPP_NUMBER = '3228990417';

export const POSTAL_CODE_SUGGESTIONS: PostalCodeEntry[] = [
  { code: '1000', commune: 'Bruxelles-Ville' },
  { code: '1020', commune: 'Laeken' },
  { code: '1030', commune: 'Schaerbeek' },
  { code: '1040', commune: 'Etterbeek' },
  { code: '1050', commune: 'Ixelles' },
  { code: '1060', commune: 'Saint-Gilles' },
  { code: '1070', commune: 'Anderlecht' },
  { code: '1080', commune: 'Molenbeek-Saint-Jean' },
  { code: '1081', commune: 'Koekelberg' },
  { code: '1082', commune: 'Berchem-Sainte-Agathe' },
  { code: '1083', commune: 'Ganshoren' },
  { code: '1090', commune: 'Jette' },
  { code: '1120', commune: 'Neder-Over-Heembeek' },
  { code: '1130', commune: 'Haren' },
  { code: '1140', commune: 'Evere' },
  { code: '1150', commune: 'Woluwe-Saint-Pierre' },
  { code: '1160', commune: 'Auderghem' },
  { code: '1170', commune: 'Watermael-Boitsfort' },
  { code: '1180', commune: 'Uccle' },
  { code: '1190', commune: 'Forest' },
  { code: '1200', commune: 'Woluwe-Saint-Lambert' },
  { code: '1210', commune: 'Saint-Josse-ten-Noode' },
  { code: '1300', commune: 'Wavre' },
  { code: '1340', commune: 'Ottignies-Louvain-la-Neuve' },
  { code: '1380', commune: 'Lasne' },
  { code: '1400', commune: 'Nivelles' },
  { code: '1410', commune: 'Waterloo' },
  { code: '1420', commune: "Braine-l'Alleud" },
  { code: '1500', commune: 'Halle' },
  { code: '1640', commune: 'Rhode-Saint-Genèse' },
  { code: '1650', commune: 'Beersel' },
  { code: '1700', commune: 'Dilbeek' },
  { code: '1780', commune: 'Wemmel' },
  { code: '1800', commune: 'Vilvoorde' },
  { code: '1850', commune: 'Grimbergen' },
  { code: '1930', commune: 'Zaventem' },
  { code: '1950', commune: 'Kraainem' },
  { code: '1970', commune: 'Wezembeek-Oppem' },
  { code: '2000', commune: 'Antwerpen' },
  { code: '3000', commune: 'Leuven' },
  { code: '4000', commune: 'Liège' },
  { code: '4300', commune: 'Waremme' },
  { code: '4540', commune: 'Amay' },
  { code: '4650', commune: 'Herve' },
  { code: '5000', commune: 'Namur' },
  { code: '5140', commune: 'Sombreffe' },
  { code: '5300', commune: 'Andenne' },
  { code: '5310', commune: 'Éghezée' },
  { code: '6000', commune: 'Charleroi' },
  { code: '6180', commune: 'Courcelles' },
  { code: '6220', commune: 'Fleurus' },
  { code: '6760', commune: 'Virton' },
  { code: '7000', commune: 'Mons' },
  { code: '7130', commune: 'Binche' },
  { code: '7180', commune: 'Seneffe' },
  { code: '7330', commune: 'Saint-Ghislain' },
  { code: '7850', commune: 'Enghien' },
  { code: '1360', commune: 'Perwez' },
  { code: '1390', commune: 'Grez-Doiceau' },
  { code: '1435', commune: 'Mont-Saint-Guibert' },
  { code: '9000', commune: 'Gent' },
];

export const BRUSSELS_COMMUNES = [
  'Bruxelles-Ville',
  'Ixelles',
  'Uccle',
  'Anderlecht',
  'Schaerbeek',
  'Etterbeek',
  'Saint-Gilles',
  'Woluwe-Saint-Lambert',
  'Woluwe-Saint-Pierre',
  'Forest',
  'Jette',
  'Molenbeek-Saint-Jean',
  'Auderghem',
  'Watermael-Boitsfort',
  'Evere',
  'Saint-Josse-ten-Noode',
  'Berchem-Sainte-Agathe',
  'Ganshoren',
  'Koekelberg',
  'Brabant Wallon / Flamand',
  'Autre région en Belgique',
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'debouchage-canalisation',
    title: 'Débouchage de Canalisation',
    shortDescription: 'Débouchage complet de toutes canalisations intérieures et extérieures.',
    image: '/images/curage-haute-pression.jpg',
    imageAlt: 'Buse haute pression hydrodynamique Debouchage Turbo en action dans une canalisation',
    startingPrice: 'À partir de 85 € HTVA',
    responseDelay: 'Sous 30 min en urgence',
    highlights: [
      'Débouchage haute pression hydrodynamique jusqu’à 200 bars',
      'Élimination des bouchons de calcaire, graisses, racines et lingettes',
      'Nettoyage complet des colonnes montantes et conduites principales',
      'Intervention propre sans casse ni détérioration de vos conduites',
    ],
  },
  {
    id: 'debouchage-wc',
    title: 'Débouchage WC',
    shortDescription: 'Débouchage rapide de toilettes classiques, WC suspendus et sanibroyeurs.',
    image: '/images/debouchage-wc.jpg',
    imageAlt: 'Intervention professionnelle de débouchage WC par Debouchage Turbo',
    startingPrice: 'À partir de 75 € HTVA',
    responseDelay: 'Sous 30 min en urgence',
    highlights: [
      'Débouchage sans démontage ni rayure de la cuvette en porcelaine',
      'Intervention sur WC suspendus Geberit, toilettes classiques et sanibroyeurs',
      'Suppression immédiate des refoulements et des risques de débordement',
      'Vérification de l’évacuation et contrôle d’étanchéité après débouchage',
    ],
  },
  {
    id: 'debouchage-evier',
    title: 'Débouchage Évier',
    shortDescription: 'Élimination rapide des bouchons d’évier, lavabo, siphon et conduite cuisine.',
    image: '/images/debouchage-evier.jpg',
    imageAlt: 'Débouchage d’évier de cuisine avec furet professionnel Debouchage Turbo',
    startingPrice: 'À partir de 75 € HTVA',
    responseDelay: 'Sous 30 min en urgence',
    highlights: [
      'Nettoyage complet des siphons, éviers inox/céramique et lave-vaisselle',
      'Dissolution mécanique des amas de graisses, savon et résidus alimentaires',
      'Débouchage au furet électrique rotatif ou hydrocurage basse section',
      'Suppression durable des bruits de glouglou et mauvaises odeurs',
    ],
  },
  {
    id: 'debouchage-baignoire-douche',
    title: 'Débouchage Baignoire & Douche',
    shortDescription: 'Dégorgement de baignoire, douche à l’italienne, bonde et siphon encastré.',
    image: '/images/debouchage-douche.jpg',
    imageAlt: 'Débouchage professionnel d’une évacuation de douche et baignoire sans produit corrosif',
    startingPrice: 'À partir de 75 € HTVA',
    responseDelay: 'Sous 30 min en urgence',
    highlights: [
      'Extraction complète des bouchons de cheveux, savon et calcaire dans la bonde',
      'Intervention douce adaptée aux receveurs plats et douches à l’italienne',
      'Respect total des tuyaux PVC et joints sans recourir à l’acide chlorhydrique',
      'Suppression immédiate des eaux stagnantes et odeurs de siphon',
    ],
  },
  {
    id: 'depannage-urgent',
    title: 'Dépannage Urgent 24/7',
    shortDescription: 'Équipe d’astreinte rapide 7j/7 – 24h/24 à Bruxelles et en Wallonie.',
    image: '/images/debouchage-lavabo.jpg',
    imageAlt: 'Technicien intervenant en urgence pour déboucher un lavabo engorgé',
    startingPrice: 'Tarif annoncé avant départ',
    responseDelay: '≤ 30 min partout à Bruxelles',
    highlights: [
      'Astreinte réelle de nuit, week-ends et jours fériés sans interruption',
      'Arrêt immédiat des débordements et sécurisation de votre logement',
      'Camions d’intervention équipés d’hydrocureurs compacts pour ruelles bruxelloises',
      'Rapport d’intervention complet pour votre assurance si nécessaire',
    ],
  },
  {
    id: 'curage-egouts',
    title: 'Curage & Égouts',
    shortDescription: 'Hydrocurage haute pression, nettoyage d’égouts et gouttières.',
    image: '/images/canalisation-interieur.jpg',
    imageAlt: 'Intérieur d’une conduite d’égout nettoyée et remise en écoulement',
    startingPrice: 'À partir de 120 € HTVA',
    responseDelay: 'Intervention le jour même',
    highlights: [
      'Curage préventif et curatif des réseaux d’égouttage et chambres de visite',
      'Nettoyage et débouchage des gouttières et descentes d’eaux pluviales',
      'Détartrage des canalisations anciennes en grès, fonte ou PVC',
      'Contrats d’entretien annuel pour copropriétés, syndics et Horeca',
    ],
  },
  {
    id: 'debouchage-sterput',
    title: 'Débouchage Sterput & Bac à Graisse',
    shortDescription: 'Curage de sterput, chambre de visite, avaloir de cour et bac à graisse.',
    image: '/images/service-plomberie.jpg',
    imageAlt: 'Nettoyage et curage haute pression d’un sterput et d’une chambre de visite en Belgique',
    startingPrice: 'À partir de 95 € HTVA',
    responseDelay: 'Intervention le jour même',
    highlights: [
      'Vidange et nettoyage complet du sterput (siphon de sol) et de sa cloche anti-odeurs',
      'Curage haute pression de chambre de visite, avaloir de garage et regard de façade',
      'Pompage et dégraissage de bac à graisse Horeca et particulier avec attestation',
      'Élimination durable des remontées d’odeurs d’égout en cave ou cour',
    ],
  },
  {
    id: 'inspection-camera',
    title: 'Inspection Caméra',
    shortDescription: 'Diagnostic vidéo HD pour assurance sinistre, achat ou fuite cachée.',
    image: '/images/inspection-camera.jpg',
    imageAlt: 'Technicien réalisant une inspection caméra haute définition des canalisations',
    startingPrice: 'À partir de 110 € HTVA',
    responseDelay: 'Rendez-vous sous 24h',
    highlights: [
      'Localisation au centimètre près des fissures, cassures, fuites et racines',
      'Rapport illustré reconnu par les assurances belges (dossier sinistre)',
      'Audit complet du réseau d’égouttage avant achat immobilier ou rénovation',
      'Évite les travaux de terrassement inutiles et coûteux',
    ],
  },
  {
    id: 'chemisage-reparation-egouts',
    title: 'Chemisage & Réparation d’Égouts',
    shortDescription: 'Réparation sans tranchée par chemisage et raccordement à l’égout.',
    image: '/images/service-depannage.jpg',
    imageAlt: 'Réparation structurelle et chemisage de canalisation d’égout sans tranchée',
    startingPrice: 'Sur devis gratuit',
    responseDelay: 'Sous 24 à 48h',
    highlights: [
      'Chemisage structurel par gaine résine sans casser ni creuser vos sols',
      'Réparation durable des fissures, joints déboîtés et infiltrations de racines',
      'Mise en conformité et raccordement au réseau d’égout communal',
      'Travail certifié garanti jusqu’à 10 ans sur gaine polymérisée',
    ],
  },
  {
    id: 'reparation-plomberie',
    title: 'Réparation plomberie générale',
    shortDescription: 'Remplacement de conduites, siphons, clapets anti-retour et fuites.',
    image: '/images/service-salle-de-bain.jpg',
    imageAlt: 'Intervention sanitaire de réparation de conduite et pose de clapet anti-retour',
    startingPrice: 'Devis clair gratuit',
    responseDelay: 'Sous 30 min en urgence',
    highlights: [
      'Remplacement de tronçons de canalisation endommagés ou fissurés',
      'Installation de clapets anti-retour contre les remontées d’égouts',
      'Réparation de fuites d’eau et remplacement de vannes d’arrêt',
      'Garantie écrite de 5 ans sur toutes nos réparations',
    ],
  },
  {
    id: 'vidange-fosse-septique',
    title: 'Vidange & Pose Fosse Septique',
    shortDescription: 'Vidange agréée, pose et raccordement de fosse septique et dégraisseur.',
    image: '/images/vidange-fosse-septique.jpg',
    imageAlt: 'Camion hydrocureur Debouchage Turbo effectuant une vidange de fosse septique',
    startingPrice: 'À partir de 165 € HTVA',
    responseDelay: 'Intervention sous 24h ou urgence',
    highlights: [
      'Vidange intégrale de fosses septiques, dégraisseurs et puits perdus (1 à 10 m³)',
      'Pose, remplacement et raccordement conforme de fosses septiques en Wallonie',
      'Transport et élimination des déchets en centre agréé avec attestation',
      'Nettoyage haute pression des parois, préfiltres et tuyaux entrée/sortie',
    ],
  },
];

export const TESTIMONIAL_PAGES: TestimonialItem[][] = [
  [
    {
      id: 'sophie-d',
      name: 'Sophie D.',
      commune: 'Bruxelles',
      quote:
        'Intervention ultra rapide de Debouchage Turbo pour une canalisation complètement bouchée en pleine nuit. Service impeccable !',
      rating: 5,
      avatar: '/images/avatar-sophie.jpg',
      initials: 'SD',
    },
    {
      id: 'marc-l',
      name: 'Marc L.',
      commune: 'Ixelles',
      quote:
        'Professionnel, ponctuel et très sympa. Mon évier et la conduite principale ont été débouchés en 20 minutes.',
      rating: 5,
      avatar: '/images/avatar-marc.jpg',
      initials: 'ML',
    },
    {
      id: 'julie-m',
      name: 'Julie M.',
      commune: 'Uccle',
      quote:
        'Un service au top, tarif annoncé avant le déplacement et curage haute pression très propre. Merci beaucoup !',
      rating: 5,
      avatar: '/images/avatar-julie.jpg',
      initials: 'JM',
    },
  ],
  [
    {
      id: 'thomas-v',
      name: 'Thomas V.',
      commune: 'Schaerbeek',
      quote:
        'Égout bouché un dimanche matin : le camion Debouchage Turbo était chez moi en 25 minutes, problème réglé avec inspection caméra.',
      rating: 5,
      initials: 'TV',
    },
    {
      id: 'claire-b',
      name: 'Claire B.',
      commune: 'Etterbeek',
      quote:
        'WC suspendu bloqué dans notre appartement : intervention propre, rapide et sans aucune casse. Je recommande vivement !',
      rating: 5,
      initials: 'CB',
    },
    {
      id: 'nicolas-r',
      name: 'Nicolas R.',
      commune: 'Anderlecht',
      quote:
        'Curage complet de la colonne de notre immeuble effectué dans les délais, avec garantie écrite de 5 ans.',
      rating: 5,
      initials: 'NR',
    },
  ],
];

export const HOMEPAGE_REVIEWS: TestimonialItem[] = [
  {
    id: 'sophie-d',
    name: 'Sophie D.',
    commune: 'Bruxelles (1000)',
    quote:
      'Intervention ultra rapide de Debouchage Turbo pour une canalisation complètement bouchée en pleine nuit. Le tarif annoncé au téléphone a été respecté au centime près.',
    rating: 5,
    avatar: '/images/avatar-sophie.jpg',
    initials: 'SD',
    service: 'Dépannage urgent 24/7',
    dateLabel: 'Il y a 5 jours',
    verified: true,
  },
  {
    id: 'marc-l',
    name: 'Marc L.',
    commune: 'Ixelles (1050)',
    quote:
      'Professionnel, ponctuel et très soigneux. Mon évier et la conduite principale ont été débouchés au furet électrique en 25 minutes sans aucune trace dans la cuisine.',
    rating: 5,
    avatar: '/images/avatar-marc.jpg',
    initials: 'ML',
    service: 'Débouchage évier',
    dateLabel: 'Il y a 1 semaine',
    verified: true,
  },
  {
    id: 'laurent-k',
    name: 'Laurent K.',
    commune: 'Liège (4000)',
    quote:
      'Très bon travail sur notre sterput de cour qui refoulait après de fortes pluies. Le camion a dû se garer une rue plus loin à cause des travaux, d’où 10 minutes d’installation en plus, mais résultat impeccable.',
    rating: 4,
    initials: 'LK',
    service: 'Débouchage sterput',
    dateLabel: 'Il y a 2 semaines',
    verified: true,
  },
  {
    id: 'julie-m',
    name: 'Julie M.',
    commune: 'Uccle (1180)',
    quote:
      'Un service au top, devis clair avant le déplacement et curage haute pression très propre de notre chambre de visite. Je recommande sans hésiter.',
    rating: 5,
    avatar: '/images/avatar-julie.jpg',
    initials: 'JM',
    service: 'Curage haute pression',
    dateLabel: 'Il y a 2 semaines',
    verified: true,
  },
  {
    id: 'nathalie-p',
    name: 'Nathalie P.',
    commune: 'Namur (5000)',
    quote:
      'Vidange de notre fosse septique et nettoyage du dégraisseur réalisés dans la matinée avec attestation conforme. Seul bémol : créneau décalé de 20 min suite à une urgence précédente, mais prévenue par SMS.',
    rating: 4,
    initials: 'NP',
    service: 'Vidange fosse septique',
    dateLabel: 'Il y a 3 semaines',
    verified: true,
  },
  {
    id: 'karim-b',
    name: 'Karim B.',
    commune: 'Mons (7000)',
    quote:
      'WC suspendu bloqué un dimanche après-midi. Intervention efficace en 35 minutes sans démonter la cuvette, même si le forfait week-end reste logiquement un peu plus élevé qu’en semaine.',
    rating: 3,
    initials: 'KB',
    service: 'Débouchage WC',
    dateLabel: 'Il y a 1 mois',
    verified: true,
  },
  {
    id: 'thomas-v',
    name: 'Thomas V.',
    commune: 'Schaerbeek (1030)',
    quote:
      'Égout bouché un dimanche matin : le camion Debouchage Turbo était chez moi en 25 minutes. Problème réglé durablement après diagnostic à la caméra HD.',
    rating: 5,
    initials: 'TV',
    service: 'Inspection caméra',
    dateLabel: 'Il y a 1 mois',
    verified: true,
  },
  {
    id: 'cedric-g',
    name: 'Cédric G.',
    commune: 'Waterloo (1410)',
    quote:
      'Passage caméra pour localiser des racines dans le raccordement avant vente de la maison. Rapport vidéo complet envoyé le soir même pour notre notaire.',
    rating: 4,
    initials: 'CG',
    service: 'Inspection caméra',
    dateLabel: 'Il y a 1 mois',
    verified: true,
  },
  {
    id: 'emilie-r',
    name: 'Émilie R.',
    commune: 'Charleroi (6000)',
    quote:
      'Douche à l’italienne complètement bouchée. Le technicien a résolu le blocage rapidement et nous a conseillé sur l’entretien, même si le rappel initial a pris 15 minutes en heure de pointe.',
    rating: 3,
    initials: 'ER',
    service: 'Baignoire & douche',
    dateLabel: 'Il y a 2 mois',
    verified: true,
  },
  {
    id: 'claire-b',
    name: 'Claire B.',
    commune: 'Etterbeek (1040)',
    quote:
      'WC suspendu bloqué dans notre appartement : intervention propre, rapide et sans aucune casse sur le carrelage. Équipe courtoise et rassurante.',
    rating: 5,
    initials: 'CB',
    service: 'Débouchage WC',
    dateLabel: 'Il y a 2 mois',
    verified: true,
  },
  {
    id: 'nicolas-r',
    name: 'Nicolas R.',
    commune: 'Anderlecht (1070)',
    quote:
      'Curage complet de la colonne commune de notre copropriété effectué dans les délais, avec facture détaillée pour le syndic et garantie écrite de 5 ans.',
    rating: 5,
    initials: 'NR',
    service: 'Curage colonne',
    dateLabel: 'Il y a 2 mois',
    verified: true,
  },
  {
    id: 'olivier-m',
    name: 'Olivier M.',
    commune: 'Wavre (1300)',
    quote:
      'Bon dépannage sur une canalisation extérieure obstruée par des graisses figées. Prix correct annoncé avant le travail, le chantier a simplement pris un peu plus de temps que prévu.',
    rating: 3,
    initials: 'OM',
    service: 'Débouchage canalisation',
    dateLabel: 'Il y a 3 mois',
    verified: true,
  },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'urgence',
    question: 'Intervenez-vous en urgence à Bruxelles pour un débouchage ?',
    answer:
      'Oui, les équipes Debouchage Turbo interviennent 7j/7 et 24h/24, y compris les week-ends et jours fériés, dans les 19 communes de Bruxelles-Capitale et partout en Belgique. Un technicien spécialisé arrive généralement sur place en 30 minutes ou moins.',
  },
  {
    id: 'tarifs',
    question: 'Quels sont vos tarifs pour un débouchage de canalisation ?',
    answer:
      'Nos tarifs sont annoncés clairement par téléphone avant le départ de notre technicien. Le devis est gratuit et transparent, sans frais cachés, que ce soit pour un débouchage d’évier, de WC ou un curage haute pression.',
  },
  {
    id: 'agree',
    question: 'Êtes-vous agréé et assuré ?',
    answer:
      'Oui, Debouchage Turbo est une entreprise belge enregistrée à la BCE (BE 0812.345.678), couverte par une assurance responsabilité civile professionnelle complète. Toutes nos interventions de débouchage et réparation sont garanties 5 ans.',
  },
  {
    id: 'duree',
    question: 'Quelle est la durée d’un débouchage de canalisation ?',
    answer:
      'La grande majorité des débouchages (WC, évier, douche, colonne ou égout) sont résolus en 30 à 60 minutes grâce à nos véhicules équipés d’hydrocureurs haute pression et de caméras d’inspection.',
  },
];
