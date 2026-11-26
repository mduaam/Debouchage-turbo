export type ZoneProvince =
  | 'Bruxelles-Capitale'
  | 'Brabant wallon'
  | 'Hainaut'
  | 'Liège'
  | 'Namur'
  | 'Luxembourg';

export interface ZoneCity {
  slug: string;
  name: string;
  region: 'Bruxelles-Capitale' | 'Wallonie';
  province: ZoneProvince;
  postalCodes: string[];
  etaRange: string;
  activeTeams: number;
  districts: string[];
  housingProfile: string;
  localChallenge: string;
  nearbySlugs: string[];
}

export const PROVINCE_FILTERS: ('Toutes' | ZoneProvince)[] = [
  'Toutes',
  'Bruxelles-Capitale',
  'Brabant wallon',
  'Hainaut',
  'Liège',
  'Namur',
  'Luxembourg',
];

export const ZONES_CITIES: ZoneCity[] = [
  // ===================== BRUXELLES-CAPITALE (19 COMMUNES) =====================
  {
    slug: 'bruxelles',
    name: 'Bruxelles-Ville',
    region: 'Bruxelles-Capitale',
    province: 'Bruxelles-Capitale',
    postalCodes: ['1000', '1020', '1120', '1130'],
    etaRange: '15–25 min',
    activeTeams: 3,
    districts: ['Pentagone', 'Quartier Européen', 'Laeken', 'Louise', 'Neder-Over-Heembeek', 'Haren'],
    housingProfile:
      'Immeubles historiques du Pentagone, maisons bruxelloises à plusieurs étages, commerces Horeca et résidences modernes à Laeken ou dans le Quartier Européen.',
    localChallenge:
      'L’accès aux rues étroites et cours intérieures nécessite des hydrocureurs compacts capables d’intervenir sur des colonnes communes en fonte et des collecteurs anciens en grès.',
    nearbySlugs: ['ixelles', 'schaerbeek', 'saint-gilles'],
  },
  {
    slug: 'ixelles',
    name: 'Ixelles',
    region: 'Bruxelles-Capitale',
    province: 'Bruxelles-Capitale',
    postalCodes: ['1050'],
    etaRange: '15–22 min',
    activeTeams: 3,
    districts: ['Flagey', 'Châtelain', 'Louise', 'Cimetière d’Ixelles', 'Matonge', 'Boondael'],
    housingProfile:
      'Maisons de maître divisées en appartements, colocations étudiantes autour du campus ULB et nombreux restaurants autour des étangs d’Ixelles.',
    localChallenge:
      'Forte concentration de colonnes d’évacuation partagées et de bacs à graisse Horeca nécessitant un hydrocurage haute pression précis et des interventions discrètes.',
    nearbySlugs: ['etterbeek', 'saint-gilles', 'uccle'],
  },
  {
    slug: 'schaerbeek',
    name: 'Schaerbeek',
    region: 'Bruxelles-Capitale',
    province: 'Bruxelles-Capitale',
    postalCodes: ['1030'],
    etaRange: '16–22 min',
    activeTeams: 2,
    districts: ['Diamant', 'Meiser', 'Parc Josaphat', 'Cage aux Ours', 'Dailly', 'Helmet'],
    housingProfile:
      'Maisons unifamiliales Art Nouveau, immeubles de rapport sur les grands boulevards et habitations mitoyennes avec caves en sous-sol.',
    localChallenge:
      'Entartrage des conduites anciennes, refoulements dans les caves lors des averses et présence fréquente de siphons de cour ou sterfputs encrassés.',
    nearbySlugs: ['bruxelles', 'evere', 'saint-josse-ten-noode'],
  },
  {
    slug: 'jette',
    name: 'Jette',
    region: 'Bruxelles-Capitale',
    province: 'Bruxelles-Capitale',
    postalCodes: ['1090'],
    etaRange: '18–24 min',
    activeTeams: 2,
    districts: ['Miroir', 'Dieleghem', 'Laerbeek', 'Heymbosch', 'Esseghem'],
    housingProfile:
      'Quartiers résidentiels verdoyants, villas près du Bois de Dieleghem et grands immeubles à appartements le long des axes nord.',
    localChallenge:
      'Infiltrations de racines dans les raccordements extérieurs et engorgements de colonnes montantes ou de fosses septiques en zone pavillonnaire.',
    nearbySlugs: ['ganshoren', 'koekelberg', 'bruxelles'],
  },
  {
    slug: 'anderlecht',
    name: 'Anderlecht',
    region: 'Bruxelles-Capitale',
    province: 'Bruxelles-Capitale',
    postalCodes: ['1070'],
    etaRange: '15–20 min',
    activeTeams: 3,
    districts: ['Cureghem', 'Saint-Guidon', 'Veeweyde', 'Neerpede', 'Moortebeek', 'Ceria'],
    housingProfile:
      'Mixité d’immeubles urbains, zones artisanales et industrielles le long du canal, et maisons semi-rurales vers Neerpede.',
    localChallenge:
      'Curage de réseaux mixtes, dégraissage de conduites professionnelles, pompage de caves et vidange de fosses septiques dans les secteurs périphériques.',
    nearbySlugs: ['molenbeek-saint-jean', 'forest', 'saint-gilles'],
  },
  {
    slug: 'uccle',
    name: 'Uccle',
    region: 'Bruxelles-Capitale',
    province: 'Bruxelles-Capitale',
    postalCodes: ['1180'],
    etaRange: '18–25 min',
    activeTeams: 2,
    districts: ['Fort Jaco', 'Observatoire', 'Vivier d’Oie', 'Saint-Job', 'Globe', 'Calevoet'],
    housingProfile:
      'Villas quatre façades avec longs jardins arborés, maisons bourgeoises et résidences de standing proches du Bois de la Cambre.',
    localChallenge:
      'Conduites d’égouttage longues sous allées privées exposées aux racines d’arbres, entretien de fosses septiques et pose de clapets anti-retour.',
    nearbySlugs: ['ixelles', 'forest', 'waterloo'],
  },
  {
    slug: 'etterbeek',
    name: 'Etterbeek',
    region: 'Bruxelles-Capitale',
    province: 'Bruxelles-Capitale',
    postalCodes: ['1040'],
    etaRange: '16–22 min',
    activeTeams: 2,
    districts: ['Cinquantenaire', 'La Chasse', 'Jourdan', 'Saint-Pierre', 'Thieffry'],
    housingProfile:
      'Immeubles de bureaux du quartier européen, maisons bourgeoises transformées en appartements et commerces alimentaires autour de la place Jourdan.',
    localChallenge:
      'Débouchage sans démontage sur WC suspendus encastrés, colonnes de cuisine graissées et inspections caméra avant travaux de rénovation.',
    nearbySlugs: ['ixelles', 'woluwe-saint-lambert', 'woluwe-saint-pierre'],
  },
  {
    slug: 'saint-gilles',
    name: 'Saint-Gilles',
    region: 'Bruxelles-Capitale',
    province: 'Bruxelles-Capitale',
    postalCodes: ['1060'],
    etaRange: '18–25 min',
    activeTeams: 2,
    districts: ['Parvis', 'Porte de Hal', 'Ma Campagne', 'Midi', 'Barrière'],
    housingProfile:
      'Maisons fin XIXe avec souplex habités, ateliers d’artistes, cafés et immeubles mitoyens denses.',
    localChallenge:
      'Les souplex et caves aménagées en contrebas de la voirie sont particulièrement vulnérables aux refoulements d’égout en cas d’orage ou de bouchon aval.',
    nearbySlugs: ['ixelles', 'forest', 'anderlecht'],
  },
  {
    slug: 'forest',
    name: 'Forest',
    region: 'Bruxelles-Capitale',
    province: 'Bruxelles-Capitale',
    postalCodes: ['1190'],
    etaRange: '18–24 min',
    activeTeams: 2,
    districts: ['Altitude Cent', 'Parc Duden', 'Saint-Denis', 'Bervoets', 'Bempt'],
    housingProfile:
      'Habitations en pente autour d’Altitude Cent et du Parc de Forest, immeubles à appartements et entrepôts en bas de commune.',
    localChallenge:
      'Réseaux soumis à de forts dénivelés créant des zones de dépôt de sédiments en pied de pente et engorgements d’avaloirs de garage.',
    nearbySlugs: ['uccle', 'saint-gilles', 'anderlecht'],
  },
  {
    slug: 'molenbeek-saint-jean',
    name: 'Molenbeek-Saint-Jean',
    region: 'Bruxelles-Capitale',
    province: 'Bruxelles-Capitale',
    postalCodes: ['1080'],
    etaRange: '15–22 min',
    activeTeams: 2,
    districts: ['Karreveld', 'Machtens', 'Comte de Flandre', 'Scheutbos', 'Osseghem'],
    housingProfile:
      'Grands ensembles d’appartements sur les boulevards, lofts rénovés le long du canal et maisons mitoyennes familiales.',
    localChallenge:
      'Interventions d’urgence 24/7 sur WC bloqués, conduites de cuisine encombrées et colonnes collectives en immeuble.',
    nearbySlugs: ['koekelberg', 'anderlecht', 'bruxelles'],
  },
  {
    slug: 'ganshoren',
    name: 'Ganshoren',
    region: 'Bruxelles-Capitale',
    province: 'Bruxelles-Capitale',
    postalCodes: ['1083'],
    etaRange: '20–26 min',
    activeTeams: 1,
    districts: ['Basilique', 'Zavelenberg', 'Parc Albert', 'Rue Beeckman'],
    housingProfile:
      'Maisons bel-étage, immeubles résidentiels calmes près de la Basilique de Koekelberg et quartiers pavillonnaires.',
    localChallenge:
      'Curage de chambres de visite en façade, débouchage de sterfputs extérieurs et entretien préventif avant remise en location.',
    nearbySlugs: ['jette', 'berchem-sainte-agathe', 'koekelberg'],
  },
  {
    slug: 'koekelberg',
    name: 'Koekelberg',
    region: 'Bruxelles-Capitale',
    province: 'Bruxelles-Capitale',
    postalCodes: ['1081'],
    etaRange: '18–24 min',
    activeTeams: 2,
    districts: ['Basilique', 'Parc Elisabeth', 'Simonis', 'Vanhuffel'],
    housingProfile:
      'Commune compacte mêlant appartements autour de Simonis, maisons de rangée et bâtiments publics.',
    localChallenge:
      'Arrivée rapide sur réseaux domestiques encombrés par le calcaire, les graisses de cuisine ou les lingettes dans les colonnes partagées.',
    nearbySlugs: ['molenbeek-saint-jean', 'jette', 'ganshoren'],
  },
  {
    slug: 'berchem-sainte-agathe',
    name: 'Berchem-Sainte-Agathe',
    region: 'Bruxelles-Capitale',
    province: 'Bruxelles-Capitale',
    postalCodes: ['1082'],
    etaRange: '22–28 min',
    activeTeams: 1,
    districts: ['Place Schweitzer', 'Zavelenberg', 'Hunderenveld', 'Potaarde'],
    housingProfile:
      'Maisons 2 et 3 façades avec jardin, petits immeubles de résidence et zones commerciales le long de la chaussée de Gand.',
    localChallenge:
      'Raccordements anciens vers l’égout public, nettoyage de regards enterrés et remplacement de siphons ou conduits endommagés.',
    nearbySlugs: ['ganshoren', 'koekelberg', 'molenbeek-saint-jean'],
  },
  {
    slug: 'evere',
    name: 'Evere',
    region: 'Bruxelles-Capitale',
    province: 'Bruxelles-Capitale',
    postalCodes: ['1140'],
    etaRange: '20–26 min',
    activeTeams: 1,
    districts: ['Paduwa', 'Conscience', 'Bordet', 'OTAN', 'Place de la Paix'],
    housingProfile:
      'Quartiers résidentiels modernes, complexes d’appartements et immeubles tertiaires entre Bordet et Meiser.',
    localChallenge:
      'Inspection vidéo avant réception de travaux, curage préventif pour copropriétés et dépannage sanitaire rapide.',
    nearbySlugs: ['schaerbeek', 'woluwe-saint-lambert', 'bruxelles'],
  },
  {
    slug: 'saint-josse-ten-noode',
    name: 'Saint-Josse-ten-Noode',
    region: 'Bruxelles-Capitale',
    province: 'Bruxelles-Capitale',
    postalCodes: ['1210'],
    etaRange: '16–24 min',
    activeTeams: 2,
    districts: ['Botanique', 'Madou', 'Saint-Lazare', 'Place Houwaert'],
    housingProfile:
      'Immeubles de rapport très denses, restaurants de quartier et bâtiments tertiaires autour de Madou et Botanique.',
    localChallenge:
      'Hydrocurage de conduites fortement sollicitées, dégraissage de cuisines professionnelles et interventions de nuit sans nuisance.',
    nearbySlugs: ['schaerbeek', 'bruxelles', 'etterbeek'],
  },
  {
    slug: 'woluwe-saint-lambert',
    name: 'Woluwe-Saint-Lambert',
    region: 'Bruxelles-Capitale',
    province: 'Bruxelles-Capitale',
    postalCodes: ['1200'],
    etaRange: '18–25 min',
    activeTeams: 2,
    districts: ['Tomberg', 'Gribaumont', 'Roodebeek', 'Alma', 'Georges Henri'],
    housingProfile:
      'Maisons unifamiliales soignées, résidences étudiantes près de l’UCLouvain Bruxelles et copropriétés verdoyantes.',
    localChallenge:
      'Coupe-racines hydraulique dans les conduites privatives, diagnostic caméra et dépannage express d’appartements.',
    nearbySlugs: ['etterbeek', 'woluwe-saint-pierre', 'evere'],
  },
  {
    slug: 'woluwe-saint-pierre',
    name: 'Woluwe-Saint-Pierre',
    region: 'Bruxelles-Capitale',
    province: 'Bruxelles-Capitale',
    postalCodes: ['1150'],
    etaRange: '20–26 min',
    activeTeams: 1,
    districts: ['Stockel', 'Montgomery', 'Chant d’Oiseau', 'Joli-Bois', 'Val Duchesse'],
    housingProfile:
      'Villas résidentielles arborées vers Stockel et Joli-Bois, maisons cossues autour de Montgomery et résidences calmes.',
    localChallenge:
      'Entretien de longues conduites d’égout sous jardins, pompage de fosses septiques et protection des sous-sols contre les remontées.',
    nearbySlugs: ['woluwe-saint-lambert', 'auderghem', 'etterbeek'],
  },
  {
    slug: 'auderghem',
    name: 'Auderghem',
    region: 'Bruxelles-Capitale',
    province: 'Bruxelles-Capitale',
    postalCodes: ['1160'],
    etaRange: '20–26 min',
    activeTeams: 1,
    districts: ['Herrmann-Debroux', 'Val Duchesse', 'Rouge-Cloître', 'Souverain', 'Transvaal'],
    housingProfile:
      'Quartiers résidentiels en bordure de la Forêt de Soignes, appartements le long du boulevard du Souverain et maisons familiales.',
    localChallenge:
      'Intrusion racinaire fréquente près des zones boisées, curage haute pression des regards de visite et dépannage sanitaire 7j/7.',
    nearbySlugs: ['watermael-boitsfort', 'woluwe-saint-pierre', 'ixelles'],
  },
  {
    slug: 'watermael-boitsfort',
    name: 'Watermael-Boitsfort',
    region: 'Bruxelles-Capitale',
    province: 'Bruxelles-Capitale',
    postalCodes: ['1170'],
    etaRange: '22–28 min',
    activeTeams: 1,
    districts: ['Logis-Floréal', 'Place Wiener', 'Keym', 'Trois Tilleuls', 'Boondael'],
    housingProfile:
      'Cités-jardins classées (Le Logis et Floréal), villas verdoyantes et maisons familiales proches de la Forêt de Soignes.',
    localChallenge:
      'Réseaux en grès anciens dans les cités-jardins nécessitant une pression d’hydrocurage maîtrisée et un repérage caméra sans tranchée.',
    nearbySlugs: ['auderghem', 'uccle', 'ixelles'],
  },

  // ===================== BRABANT WALLON (10 VILLES) =====================
  {
    slug: 'waterloo',
    name: 'Waterloo',
    region: 'Wallonie',
    province: 'Brabant wallon',
    postalCodes: ['1410'],
    etaRange: '25–35 min',
    activeTeams: 2,
    districts: ['Centre', 'Joli-Bois', 'Chenois', 'Mont-Saint-Jean', 'Faubourg'],
    housingProfile:
      'Villas quatre façades sur grands terrains arborés, commerces du centre et résidences récentes.',
    localChallenge:
      'Longs raccordements privatifs vers la voirie, sectionnement de racines par hydrocurage et vidange de fosses septiques ou citernes.',
    nearbySlugs: ['braine-l-alleud', 'uccle', 'la-hulpe'],
  },
  {
    slug: 'wavre',
    name: 'Wavre',
    region: 'Wallonie',
    province: 'Brabant wallon',
    postalCodes: ['1300', '1301'],
    etaRange: '25–35 min',
    activeTeams: 2,
    districts: ['Centre', 'Bierges', 'Limal', 'Bas-Wavre', 'Zoning Nord'],
    housingProfile:
      'Maisons urbaines du centre-ville, habitations familiales à Limal et Bierges ainsi que parcs d’entreprises.',
    localChallenge:
      'Débouchage de canalisations en urgence, pompage après fortes pluies dans la vallée de la Dyle et entretien de réseaux professionnels.',
    nearbySlugs: ['ottignies-louvain-la-neuve', 'rixensart', 'chaumont-gistoux'],
  },
  {
    slug: 'nivelles',
    name: 'Nivelles',
    region: 'Wallonie',
    province: 'Brabant wallon',
    postalCodes: ['1400', '1401', '1402', '1404'],
    etaRange: '30–40 min',
    activeTeams: 2,
    districts: ['Centre aclot', 'Baulers', 'Bornival', 'Monstreux', 'Thines'],
    housingProfile:
      'Centre historique autour de la Collégiale, nouveaux lotissements et fermes ou habitations rurales dans les villages rattachés.',
    localChallenge:
      'Vidange de fosses septiques et citernes en zones périurbaines, curage d’égouts et diagnostic caméra avant vente.',
    nearbySlugs: ['braine-l-alleud', 'braine-le-comte', 'pont-a-celles'],
  },
  {
    slug: 'ottignies-louvain-la-neuve',
    name: 'Ottignies-Louvain-la-Neuve',
    region: 'Wallonie',
    province: 'Brabant wallon',
    postalCodes: ['1340', '1341', '1342', '1348'],
    etaRange: '25–35 min',
    activeTeams: 2,
    districts: ['Louvain-la-Neuve', 'Ottignies Centre', 'Limelette', 'Céroux-Mousty'],
    housingProfile:
      'Kots étudiants, immeubles universitaires sur dalle piétonne à LLN et villas familiales à Limelette ou Céroux-Mousty.',
    localChallenge:
      'Dégorgement express de sanitaires collectifs, WC et éviers étudiants ainsi que vidange de fosses en périphérie.',
    nearbySlugs: ['wavre', 'rixensart', 'chaumont-gistoux'],
  },
  {
    slug: 'braine-l-alleud',
    name: 'Braine-l’Alleud',
    region: 'Wallonie',
    province: 'Brabant wallon',
    postalCodes: ['1420', '1421', '1428'],
    etaRange: '25–35 min',
    activeTeams: 2,
    districts: ['Centre', 'Ophain', 'Lillois', 'Bois-Seigneur-Isaac', 'L’Ermite'],
    housingProfile:
      'Quartiers résidentiels étendus, maisons mitoyennes près de la gare et fermettes dans les entités rurales.',
    localChallenge:
      'Débouchage de canalisations extérieures, vidange de fosses toutes eaux et pose de clapets anti-retour.',
    nearbySlugs: ['waterloo', 'nivelles', 'tubize'],
  },
  {
    slug: 'tubize',
    name: 'Tubize',
    region: 'Wallonie',
    province: 'Brabant wallon',
    postalCodes: ['1480'],
    etaRange: '25–35 min',
    activeTeams: 1,
    districts: ['Tubize Centre', 'Clabecq', 'Oisquercq', 'Saintes'],
    housingProfile:
      'Maisons ouvrières et familiales en brique, habitations récentes et zones artisanales le long du canal.',
    localChallenge:
      'Réseaux d’évacuation anciens à détartrer par hydrocurage haute pression et dépannages WC ou éviers 7j/7.',
    nearbySlugs: ['braine-le-comte', 'braine-l-alleud', 'anderlecht'],
  },
  {
    slug: 'rixensart',
    name: 'Rixensart',
    region: 'Wallonie',
    province: 'Brabant wallon',
    postalCodes: ['1330', '1331', '1332'],
    etaRange: '25–35 min',
    activeTeams: 1,
    districts: ['Rixensart', 'Genval', 'Rosières', 'Bourgeois'],
    housingProfile:
      'Villas boisées autour du Lac de Genval, maisons familiales à Rosières et commerces de proximité.',
    localChallenge:
      'Forte présence d’arbres causant des obstructions par racines et besoin régulier de curage et vidange de fosses septiques.',
    nearbySlugs: ['la-hulpe', 'wavre', 'ottignies-louvain-la-neuve'],
  },
  {
    slug: 'jodoigne',
    name: 'Jodoigne',
    region: 'Wallonie',
    province: 'Brabant wallon',
    postalCodes: ['1370'],
    etaRange: '35–45 min',
    activeTeams: 1,
    districts: ['Jodoigne Centre', 'Dongelberg', 'Incourt', 'Lathuy', 'Piétrain'],
    housingProfile:
      'Centre bourgmestre et nombreux villages hesbignons composés de fermes rénovées et maisons individuelles.',
    localChallenge:
      'Vidange intégrale de fosses septiques et dégraisseurs avec camion combiné grande longueur de flexible.',
    nearbySlugs: ['wavre', 'gembloux', 'hannut'],
  },
  {
    slug: 'la-hulpe',
    name: 'La Hulpe',
    region: 'Wallonie',
    province: 'Brabant wallon',
    postalCodes: ['1310'],
    etaRange: '25–32 min',
    activeTeams: 1,
    districts: ['Centre', 'Gaillemarde', 'Nysdam', 'Domaine Solvay'],
    housingProfile:
      'Propriétés arborées en lisière de forêt, maisons anciennes de village et parcs de bureaux.',
    localChallenge:
      'Débouchage haute pression de conduites enterrées, coupe-racines et entretien annuel de fosses septiques.',
    nearbySlugs: ['waterloo', 'rixensart', 'watermael-boitsfort'],
  },
  {
    slug: 'chaumont-gistoux',
    name: 'Chaumont-Gistoux',
    region: 'Wallonie',
    province: 'Brabant wallon',
    postalCodes: ['1325'],
    etaRange: '30–40 min',
    activeTeams: 1,
    districts: ['Chaumont', 'Gistoux', 'Bonlez', 'Corroy-le-Grand', 'Dion-Valmont'],
    housingProfile:
      'Villages résidentiels verdoyants à habitat dispersé et nombreuses installations d’épuration individuelle.',
    localChallenge:
      'Vidange périodique de fosses septiques, curage de drains d’évacuation et recherche d’anomalies par caméra.',
    nearbySlugs: ['wavre', 'ottignies-louvain-la-neuve', 'grez-doiceau'],
  },
  {
    slug: 'grez-doiceau',
    name: 'Grez-Doiceau',
    region: 'Wallonie',
    province: 'Brabant wallon',
    postalCodes: ['1390'],
    etaRange: '28–38 min',
    activeTeams: 1,
    districts: ['Grez-Doiceau Centre', 'Archennes', 'Biez', 'Bossut-Gottechain', 'Nethen'],
    housingProfile:
      'Villas résidentielles, fermettes brabançonnes et maisons familiales le long de la vallée du Train.',
    localChallenge:
      'Vidange et raccordement de fosses septiques, coupe-racines dans les jardins arborés et curage de chambres de visite.',
    nearbySlugs: ['wavre', 'chaumont-gistoux', 'perwez'],
  },
  {
    slug: 'mont-saint-guibert',
    name: 'Mont-Saint-Guibert',
    region: 'Wallonie',
    province: 'Brabant wallon',
    postalCodes: ['1435'],
    etaRange: '28–38 min',
    activeTeams: 1,
    districts: ['Mont-Saint-Guibert', 'Corbais', 'Hévillers', 'Axis Parc'],
    housingProfile:
      'Maisons de village, immeubles récents près de l’Axis Parc et habitations rurales à Corbais ou Hévillers.',
    localChallenge:
      'Débouchage de canalisations en urgence, nettoyage de sterputs et entretien d’égouts pour résidences et bureaux.',
    nearbySlugs: ['ottignies-louvain-la-neuve', 'chaumont-gistoux', 'gembloux'],
  },
  {
    slug: 'perwez',
    name: 'Perwez',
    region: 'Wallonie',
    province: 'Brabant wallon',
    postalCodes: ['1360'],
    etaRange: '32–42 min',
    activeTeams: 1,
    districts: ['Perwez Centre', 'Malèves-Sainte-Marie', 'Orbais', 'Thorembais-les-Béguines'],
    housingProfile:
      'Habitations individuelles hesbignonnes, fermes rénovées et nouveaux lotissements résidentiels.',
    localChallenge:
      'Vidange de fosses septiques et dégraisseurs, curage haute pression de longs raccordements et inspection caméra.',
    nearbySlugs: ['jodoigne', 'eghezee', 'gembloux'],
  },

  // ===================== HAINAUT (9 VILLES) =====================
  {
    slug: 'charleroi',
    name: 'Charleroi',
    region: 'Wallonie',
    province: 'Hainaut',
    postalCodes: ['6000', '6001', '6010', '6020', '6030', '6040', '6060'],
    etaRange: '30–45 min',
    activeTeams: 3,
    districts: ['Ville-Haute', 'Marcinelle', 'Gilly', 'Jumet', 'Gosselies', 'Marchienne-au-Pont'],
    housingProfile:
      'Large agglomération mêlant maisons mitoyennes en brique, immeubles urbains, commerces et zones d’activité autour de Gosselies.',
    localChallenge:
      'Réseaux anciens fortement entartrés, débouchage d’égouts obstrués, inspection caméra après affaissement et vidange de fosses.',
    nearbySlugs: ['pont-a-celles', 'la-louviere', 'sambreville'],
  },
  {
    slug: 'mons',
    name: 'Mons',
    region: 'Wallonie',
    province: 'Hainaut',
    postalCodes: ['7000', '7011', '7012', '7020', '7033'],
    etaRange: '35–45 min',
    activeTeams: 2,
    districts: ['Centre historique', 'Jemappes', 'Ghlin', 'Nimy', 'Cuesmes', 'Havré'],
    housingProfile:
      'Habitations anciennes de l’intra-muros, logements étudiants et maisons familiales dans les entités montoises.',
    localChallenge:
      'Curage haute pression de conduites en grès, recherche de cassures souterraines par sonde et dépannage 7j/7.',
    nearbySlugs: ['la-louviere', 'peruwelz', 'ath'],
  },
  {
    slug: 'tournai',
    name: 'Tournai',
    region: 'Wallonie',
    province: 'Hainaut',
    postalCodes: ['7500', '7501', '7502', '7520', '7540'],
    etaRange: '40–55 min',
    activeTeams: 2,
    districts: ['Centre Escaut', 'Kain', 'Froyennes', 'Chercq', 'Marquain'],
    housingProfile:
      'Maisons tournaisiennes anciennes en pierre bleue, immeubles le long de l’Escaut et villages ruraux du Tournaisis.',
    localChallenge:
      'Entartrage calcaire prononcé sur les réseaux sanitaires, vidange de fosses septiques en zone rurale et débouchage d’avaloirs.',
    nearbySlugs: ['peruwelz', 'mouscron', 'ath'],
  },
  {
    slug: 'la-louviere',
    name: 'La Louvière',
    region: 'Wallonie',
    province: 'Hainaut',
    postalCodes: ['7100', '7110'],
    etaRange: '30–40 min',
    activeTeams: 2,
    districts: ['Centre', 'Houdeng-Goegnies', 'Strépy-Bracquegnies', 'Maurage', 'Besonrieux'],
    housingProfile:
      'Maisons de rangée traditionnelles du Centre, cités ouvrières rénovées et lotissements familiaux.',
    localChallenge:
      'Conduites communes entre habitations mitoyennes, bouchons de graisse/calcaire et réparations de siphons ou tuyaux fissurés.',
    nearbySlugs: ['mons', 'charleroi', 'braine-le-comte'],
  },
  {
    slug: 'peruwelz',
    name: 'Péruwelz',
    region: 'Wallonie',
    province: 'Hainaut',
    postalCodes: ['7600', '7601', '7602', '7603', '7604', '7608'],
    etaRange: '40–50 min',
    activeTeams: 1,
    districts: ['Péruwelz Centre', 'Bon-Secours', 'Bury', 'Callenelle', 'Wiers'],
    housingProfile:
      'Habitations familiales, maisons frontalières et propriétés rurales équipées de fosses septiques individuelles.',
    localChallenge:
      'Pompage complet de fosses septiques et puits perdus, débouchage de drains extérieurs et inspection vidéo.',
    nearbySlugs: ['tournai', 'ath', 'mons'],
  },
  {
    slug: 'ath',
    name: 'Ath',
    region: 'Wallonie',
    province: 'Hainaut',
    postalCodes: ['7800', '7801', '7810', '7812', '7822'],
    etaRange: '35–45 min',
    activeTeams: 1,
    districts: ['Ath Centre', 'Ghislenghien', 'Maffle', 'Irchonwelz', 'Ligne'],
    housingProfile:
      'Centre-ville historique, zones industrielles à Ghislenghien et nombreux villages agricoles alentour.',
    localChallenge:
      'Vidange de fosses et bacs à graisse, hydrocurage de conduites principales et dépannage sanitaire rapide.',
    nearbySlugs: ['peruwelz', 'braine-le-comte', 'mons'],
  },
  {
    slug: 'mouscron',
    name: 'Mouscron',
    region: 'Wallonie',
    province: 'Hainaut',
    postalCodes: ['7700', '7711', '7712'],
    etaRange: '45–60 min',
    activeTeams: 1,
    districts: ['Mouscron Centre', 'Dottignies', 'Herseaux', 'Luingne', 'Risquons-Tout'],
    housingProfile:
      'Maisons mitoyennes caractéristiques de la Wallonie picarde, commerces transfrontaliers et quartiers résidentiels.',
    localChallenge:
      'Débouchage de WC et éviers en urgence, curage haute pression des chambres de visite et contrôle caméra.',
    nearbySlugs: ['tournai', 'peruwelz', 'ath'],
  },
  {
    slug: 'braine-le-comte',
    name: 'Braine-le-Comte',
    region: 'Wallonie',
    province: 'Hainaut',
    postalCodes: ['7090'],
    etaRange: '30–40 min',
    activeTeams: 1,
    districts: ['Centre', 'Hennuyères', 'Henripont', 'Ronquières', 'Steenkerque'],
    housingProfile:
      'Maisons familiales de centre-bourg et habitations rurales réparties entre Ronquières et Steenkerque.',
    localChallenge:
      'Vidange de fosses septiques toutes eaux, dégorgement de canalisations obstruées et débouchage d’éviers.',
    nearbySlugs: ['tubize', 'nivelles', 'la-louviere'],
  },
  {
    slug: 'pont-a-celles',
    name: 'Pont-à-Celles',
    region: 'Wallonie',
    province: 'Hainaut',
    postalCodes: ['6230', '6238'],
    etaRange: '30–40 min',
    activeTeams: 1,
    districts: ['Pont-à-Celles', 'Buzet', 'Luttre', 'Obaix', 'Thiméon', 'Viesville'],
    housingProfile:
      'Entité semi-rurale entre Nivelles et Charleroi avec maisons individuelles et fermettes rénovées.',
    localChallenge:
      'Entretien régulier de fosses septiques, curage d’égouts ruraux et intervention rapide sur sanitaires bloqués.',
    nearbySlugs: ['charleroi', 'nivelles', 'courcelles'],
  },
  {
    slug: 'fleurus',
    name: 'Fleurus',
    region: 'Wallonie',
    province: 'Hainaut',
    postalCodes: ['6220', '6221', '6222', '6223', '6224'],
    etaRange: '30–42 min',
    activeTeams: 2,
    districts: ['Fleurus Centre', 'Heppignies', 'Lambusart', 'Wanfercée-Baulet', 'Wangenies'],
    housingProfile:
      'Maisons mitoyennes de centre-ville, habitations rurales et parcs d’activités autour de Martinrou et Heppignies.',
    localChallenge:
      'Hydrocurage haute pression des égouts anciens, vidange de fosses septiques et dépannage sanitaire 7j/7.',
    nearbySlugs: ['charleroi', 'sombreffe', 'sambreville'],
  },
  {
    slug: 'enghien',
    name: 'Enghien',
    region: 'Wallonie',
    province: 'Hainaut',
    postalCodes: ['7850'],
    etaRange: '28–38 min',
    activeTeams: 1,
    districts: ['Enghien Centre', 'Marcq', 'Petit-Enghien', 'Nautisport'],
    housingProfile:
      'Maisons de caractère autour du Parc d’Enghien, habitations familiales à Marcq et lotissements récents.',
    localChallenge:
      'Débouchage de canalisations obstruées par le calcaire ou les racines, curage de sterputs et vidange de fosses.',
    nearbySlugs: ['tubize', 'ath', 'braine-le-comte'],
  },
  {
    slug: 'courcelles',
    name: 'Courcelles',
    region: 'Wallonie',
    province: 'Hainaut',
    postalCodes: ['6180', '6181', '6182', '6183'],
    etaRange: '32–42 min',
    activeTeams: 2,
    districts: ['Courcelles Centre', 'Gouy-lez-Piéton', 'Souvret', 'Trazegnies'],
    housingProfile:
      'Maisons ouvrières mitoyennes en brique, habitations familiales et anciens réseaux collectifs entre Trazegnies et Gouy.',
    localChallenge:
      'Débouchage d’égouts mitoyens, inspection caméra d’affaissements miniers ou anciens raccords et curage haute pression.',
    nearbySlugs: ['charleroi', 'pont-a-celles', 'seneffe'],
  },
  {
    slug: 'seneffe',
    name: 'Seneffe',
    region: 'Wallonie',
    province: 'Hainaut',
    postalCodes: ['7180', '7181'],
    etaRange: '30–40 min',
    activeTeams: 1,
    districts: ['Seneffe Centre', 'Arquennes', 'Familleureux', 'Feluy', 'Petit-Rœulx'],
    housingProfile:
      'Maisons villageoises, propriétés arborées et important zoning industriel le long du canal.',
    localChallenge:
      'Vidange de fosses septiques et bacs à graisse, curage de réseaux industriels et débouchage d’urgence.',
    nearbySlugs: ['nivelles', 'la-louviere', 'manage'],
  },
  {
    slug: 'manage',
    name: 'Manage',
    region: 'Wallonie',
    province: 'Hainaut',
    postalCodes: ['7170'],
    etaRange: '30–42 min',
    activeTeams: 1,
    districts: ['Manage Centre', 'Bellecourt', 'Bois-d’Haine', 'Fayt-lez-Manage', 'La Hestre'],
    housingProfile:
      'Quartiers résidentiels denses du Centre, maisons de rangée et habitations familiales à La Hestre ou Fayt.',
    localChallenge:
      'Dégorgement express de WC, éviers et douches ainsi que nettoyage haute pression des chambres de visite.',
    nearbySlugs: ['la-louviere', 'seneffe', 'courcelles'],
  },
  {
    slug: 'binche',
    name: 'Binche',
    region: 'Wallonie',
    province: 'Hainaut',
    postalCodes: ['7130', '7131', '7133', '7134'],
    etaRange: '35–48 min',
    activeTeams: 1,
    districts: ['Binche Centre', 'Bray', 'Buvrinnes', 'Épinois', 'Péronnes', 'Ressaix'],
    housingProfile:
      'Bâtisses historiques intra-muros, maisons familiales à Ressaix/Péronnes et villages ruraux vers Buvrinnes.',
    localChallenge:
      'Détartrage de vieux conduits en grès, vidange de fosses septiques en zones rurales et inspection vidéo HD.',
    nearbySlugs: ['la-louviere', 'mons', 'manage'],
  },
  {
    slug: 'saint-ghislain',
    name: 'Saint-Ghislain',
    region: 'Wallonie',
    province: 'Hainaut',
    postalCodes: ['7330', '7331', '7332', '7333', '7334'],
    etaRange: '38–50 min',
    activeTeams: 1,
    districts: ['Saint-Ghislain Centre', 'Baudour', 'Tertre', 'Hautrage', 'Sirault', 'Villerot'],
    housingProfile:
      'Habitations urbaines autour de la place, villages boisés vers Baudour/Sirault et zones d’activité à Tertre.',
    localChallenge:
      'Vidange de fosses septiques, débouchage haute pression de conduites encrassées et protection contre les refoulements.',
    nearbySlugs: ['mons', 'quaregnon', 'peruwelz'],
  },
  {
    slug: 'quaregnon',
    name: 'Quaregnon',
    region: 'Wallonie',
    province: 'Hainaut',
    postalCodes: ['7390'],
    etaRange: '38–48 min',
    activeTeams: 1,
    districts: ['Quaregnon Centre', 'Wasmuel', 'Monsville'],
    housingProfile:
      'Maisons mitoyennes traditionnelles du Borinage et habitations familiales rénovées.',
    localChallenge:
      'Débouchage WC et éviers en urgence, curage de sterputs de cour et réparation de tuyaux fissurés.',
    nearbySlugs: ['mons', 'saint-ghislain', 'colfontaine'],
  },
  {
    slug: 'colfontaine',
    name: 'Colfontaine',
    region: 'Wallonie',
    province: 'Hainaut',
    postalCodes: ['7340'],
    etaRange: '40–50 min',
    activeTeams: 1,
    districts: ['Pâturages', 'Warquignies', 'Wasmes'],
    housingProfile:
      'Maisons boraines en brique, rues en pente et habitations anciennes sur Pâturages, Wasmes et Warquignies.',
    localChallenge:
      'Réseaux en dénivelé nécessitant un hydrocurage puissant et un contrôle caméra en cas de contre-pente.',
    nearbySlugs: ['quaregnon', 'dour', 'mons'],
  },
  {
    slug: 'dour',
    name: 'Dour',
    region: 'Wallonie',
    province: 'Hainaut',
    postalCodes: ['7370'],
    etaRange: '42–55 min',
    activeTeams: 1,
    districts: ['Dour Centre', 'Blaugies', 'Élouges', 'Wihéries'],
    housingProfile:
      'Centre-bourg animé et villages ruraux des Hauts-Pays dotés de fosses septiques individuelles.',
    localChallenge:
      'Vidange agréée de fosses septiques et dégraisseurs, débouchage d’égouts et curage de drains.',
    nearbySlugs: ['colfontaine', 'saint-ghislain', 'mons'],
  },
  {
    slug: 'frasnes-lez-anvaing',
    name: 'Frasnes-lez-Anvaing',
    region: 'Wallonie',
    province: 'Hainaut',
    postalCodes: ['7910', '7911', '7912'],
    etaRange: '40–55 min',
    activeTeams: 1,
    districts: ['Frasnes-lez-Buissenal', 'Anvaing', 'Buissenal', 'Montrœul-au-Bois', 'Saint-Sauveur'],
    housingProfile:
      'Nombreux villages ruraux du Pays des Collines, fermettes et villas avec épuration autonome.',
    localChallenge:
      'Pompage complet de fosses septiques grande capacité, nettoyage de citernes et débouchage haute pression.',
    nearbySlugs: ['ath', 'leuze-en-hainaut', 'tournai'],
  },
  {
    slug: 'leuze-en-hainaut',
    name: 'Leuze-en-Hainaut',
    region: 'Wallonie',
    province: 'Hainaut',
    postalCodes: ['7900', '7901', '7903', '7904', '7906'],
    etaRange: '40–52 min',
    activeTeams: 1,
    districts: ['Leuze Centre', 'Barry', 'Blicquy', 'Chapelle-à-Oie', 'Pipaix', 'Tourpes'],
    housingProfile:
      'Maisons urbaines du centre, zones d’activité et villages agricoles environnants.',
    localChallenge:
      'Curage d’égouts, vidange de fosses septiques et bacs à graisse, et dépannage sanitaire 7j/7.',
    nearbySlugs: ['tournai', 'peruwelz', 'frasnes-lez-anvaing'],
  },

  // ===================== LIÈGE (7 VILLES) =====================
  {
    slug: 'liege',
    name: 'Liège',
    region: 'Wallonie',
    province: 'Liège',
    postalCodes: ['4000', '4020', '4030', '4031', '4032'],
    etaRange: '30–45 min',
    activeTeams: 3,
    districts: ['Outremeuse', 'Guillemins', 'Saint-Léonard', 'Cointe', 'Grivegnée', 'Angleur'],
    housingProfile:
      'Immeubles urbains en Meuse, maisons en côteaux à Cointe ou Saint-Gilles, kots étudiants et restaurants du Carré.',
    localChallenge:
      'Colonnes collectives entartrées, dégraissage Horeca et réseaux anciens en forte pente sujets aux obstructions et fissures.',
    nearbySlugs: ['ans', 'seraing', 'grace-hollogne'],
  },
  {
    slug: 'grace-hollogne',
    name: 'Grâce-Hollogne',
    region: 'Wallonie',
    province: 'Liège',
    postalCodes: ['4460'],
    etaRange: '30–45 min',
    activeTeams: 2,
    districts: ['Grâce-Berleur', 'Hollogne-aux-Pierres', 'Bierset', 'Horion-Hozémont', 'Velroux'],
    housingProfile:
      'Habitations familiales de plateau, lotissements proches de l’aéroport de Bierset et bâtiments logistiques.',
    localChallenge:
      'Hydrocurage de raccordements longs, vidange de fosses septiques en zones périphériques et dépannage 7j/7.',
    nearbySlugs: ['liege', 'ans', 'seraing'],
  },
  {
    slug: 'ans',
    name: 'Ans',
    region: 'Wallonie',
    province: 'Liège',
    postalCodes: ['4430', '4431', '4432'],
    etaRange: '30–45 min',
    activeTeams: 2,
    districts: ['Ans Centre', 'Alleur', 'Loncin', 'Xhendremael'],
    housingProfile:
      'Maisons mitoyennes de plateau, quartiers résidentiels à Alleur et habitations rurales vers Xhendremael.',
    localChallenge:
      'Débouchage haute pression des égouts, nettoyage de sterfputs et localisation par caméra des défauts de pente.',
    nearbySlugs: ['liege', 'grace-hollogne', 'huy'],
  },
  {
    slug: 'huy',
    name: 'Huy',
    region: 'Wallonie',
    province: 'Liège',
    postalCodes: ['4500'],
    etaRange: '35–45 min',
    activeTeams: 2,
    districts: ['Centre-Meuse', 'Tihange', 'Ben-Ahin', 'Statte', 'Neuville-sous-Huy'],
    housingProfile:
      'Bâtisses historiques en pierre mosane, maisons à flanc de coteau et habitations de vallée à Ben-Ahin ou Tihange.',
    localChallenge:
      'Réseaux anciens en grès ou pierre exposés au calcaire, remontées d’eau en vallée et vidange de fosses septiques.',
    nearbySlugs: ['andenne' in {} ? 'andenne' : 'namur', 'esneux', 'seraing'],
  },
  {
    slug: 'esneux',
    name: 'Esneux',
    region: 'Wallonie',
    province: 'Liège',
    postalCodes: ['4130'],
    etaRange: '35–50 min',
    activeTeams: 1,
    districts: ['Esneux Centre', 'Tilff', 'Méry', 'Hony', 'Montfort'],
    housingProfile:
      'Villas en vallée de l’Ourthe, maisons à Tilff et propriétés verdoyantes sur les hauteurs boisées.',
    localChallenge:
      'Forte demande en vidange de fosses septiques individuelles, débouchage de conduites envahies par les racines et pompage de caves.',
    nearbySlugs: ['seraing', 'liege', 'verviers'],
  },
  {
    slug: 'seraing',
    name: 'Seraing',
    region: 'Wallonie',
    province: 'Liège',
    postalCodes: ['4100', '4101', '4102'],
    etaRange: '35–45 min',
    activeTeams: 2,
    districts: ['Seraing Centre', 'Jemeppe-sur-Meuse', 'Ougrée', 'Boncelles'],
    housingProfile:
      'Maisons ouvrières mitoyennes en vallée et villas récentes sur les hauteurs résidentielles de Boncelles.',
    localChallenge:
      'Débouchage de canalisations communes, curage haute pression et contrôle vidéo des conduites d’évacuation.',
    nearbySlugs: ['liege', 'esneux', 'grace-hollogne'],
  },
  {
    slug: 'verviers',
    name: 'Verviers',
    region: 'Wallonie',
    province: 'Liège',
    postalCodes: ['4800', '4801', '4802'],
    etaRange: '40–55 min',
    activeTeams: 2,
    districts: ['Verviers Centre', 'Heusy', 'Stembert', 'Ensival', 'Lambermont'],
    housingProfile:
      'Immeubles anciens de la vallée de la Vesdre, maisons bourgeoises à Heusy et quartiers familiaux à Stembert.',
    localChallenge:
      'Nettoyage de réseaux souillés par sédiments ou boues, pose de clapets anti-retour et dépannage sanitaire urgent.',
    nearbySlugs: ['herve', 'liege', 'esneux'],
  },
  {
    slug: 'amay',
    name: 'Amay',
    region: 'Wallonie',
    province: 'Liège',
    postalCodes: ['4540'],
    etaRange: '35–45 min',
    activeTeams: 1,
    districts: ['Amay Centre', 'Ampsin', 'Flône', 'Jehay', 'Ombret'],
    housingProfile:
      'Habitations en bord de Meuse, maisons familiales à Ampsin et propriétés rurales sur les hauteurs de Jehay.',
    localChallenge:
      'Débouchage haute pression de conduites entartrées, vidange de fosses septiques et protection contre les crues.',
    nearbySlugs: ['huy', 'wanze', 'liege'],
  },
  {
    slug: 'wanze',
    name: 'Wanze',
    region: 'Wallonie',
    province: 'Liège',
    postalCodes: ['4520'],
    etaRange: '35–45 min',
    activeTeams: 1,
    districts: ['Wanze Centre', 'Antheit', 'Bas-Oha', 'Huccorgne', 'Moha', 'Vinalmont'],
    housingProfile:
      'Villages mosans et condruziens mêlant maisons récentes, bâtisses en pierre calcaire et fermes rénovées.',
    localChallenge:
      'Entartrage par eau dure, vidange de fosses septiques et curage de chambres de visite ou sterputs.',
    nearbySlugs: ['huy', 'amay', 'andenne'],
  },
  {
    slug: 'comblain-au-pont',
    name: 'Comblain-au-Pont',
    region: 'Wallonie',
    province: 'Liège',
    postalCodes: ['4170', '4171'],
    etaRange: '38–50 min',
    activeTeams: 1,
    districts: ['Comblain-au-Pont', 'Poulseur', 'Géromont', 'Oneux'],
    housingProfile:
      'Maisons en pierre de l’Ourthe-Amblève et propriétés de vallée ou de plateau fortement boisées.',
    localChallenge:
      'Vidange de fosses septiques individuelles, coupe-racines hydraulique et débouchage urgent 7j/7.',
    nearbySlugs: ['esneux', 'liege', 'seraing'],
  },
  {
    slug: 'hannut',
    name: 'Hannut',
    region: 'Wallonie',
    province: 'Liège',
    postalCodes: ['4280'],
    etaRange: '35–45 min',
    activeTeams: 1,
    districts: ['Hannut Centre', 'Abolens', 'Avernas', 'Bertrée', 'Cras-Avernas', 'Lens-Saint-Remy'],
    housingProfile:
      'Centre hesbignon actif entouré de 18 villages agricoles aux nombreuses fosses septiques et citernes.',
    localChallenge:
      'Vidange complète de fosses et dégraisseurs, curage d’égouts et diagnostic caméra pré-achat.',
    nearbySlugs: ['waremme', 'jodoigne', 'eghezee'],
  },
  {
    slug: 'waremme',
    name: 'Waremme',
    region: 'Wallonie',
    province: 'Liège',
    postalCodes: ['4300'],
    etaRange: '32–44 min',
    activeTeams: 1,
    districts: ['Waremme Centre', 'Bettincourt', 'Bleret', 'Bovenistier', 'Lantremange', 'Oleye'],
    housingProfile:
      'Maisons familiales de centre-ville, quartiers résidentiels près de la gare et villages hesbignons.',
    localChallenge:
      'Débouchage de WC et éviers en urgence, hydrocurage de conduites principales et entretien de fosses.',
    nearbySlugs: ['hannut', 'ans', 'liege'],
  },
  {
    slug: 'beyne-heusay',
    name: 'Beyne-Heusay',
    region: 'Wallonie',
    province: 'Liège',
    postalCodes: ['4610'],
    etaRange: '35–48 min',
    activeTeams: 1,
    districts: ['Beyne-Heusay', 'Bellaire', 'Queue-du-Bois', 'Moulins-sous-Fléron'],
    housingProfile:
      'Maisons familiales du plateau de Herve et immeubles résidentiels en périphérie est de Liège.',
    localChallenge:
      'Curage haute pression de réseaux domestiques, débouchage de sterputs et inspection vidéo HD.',
    nearbySlugs: ['liege', 'herve', 'verviers'],
  },
  {
    slug: 'herve',
    name: 'Herve',
    region: 'Wallonie',
    province: 'Liège',
    postalCodes: ['4650', '4651', '4652', '4653', '4654'],
    etaRange: '40–55 min',
    activeTeams: 1,
    districts: ['Herve Centre', 'Battice', 'Chaineux', 'Charneux', 'Grand-Rechain', 'Julémont'],
    housingProfile:
      'Maisons du Pays de Herve, fermes et parcs artisanaux ou agroalimentaires autour de Battice.',
    localChallenge:
      'Vidange de bacs à graisse et fosses septiques, débouchage haute pression et curage de canalisations.',
    nearbySlugs: ['verviers', 'beyne-heusay', 'liege'],
  },

  // ===================== NAMUR (5 VILLES) =====================
  {
    slug: 'namur',
    name: 'Namur',
    region: 'Wallonie',
    province: 'Namur',
    postalCodes: ['5000', '5001', '5002', '5004', '5020', '5100'],
    etaRange: '30–45 min',
    activeTeams: 3,
    districts: ['Corbeille', 'Jambes', 'Salzinnes', 'Saint-Servais', 'Bouge', 'Wépion'],
    housingProfile:
      'Bâtiments historiques du centre namurois, appartements à Jambes ou Salzinnes et villas le long de la Meuse vers Wépion.',
    localChallenge:
      'Interventions sur colonnes collectives, vidange de fosses à Wépion/Malonne, hydrocurage haute pression et caméra HD.',
    nearbySlugs: ['sambreville', 'gembloux', 'dinant'],
  },
  {
    slug: 'sambreville',
    name: 'Sambreville',
    region: 'Wallonie',
    province: 'Namur',
    postalCodes: ['5060'],
    etaRange: '30–40 min',
    activeTeams: 2,
    districts: ['Auvelais', 'Tamines', 'Falisolle', 'Moignelée', 'Arsimont', 'Velaine'],
    housingProfile:
      'Habitations familiales le long de la Basse-Sambre, maisons mitoyennes à Auvelais/Tamines et villages ruraux.',
    localChallenge:
      'Débouchage d’égouts et sterfputs, vidange de fosses septiques et réparations de tuyaux d’évacuation.',
    nearbySlugs: ['namur', 'charleroi', 'gembloux'],
  },
  {
    slug: 'ciney',
    name: 'Ciney',
    region: 'Wallonie',
    province: 'Namur',
    postalCodes: ['5590'],
    etaRange: '35–50 min',
    activeTeams: 1,
    districts: ['Ciney Centre', 'Achêne', 'Braibant', 'Haversin', 'Leignon', 'Pessoux'],
    housingProfile:
      'Centre condruzien dynamique entouré de nombreux hameaux ruraux et fermes équipées de fosses septiques.',
    localChallenge:
      'Débouchage de WC et éviers en urgence, vidange de fosses toutes eaux et curage haute pression de longs raccordements.',
    nearbySlugs: ['dinant', 'namur', 'marche-en-famenne'],
  },
  {
    slug: 'gembloux',
    name: 'Gembloux',
    region: 'Wallonie',
    province: 'Namur',
    postalCodes: ['5030', '5031', '5032'],
    etaRange: '30–40 min',
    activeTeams: 1,
    districts: ['Gembloux Centre', 'Grand-Manil', 'Lonzée', 'Sauvenière', 'Mazy'],
    housingProfile:
      'Logements étudiants proches de la Faculté, nouveaux quartiers résidentiels et fermes hesbignonnes.',
    localChallenge:
      'Dégorgement rapide de sanitaires, entretien d’égouts privatifs et vidange de citernes ou fosses septiques.',
    nearbySlugs: ['namur', 'wavre', 'sambreville'],
  },
  {
    slug: 'dinant',
    name: 'Dinant',
    region: 'Wallonie',
    province: 'Namur',
    postalCodes: ['5500', '5501', '5502', '5503', '5504'],
    etaRange: '40–55 min',
    activeTeams: 1,
    districts: ['Dinant Centre', 'Anseremme', 'Bouvignes', 'Foy-Notre-Dame', 'Sorinnes'],
    housingProfile:
      'Maisons anciennes en bord de Meuse, gîtes touristiques et propriétés rurales sur les plateaux condruziens.',
    localChallenge:
      'Protection contre les refoulements en bord de fleuve, inspection caméra des vieux conduits en pierre et vidange de fosses.',
    nearbySlugs: ['ciney', 'namur', 'beauraing'],
  },
  {
    slug: 'eghezee',
    name: 'Éghezée',
    region: 'Wallonie',
    province: 'Namur',
    postalCodes: ['5310'],
    etaRange: '30–42 min',
    activeTeams: 1,
    districts: ['Éghezée Centre', 'Aische-en-Refail', 'Bolinne', 'Dhuy', 'Leuze', 'Noville-sur-Méhaigne'],
    housingProfile:
      'Habitations rurales hesbignonnes, fermes rénovées et lotissements résidentiels le long de la N91.',
    localChallenge:
      'Forte demande en vidange de fosses septiques et dégraisseurs, pose de fosse et curage de canalisations extérieures.',
    nearbySlugs: ['namur', 'gembloux', 'perwez'],
  },
  {
    slug: 'andenne',
    name: 'Andenne',
    region: 'Wallonie',
    province: 'Namur',
    postalCodes: ['5300'],
    etaRange: '32–44 min',
    activeTeams: 1,
    districts: ['Andenne Centre', 'Seilles', 'Sclayn', 'Bonneville', 'Coutisse', 'Landenne'],
    housingProfile:
      'Centre-ville mosan, maisons mitoyennes à Seilles et habitations rurales sur les plateaux d’Andenne.',
    localChallenge:
      'Débouchage haute pression de conduites entartrées, vidange de fosses et localisation de cassures par caméra.',
    nearbySlugs: ['namur', 'huy', 'eghezee'],
  },
  {
    slug: 'sombreffe',
    name: 'Sombreffe',
    region: 'Wallonie',
    province: 'Namur',
    postalCodes: ['5140'],
    etaRange: '30–40 min',
    activeTeams: 1,
    districts: ['Sombreffe Centre', 'Boignée', 'Ligny', 'Tongrinne'],
    housingProfile:
      'Maisons familiales de village et propriétés rurales à l’intersection de Namur, Charleroi et Gembloux.',
    localChallenge:
      'Débouchage urgent de sanitaires et égouts, vidange de fosses septiques et entretien de sterputs.',
    nearbySlugs: ['gembloux', 'fleurus', 'sambreville'],
  },
  {
    slug: 'fosses-la-ville',
    name: 'Fosses-la-Ville',
    region: 'Wallonie',
    province: 'Namur',
    postalCodes: ['5070'],
    etaRange: '32–44 min',
    activeTeams: 1,
    districts: ['Fosses Centre', 'Aisemont', 'Le Roux', 'Sart-Eustache', 'Vitrival'],
    housingProfile:
      'Bâtisses traditionnelles en pierre, lotissements familiaux et fermettes rurales de l’Entre-Sambre-et-Meuse.',
    localChallenge:
      'Vidange de fosses toutes eaux, curage haute pression des regards et débouchage d’éviers ou WC 7j/7.',
    nearbySlugs: ['sambreville', 'namur', 'philippeville'],
  },
  {
    slug: 'philippeville',
    name: 'Philippeville',
    region: 'Wallonie',
    province: 'Namur',
    postalCodes: ['5600'],
    etaRange: '40–55 min',
    activeTeams: 1,
    districts: ['Philippeville Centre', 'Franchimont', 'Jamagne', 'Neuville', 'Roly', 'Samart'],
    housingProfile:
      'Centre historique fortifié entouré de nombreux villages ruraux équipés de systèmes d’épuration individuels.',
    localChallenge:
      'Vidange de fosses septiques et bacs à graisse, coupe-racines dans les conduites et inspection vidéo.',
    nearbySlugs: ['fosses-la-ville', 'beauraing', 'charleroi'],
  },
  {
    slug: 'beauraing',
    name: 'Beauraing',
    region: 'Wallonie',
    province: 'Namur',
    postalCodes: ['5570', '5571', '5572', '5573', '5574', '5576'],
    etaRange: '45–60 min',
    activeTeams: 1,
    districts: ['Beauraing Centre', 'Baronville', 'Dion', 'Focant', 'Pondrôme', 'Winenne'],
    housingProfile:
      'Maisons de la Famenne, gîtes ruraux et habitations individuelles réparties sur 15 anciennes communes.',
    localChallenge:
      'Pompage de fosses septiques avec grand rayon d’aspiration, débouchage contre les graisses figées et curage.',
    nearbySlugs: ['dinant', 'philippeville', 'ciney'],
  },

  // ===================== LUXEMBOURG (5 VILLES) =====================
  {
    slug: 'arlon',
    name: 'Arlon',
    region: 'Wallonie',
    province: 'Luxembourg',
    postalCodes: ['6700', '6704', '6706'],
    etaRange: '45–60 min',
    activeTeams: 2,
    districts: ['Arlon Centre', 'Autelbas', 'Bonnert', 'Heinsch', 'Toernich', 'Waltzing'],
    housingProfile:
      'Immeubles frontaliers modernes, maisons familiales de centre-ville et villages lorrains aux alentours.',
    localChallenge:
      'Débouchage haute pression, vidange de fosses septiques et diagnostic caméra avant acquisition immobilière.',
    nearbySlugs: ['aubange', 'virton', 'bastogne'],
  },
  {
    slug: 'bastogne',
    name: 'Bastogne',
    region: 'Wallonie',
    province: 'Luxembourg',
    postalCodes: ['6600'],
    etaRange: '45–60 min',
    activeTeams: 1,
    districts: ['Bastogne Centre', 'Bertogne', 'Longvilly', 'Noville', 'Wardin'],
    housingProfile:
      'Habitations en pierre du pays, commerces du centre et nombreuses exploitations ou maisons rurales isolées.',
    localChallenge:
      'Vidange de fosses septiques toutes eaux et bacs à graisse, débouchage contre le gel/graisses figées et curage.',
    nearbySlugs: ['arlon', 'marche-en-famenne', 'ciney'],
  },
  {
    slug: 'marche-en-famenne',
    name: 'Marche-en-Famenne',
    region: 'Wallonie',
    province: 'Luxembourg',
    postalCodes: ['6900'],
    etaRange: '40–55 min',
    activeTeams: 1,
    districts: ['Marche Centre', 'Aye', 'Marloie', 'On', 'Waha', 'Hargimont'],
    housingProfile:
      'Pôle commercial de Famenne, zones résidentielles récentes à Aye/Marloie et villages calcaires environnants.',
    localChallenge:
      'Détartrage haute pression sur conduites entartrées par l’eau calcaire de Famenne et vidange de fosses septiques.',
    nearbySlugs: ['ciney', 'dinant', 'bastogne'],
  },
  {
    slug: 'aubange',
    name: 'Aubange',
    region: 'Wallonie',
    province: 'Luxembourg',
    postalCodes: ['6790', '6791', '6792'],
    etaRange: '45–60 min',
    activeTeams: 1,
    districts: ['Aubange', 'Athus', 'Halanzy', 'Rachecourt'],
    housingProfile:
      'Habitations frontalières à Athus et Aubange, maisons familiales et zones commerciales du Pôle Européen.',
    localChallenge:
      'Débouchage de canalisations en urgence, curage de sterputs et vidange de fosses ou bacs à graisse.',
    nearbySlugs: ['arlon', 'virton', 'bastogne'],
  },
  {
    slug: 'virton',
    name: 'Virton',
    region: 'Wallonie',
    province: 'Luxembourg',
    postalCodes: ['6760', '6761', '6762'],
    etaRange: '45–60 min',
    activeTeams: 1,
    districts: ['Virton Centre', 'Saint-Mard', 'Bleid', 'Éthe', 'Latour', 'Ruette'],
    housingProfile:
      'Maisons gaumaises en pierre jaune, habitations familiales à Saint-Mard et villages ruraux.',
    localChallenge:
      'Vidange de fosses septiques toutes eaux, détartrage haute pression et recherche de cassures par caméra.',
    nearbySlugs: ['aubange', 'arlon', 'beauraing'],
  },
];

