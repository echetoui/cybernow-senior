# Configuration de l'envoi d'emails

Les formulaires de contact du site CyberNow Seniors envoient les demandes par email à **info@cybernow.io** via le service **Resend**.

## Configuration requise

### 1. Créer un compte Resend

1. Allez sur [resend.com](https://resend.com)
2. Créez un compte gratuit (100 emails/jour inclus)
3. Vérifiez votre email

### 2. Configurer votre domaine

Pour que les emails ne finissent pas dans les spams, vous devez configurer votre domaine :

1. Dans le dashboard Resend, allez dans **Domains**
2. Ajoutez le domaine `cybernow.io`
3. Configurez les enregistrements DNS suivants dans votre hébergeur :
   - **SPF** : Enregistrement TXT
   - **DKIM** : Enregistrements CNAME
   - **DMARC** : Enregistrement TXT (optionnel mais recommandé)

4. Attendez la vérification (peut prendre quelques minutes)

### 3. Obtenir votre clé API

1. Dans le dashboard Resend, allez dans **API Keys**
2. Cliquez sur **Create API Key**
3. Donnez-lui un nom : `CyberNow Seniors Production`
4. Sélectionnez les permissions : **Full Access** ou **Sending Access**
5. Copiez la clé (elle commence par `re_`)

⚠️ **Important** : Sauvegardez cette clé dans un endroit sûr, elle ne sera affichée qu'une seule fois.

### 4. Configurer les variables d'environnement

Modifiez le fichier `.env.local` (déjà créé) :

```bash
# Email de destination
CONTACT_EMAIL=info@cybernow.io

# Votre clé API Resend
RESEND_API_KEY=re_votre_cle_ici
```

### 5. Vérifier l'email d'envoi

Dans le fichier `src/lib/email.ts`, l'email d'envoi est configuré comme :

```typescript
from: 'CyberNow Seniors <notifications@cybernow.io>'
```

Assurez-vous que :
- Le domaine `cybernow.io` est vérifié dans Resend
- L'adresse `notifications@cybernow.io` existe ou utilisez une adresse vérifiée

## Test de l'envoi d'email

### En développement local

1. Démarrez le serveur de développement :
   ```bash
   npm run dev
   ```

2. Allez sur la page de contact : http://localhost:3000/contact

3. Remplissez et soumettez le formulaire

4. Vérifiez :
   - Les logs du serveur (terminal)
   - Votre boîte email `info@cybernow.io`
   - Le dashboard Resend pour voir l'email envoyé

### Que contient l'email ?

Les emails envoyés contiennent :
- **Nom du client**
- **Numéro de téléphone** (cliquable)
- **Meilleur moment pour appeler** (optionnel)
- **Message du client**
- **Date et heure de l'envoi**
- **Informations techniques** (IP, navigateur) pour la sécurité

## Dépannage

### Les emails ne sont pas envoyés

1. Vérifiez que `RESEND_API_KEY` est correctement définie dans `.env.local`
2. Redémarrez le serveur de développement après avoir modifié `.env.local`
3. Vérifiez les logs du serveur pour voir les erreurs
4. Vérifiez que votre domaine est vérifié dans Resend

### Les emails vont dans les spams

1. Assurez-vous que votre domaine est vérifié dans Resend
2. Configurez les enregistrements SPF, DKIM et DMARC
3. Utilisez une adresse d'envoi avec votre domaine vérifié

### Limite d'envoi dépassée

Le plan gratuit Resend permet 100 emails/jour. Pour plus :
1. Allez dans **Billing** dans le dashboard Resend
2. Passez au plan Pro (20$/mois pour 50,000 emails/mois)

## Production

Pour déployer en production :

1. Configurez les variables d'environnement sur votre plateforme (Vercel, Netlify, etc.)
2. N'utilisez jamais `.env.local` en production
3. Utilisez les variables d'environnement de votre hébergeur

### Exemple Vercel

```bash
vercel env add CONTACT_EMAIL
# Entrez: info@cybernow.io

vercel env add RESEND_API_KEY
# Entrez: re_votre_cle_production
```

## Support

Pour toute question sur Resend :
- Documentation : https://resend.com/docs
- Support : support@resend.com
