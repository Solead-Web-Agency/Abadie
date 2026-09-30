// Press articles and posts supplied by the firm (Sept. 2026).
// PDFs live in public/documents/{presse,posts}. Source documents are in
// French; `body` (when present) is the French text rendered as HTML.
// Body blocks: { h: '…' } heading, { p: '…' } paragraph, { ul: ['…'] } list.

const pressItems = [
  {
    slug: 'loi-de-finances-2026-cidef',
    media: "L'Économiste du Faso",
    date: '2026-03-02',
    file: '/documents/presse/loi-de-finances-2026-cidef.pdf',
    title: {
      fr: 'La Loi de finances 2026 passée à la loupe du CIDEF',
      en: 'The 2026 Finance Act under the CIDEF’s magnifying glass',
    },
    summary: {
      fr: [
        "Lors du premier Conseil d'administration élargi du Conseil interprofessionnel des entreprises du Burkina Faso (CIDEF), tenu le 27 février 2026 à Ouagadougou, la loi de finances 2026 a constitué le principal point de l'ordre du jour.",
        'Responsable de la Commission fiscalité du CIDEF, Pierre Abadie y a présenté les innovations qui concernent directement les contribuables de la Direction des grandes entreprises : frais de siège, retenues à la source, débat autour de la TVA. Le Conseil a ensuite formulé des recommandations à l’administration fiscale.',
      ],
      en: [
        'At the first extended Board meeting of the Interprofessional Council of Burkina Faso Businesses (CIDEF), held on 27 February 2026 in Ouagadougou, the 2026 Finance Act was the main item on the agenda.',
        "As head of the CIDEF Tax Committee, Pierre Abadie presented the changes that directly affect taxpayers under the Large Taxpayers Office: head-office costs, withholding taxes and the debate around VAT. The Board then issued recommendations to the tax authorities.",
      ],
    },
  },
  {
    slug: 'justice-fiscale-securite-des-entreprises',
    media: "L'Économiste du Faso",
    date: '2017-02-06',
    file: '/documents/presse/justice-fiscale-securite-des-entreprises.pdf',
    title: {
      fr: 'Justice fiscale : garantir la sécurité des entreprises',
      en: 'Tax justice: guaranteeing legal certainty for businesses',
    },
    summary: {
      fr: [
        "Compte rendu de la rencontre annuelle du Cabinet Pierre Abadie consacrée à l'actualité juridique 2013-2016, à la loi de finances 2017, à la contribution foncière et aux prix de transfert, en présence d'un représentant de la Direction générale des impôts et du président de l'Ordre des experts-comptables.",
      ],
      en: [
        "Report on Cabinet Pierre Abadie's annual meeting on legal developments from 2013 to 2016, the 2017 Finance Act, the property contribution and transfer pricing, attended by a representative of the Directorate General of Taxes and the president of the Order of Chartered Accountants.",
      ],
    },
  },
  {
    slug: 'sciences-campus-info-actualite-juridique-et-fiscale',
    media: 'Sciences-Campus Info',
    date: '2017-01-31',
    file: '/documents/presse/sciences-campus-info-actualite-juridique-et-fiscale.pdf',
    title: {
      fr: "Actualité juridique et fiscale : les chefs d'entreprise s'informent auprès du Cabinet Pierre Abadie",
      en: 'Legal and tax news: business leaders get briefed by Cabinet Pierre Abadie',
    },
    summary: {
      fr: [
        "Le quotidien numérique Sciences-Campus Info (n°286 du 31 janvier 2017) consacre un article au petit-déjeuner débat organisé par le cabinet sur l'actualité juridique et fiscale. Le PDF reproduit l'intégralité du numéro.",
      ],
      en: [
        'The online daily Sciences-Campus Info (issue 286, 31 January 2017) reports on the breakfast debate organised by the firm on legal and tax news. The PDF reproduces the full issue.',
      ],
    },
  },
  {
    slug: 'lefaso-actualite-juridique-et-fiscale-2017',
    media: 'Lefaso.net',
    date: '2017-01-30',
    file: '/documents/presse/lefaso-actualite-juridique-et-fiscale-2017.pdf',
    title: {
      fr: 'Actualité juridique et fiscale burkinabè : connaître les règles pour un meilleur ancrage et développement des entreprises',
      en: 'Burkinabè legal and tax news: knowing the rules to help businesses take root and grow',
    },
    summary: {
      fr: [
        "Le 19 janvier 2017 à Ouagadougou, le Cabinet Pierre Abadie a réuni une cinquantaine de chefs d'entreprise, directeurs financiers et chefs comptables autour de quatre thèmes d'actualité juridique et fiscale.",
      ],
      en: [
        'On 19 January 2017 in Ouagadougou, Cabinet Pierre Abadie brought together some fifty business leaders, finance directors and chief accountants around four topical legal and tax themes.',
      ],
    },
  },
  {
    slug: 'actualite-juridique-et-fiscale-2013-2016',
    media: "L'Économiste du Faso",
    date: '2016-02-08',
    file: '/documents/presse/actualite-juridique-et-fiscale-2013-2016.pdf',
    title: {
      fr: 'Actualité juridique et fiscale 2013-2016 : le Cabinet Pierre Abadie explique',
      en: 'Legal and tax news 2013-2016: Cabinet Pierre Abadie explains',
    },
    summary: {
      fr: [
        "Le 28 janvier 2016, plus d'une cinquantaine de DAF de sociétés publiques et privées ont assisté au petit-déjeuner du cabinet présentant l'actualité juridique 2013-2016 et les nouvelles dispositions de la loi de finances 2016, avec leurs incidences pour les entreprises.",
      ],
      en: [
        'On 28 January 2016, more than fifty finance directors from public and private companies attended the firm’s breakfast presenting legal developments from 2013 to 2016 and the new provisions of the 2016 Finance Act, with their impact on businesses.',
      ],
    },
  },
  {
    slug: 'ispp-journee-autour-de-la-fiscalite',
    media: "L'Économiste du Faso",
    date: '2015-11-30',
    file: '/documents/presse/ispp-journee-autour-de-la-fiscalite.pdf',
    title: {
      fr: 'Institut supérieur privé polytechnique : la journée autour de la fiscalité',
      en: 'Private Polytechnic Institute: a day devoted to taxation',
    },
    summary: {
      fr: [
        "Le 21 novembre 2015, le Cabinet Pierre Abadie a animé à l'ISPP une conférence sur « La fiscalité internationale et du Burkina Faso » devant plusieurs centaines d'étudiants et d'anciens élèves.",
      ],
      en: [
        'On 21 November 2015, Cabinet Pierre Abadie led a conference at the ISPP on “International and Burkinabè taxation” in front of several hundred students and alumni.',
      ],
    },
  },
  {
    slug: 'fasozine-etudiants-iam',
    media: 'FasoZine',
    date: '2015-06-08',
    file: '/documents/presse/fasozine-etudiants-iam.pdf',
    title: {
      fr: "Étudiants de l'IAM : viser toujours plus haut",
      en: 'IAM students: always aiming higher',
    },
    summary: {
      fr: [
        "Compte rendu de la troisième rencontre entre chefs d'entreprise et étudiants de l'Institut africain de management (IAM) de Ouagadougou, le 6 juin 2015.",
      ],
      en: [
        'Report on the third meeting between business leaders and students of the African Institute of Management (IAM) in Ouagadougou, on 6 June 2015.',
      ],
    },
  },
  {
    slug: 'redressement-fiscal-chefs-d-entreprises',
    media: "L'Économiste du Faso",
    date: '2014-04-07',
    file: '/documents/presse/redressement-fiscal-chefs-d-entreprises.pdf',
    title: {
      fr: "Redressement fiscal : « Les chefs d'entreprises ont peur des impôts. À tort ! »",
      en: 'Tax reassessment: “Business leaders are afraid of taxes. Wrongly so!”',
    },
    summary: {
      fr: [
        "Interview de Pierre Abadie à l'issue de la formation organisée du 24 au 28 mars 2014 à Bobo-Dioulasso pour les comptables d'entreprises : redressements fiscaux, calcul des impôts et actualité juridique 2012-2013.",
      ],
      en: [
        'Interview with Pierre Abadie following the training course held from 24 to 28 March 2014 in Bobo-Dioulasso for company accountants: tax reassessments, tax calculation and legal developments in 2012-2013.',
      ],
    },
  },
  {
    slug: 'tva-impot-efficace-mais-antisocial',
    media: '226 Infos',
    date: '2014-01-14',
    file: '/documents/presse/tva-impot-efficace-mais-antisocial.pdf',
    title: {
      fr: 'Pierre Abadie à propos de la TVA : « C’est un impôt efficace, mais antisocial »',
      en: 'Pierre Abadie on VAT: “An efficient but antisocial tax”',
    },
    summary: {
      fr: [
        'Entretien sur la taxe sur la valeur ajoutée au Burkina Faso (18 %) : sa source juridique, son fonctionnement et les difficultés de son recouvrement.',
      ],
      en: [
        'Interview on value added tax in Burkina Faso (18%): its legal basis, how it works and the difficulties in collecting it.',
      ],
    },
  },
  {
    slug: 'code-de-la-communication-interview',
    media: "L'Économiste du Faso",
    date: '2014-11-13',
    file: null,
    title: {
      fr: 'Vient de paraître : le Code de la communication & des droits littéraires et artistiques',
      en: 'Just published: the Code of communication & literary and artistic rights',
    },
    summary: {
      fr: [
        "Pierre Abadie présente l'activité d'édition du cabinet et son ouvrage consacré à la communication et à la propriété littéraire et artistique au Burkina Faso.",
      ],
      en: [
        "Pierre Abadie presents the firm's publishing activity and its book on communication and literary and artistic property in Burkina Faso.",
      ],
    },
    body: [
      { h: 'Bonjour M. ABADIE, pouvez-vous vous présenter au lecteur en quelques lignes ?' },
      { p: "Je suis Pierre ABADIE, conseil juridique et fiscal pour les entreprises burkinabè et étrangères. J’exerce depuis 16 ans au pays des hommes intègres et depuis plus de 30 années sur le plan international. Le Cabinet que je dirige se consacre à la connaissance des règles juridiques pour le développement du secteur privé au Burkina Faso." },
      { h: 'Quelles sont les activités que vous exercez au sein de votre cabinet ?' },
      { p: 'Avec une formation d’expert-comptable et de juriste, je me consacre pour l’essentiel aux activités de conseil aux entreprises.' },
      { p: "Nous faisons également de l’édition, avec à ce jour 14 ouvrages publiés permettant aux entreprises de maîtriser les règles applicables dans les différents domaines d’activité, surtout en ce qui concerne la fiscalité mais également en droit du travail, de la douane, des marchés publics, du secteur minier, de l’environnement, de la communication, etc." },
      { h: 'Vous faites de l’édition, c’est une activité surprenante pour un conseiller d’entreprises diplômé d’expertise comptable. Qu’est-ce qui vous a motivé ?' },
      { p: 'Je pense au contraire que cela fait partie du rôle de l’expert-comptable, qui est le principal conseiller du chef d’entreprise aussi bien au plan comptable, juridique que fiscal.' },
      { p: 'Afin de mener à bien cette mission de conseil, il est indispensable d’être bien informé et d’avoir à sa disposition tous les textes applicables. Non seulement ces données doivent être complètes et exhaustives, mais elles doivent être constamment à jour des nouvelles dispositions. C’est le cas pour nos ouvrages, avec des mises à jour gratuites pour les livres en version numérique.' },
      { p: 'C’est ce travail que nous avons fait et que nous mettons à la disposition des entreprises et de toute autre personne intéressée à travers nos publications. Nous pensons ainsi faciliter la prise de décision rapide des investisseurs, qui sauront comment développer leur entreprise dans le respect du droit burkinabè. Il s’agit aussi d’éviter des conflits inutiles en permettant à chacun de se référer à un texte écrit pour résoudre une situation.' },
      { h: 'Vous venez de publier votre dernier ouvrage, le « Code de la communication et de la propriété littéraire et artistique ». Pouvez-vous nous résumer son contenu ?' },
      { p: 'Cet ouvrage traite de deux volets, comme son titre le laisse entrevoir.' },
      { p: 'Il y a d’abord la partie communication, qui regroupe les textes régissant aussi bien les organes de presse que les institutions en charge du contrôle et de la régulation, avec également un chapitre sur la cinématographie.' },
      { p: 'La seconde partie est une compilation de la législation sur la propriété littéraire et artistique, notamment les traités et conventions internationales auxquels le Burkina est partie, la protection et la rémunération des œuvres de l’esprit, le statut de l’artiste, la lutte contre la piraterie, etc.' },
      { h: 'Qu’est-ce qu’une telle œuvre peut apporter au paysage médiatique et artistique du Burkina Faso ?' },
      { p: 'La sphère médiatique et le monde artistique sont étroitement liés, et les interactions entre ces deux acteurs engendrent souvent des conflits d’intérêts préjudiciables à la bonne marche de l’économie culturelle. Il s’agit, à travers cet ouvrage, de bien définir le rôle et les prérogatives de chacun des acteurs pour la bonne marche de ces secteurs qui occupent une place importante dans l’économie burkinabè.' },
      { h: 'Le document est assez volumineux, il comporte 786 pages. Qu’est-ce qui explique cela ?' },
      { p: 'La taille du document se justifie par notre souci d’exhaustivité et d’actualité. Nous assurons pratiquement une veille juridique pour informer en temps réel nos lecteurs, avec des mises à jour régulières des derniers textes en vigueur. Compte tenu de ces mises à jour, nous imprimons en petite quantité, car les versions font l’objet d’actualisations et d’enrichissements constants.' },
      { h: 'Comment se fait la collecte de tous ces textes, pour être aussi exhaustif et constamment à jour ?' },
      { p: 'Ces textes proviennent pour la plupart de nos recherches constantes, aussi bien au plan international que national, notamment au Journal officiel du Burkina Faso et au Bulletin officiel de l’UEMOA, mais aussi à travers certaines personnes ressources, que nous remercions au passage, dans les différents ministères et directions, au CSC, au BBDA et dans bien d’autres structures qui nous aident à obtenir certains textes, spontanément ou à notre demande.' },
      { h: 'Combien coûte cet ouvrage ?' },
      { p: '100 000 FCFA en version papier et 60 000 FCFA en version numérique.' },
      { h: '100 000 FCFA, pensez-vous que ce prix est à la portée du Burkinabè moyen ?' },
      { p: 'Malheureusement non, et vous avez raison de dire qu’il ne s’agit pas d’un produit de grande consommation. Quels que soient les prix pratiqués, le marché étant très limité, nos activités d’édition ne peuvent pas être bénéficiaires. Nous travaillons sans subvention et avec nos modestes moyens.' },
      { p: 'Les ouvrages que nous produisons sont des outils de travail pour les entreprises et je pense que ce prix reste abordable au regard de ce qu’il contient et de ce qu’il pourrait faire économiser à l’entreprise.' },
      { h: 'Votre dernier mot ?' },
      { p: 'Je vais d’abord vous remercier pour l’occasion que vous m’avez donnée de présenter le Code de la communication et de la propriété littéraire et artistique, et profiter de cette occasion pour souhaiter paix, unité et prospérité au Burkina Faso.' },
    ],
  },
]