// Ensure every nearbySlug references a valid active city slug
const VALID_SLUGS = new Set(ZONES_CITIES.map((c) => c.slug));
for (const city of ZONES_CITIES) {
  city.nearbySlugs = city.nearbySlugs.filter((s) => VALID_SLUGS.has(s) && s !== city.slug);
}

export function getZoneCityBySlug(slug: string): ZoneCity | undefined {
  return ZONES_CITIES.find((c) => c.slug === slug);
}

export function getCityMetaTitle(city: ZoneCity): string {
  // CTR-focused title leading with price & dispatch ETA, strictly <= 60 chars
  const etaShort = city.region === 'Bruxelles-Capitale' ? '20 min' : '30 min';
  const candidate = `Débouchage ${city.name} Dès 75 € · ${etaShort} | Turbo`;
  if (candidate.length <= 60) return candidate;
  const compact = `Débouchage ${city.name} Dès 75 € | Turbo`;
  if (compact.length <= 60) return compact;
  return `Débouchage ${city.name} 24/7 | Turbo`.slice(0, 60);
}

export function getCityMetaDescription(city: ZoneCity): string {
  const cp = city.postalCodes[0];
  return `Débouchage canalisation, WC, sterput et égouts à ${city.name} (${cp}) en ${city.etaRange} 7j/7. Hydrocurage 200 bars dès 75 € HTVA et garantie 5 ans. Devis gratuit.`;
}

