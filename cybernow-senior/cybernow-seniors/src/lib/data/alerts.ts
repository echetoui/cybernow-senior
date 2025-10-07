export interface Alert {
  id: string;
  title: {
    fr: string;
    en: string;
  };
  description: {
    fr: string;
    en: string;
  };
  category: {
    fr: string;
    en: string;
  };
  riskLevel: 'low' | 'medium' | 'high' | 'critical';
  publishedAt: string;
  imageUrl?: string;
}

export const alerts: Alert[] = [
  {
    id: 'faux-revenu-canada',
    title: {
      fr: 'Faux courriels de Revenu Canada',
      en: 'Fake Canada Revenue Agency emails'
    },
    description: {
      fr: 'Des fraudeurs envoient de faux courriels prétendant provenir de Revenu Canada, demandant vos informations personnelles ou bancaires.',
      en: 'Fraudsters are sending fake emails claiming to be from the Canada Revenue Agency, asking for your personal or banking information.'
    },
    category: {
      fr: 'Hameçonnage',
      en: 'Phishing'
    },
    riskLevel: 'critical',
    publishedAt: '2024-01-15',
    imageUrl: '/images/alerts/revenu-canada-fake.jpg'
  },
  {
    id: 'support-technique-microsoft',
    title: {
      fr: 'Faux support technique Microsoft',
      en: 'Fake Microsoft technical support'
    },
    description: {
      fr: 'Des arnaqueurs appellent en prétendant être du support Microsoft pour prendre contrôle de votre ordinateur.',
      en: 'Scammers call claiming to be Microsoft support to take control of your computer.'
    },
    category: {
      fr: 'Support technique',
      en: 'Technical support'
    },
    riskLevel: 'high',
    publishedAt: '2024-01-12',
    imageUrl: '/images/alerts/microsoft-scam.jpg'
  },
  {
    id: 'livraison-colis',
    title: {
      fr: 'Arnaque de livraison de colis',
      en: 'Package delivery scam'
    },
    description: {
      fr: 'Messages texte frauduleux prétendant qu\'un colis ne peut pas être livré et demandant de cliquer sur un lien.',
      en: 'Fraudulent text messages claiming a package cannot be delivered and asking to click on a link.'
    },
    category: {
      fr: 'SMS frauduleux',
      en: 'Fraudulent SMS'
    },
    riskLevel: 'medium',
    publishedAt: '2024-01-10',
    imageUrl: '/images/alerts/package-scam.jpg'
  },
  {
    id: 'concours-facebook',
    title: {
      fr: 'Faux concours sur Facebook',
      en: 'Fake Facebook contests'
    },
    description: {
      fr: 'Des pages Facebook frauduleuses organisent de faux concours pour voler vos données personnelles.',
      en: 'Fraudulent Facebook pages organize fake contests to steal your personal data.'
    },
    category: {
      fr: 'Réseaux sociaux',
      en: 'Social media'
    },
    riskLevel: 'medium',
    publishedAt: '2024-01-08',
    imageUrl: '/images/alerts/facebook-contest.jpg'
  },
  {
    id: 'romance-scam',
    title: {
      fr: 'Arnaque sentimentale en ligne',
      en: 'Online romance scam'
    },
    description: {
      fr: 'Des fraudeurs créent de faux profils sur les sites de rencontre pour soutirer de l\'argent.',
      en: 'Fraudsters create fake profiles on dating sites to extort money.'
    },
    category: {
      fr: 'Arnaque sentimentale',
      en: 'Romance scam'
    },
    riskLevel: 'high',
    publishedAt: '2024-01-05',
    imageUrl: '/images/alerts/romance-scam.jpg'
  }
];