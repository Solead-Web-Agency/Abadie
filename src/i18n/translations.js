// Bilingual content. Image filenames live in src/data/assets.js (language-neutral).
// Structure is identical across `fr` and `en` so components can read t.<path> safely.

export const CONTACT_EMAIL = 'pierre@abadie.bf'
export const CONTACT_PHONE = '07 51 51 51'
export const CONTACT_PHONE_HREF = '+22607515151'
export const CONTACT_ADDRESS = '143 rue 4.107, Ouagadougou'

export const SOCIALS = [
  { name: 'LinkedIn', icon: 'linkedin', href: 'https://www.linkedin.com/in/pierre-abadie-b8829512/' },
  { name: 'YouTube', icon: 'youtube', href: 'https://www.youtube.com/channel/UCUzZTTyWRCXZCjhb1SHJNbA' },
  { name: 'Facebook', icon: 'facebook', href: 'https://web.facebook.com/Cabinet-Pierre-Abadie-1619432348289458' },
]

export const messages = {
  fr: {
    common: {
      home: 'Accueil',
      readMore: 'En savoir plus',
      contact: 'Nous contacter',
    },
    header: {
      tagline: 'Conseil • Fiscalité • Audit',
      ecrire: 'Nous écrire',
      banner: 'Le conseil des entreprises internationales installées au Burkina Faso',
    },
    nav: {
      cabinet: 'Le Cabinet',
      metier: 'Cœur Métier',
      clients: 'Nos Clients',
      ouvrages: 'Nos Ouvrages',
      presse: 'Actions presse & TV',
      posts: 'Nos posts',
      qui: 'Qui sommes-nous ?',
      actu: 'Actualités du Cabinet',
      rejoindre: 'Nous rejoindre',
      ecrire: 'Nous écrire',
      coord: 'Nos coordonnées',
      fiscal: 'Conseil Fiscal',
      social: 'Conseil Droit Social',
      compta: 'Expertise comptable',
    },
    hero: {
      eyebrow: 'Cabinet Pierre Abadie',
      slides: [
        {
          title: 'Conseil Fiscal',
          text: 'Le conseiller fiscal des entreprises au Burkina Faso depuis 1998.',
          to: '/conseil-fiscal',
        },
        {
          title: 'Conseil Droit Social',
          text: 'Sécurisez vos relations de travail et vos ressources humaines.',
          to: '/conseiller-droit-social',
        },
        {
          title: 'Comptabilité et Audit',
          text: "Expertise comptable et missions d'audit menées avec rigueur.",
          to: '/expertise-comptable',
        },
      ],
      ctaMore: 'En savoir plus',
      ctaContact: 'Nous contacter',
    },
    stats: [
      { value: '1998', label: 'Présent au Burkina Faso' },
      { value: '20+', label: 'Collaborateurs experts' },
      { value: '5', label: 'Continents desservis' },
      { value: '25+', label: 'Ouvrages publiés' },
    ],
    services: {
      eyebrow: 'Notre savoir-faire',
      title: 'Trois métiers au service des entreprises',
      more: 'En savoir plus',
      items: {
        fiscal: {
          title: 'Conseil Fiscal',
          text: "Optimisation et sécurisation fiscale, assistance au contrôle, fiscalité internationale et conventions : nous accompagnons les entreprises installées ou souhaitant s'implanter au Burkina Faso.",
        },
        social: {
          title: 'Conseil Droit Social',
          text: 'Une connaissance approfondie du droit du travail pour rester en conformité avec les réglementations en vigueur et gérer sereinement vos ressources humaines.',
        },
        compta: {
          title: 'Comptabilité et Audit',
          text: "Tenue, supervision et révision comptable, établissement des états financiers et missions d'audit menées avec précision et professionnalisme.",
        },
      },
    },
    about: {
      eyebrow: 'Le Cabinet',
      heading: 'Qui sommes-nous ?',
      intro: "Nous sommes un cabinet d'expertise comptable et de conseil basé au Burkina Faso depuis 1998.",
      founderLead: 'Le premier responsable et fondateur, Pierre ABADIE est :',
      founderTitles: ['Expert-comptable,', 'Expert-fiscal,', 'Conseil juridique,', 'Expert judiciaire,', 'Mandataire judiciaire,'],
      honor: "Il est chevalier de l'Ordre du Mérite du Burkina Faso.",
      body: "Il réside au Burkina Faso depuis 1998 d'où il est le conseil des entreprises internationales implantées ou souhaitant s'implanter au Burkina. La direction du cabinet est assurée par Robert HIEN. Le Cabinet Pierre Abadie est une équipe pluridisciplinaire d'une vingtaine de collaborateurs expérimentés et rigoureux, avec :",
      features: ["un département d'expertise comptable", 'un département de conseil juridique.'],
      strengths: [
        'une équipe pluridisciplinaire et multiculturelle,',
        'la formation constante de nos collaborateurs avec des échanges permanents et des supervisions croisées,',
        'une base de données exceptionnelle,',
        'des travaux de recherche donnant lieu à une production importante tant qualitativement que quantitativement.',
      ],
      cta: 'Découvrir le cabinet',
      badge: 'au Burkina Faso',
      strengthsLead: 'Notre force réside dans :',
      videoId: 'k6AAbSDJIfw',
    },
    books: {
      eyebrow: 'Publications',
      title: 'Nos ouvrages',
      text: "Une production de référence sur la fiscalité, le droit et la réglementation au Burkina Faso et dans l'espace OHADA.",
      all: 'Tous nos ouvrages',
    },
    testimonials: {
      eyebrow: 'Témoignages',
      title: 'Ils nous font confiance',
      items: [
        {
          role: 'Conseil Fiscal',
          text: "Je suis extrêmement satisfait des services fournis par le cabinet Pierre Abadie. Leur expertise en matière de conseil fiscal et leur soutien constant m'ont permis d'optimiser ma situation fiscale et de prendre des décisions financières plus éclairées. Je les recommande vivement à toute entreprise à la recherche de conseils fiscaux de qualité.",
        },
        {
          role: 'Expertise Comptable',
          text: "Je suis ravi des services d'expertise comptable fournis par le cabinet. Leur équipe compétente et dévouée a pris en charge ma comptabilité avec précision et professionnalisme. Grâce à eux, j'ai pu avoir une vision claire de ma situation financière et prendre des décisions stratégiques en conséquence. Je les recommande sans hésitation.",
        },
        {
          role: 'Droit Social',
          text: "Le cabinet Pierre Abadie a été d'une grande aide pour moi dans la gestion des aspects juridiques du droit social de mon entreprise. Leurs conseils précis et leur connaissance approfondie des lois du travail m'ont permis de rester en conformité avec les réglementations en vigueur et de résoudre efficacement les problèmes liés aux ressources humaines.",
        },
      ],
    },
    correspondents: {
      eyebrow: 'Réseau international',
      title: 'Nos correspondants',
      text: "Les plus grands cabinets d'avocats et réseaux internationaux correspondent avec le Cabinet Pierre Abadie.",
    },
    clients: {
      eyebrow: 'Références',
      title: 'Nos clients finaux',
      text: 'Le Cabinet Pierre Abadie dispose de clients sur les cinq continents.',
      all: 'Toutes nos références',
    },
    footer: {
      tagline:
        "Le conseiller fiscal des entreprises au Burkina Faso. Cabinet d'expertise comptable et de conseil basé au Burkina Faso depuis 1998, au service des entreprises internationales sur les cinq continents.",
      navTitle: 'Navigation',
      contactTitle: 'Contact',
      location: '143 rue 4.107, Ouagadougou, Burkina Faso',
      coord: 'Nos coordonnées',
      ecrire: 'Nous écrire',
      rejoindre: 'Nous rejoindre',
      rights: 'Tous droits réservés.',
      note: "Reproduction fidèle d'un site archivé — réalisée à des fins de démonstration.",
    },
    cta: {
      title: "Besoin d'un accompagnement sur mesure ?",
      text: 'Nos experts vous répondent et étudient votre situation au Burkina Faso.',
      ecrire: 'Nous écrire',
      coord: 'Nos coordonnées',
    },
    qui: {
      subtitle: "Un cabinet d'expertise comptable et de conseil basé au Burkina Faso depuis 1998.",
      lead: 'Le conseil des entreprises internationales installées au Burkina Faso',
      strengthsTitle: 'Notre force réside dans :',
    },
    fiscal: {
      subtitle: 'Le conseiller fiscal des entreprises au Burkina Faso.',
      intro: "Nous accompagnons les entreprises installées ou souhaitant s'implanter au Burkina Faso pour optimiser et sécuriser leur situation fiscale, en s'appuyant sur une connaissance approfondie de la fiscalité nationale et internationale.",
      items: [
        { title: 'Optimisation fiscale', text: "Structuration et optimisation de votre charge fiscale dans le strict respect de la réglementation en vigueur." },
        { title: 'Assistance au contrôle', text: 'Préparation, accompagnement et défense de vos intérêts lors des contrôles et contentieux fiscaux.' },
        { title: 'Fiscalité internationale', text: "Application des conventions fiscales, prix de transfert et fiscalité des groupes implantés en Afrique de l'Ouest." },
        { title: 'Veille & sécurisation', text: 'Une base de données exceptionnelle et une veille permanente pour anticiper les évolutions réglementaires.' },
      ],
    },
    social: {
      subtitle: 'Sécurisez vos relations de travail et la gestion de vos ressources humaines.',
      intro: 'Notre équipe vous apporte des conseils précis et une connaissance approfondie des lois du travail afin de rester en conformité avec les réglementations en vigueur et de résoudre efficacement les problématiques de ressources humaines.',
      items: [
        { title: 'Contrats & relations de travail', text: 'Rédaction et sécurisation des contrats de travail, accords et règlements intérieurs.' },
        { title: 'Conformité réglementaire', text: 'Mise en conformité avec le droit du travail burkinabè et les conventions collectives applicables.' },
        { title: 'Gestion des conflits', text: 'Prévention et résolution des litiges individuels et collectifs, procédures disciplinaires.' },
        { title: 'Paie & charges sociales', text: 'Accompagnement sur la paie, les déclarations et le respect des obligations sociales.' },
      ],
    },
    compta: {
      subtitle: 'Comptabilité et audit menés avec précision et professionnalisme.',
      intro: "Notre département d'expertise comptable prend en charge votre comptabilité avec rigueur pour vous offrir une vision claire de votre situation financière et vous aider à prendre des décisions stratégiques éclairées.",
      items: [
        { title: 'Tenue & supervision comptable', text: 'Tenue, supervision et révision de votre comptabilité conformément au référentiel SYSCOHADA.' },
        { title: 'États financiers', text: 'Établissement des comptes annuels, liasses fiscales et reporting de gestion.' },
        { title: "Missions d'audit", text: 'Audit légal et contractuel, commissariat aux comptes et missions spéciales.' },
        { title: 'Conseil de gestion', text: 'Tableaux de bord, prévisionnels et accompagnement à la décision financière.' },
      ],
    },
    clientsPage: {
      subtitle: 'Le Cabinet Pierre Abadie dispose de clients sur les cinq continents.',
      corrTitle: 'Nos correspondants',
      corrText: "Les plus grands cabinets d'avocats internationaux correspondent avec le Cabinet Pierre Abadie.",
      finalTitle: 'Nos clients finaux',
      finalText: 'Une sélection des entreprises et institutions qui nous font confiance.',
    },
    ouvragesPage: {
      subtitle: 'Une production de référence sur la fiscalité, le droit et la réglementation au Burkina Faso.',
      ctaTitle: 'Vous souhaitez vous procurer un ouvrage ?',
      ctaText: 'Contactez le cabinet pour la disponibilité et les modalités de commande.',
    },
    actualites: {
      subtitle: 'Les dernières informations et analyses de nos experts.',
      readMore: 'Lire la suite',
      back: 'Retour aux actualités',
      publishedOn: 'Publié le',
      moreTitle: 'Autres actualités',
      posts: [
        {
          slug: 'loi-de-finances-mesures-entreprises',
          tag: 'Fiscalité',
          date: '12 février 2024',
          title: 'Loi de finances : les principales mesures pour les entreprises',
          excerpt: "Tour d'horizon des nouveautés fiscales applicables aux sociétés implantées au Burkina Faso et leurs impacts pratiques.",
          body: [
            "Chaque loi de finances redessine une partie du paysage fiscal des entreprises implantées au Burkina Faso. Au-delà des taux, ce sont souvent les obligations déclaratives et les modalités de contrôle qui emportent les conséquences pratiques les plus lourdes pour les directions financières.",
            "Nos équipes retiennent trois axes de vigilance : le traitement des charges déductibles et leur justification, les retenues à la source sur les prestations rendues par des non-résidents, et le calendrier des acomptes qui conditionne le calcul des pénalités en cas de retard.",
            "Pour les groupes internationaux, la documentation des prix de transfert et son articulation avec les conventions fiscales signées par le Burkina Faso restent le premier poste de risque lors d'une vérification de comptabilité.",
            "Le Cabinet Pierre Abadie accompagne ses clients dans la lecture de ces mesures, la mise à jour de leurs procédures internes et la sécurisation de leurs positions fiscales. Nos analyses détaillées sont reprises et actualisées dans nos ouvrages de référence.",
          ],
        },
        {
          slug: 'reglementation-du-travail-ce-qui-change',
          tag: 'Droit social',
          date: '28 janvier 2024',
          title: 'Réglementation du travail : ce qui change cette année',
          excerpt: 'Les évolutions récentes du droit du travail et les bonnes pratiques pour rester en conformité.',
          body: [
            "Le droit du travail burkinabè évolue régulièrement, sous l'effet des textes réglementaires, des conventions collectives sectorielles et de la jurisprudence des tribunaux du travail.",
            "Les points les plus sensibles concernent la forme et la durée des contrats, la gestion des heures supplémentaires, les déclarations sociales et les procédures de rupture, dont le formalisme est fréquemment source de contentieux.",
            "Notre recommandation reste la même : auditer périodiquement les contrats et les bulletins de paie, formaliser les procédures disciplinaires et conserver la traçabilité des échanges avec les représentants du personnel.",
            "Le département droit social du cabinet assiste les employeurs dans ces diligences, de l'audit de conformité à la représentation en cas de litige. Ces sujets sont traités en détail dans notre ouvrage consacré à la réglementation du travail.",
          ],
        },
        {
          slug: 'cabinet-renforce-equipe-pluridisciplinaire',
          tag: 'Cabinet',
          date: '9 janvier 2024',
          title: 'Le Cabinet Pierre Abadie renforce son équipe pluridisciplinaire',
          excerpt: "De nouveaux collaborateurs rejoignent nos départements d'expertise comptable et de conseil juridique.",
          body: [
            "Le cabinet poursuit le renforcement de ses équipes afin d'accompagner la croissance de ses clients au Burkina Faso et dans la sous-région.",
            "De nouveaux collaborateurs rejoignent les départements d'expertise comptable, de conseil fiscal et de droit social. Cette organisation pluridisciplinaire permet de traiter un même dossier sous ses angles comptable, fiscal et juridique, sans rupture d'interlocuteur.",
            "Elle soutient également notre activité de recherche et d'édition, à l'origine des ouvrages et mémentos que le cabinet publie chaque année sur la fiscalité, la réglementation et le droit des affaires.",
            "Les candidatures spontanées restent les bienvenues : elles sont étudiées tout au long de l'année.",
          ],
        },
      ],
    },
    presse: {
      subtitle: 'Le Cabinet Pierre Abadie intervient régulièrement dans les médias.',
      appearances: [
        { media: 'Télévision nationale', title: 'Interview : la fiscalité des entreprises au Burkina Faso' },
        { media: 'Presse économique', title: 'Tribune : optimiser sa charge fiscale en toute légalité' },
        { media: 'Radio', title: 'Émission : comprendre le droit du travail burkinabè' },
      ],
      theyTalked: 'Ils ont parlé de nous',
    },
    postsPage: {
      subtitle: 'Les publications du cabinet : nos ouvrages, mémentos et recueils de textes commentés.',
      intro:
        "Le Cabinet Pierre Abadie mène une activité d'édition continue sur la fiscalité, la réglementation et le droit des affaires au Burkina Faso. Chaque publication est rédigée par nos équipes, à partir des textes officiels et de notre pratique quotidienne auprès des entreprises.",
      allBooks: 'Voir tous nos ouvrages',
      readBook: "Découvrir l'ouvrage",
      followTitle: 'Suivre les publications du cabinet',
      followText:
        'Nos parutions, mises à jour et analyses sont relayées sur nos réseaux sociaux.',
      items: [
        {
          img: '4-Memento-Fiscal-BF_Page_1-212x300.jpg',
          tag: 'Mémento',
          date: 'Mise à jour annuelle',
          title: 'Mémento fiscal du Burkina Faso',
          excerpt:
            "L'ensemble des impôts et taxes applicables aux entreprises, présenté impôt par impôt, avec les obligations déclaratives et les échéances de paiement.",
        },
        {
          img: '220206-couv-REGL-FISCALE-2022-page-1_Page_1-212x300.jpg',
          tag: 'Réglementation',
          date: 'Édition consolidée',
          title: 'La réglementation fiscale',
          excerpt:
            "Le Code général des impôts et ses textes d'application, consolidés et commentés à la lumière de la pratique de l'administration fiscale.",
        },
        {
          img: '180901-Couv-Reglementation-du-Travail_Page_1-212x300.jpg',
          tag: 'Droit social',
          date: 'Édition consolidée',
          title: 'La réglementation du travail',
          excerpt:
            'Code du travail, conventions collectives et textes sociaux réunis en un volume, à destination des employeurs et des services des ressources humaines.',
        },
        {
          img: '24-Reglementation-du-secteur-MINIER-BF-en-FR_Page_1-212x300.jpg',
          tag: 'Secteur minier',
          date: 'Dernière parution',
          title: 'La réglementation du secteur minier',
          excerpt:
            "Le régime juridique, fiscal et douanier des titres miniers, des sous-traitants et des sociétés d'exploration au Burkina Faso.",
        },
        {
          img: '150422-Couv-Fiscalite-Internationale_Page_1-211x300.jpg',
          tag: 'Fiscalité internationale',
          date: 'Ouvrage de référence',
          title: 'La fiscalité internationale',
          excerpt:
            "Conventions fiscales, retenues à la source et prix de transfert : les règles applicables aux flux entre le Burkina Faso et l'étranger.",
        },
        {
          img: 'Couv-Reglementation-douaniere-tome-I_Page_1-204x300.jpg',
          tag: 'Douane',
          date: 'Tome I',
          title: 'La réglementation douanière',
          excerpt:
            "Régimes douaniers, valeur en douane et contentieux : un outil de travail pour les importateurs, exportateurs et transitaires.",
        },
      ],
    },
    rejoindre: {
      subtitle: 'Rejoignez une équipe rigoureuse et passionnée au service des entreprises.',
      values: [
        { title: 'Une équipe pluridisciplinaire', text: 'Expertise comptable et conseil juridique réunis dans une équipe multiculturelle.' },
        { title: 'Formation continue', text: 'Échanges permanents, supervisions croisées et montée en compétence constante.' },
        { title: 'Travaux de recherche', text: 'Une production importante, qualitative et quantitative, sur le droit et la fiscalité.' },
      ],
      openingsTitle: 'Nos offres',
      openings: [
        { role: 'Collaborateur(trice) comptable', type: 'CDI · Ouagadougou' },
        { role: 'Juriste en droit social', type: 'CDI · Ouagadougou' },
        { role: 'Stagiaire fiscalité', type: 'Stage · Ouagadougou' },
      ],
      apply: 'Postuler',
      ctaTitle: 'Candidature spontanée ?',
      ctaText: 'Envoyez-nous votre CV et votre lettre de motivation, nous étudions toutes les candidatures.',
    },
    ecrire: {
      subtitle: 'Une question, un projet ? Nos experts vous répondent.',
      heading: 'Contactez le cabinet',
      lead: 'Décrivez-nous votre besoin, nous reviendrons vers vous dans les meilleurs délais.',
      addressLabel: 'Adresse',
      address: '143 rue 4.107, Ouagadougou, Burkina Faso',
      emailLabel: 'Email',
      phoneLabel: 'Téléphone',
      phone: CONTACT_PHONE,
      subjects: ['Conseil fiscal', 'Conseil droit social', 'Expertise comptable & audit', 'Recrutement', 'Autre'],
      fName: 'Nom complet',
      fNamePh: 'Votre nom',
      fEmail: 'Email',
      fEmailPh: 'vous@entreprise.com',
      fSubject: 'Objet',
      fMessage: 'Message',
      fMessagePh: 'Décrivez votre besoin…',
      send: 'Envoyer le message',
      errName: 'Veuillez indiquer votre nom.',
      errEmail: 'Veuillez saisir une adresse email valide.',
      errMessage: 'Veuillez écrire votre message.',
      sentTitle: 'Message prêt à être envoyé',
      sentText: 'Votre messagerie vient de s’ouvrir avec le message pré-rempli. Si rien ne s’est passé, écrivez-nous directement à',
      again: 'Rédiger un autre message',
    },
    coord: {
      subtitle: 'Retrouvez le Cabinet Pierre Abadie à Ouagadougou.',
      cards: [
        { icon: 'pin', title: 'Adresse', lines: ['Cabinet Pierre Abadie', '143 rue 4.107, Ouagadougou, Burkina Faso'] },
        { icon: 'mail', title: 'Email', lines: [CONTACT_EMAIL] },
        { icon: 'phone', title: 'Téléphone', lines: [CONTACT_PHONE] },
      ],
      mapTitle: 'Carte Ouagadougou',
    },
    notfound: {
      title: 'Page introuvable',
      text: "La page que vous recherchez n'existe pas ou a été déplacée.",
      back: "Retour à l'accueil",
    },
  },

  en: {
    common: {
      home: 'Home',
      readMore: 'Learn more',
      contact: 'Contact us',
    },
    header: {
      tagline: 'Advisory • Tax • Audit',
      ecrire: 'Contact us',
      banner: 'The adviser to international companies established in Burkina Faso',
    },
    nav: {
      cabinet: 'The Firm',
      metier: 'Core Business',
      clients: 'Our Clients',
      ouvrages: 'Our Books',
      presse: 'Press & TV',
      posts: 'Our posts',
      qui: 'Who we are',
      actu: 'Firm News',
      rejoindre: 'Join us',
      ecrire: 'Contact us',
      coord: 'Contact details',
      fiscal: 'Tax Advisory',
      social: 'Labour Law Advisory',
      compta: 'Accounting',
    },
    hero: {
      eyebrow: 'Cabinet Pierre Abadie',
      slides: [
        { title: 'Tax Advisory', text: 'The tax adviser to businesses in Burkina Faso since 1998.', to: '/conseil-fiscal' },
        { title: 'Labour Law Advisory', text: 'Secure your employment relationships and human resources.', to: '/conseiller-droit-social' },
        { title: 'Accounting & Audit', text: 'Accounting expertise and audit engagements carried out with rigour.', to: '/expertise-comptable' },
      ],
      ctaMore: 'Learn more',
      ctaContact: 'Contact us',
    },
    stats: [
      { value: '1998', label: 'Established in Burkina Faso' },
      { value: '20+', label: 'Expert staff' },
      { value: '5', label: 'Continents served' },
      { value: '25+', label: 'Books published' },
    ],
    services: {
      eyebrow: 'Our expertise',
      title: 'Three practices serving businesses',
      more: 'Learn more',
      items: {
        fiscal: {
          title: 'Tax Advisory',
          text: 'Tax optimisation and security, audit assistance, international taxation and treaties: we support businesses established in, or looking to set up in, Burkina Faso.',
        },
        social: {
          title: 'Labour Law Advisory',
          text: 'In-depth knowledge of labour law to stay compliant with current regulations and manage your human resources with confidence.',
        },
        compta: {
          title: 'Accounting & Audit',
          text: 'Bookkeeping, supervision and review, preparation of financial statements and audit engagements carried out with precision and professionalism.',
        },
      },
    },
    about: {
      eyebrow: 'The Firm',
      heading: 'Who we are',
      intro: 'We are an accounting and advisory firm based in Burkina Faso since 1998.',
      founderLead: 'The founder and managing partner, Pierre ABADIE, is a:',
      founderTitles: ['Chartered accountant,', 'Tax expert,', 'Legal adviser,', 'Judicial expert,', 'Judicial administrator,'],
      honor: 'He is a Knight of the Order of Merit of Burkina Faso.',
      body: 'He has lived in Burkina Faso since 1998, where he advises international companies established in, or wishing to establish in, the country. The firm is managed by Robert HIEN. Cabinet Pierre Abadie is a multidisciplinary team of around twenty experienced and rigorous professionals, with:',
      features: ['an accounting department', 'a legal advisory department.'],
      strengths: [
        'a multidisciplinary and multicultural team,',
        'continuous training of our staff through ongoing exchanges and cross-reviews,',
        'an exceptional database,',
        'research work resulting in significant output, both qualitatively and quantitatively.',
      ],
      cta: 'Discover the firm',
      badge: 'in Burkina Faso',
      strengthsLead: 'Our strength lies in:',
      videoId: 'k6AAbSDJIfw',
    },
    books: {
      eyebrow: 'Publications',
      title: 'Our books',
      text: 'A reference body of work on taxation, law and regulation in Burkina Faso and the OHADA area.',
      all: 'All our books',
    },
    testimonials: {
      eyebrow: 'Testimonials',
      title: 'They trust us',
      items: [
        { role: 'Tax Advisory', text: 'I am extremely satisfied with the services provided by Cabinet Pierre Abadie. Their tax advisory expertise and constant support have enabled me to optimise my tax position and make better-informed financial decisions. I highly recommend them to any company looking for quality tax advice.' },
        { role: 'Accounting', text: 'I am delighted with the accounting services provided by the firm. Their competent and dedicated team has handled my accounts with precision and professionalism. Thanks to them, I gained a clear view of my financial situation and made strategic decisions accordingly. I recommend them without hesitation.' },
        { role: 'Labour Law', text: 'Cabinet Pierre Abadie has been a great help in managing the labour-law aspects of my business. Their precise advice and thorough knowledge of employment law have kept me compliant with current regulations and helped me efficiently resolve HR-related issues.' },
      ],
    },
    correspondents: {
      eyebrow: 'International network',
      title: 'Our correspondents',
      text: 'The largest international law firms and networks correspond with Cabinet Pierre Abadie.',
    },
    clients: {
      eyebrow: 'References',
      title: 'Our clients',
      text: 'Cabinet Pierre Abadie has clients across the five continents.',
      all: 'All our references',
    },
    footer: {
      tagline:
        'The tax adviser to businesses in Burkina Faso. An accounting and advisory firm based in Burkina Faso since 1998, serving international companies across the five continents.',
      navTitle: 'Navigation',
      contactTitle: 'Contact',
      location: '143 rue 4.107, Ouagadougou, Burkina Faso',
      coord: 'Contact details',
      ecrire: 'Contact us',
      rejoindre: 'Join us',
      rights: 'All rights reserved.',
      note: 'A faithful reproduction of an archived site — built for demonstration purposes.',
    },
    cta: {
      title: 'Need tailored support?',
      text: 'Our experts will answer you and review your situation in Burkina Faso.',
      ecrire: 'Contact us',
      coord: 'Contact details',
    },
    qui: {
      subtitle: 'An accounting and advisory firm based in Burkina Faso since 1998.',
      lead: 'The adviser to international companies established in Burkina Faso',
      strengthsTitle: 'Our strength lies in:',
    },
    fiscal: {
      subtitle: 'The tax adviser to businesses in Burkina Faso.',
      intro: 'We support companies established in, or looking to set up in, Burkina Faso to optimise and secure their tax position, drawing on in-depth knowledge of national and international taxation.',
      items: [
        { title: 'Tax optimisation', text: 'Structuring and optimising your tax burden in strict compliance with current regulations.' },
        { title: 'Audit assistance', text: 'Preparation, support and defence of your interests during tax audits and disputes.' },
        { title: 'International taxation', text: 'Application of tax treaties, transfer pricing and taxation of groups operating in West Africa.' },
        { title: 'Monitoring & security', text: 'An exceptional database and ongoing monitoring to anticipate regulatory changes.' },
      ],
    },
    social: {
      subtitle: 'Secure your employment relationships and human-resources management.',
      intro: 'Our team provides precise advice and in-depth knowledge of employment law to keep you compliant with current regulations and efficiently resolve human-resources issues.',
      items: [
        { title: 'Contracts & employment', text: 'Drafting and securing employment contracts, agreements and internal regulations.' },
        { title: 'Regulatory compliance', text: 'Compliance with Burkinabè labour law and the applicable collective agreements.' },
        { title: 'Dispute management', text: 'Prevention and resolution of individual and collective disputes, disciplinary procedures.' },
        { title: 'Payroll & social charges', text: 'Support with payroll, filings and compliance with social-security obligations.' },
      ],
    },
    compta: {
      subtitle: 'Accounting and audit carried out with precision and professionalism.',
      intro: 'Our accounting department handles your bookkeeping rigorously to give you a clear view of your financial situation and help you make well-informed strategic decisions.',
      items: [
        { title: 'Bookkeeping & supervision', text: 'Keeping, supervising and reviewing your accounts in line with the SYSCOHADA framework.' },
        { title: 'Financial statements', text: 'Preparation of annual accounts, tax returns and management reporting.' },
        { title: 'Audit engagements', text: 'Statutory and contractual audits, statutory auditing and special engagements.' },
        { title: 'Management advisory', text: 'Dashboards, forecasts and support for financial decision-making.' },
      ],
    },
    clientsPage: {
      subtitle: 'Cabinet Pierre Abadie has clients across the five continents.',
      corrTitle: 'Our correspondents',
      corrText: 'The largest international law firms correspond with Cabinet Pierre Abadie.',
      finalTitle: 'Our clients',
      finalText: 'A selection of the companies and institutions that trust us.',
    },
    ouvragesPage: {
      subtitle: 'A reference body of work on taxation, law and regulation in Burkina Faso.',
      ctaTitle: 'Would you like to obtain a book?',
      ctaText: 'Contact the firm for availability and ordering details.',
    },
    actualites: {
      subtitle: 'The latest information and analysis from our experts.',
      readMore: 'Read more',
      back: 'Back to news',
      publishedOn: 'Published on',
      moreTitle: 'More news',
      posts: [
        {
          slug: 'loi-de-finances-mesures-entreprises',
          tag: 'Taxation',
          date: '12 February 2024',
          title: 'Finance Act: the main measures for businesses',
          excerpt: 'An overview of the tax changes applicable to companies in Burkina Faso and their practical impact.',
          body: [
            'Every Finance Act reshapes part of the tax landscape for companies operating in Burkina Faso. Beyond the rates themselves, it is usually the reporting obligations and audit procedures that carry the heaviest practical consequences for finance departments.',
            'Our teams highlight three areas to watch: the treatment and substantiation of deductible expenses, withholding tax on services rendered by non-residents, and the instalment calendar, which drives the calculation of penalties in the event of late payment.',
            'For international groups, transfer pricing documentation and its interaction with the tax treaties signed by Burkina Faso remain the primary risk area during a tax audit.',
            'Cabinet Pierre Abadie supports its clients in interpreting these measures, updating their internal procedures and securing their tax positions. Our detailed analysis is reflected and updated in our reference publications.',
          ],
        },
        {
          slug: 'reglementation-du-travail-ce-qui-change',
          tag: 'Labour law',
          date: '28 January 2024',
          title: 'Labour regulations: what changes this year',
          excerpt: 'Recent developments in employment law and best practices to stay compliant.',
          body: [
            'Burkinabè labour law evolves regularly, driven by regulations, sector-level collective agreements and the case law of labour courts.',
            'The most sensitive areas concern the form and duration of employment contracts, overtime management, social security filings and termination procedures, whose formal requirements are a frequent source of litigation.',
            'Our recommendation remains unchanged: audit contracts and payslips periodically, formalise disciplinary procedures and keep a written record of exchanges with employee representatives.',
            "The firm's labour law department assists employers throughout, from compliance audits to representation in disputes. These topics are covered in detail in our publication on labour regulations.",
          ],
        },
        {
          slug: 'cabinet-renforce-equipe-pluridisciplinaire',
          tag: 'Firm',
          date: '9 January 2024',
          title: 'Cabinet Pierre Abadie strengthens its multidisciplinary team',
          excerpt: 'New staff join our accounting and legal advisory departments.',
          body: [
            'The firm continues to strengthen its teams in order to support the growth of its clients in Burkina Faso and across the sub-region.',
            'New staff are joining the accounting, tax advisory and labour law departments. This multidisciplinary set-up allows a single matter to be handled from its accounting, tax and legal angles without changing contact person.',
            'It also supports our research and publishing activity, which produces the books and handbooks the firm releases each year on taxation, regulation and business law.',
            'Spontaneous applications remain welcome and are reviewed throughout the year.',
          ],
        },
      ],
    },
    presse: {
      subtitle: 'Cabinet Pierre Abadie regularly appears in the media.',
      appearances: [
        { media: 'National television', title: 'Interview: business taxation in Burkina Faso' },
        { media: 'Business press', title: 'Op-ed: optimising your tax burden lawfully' },
        { media: 'Radio', title: 'Show: understanding Burkinabè labour law' },
      ],
      theyTalked: 'They talked about us',
    },
    postsPage: {
      subtitle: 'The firm\u2019s publications: our books, handbooks and annotated collections of legal texts.',
      intro:
        'Cabinet Pierre Abadie runs a continuous publishing activity on taxation, regulation and business law in Burkina Faso. Every publication is written by our teams, based on the official texts and on our day-to-day practice with businesses.',
      allBooks: 'See all our publications',
      readBook: 'Discover the book',
      followTitle: 'Follow the firm\u2019s publications',
      followText:
        'Our releases, updates and analysis are shared on our social media channels.',
      items: [
        {
          img: '4-Memento-Fiscal-BF_Page_1-212x300.jpg',
          tag: 'Handbook',
          date: 'Updated yearly',
          title: 'Burkina Faso Tax Handbook',
          excerpt:
            'All taxes and duties applicable to businesses, presented tax by tax, together with filing obligations and payment deadlines.',
        },
        {
          img: '220206-couv-REGL-FISCALE-2022-page-1_Page_1-212x300.jpg',
          tag: 'Regulation',
          date: 'Consolidated edition',
          title: 'Tax regulations',
          excerpt:
            'The General Tax Code and its implementing texts, consolidated and annotated in the light of the tax authorities\u2019 practice.',
        },
        {
          img: '180901-Couv-Reglementation-du-Travail_Page_1-212x300.jpg',
          tag: 'Labour law',
          date: 'Consolidated edition',
          title: 'Labour regulations',
          excerpt:
            'The Labour Code, collective agreements and social security texts gathered in a single volume for employers and HR departments.',
        },
        {
          img: '24-Reglementation-du-secteur-MINIER-BF-en-FR_Page_1-212x300.jpg',
          tag: 'Mining sector',
          date: 'Latest release',
          title: 'Mining sector regulations',
          excerpt:
            'The legal, tax and customs regime applicable to mining titles, subcontractors and exploration companies in Burkina Faso.',
        },
        {
          img: '150422-Couv-Fiscalite-Internationale_Page_1-211x300.jpg',
          tag: 'International tax',
          date: 'Reference work',
          title: 'International taxation',
          excerpt:
            'Tax treaties, withholding taxes and transfer pricing: the rules applicable to flows between Burkina Faso and abroad.',
        },
        {
          img: 'Couv-Reglementation-douaniere-tome-I_Page_1-204x300.jpg',
          tag: 'Customs',
          date: 'Volume I',
          title: 'Customs regulations',
          excerpt:
            'Customs regimes, customs valuation and disputes: a working tool for importers, exporters and freight forwarders.',
        },
      ],
    },
    rejoindre: {
      subtitle: 'Join a rigorous and passionate team serving businesses.',
      values: [
        { title: 'A multidisciplinary team', text: 'Accounting expertise and legal advisory combined in a multicultural team.' },
        { title: 'Continuous training', text: 'Ongoing exchanges, cross-reviews and constant skills development.' },
        { title: 'Research work', text: 'Significant output, both qualitative and quantitative, on law and taxation.' },
      ],
      openingsTitle: 'Our openings',
      openings: [
        { role: 'Accountant', type: 'Permanent · Ouagadougou' },
        { role: 'Labour-law lawyer', type: 'Permanent · Ouagadougou' },
        { role: 'Tax intern', type: 'Internship · Ouagadougou' },
      ],
      apply: 'Apply',
      ctaTitle: 'Spontaneous application?',
      ctaText: 'Send us your CV and cover letter — we review every application.',
    },
    ecrire: {
      subtitle: 'A question or a project? Our experts will answer you.',
      heading: 'Contact the firm',
      lead: 'Tell us about your needs and we will get back to you as soon as possible.',
      addressLabel: 'Address',
      address: '143 rue 4.107, Ouagadougou, Burkina Faso',
      emailLabel: 'Email',
      phoneLabel: 'Phone',
      phone: CONTACT_PHONE,
      subjects: ['Tax advisory', 'Labour law advisory', 'Accounting & audit', 'Recruitment', 'Other'],
      fName: 'Full name',
      fNamePh: 'Your name',
      fEmail: 'Email',
      fEmailPh: 'you@company.com',
      fSubject: 'Subject',
      fMessage: 'Message',
      fMessagePh: 'Describe your needs…',
      send: 'Send message',
      errName: 'Please enter your name.',
      errEmail: 'Please enter a valid email address.',
      errMessage: 'Please write your message.',
      sentTitle: 'Message ready to send',
      sentText: 'Your email app has just opened with the message pre-filled. If nothing happened, write to us directly at',
      again: 'Write another message',
    },
    coord: {
      subtitle: 'Find Cabinet Pierre Abadie in Ouagadougou.',
      cards: [
        { icon: 'pin', title: 'Address', lines: ['Cabinet Pierre Abadie', '143 rue 4.107, Ouagadougou, Burkina Faso'] },
        { icon: 'mail', title: 'Email', lines: [CONTACT_EMAIL] },
        { icon: 'phone', title: 'Phone', lines: [CONTACT_PHONE] },
      ],
      mapTitle: 'Ouagadougou map',
    },
    notfound: {
      title: 'Page not found',
      text: 'The page you are looking for does not exist or has been moved.',
      back: 'Back to home',
    },
  },
}