export interface CityServiceHighlight {
  slug: string;
  heading: string;
  description: string;
}

export function getCityServiceSections(city: ZoneCity): CityServiceHighlight[] {
  return [
    {
      slug: 'curage-egouts',
      heading: `Curage de canalisation et égouts à ${city.name}`,
      description: `Hydrocurage haute pression jusqu’à 200 bars pour libérer vos conduites principales, colonnes d’immeubles et chambres de visite à ${city.name} (${city.postalCodes[0]}), sans produit chimique ni casse.`,
    },
    {
      slug: 'debouchage-sterput',
      heading: `Débouchage sterput et bac à graisse à ${city.name}`,
      description: `Nettoyage complet de votre sterput (siphon de cour), avaloir de garage ou bac à graisse Horeca à ${city.name} pour stopper immédiatement les refoulements et odeurs d’égout.`,
    },
    {
      slug: 'vidange-fosse-septique',
      heading: `Vidange fosse septique et inspection caméra à ${city.name}`,
      description: `Pompage agréé de fosses septiques (1 à 10 m³) et dégraisseurs autour de ${city.districts.slice(0, 3).join(', ')}, plus contrôle vidéo HD pour dossier sinistre assurance ou achat immobilier.`,
    },
    {
      slug: 'debouchage-wc',
      heading: `Débouchage WC, évier et baignoire en urgence à ${city.name}`,
      description: `Intervention 24h/24 et dimanches inclus à ${city.name} en ${city.etaRange} dès 75 € HTVA pour tout WC suspendu, sanibroyeur, douche à l’italienne ou évier bloqué.`,
    },
  ];
}

