export interface Resource {
  id: string;
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
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  readingTime: number;
  category: {
    fr: string;
    en: string;
  };
  publishedAt: string;
  updatedAt: string;
  imageUrl?: string;
}

export const resources: Resource[] = [
  {
    id: 'creer-mot-de-passe-securise',
    title: {
      fr: 'Créer un mot de passe sécurisé',
      en: 'Create a secure password'
    },
    description: {
      fr: 'Apprenez à créer des mots de passe forts pour protéger vos comptes en ligne.',
      en: 'Learn how to create strong passwords to protect your online accounts.'
    },
    content: {
      fr: `# Créer un mot de passe sécurisé

## Pourquoi c'est important

Un mot de passe faible est comme laisser la porte de votre maison ouverte. Les cybercriminels utilisent des programmes qui peuvent deviner des millions de mots de passe par seconde.

## Les règles d'or

### 1. Longueur minimale
- Au moins 12 caractères
- Plus c'est long, plus c'est sécurisé

### 2. Mélangez les caractères
- Lettres majuscules (A, B, C...)
- Lettres minuscules (a, b, c...)
- Chiffres (1, 2, 3...)
- Symboles (!@#$%...)

### 3. Évitez les informations personnelles
- Pas votre nom
- Pas votre date de naissance
- Pas le nom de votre animal
- Pas votre adresse

## Méthode simple : la phrase de passe

Choisissez une phrase facile à retenir et transformez-la :

**Exemple :**
"J'aime boire 2 cafés le matin!"
devient : **JaB2cLm!**

## Gestionnaire de mots de passe

Le plus simple est d'utiliser un gestionnaire :
- Il crée des mots de passe complexes
- Il les retient pour vous
- Vous n'avez qu'un seul mot de passe à retenir

### Gestionnaires recommandés
- 1Password
- Bitwarden
- LastPass

## Ce qu'il ne faut JAMAIS faire

❌ Utiliser le même mot de passe partout
❌ Écrire ses mots de passe sur papier
❌ Les partager par courriel ou texto
❌ Utiliser "123456" ou "motdepasse"

## Vérifier la sécurité

Visitez https://haveibeenpwned.com pour vérifier si vos comptes ont été compromis.

## Besoin d'aide ?

Appelez-nous au 581-705-0399 pour une assistance personnalisée.`,
      en: `# Create a secure password

## Why it's important

A weak password is like leaving your front door open. Cybercriminals use programs that can guess millions of passwords per second.

## Golden rules

### 1. Minimum length
- At least 12 characters
- Longer is more secure

### 2. Mix characters
- Uppercase letters (A, B, C...)
- Lowercase letters (a, b, c...)
- Numbers (1, 2, 3...)
- Symbols (!@#$%...)

### 3. Avoid personal information
- Not your name
- Not your birth date
- Not your pet's name
- Not your address

## Simple method: the passphrase

Choose an easy-to-remember phrase and transform it:

**Example:**
"I like to drink 2 coffees in the morning!"
becomes: **IlTd2cItM!**

## Password manager

The simplest is to use a manager:
- It creates complex passwords
- It remembers them for you
- You only have one password to remember

### Recommended managers
- 1Password
- Bitwarden
- LastPass

## What you should NEVER do

❌ Use the same password everywhere
❌ Write passwords on paper
❌ Share them by email or text
❌ Use "123456" or "password"

## Check security

Visit https://haveibeenpwned.com to check if your accounts have been compromised.

## Need help?

Call us at 581-705-0399 for personalized assistance.`
    },
    difficulty: 'beginner',
    readingTime: 5,
    category: {
      fr: 'Sécurité des comptes',
      en: 'Account security'
    },
    publishedAt: '2024-01-01',
    updatedAt: '2024-01-15',
    imageUrl: '/images/resources/password-security.jpg'
  },
  {
    id: 'reconnaître-hameconnage',
    title: {
      fr: 'Reconnaître l\'hameçonnage',
      en: 'Recognize phishing'
    },
    description: {
      fr: 'Identifiez les tentatives d\'hameçonnage par courriel et protégez-vous.',
      en: 'Identify email phishing attempts and protect yourself.'
    },
    content: {
      fr: `# Reconnaître l'hameçonnage

## Qu'est-ce que l'hameçonnage ?

L'hameçonnage (phishing) est une technique où des fraudeurs se font passer pour une organisation de confiance pour voler vos informations personnelles.

## Signaux d'alarme

### 1. Urgence et pression
- "Votre compte sera fermé dans 24h"
- "Action immédiate requise"
- "Dernière chance"

### 2. Demandes d'informations sensibles
- Mot de passe
- Numéro d'assurance sociale
- Numéro de carte de crédit
- Code PIN

### 3. Liens suspects
- URL courtes (bit.ly, tinyurl)
- Fautes d'orthographe dans l'adresse
- Domaines étranges (.tk, .ml)

### 4. Expéditeur douteux
- Adresse courriel générique (noreply@email.com)
- Nom d'expéditeur qui ne correspond pas
- Domaine gratuit (gmail, yahoo) pour une entreprise

## Exemples courants

### Fausse banque
"Votre compte TD a été suspendu. Cliquez ici pour le réactiver."

### Faux gouvernement
"Remboursement d'impôt en attente. Confirmez vos informations."

### Fausse livraison
"Votre colis Purolator ne peut être livré. Payez 3$ de frais."

## Que faire si vous recevez un courriel suspect ?

### ✅ Les bons réflexes
1. **Ne cliquez sur rien**
2. **Vérifiez l'expéditeur** - survolez sans cliquer
3. **Contactez directement** l'organisation par téléphone
4. **Signalez** à [email.phishing@rcmp-grc.gc.ca]

### ❌ Ce qu'il ne faut pas faire
- Cliquer sur les liens
- Télécharger les pièces jointes
- Donner des informations personnelles
- Transférer le courriel

## Sites gouvernementaux légitimes

- canada.ca (gouvernement fédéral)
- quebec.ca (gouvernement provincial)
- montreal.ca (ville de Montréal)

## En cas de doute

**Règle d'or :** Si vous avez le moindre doute, ne faites rien et appelez-nous au 581-705-0399.

## J'ai cliqué, que faire ?

1. **Déconnectez-vous** d'Internet
2. **Changez vos mots de passe** immédiatement
3. **Vérifiez vos comptes** bancaires
4. **Contactez-nous** pour une évaluation complète

## Formation disponible

Nous offrons des sessions de formation en groupe. Appelez pour plus d'informations.`,
      en: `# Recognize phishing

## What is phishing?

Phishing is a technique where fraudsters impersonate a trusted organization to steal your personal information.

## Warning signs

### 1. Urgency and pressure
- "Your account will be closed in 24h"
- "Immediate action required"
- "Last chance"

### 2. Requests for sensitive information
- Password
- Social insurance number
- Credit card number
- PIN code

### 3. Suspicious links
- Short URLs (bit.ly, tinyurl)
- Spelling errors in the address
- Strange domains (.tk, .ml)

### 4. Dubious sender
- Generic email address (noreply@email.com)
- Sender name that doesn't match
- Free domain (gmail, yahoo) for a business

## Common examples

### Fake bank
"Your TD account has been suspended. Click here to reactivate."

### Fake government
"Tax refund pending. Confirm your information."

### Fake delivery
"Your Purolator package cannot be delivered. Pay $3 in fees."

## What to do if you receive a suspicious email?

### ✅ Good reflexes
1. **Don't click anything**
2. **Check the sender** - hover without clicking
3. **Contact directly** the organization by phone
4. **Report** to [email.phishing@rcmp-grc.gc.ca]

### ❌ What not to do
- Click on links
- Download attachments
- Give personal information
- Forward the email

## Legitimate government sites

- canada.ca (federal government)
- quebec.ca (provincial government)
- montreal.ca (city of Montreal)

## When in doubt

**Golden rule:** If you have any doubt, do nothing and call us at 581-705-0399.

## I clicked, what to do?

1. **Disconnect** from Internet
2. **Change your passwords** immediately
3. **Check your bank accounts**
4. **Contact us** for a complete assessment

## Training available

We offer group training sessions. Call for more information.`
    },
    difficulty: 'beginner',
    readingTime: 7,
    category: {
      fr: 'Hameçonnage',
      en: 'Phishing'
    },
    publishedAt: '2024-01-05',
    updatedAt: '2024-01-20',
    imageUrl: '/images/resources/phishing-awareness.jpg'
  },
  {
    id: 'securiser-reseaux-sociaux',
    title: {
      fr: 'Sécuriser ses réseaux sociaux',
      en: 'Secure your social media'
    },
    description: {
      fr: 'Configurez vos paramètres de confidentialité sur Facebook, Instagram et autres.',
      en: 'Configure your privacy settings on Facebook, Instagram and others.'
    },
    content: {
      fr: `# Sécuriser ses réseaux sociaux

## Pourquoi c'est important

Les réseaux sociaux contiennent beaucoup d'informations personnelles que les fraudeurs peuvent utiliser pour vous cibler ou usurper votre identité.

## Facebook - Paramètres essentiels

### 1. Qui peut voir vos publications ?
- Allez dans **Paramètres et confidentialité**
- Choisissez **Paramètres**
- Section **Confidentialité**
- Réglez sur **Amis seulement**

### 2. Qui peut vous trouver ?
- Dans **Confidentialité**
- **Qui peut vous trouver** → **Amis d'amis** maximum
- **Moteurs de recherche** → **Non**

### 3. Authentification à deux facteurs
- **Sécurité et connexion**
- **Authentification à deux facteurs**
- Activez avec votre numéro de téléphone

### 4. Révision des publications
- **Journal et balisage**
- **Réviser les publications** → **Activé**
- Vous devrez approuver avant qu'une publication vous identifie

## Instagram - Protection de base

### 1. Compte privé
- **Paramètres** → **Confidentialité**
- **Confidentialité du compte** → **Privé**

### 2. Masquer votre statut d'activité
- **Confidentialité** → **Statut d'activité** → **Désactivé**

### 3. Limiter les commentaires
- **Confidentialité** → **Commentaires**
- Filtrez les commentaires offensants

## LinkedIn - Sécurité professionnelle

### 1. Visibilité du profil
- **Paramètres et confidentialité**
- **Visibilité** → **Profil public** → **Limité**

### 2. Qui peut voir vos connexions
- **Visibilité** → **Connexions** → **Vos connexions seulement**

## Règles générales pour tous les réseaux

### ✅ Bonnes pratiques
- Utilisez des mots de passe uniques
- Activez l'authentification à deux facteurs
- Vérifiez régulièrement vos paramètres
- Ne publiez jamais d'informations sensibles
- Méfiez-vous des demandes d'amis d'inconnus

### ❌ À éviter absolument
- Publier votre localisation en temps réel
- Partager des photos de documents officiels
- Accepter tous les amis/followers
- Cliquer sur des liens suspects dans les messages
- Partager des informations financières

## Informations à ne jamais publier

- Numéro de téléphone complet
- Adresse domiciliaire complète
- Numéros de documents d'identité
- Photos de cartes bancaires
- Codes de sécurité
- Horaires de vacances détaillés

## Signaler du contenu suspect

### Facebook/Instagram
- Trois points (...) → **Signaler**
- Décrivez le problème
- Bloquez l'utilisateur si nécessaire

### LinkedIn
- **Plus** → **Signaler/Bloquer**

## Vérification régulière

### Chaque mois
- Vérifiez vos paramètres de confidentialité
- Supprimez les anciennes publications trop personnelles
- Révisez votre liste d'amis/connexions

### Signes d'alerte
- Messages étranges envoyés en votre nom
- Publications que vous n'avez pas faites
- Amis ajoutés automatiquement
- Activité suspecte dans vos notifications

## Applications tierces

### Attention aux autorisations
- Allez dans **Paramètres** → **Applications**
- Supprimez les applications que vous n'utilisez plus
- Vérifiez les permissions accordées

## En cas de piratage

1. **Changez immédiatement** votre mot de passe
2. **Activez l'authentification** à deux facteurs
3. **Vérifiez les paramètres** de confidentialité
4. **Signalez** le piratage à la plateforme
5. **Prévenez vos contacts** que votre compte a été compromis

## Besoin d'aide personnalisée ?

Nous offrons des sessions d'aide individualisée pour configurer vos réseaux sociaux. Appelez au 581-705-0399 pour prendre rendez-vous.`,
      en: `# Secure your social media

## Why it's important

Social media contains a lot of personal information that fraudsters can use to target you or steal your identity.

## Facebook - Essential settings

### 1. Who can see your posts?
- Go to **Settings & Privacy**
- Choose **Settings**
- **Privacy** section
- Set to **Friends only**

### 2. Who can find you?
- In **Privacy**
- **Who can find you** → **Friends of friends** maximum
- **Search engines** → **No**

### 3. Two-factor authentication
- **Security and Login**
- **Two-Factor Authentication**
- Enable with your phone number

### 4. Review posts
- **Timeline and Tagging**
- **Review posts** → **Enabled**
- You'll need to approve before a post tags you

## Instagram - Basic protection

### 1. Private account
- **Settings** → **Privacy**
- **Account Privacy** → **Private**

### 2. Hide your activity status
- **Privacy** → **Activity Status** → **Disabled**

### 3. Limit comments
- **Privacy** → **Comments**
- Filter offensive comments

## LinkedIn - Professional security

### 1. Profile visibility
- **Settings & Privacy**
- **Visibility** → **Public Profile** → **Limited**

### 2. Who can see your connections
- **Visibility** → **Connections** → **Your connections only**

## General rules for all networks

### ✅ Good practices
- Use unique passwords
- Enable two-factor authentication
- Regularly check your settings
- Never post sensitive information
- Be wary of friend requests from strangers

### ❌ Absolutely avoid
- Posting your real-time location
- Sharing photos of official documents
- Accepting all friends/followers
- Clicking suspicious links in messages
- Sharing financial information

## Information to never post

- Full phone number
- Complete home address
- ID document numbers
- Photos of bank cards
- Security codes
- Detailed vacation schedules

## Report suspicious content

### Facebook/Instagram
- Three dots (...) → **Report**
- Describe the problem
- Block the user if necessary

### LinkedIn
- **More** → **Report/Block**

## Regular verification

### Each month
- Check your privacy settings
- Delete old overly personal posts
- Review your friends/connections list

### Warning signs
- Strange messages sent in your name
- Posts you didn't make
- Friends added automatically
- Suspicious activity in your notifications

## Third-party applications

### Be careful with permissions
- Go to **Settings** → **Apps**
- Remove apps you no longer use
- Check granted permissions

## In case of hacking

1. **Immediately change** your password
2. **Enable two-factor** authentication
3. **Check privacy** settings
4. **Report** the hack to the platform
5. **Warn your contacts** that your account was compromised

## Need personalized help?

We offer individual help sessions to configure your social media. Call 581-705-0399 to make an appointment.`
    },
    difficulty: 'intermediate',
    readingTime: 10,
    category: {
      fr: 'Réseaux sociaux',
      en: 'Social media'
    },
    publishedAt: '2024-01-10',
    updatedAt: '2024-01-25',
    imageUrl: '/images/resources/social-media-security.jpg'
  }
];