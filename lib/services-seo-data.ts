import { SERVICES, ServiceItem } from './hydroheat-data';

export interface ServiceSymptom {
  title: string;
  description: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

export interface PricingRow {
  label: string;
  detail: string;
  price: string;
}

export interface ServiceSeoContent {
  slug: string;
  metaTitle: string;
  metaDescription: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  searchIntent: 'Transactionnelle & Urgence' | 'Commerciale & Locale' | 'Diagnostic & Technique';
  h1: string;
  heroBadge: string;
  heroLead: string;
  introHeading: string;
  introParagraphs: string[];
  symptomsHeading: string;
  symptomsIntro: string;
  symptoms: ServiceSymptom[];
  processHeading: string;
  processIntro: string;
  processSteps: ProcessStep[];
  pricingHeading: string;
  pricingIntro: string;
  pricingRows: PricingRow[];
  localHeading: string;
  localParagraphs: string[];
  faqHeading: string;
  faqs: { question: string; answer: string }[];
  relatedSlugs: string[];
}

export const SERVICE_SEO_CONTENT: Record<string, ServiceSeoContent> = {
  'debouchage-canalisation': {
    slug: 'debouchage-canalisation',
    metaTitle: 'Débouchage Canalisation Bruxelles 24/7 | Debouchage Turbo',
    metaDescription:
      'Débouchage de canalisation à Bruxelles en moins de 30 min 7j/7. Hydrocurage haute pression jusqu’à 200 bars, tarif transparent et travail garanti 5 ans.',
    primaryKeyword: 'débouchage de canalisation',
    secondaryKeywords: [
      'débouchage canalisation Bruxelles',
      'hydrocurage haute pression',
      'canalisation bouchée urgence',
      'curage conduite évacuation',
    ],
    searchIntent: 'Transactionnelle & Urgence',
    h1: 'Débouchage de Canalisation à Bruxelles et en Belgique',
    heroBadge: 'Intervention urgence ≤ 30 min · 7j/7 – 24h/24',
    heroLead:
      'Eau stagnante, refoulement ou mauvaise odeur ? Nos camions hydrocureurs interviennent jour et nuit pour tout débouchage de canalisation sans casse ni produit corrosif.',
    introHeading: 'Pourquoi faire appel à un spécialiste du débouchage de canalisation ?',
    introParagraphs: [
      'Lorsqu’une conduite d’évacuation se bouche, les solutions chimiques vendues dans le commerce attaquent les joints en caoutchouc, fragilisent le PVC ou la fonte ancienne et ne dissolvent que partiellement le bouchon. Avec le temps, les dépôts de graisse figée, de calcaire, de savon ou de lingettes forment un amas compact qui bloque l’écoulement de l’ensemble du logement ou de l’immeuble.',
      'Chez Debouchage Turbo, chaque débouchage de canalisation à Bruxelles est exécuté avec du matériel professionnel adapté au diamètre et à la nature de vos tuyaux. Nous combinons le furet mécanique à tête rotative pour les conduites intérieures et l’hydrocurage haute pression jusqu’à 200 bars pour les colonnes principales et raccordements extérieurs.',
      'Notre objectif ne se limite pas à percer un passage temporaire dans l’obstruction : nous nettoyons intégralement la paroi interne de la conduite afin de restaurer son diamètre utile et de prévenir toute récidive. Chaque intervention est couverte par une garantie écrite de 5 ans.',
    ],
    symptomsHeading: 'Signes qu’un débouchage de canalisation devient urgent',
    symptomsIntro:
      'Repérer les premiers symptômes d’engorgement permet d’intervenir avant le débordement complet ou le dégât des eaux.',
    symptoms: [
      {
        title: 'Écoulement lent dans plusieurs sanitaires',
        description:
          'Lorsque l’eau met de longues secondes à s’évacuer simultanément dans l’évier, la douche et les toilettes, le bouchon se situe généralement sur la conduite collectrice principale.',
      },
      {
        title: 'Bruits de glouglou dans les siphons',
        description:
          'Des gargouillements audibles lorsqu’une machine à laver vidange ou qu’une chasse d’eau est tirée indiquent une poche d’air comprimée par une obstruction partielle.',
      },
      {
        title: 'Remontées d’odeurs d’égout tenaces',
        description:
          'La stagnation de matières organiques derrière un bouchon libère des gaz qui remontent par les bondes de douche, lavabos ou avaloirs de cave.',
      },
      {
        title: 'Refoulement d’eaux usées au point bas',
        description:
          'En cas de blocage total, l’eau tirée à l’étage remonte dans la douche du rez-de-chaussée ou par le regard de visite : une intervention d’urgence s’impose.',
      },
    ],
    processHeading: 'Notre méthode d’intervention en 4 étapes',
    processIntro:
      'Nos techniciens bruxellois suivent un protocole rigoureux pour garantir un débouchage propre, rapide et durable.',
    processSteps: [
      {
        step: '01',
        title: 'Diagnostic précis du réseau',
        description:
          'Repérage des regards de visite, vérification de l’écoulement par point d’eau et localisation exacte de la zone obstruée.',
      },
      {
        step: '02',
        title: 'Annonce claire du tarif avant travaux',
        description:
          'Validation transparente du forfait d’intervention adapté à la longueur et à la difficulté d’accès avant de démarrer l’équipement.',
      },
      {
        step: '03',
        title: 'Débouchage haute pression ou mécanique',
        description:
          'Passage de buse hydrodynamique rotative ou de furet électrique pour fragmenter et évacuer le bouchon sans endommager la conduite.',
      },
      {
        step: '04',
        title: 'Test d’écoulement et contrôle final',
        description:
          'Rinçage abondant à plein débit, vérification de l’étanchéité des raccords et conseils d’entretien préventif.',
      },
    ],
    pricingHeading: 'Tarifs transparents pour un débouchage de canalisation',
    pricingIntro:
      'Aucun frais caché : vous connaissez le montant de l’intervention avant le démarrage des travaux.',
    pricingRows: [
      {
        label: 'Débouchage canalisation intérieure (furet mécanique)',
        detail: 'Évier, lavabo, douche ou baignoire jusqu’à 10 mètres',
        price: 'À partir de 85 € HTVA',
      },
      {
        label: 'Débouchage haute pression (hydrocurage)',
        detail: 'Colonne montante, conduite principale ou raccordement extérieur',
        price: 'À partir de 135 € HTVA',
      },
      {
        label: 'Passage caméra post-débouchage',
        detail: 'Vérification visuelle de l’état interne de la conduite',
        price: 'À partir de 95 € HTVA',
      },
      {
        label: 'Déplacement d’urgence Bruxelles (19 communes)',
        detail: 'Arrivée ≤ 30 min avec véhicule hydrocureur équipé',
        price: 'Inclus dans le forfait annoncé',
      },
    ],
    localHeading: 'Débouchage de canalisation dans les 19 communes de Bruxelles et en Belgique',
    localParagraphs: [
      'Les immeubles bruxellois — maisons de maître à Ixelles, appartements à Schaerbeek, bâtisses anciennes à Saint-Gilles ou résidences à Uccle et Woluwe — présentent souvent des réseaux mixtes combinant fonte, grès et PVC. Nos camions hydrocureurs compacts sont spécialement dimensionnés pour accéder aux rues étroites, cours intérieures et parkings souterrains de la Région de Bruxelles-Capitale.',
      'Nous intervenons également chaque jour dans le Brabant wallon (Waterloo, Wavre, Nivelles, Braine-l’Alleud) et le Brabant flamand (Dilbeek, Zaventem, Vilvoorde, Grimbergen, Rhode-Saint-Genèse) ainsi que dans les grandes agglomérations belges.',
    ],
    faqHeading: 'Questions fréquentes sur le débouchage de canalisation',
    faqs: [
      {
        question: 'Utilisez-vous des produits chimiques lors d’un débouchage ?',
        answer:
          'Non. Nous privilégions exclusivement les procédés mécaniques et l’hydrocurage à l’eau claire sous pression, sans danger pour vos canalisations, vos fosses septiques et l’environnement.',
      },
      {
        question: 'Combien de temps dure un débouchage de canalisation ?',
        answer:
          'La grande majorité des obstructions domestiques sont éliminées en 30 à 60 minutes. Pour un réseau collectif fortement entartré, l’hydrocurage complet prend entre 60 et 90 minutes.',
      },
      {
        question: 'Que faire si le bouchon revient rapidement ?',
        answer:
          'Une récidive révèle parfois une cassure, un contre-pente ou une intrusion de racines. Nous proposons alors une inspection caméra immédiate pour identifier l’origine structurelle exacte.',
      },
    ],
    relatedSlugs: ['curage-egouts', 'inspection-camera', 'depannage-urgent'],
  },

  'debouchage-wc': {
    slug: 'debouchage-wc',
    metaTitle: 'Débouchage WC Bruxelles Urgent ≤ 30 min | Debouchage Turbo',
    metaDescription:
      'WC bouché à Bruxelles ? Débouchage toilettes classiques, WC suspendus et sanibroyeurs sans démontage ni rayure. Intervention 7j/7 – 24h/24, garantie 5 ans.',
    primaryKeyword: 'débouchage WC',
    secondaryKeywords: [
      'WC bouché Bruxelles',
      'débouchage toilette suspendue',
      'débouchage sanibroyeur',
      'toilette qui déborde urgence',
    ],
    searchIntent: 'Transactionnelle & Urgence',
    h1: 'Débouchage WC à Bruxelles : toilettes, WC suspendus et broyeurs',
    heroBadge: 'WC bouché ? Arrivée ≤ 30 min à Bruxelles',
    heroLead:
      'Cuvette qui menace de déborder ou chasse bloquée ? Nos techniciens assurent un débouchage WC propre, rapide et sans rayure de la porcelaine, 24h/24.',
    introHeading: 'Un débouchage WC maîtrisé sans démontage ni dégâts',
    introParagraphs: [
      'Des toilettes bouchées paralyseront rapidement le quotidien d’un foyer, d’un bureau ou d’un restaurant. Tenter de forcer l’évacuation avec un cintre métallique ou verser de l’acide chlorhydrique risque de rayer l’émail de la cuvette, de brûler les joints du bâti-support ou de bloquer la turbine d’un sanibroyeur.',
      'Debouchage Turbo réalise votre débouchage WC à Bruxelles à l’aide de pompes à pression manuelles calibrées, de cannes flexibles gainées anti-rayures et, si le bouchon est logé plus loin dans la colonne de chute, d’un furet électrique ou d’un hydrocureur compact.',
      'Que vous disposiez d’un WC classique au sol, d’un WC suspendu Geberit encastré ou d’un broyeur sanitaire, nous intervenons sans démolition inutile du coffrage et rétablissons une chasse fluide dès le premier passage.',
    ],
    symptomsHeading: 'Pourquoi vos toilettes se bouchent-elles ?',
    symptomsIntro:
      'Identifier la cause du blocage permet d’appliquer la technique la plus sûre dès l’arrivée sur place.',
    symptoms: [
      {
        title: 'Accumulation de papier, excréments et lingettes',
        description:
          'Lorsque les selles ne s’évacuent pas ou que le niveau monte dès la première chasse, un amas de papier, de lingettes ou de tartre obstrue le col de cygne ou le premier coude à 90°.',
      },
      {
        title: 'Toilette qui fait glouglou ou niveau d’eau instable',
        description:
          'Des gargouillements dans la cuvette lorsque le lavabo ou la douche se vide signalent une poche d’air bloquée dans la colonne de chute ou un début d’engorgement général.',
      },
      {
        title: 'Chute accidentelle d’objet dans la cuvette',
        description:
          'Bloc désodorisant en plastique, brosse ou jouet coincé dans le siphon : une extraction mécanique évite de pousser l’objet plus loin dans la conduite.',
      },
      {
        title: 'WC suspendu, sanibroyeur ou fosse saturée',
        description:
          'Blocage de la turbine d’un sanibroyeur, chasse faible sur bâti Geberit ou fosse septique pleine empêchant l’évacuation vers la rue.',
      },
    ],
    processHeading: 'Comment nous débouchons vos toilettes en 4 étapes',
    processIntro:
      'Une méthode hygiénique et protégée pour préserver vos sols et vos sanitaires.',
    processSteps: [
      {
        step: '01',
        title: 'Protection de la zone et sécurisation',
        description:
          'Mise en place de protections au sol et arrêt de l’arrivée d’eau si la cuvette est pleine afin d’éviter tout débordement.',
      },
      {
        step: '02',
        title: 'Pompage ou extraction mécanique douce',
        description:
          'Utilisation d’une pompe à vide haute dépression ou d’une canne télescopique gainée pour déloger ou retirer le bouchon sans abîmer la céramique.',
      },
      {
        step: '03',
        title: 'Curage de la conduite d’évacuation',
        description:
          'Si le bouchon se situe dans le tuyau DN90/DN110 derrière le WC, passage de furet rotatif ou buse haute pression.',
      },
      {
        step: '04',
        title: 'Tests de chasse successifs',
        description:
          'Vérification de la vitesse d’absorption sur plusieurs chasses avec papier et contrôle de l’absence totale de fuite au pied ou au bâti.',
      },
    ],
    pricingHeading: 'Tarifs pour un débouchage WC à Bruxelles et en Wallonie',
    pricingIntro:
      'Forfaits clairs communiqués par téléphone avant le départ de notre dépanneur.',
    pricingRows: [
      {
        label: 'Débouchage WC classique (pompe / canne gainée)',
        detail: 'Bouchon localisé dans le siphon ou le premier raccordement',
        price: 'À partir de 75 € HTVA',
      },
      {
        label: 'Débouchage WC suspendu ou colonne',
        detail: 'Intervention sur conduite d’évacuation encastrée ou chute commune',
        price: 'À partir de 95 € HTVA',
      },
      {
        label: 'Débouchage & déblocage sanibroyeur',
        detail: 'Retrait de corps étranger et contrôle de l’hélice moteur',
        price: 'À partir de 110 € HTVA',
      },
      {
        label: 'Dépannage WC urgence dimanche / nuit / férié',
        detail: 'Intervention 24h/24 à Bruxelles et en Wallonie',
        price: 'Devis annoncé avant départ',
      },
    ],
    localHeading: 'Intervention WC en urgence partout à Bruxelles et en Wallonie',
    localParagraphs: [
      'Un WC bouché un dimanche ou en pleine nuit ne peut pas attendre le lundi, surtout dans un logement ne comportant qu’une seule toilette ou dans un établissement recevant du public. Nos dépanneurs quadrillent Bruxelles-Capitale et les grands axes wallons afin de garantir une arrivée rapide.',
      'Nous intervenons aussi bien pour les particuliers (locataires et propriétaires) que pour les syndics d’immeubles, commerces Horeca, bureaux et écoles.',
    ],
    faqHeading: 'Questions fréquentes sur le débouchage WC',
    faqs: [
      {
        question: 'Que faire si des toilettes sont bouchées par des excréments ou du papier ?',
        answer:
          'Ne tirez plus la chasse d’eau pour éviter le débordement. Évitez l’acide chlorhydrique qui attaque les joints et peut provoquer des projections dangereuses : une pompe à pression ou un furet gainé libère le siphon en quelques minutes.',
      },
      {
        question: 'Pourquoi ma toilette fait-elle glouglou quand je vide le lavabo ou la douche ?',
        answer:
          'Un bruit de glouglou indique qu’un bouchon partiel ralentit l’évacuation dans la colonne principale et aspire la garde d’eau des siphons. Un curage préventif évite le blocage total imminent.',
      },
      {
        question: 'Intervenez-vous pour un WC bouché un dimanche ou un jour férié ?',
        answer:
          'Oui, nos dépanneurs sont d’astreinte 7j/7 et 24h/24, dimanches et jours fériés inclus, avec annonce transparente du tarif avant départ.',
      },
      {
        question: 'Faut-il démonter mon WC suspendu pour le déboucher ?',
        answer:
          'Dans 90 % des cas, non. Nos outils flexibles gainés passent directement par le siphon de la cuvette ou par un raccord de visite sans toucher au carrelage ni au bâti-support.',
      },
    ],
    relatedSlugs: ['debouchage-canalisation', 'debouchage-baignoire-douche', 'depannage-urgent'],
  },

  'debouchage-evier': {
    slug: 'debouchage-evier',
    metaTitle: 'Débouchage Évier & Lavabo Bruxelles 24/7 | Debouchage Turbo',
    metaDescription:
      'Évier de cuisine ou lavabo bouché à Bruxelles ? Élimination rapide des graisses, savon et bouchons de siphon par furet ou hydrocurage. Devis clair dès 75 €.',
    primaryKeyword: 'débouchage évier',
    secondaryKeywords: [
      'évier bouché Bruxelles',
      'débouchage lavabo',
      'débouchage siphon cuisine',
      'évacuation cuisine bouchée graisse',
    ],
    searchIntent: 'Transactionnelle & Urgence',
    h1: 'Débouchage Évier et Lavabo à Bruxelles : cuisine et salle de bain',
    heroBadge: 'Intervention propre sans odeur · 7j/7',
    heroLead:
      'Eau qui stagne dans le bac, lave-vaisselle qui refoule ou siphon obstrué ? Nous assurons le débouchage évier et lavabo en profondeur jusqu’à la colonne.',
    introHeading: 'Pourquoi un évier de cuisine se bouche-t-il si fréquemment ?',
    introParagraphs: [
      'Les canalisations d’évier et de lavabo ont un diamètre réduit (généralement 40 mm ou 50 mm) et subissent quotidiennement l’accumulation de graisses de cuisson, marc de café, restes alimentaires, dentifrice et cheveux. En refroidissant dans la conduite horizontale après le siphon, les huiles se solidifient contre la paroi comme de la cire.',
      'Un simple démontage du siphon sous l’évier ne suffit souvent pas lorsque le bouchon s’est formé plusieurs mètres plus loin dans le mur ou sous le plancher. Pire, les produits déboucheurs en gel à base de soude caustique restent bloqués dans l’eau stagnante, dégagent des vapeurs toxiques et peuvent souder les graisses en une masse dure.',
      'Nos techniciens réalisent un débouchage évier complet à l’aide d’un furet électrique à câble souple muni de têtes racleuses ou d’une micro-buse haute pression qui décape la graisse sur toute la longueur du tuyau.',
    ],
    symptomsHeading: 'Problèmes traités sur éviers, lavabos et appareils raccordés',
    symptomsIntro:
      'Nous intervenons sur toutes les configurations de cuisine et de salle de bain.',
    symptoms: [
      {
        title: 'Bouchon de graisse dans la conduite de cuisine',
        description:
          'L’eau met plusieurs minutes à descendre et laisse un dépôt gras au fond de la cuve en inox ou en céramique.',
      },
      {
        title: 'Refoulement du lave-vaisselle ou lave-linge',
        description:
          'Lors de la vidange de l’appareil, l’eau mousseuse remonte directement dans le bac d’évier par le siphon commun.',
      },
      {
        title: 'Lavabo et trop-plein obstrués par cheveux et savon',
        description:
          'Formation d’un bouchon compact dans le mécanisme de bonde clic-clac, le siphon ou la sortie murale de salle de bain.',
      },
      {
        title: 'Bouchon cristallisé par déboucheur chimique',
        description:
          'Dissolution mécanique sécurisée après utilisation infructueuse d’un produit du commerce qui a durci dans la tuyauterie.',
      },
    ],
    processHeading: 'Notre protocole de débouchage évier en 4 étapes',
    processIntro:
      'Un chantier propre sous votre meuble de cuisine, sans éclaboussure ni odeur résiduelle.',
    processSteps: [
      {
        step: '01',
        title: 'Démontage et nettoyage du siphon',
        description:
          'Vidange sécurisée du bac, démontage complet du siphon et des raccords de machine pour éliminer les dépôts accessibles.',
      },
      {
        step: '02',
        title: 'Curage de la canalisation horizontale',
        description:
          'Introduction d’un furet électrique rotatif ou d’une buse haute pression spéciale petit diamètre jusqu’au raccordement à la colonne.',
      },
      {
        step: '03',
        title: 'Décapage des graisses et résidus',
        description:
          'Allers-retours contrôlés avec rinçage à l’eau chaude pour décoller le biofilm et les graisses figées sur la paroi.',
      },
      {
        step: '04',
        title: 'Remontage et test d’étanchéité',
        description:
          'Remplacement des joints usés si nécessaire, test de vidange simultanée des bacs et contrôle de l’absence de suintement.',
      },
    ],
    pricingHeading: 'Tarifs pour un débouchage évier ou lavabo',
    pricingIntro:
      'Des tarifs transparents adaptés aux particuliers, colocations et cuisines professionnelles.',
    pricingRows: [
      {
        label: 'Débouchage lavabo ou petit siphon',
        detail: 'Nettoyage bonde, siphon et conduite murale proche',
        price: 'À partir de 75 € HTVA',
      },
      {
        label: 'Débouchage évier de cuisine (furet rotatif)',
        detail: 'Curage mécanique complet jusqu’à la colonne principale',
        price: 'À partir de 85 € HTVA',
      },
      {
        label: 'Hydrocurage conduite cuisine fortement graissée',
        detail: 'Décapage haute pression spécial restaurateurs & grands réseaux',
        price: 'À partir de 125 € HTVA',
      },
    ],
    localHeading: 'Débouchage évier rapide à Bruxelles et Brabant',
    localParagraphs: [
      'Nos véhicules d’intervention sillonnent en permanence Bruxelles-Ville, Anderlecht, Forest, Molenbeek, Jette, Etterbeek et Woluwe pour dépanner votre évier ou lavabo en moins de 30 minutes.',
      'Nous travaillons également auprès des restaurants, boulangeries et cuisines collectives bruxelloises pour l’entretien régulier des évacuations et bacs à graisse.',
    ],
    faqHeading: 'Questions fréquentes sur le débouchage d’évier',
    faqs: [
      {
        question: 'Dois-je préciser si j’ai déjà versé du déboucheur chimique ?',
        answer:
          'Oui, impérativement. Signalez-le dès votre appel et au technicien à son arrivée afin qu’il porte des équipements de protection adaptés contre les projections acides ou alcalines.',
      },
      {
        question: 'Pourquoi le bouchon revient-il toujours dans ma cuisine ?',
        answer:
          'Dans les immeubles anciens, une pente trop faible ou un long tuyau de 40 mm favorise le dépôt des graisses. Un curage haute pression suivi d’un entretien à l’eau très chaude règle durablement le souci.',
      },
    ],
    relatedSlugs: ['debouchage-wc', 'debouchage-canalisation', 'reparation-plomberie'],
  },

  'depannage-urgent': {
    slug: 'depannage-urgent',
    metaTitle: 'Dépannage Urgent 24/7 Bruxelles | Debouchage Turbo',
    metaDescription:
      'Urgence canalisation ou WC bouché 24h/24 et 7j/7 à Bruxelles ? Arrivée en ≤ 30 min même les dimanches et jours fériés. Appelez le 02 899 04 17.',
    primaryKeyword: 'dépannage urgent',
    secondaryKeywords: [
      'plombier déboucheur urgence Bruxelles',
      'débouchage 24h/24 7j/7',
      'urgence fuite canalisation nuit',
      'débouchage dimanche jour férié',
    ],
    searchIntent: 'Transactionnelle & Urgence',
    h1: 'Dépannage Urgent 24/7 à Bruxelles : intervention en moins de 30 min',
    heroBadge: 'Astreinte réelle 24h/24 · Dimanches & Jours fériés',
    heroLead:
      'Débordement en pleine nuit, cave inondée ou égout bloqué le week-end ? Une équipe de garde Debouchage Turbo démarre immédiatement vers votre adresse.',
    introHeading: 'Une vraie garde d’urgence disponible à toute heure',
    introParagraphs: [
      'Un dégât des eaux ou un refoulement d’égout ne prévient jamais et survient bien souvent en soirée, le week-end ou un jour férié. Chaque minute d’attente augmente le risque de dégradation des parquets, plinthes, plafonds voisins et installations électriques.',
      'Contrairement aux plateformes qui transfèrent vos appels vers des répondeurs, Debouchage Turbo dispose de ses propres techniciens d’astreinte basés directement dans la région bruxelloise. Dès votre appel au 02 899 04 17, vous parlez à un spécialiste capable d’évaluer l’urgence, de vous donner les premiers gestes de mise en sécurité et d’annoncer le tarif transparent avant le départ.',
      'Nos fourgons et camions hydrocureurs embarquent l’ensemble de l’outillage nécessaire pour résoudre l’urgence dès la première visite, sans devoir revenir le lendemain.',
    ],
    symptomsHeading: 'Situations prises en charge en urgence immédiate',
    symptomsIntro:
      'Appelez-nous sans attendre si vous constatez l’un des scénarios critiques suivants.',
    symptoms: [
      {
        title: 'Refoulement d’eaux noires dans l’habitation',
        description:
          'Remontée d’eau souillée par une douche, un WC ou un avaloir : arrêt du flux et rétablissement immédiat de l’évacuation.',
      },
      {
        title: 'Canalisation principale d’immeuble bloquée',
        description:
          'Intervention rapide pour les copropriétés et syndics lorsque plusieurs appartements ne peuvent plus utiliser leurs sanitaires.',
      },
      {
        title: 'Inondation de cave ou garage après orage',
        description:
          'Pompage rapide de l’eau accumulée et débouchage du clapet anti-retour ou du réseau d’évacuation pluviale.',
      },
      {
        title: 'Fuite active sur conduite d’évacuation ou raccord',
        description:
          'Colmatage provisoire ou remplacement immédiat du tronçon fissuré, siphon cassé ou joint défectueux.',
      },
    ],
    processHeading: 'Déroulement d’une intervention d’urgence 24/7',
    processIntro:
      'Réactivité maximale de votre appel téléphonique jusqu’à la remise en service.',
    processSteps: [
      {
        step: '01',
        title: 'Prise en charge immédiate au 02 899 04 17',
        description:
          'Qualification rapide du problème, conseils de coupure d’eau et confirmation immédiate du tarif applicable.',
      },
      {
        step: '02',
        title: 'Arrivée sur place en ≤ 30 minutes',
        description:
          'Déplacement du technicien le plus proche de votre commune bruxelloise avec stock complet de matériel.',
      },
      {
        step: '03',
        title: 'Résolution technique sur-le-champ',
        description:
          'Débouchage haute pression, furet mécanique, pompage ou réparation de conduite pour stopper l’urgence.',
      },
      {
        step: '04',
        title: 'Attestation et garantie 5 ans',
        description:
          'Remise d’une facture détaillée exploitable auprès de votre assurance habitation si des dégâts matériels ont eu lieu.',
      },
    ],
    pricingHeading: 'Transparence tarifaire même en urgence',
    pricingIntro:
      'Pas de mauvaise surprise sur la facture : les majorations éventuelles de nuit ou jour férié sont toujours annoncées avant notre départ.',
    pricingRows: [
      {
        label: 'Diagnostic téléphonique & conseils de mise en sécurité',
        detail: 'Disponible 24h/24 et 7j/7 sans attente',
        price: 'Gratuit',
      },
      {
        label: 'Dépannage urgence sanitaire en journée',
        detail: 'Débouchage rapide évier, WC, douche ou fuite simple',
        price: 'À partir de 75 € HTVA',
      },
      {
        label: 'Intervention urgente hydrocurage / égout',
        detail: 'Déplacement véhicule haute pression inclus dans le forfait',
        price: 'Devis clair avant départ',
      },
    ],
    localHeading: 'Dépannage urgent partout à Bruxelles-Capitale',
    localParagraphs: [
      'Nos équipes couvrent l’ensemble des 19 communes bruxelloises de jour comme de nuit : Bruxelles-Ville, Ixelles, Uccle, Anderlecht, Schaerbeek, Etterbeek, Saint-Gilles, Forest, Jette, Molenbeek, Woluwe-Saint-Lambert, Woluwe-Saint-Pierre, Auderghem, Watermael-Boitsfort, Evere, Saint-Josse, Berchem-Sainte-Agathe, Ganshoren et Koekelberg.',
      'Nous assurons également des déplacements rapides en périphérie et dans tout le Brabant.',
    ],
    faqHeading: 'Questions fréquentes sur le dépannage urgent',
    faqs: [
      {
        question: 'Intervenez-vous réellement à 2h du matin ou le dimanche ?',
        answer:
          'Oui, nos équipes tournent par roulement 24 heures sur 24 et 365 jours par an, y compris le dimanche, la nuit et les jours fériés belges.',
      },
      {
        question: 'Quel délai moyen prévoir jusqu’à mon domicile à Bruxelles ?',
        answer:
          'En situation d’urgence, notre délai moyen d’arrivée est inférieur ou égal à 30 minutes dans les 19 communes bruxelloises.',
      },
    ],
    relatedSlugs: ['debouchage-canalisation', 'debouchage-wc', 'vidange-fosse-septique'],
  },

  'curage-egouts': {
    slug: 'curage-egouts',
    metaTitle: 'Curage & Égouts Haute Pression Bruxelles | Debouchage Turbo',
    metaDescription:
      'Curage d’égouts et hydrocurage haute pression à Bruxelles. Élimination du calcaire, graisses et racines dans vos canalisations extérieures. Devis gratuit.',
    primaryKeyword: 'curage et débouchage d’égouts',
    secondaryKeywords: [
      'hydrocurage Bruxelles',
      'nettoyage égout haute pression',
      'curage préventif canalisation',
      'chambre de visite bouchée',
    ],
    searchIntent: 'Commerciale & Locale',
    h1: 'Curage & Égouts à Bruxelles : hydrocurage haute pression durable',
    heroBadge: 'Hydrocurage jusqu’à 200 bars · Particuliers & Syndics',
    heroLead:
      'Chambre de visite engorgée, racines dans les conduits ou entretien préventif d’immeuble ? Notre curage haute pression remet vos égouts à neuf.',
    introHeading: 'La différence entre un simple débouchage et un curage d’égouts complet',
    introParagraphs: [
      'Un débouchage ponctuel libère le passage de l’eau, mais laisse souvent des croûtes de tartre, des sédiments sablonneux ou des plaques de graisse collées sur les parois de la conduite. Au bout de quelques mois, les résidus s’y accrochent à nouveau et reforment un bouchon.',
      'Le curage d’égouts par hydrocurage haute pression propulse de l’eau claire à très haute vélocité grâce à des buses arrière orientées à 35°. La buse avance d’elle-même dans la canalisation jusqu’à 60 mètres tout en décapant à 360° la totalité du conduit en PVC, grès vitrifié ou béton.',
      'Chez Debouchage Turbo, nous recommandons un curage préventif tous les 2 à 3 ans pour les immeubles à appartements, restaurants Horeca et maisons bordées d’arbres afin d’éviter tout refoulement imprévu.',
    ],
    symptomsHeading: 'Quand programmer un curage haute pression des égouts ?',
    symptomsIntro:
      'Le curage est indispensable en curatif après un engorgement majeur comme en entretien préventif.',
    symptoms: [
      {
        title: 'Chambre de visite pleine ou qui déborde',
        description:
          'Le regard extérieur devant la façade ou dans le jardin retient les eaux usées avant le raccordement au collecteur communal.',
      },
      {
        title: 'Présence de racines ou d’amas de calcaire',
        description:
          'Des buses coupe-racines hydrauliques sectionnent les radicelles infiltrées par les joints sans ouvrir la tranchée.',
      },
      {
        title: 'Gouttières et descentes d’eaux pluviales obstruées',
        description:
          'Nettoyage des gouttières encombrées de feuilles et curage des descentes pluviales raccordées au réseau d’égouttage pour éviter l’infiltration en façade.',
      },
      {
        title: 'Entretien préventif pour copropriétés et syndics',
        description:
          'Curage périodique des collecteurs communs, colonnes de chute et regards de cave afin de prévenir tout sinistre collectif en immeuble.',
      },
    ],
    processHeading: 'Notre procédure d’hydrocurage en 4 étapes',
    processIntro:
      'Une remise en état complète de votre réseau d’égouttage privé jusqu’à la voirie.',
    processSteps: [
      {
        step: '01',
        title: 'Ouverture et inspection des regards de visite',
        description:
          'Vérification du sens d’écoulement, du niveau d’eau dans le sterput et du diamètre des conduites.',
      },
      {
        step: '02',
        title: 'Sélection de la buse hydrodynamique adaptée',
        description:
          'Choix entre buse de curage rotative, buse perceuse ou coupe-racines selon le type de dépôt constaté.',
      },
      {
        step: '03',
        title: 'Hydrocurage haute pression 150 à 200 bars',
        description:
          'Décapage complet de la paroi interne et évacuation des sédiments vers le collecteur ou aspiration par camion.',
      },
      {
        step: '04',
        title: 'Contrôle du débit et rapport d’entretien',
        description:
          'Vérification de la fluidité de l’égouttage et remise d’une attestation pour copropriétés ou assurances.',
      },
    ],
    pricingHeading: 'Tarifs indicatifs de curage, égouts et gouttières',
    pricingIntro:
      'Devis personnalisé gratuit pour les syndics, copropriétés et professionnels.',
    pricingRows: [
      {
        label: 'Curage haute pression maison unifamiliale',
        detail: 'Nettoyage conduite principale et chambre de visite jusqu’à 20 m',
        price: 'À partir de 120 € HTVA',
      },
      {
        label: 'Nettoyage & débouchage gouttières / descentes pluviales',
        detail: 'Retrait des feuilles, mousses et curage du pied de descente',
        price: 'À partir de 95 € HTVA',
      },
      {
        label: 'Curage colonne & contrat copropriété / syndic',
        detail: 'Hydrocurage des collecteurs communs avec rapport annuel ACP',
        price: 'Sur devis gratuit',
      },
      {
        label: 'Coupe-racines hydraulique haute pression',
        detail: 'Élimination de racines infiltrées avec contrôle visuel',
        price: 'À partir de 160 € HTVA',
      },
    ],
    localHeading: 'Curage d’égouts à Bruxelles et en Wallonie',
    localParagraphs: [
      'À Bruxelles et dans les centres anciens wallons, de nombreux quartiers disposent de canalisations en grès raccordées à des chambres de visite en brique ou béton. Nos techniciens adaptent précisément la pression de travail afin de nettoyer efficacement ces réseaux sans jamais fragiliser les joints historiques.',
      'Nous intervenons le jour même sur Bruxelles et partout en Wallonie pour les particuliers, syndics de copropriétés, gérants d’immeubles et commerces.',
    ],
    faqHeading: 'Questions fréquentes sur le curage d’égouts',
    faqs: [
      {
        question: 'L’hydrocurage risque-t-il d’abîmer mes vieux tuyaux ?',
        answer:
          'Non, nos opérateurs règlent la pression en bars selon l’état et le matériau de la canalisation (grès, fonte ou PVC) afin d’assurer un nettoyage sûr et efficace.',
      },
      {
        question: 'Assurez-vous le nettoyage des gouttières et descentes pluviales bouchées ?',
        answer:
          'Oui, nous nettoyons les gouttières obstruées et hydrocurons les tuyaux de descente d’eau de pluie jusqu’au raccordement d’égout ou à la citerne.',
      },
      {
        question: 'Proposez-vous des contrats d’entretien pour copropriétés et syndics ?',
        answer:
          'Oui, nous établissons des contrats annuels ou semestriels pour les syndics et restaurants à Bruxelles et en Wallonie, incluant curage préventif et intervention prioritaire.',
      },
    ],
    relatedSlugs: ['debouchage-sterput', 'inspection-camera', 'chemisage-reparation-egouts'],
  },

  'inspection-camera': {
    slug: 'inspection-camera',
    metaTitle: 'Inspection Caméra Canalisation Bruxelles | Debouchage Turbo',
    metaDescription:
      'Inspection caméra de canalisation à Bruxelles. Localisez fissures, bouchons récurrents, racines et contre-pentes sans casser vos sols. Rapport vidéo complet.',
    primaryKeyword: 'inspection caméra de canalisation',
    secondaryKeywords: [
      'caméra égout Bruxelles',
      'passage caméra canalisation prix',
      'recherche fuite canalisation encastrée',
      'détection racines égout',
    ],
    searchIntent: 'Diagnostic & Technique',
    h1: 'Inspection Caméra de Canalisation à Bruxelles : diagnostic vidéo HD',
    heroBadge: 'Caméra endoscopique HD + Sonde de repérage',
    heroLead:
      'Bouchons à répétition, humidité suspecte ou achat immobilier ? Visualisez l’intérieur exact de vos canalisations sans démolir ni creuser inutilement.',
    introHeading: 'Pourquoi réaliser une inspection caméra de vos canalisations ?',
    introParagraphs: [
      'Lorsqu’une canalisation se bouche régulièrement malgré plusieurs passages de furet, ou lorsqu’une trace d’humidité apparaît le long d’un mur porteur, casser le carrelage ou creuser le jardin à l’aveugle coûte cher et génère des travaux lourds.',
      'L’inspection caméra endoscopique permet d’explorer jusqu’à 60 mètres de réseau souterrain (diamètres de 40 mm à 300 mm) en direct sur écran haute définition. La tête de caméra orientable, dotée d’un éclairage LED puissant et d’un compteur métrique, révèle au centimètre près la nature du défaut : écrasement de tuyau, joint déboîté, présence de racines, poche de contre-pente ou amas de calcaire.',
      'Grâce à l’émetteur radio intégré dans la tête de la caméra, notre technicien localise depuis la surface l’endroit exact et la profondeur à laquelle se trouve l’anomalie, vous faisant économiser des milliers d’euros en terrassement.',
    ],
    symptomsHeading: 'Dans quels cas demander un passage caméra ?',
    symptomsIntro:
      'Un diagnostic vidéo s’impose aussi bien en dépannage qu’en prévention immobilière.',
    symptoms: [
      {
        title: 'Engorgements récurrents sans raison apparente',
        description:
          'Vérification de la pente d’écoulement et détection d’un affaissement de conduite ou d’un raccord mal emboîté.',
      },
      {
        title: 'Dossier sinistre pour votre assurance habitation',
        description:
          'Preuve vidéo objective et rapport illustré démontrant une cassure souterraine, un affaissement ou une fuite sur canalisation encastrée.',
      },
      {
        title: 'Diagnostic assainissement avant achat immobilier',
        description:
          'Contrôle complet de l’état du réseau d’égouttage d’une maison à Bruxelles ou en Wallonie avant signature du compromis ou pose d’une terrasse.',
      },
      {
        title: 'Détection de fuites et affaissement sans destruction',
        description:
          'Repérage par sonde de détection d’une fuite souterraine, d’un raccord déboîté ou d’un regard caché sous une dalle sans sondage destructif.',
      },
    ],
    processHeading: 'Déroulement de notre inspection caméra en 4 étapes',
    processIntro:
      'Une prestation technique précise livrée avec support vidéo exploitable.',
    processSteps: [
      {
        step: '01',
        title: 'Préparation de l’accès au conduit',
        description:
          'Si la conduite est encore obstruée, un curage préalable garantit une visibilité parfaite de la paroi par l’objectif.',
      },
      {
        step: '02',
        title: 'Exploration vidéo haute définition',
        description:
          'Introduction de la caméra poussée avec visualisation en direct sur moniteur HD et mesure précise de la distance parcourue.',
      },
      {
        step: '03',
        title: 'Repérage au sol par sonde radio',
        description:
          'Marquage en surface de la position exacte et de la profondeur de toute cassure, fuite, jonction ou regard dissimulé.',
      },
      {
        step: '04',
        title: 'Remise du rapport et vidéo complète',
        description:
          'Transfert de l’enregistrement vidéo et recommandations techniques claires pour assurance, propriétaire ou chemisage.',
      },
    ],
    pricingHeading: 'Tarifs pour une inspection caméra à Bruxelles et en Wallonie',
    pricingIntro:
      'Tarification claire incluant la mise à disposition du fichier vidéo.',
    pricingRows: [
      {
        label: 'Inspection caméra canalisation domestique',
        detail: 'Exploration jusqu’à 20 mètres avec visionnage en direct',
        price: 'À partir de 110 € HTVA',
      },
      {
        label: 'Inspection caméra + localisation sonde / détection fuite',
        detail: 'Traçage complet du réseau enterré et marquage au sol sans casse',
        price: 'À partir de 145 € HTVA',
      },
      {
        label: 'Rapport écrit détaillé pour assurance (sinistre) ou achat',
        detail: 'Document illustré avec photos horodatées et fichier vidéo HD',
        price: 'Inclus ou option 35 € HTVA',
      },
    ],
    localHeading: 'Diagnostic vidéo des réseaux à Bruxelles et en Wallonie',
    localParagraphs: [
      'Debouchage Turbo réalise des inspections caméra pour particuliers, acheteurs immobiliers, architectes, experts en sinistres et syndics à Bruxelles et dans toute la Wallonie.',
      'Nos rapports détaillés sont reconnus par les compagnies d’assurances belges dans le cadre de déclarations de sinistre et de recherches de fuites sur canalisations encastrées.',
    ],
    faqHeading: 'Questions fréquentes sur l’inspection caméra',
    faqs: [
      {
        question: 'Le rapport d’inspection caméra est-il accepté par mon assurance en cas de sinistre ?',
        answer:
          'Oui. Nous fournissons un rapport technique illustré accompagné de l’enregistrement vidéo horodaté localisant la cassure ou la fuite au centimètre près, conforme aux exigences des experts en assurance belges.',
      },
      {
        question: 'Proposez-vous un diagnostic d’égout avant l’achat d’une maison ?',
        answer:
          'Oui, un passage caméra pré-achat permet de vérifier l’absence de tuyau en grès effondré, de contre-pente ou d’intrusion de racines avant de vous engager.',
      },
      {
        question: 'Faut-il que la canalisation soit débouchée avant le passage caméra ?',
        answer:
          'Oui, dans une conduite pleine d’eau boueuse la caméra ne voit que la surface du bouchon. Nous effectuons d’abord le débouchage pour obtenir une image nette de la paroi.',
      },
    ],
    relatedSlugs: ['chemisage-reparation-egouts', 'curage-egouts', 'debouchage-canalisation'],
  },

  'reparation-plomberie': {
    slug: 'reparation-plomberie',
    metaTitle: 'Réparation Plomberie Générale Bruxelles | Debouchage Turbo',
    metaDescription:
      'Réparation de canalisations, remplacement de siphons, pose de clapet anti-retour et plomberie générale à Bruxelles et en Wallonie. Garantie 5 ans.',
    primaryKeyword: 'réparation plomberie générale',
    secondaryKeywords: [
      'réparation plomberie générale bruxelles',
      'remplacement tuyau évacuation',
      'pose clapet anti-retour',
      'réparation fuite siphon',
    ],
    searchIntent: 'Commerciale & Locale',
    h1: 'Réparation Plomberie Générale à Bruxelles et en Wallonie',
    heroBadge: 'Travail garanti 5 ans · Pièces certifiées',
    heroLead:
      'Tuyau fissuré, siphon qui fuit, douche à l’italienne mal évacuée ou besoin d’un clapet anti-retour ? Nos techniciens réparent et sécurisent vos évacuations.',
    introHeading: 'Des réparations sanitaires durables après diagnostic',
    introParagraphs: [
      'Un débouchage réussi met parfois en évidence un défaut matériel sous-jacent : siphon fendu, raccord PVC décollé, conduite en plomb ou fonte percée par la corrosion, ou absence de clapet anti-retour exposant votre sous-sol aux remontées d’égouts lors de fortes pluies.',
      'Plutôt que de faire appel à deux prestataires différents, Debouchage Turbo prend directement en charge le remplacement des tronçons défectueux, la réfection des pentes d’évacuation, la pose de nouvelles bondes de douche et l’installation de clapets anti-retour homologués.',
      'Nous utilisons exclusivement des matériaux conformes aux normes belges et européennes (PVC épais, multicouche, laiton et joints haute tenue) pour garantir une étanchéité parfaite durant au moins 5 ans.',
    ],
    symptomsHeading: 'Interventions de réparation et prévention réalisées',
    symptomsIntro:
      'Des solutions ciblées pour fiabiliser vos installations sanitaires sur le long terme.',
    symptoms: [
      {
        title: 'Remplacement de siphon, bonde et vidage',
        description:
          'Changement rapide de siphons d’évier, douche ou baignoire fuyards, fissurés ou devenus inaccessibles.',
      },
      {
        title: 'Pose de clapet anti-retour sur égout',
        description:
          'Protection efficace de vos caves, souplex et rez-de-chaussée contre les refoulements lors des orages.',
      },
      {
        title: 'Réfection de tronçon d’évacuation percé',
        description:
          'Découpe et remplacement propre de tuyaux cassés, affaissés ou corrodés en PVC ou fonte.',
      },
      {
        title: 'Réparation de fuite d’eau sur raccord et vanne',
        description:
          'Remplacement de robinets d’arrêt, flexibles tressés, joints de bride et mécanismes de chasse.',
      },
    ],
    processHeading: 'Notre démarche de réparation en 4 étapes',
    processIntro:
      'Un chantier soigné, conforme et accompagné d’une garantie de 5 ans.',
    processSteps: [
      {
        step: '01',
        title: 'Inspection et devis détaillé',
        description:
          'Évaluation précise de la fuite ou de l’élément endommagé avec proposition de la solution la plus durable.',
      },
      {
        step: '02',
        title: 'Remplacement aux normes',
        description:
          'Dépose de la pièce usée et pose de conduits ou raccords neufs en respectant la pente réglementaire d’écoulement.',
      },
      {
        step: '03',
        title: 'Mise en eau sous pression et contrôle',
        description:
          'Tests prolongés de débit et d’étanchéité sur chaque soudure, manchon ou joint.',
      },
      {
        step: '04',
        title: 'Nettoyage et garantie 5 ans',
        description:
          'Remise en propreté immédiate des lieux et couverture de 5 ans sur pièces et main-d’œuvre.',
      },
    ],
    pricingHeading: 'Transparence des prix pour vos réparations sanitaires',
    pricingIntro:
      'Devis gratuit et détaillé pour tout remplacement de conduite ou installation de clapet.',
    pricingRows: [
      {
        label: 'Remplacement de siphon ou flexible avec joints',
        detail: 'Évier, lavabo ou raccordement machine à laver',
        price: 'À partir de 85 € HTVA',
      },
      {
        label: 'Remplacement tronçon de conduite d’évacuation',
        detail: 'Selon diamètre, accessibilité et longueur à remplacer',
        price: 'Sur devis gratuit',
      },
      {
        label: 'Installation de clapet anti-retour certifié',
        detail: 'Pose en regard ou sur conduite principale DN110/DN125',
        price: 'Sur devis gratuit',
      },
    ],
    localHeading: 'Plomberie et réparation de conduites à Bruxelles',
    localParagraphs: [
      'Nos équipes interviennent dans tout Bruxelles-Capitale et sa périphérie aussi bien pour une petite réparation urgente que pour la remise en conformité complète des évacuations d’une salle de bain ou d’une cave.',
    ],
    faqHeading: 'Questions fréquentes sur la réparation de plomberie',
    faqs: [
      {
        question: 'Un clapet anti-retour empêche-t-il vraiment l’inondation de ma cave ?',
        answer:
          'Oui, un clapet anti-retour correctement dimensionné et entretenu se ferme automatiquement dès que le niveau de l’égout public monte, bloquant tout refoulement vers vos sanitaires bas.',
      },
      {
        question: 'Vos réparations sont-elles garanties ?',
        answer:
          'Oui, toutes nos interventions de réparation de conduites et de plomberie bénéficient de notre garantie de 5 ans pièces et main-d’œuvre.',
      },
    ],
    relatedSlugs: ['inspection-camera', 'debouchage-evier', 'debouchage-canalisation'],
  },

  'vidange-fosse-septique': {
    slug: 'vidange-fosse-septique',
    metaTitle: 'Vidange & Pose Fosse Septique Bruxelles & Wallonie | Turbo',
    metaDescription:
      'Vidange de fosse septique (1 à 10 m³), vidange dégraisseur, pose et raccordement de fosse septique en Wallonie et à Bruxelles. Certificat agréé.',
    primaryKeyword: 'vidange fosse septique',
    secondaryKeywords: [
      'vidange fosse septique prix m3',
      'pose fosse septique wallonie',
      'raccordement fosse septique',
      'vidange dégraisseur et bac à graisse',
    ],
    searchIntent: 'Commerciale & Locale',
    h1: 'Vidange, Pose & Raccordement de Fosse Septique à Bruxelles et en Wallonie',
    heroBadge: 'Camion hydrocureur · Vidange agréée 1 à 10 m³',
    heroLead:
      'Fosse septique saturée, dégraisseur obstrué ou projet de pose et raccordement de fosse toutes eaux ? Pompage intégral, curage et évacuation en centre agréé.',
    introHeading: 'Vidange, entretien du dégraisseur et pose conforme en Wallonie et à Bruxelles',
    introParagraphs: [
      'Avec les années, les matières solides et les graisses s’accumulent au fond et en surface de votre fosse septique jusqu’à dépasser 50 % du volume utile. Lorsque la couche de boue atteint la conduite de sortie ou le préfiltre, elle colmate le dégraisseur ou l’égouttage, provoquant des refoulements dans la maison et de fortes nuisances olfactives.',
      'Une vidange fosse septique effectuée tous les 3 à 4 ans prolonge la durée de vie de votre installation. Debouchage Turbo intervient avec des camions hydrocureurs combinés capables à la fois d’aspirer les boues (de 1 m³ à plus de 10 m³) et de nettoyer sous haute pression les parois, le préfiltre, le dégraisseur et les tuyaux d’entrée/sortie.',
      'Nous accompagnons également les propriétaires en Wallonie et en périphérie bruxelloise pour la pose, le remplacement et le raccordement de fosse septique ou de micro-station d’épuration, avec remise systématique du certificat officiel de vidange et de traitement.',
    ],
    symptomsHeading: 'Interventions sur fosse septique, dégraisseur et raccordement',
    symptomsIntro:
      'Des solutions complètes du pompage d’urgence jusqu’à l’installation et au raccordement.',
    symptoms: [
      {
        title: 'Vidange fosse septique et dégraisseur saturé',
        description:
          'Pompage complet des boues et croûtes flottantes dans votre fosse toutes eaux et dégraisseur avec nettoyage haute pression du préfiltre.',
      },
      {
        title: 'Pose et remplacement de fosse septique',
        description:
          'Installation de cuve en béton ou polyéthylène dimensionnée selon la taille du foyer et conforme aux normes environnementales wallonnes.',
      },
      {
        title: 'Raccordement fosse septique et égouttage',
        description:
          'Raccordement étanche de la conduite d’amenée maison, ventilation haute, dégraisseur et évacuation vers le champ d’épandage ou l’égout communal.',
      },
      {
        title: 'Certificat officiel pour vente ou contrôle communal',
        description:
          'Remise d’une attestation agréée précisant le volume extrait en m³ et l’élimination en station d’épuration.',
      },
    ],
    processHeading: 'Notre intervention de vidange en 4 étapes',
    processIntro:
      'Une opération propre, maîtrisée et respectueuse des normes environnementales belges.',
    processSteps: [
      {
        step: '01',
        title: 'Localisation et ouverture des trappes',
        description:
          'Accès sécurisé au regard de la fosse septique ou du dégraisseur et contrôle de l’état du préfiltre.',
      },
      {
        step: '02',
        title: 'Pompage complet des boues et croûtes',
        description:
          'Aspiration puissante des boues de fond, liquides et graisses flottantes par flexible étanche jusqu’à 50 mètres du camion.',
      },
      {
        step: '03',
        title: 'Curage des parois et canalisations reliées',
        description:
          'Rinçage haute pression des parois, du té de sortie et débouchage préventif des tuyaux d’entrée et de trop-plein.',
      },
      {
        step: '04',
        title: 'Remise en eau & certificat de traitement',
        description:
          'Apport d’eau claire pour relancer l’équilibre biologique et délivrance du bordereau officiel de dépôt en centre agréé.',
      },
    ],
    pricingHeading: 'Tarifs vidange fosse septique par volume (m³) et dégraisseur',
    pricingIntro:
      'Tarifs transparents incluant pompage, curage et frais de traitement en centre agréé.',
    pricingRows: [
      {
        label: 'Vidange fosse septique jusqu’à 3 m³ (3 000 L)',
        detail: 'Pompage complet, rinçage haute pression et certificat agréé',
        price: 'À partir de 165 € HTVA',
      },
      {
        label: 'Vidange fosse grande capacité (3 à 6 m³)',
        detail: 'Maisons multifamiliales ou fosses toutes eaux grand volume',
        price: 'À partir de 210 € HTVA',
      },
      {
        label: 'Forfait vidange fosse septique + dégraisseur / bac à graisse',
        detail: 'Pompage combiné et dégraissage haute pression des conduites',
        price: 'À partir de 245 € HTVA',
      },
      {
        label: 'Nettoyage citerne eau de pluie',
        detail: 'Vidange des dépôts, brossage haute pression et désinfection',
        price: 'À partir de 155 € HTVA',
      },
      {
        label: 'Pose & raccordement de fosse septique',
        detail: 'Étude sur site, terrassement, pose cuve et raccordement complet',
        price: 'Sur devis gratuit',
      },
    ],
    localHeading: 'Vidange et pose de fosse septique en Wallonie et à Bruxelles',
    localParagraphs: [
      'Nos camions hydrocureurs sillonnent quotidiennement le Brabant wallon (Wavre, Waterloo, Nivelles, Éghezée, Grez-Doiceau, Perwez), le Hainaut (Charleroi, Mons, Fleurus, Courcelles, Tournai), Namur, Liège (Amay, Huy, Waremme) et les communes vertes de Bruxelles (Uccle, Watermael-Boitsfort, Auderghem, Anderlecht).',
      'Nos tuyaux d’aspiration grande longueur atteignent sans difficulté les fosses et dégraisseurs situés à l’arrière d’une maison mitoyenne ou au fond d’un jardin sans abîmer vos allées.',
    ],
    faqHeading: 'Questions fréquentes sur la fosse septique et le dégraisseur',
    faqs: [
      {
        question: 'Quel est le prix d’une vidange de fosse septique et bac à graisse en Belgique ?',
        answer:
          'Pour une fosse standard jusqu’à 3 m³, le tarif démarre à 165 € HTVA. Le forfait combiné vidange fosse septique + dégraisseur ou bac à graisse démarre à 245 € HTVA, attestation agréée incluse.',
      },
      {
        question: 'Réalisez-vous aussi la pose et le raccordement d’une nouvelle fosse septique ?',
        answer:
          'Oui, nos équipes assurent le remplacement, la pose et le raccordement complet de fosses septiques et dégraisseurs en Wallonie et en périphérie bruxelloise sur devis gratuit.',
      },
      {
        question: 'À quelle fréquence faut-il vidanger une fosse septique et un dégraisseur ?',
        answer:
          'Il est conseillé de vidanger une fosse septique tous les 3 à 4 ans et de nettoyer le dégraisseur tous les 12 à 24 mois pour éviter le colmatage des conduites.',
      },
    ],
    relatedSlugs: ['debouchage-sterput', 'curage-egouts', 'chemisage-reparation-egouts'],
  },

  'debouchage-sterput': {
    slug: 'debouchage-sterput',
    metaTitle: 'Débouchage Sterput, Chambre de Visite & Bac à Graisse | Turbo',
    metaDescription:
      'Sterput bouché, odeur d’égout ou bac à graisse saturé à Bruxelles et en Wallonie ? Nettoyage haute pression de sterput, avaloir et chambre de visite dès 95 €.',
    primaryKeyword: 'débouchage sterput',
    secondaryKeywords: [
      'nettoyer sterput',
      'chambre de visite bouchée',
      'nettoyage bac à graisse bruxelles',
      'curage avaloir',
    ],
    searchIntent: 'Commerciale & Locale',
    h1: 'Débouchage de Sterput, Chambre de Visite et Bac à Graisse',
    heroBadge: 'Nettoyage complet siphon de cour, avaloir & Horeca',
    heroLead:
      'Eau qui déborde par le sterput de la cour, mauvaise odeur persistante en cave ou bac à graisse saturé ? Nettoyage haute pression et pompage sur place dès 95 € HTVA.',
    introHeading: 'Qu’est-ce qu’un sterput et pourquoi faut-il le curer régulièrement ?',
    introParagraphs: [
      'En Belgique, un sterput (ou siphon de sol extérieur/cave) joue le rôle essentiel de coupe-odeur entre les évacuations de votre maison et le réseau d’égouttage public. Grâce à sa cloche immergée, l’eau retenue au fond bloque la remontée des gaz d’égout tout en retenant les boues, feuilles, graisses et sédiments.',
      'Lorsque le sterput, l’avaloir de garage ou la chambre de visite s’encrasse, la cloche se colmate ou se désamorce : l’eau de pluie ou des sanitaires refoule dans la cour, le sous-sol ou la buanderie, et des odeurs nauséabondes envahissent l’habitation.',
      'Debouchage Turbo réalise le nettoyage et le débouchage complet de votre sterput, chambre de visite, avaloir et bac à graisse Horeca ou domestique par aspiration des boues et hydrocurage haute pression à 200 bars jusqu’au collecteur de rue.',
    ],
    symptomsHeading: 'Signes qu’un nettoyage de sterput ou bac à graisse est nécessaire',
    symptomsIntro:
      'Intervenir dès les premiers symptômes évite le refoulement d’eaux usées en sous-sol et la fermeture sanitaire d’une cuisine professionnelle.',
    symptoms: [
      {
        title: 'Sterput qui déborde dans la cour ou la cave',
        description:
          'Lorsqu’une machine à laver vidange ou en cas d’averse, le niveau monte par la grille du sterput : la sortie vers l’égout ou la cloche est obstruée.',
      },
      {
        title: 'Remontées d’odeurs d’égout tenaces',
        description:
          'Un sterput encrassé ou dont la cloche est déplacée/asséchée laisse passer les gaz malodorants dans la maison ou le hall d’immeuble.',
      },
      {
        title: 'Chambre de visite ou avaloir rempli de boues et graisses',
        description:
          'Accumulation de sédiments, feuilles mortes ou graisses figées bloquant la circulation vers l’égout communal.',
      },
      {
        title: 'Bac à graisse Horeca saturé (restaurants, friteries)',
        description:
          'Formation d’une croûte épaisse de graisses alimentaires menaçant d’obstruer toute la colonne cuisine et nécessitant une vidange avec attestation.',
      },
    ],
    processHeading: 'Notre protocole de nettoyage de sterput en 4 étapes',
    processIntro:
      'Une remise à neuf complète du regard, de la cloche anti-odeurs et de la conduite aval.',
    processSteps: [
      {
        step: '01',
        title: 'Ouverture de la trappe et retrait de la cloche',
        description:
          'Démontage de la grille du sterput ou du tampon de chambre de visite et vérification de l’intégrité du siphon coupe-odeur.',
      },
      {
        step: '02',
        title: 'Pompage des boues, graisses et sédiments',
        description:
          'Extraction complète des dépôts accumulés au fond du regard ou du bac à graisse pour retrouver la capacité utile.',
      },
      {
        step: '03',
        title: 'Hydrocurage haute pression vers l’égout',
        description:
          'Passage de buse rotative jusqu’à 200 bars dans la conduite reliant le sterput ou la chambre de visite au collecteur de voirie.',
      },
      {
        step: '04',
        title: 'Remise en eau et test d’étanchéité anti-odeur',
        description:
          'Nettoyage de la cloche, remplissage en eau claire pour rétablir la garde hydraulique et test d’écoulement à plein débit.',
      },
    ],
    pricingHeading: 'Tarifs pour débouchage sterput, chambre de visite & bac à graisse',
    pricingIntro:
      'Forfaits transparents pour particuliers, copropriétés et établissements Horeca.',
    pricingRows: [
      {
        label: 'Débouchage & nettoyage complet d’un sterput',
        detail: 'Curage de la cuve, cloche coupe-odeur et évacuation aval',
        price: 'À partir de 95 € HTVA',
      },
      {
        label: 'Curage chambre de visite ou avaloir de garage',
        detail: 'Hydrocurage haute pression du regard jusqu’à l’égout public',
        price: 'À partir de 120 € HTVA',
      },
      {
        label: 'Vidange & nettoyage bac à graisse (particulier / Horeca)',
        detail: 'Pompage des graisses figées, rinçage haute pression et attestation',
        price: 'À partir de 145 € HTVA',
      },
    ],
    localHeading: 'Intervention sterput et bac à graisse à Bruxelles et en Wallonie',
    localParagraphs: [
      'À Bruxelles, presque toutes les maisons mitoyennes anciennes disposent d’un sterput en cour arrière ou en cave. Nos camions compacts interviennent dans les 19 communes pour nettoyer rapidement vos regards et supprimer définitivement les odeurs d’égout.',
      'Nous assurons également l’entretien périodique des bacs à graisse pour restaurants, hôtels, cantines et commerces alimentaires à Bruxelles et dans toute la Wallonie.',
    ],
    faqHeading: 'Questions fréquentes sur le sterput et le bac à graisse',
    faqs: [
      {
        question: 'Comment nettoyer un sterput et supprimer les odeurs d’égout ?',
        answer:
          'Retirez la grille, vérifiez que la cloche coupe-odeur est bien en place et remplie d’eau propre. Si l’eau reste noire ou ne s’écoule plus vers la rue, un hydrocurage haute pression de la conduite aval est indispensable.',
      },
      {
        question: 'À quelle fréquence faut-il vidanger un bac à graisse à Bruxelles ?',
        answer:
          'Pour un particulier, un nettoyage tous les 1 à 2 ans suffit. Pour un restaurant ou commerce Horeca, la vidange et le curage du bac à graisse sont recommandés tous les 3 à 6 mois.',
      },
      {
        question: 'Quelle est la différence entre un sterput et une chambre de visite ?',
        answer:
          'Le sterput est équipé d’un siphon (cloche) destiné à stopper les odeurs tout en recueillant l’eau de sol ou de cour, tandis que la chambre de visite offre un accès direct aux canalisations d’égouttage pour inspection et curage.',
      },
    ],
    relatedSlugs: ['curage-egouts', 'vidange-fosse-septique', 'inspection-camera'],
  },

  'debouchage-baignoire-douche': {
    slug: 'debouchage-baignoire-douche',
    metaTitle: 'Débouchage Baignoire & Douche Bruxelles Dès 75 € | Turbo',
    metaDescription:
      'Baignoire ou douche bouchée ? Débouchage rapide de bonde, siphon encastré et douche à l’italienne à Bruxelles et en Wallonie sans produit corrosif. Dès 75 €.',
    primaryKeyword: 'débouchage baignoire et douche',
    secondaryKeywords: [
      'déboucher baignoire',
      'débouchage baignoire bruxelles',
      'douche italienne bouchée',
      'comment déboucher une baignoire sans trappe',
    ],
    searchIntent: 'Transactionnelle & Urgence',
    h1: 'Débouchage Baignoire et Douche à Bruxelles et en Wallonie',
    heroBadge: 'Sans casse · Respect total du PVC et des receveurs',
    heroLead:
      'Eau qui stagne aux chevilles sous la douche ou baignoire impossible à vider sans trappe de visite ? Nous libérons la bonde et la conduite dès 75 € HTVA.',
    introHeading: 'Pourquoi les évacuations de baignoire et de douche sont-elles si délicates ?',
    introParagraphs: [
      'Les canalisations de baignoire et de douche à l’italienne comptent parmi les plus difficiles à dégorger soi-même : la bonde est souvent dépourvue de trappe d’accès, le siphon extra-plat est scellé sous le receveur et le tuyau d’évacuation (diamètre 40 mm) court à l’horizontale sous la chape.',
      'À l’intérieur, le mélange de cheveux, résidus de savon gras, gels douche et calcaire forme rapidement un bouchon feutré très dense. Verser de la soude caustique ou de l’acide chlorhydrique dans cette eau stagnante risque de brûler les joints du siphon encastré et de provoquer une fuite invisible chez le voisin du dessous.',
      'Debouchage Turbo intervient avec des pompes à dépression calibrées et des furets rotatifs à tête souple gainée qui franchissent les coudes serrés sans déboîter le siphon et évacuent intégralement l’amas de cheveux et de savon.',
    ],
    symptomsHeading: 'Problèmes traités sur baignoires et douches',
    symptomsIntro:
      'Intervention sans démontage de tablier carrelé ni abîmer l’émail ou l’acrylique.',
    symptoms: [
      {
        title: 'Baignoire sans trappe d’accès complètement bloquée',
        description:
          'Extraction mécanique par l’orifice de bonde ou le trop-plein grâce à des cannes flexibles spéciales petit diamètre.',
      },
      {
        title: 'Douche à l’italienne et caniveau qui débordent',
        description:
          'Nettoyage complet de la rigole, du siphon extra-plat et curage du tuyau encastré dans la chape sans soulever le carrelage.',
      },
      {
        title: 'Eau de douche qui remonte par l’évier ou le WC voisin',
        description:
          'Signe que le bouchon se trouve à la jonction avec la colonne principale : hydrocurage basse section jusqu’au collecteur.',
      },
      {
        title: 'Odeurs d’égout persistantes par la bonde de douche',
        description:
          'Élimination des dépôts organiques collés sur les parois et rétablissement d’une garde d’eau propre dans le siphon.',
      },
    ],
    processHeading: 'Notre méthode de débouchage baignoire & douche en 4 étapes',
    processIntro:
      'Une intervention rapide, propre et sans aucun produit chimique corrosif.',
    processSteps: [
      {
        step: '01',
        title: 'Démontage soigneux de la grille ou bonde siphoïde',
        description:
          'Retrait manuel des cheveux et résidus accessibles autour du panier de bonde sans rayer la robinetterie ni l’émail.',
      },
      {
        step: '02',
        title: 'Dégorgement mécanique ou par dépression contrôlée',
        description:
          'Obturation du trop-plein et utilisation d’une pompe haute dépression ou d’un furet souple adapté aux siphons extra-plats.',
      },
      {
        step: '03',
        title: 'Curage complet de la conduite DN40/50',
        description:
          'Passage rotatif jusqu’à la colonne de chute pour éliminer le film de savon et empêcher toute récidive rapide.',
      },
      {
        step: '04',
        title: 'Test de vidange plein bac et contrôle d’étanchéité',
        description:
          'Remplissage complet de la baignoire ou du receveur et test d’absorption à plein débit avec vérification des joints.',
      },
    ],
    pricingHeading: 'Tarifs pour un débouchage baignoire ou douche',
    pricingIntro:
      'Forfaits transparents sans surprise, même pour les douches à l’italienne encastrées.',
    pricingRows: [
      {
        label: 'Débouchage douche ou baignoire (siphon & bonde)',
        detail: 'Extraction cheveux/savon par pompe à pression ou furet manuel',
        price: 'À partir de 75 € HTVA',
      },
      {
        label: 'Débouchage douche à l’italienne ou conduite encastrée',
        detail: 'Curage rotatif ou micro-buse haute pression jusqu’à la colonne',
        price: 'À partir de 95 € HTVA',
      },
      {
        label: 'Remplacement de bonde ou siphon accessible défectueux',
        detail: 'Pièce neuve étanche et test de mise en eau garanti 5 ans',
        price: 'À partir de 85 € HTVA',
      },
    ],
    localHeading: 'Débouchage baignoire & douche à Bruxelles et en Wallonie',
    localParagraphs: [
      'Nos dépanneurs interviennent tous les jours en moins de 30 minutes à Bruxelles et rapidement en Wallonie pour libérer votre douche ou baignoire sans endommager votre salle de bain.',
      'Chaque intervention est couverte par notre garantie de 5 ans et n’utilise jamais d’acide nocif pour vos tuyaux PVC.',
    ],
    faqHeading: 'Questions fréquentes sur le débouchage de baignoire et douche',
    faqs: [
      {
        question: 'Comment déboucher une baignoire sans trappe de visite ?',
        answer:
          'Évitez de dévisser la vis centrale de la bonde si vous n’avez pas d’accès par dessous (le siphon pourrait tomber sous la baignoire). Testez la ventouse en bouchant le trop-plein, ou faites appel à un furet professionnel souple.',
      },
      {
        question: 'Puis-je utiliser du bicarbonate et du vinaigre dans une douche à l’italienne ?',
        answer:
          'Pour un entretien léger, oui, sans danger pour les joints. En revanche, dès que l’eau stagne complètement, un amas compact de cheveux bloque le siphon et nécessite une extraction mécanique.',
      },
      {
        question: 'Quel est le prix pour déboucher une baignoire ou une douche à Bruxelles ?',
        answer:
          'Nos interventions de débouchage de baignoire ou douche démarrent à 75 € HTVA, avec tarif confirmé par téléphone avant notre déplacement.',
      },
    ],
    relatedSlugs: ['debouchage-evier', 'debouchage-wc', 'entretien-plomberie'],
  },

  'chemisage-reparation-egouts': {
    slug: 'chemisage-reparation-egouts',
    metaTitle: 'Chemisage Canalisation & Réparation Égouts Belgique | Turbo',
    metaDescription:
      'Canalisation fissurée, racines ou raccordement égout à Bruxelles et en Wallonie ? Chemisage sans tranchée et réparation durable d’égouts. Devis gratuit.',
    primaryKeyword: 'chemisage canalisation et réparation égouts',
    secondaryKeywords: [
      'chemisage canalisation bruxelles',
      'chemisage canalisation prix',
      'réparation canalisations sans tranchée',
      'raccordement égout belgique',
    ],
    searchIntent: 'Commerciale & Locale',
    h1: 'Chemisage de Canalisation, Réparation et Raccordement d’Égouts',
    heroBadge: 'Réhabilitation sans tranchée · Garantie 10 ans sur gaine',
    heroLead:
      'Tuyau d’égout fissuré sous votre carrelage, joints déboîtés par des racines ou raccordement à réaliser ? Réparez vos canalisations sans casser ni creuser grâce au chemisage.',
    introHeading: 'Le chemisage de canalisation : réparer l’égout sans détruire vos sols',
    introParagraphs: [
      'Lorsqu’une inspection caméra révèle une fissure longitudinale, un joint ouvert laissant pénétrer des racines ou une corrosion sur une conduite en grès ou fonte passant sous un hall d’immeuble, un salon carrelé ou une terrasse, ouvrir une tranchée représente un chantier lourd, long et très onéreux.',
      'Le chemisage de canalisation (réhabilitation sans tranchée) permet de recréer un tuyau neuf, parfaitement étanche et lisse directement à l’intérieur de l’ancienne conduite. Une gaine souple imprégnée de résine époxy est introduite depuis une chambre de visite puis polymérisée sur place, épousant la forme exacte du conduit existant.',
      'Debouchage Turbo prend également en charge les travaux de réparation ponctuelle par manchette (patch), le remplacement de tronçons effondrés et le raccordement conforme au réseau d’égout public à Bruxelles et en Wallonie.',
    ],
    symptomsHeading: 'Quand recourir au chemisage ou au raccordement d’égouts ?',
    symptomsIntro:
      'Des solutions structurelles durables validées après inspection vidéo HD.',
    symptoms: [
      {
        title: 'Canalisation fissurée sous dalle ou parquet',
        description:
          'Étanchéification immédiate par chemisage continu ou manchette époxy sans aucune démolition intérieure.',
      },
      {
        title: 'Infiltration répétée de racines d’arbres',
        description:
          'Après fraisage/coupe-racines hydraulique, la gaine résine scelle définitivement les joints ouverts pour bloquer toute repousse.',
      },
      {
        title: 'Bouchons et odeurs liés à un tuyau en grès poreux',
        description:
          'La paroi lisse de la résine améliore l’écoulement hydraulique et empêche l’accroche du tartre et du papier.',
      },
      {
        title: 'Mise en conformité et raccordement à l’égout communal',
        description:
          'Suppression d’ancienne fosse obsolète, pose de chambre de visite et raccordement réglementaire vers le collecteur de voirie.',
      },
    ],
    processHeading: 'Les 4 étapes d’un chemisage de canalisation sans tranchée',
    processIntro:
      'Une intervention réalisée en 1 à 2 jours sans poussière ni gravats dans votre habitation.',
    processSteps: [
      {
        step: '01',
        title: 'Hydrocurage & fraisage préparatoire',
        description:
          'Nettoyage complet à 200 bars et élimination des racines ou concrétions calcaires pour obtenir une paroi propre.',
      },
      {
        step: '02',
        title: 'Inspection caméra et prise de cotes',
        description:
          'Validation des longueurs, diamètres (DN100 à DN250) et repérage des éventuels piquages latéraux.',
      },
      {
        step: '03',
        title: 'Mise en place et polymérisation de la gaine',
        description:
          'Insertion de la gaine imprégnée de résine époxy ou pose de manchette localisée, gonflage et durcissement haute résistance.',
      },
      {
        step: '04',
        title: 'Contrôle caméra final & attestation',
        description:
          'Réouverture robotisée des piquages si besoin, contrôle vidéo HD final et remise du dossier complet pour assurance ou garantie.',
      },
    ],
    pricingHeading: 'Indications de prix : chemisage, manchette et réparation d’égout',
    pricingIntro:
      'Chaque chantier fait l’objet d’une étude caméra précise et d’un devis gratuit détaillé.',
    pricingRows: [
      {
        label: 'Chemisage ponctuel par manchette (patch 1 mètre)',
        detail: 'Réparation ciblée d’une fissure ou d’un joint déboîté sans tranchée',
        price: 'À partir de 490 € HTVA',
      },
      {
        label: 'Chemisage continu de canalisation',
        detail: 'Réhabilitation intégrale au mètre linéaire (hors fraisage préparatoire)',
        price: 'À partir de 350 € / ml HTVA',
      },
      {
        label: 'Raccordement à l’égout ou réparation avec ouverture ciblée',
        detail: 'Selon profondeur, longueur et réfection de surface',
        price: 'Sur devis gratuit',
      },
    ],
    localHeading: 'Chemisage et réparation d’égouts à Bruxelles et en Wallonie',
    localParagraphs: [
      'À Bruxelles comme dans les centres urbains wallons (Liège, Namur, Charleroi, Mons, Wavre), de nombreuses maisons mitoyennes ont leur égouttage qui traverse directement le rez-de-chaussée sous carrelage. Le chemisage vous évite d’ouvrir votre maison tout en offrant une durée de vie supérieure à 50 ans.',
      'Nous fournissons des devis comparatifs clairs pour votre copropriété ou votre compagnie d’assurance en cas de sinistre.',
    ],
    faqHeading: 'Questions fréquentes sur le chemisage et la réparation d’égouts',
    faqs: [
      {
        question: 'Quel est le prix d’un chemisage de canalisation en Belgique ?',
        answer:
          'Un chemisage continu démarre généralement autour de 350 € à 450 € HTVA par mètre linéaire selon le diamètre, la longueur et les coudes. Pour un défaut localisé, une manchette ponctuelle démarre à 490 € HTVA — soit beaucoup moins cher qu’une démolition de dalle.',
      },
      {
        question: 'Le chemisage réduit-il fortement le diamètre du tuyau ?',
        answer:
          'Non, l’épaisseur de la gaine est de seulement 3 à 5 mm et sa surface intérieure ultra-lisse compense largement par un meilleur coefficient d’écoulement que l’ancien grès rugueux.',
      },
      {
        question: 'Quand faut-il préférer un remplacement traditionnel au chemisage ?',
        answer:
          'Si le tuyau est totalement écrasé à plat ou présente un fort contre-pente affaissé, l’ouverture ciblée du tronçon s’impose. L’inspection caméra préalable permet de choisir en toute transparence.',
      },
    ],
    relatedSlugs: ['inspection-camera', 'curage-egouts', 'reparation-plomberie'],
  },
};

export function getServiceWithSeo(slug: string): {
  service: ServiceItem;
  seo: ServiceSeoContent;
} | null {
  const service = SERVICES.find((s) => s.id === slug);
  const seo = SERVICE_SEO_CONTENT[slug];
  if (!service || !seo) return null;
  return { service, seo };
}