export function getCityFaqs(city: ZoneCity) {
  return [
    {
      question: `Quel est votre délai d'intervention à ${city.name} (${city.postalCodes[0]}) ?`,
      answer: `Pour une urgence sanitaire ou une canalisation bouchée à ${city.name} (${city.districts.slice(0, 3).join(', ')}), notre délai d'arrivée moyen est de ${city.etaRange} grâce à nos équipes mobiles basées dans le secteur ${city.province}.`,
    },
    {
      question: `Combien coûte un débouchage de canalisation à ${city.name} ?`,
      answer: `Nos tarifs démarrent à 75 € HTVA pour un débouchage sanitaire (WC, évier, douche ou baignoire), 95 € HTVA pour un sterput et 120 € HTVA pour un hydrocurage haute pression complet. Le forfait exact est toujours confirmé par téléphone avant notre départ.`,
    },
    {
      question: `Intervenez-vous pour les vidanges de fosse septique et inspections caméra à ${city.name} ?`,
      answer: `Oui, nos camions hydrocureurs réalisent la vidange de fosses septiques (1 à 10 m³) avec attestation agréée, le nettoyage de bacs à graisse, le chemisage sans tranchée et le diagnostic vidéo par caméra HD dans tout ${city.name} et ses alentours.`,
    },
  ];
}