const postItems = [
  {
    slug: 'facture-electronique-certifiee',
    media: 'Cabinet Pierre Abadie',
    date: '2025-02-25',
    file: '/documents/posts/facture-electronique-certifiee.pdf',
    title: {
      fr: 'Facture électronique certifiée (FEC) au Burkina Faso',
      en: 'Certified electronic invoicing (FEC) in Burkina Faso',
    },
    summary: {
      fr: [
        "Qu'est-ce qu'une facture électronique certifiée, qui doit la délivrer, comment se mettre en conformité (SECeF ou SFE), quelles sont les exemptions et à partir de quand l'obligation s'applique.",
        'Sources : article 564 du CGI et arrêtés n°2025-0047, 0048 et 0049/MEF/SG/DGI.',
      ],
      en: [
        'What a certified electronic invoice is, who must issue one, how to comply (SECeF device or SFE software), which exemptions apply and when the obligation takes effect.',
        'Sources: article 564 of the General Tax Code and orders no. 2025-0047, 0048 and 0049/MEF/SG/DGI.',
      ],
    },
  },
  {
    slug: 'creation-de-societe-recourir-a-un-professionnel',
    media: 'Cabinet Pierre Abadie',
    date: '2022-08-03',
    file: null,
    title: {
      fr: 'Pourquoi recourir à un professionnel pour la création de sa société ?',
      en: 'Why use a professional to set up your company?',
    },
    summary: {
      fr: [
        'Les mentions des actes constitutifs ont des conséquences fiscales et pénales importantes : ce que tout créateur de société doit savoir.',
      ],
      en: [
        'The wording of a company’s articles has significant tax and criminal consequences: what every company founder should know.',
      ],
    },
    body: [
      { p: 'Toutes les mentions contenues dans les actes constitutifs des sociétés ont des implications très importantes et souvent lourdes de conséquences.' },
      { h: 'Sur le plan fiscal' },
      { p: 'Certains avantages et obligations fiscales sont fonction de la forme juridique et du chiffre d’affaires de la société.' },
      {
        ul: [
          'Exemple 1 : la contribution des patentes est fonction du chiffre d’affaires et du secteur d’activité.',
          'Exemple 2 : le régime d’imposition est fonction du chiffre d’affaires, lequel dépend souvent de la forme juridique de la société.',
        ],
      },
      { h: 'Sur le plan pénal' },
      { p: 'Pendant la constitution de la société, certaines formalités sont nécessaires et leur absence est pénalement répréhensible.' },
      { p: 'Exemple : pour la société anonyme, l’émission d’actions avant l’immatriculation de la société est pénalement répréhensible (article 886 de l’Acte uniforme relatif au droit des sociétés commerciales et du GIE).' },
      { p: '« Est constitutif d’une infraction pénale, le fait, pour les fondateurs, le président-directeur général, le directeur général, l’administrateur général ou l’administrateur général adjoint d’une société anonyme d’émettre des actions avant l’immatriculation ou à n’importe quelle époque lorsque l’immatriculation est obtenue par fraude ou que la société est irrégulièrement constituée. » — Art. 886, AUDSC-GIE' },
    ],
  },
  {
    slug: 'contribution-fonciere',
    media: "L'Économiste du Faso",
    date: '2022-03-28',
    file: '/documents/posts/contribution-fonciere.pdf',
    title: {
      fr: 'Contribution foncière : un impôt sur la fortune payable le 30 mars au plus tard',
      en: 'Property contribution: a wealth tax payable by 30 March at the latest',
    },
    summary: {
      fr: [
        "La contribution foncière frappe le patrimoine immobilier, bâti ou non, situé dans les villes. Avec la mise en place du cadastre fiscal, son rendement pourrait devenir majeur pour l'État. Quelles propriétés sont concernées, qui doit payer et comment ?",
      ],
      en: [
        'The property contribution applies to built and unbuilt real estate located in towns. With the roll-out of the tax land register, it could become a major source of revenue for the State. Which properties are concerned, who must pay and how?',
      ],
    },
  },
  {
    slug: 'declaration-des-beneficiaires-effectifs',
    media: "L'Économiste du Faso",
    date: '2022-03-07',
    file: '/documents/posts/declaration-des-beneficiaires-effectifs.pdf',
    title: {
      fr: 'Nouvelles obligations fiscales : déclarer les véritables propriétaires des entreprises',
      en: 'New tax obligations: declaring the real owners of companies',
    },
    summary: {
      fr: [
        'Depuis la loi de finances 2022, les sociétés burkinabè doivent tenir un registre de leurs bénéficiaires effectifs et le déclarer à l’administration fiscale. Qui est concerné, qui est bénéficiaire effectif et quelle est la procédure d’identification ?',
      ],
      en: [
        'Since the 2022 Finance Act, Burkinabè companies must keep a register of their beneficial owners and declare it to the tax authorities. Who is concerned, who counts as a beneficial owner and how are they identified?',
      ],
    },
  },
  {
    slug: 'bail-d-habitation-privee',
    media: 'Cabinet Pierre Abadie',
    date: '2022-08-23',
    file: '/documents/posts/bail-d-habitation-privee.pdf',
    title: {
      fr: "Bon à savoir : la loi n°103-CNT/2015 portant bail d'habitation privée au Burkina Faso",
      en: 'Good to know: Law no. 103-CNT/2015 on private residential leases in Burkina Faso',
    },
    summary: {
      fr: [
        'La loi plafonne le loyer à 7 % du coût de réalisation du local et limite les augmentations à 5 % tous les 3 ans. Au regard du coût des matériaux et de la spéculation foncière, son application stricte est-elle opportune ?',
      ],
      en: [
        'The law caps rent at 7% of the construction cost of the premises and limits increases to 5% every 3 years. Given building material costs and land speculation, is strict enforcement appropriate?',
      ],
    },
  },
]

// Most recent first.
const byDateDesc = (a, b) => b.date.localeCompare(a.date)
export const press = pressItems.sort(byDateDesc)
export const posts = postItems.sort(byDateDesc)
