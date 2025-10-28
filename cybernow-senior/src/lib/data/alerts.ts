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
  details?: {
    fr: {
      examples?: string[];
      warningSignes?: string[];
      whatToDo?: string[];
      realExample?: string;
    };
    en: {
      examples?: string[];
      warningSigns?: string[];
      whatToDo?: string[];
      realExample?: string;
    };
  };
}

export const alerts: Alert[] = [
  {
    id: 'faux-revenu-canada-2025',
    title: {
      fr: '🚨 URGENT: Faux courriels de Revenu Canada - Saison des impôts',
      en: '🚨 URGENT: Fake Canada Revenue Agency emails - Tax season'
    },
    description: {
      fr: 'Une vague massive de faux courriels se faisant passer pour Revenu Canada circule actuellement au Québec. Les fraudeurs utilisent le logo officiel et menacent de saisir vos biens si vous ne payez pas immédiatement.',
      en: 'A massive wave of fake emails impersonating the Canada Revenue Agency is currently circulating in Quebec. Fraudsters use the official logo and threaten to seize your property if you don\'t pay immediately.'
    },
    category: {
      fr: 'Hameçonnage gouvernemental',
      en: 'Government phishing'
    },
    riskLevel: 'critical',
    publishedAt: '2025-10-28',
    details: {
      fr: {
        examples: [
          '"Votre remboursement d\'impôt de 1,247.00$ est prêt - Cliquez ici"',
          '"Avis final - Paiement requis sous 48h ou saisie de vos biens"',
          '"Vérification de votre dossier fiscal - Action requise immédiatement"'
        ],
        warningSignes: [
          'Demande urgente de paiement par carte cadeau, virement ou crypto-monnaie',
          'Menaces de saisie, d\'arrestation ou de poursuites immédiates',
          'Lien vers un site web qui ne se termine pas par canada.ca',
          'Fautes d\'orthographe ou grammaire incorrecte',
          'Demande de vos informations bancaires par courriel'
        ],
        whatToDo: [
          'NE CLIQUEZ SUR AUCUN LIEN dans le courriel',
          'N\'appelez PAS les numéros fournis dans le courriel',
          'Appelez Revenu Canada au 1-800-959-7383 (numéro officiel)',
          'Transférez le courriel à phishing@cra-arc.gc.ca',
          'Appelez-nous au 581-705-0399 si vous avez des doutes'
        ],
        realExample: 'Exemple réel reçu: "Bonjour, Votre remboursement d\'impôt de 1,247.00 CAD est prêt. Veuillez cliquer sur ce lien pour confirmer vos informations bancaires : [LIEN FRAUDULEUX]. Vous avez 72 heures. Agence du revenu du Canada"'
      },
      en: {
        examples: [
          '"Your tax refund of $1,247.00 is ready - Click here"',
          '"Final notice - Payment required within 48h or property seizure"',
          '"Verification of your tax file - Action required immediately"'
        ],
        warningSigns: [
          'Urgent payment request by gift card, transfer or cryptocurrency',
          'Threats of seizure, arrest or immediate prosecution',
          'Link to a website that doesn\'t end in canada.ca',
          'Spelling or grammar errors',
          'Request for your banking information by email'
        ],
        whatToDo: [
          'DO NOT CLICK ANY LINK in the email',
          'DO NOT call the numbers provided in the email',
          'Call Canada Revenue at 1-800-959-8281 (official number)',
          'Forward the email to phishing@cra-arc.gc.ca',
          'Call us at 581-705-0399 if you have doubts'
        ],
        realExample: 'Real example received: "Hello, Your tax refund of $1,247.00 CAD is ready. Please click this link to confirm your banking information: [FRAUDULENT LINK]. You have 72 hours. Canada Revenue Agency"'
      }
    }
  },
  {
    id: 'hydro-quebec-faux-facture',
    title: {
      fr: 'Fausse facture Hydro-Québec - Menace de coupure',
      en: 'Fake Hydro-Québec bill - Disconnection threat'
    },
    description: {
      fr: 'Des fraudeurs envoient de faux courriels et SMS prétendant qu\'Hydro-Québec va couper votre électricité dans les prochaines heures si vous ne payez pas immédiatement par téléphone.',
      en: 'Fraudsters send fake emails and texts claiming Hydro-Québec will disconnect your electricity within hours if you don\'t pay immediately by phone.'
    },
    category: {
      fr: 'Fraude de services publics',
      en: 'Utility fraud'
    },
    riskLevel: 'critical',
    publishedAt: '2025-10-26',
    details: {
      fr: {
        examples: [
          '"URGENT: Votre service sera interrompu dans 2 heures - Facture impayée de 387$"',
          '"Dernier avis avant coupure - Appelez le 1-888-XXX-XXXX immédiatement"',
          '"Hydro-Québec: Paiement en retard - Cliquez pour éviter la déconnexion"'
        ],
        warningSignes: [
          'Urgence extrême (coupure dans quelques heures)',
          'Demande de payer par téléphone immédiatement',
          'Numéro de téléphone différent du 1-800-HYDRO (1-800-44376)',
          'SMS ou courriel non sollicité',
          'Pression pour agir vite sans vérification'
        ],
        whatToDo: [
          'Ne cédez PAS à la pression de l\'urgence',
          'Hydro-Québec ne coupe JAMAIS l\'électricité sans avis préalable par la poste',
          'Appelez directement Hydro-Québec au 1-800-HYDRO (1-800-44376)',
          'Vérifiez votre compte en ligne sur hydroquebec.com',
          'Si vous avez payé: contactez votre banque et la police (310-4141)'
        ],
        realExample: 'Message SMS reçu: "HYDRO-QUEBEC: Facture impayée 387.42$. Service sera coupé à 15h aujourd\'hui. Appelez URGENT 1-888-XXX-XXXX pour payer et éviter interruption."'
      },
      en: {
        examples: [
          '"URGENT: Your service will be interrupted in 2 hours - Unpaid bill of $387"',
          '"Final notice before disconnection - Call 1-888-XXX-XXXX immediately"',
          '"Hydro-Québec: Overdue payment - Click to avoid disconnection"'
        ],
        warningSigns: [
          'Extreme urgency (disconnection in hours)',
          'Request to pay by phone immediately',
          'Phone number different from 1-800-HYDRO (1-800-44376)',
          'Unsolicited SMS or email',
          'Pressure to act quickly without verification'
        ],
        whatToDo: [
          'DO NOT give in to the pressure of urgency',
          'Hydro-Québec NEVER disconnects electricity without prior notice by mail',
          'Call Hydro-Québec directly at 1-800-HYDRO (1-800-44376)',
          'Check your account online at hydroquebec.com',
          'If you paid: contact your bank and police (310-4141)'
        ],
        realExample: 'SMS received: "HYDRO-QUEBEC: Unpaid bill $387.42. Service will be cut at 3pm today. Call URGENT 1-888-XXX-XXXX to pay and avoid interruption."'
      }
    }
  },
  {
    id: 'faux-support-bell',
    title: {
      fr: 'Appels frauduleux du "Support technique Bell"',
      en: 'Fraudulent calls from "Bell Technical Support"'
    },
    description: {
      fr: 'Des arnaqueurs appellent en se faisant passer pour le support technique de Bell, prétendant que votre internet sera coupé ou que votre routeur a un problème urgent nécessitant un accès à distance.',
      en: 'Scammers call pretending to be Bell technical support, claiming your internet will be cut off or your router has an urgent problem requiring remote access.'
    },
    category: {
      fr: 'Faux support technique',
      en: 'Fake technical support'
    },
    riskLevel: 'high',
    publishedAt: '2025-10-24',
    details: {
      fr: {
        examples: [
          '"Bonjour, je suis Marc de Bell Canada. Nous avons détecté un problème avec votre connexion internet"',
          '"Votre routeur envoie des signaux d\'erreur. Je dois installer un logiciel pour le réparer"',
          '"Votre service sera interrompu dans 2 heures à moins que nous fassions une mise à jour"'
        ],
        warningSignes: [
          'Appel non sollicité du "support technique"',
          'Demande d\'installer un logiciel ou d\'accéder à distance (TeamViewer, AnyDesk)',
          'Urgence soudaine nécessitant une action immédiate',
          'Demande de paiement par carte cadeau pour "réparation"',
          'Accent étranger malgré prétendre être au Québec'
        ],
        whatToDo: [
          'Raccrochez immédiatement',
          'Bell ne vous appellera JAMAIS de façon non sollicitée',
          'Ne téléchargez AUCUN logiciel demandé par téléphone',
          'Ne donnez JAMAIS accès à distance à votre ordinateur',
          'Si doute, appelez Bell au 1-800-667-0123 (numéro officiel)'
        ],
        realExample: 'Appel reçu: "Bonjour Madame Tremblay, je suis technicien chez Bell. Votre routeur a un virus qui affecte tous vos voisins. Je dois accéder à votre ordinateur pour le réparer gratuitement. Pouvez-vous aller sur votre ordinateur maintenant?"'
      },
      en: {
        examples: [
          '"Hello, I\'m Marc from Bell Canada. We detected a problem with your internet connection"',
          '"Your router is sending error signals. I need to install software to fix it"',
          '"Your service will be interrupted in 2 hours unless we do an update"'
        ],
        warningSigns: [
          'Unsolicited call from "technical support"',
          'Request to install software or remote access (TeamViewer, AnyDesk)',
          'Sudden urgency requiring immediate action',
          'Request for payment by gift card for "repair"',
          'Foreign accent despite claiming to be in Quebec'
        ],
        whatToDo: [
          'Hang up immediately',
          'Bell will NEVER call you unsolicited',
          'Do NOT download ANY software requested by phone',
          'NEVER give remote access to your computer',
          'If in doubt, call Bell at 1-800-667-0123 (official number)'
        ],
        realExample: 'Call received: "Hello Mrs. Tremblay, I am a technician at Bell. Your router has a virus affecting all your neighbors. I need to access your computer to fix it for free. Can you go to your computer now?"'
      }
    }
  },
  {
    id: 'livraison-postes-canada',
    title: {
      fr: 'SMS frauduleux de Postes Canada - Colis en attente',
      en: 'Fraudulent Canada Post SMS - Package waiting'
    },
    description: {
      fr: 'Vague de SMS prétendant qu\'un colis de Postes Canada est en attente et nécessite le paiement de frais de douane ou de livraison via un lien. Le lien mène à un faux site qui vole vos informations bancaires.',
      en: 'Wave of text messages claiming a Canada Post package is waiting and requires payment of customs or delivery fees via a link. The link leads to a fake site that steals your banking information.'
    },
    category: {
      fr: 'SMS frauduleux',
      en: 'Fraudulent SMS'
    },
    riskLevel: 'high',
    publishedAt: '2025-10-22',
    details: {
      fr: {
        examples: [
          '"Postes Canada: Votre colis est en attente. Frais de 3.85$ requis: [lien]"',
          '"Livraison impossible. Mettez à jour votre adresse: [lien]"',
          '"Votre colis sera retourné dans 48h si non réclamé: [lien]"'
        ],
        warningSignes: [
          'SMS non sollicité alors que vous n\'attendez pas de colis',
          'Lien raccourci (bit.ly, tinyurl) ou bizarre',
          'Fautes d\'orthographe ("Post Canada" au lieu de "Postes Canada")',
          'Urgence pour payer de petits frais (moins de 5$)',
          'Site demandant carte de crédit pour "frais de 3$"'
        ],
        whatToDo: [
          'N\'ouvrez JAMAIS les liens dans ces SMS',
          'Postes Canada ne demande JAMAIS de payer via SMS',
          'Vérifiez vos livraisons sur canadapost.ca directement',
          'Si vous attendez un colis: allez au bureau de poste avec votre avis',
          'Supprimez le SMS et bloquez le numéro'
        ],
        realExample: 'SMS reçu: "Post Canada: Votre colis #CA7362849 attend. Frais douane 3.50$. Payez ici avant le 28/10: https://[lien-suspect]/ca-post-delivry"'
      },
      en: {
        examples: [
          '"Canada Post: Your package is waiting. Fee of $3.85 required: [link]"',
          '"Delivery impossible. Update your address: [link]"',
          '"Your package will be returned in 48h if not claimed: [link]"'
        ],
        warningSigns: [
          'Unsolicited SMS when you\'re not expecting a package',
          'Shortened link (bit.ly, tinyurl) or strange',
          'Spelling errors',
          'Urgency to pay small fees (less than $5)',
          'Site asking for credit card for "$3 fee"'
        ],
        whatToDo: [
          'NEVER open links in these texts',
          'Canada Post NEVER asks to pay via SMS',
          'Check your deliveries on canadapost.ca directly',
          'If expecting a package: go to post office with your notice',
          'Delete the SMS and block the number'
        ],
        realExample: 'SMS received: "Canada Post: Your package #CA7362849 is waiting. Customs fee $3.50. Pay here before 10/28: https://[suspicious-link]/ca-post-delivry"'
      }
    }
  },
  {
    id: 'grands-parents-urgence',
    title: {
      fr: 'Arnaque "Grand-parent en urgence" - Demande d\'argent urgente',
      en: '"Grandparent emergency" scam - Urgent money request'
    },
    description: {
      fr: 'Un fraudeur appelle en prétendant être votre petit-fils ou petite-fille en détresse (accident, prison, hôpital) et demande de l\'argent immédiatement sans en parler aux parents. Très convaincant et émotionnellement manipulateur.',
      en: 'A fraudster calls pretending to be your grandson or granddaughter in distress (accident, jail, hospital) and asks for money immediately without telling the parents. Very convincing and emotionally manipulative.'
    },
    category: {
      fr: 'Fraude émotionnelle',
      en: 'Emotional fraud'
    },
    riskLevel: 'critical',
    publishedAt: '2025-10-20',
    details: {
      fr: {
        examples: [
          '"Grand-papa c\'est moi... j\'ai eu un accident... j\'ai besoin de 5000$ pour sortir de prison..."',
          '"Mamie ne le dis pas à maman... je suis à l\'hôpital à Toronto... je ne peux pas utiliser ma carte..."',
          '"C\'est ton petit-fils... j\'ai un avocat ici qui va t\'expliquer... tu ne dois en parler à personne..."'
        ],
        warningSignes: [
          'Appel inattendu d\'un petit-enfant "en détresse"',
          'Demande de NE PAS contacter les parents',
          'Urgence extrême nécessitant argent immédiat',
          'Demande d\'envoyer argent par Western Union, Bitcoin ou carte cadeau',
          'Avocat ou "officier" se joint à l\'appel pour convaincre',
          'Voix différente ou excuse ("j\'ai le nez cassé", "j\'ai pleuré")'
        ],
        whatToDo: [
          'RACCROCHEZ et appelez directement votre petit-enfant sur SON numéro habituel',
          'Contactez les parents pour vérifier',
          'Posez des questions que seul votre vrai petit-enfant connaîtrait',
          'N\'envoyez JAMAIS d\'argent sans vérification',
          'Les vrais policiers ne demandent JAMAIS d\'argent par téléphone'
        ],
        realExample: 'Appel reçu: "Allô grand-papa? *sanglots* C\'est Antoine... j\'ai eu un accident à Montréal... j\'ai frappé une voiture... la police dit que je dois payer 8000$ sinon je vais en prison... s\'il te plaît ne le dis pas à papa, il serait tellement déçu... peux-tu aller acheter des cartes cadeaux Google Play? Un avocat va t\'appeler pour t\'expliquer..."'
      },
      en: {
        examples: [
          '"Grandpa it\'s me... I had an accident... I need $5000 to get out of jail..."',
          '"Grandma don\'t tell mom... I\'m in the hospital in Toronto... I can\'t use my card..."',
          '"It\'s your grandson... I have a lawyer here who will explain... you must not tell anyone..."'
        ],
        warningSigns: [
          'Unexpected call from a "distressed" grandchild',
          'Request to NOT contact the parents',
          'Extreme urgency requiring immediate money',
          'Request to send money via Western Union, Bitcoin or gift cards',
          'Lawyer or "officer" joins the call to convince',
          'Different voice or excuse ("broken nose", "been crying")'
        ],
        whatToDo: [
          'HANG UP and call your grandchild directly on THEIR usual number',
          'Contact the parents to verify',
          'Ask questions only your real grandchild would know',
          'NEVER send money without verification',
          'Real police NEVER ask for money by phone'
        ],
        realExample: 'Call received: "Hello grandpa? *sobs* It\'s Antoine... I had an accident in Montreal... I hit a car... the police say I have to pay $8000 or I\'m going to jail... please don\'t tell dad, he would be so disappointed... can you go buy Google Play gift cards? A lawyer will call you to explain..."'
      }
    }
  },
  {
    id: 'crypto-investissement-frauduleux',
    title: {
      fr: 'Investissement crypto "garanti" - Plateforme frauduleuse',
      en: '"Guaranteed" crypto investment - Fraudulent platform'
    },
    description: {
      fr: 'Des publicités Facebook/Instagram promettent des rendements garantis de 30-50% en investissant dans les cryptomonnaies. Fausses plateformes très professionnelles qui volent tous vos investissements.',
      en: 'Facebook/Instagram ads promise guaranteed returns of 30-50% by investing in cryptocurrencies. Very professional-looking fake platforms that steal all your investments.'
    },
    category: {
      fr: 'Fraude d\'investissement',
      en: 'Investment fraud'
    },
    riskLevel: 'high',
    publishedAt: '2025-10-18',
    details: {
      fr: {
        examples: [
          '"Investissez 500$ et gagnez 2000$ en 30 jours - Garanti par Bitcoin"',
          '"Jean Tremblay de Québec a gagné 15,000$ en 3 semaines avec notre système"',
          '"Promo exclusive: Doublez votre investissement - Places limitées"'
        ],
        warningSignes: [
          'Promesses de rendements irréalistes (plus de 10% par mois)',
          'Garantie de profits "sans risque"',
          'Urgence pour investir ("offre limitée", "places restantes")',
          'Site récent ou sans historique vérifiable',
          'Témoignages impossibles à vérifier',
          'Demande de garder le secret ou de recruter amis/famille'
        ],
        whatToDo: [
          'NE JAMAIS investir sous pression ou urgence',
          'Aucun investissement n\'est garanti sans risque',
          'Vérifiez si la plateforme est enregistrée auprès de l\'AMF (Autorité des marchés financiers)',
          'Consultez un conseiller financier INDÉPENDANT',
          'Si arnaqué: contactez police (310-4141) et AMF (1-877-525-0337)'
        ],
        realExample: 'Pub Facebook: "🔥 OFFRE EXCLUSIVE QUÉBEC 🔥 Marie-Claude de Laval a transformé 1000$ en 8500$ en seulement 6 semaines! Bitcoin Revolution garantit 35-45% de profits par mois. Investment minimum: 250$. PROMO: Les 50 premiers investisseurs reçoivent BONUS de 100$! Cliquez pour commencer: [lien]"'
      },
      en: {
        examples: [
          '"Invest $500 and earn $2000 in 30 days - Guaranteed by Bitcoin"',
          '"Jean Tremblay from Quebec earned $15,000 in 3 weeks with our system"',
          '"Exclusive promo: Double your investment - Limited spots"'
        ],
        warningSigns: [
          'Promises of unrealistic returns (more than 10% per month)',
          'Guarantee of "risk-free" profits',
          'Urgency to invest ("limited offer", "spots remaining")',
          'Recent site or no verifiable history',
          'Unverifiable testimonials',
          'Request to keep it secret or recruit friends/family'
        ],
        whatToDo: [
          'NEVER invest under pressure or urgency',
          'No investment is guaranteed without risk',
          'Check if the platform is registered with AMF (Financial Markets Authority)',
          'Consult an INDEPENDENT financial advisor',
          'If scammed: contact police (310-4141) and AMF (1-877-525-0337)'
        ],
        realExample: 'Facebook ad: "🔥 QUEBEC EXCLUSIVE OFFER 🔥 Marie-Claude from Laval turned $1000 into $8500 in just 6 weeks! Bitcoin Revolution guarantees 35-45% profits per month. Minimum investment: $250. PROMO: First 50 investors receive $100 BONUS! Click to start: [link]"'
      }
    }
  },
  {
    id: 'fausse-loterie-facebook',
    title: {
      fr: 'Faux concours Facebook/Instagram - "Vous avez gagné!"',
      en: 'Fake Facebook/Instagram contest - "You won!"'
    },
    description: {
      fr: 'Des pages se faisant passer pour IGA, Costco ou grandes marques annoncent que vous avez gagné un prix. Elles demandent vos informations personnelles et paiement de "frais de livraison".',
      en: 'Pages impersonating IGA, Costco or major brands announce you won a prize. They ask for your personal information and payment of "delivery fees".'
    },
    category: {
      fr: 'Réseaux sociaux frauduleux',
      en: 'Fraudulent social media'
    },
    riskLevel: 'medium',
    publishedAt: '2025-10-15',
    details: {
      fr: {
        examples: [
          '"Félicitations! Vous avez gagné un BBQ Weber d\'une valeur de 899$! Cliquez ici"',
          '"IGA vous offre 250$ d\'épicerie gratuite! Partagez et réclamez"',
          '"Dernière chance! Costco liquide ses inventaires - Cadeau gratuit pour vous"'
        ],
        warningSignes: [
          'Vous n\'avez jamais participé au concours',
          'La page Facebook/Instagram est récente (moins de 6 mois)',
          'Peu de publications et commentaires désactivés',
          'Demande de partager pour "débloquer" le prix',
          'Site de formulaire externe (pas sur facebook.com)',
          'Demande de payer "frais de livraison" de 4.99$'
        ],
        whatToDo: [
          'Vérifiez la page officielle de la marque (crochet bleu vérifié)',
          'Allez directement sur le site web officiel de la compagnie',
          'Les vrais concours ne demandent JAMAIS de payer',
          'Signalez la fausse page à Facebook/Instagram',
          'Ne donnez JAMAIS vos informations bancaires'
        ],
        realExample: 'Post Facebook: "🎉 FÉLICITATIONS! 🎉 Vous êtes parmi les 100 chanceux gagnants! IGA Québec célèbre son 100e anniversaire! Réclamez votre carte-cadeau de 250$ ici: [lien]. Vous avez 24h! IMPORTANT: Partagez ce post et invitez 10 amis pour débloquer votre prix!"'
      },
      en: {
        examples: [
          '"Congratulations! You won a Weber BBQ worth $899! Click here"',
          '"IGA offers you $250 in free groceries! Share and claim"',
          '"Last chance! Costco liquidating inventory - Free gift for you"'
        ],
        warningSigns: [
          'You never entered the contest',
          'The Facebook/Instagram page is recent (less than 6 months)',
          'Few posts and comments disabled',
          'Request to share to "unlock" the prize',
          'External form site (not on facebook.com)',
          'Request to pay "delivery fees" of $4.99'
        ],
        whatToDo: [
          'Check the official brand page (blue verified checkmark)',
          'Go directly to the company\'s official website',
          'Real contests NEVER ask for payment',
          'Report the fake page to Facebook/Instagram',
          'NEVER give your banking information'
        ],
        realExample: 'Facebook post: "🎉 CONGRATULATIONS! 🎉 You are among the 100 lucky winners! IGA Quebec celebrates its 100th anniversary! Claim your $250 gift card here: [link]. You have 24h! IMPORTANT: Share this post and invite 10 friends to unlock your prize!"'
      }
    }
  },
  {
    id: 'arnaque-romantique-2025',
    title: {
      fr: 'Arnaque amoureuse en ligne - Faux profils romantiques',
      en: 'Online romance scam - Fake romantic profiles'
    },
    description: {
      fr: 'Des fraudeurs créent de faux profils sur sites de rencontre (Facebook, POF, Match) pour établir une relation amoureuse, puis demander de l\'argent pour urgence médicale, voyage ou investissement. Très patient et manipulateur émotionnellement.',
      en: 'Fraudsters create fake profiles on dating sites (Facebook, POF, Match) to establish a romantic relationship, then ask for money for medical emergency, travel or investment. Very patient and emotionally manipulative.'
    },
    category: {
      fr: 'Fraude romantique',
      en: 'Romance scam'
    },
    riskLevel: 'high',
    publishedAt: '2025-10-14',
    details: {
      fr: {
        examples: [
          '"Je suis ingénieur pétrolier en mer du Nord, mais je veux te rencontrer..."',
          '"Ma fille est malade à l\'hôpital, j\'ai besoin de 3000$ pour l\'opération..."',
          '"J\'ai trouvé une opportunité d\'investissement pour nous deux, as-tu 10,000$ à prêter?"'
        ],
        warningSignes: [
          'Profil avec photos de mannequin ou très attractives',
          'Déclare son amour très rapidement (quelques jours/semaines)',
          'Toujours une raison pour ne pas se rencontrer en personne',
          'Travaille à l\'étranger (militaire, ingénieur, médecin)',
          'Demande d\'argent après avoir établi confiance',
          'Veut communiquer hors plateforme rapidement (WhatsApp, email personnel)'
        ],
        whatToDo: [
          'Ne donnez JAMAIS d\'argent à quelqu\'un rencontré en ligne',
          'Faites une recherche inversée des photos (Google Image)',
          'Soyez méfiant si la personne refuse appel vidéo',
          'Les vraies relations ne commencent pas par demande d\'argent',
          'Si arnaqué: contactez police (310-4141) et Centre antifraude (1-888-495-8501)'
        ],
        realExample: 'Message reçu après 3 semaines: "Ma chérie, je suis tellement content de t\'avoir rencontrée. Je compte les jours avant notre rencontre. MAUVAISE NOUVELLE: Ma fille Emma a eu un accident de voiture à Londres. L\'hôpital demande 5000$ avant de commencer les soins. Je suis bloqué sur la plateforme pétrolière sans accès à ma banque. Peux-tu m\'aider? Je te rembourse dès mon retour la semaine prochaine. Je t\'aime. -David"'
      },
      en: {
        examples: [
          '"I\'m a petroleum engineer in the North Sea, but I want to meet you..."',
          '"My daughter is sick in hospital, I need $3000 for the operation..."',
          '"I found an investment opportunity for both of us, do you have $10,000 to lend?"'
        ],
        warningSigns: [
          'Profile with model or very attractive photos',
          'Declares love very quickly (few days/weeks)',
          'Always a reason not to meet in person',
          'Works abroad (military, engineer, doctor)',
          'Asks for money after establishing trust',
          'Wants to communicate off-platform quickly (WhatsApp, personal email)'
        ],
        whatToDo: [
          'NEVER give money to someone met online',
          'Do a reverse image search (Google Image)',
          'Be suspicious if person refuses video call',
          'Real relationships don\'t start with money requests',
          'If scammed: contact police (310-4141) and Anti-Fraud Centre (1-888-495-8501)'
        ],
        realExample: 'Message received after 3 weeks: "My dear, I am so happy to have met you. I count the days until we meet. BAD NEWS: My daughter Emma had a car accident in London. The hospital asks for $5000 before starting treatment. I am stuck on the oil platform without access to my bank. Can you help me? I will reimburse you as soon as I return next week. I love you. -David"'
      }
    }
  },
  {
    id: 'faux-support-microsoft',
    title: {
      fr: 'Faux support technique Microsoft - Pop-up de virus',
      en: 'Fake Microsoft technical support - Virus pop-up'
    },
    description: {
      fr: 'Un pop-up bloque votre navigateur affirmant que votre ordinateur est infecté. Un numéro 1-800 vous demande d\'appeler "Microsoft Support". Ils installent un logiciel et facturent 300-500$ pour "réparation".',
      en: 'A pop-up blocks your browser claiming your computer is infected. A 1-800 number asks you to call "Microsoft Support". They install software and charge $300-500 for "repair".'
    },
    category: {
      fr: 'Faux support technique',
      en: 'Fake technical support'
    },
    riskLevel: 'high',
    publishedAt: '2025-10-12',
    details: {
      fr: {
        examples: [
          '"ALERTE VIRUS! Votre ordinateur est bloqué. Appelez Microsoft: 1-800-XXX-XXXX"',
          '"Windows Defender: 5 virus détectés. N\'éteignez pas votre ordinateur. Appelez immédiatement"',
          '"Votre licence Windows a expiré. Appelez pour réactiver: 1-888-XXX-XXXX"'
        ],
        warningSignes: [
          'Pop-up qui bloque le navigateur avec alarmes sonores',
          'Numéro de téléphone affiché pour "support"',
          'Impossible de fermer la fenêtre normalement',
          'Message en anglais même si vous êtes au Québec',
          'Compte à rebours "vous avez 5 minutes"',
          'Logo Microsoft mais adresse web bizarre'
        ],
        whatToDo: [
          'N\'APPELEZ PAS le numéro affiché',
          'Fermez le navigateur avec Task Manager/Gestionnaire des tâches (Ctrl+Alt+Suppr)',
          'Sur Mac: Forcer à quitter (Cmd+Option+Esc)',
          'Microsoft ne contacte JAMAIS les utilisateurs de cette façon',
          'Si vous avez appelé et donné accès: éteignez internet, contactez-nous au 581-705-0399'
        ],
        realExample: 'Pop-up reçu: "⚠️ ERREUR CRITIQUE WINDOWS ⚠️ Votre ordinateur a été bloqué pour des raisons de sécurité. VIRUS DÉTECTÉ: Trojan Zeus.ZbotR.Gen. Vos données personnelles sont à risque. Ne PAS éteindre ou redémarrer. Appelez le Support Microsoft immédiatement: 1-855-XXX-XXXX (GRATUIT) Code d\'erreur: 0x80070005"'
      },
      en: {
        examples: [
          '"VIRUS ALERT! Your computer is locked. Call Microsoft: 1-800-XXX-XXXX"',
          '"Windows Defender: 5 viruses detected. Don\'t shut down your computer. Call immediately"',
          '"Your Windows license has expired. Call to reactivate: 1-888-XXX-XXXX"'
        ],
        warningSigns: [
          'Pop-up that blocks browser with sound alarms',
          'Phone number displayed for "support"',
          'Impossible to close window normally',
          'Countdown timer "you have 5 minutes"',
          'Microsoft logo but weird web address'
        ],
        whatToDo: [
          'DO NOT CALL the number displayed',
          'Close browser with Task Manager (Ctrl+Alt+Delete)',
          'On Mac: Force quit (Cmd+Option+Esc)',
          'Microsoft NEVER contacts users this way',
          'If you called and gave access: disconnect internet, contact us at 581-705-0399'
        ],
        realExample: 'Pop-up received: "⚠️ CRITICAL WINDOWS ERROR ⚠️ Your computer has been locked for security reasons. VIRUS DETECTED: Trojan Zeus.ZbotR.Gen. Your personal data is at risk. DO NOT shut down or restart. Call Microsoft Support immediately: 1-855-XXX-XXXX (FREE) Error code: 0x80070005"'
      }
    }
  },
  {
    id: 'piratage-whatsapp',
    title: {
      fr: 'Piratage de compte WhatsApp/Messenger - Code de vérification',
      en: 'WhatsApp/Messenger account hacking - Verification code'
    },
    description: {
      fr: 'Un ami/contact vous envoie un message demandant le code à 6 chiffres que vous venez de recevoir par SMS. C\'est une arnaque pour pirater votre compte et arnaquer vos contacts en votre nom.',
      en: 'A friend/contact sends you a message asking for the 6-digit code you just received by SMS. It\'s a scam to hack your account and scam your contacts in your name.'
    },
    category: {
      fr: 'Piratage de compte',
      en: 'Account hacking'
    },
    riskLevel: 'critical',
    publishedAt: '2025-10-10',
    details: {
      fr: {
        examples: [
          '"Salut! Je t\'ai envoyé un code par erreur. Peux-tu me le renvoyer?"',
          '"WhatsApp a besoin de vérification. Envoie-moi le code que tu viens de recevoir"',
          '"J\'essaie de t\'ajouter à un groupe, renvoie-moi le code de 6 chiffres svp"'
        ],
        warningSignes: [
          'Demande inattendue de code de vérification',
          'Message d\'un contact qui semble bizarre ou urgent',
          'Vous recevez un code SMS alors que vous n\'avez rien demandé',
          'Le contact insiste et met de la pression',
          'Message suivi rapidement par un appel téléphonique'
        ],
        whatToDo: [
          'Ne JAMAIS partager un code de vérification avec personne',
          'Ces codes sont UNIQUEMENT pour vous connecter',
          'Contactez votre ami par téléphone (pas par message)',
          'Si vous avez partagé le code: changez immédiatement votre mot de passe',
          'Activez la vérification en deux étapes dans WhatsApp',
          'Prévenez vos contacts que votre compte est compromis'
        ],
        realExample: 'Message WhatsApp reçu de "Votre ami Pierre": "Salut! Désolé de te déranger. WhatsApp m\'a déconnecté et je dois vérifier mon compte. Je t\'ai envoyé un code par erreur. Peux-tu me le transférer? C\'est urgent, j\'attends un message important de ma banque. Merci! 🙏"'
      },
      en: {
        examples: [
          '"Hi! I sent you a code by mistake. Can you send it back?"',
          '"WhatsApp needs verification. Send me the code you just received"',
          '"I\'m trying to add you to a group, send me the 6-digit code please"'
        ],
        warningSigns: [
          'Unexpected request for verification code',
          'Message from a contact that seems strange or urgent',
          'You receive an SMS code when you didn\'t request anything',
          'The contact insists and pressures you',
          'Message quickly followed by a phone call'
        ],
        whatToDo: [
          'NEVER share a verification code with anyone',
          'These codes are ONLY for you to log in',
          'Contact your friend by phone (not by message)',
          'If you shared the code: immediately change your password',
          'Enable two-step verification in WhatsApp',
          'Warn your contacts that your account is compromised'
        ],
        realExample: 'WhatsApp message received from "Your friend Pierre": "Hi! Sorry to bother you. WhatsApp disconnected me and I need to verify my account. I sent you a code by mistake. Can you forward it to me? It\'s urgent, I\'m waiting for an important message from my bank. Thanks! 🙏"'
      }
    }
  },
  {
    id: 'fausse-charite-2025',
    title: {
      fr: 'Fausse charité après catastrophe - Don frauduleux',
      en: 'Fake charity after disaster - Fraudulent donation'
    },
    description: {
      fr: 'Suite à une catastrophe (incendie, inondation, guerre), des fraudeurs créent de faux organismes de charité pour solliciter des dons. Argent jamais remis aux victimes.',
      en: 'Following a disaster (fire, flood, war), fraudsters create fake charities to solicit donations. Money never given to victims.'
    },
    category: {
      fr: 'Fraude de charité',
      en: 'Charity fraud'
    },
    riskLevel: 'medium',
    publishedAt: '2025-10-08',
    details: {
      fr: {
        examples: [
          '"Aidez les victimes des feux de forêt au Québec - Donnez maintenant"',
          '"Urgence humanitaire - Les enfants d\'Ukraine ont besoin de vous"',
          '"Croix-Rouge Québec - Don urgent pour inondations en Montérégie"'
        ],
        warningSignes: [
          'Sollicitation par téléphone, porte-à-porte ou courriel non sollicité',
          'Nom similaire à un organisme connu (Croix-Rouge vs Croix-Rouge Québec)',
          'Pression pour donner immédiatement',
          'Demande de paiement en argent comptant, carte cadeau ou virement',
          'Pas de numéro d\'enregistrement d\'organisme de bienfaisance',
          'Site web récent ou absence de site officiel'
        ],
        whatToDo: [
          'Vérifiez l\'organisme sur le registre de l\'ARC: canada.ca/charities-listings',
          'Cherchez le numéro d\'enregistrement de charité (format: 123456789RR0001)',
          'Donnez directement via le site officiel de l\'organisme',
          'Méfiez-vous des sollicitations émotionnelles urgentes',
          'Les vrais organismes acceptent que vous preniez le temps de réfléchir',
          'Préférez les organismes établis (Croix-Rouge, Centraide, etc.)'
        ],
        realExample: 'Appel reçu: "Bonjour Madame Gagnon, je vous appelle de la Fondation d\'Aide aux Sinistrés du Québec. Vous avez sûrement vu les terribles inondations à Gatineau? 50 familles ont tout perdu. Nous collectons 100,000$ aujourd\'hui pour leur acheter nourriture et vêtements. Pouvez-vous contribuer 50$ ou 100$ par carte de crédit maintenant? Chaque minute compte pour ces familles."'
      },
      en: {
        examples: [
          '"Help the victims of Quebec forest fires - Donate now"',
          '"Humanitarian emergency - Ukrainian children need you"',
          '"Red Cross Quebec - Urgent donation for Montérégie floods"'
        ],
        warningSigns: [
          'Solicitation by phone, door-to-door or unsolicited email',
          'Name similar to a known organization (Red Cross vs Quebec Red Cross)',
          'Pressure to donate immediately',
          'Request for payment in cash, gift card or wire transfer',
          'No charitable organization registration number',
          'Recent website or absence of official site'
        ],
        whatToDo: [
          'Verify the organization on CRA registry: canada.ca/charities-listings',
          'Look for charity registration number (format: 123456789RR0001)',
          'Donate directly via the organization\'s official website',
          'Be wary of urgent emotional solicitations',
          'Real organizations accept that you take time to think',
          'Prefer established organizations (Red Cross, United Way, etc.)'
        ],
        realExample: 'Call received: "Hello Mrs. Gagnon, I\'m calling from the Quebec Disaster Relief Foundation. You must have seen the terrible floods in Gatineau? 50 families lost everything. We are collecting $100,000 today to buy them food and clothing. Can you contribute $50 or $100 by credit card now? Every minute counts for these families."'
      }
    }
  },
  {
    id: 'emploi-travail-maison',
    title: {
      fr: 'Offre d\'emploi frauduleuse - Travail à domicile facile',
      en: 'Fraudulent job offer - Easy work from home'
    },
    description: {
      fr: 'Annonces prometant un revenu élevé pour travail simple à domicile (assembler des produits, traiter des enveloppes). Demande un paiement initial pour "matériel" ou "formation". Aucun paiement reçu après.',
      en: 'Ads promising high income for simple work at home (assemble products, process envelopes). Requires upfront payment for "materials" or "training". No payment received after.'
    },
    category: {
      fr: 'Fraude d\'emploi',
      en: 'Job fraud'
    },
    riskLevel: 'medium',
    publishedAt: '2025-10-06',
    details: {
      fr: {
        examples: [
          '"Gagnez 3000$ par mois en assemblant des bijoux chez vous - Aucune expérience requise"',
          '"Traitement d\'enveloppes: 5$ par enveloppe - Travaillez à votre rythme"',
          '"Devenez évaluateur mystère - 200$ par visite au restaurant"'
        ],
        warningSignes: [
          'Promesse de revenu élevé pour travail simple',
          'Aucune expérience ou qualification requise',
          'Demande de payer pour "kit de démarrage", "formation" ou "matériel"',
          'Annonce vague sans nom d\'entreprise claire',
          'Entrevue immédiate sans vérification',
          'Paiement par chèque suivi de demande de remboursement partiel'
        ],
        whatToDo: [
          'Ne payez JAMAIS pour obtenir un emploi',
          'Les vrais employeurs ne demandent pas d\'argent initial',
          'Vérifiez l\'entreprise sur Google et registre des entreprises du Québec',
          'Méfiez-vous des promesses de revenus irréalistes',
          'Consultez les avis sur Indeed, Glassdoor',
          'Si arnaqué: contactez police (310-4141) et Centre antifraude (1-888-495-8501)'
        ],
        realExample: 'Annonce Facebook: "💼 EMPLOI À DOMICILE 💼 Vous aimez les bijoux? Nous cherchons 20 personnes pour assembler des colliers chez eux. 25$ par collier complété. Travaillez quand vous voulez! Revenu potentiel: 2500-4000$/mois. Matériel fourni. Frais uniques de 89$ pour recevoir votre kit de démarrage professionnel (perles, outils, instructions). Paiement par chèque chaque vendredi. Places limitées! Cliquez pour postuler!"'
      },
      en: {
        examples: [
          '"Earn $3000 per month assembling jewelry at home - No experience required"',
          '"Envelope processing: $5 per envelope - Work at your pace"',
          '"Become mystery shopper - $200 per restaurant visit"'
        ],
        warningSigns: [
          'Promise of high income for simple work',
          'No experience or qualifications required',
          'Request to pay for "starter kit", "training" or "materials"',
          'Vague ad without clear company name',
          'Immediate interview without verification',
          'Payment by check followed by request for partial refund'
        ],
        whatToDo: [
          'NEVER pay to get a job',
          'Real employers don\'t ask for upfront money',
          'Check the company on Google and Quebec business registry',
          'Be wary of unrealistic income promises',
          'Check reviews on Indeed, Glassdoor',
          'If scammed: contact police (310-4141) and Anti-Fraud Centre (1-888-495-8501)'
        ],
        realExample: 'Facebook ad: "💼 WORK FROM HOME 💼 Do you like jewelry? We are looking for 20 people to assemble necklaces at home. $25 per completed necklace. Work when you want! Potential income: $2500-4000/month. Materials provided. One-time fee of $89 to receive your professional starter kit (beads, tools, instructions). Payment by check every Friday. Limited spots! Click to apply!"'
      }
    }
  },
  {
    id: 'location-logement-frauduleuse',
    title: {
      fr: 'Arnaque de location - Appartement trop beau pour être vrai',
      en: 'Rental scam - Apartment too good to be true'
    },
    description: {
      fr: 'Fausses annonces d\'appartements à louer sur Kijiji/Facebook avec prix très bas. Le "propriétaire" demande un dépôt avant visite, prétendant être à l\'étranger. Appartement n\'existe pas ou appartient à quelqu\'un d\'autre.',
      en: 'Fake apartment rental ads on Kijiji/Facebook with very low prices. The "landlord" asks for deposit before viewing, claiming to be abroad. Apartment doesn\'t exist or belongs to someone else.'
    },
    category: {
      fr: 'Fraude immobilière',
      en: 'Real estate fraud'
    },
    riskLevel: 'high',
    publishedAt: '2025-10-04',
    details: {
      fr: {
        examples: [
          '"Magnifique 4½ à Québec - 850$/mois tout inclus - Disponible immédiatement"',
          '"Condo neuf au centre-ville de Montréal - 1200$/mois - Propriétaire à l\'étranger"',
          '"Maison 3 chambres à Laval - 1500$/mois - Photos virtuelles disponibles"'
        ],
        warningSignes: [
          'Prix nettement inférieur au marché local',
          'Propriétaire prétend être à l\'étranger (mutation, urgence familiale)',
          'Demande de dépôt ou premier mois avant visite',
          'Refuse de montrer le logement en personne',
          'Propose visite virtuelle uniquement',
          'Photos volées d\'autres annonces ou sites immobiliers',
          'Communication uniquement par email ou texto (pas de rencontre)'
        ],
        whatToDo: [
          'Ne payez JAMAIS avant d\'avoir visité et vérifié le logement',
          'Visitez toujours le logement EN PERSONNE',
          'Vérifiez l\'identité du propriétaire (rôle d\'évaluation foncière)',
          'Recherche inversée des photos (Google Image)',
          'Méfiez-vous des prix trop beaux',
          'Si arnaqué: contactez police locale et Centre antifraude (1-888-495-8501)'
        ],
        realExample: 'Message reçu: "Bonjour, merci de votre intérêt pour mon 4½ rue Saint-Jean. Je suis actuellement en France pour raison familiale urgente. L\'appartement est vacant et prêt pour 01/11. Loyer: 900$/mois (très bon prix car j\'ai besoin de quelqu\'un de confiance rapidement). Je peux vous envoyer plus de photos. Pour réserver, envoyez-moi le premier mois par virement Interac (900$) et je vous poste les clés par FedEx. Vous pourrez emménager dès réception. Je reviens au Québec en décembre pour signer le bail. Êtes-vous intéressé? -Michel Beaumont"'
      },
      en: {
        examples: [
          '"Beautiful 4½ in Quebec City - $850/month all included - Available immediately"',
          '"New condo downtown Montreal - $1200/month - Owner abroad"',
          '"3 bedroom house in Laval - $1500/month - Virtual photos available"'
        ],
        warningSigns: [
          'Price significantly below local market',
          'Owner claims to be abroad (job transfer, family emergency)',
          'Asks for deposit or first month before viewing',
          'Refuses to show apartment in person',
          'Offers virtual viewing only',
          'Photos stolen from other ads or real estate sites',
          'Communication only by email or text (no meeting)'
        ],
        whatToDo: [
          'NEVER pay before visiting and verifying the apartment',
          'Always visit the apartment IN PERSON',
          'Verify owner identity (property assessment roll)',
          'Reverse image search of photos (Google Image)',
          'Be wary of prices too good to be true',
          'If scammed: contact local police and Anti-Fraud Centre (1-888-495-8501)'
        ],
        realExample: 'Message received: "Hello, thank you for your interest in my 4½ on Saint-Jean street. I am currently in France for urgent family reasons. The apartment is vacant and ready for 11/01. Rent: $900/month (very good price because I need someone trustworthy quickly). I can send you more photos. To reserve, send me the first month by Interac e-Transfer ($900) and I will mail you the keys by FedEx. You can move in upon receipt. I return to Quebec in December to sign the lease. Are you interested? -Michel Beaumont"'
      }
    }
  },
  {
    id: 'fausse-alerte-banque',
    title: {
      fr: 'Faux appel de votre banque - Activité suspecte sur compte',
      en: 'Fake call from your bank - Suspicious activity on account'
    },
    description: {
      fr: 'Un "agent de sécurité" de votre banque appelle pour signaler une activité suspecte. Demande de confirmer des informations ou de transférer de l\'argent vers un "compte sécurisé". La vraie banque ne demande jamais cela.',
      en: 'A "security agent" from your bank calls to report suspicious activity. Asks to confirm information or transfer money to a "secure account". Real banks never ask this.'
    },
    category: {
      fr: 'Fraude bancaire',
      en: 'Banking fraud'
    },
    riskLevel: 'critical',
    publishedAt: '2025-10-02',
    details: {
      fr: {
        examples: [
          '"Bonjour, je suis agent de sécurité à Desjardins. Nous avons détecté des transactions suspectes..."',
          '"Service de prévention fraude Banque Nationale. Votre carte a été compromise..."',
          '"Département sécurité RBC. Quelqu\'un essaie d\'accéder à votre compte en ligne..."'
        ],
        warningSignes: [
          'Appel non sollicité de "sécurité bancaire"',
          'Numéro affiché semble authentique (usurpation)',
          'Demande de confirmer NIP, mot de passe ou code d\'accès',
          'Urgence à transférer argent vers "compte temporaire sécurisé"',
          'Demande d\'acheter crypto-monnaie pour "protéger vos fonds"',
          'Menace de fermeture de compte si vous ne collaborez pas',
          'Demande de ne pas contacter votre succursale'
        ],
        whatToDo: [
          'Raccrochez immédiatement',
          'Votre banque ne demande JAMAIS vos codes par téléphone',
          'Ne transférez JAMAIS d\'argent vers un "compte sécurisé"',
          'Appelez votre banque au numéro au dos de votre carte',
          'Ne rappelez PAS le numéro affiché sur votre afficheur',
          'Si vous avez partagé des infos: contactez votre banque immédiatement (24/7)'
        ],
        realExample: 'Appel reçu: "Bonjour Monsieur Côté, je suis Mélanie Dubois du service de sécurité Desjardins. Votre numéro de membre se termine bien par 4782? Parfait. Nous avons détecté 3 tentatives de retrait frauduleux sur votre compte ce matin totalisant 8500$. Nous les avons bloquées, mais votre compte est compromis. Pour protéger vos économies, nous devons les transférer temporairement vers un compte sécurisé pendant que nous enquêtons. Avez-vous accès à AccèsD en ce moment? Je vais vous guider pour le transfert. C\'est urgent car les fraudeurs vont réessayer."'
      },
      en: {
        examples: [
          '"Hello, I\'m a security agent at Desjardins. We detected suspicious transactions..."',
          '"Fraud prevention service National Bank. Your card has been compromised..."',
          '"RBC security department. Someone is trying to access your online account..."'
        ],
        warningSigns: [
          'Unsolicited call from "bank security"',
          'Displayed number seems authentic (spoofing)',
          'Asks to confirm PIN, password or access code',
          'Urgency to transfer money to "temporary secure account"',
          'Request to buy cryptocurrency to "protect your funds"',
          'Threat of account closure if you don\'t cooperate',
          'Request not to contact your branch'
        ],
        whatToDo: [
          'Hang up immediately',
          'Your bank NEVER asks for your codes by phone',
          'NEVER transfer money to a "secure account"',
          'Call your bank at the number on the back of your card',
          'DO NOT call back the number displayed on your caller ID',
          'If you shared info: contact your bank immediately (24/7)'
        ],
        realExample: 'Call received: "Hello Mr. Côté, I am Mélanie Dubois from Desjardins security service. Your member number ends with 4782, correct? Perfect. We detected 3 fraudulent withdrawal attempts on your account this morning totaling $8500. We blocked them, but your account is compromised. To protect your savings, we must temporarily transfer them to a secure account while we investigate. Do you have access to AccèsD right now? I will guide you through the transfer. It\'s urgent because the fraudsters will try again."'
      }
    }
  },
  {
    id: 'suspension-netflix-compte',
    title: {
      fr: 'Faux email Netflix/Disney+ - Suspension de compte',
      en: 'Fake Netflix/Disney+ email - Account suspension'
    },
    description: {
      fr: 'Courriels très professionnels prétendant que votre abonnement Netflix, Disney+ ou Spotify est suspendu pour problème de paiement. Lien mène à fausse page de connexion volant vos identifiants.',
      en: 'Very professional emails claiming your Netflix, Disney+ or Spotify subscription is suspended for payment issue. Link leads to fake login page stealing your credentials.'
    },
    category: {
      fr: 'Hameçonnage',
      en: 'Phishing'
    },
    riskLevel: 'medium',
    publishedAt: '2025-10-01',
    details: {
      fr: {
        examples: [
          '"Votre abonnement Netflix sera annulé dans 48h - Mettez à jour votre paiement"',
          '"Disney+: Problème avec votre carte de crédit - Action requise"',
          '"Spotify Premium: Échec du paiement - Réactivez votre compte"'
        ],
        warningSignes: [
          'Courriel non sollicité de service de streaming',
          'Urgence à mettre à jour informations de paiement',
          'Lien ne menant pas au vrai site (netfl1x.com au lieu de netflix.com)',
          'Adresse email expéditeur bizarre (@netflixsupport.info)',
          'Fautes de français ou formulation étrange',
          'Design presque parfait mais petits détails différents'
        ],
        whatToDo: [
          'N\'ouvrez JAMAIS les liens dans ces courriels',
          'Allez directement sur netflix.com (tapez l\'adresse)',
          'Connectez-vous et vérifiez votre compte',
          'Netflix vous avertira DANS l\'application, pas uniquement par email',
          'Vérifiez votre carte de crédit pour paiements Netflix',
          'Si vous avez entré vos infos: changez immédiatement votre mot de passe'
        ],
        realExample: 'Courriel reçu: "Objet: Action requise - Suspension de compte Netflix\n\nBonjour,\n\nNous avons rencontré un problème lors du traitement de votre paiement. Votre abonnement sera suspendu dans 48 heures si nous ne pouvons pas vérifier vos informations de paiement.\n\nMontant dû: 16.99 CAD\nDate limite: 03 octobre 2025\n\nVeuillez mettre à jour vos informations de paiement dès maintenant:\n[METTRE À JOUR LE PAIEMENT]\n\nMerci de votre attention rapide.\nL\'équipe Netflix\n\n© 2025 Netflix, Inc."'
      },
      en: {
        examples: [
          '"Your Netflix subscription will be cancelled in 48h - Update your payment"',
          '"Disney+: Problem with your credit card - Action required"',
          '"Spotify Premium: Payment failed - Reactivate your account"'
        ],
        warningSigns: [
          'Unsolicited email from streaming service',
          'Urgency to update payment information',
          'Link not leading to real site (netfl1x.com instead of netflix.com)',
          'Sender email address is strange (@netflixsupport.info)',
          'Grammar errors or strange wording',
          'Almost perfect design but small different details'
        ],
        whatToDo: [
          'NEVER open links in these emails',
          'Go directly to netflix.com (type the address)',
          'Log in and check your account',
          'Netflix will warn you IN the app, not only by email',
          'Check your credit card for Netflix payments',
          'If you entered your info: immediately change your password'
        ],
        realExample: 'Email received: "Subject: Action required - Netflix account suspension\n\nHello,\n\nWe encountered a problem processing your payment. Your subscription will be suspended in 48 hours if we cannot verify your payment information.\n\nAmount due: $16.99 CAD\nDeadline: October 03, 2025\n\nPlease update your payment information now:\n[UPDATE PAYMENT]\n\nThank you for your prompt attention.\nThe Netflix Team\n\n© 2025 Netflix, Inc."'
      }
    }
  }
];
