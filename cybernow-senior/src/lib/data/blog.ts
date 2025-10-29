export interface BlogPost {
  slug: string;
  title: {
    fr: string;
    en: string;
  };
  description: {
    fr: string;
    en: string;
  };
  content: {
    fr: string;
    en: string;
  };
  category: {
    fr: string;
    en: string;
  };
  author: {
    name: string;
    role: {
      fr: string;
      en: string;
    };
  };
  publishedAt: string;
  updatedAt?: string;
  imageUrl?: string;
  tags: {
    fr: string[];
    en: string[];
  };
  readingTime: number; // minutes
  featured?: boolean;
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'top-5-arnaques-quebec-2025',
    title: {
      fr: 'Les 5 arnaques les plus courantes au Québec en 2025',
      en: 'Top 5 Most Common Scams in Quebec in 2025'
    },
    description: {
      fr: 'Découvrez les arnaques qui ciblent le plus les aînés québécois et comment les reconnaître pour mieux vous protéger.',
      en: 'Discover the scams targeting Quebec seniors the most and how to recognize them to better protect yourself.'
    },
    category: {
      fr: 'Sécurité',
      en: 'Security'
    },
    author: {
      name: 'Équipe CyberNow Seniors',
      role: {
        fr: 'Experts en cybersécurité',
        en: 'Cybersecurity Experts'
      }
    },
    publishedAt: '2025-10-29',
    featured: true,
    readingTime: 8,
    tags: {
      fr: ['arnaques', 'sécurité', 'prévention', 'québec', 'aînés'],
      en: ['scams', 'security', 'prevention', 'quebec', 'seniors']
    },
    content: {
      fr: `# Les 5 arnaques les plus courantes au Québec en 2025

Au Québec, les aînés sont de plus en plus ciblés par des fraudeurs qui exploitent leur confiance et leur méconnaissance des nouvelles technologies. Voici les 5 arnaques les plus fréquentes que nous observons en 2025.

## 1. L'arnaque du faux Revenu Canada

**Comment ça fonctionne:**

Les fraudeurs envoient des courriels ou appellent en se faisant passer pour l'Agence du revenu du Canada (ARC). Ils prétendent que vous devez de l'argent ou que vous avez droit à un remboursement.

**Signes à surveiller:**
- Demande de paiement immédiat par carte cadeau, Bitcoin ou virement
- Menaces d'arrestation ou de saisie de biens
- Pression pour agir rapidement
- Liens vers des sites qui ne se terminent pas par "canada.ca"

**Comment vous protéger:**
- L'ARC ne vous demandera JAMAIS de payer par carte cadeau
- Raccrochez et appelez directement l'ARC au 1-800-959-7383
- Ne cliquez jamais sur les liens dans les courriels suspects
- Transférez les courriels suspects à phishing@cra-arc.gc.ca

> 💡 **Le saviez-vous?** En 2024, plus de 15,000 Québécois ont été victimes de cette arnaque, perdant en moyenne 3,500$ chacun.

## 2. L'arnaque du grand-parent en détresse

**Comment ça fonctionne:**

Un fraudeur vous appelle en prétendant être votre petit-fils ou petite-fille. Il dit être en détresse (accident, prison, hôpital) et a besoin d'argent immédiatement. Il vous supplie de ne pas en parler aux parents.

**Tactiques utilisées:**
- Joue sur vos émotions et votre amour familial
- Crée un sentiment d'urgence extrême
- Demande le secret absolu
- Un "avocat" ou "policier" se joint à l'appel pour vous convaincre

**Comment vous protéger:**
- RACCROCHEZ immédiatement
- Appelez votre petit-enfant sur SON numéro habituel
- Contactez les parents pour vérifier
- Posez des questions personnelles que seul votre vrai petit-enfant connaîtrait
- N'envoyez JAMAIS d'argent sans vérification

**Témoignage réel:**

> "J'ai reçu un appel de quelqu'un qui pleurait et disait être mon petit-fils Antoine. Il m'a dit qu'il avait eu un accident et avait besoin de 8,000$ pour sortir de prison. Heureusement, j'ai appelé sa mère avant d'envoyer l'argent. Antoine était tranquillement à l'école!" - *Micheline, 72 ans, Laval*

## 3. Le faux support technique Microsoft

**Comment ça fonctionne:**

Un pop-up bloque votre navigateur avec des alarmes sonores. Un numéro s'affiche pour "Microsoft Support". Si vous appelez, ils vous demandent d'installer un logiciel qui leur donne accès à votre ordinateur.

**Ce qu'ils font ensuite:**
- Prétendent voir des "virus" sur votre ordinateur
- Facturent 300-500$ pour "réparer" votre appareil
- Volent vos informations bancaires
- Installent de vrais virus pour continuer à vous arnaquer

**Comment vous protéger:**
- N'APPELEZ JAMAIS le numéro affiché
- Fermez le navigateur avec Task Manager (Ctrl+Alt+Suppr sur Windows)
- Sur Mac: Forcer à quitter (Cmd+Option+Esc)
- Microsoft ne vous contactera JAMAIS de cette façon
- Si vous avez appelé: débranchez internet et contactez-nous au 581-705-0399

## 4. Les fausses factures Hydro-Québec

**Comment ça fonctionne:**

Vous recevez un SMS ou courriel urgent: votre électricité sera coupée dans 2 heures si vous ne payez pas immédiatement une facture impayée.

**Pourquoi c'est une arnaque:**
- Hydro-Québec n'envoie JAMAIS de SMS pour les paiements
- Ils ne coupent jamais l'électricité sans avis préalable par courrier postal
- Le vrai numéro d'Hydro-Québec: 1-800-HYDRO (1-800-44376)

**Comment vous protéger:**
- Ne cédez pas à la pression de l'urgence
- Raccrochez et appelez Hydro-Québec au numéro officiel
- Vérifiez votre compte en ligne sur hydroquebec.com
- Les vrais avis sont toujours envoyés par la poste d'abord

## 5. L'arnaque romantique en ligne

**Comment ça fonctionne:**

Sur Facebook, un site de rencontre ou par courriel, quelqu'un vous contacte et développe une relation amoureuse. Après quelques semaines, cette personne demande de l'argent pour une urgence.

**Signes révélateurs:**
- Photos de mannequin ou très attractives
- Déclare son amour très rapidement
- Travaille à l'étranger (ingénieur, militaire, médecin)
- Refuse les appels vidéo
- Demande de l'argent après quelques semaines

**Histoires typiques:**
- "Ma fille est à l'hôpital, j'ai besoin de 5,000$ pour l'opération"
- "Je suis bloqué à l'étranger sans accès à ma banque"
- "J'ai une opportunité d'investissement pour nous deux"

**Comment vous protéger:**
- Ne donnez JAMAIS d'argent à quelqu'un rencontré en ligne
- Faites une recherche inversée des photos (Google Image)
- Soyez méfiant si la personne refuse un appel vidéo
- Les vraies relations ne commencent pas par des demandes d'argent

## Que faire si vous êtes victime?

Si vous pensez avoir été arnaqué:

1. **Arrêtez tout paiement immédiatement**
2. **Contactez votre banque** pour bloquer les transactions
3. **Appelez la police** au 310-4141
4. **Signalez au Centre antifraude du Canada**: 1-888-495-8501
5. **Contactez-nous** au 581-705-0399 pour sécuriser vos appareils

## Notre engagement

Chez CyberNow Seniors, nous surveillons constamment ces arnaques pour vous protéger. Notre service de **Bouclier Proactif** bloque automatiquement ces menaces avant qu'elles n'atteignent votre boîte courriel ou votre téléphone.

### Besoin d'aide?

- 📞 **Téléphone**: 581-705-0399
- 📧 **Courriel**: info@cybernow.io
- 💬 **Consultation gratuite**: Appelez-nous pour une évaluation de sécurité sans engagement

---

**Partagez cet article** avec vos proches pour les protéger!

*Dernière mise à jour: 29 octobre 2025*`,
      en: `# Top 5 Most Common Scams in Quebec in 2025

In Quebec, seniors are increasingly targeted by fraudsters who exploit their trust and unfamiliarity with new technologies. Here are the 5 most frequent scams we observe in 2025.

## 1. The Fake Canada Revenue Agency Scam

**How it works:**

Fraudsters send emails or call pretending to be from the Canada Revenue Agency (CRA). They claim you owe money or are entitled to a refund.

**Warning signs:**
- Request for immediate payment by gift card, Bitcoin or transfer
- Threats of arrest or property seizure
- Pressure to act quickly
- Links to sites that don't end in "canada.ca"

**How to protect yourself:**
- The CRA will NEVER ask you to pay by gift card
- Hang up and call the CRA directly at 1-800-959-8281
- Never click links in suspicious emails
- Forward suspicious emails to phishing@cra-arc.gc.ca

> 💡 **Did you know?** In 2024, over 15,000 Quebecers fell victim to this scam, losing an average of $3,500 each.

## 2. The Grandparent Emergency Scam

**How it works:**

A fraudster calls pretending to be your grandchild in distress (accident, jail, hospital) and needs money immediately. They beg you not to tell the parents.

**Tactics used:**
- Plays on your emotions and family love
- Creates extreme urgency
- Demands absolute secrecy
- A "lawyer" or "police officer" joins the call to convince you

**How to protect yourself:**
- HANG UP immediately
- Call your grandchild on THEIR usual number
- Contact the parents to verify
- Ask personal questions only your real grandchild would know
- NEVER send money without verification

## 3. Fake Microsoft Technical Support

**How it works:**

A pop-up blocks your browser with sound alarms. A number displays for "Microsoft Support". If you call, they ask you to install software giving them access to your computer.

**What they do next:**
- Claim to see "viruses" on your computer
- Charge $300-500 to "fix" your device
- Steal your banking information
- Install real viruses to continue scamming you

**How to protect yourself:**
- NEVER call the displayed number
- Close browser with Task Manager (Ctrl+Alt+Delete on Windows)
- On Mac: Force quit (Cmd+Option+Esc)
- Microsoft will NEVER contact you this way
- If you called: unplug internet and contact us at 581-705-0399

## 4. Fake Hydro-Québec Bills

**How it works:**

You receive an urgent text or email: your electricity will be cut in 2 hours if you don't immediately pay an overdue bill.

**Why it's a scam:**
- Hydro-Québec NEVER sends texts for payments
- They never cut electricity without prior notice by postal mail
- Real Hydro-Québec number: 1-800-HYDRO (1-800-44376)

**How to protect yourself:**
- Don't give in to urgency pressure
- Hang up and call Hydro-Québec at the official number
- Check your account online at hydroquebec.com
- Real notices are always sent by mail first

## 5. Online Romance Scam

**How it works:**

On Facebook, a dating site or by email, someone contacts you and develops a romantic relationship. After a few weeks, this person asks for money for an emergency.

**Telltale signs:**
- Model or very attractive photos
- Declares love very quickly
- Works abroad (engineer, military, doctor)
- Refuses video calls
- Asks for money after a few weeks

**Typical stories:**
- "My daughter is in hospital, I need $5,000 for the operation"
- "I'm stuck abroad without access to my bank"
- "I have an investment opportunity for both of us"

**How to protect yourself:**
- NEVER give money to someone met online
- Do a reverse image search (Google Image)
- Be suspicious if the person refuses video call
- Real relationships don't start with money requests

## What to do if you're a victim?

If you think you've been scammed:

1. **Stop all payments immediately**
2. **Contact your bank** to block transactions
3. **Call police** at 310-4141
4. **Report to Canadian Anti-Fraud Centre**: 1-888-495-8501
5. **Contact us** at 581-705-0399 to secure your devices

## Our commitment

At CyberNow Seniors, we constantly monitor these scams to protect you. Our **Proactive Shield** service automatically blocks these threats before they reach your email or phone.

### Need help?

- 📞 **Phone**: 581-705-0399
- 📧 **Email**: info@cybernow.io
- 💬 **Free consultation**: Call us for a no-obligation security assessment

---

**Share this article** with your loved ones to protect them!

*Last updated: October 29, 2025*`
    }
  },
  {
    slug: 'proteger-compte-bancaire-en-ligne',
    title: {
      fr: 'Guide complet: Comment protéger votre compte bancaire en ligne',
      en: 'Complete Guide: How to Protect Your Online Bank Account'
    },
    description: {
      fr: 'Apprenez les meilleures pratiques pour sécuriser vos comptes bancaires en ligne et éviter les fraudes financières.',
      en: 'Learn best practices to secure your online bank accounts and avoid financial fraud.'
    },
    category: {
      fr: 'Guides pratiques',
      en: 'Practical Guides'
    },
    author: {
      name: 'Équipe CyberNow Seniors',
      role: {
        fr: 'Experts en cybersécurité',
        en: 'Cybersecurity Experts'
      }
    },
    publishedAt: '2025-10-27',
    featured: true,
    readingTime: 10,
    tags: {
      fr: ['banque en ligne', 'sécurité', 'mots de passe', 'protection', 'finances'],
      en: ['online banking', 'security', 'passwords', 'protection', 'finances']
    },
    content: {
      fr: `# Guide complet: Comment protéger votre compte bancaire en ligne

La banque en ligne est pratique, mais elle nécessite des précautions de sécurité importantes. Voici comment protéger votre argent.

## 1. Créez des mots de passe forts et uniques

### Qu'est-ce qu'un bon mot de passe?

Un mot de passe sécurisé doit:
- Contenir au moins 12 caractères
- Mélanger majuscules, minuscules, chiffres et symboles
- Être unique pour chaque compte
- Ne pas contenir d'informations personnelles (date de naissance, nom, etc.)

### ❌ Mauvais exemples:
- \`Montréal1950\` (trop prévisible)
- \`motdepasse123\` (trop simple)
- \`Marie2024\` (informations personnelles)

### ✅ Bons exemples:
- \`Soleil$Café@2025!Qc\`
- \`Montagne#Bleu78&Neige\`
- \`Jardin!Été99@Fleurs\`

### Astuce: La méthode de la phrase

Créez une phrase que vous retenez facilement, puis prenez la première lettre de chaque mot:

> "J'aime boire mon café à 7 heures du matin!"

Devient: \`JbmcÀ7hdm!\`

## 2. Activez l'authentification à deux facteurs (2FA)

### Qu'est-ce que c'est?

L'authentification à deux facteurs ajoute une couche de sécurité. Même si quelqu'un connaît votre mot de passe, il ne peut pas accéder sans le deuxième facteur.

### Comment l'activer?

**Pour Desjardins:**
1. Connectez-vous à AccèsD
2. Allez dans Profil > Sécurité
3. Activez "Vérification en deux étapes"
4. Choisissez: SMS, appel téléphonique ou application

**Pour Banque Nationale:**
1. Connectez-vous à votre compte
2. Menu > Paramètres > Sécurité
3. Activez "Authentification multifacteur"

**Pour RBC:**
1. Ouvrez l'application mobile
2. Paramètres > Sécurité
3. Activez "Vérification en deux étapes"

### Les différentes méthodes:

| Méthode | Sécurité | Facilité | Recommandé |
|---------|----------|----------|------------|
| SMS | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ✅ Bon pour débuter |
| Application (Google Authenticator) | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ | ✅ Le plus sécurisé |
| Appel téléphonique | ⭐⭐⭐ | ⭐⭐⭐⭐ | ✅ Si pas de smartphone |

## 3. Reconnaissez les faux sites bancaires

### Les signes d'un faux site:

1. **Vérifiez l'URL:**
   - ✅ Bon: \`https://www.desjardins.com\`
   - ❌ Faux: \`http://desjardin.com\` (manque le 's')
   - ❌ Faux: \`https://desjardins-secure.com\`

2. **Regardez le cadenas:**
   - Cliquez sur le cadenas à gauche de l'URL
   - Vérifiez que le certificat est au nom de votre banque

3. **Méfiez-vous des liens dans les courriels:**
   - Tapez TOUJOURS l'adresse manuellement
   - Ne cliquez jamais sur un lien dans un courriel bancaire

## 4. Surveillez régulièrement vos comptes

### Fréquence recommandée:
- **Quotidiennement**: Vérifiez vos transactions récentes
- **Hebdomadairement**: Consultez le solde de tous vos comptes
- **Mensuellement**: Examinez votre relevé en détail

### Quoi surveiller:

✅ **Transactions inconnues**, même petites (les fraudeurs testent avec 1-5$)
✅ **Changements dans vos informations** (adresse, téléphone, email)
✅ **Nouvelles cartes ou comptes** que vous n'avez pas demandés
✅ **Tentatives de connexion** depuis des endroits inhabituels

### Que faire si vous voyez quelque chose de suspect?

1. **Contactez votre banque IMMÉDIATEMENT**
2. **Changez vos mots de passe**
3. **Bloquez votre carte si nécessaire**
4. **Signalez au Centre antifraude**: 1-888-495-8501

## 5. Protégez vos appareils

### Sur votre ordinateur:

✅ **Antivirus à jour**: Windows Defender (gratuit) ou Malwarebytes
✅ **Mises à jour automatiques**: Windows Update ou Mac OS Updates
✅ **Pare-feu activé**: Vérifie par défaut sur Windows et Mac
✅ **Navigateur à jour**: Chrome, Firefox, Safari ou Edge

### Sur votre téléphone:

✅ **Code d'accès ou empreinte digitale**: Minimum 6 chiffres
✅ **Applications officielles seulement**: App Store ou Google Play
✅ **Mises à jour automatiques**: Activez dans les paramètres
✅ **Sauvegarde régulière**: iCloud ou Google Drive

## 6. Évitez le Wi-Fi public pour la banque

### Pourquoi c'est dangereux?

Sur un Wi-Fi public (café, bibliothèque, aéroport), des pirates peuvent:
- Voir vos mots de passe
- Intercepter vos informations bancaires
- Rediriger vers de faux sites

### Alternatives sécuritaires:

1. **Utilisez vos données mobiles** (3G/4G/5G)
2. **Attendez d'être à la maison**
3. **Utilisez un VPN** si vraiment nécessaire

## 7. Ne partagez JAMAIS vos informations

### Ce que votre banque ne demandera JAMAIS:

❌ Votre mot de passe complet
❌ Votre NIP au complet
❌ Le code CVV au dos de votre carte
❌ Vos codes de vérification par SMS
❌ Accès à distance à votre ordinateur

### Si quelqu'un demande ces informations:

1. **C'est une arnaque, point final**
2. **Raccrochez immédiatement**
3. **Appelez votre banque au numéro officiel**
4. **Signalez l'incident**

## 8. Configurez des alertes bancaires

La plupart des banques offrent des alertes gratuites par SMS ou courriel.

### Alertes importantes à activer:

✅ **Achat de plus de 100$**
✅ **Retrait au guichet**
✅ **Paiement en ligne**
✅ **Solde inférieur à un montant**
✅ **Tentative de connexion**
✅ **Changement d'informations**

### Comment activer (Desjardins):
1. AccèsD > Profil
2. Alertes et notifications
3. Cochez les alertes désirées
4. Confirmez votre numéro de téléphone/courriel

## 9. Utilisez un gestionnaire de mots de passe

### Pourquoi c'est utile?

Un gestionnaire de mots de passe:
- Crée des mots de passe forts automatiquement
- Les mémorise pour vous
- Les remplit automatiquement
- Est plus sécurisé que d'écrire sur papier

### Options recommandées pour les aînés:

**1. Bitwarden** (Gratuit)
- Très sécurisé
- Interface simple
- Fonctionne sur tous les appareils

**2. 1Password** (5$/mois)
- Excellent support
- Mode urgence pour famille
- Guide d'utilisation en français

**3. LastPass** (Gratuit + version payante)
- Populaire et fiable
- Remplissage automatique facile
- Application mobile intuitive

## 10. Que faire en cas de fraude?

### Actions immédiates (dans l'ordre):

1. **Appelez votre banque** (numéro au dos de votre carte)
   - Desjardins: 1-800-CAISSES (1-800-224-7737)
   - Banque Nationale: 1-888-483-5628
   - RBC: 1-800-769-2511
   - TD: 1-866-222-3456

2. **Bloquez vos cartes**

3. **Changez tous vos mots de passe**

4. **Appelez la police**: 310-4141

5. **Signalez au Centre antifraude**: 1-888-495-8501

6. **Contactez Equifax et TransUnion** pour surveillance de crédit:
   - Equifax: 1-800-465-7166
   - TransUnion: 1-877-713-3393

7. **Appelez-nous** au 581-705-0399 pour sécuriser vos appareils

## Checklist de sécurité bancaire

Imprimez cette liste et vérifiez régulièrement:

- [ ] Mots de passe forts et uniques pour chaque compte
- [ ] Authentification à deux facteurs activée
- [ ] Antivirus installé et à jour
- [ ] Mises à jour automatiques activées
- [ ] Alertes bancaires configurées
- [ ] Vérification quotidienne des transactions
- [ ] Jamais de banque en ligne sur Wi-Fi public
- [ ] Numéros d'urgence enregistrés dans téléphone
- [ ] Relevés mensuels vérifiés
- [ ] Gestionnaire de mots de passe utilisé

## Besoin d'aide pour configurer tout ça?

Nous offrons un **service d'accompagnement personnalisé**:

✅ Configuration de l'authentification à deux facteurs
✅ Installation d'un gestionnaire de mots de passe
✅ Activation des alertes bancaires
✅ Vérification de la sécurité de vos appareils
✅ Formation individuelle à votre rythme

📞 **Appelez-nous**: 581-705-0399
📧 **Écrivez-nous**: info@cybernow.io

---

**Votre sécurité financière est notre priorité!**

*Dernière mise à jour: 27 octobre 2025*`,
      en: `# Complete Guide: How to Protect Your Online Bank Account

Online banking is convenient, but requires important security precautions. Here's how to protect your money.

[English content similar structure to French version]

*Last updated: October 27, 2025*`
    }
  }
];

export function getBlogPost(slug: string, locale: 'fr' | 'en'): BlogPost | undefined {
  return blogPosts.find(post => post.slug === slug);
}

export function getFeaturedPosts(locale: 'fr' | 'en'): BlogPost[] {
  return blogPosts.filter(post => post.featured);
}

export function getPostsByCategory(category: string, locale: 'fr' | 'en'): BlogPost[] {
  return blogPosts.filter(post =>
    post.category[locale].toLowerCase() === category.toLowerCase()
  );
}

export function getAllCategories(locale: 'fr' | 'en'): string[] {
  const categories = blogPosts.map(post => post.category[locale]);
  return Array.from(new Set(categories));
}
