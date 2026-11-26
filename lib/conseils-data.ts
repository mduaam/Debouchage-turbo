export interface ConseilComparisonRow {
  situation: string;
  responsibleOrSafe: string;
  explanation: string;
}

export interface ConseilStep {
  step: string;
  title: string;
  description: string;
}

export interface ConseilGuide {
  slug: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  categoryLabel: string;
  h1: string;
  heroLead: string;
  readingTime: string;
  updatedLabel: string;
  introHeading: string;
  introParagraphs: string[];
  comparisonHeading: string;
  comparisonIntro: string;
  comparisonCol1: string;
  comparisonCol2: string;
  comparisonCol3: string;
  comparisonRows: ConseilComparisonRow[];
  stepsHeading: string;
  stepsIntro: string;
  steps: ConseilStep[];
  legalOrSafetyBoxTitle: string;
  legalOrSafetyBoxPoints: string[];
  faqs: { question: string; answer: string }[];
  relatedServiceSlugs: string[];
}

export const CONSEILS_GUIDES: ConseilGuide[] = [
  {
    slug: 'locataire-ou-proprietaire',
    metaTitle: 'Débouchage Canalisation : Qui Paie ? Locataire ou Propriétaire',
    metaDescription:
      'Canalisation ou WC bouché en Belgique (Bruxelles & Wallonie) : qui paie entre locataire et propriétaire ? Règles légales du bail, exceptions et remboursement.',
    keywords: [
      'débouchage canalisation qui paie locataire ou propriétaire',
      'wc bouché locataire ou propriétaire belgique',
      'canalisation bouchée qui paie bruxelles wallonie',
      'vidange fosse septique locataire ou propriétaire belgique',
      'colonne commune bouchée syndic propriétaire',
    ],
    categoryLabel: 'Droits & Bail Belgique (Bruxelles & Wallonie)',
    h1: 'Débouchage de canalisation : qui paie en Belgique, locataire ou propriétaire ?',
    heroLead:
      'En cas de WC ou d’évier bouché dans un logement loué à Bruxelles ou en Wallonie, la répartition des frais obéit au Code bruxellois du logement et au Décret wallon du bail d’habitation.',
    readingTime: '4 min de lecture',
    updatedLabel: 'Mis à jour · Législation belge 2026',
    introHeading: 'La règle générale du bail d’habitation à Bruxelles et en Wallonie',
    introParagraphs: [
      'En Belgique, la législation sépare clairement l’entretien courant des grosses réparations. L’entretien courant incombe au locataire. À l’inverse, la vétusté, les défauts structurels et les vices cachés restent à charge du propriétaire bailleur.',
      'Si le bouchon provient d’un manque d’entretien privatif (cheveux dans la douche, graisses alimentaires dans l’évier, lingettes dans le WC), le locataire règle la facture.',
      'En revanche, si l’engorgement résulte d’une colonne commune obstruée, d’un tuyau cassé ou de racines, les frais incombent au propriétaire ou au syndic de copropriété.',
      'Une inspection caméra permet d’établir un diagnostic objectif. Le rapport et la facture détaillée servent alors de preuve pour faire jouer l’assurance incendie ou le remboursement.',
    ],
    comparisonHeading: 'Tableau récapitulatif : Locataire ou Propriétaire ?',
    comparisonIntro:
      'Identifiez en un coup d’œil qui doit prendre en charge la facture selon l’origine du bouchon constatée par le déboucheur.',
    comparisonCol1: 'Situation constatée',
    comparisonCol2: 'Qui paie ?',
    comparisonCol3: 'Justification légale (Bruxelles / Wallonie)',
    comparisonRows: [
      {
        situation: 'Siphon d’évier, lavabo ou douche bouché par cheveux et savon',
        responsibleOrSafe: 'Locataire',
        explanation:
          'Nettoyage privatif régulier considéré comme entretien courant sous le bail d’habitation.',
      },
      {
        situation: 'WC bouché par papier hygiénique, lingettes ou objet domestique',
        responsibleOrSafe: 'Locataire',
        explanation:
          'Mauvaise utilisation ou défaut de vigilance de l’occupant pendant l’occupation du bien.',
      },
      {
        situation: 'Colonne commune montante ou collecteur principal d’immeuble bouché',
        responsibleOrSafe: 'Propriétaire / Syndic',
        explanation:
          'Les parties communes relèvent de la copropriété et du syndic, sauf faute individuelle prouvée.',
      },
      {
        situation: 'Canalisation extérieure cassée, affaissée ou envahie par des racines',
        responsibleOrSafe: 'Propriétaire',
        explanation:
          'Réparation structurelle et vétusté à charge du bailleur, attestées par inspection caméra.',
      },
      {
        situation: 'Obstruction constatée dès les premières semaines après l’emménagement',
        responsibleOrSafe: 'Propriétaire',
        explanation:
          'Obligation légale de délivrance du logement en bon état d’usage et de propreté.',
      },
      {
        situation: 'Vidange périodique de la fosse septique et du bac dégraisseur',
        responsibleOrSafe: 'Locataire (selon bail)',
        explanation:
          'Entretien d’usage à charge du locataire, si la fosse a été livrée vidangée à l’entrée.',
      },
      {
        situation: 'Sterput de cave ou chambre de visite privative encrassé',
        responsibleOrSafe: 'Partagé selon cause',
        explanation:
          'Nettoyage de surface pour le locataire ; casse ou vice caché pour le propriétaire.',
      },
    ],
    stepsHeading: 'Comment procéder pour ne pas payer à tort lors d’une urgence ?',
    stepsIntro:
      'Suivez ces 4 étapes simples pour faire valoir vos droits et stopper rapidement tout dégât des eaux.',
    steps: [
      {
        step: '01',
        title: 'Avertissez immédiatement le propriétaire ou le syndic',
        description:
          'Envoyez un message écrit avec photos de l’évacuation bouchée pour notifier le sinistre sans attendre.',
      },
      {
        step: '02',
        title: 'Faites constater l’origine exacte par le déboucheur',
        description:
          'Demandez une mention claire sur la facture détaillée indiquant si le bouchon est privatif ou structurel.',
      },
      {
        step: '03',
        title: 'Réalisez une inspection caméra en cas de doute persistant',
        description:
          'La vidéo HD identifie immédiatement un vice caché, une contre-pente ou des racines invasives.',
      },
      {
        step: '04',
        title: 'Transmettez le dossier à votre assureur ou bailleur',
        description:
          'Le rapport technique facilite le remboursement rapide via la garantie dégâts des eaux de l’assurance incendie.',
      },
    ],
    legalOrSafetyBoxTitle: 'Arrêtés régionaux belges en vigueur (Bruxelles & Wallonie)',
    legalOrSafetyBoxPoints: [
      'Région de Bruxelles-Capitale : Arrêté du 23 novembre 2017 fixant la liste officielle des réparations locatives à charge du preneur ou du bailleur.',
      'Région wallonne : Décret wallon et arrêté du 28 juin 2018 régissant le bail d’habitation (vétusté et gros tuyaux au propriétaire ; siphons au locataire).',
      'Assurance incendie belge : couvre généralement la recherche de fuite et les dégâts consécutifs aux refoulements d’eaux usées.',
    ],
    faqs: [
      {
        question: 'Le propriétaire peut-il refuser de payer si des racines bouchent l’égout ?',
        answer:
          'Non. L’invasion de racines relève du gros œuvre et de la structure extérieure. Sur présentation du rapport d’inspection caméra, le bailleur prend en charge le curage et la réparation.',
      },
      {
        question: 'Qui paie la vidange fosse septique en location en Wallonie ?',
        answer:
          'La vidange fosse septique d’entretien est à la charge de l’occupant pendant le bail. Toutefois, si la fosse est pleine dès l’état des lieux d’entrée, les frais incombent au bailleur.',
      },
      {
        question: 'Comment prouver qu’un vice caché est responsable du bouchon ?',
        answer:
          'Une inspection caméra avec enregistrement vidéo constitue la preuve irréfutable demandée par les experts d’assurance, les syndics et les tribunaux de paix.',
      },
    ],
    relatedServiceSlugs: ['debouchage-wc', 'inspection-camera', 'curage-egouts'],
  },
  {
    slug: 'deboucher-canalisation-naturellement-vs-acide',
    metaTitle: 'Déboucher une Canalisation : Naturel vs Acide Chlorhydrique',
    metaDescription:
      'Comment déboucher une canalisation naturellement sans l’abîmer ? Dangers de l’acide chlorhydrique sur le PVC et les joints, et quand appeler un pro dès 75 €.',
    keywords: [
      'déboucher canalisation naturellement',
      'déboucheur canalisation naturel',
      'déboucher canalisation acide chlorhydrique',
      'acide chlorhydrique et canalisation pvc',
      'astuces pour déboucher canalisation',
    ],
    categoryLabel: 'Entretien, Sécurité & Prévention PVC',
    h1: 'Déboucher une canalisation naturellement vs acide chlorhydrique : guide complet',
    heroLead:
      'Avant de verser un produit corrosif risquant de déformer vos canalisations en PVC ou de brûler vos joints, découvrez nos astuces pour déboucher une canalisation naturellement sans produit chimique.',
    readingTime: '4 min de lecture',
    updatedLabel: 'Conseils d’experts · Zéro produit corrosif',
    introHeading: 'Pourquoi l’acide chlorhydrique et la soude caustique aggravent souvent la panne',
    introParagraphs: [
      'Verser de l’acide chlorhydrique ou un gel caustique dans une évacuation bouchée est une erreur fréquente. Dans une eau stagnante, le produit ne circule pas et reste concentré au fond du siphon.',
      'Ce contact prolongé déclenche une violente réaction exothermique. La chaleur dépasse 80 °C, ramollit les tuyaux en PVC et fait fondre les joints d’étanchéité.',
      'De plus, des vapeurs toxiques peuvent s’échapper dans la pièce. Si l’obstruction persiste, le conduit reste rempli d’acide, rendant toute intervention dangereuse.',
      'Pour déboucher canalisation sans danger pour chaque canalisation PVC, les solutions douces à base de bicarbonate, vinaigre blanc ou cristaux de soude décollent le biofilm organique en toute sécurité.',
    ],
    comparisonHeading: 'Comparatif : Méthodes naturelles vs Acide vs Hydrocurage',
    comparisonIntro:
      'Mesurez l’efficacité et les risques réels pour préserver vos équipements sanitaires.',
    comparisonCol1: 'Méthode utilisée',
    comparisonCol2: 'Sécurité PVC & Joints',
    comparisonCol3: 'Efficacité & Limites réelles',
    comparisonRows: [
      {
        situation: 'Eau très chaude + bicarbonate de soude et vinaigre blanc',
        responsibleOrSafe: '100 % sûre',
        explanation:
          'Dissout les graisses récentes et élimine les mauvaises odeurs dans le siphon sans agresser le PVC.',
      },
      {
        situation: 'Cristaux de soude dilués dans l’eau chaude',
        responsibleOrSafe: 'Très sûre',
        explanation:
          'Excellent pouvoir dégraissant pour dissoudre les savons et résidus organiques dans la cuisine.',
      },
      {
        situation: 'Ventouse en caoutchouc ou furet mécanique manuel',
        responsibleOrSafe: '100 % sûre',
        explanation:
          'Action mécanique directe qui déloge les bouchons superficiels situés près de la bonde.',
      },
      {
        situation: 'Acide chlorhydrique concentré ou déboucheur chimique en gel',
        responsibleOrSafe: 'Dangereuse',
        explanation:
          'Risque de perforation du PVC, brûlure des joints en caoutchouc et dégagement de vapeurs toxiques.',
      },
      {
        situation: 'Hydrocurage haute pression professionnel à l’eau claire',
        responsibleOrSafe: '100 % sûre',
        explanation:
          'Nettoyage hydrodynamique intégral sans produit chimique, assorti d’une garantie 5 ans.',
      },
    ],
    stepsHeading: 'La méthode naturelle en 4 étapes avant d’appeler un déboucheur',
    stepsIntro:
      'Pour un écoulement ralenti, suivez ce protocole simple sans aucun danger pour votre plomberie.',
    steps: [
      {
        step: '01',
        title: 'Effectuez le démontage du siphon sous l’évier',
        description:
          'Placez une bassine sous le siphon, dévissez le culot et retirez manuellement les dépôts solides.',
      },
      {
        step: '02',
        title: 'Versez le mélange bicarbonate et vinaigre blanc',
        description:
          'Versez une tasse de bicarbonate suivie d’une tasse de vinaigre. Laissez mousser pendant 20 minutes.',
      },
      {
        step: '03',
        title: 'Rincez avec de l’eau chaude non bouillante',
        description:
          'Faites couler 2 litres d’eau chaude à 60 °C pour liquéfier les graisses ramollies dans le tuyau.',
      },
      {
        step: '04',
        title: 'Pompez à la ventouse pour créer un appel d’air',
        description:
          'Obturez le trop-plein avec un linge humide et actionnez la ventouse 5 à 10 fois fermement.',
      },
    ],
    legalOrSafetyBoxTitle: 'Règles de sécurité indispensables',
    legalOrSafetyBoxPoints: [
      'Ne mélangez jamais acide chlorhydrique et eau de Javel : ce mélange produit un gaz toxique mortel.',
      'Si vous constatez un refoulement dans la douche en tirant la chasse, le bouchon est central et nécessite un hydrocurage.',
      'Si un produit chimique a déjà été versé, prévenez immédiatement le technicien pour protéger ses mains et ses yeux.',
    ],
    faqs: [
      {
        question: 'L’acide chlorhydrique peut-il percer une canalisation en PVC ?',
        answer:
          'Oui. La réaction exothermique entre l’acide et les matières organiques produit une chaleur intense qui déforme les parois du PVC et détruit les joints.',
      },
      {
        question: 'Le marc de café est-il bon pour les canalisations ?',
        answer:
          'Non. Le marc de café s’agglomère avec les graisses figées dans les coudes et forme un bouchon particulièrement tenace.',
      },
      {
        question: 'Quel est le prix d’un débouchage mécanique professionnel ?',
        answer:
          'Chez Debouchage Turbo, un débouchage d’évier ou de douche débute à 75 € HTVA, sans produit chimique et avec résultat garanti 5 ans.',
      },
    ],
    relatedServiceSlugs: [
      'debouchage-evier',
      'debouchage-baignoire-douche',
      'debouchage-canalisation',
    ],
  },
  {
    slug: 'bruit-glouglou-canalisation-causes-solutions',
    metaTitle: 'Bruit de Glouglou Canalisation : Causes et Solutions Rapides',
    metaDescription:
      'Pourquoi vos canalisations font un bruit de glouglou ? Diagnostic du désiphonage, problème d’évent de toit, risques d’odeur d’égout et solutions pros.',
    keywords: [
      'bruit glouglou canalisation',
      'glouglou canalisation évier douche',
      'désiphonage canalisation odeur égout',
      'ventilation primaire évent bouché',
      'glouglou quand on tire la chasse',
    ],
    categoryLabel: 'Diagnostic & Symptômes Plomberie',
    h1: 'Bruit de glouglou dans les canalisations : causes, risques et solutions durables',
    heroLead:
      'Lorsque vous tirez la chasse d’eau ou que la machine à laver vidange, un bruit de glouglou se fait entendre ? Découvrez l’origine de ce désiphonage et comment l’éliminer.',
    readingTime: '4 min de lecture',
    updatedLabel: 'Mis à jour · Diagnostic technique 2026',
    introHeading: 'Pourquoi vos tuyaux émettent-ils ce gargouillement caractéristique ?',
    introParagraphs: [
      'Ce bruit glouglou canalisation correspond à un appel d’air dans votre colonne de chute. Lorsque l’eau s’évacue en masse, elle crée une dépression dans le tuyau.',
      'Si la colonne manque d’air, elle aspire la garde d’eau protectrice située dans vos siphons. C’est ce phénomène de désiphonage qui produit le gargouillement.',
      'Deux causes principales expliquent ce dysfonctionnement : un début de bouchon partiel dans le conduit ou une ventilation primaire obstruée sur le toit.',
      'Sans garde d’eau, les gaz toxiques et chaque odeur d’égout remontent librement dans vos pièces de vie.',
    ],
    comparisonHeading: 'Tableau comparatif : Origines du bruit de glouglou',
    comparisonIntro:
      'Analysez le moment où le bruit retentit pour localiser immédiatement la source du problème.',
    comparisonCol1: 'Moment du bruit',
    comparisonCol2: 'Origine probable',
    comparisonCol3: 'Action corrective recommandée',
    comparisonRows: [
      {
        situation: 'Glouglou dans l’évier quand la machine à laver vidange',
        responsibleOrSafe: 'Bouchon partiel',
        explanation:
          'L’eau de vidange rapide sature le tuyau encombré de savon et aspire l’air par l’évier voisin.',
      },
      {
        situation: 'Glouglou dans la douche quand on tire la chasse d’eau du WC',
        responsibleOrSafe: 'Ventilation primaire',
        explanation:
          'L’évent de toit est obstrué, forçant la colonne à aspirer l’eau du siphon de sol le plus proche.',
      },
      {
        situation: 'Bruits permanents accompagnés d’odeurs nauséabondes',
        responsibleOrSafe: 'Désiphonage complet',
        explanation:
          'Garde d’eau asséchée ou clapet aérateur bloqué nécessitant un remplacement d’équilibreur de pression.',
      },
      {
        situation: 'Gargouillement généralisé dans tout l’immeuble',
        responsibleOrSafe: 'Colonne de chute encrassée',
        explanation:
          'Les parois internes du collecteur vertical sont réduites par le tartre et requièrent un hydrocurage.',
      },
    ],
    stepsHeading: 'Comment stopper définitivement les bruits de glouglou en 4 étapes',
    stepsIntro:
      'Appliquez ces vérifications méthodiques pour assainir votre réseau d’évacuation.',
    steps: [
      {
        step: '01',
        title: 'Nettoyez en profondeur le siphon de l’appareil qui gargouille',
        description:
          'Démontez le siphon pour retirer l’accumulation de cheveux et vérifiez que le joint reste bien étanche.',
      },
      {
        step: '02',
        title: 'Vérifiez la sortie de toit ou l’évent de ventilation',
        description:
          'Une ventilation primaire avec évent bouché par des feuilles mortes ou du givre force l’appel d’air et désiphonne votre installation.',
      },
      {
        step: '03',
        title: 'Installez un clapet aérateur anti-vide si nécessaire',
        description:
          'Un clapet équilibreur de pression placé sous l’évier compense la dépression sans laisser passer d’odeur.',
      },
      {
        step: '04',
        title: 'Faites réaliser un curage par un déboucheur professionnel',
        description:
          'Si le bruit persiste, un hydrocurage haute pression supprime le bouchon partiel responsable du blocage.',
      },
    ],
    legalOrSafetyBoxTitle: 'Conséquences à ne pas négliger',
    legalOrSafetyBoxPoints: [
      'Un bruit de glouglou est le premier avertissement d’un bouchon complet imminent : agir tôt évite le débordement.',
      'La perte de garde d’eau laisse pénétrer du sulfure d’hydrogène, un gaz nauséabond et irritant pour les voies respiratoires.',
      'Nos équipes garantissent une intervention rapide en moins de 30 minutes à Bruxelles et Wallonie avec camion hydrocureur et caméra HD.',
    ],
    faqs: [
      {
        question: 'Le bruit de glouglou signifie-t-il que ma canalisation est bouchée ?',
        answer:
          'Il indique une obstruction partielle. Le passage d’eau est ralenti, ce qui comprime l’air et provoque ce gargouillement annonciateur.',
      },
      {
        question: 'Qu’est-ce qu’un clapet aérateur à membrane ?',
        answer:
          'C’est un clapet anti-vide qui s’ouvre uniquement pour laisser entrer l’air lors de l’écoulement, empêchant le désiphonage de vos sanitaires.',
      },
      {
        question: 'Comment Debouchage Turbo résout-il ce problème ?',
        answer:
          'Nous réalisons une inspection caméra pour vérifier le conduit, suivie d’un hydrocurage pour redonner au tuyau son diamètre initial garanti 5 ans.',
      },
    ],
    relatedServiceSlugs: ['debouchage-canalisation', 'curage-egouts', 'inspection-camera'],
  },
  {
    slug: 'comment-savoir-si-fosse-septique-est-pleine',
    metaTitle: 'Comment Savoir si la Fosse Septique est Pleine : 5 Signes Clés',
    metaDescription:
      'Découvrez comment savoir si une fosse septique est pleine en Wallonie. Hauteur des boues, test du bâton, règles régionales SPGE et fréquence de vidange.',
    keywords: [
      'comment savoir si fosse septique pleine',
      'signes fosse septique pleine',
      'vidange fosse septique wallonie fréquence',
      'hauteur des boues règle des 50',
      'fosse septique qui refoule',
    ],
    categoryLabel: 'Assainissement & Entretien Wallonie',
    h1: 'Comment savoir si votre fosse septique est pleine : signes et fréquence de vidange en Belgique',
    heroLead:
      'Écoulement ralenti, odeurs d’œuf pourri ou gazon anormalement vert ? Voici comment savoir si votre fosse septique est pleine et quand programmer sa vidange.',
    readingTime: '4 min de lecture',
    updatedLabel: 'Guide pratique · Normes SPGE Wallonie 2026',
    introHeading: 'Les critères essentiels pour évaluer le niveau de votre fosse',
    introParagraphs: [
      'En Belgique, particulièrement en Wallonie où de nombreuses habitations disposent d’un assainissement autonome, la fosse septique pleine nécessite une surveillance attentive.',
      'La fosse ne doit jamais être vidée uniquement quand elle déborde. Le critère technique déterminant est la hauteur des boues accumulées au fond de la cuve.',
      'Dès que les boues atteignent 50 % du volume total, les matières solides risquent de passer dans le drain de dispersion et de colmater le champ d’épandage.',
      'Le Code de l’Eau wallon et la SPGE imposent de confier le pompage à un vidangeur agréé délivrant un bordereau de dépotage officiel.',
    ],
    comparisonHeading: 'Tableau des 4 signes majeurs de saturation',
    comparisonIntro:
      'Distinguez une fosse saturée d’un simple bouchon de canalisation en observant ces symptômes.',
    comparisonCol1: 'Symptôme observé',
    comparisonCol2: 'Niveau d’urgence',
    comparisonCol3: 'Diagnostic technique',
    comparisonRows: [
      {
        situation: 'Écoulement très lent dans tous les sanitaires de la maison',
        responsibleOrSafe: 'Élevé',
        explanation:
          'Indique que le niveau liquide est au ras du tuyau d’arrivée de la fosse septique.',
      },
      {
        situation: 'Mauvaises odeurs persistantes d’œuf pourri près de la cuve',
        responsibleOrSafe: 'Modéré',
        explanation:
          'Surcharge bactérienne ou croûte superficielle trop épaisse bloquant la ventilation des gaz.',
      },
      {
        situation: 'Herbe verdoyante et sol spongieux au-dessus du champ d’épandage',
        responsibleOrSafe: 'Critique',
        explanation:
          'Signe de colmatage du drain de dispersion par débordement de boues hors de la fosse.',
      },
      {
        situation: 'Refoulement sanitaire dans les WC du rez-de-chaussée',
        responsibleOrSafe: 'Urgence immédiate',
        explanation:
          'La cuve est pleine et refoule les eaux usées vers le point le plus bas du logement.',
      },
    ],
    stepsHeading: 'Le test du bâton en 4 étapes pour mesurer la hauteur des boues',
    stepsIntro:
      'Une technique infaillible pour connaître précisément le taux de remplissage de votre cuve.',
    steps: [
      {
        step: '01',
        title: 'Munissez-vous d’un bâton ou d’un tasseau rigide',
        description:
          'Enroulez un chiffon blanc sur la partie inférieure du bâton et fixez-le solidement avec du ruban adhésif.',
      },
      {
        step: '02',
        title: 'Ouvrez prudemment le regard de la fosse',
        description:
          'Laissez aérer quelques minutes pour évacuer les gaz et ne vous penchez jamais directement au-dessus.',
      },
      {
        step: '03',
        title: 'Enfoncez le bâton jusqu’au fond de la cuve',
        description:
          'Traversez la croûte superficielle et la zone d’eau claire jusqu’à toucher le fond dur de la fosse.',
      },
      {
        step: '04',
        title: 'Mesurez la hauteur de trace noire laissée par la boue',
        description:
          'Si la trace de boue dépasse la moitié de la hauteur d’eau totale (règle des 50 %), commandez la vidange.',
      },
    ],
    legalOrSafetyBoxTitle: 'Obligations légales en Wallonie (SPGE & Code de l’Eau)',
    legalOrSafetyBoxPoints: [
      'Fréquence recommandée : vidange tous les 4 à 5 ans pour une habitation de 4 personnes (ou 1 à 2 ans pour le bac dégraisseur).',
      'Le prestataire doit être agréé et fournir une attestation officielle de vidange avec bordereau de dépotage certifié.',
      'Ne videz jamais 100 % de l’eau claire : laissez toujours un fond de boues actives pour préserver les bactéries anaérobies.',
    ],
    faqs: [
      {
        question: 'Quelle est la différence entre une fosse pleine et un drain colmaté ?',
        answer:
          'Si la vidange vient d’être effectuée et que l’eau continue de stagner, c’est le drain de dispersion qui est colmaté et doit être curé à haute pression.',
      },
      {
        question: 'À quelle fréquence doit-on vider un bac dégraisseur ?',
        answer:
          'Le bac dégraisseur retient les huiles de cuisine et doit être écumé tous les 6 à 12 mois pour éviter d’engorger la fosse septique.',
      },
      {
        question: 'Quel est le tarif vidange pour une fosse septique en Wallonie ?',
        answer:
          'Notre tarif vidange par camion de pompage débute dès 250 € selon le volume de la cuve, incluant le curage des canalisations et le traitement légal des boues.',
      },
    ],
    relatedServiceSlugs: ['vidange-fosse-septique', 'debouchage-canalisation', 'curage-egouts'],
  },
];

export function getConseilBySlug(slug: string): ConseilGuide | undefined {
  return CONSEILS_GUIDES.find((g) => g.slug === slug);
}
