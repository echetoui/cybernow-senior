# CyberNow Seniors

Site web de services de cybersécurité pour les aînés au Québec. Solution complète avec Next.js 14, design accessible et support bilingue FR/EN.

## 🚀 Fonctionnalités

- **Framework moderne** : Next.js 14 avec App Router
- **Design accessible** : WCAG AA/AAA compliant, optimisé pour les aînés
- **Bilingue** : Français et anglais avec next-intl
- **Composants UI** : shadcn/ui avec Tailwind CSS
- **Formulaires** : React Hook Form + Zod avec validation accessible
- **SEO optimisé** : Métadonnées, Schema.org, sitemap
- **Performance** : Lighthouse score ≥ 95
- **Tests** : Playwright pour les parcours critiques

## 📱 Pages incluses

- **Accueil** : Hero, services, valeurs, CTA
- **Services** : Liste et pages détaillées (4 services)
- **Ressources** : Guides de sécurité imprimables
- **Alertes** : Liste d'arnaques avec conseils
- **À propos** : Mission, valeurs, équipe
- **Contact** : Formulaire + informations de contact
- **Confidentialité** : Politique complète
- **404** : Page d'erreur accessible

## 🛠️ Technologies

- **Framework** : Next.js 14 (App Router)
- **Language** : TypeScript
- **Styling** : Tailwind CSS + shadcn/ui
- **Internationalisation** : next-intl
- **Formulaires** : React Hook Form + Zod
- **Icons** : Lucide React
- **Tests** : Playwright + Axe-core
- **Déploiement** : Vercel

## 🏃‍♂️ Démarrage rapide

### Prérequis

- Node.js 18+
- npm ou pnpm

### Installation

```bash
# Cloner le repository
git clone https://github.com/votre-username/cybernow-seniors.git
cd cybernow-seniors

# Installer les dépendances
npm install

# Copier les variables d'environnement
cp .env.example .env.local

# Démarrer le serveur de développement
npm run dev
```

Le site sera accessible sur [http://localhost:3000](http://localhost:3000)

## 📝 Variables d'environnement

Copiez `.env.example` vers `.env.local` et configurez :

```env
# Site Configuration
NEXT_PUBLIC_SITE_URL=https://cybernowseniors.ca

# Analytics (choisir un)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_PLAUSIBLE_DOMAIN=cybernowseniors.ca

# Email Service (production)
CONTACT_EMAIL=contact@cybernowseniors.ca
RESEND_API_KEY=re_xxxxxxxxxx

# SEO
GOOGLE_VERIFICATION=xxxxxxxxxx
```

## 🧪 Tests

```bash
# Installer Playwright browsers
npx playwright install

# Lancer les tests
npm run test:e2e

# Tests d'accessibilité
npm run test:a11y

# Lancer le serveur et les tests
npm run test:ci
```

## 📊 Scripts disponibles

```bash
npm run dev          # Serveur de développement
npm run build        # Build de production
npm run start        # Serveur de production
npm run lint         # Linter ESLint
npm run test:e2e     # Tests Playwright
npm run test:a11y    # Tests d'accessibilité
npm run lighthouse   # Audit Lighthouse
```

## 🎨 Design System

### Couleurs principales

- **Brand** : `#0A2540` (Bleu profond)
- **Accent** : `#00C2FF` (Cyan)
- **Danger** : `#D92D20` (Rouge pour alertes)

### Typographie

- **Police** : Inter (via next/font)
- **Taille de base** : 18px (lisible pour aînés)
- **Contrôles A+/A-** : 100%, 112%, 125%

### Composants accessibles

- Taille minimale de clic : 44px
- Contrastes AAA pour éléments critiques
- Focus visibles pour navigation clavier
- Aria-labels et landmarks appropriés

## 🚀 Déploiement

### Vercel (recommandé)

1. Connectez votre repository GitHub à Vercel
2. Configurez les variables d'environnement
3. Le déploiement est automatique sur chaque push

### Autres plateformes

```bash
# Build de production
npm run build

# Les fichiers sont dans le dossier .next
```

## 📧 Configuration Email

Pour activer l'envoi d'emails en production :

1. Créez un compte [Resend](https://resend.com)
2. Ajoutez votre `RESEND_API_KEY` dans les variables d'environnement
3. Configurez `CONTACT_EMAIL` pour recevoir les messages

## 🔒 Sécurité

- Headers de sécurité configurés dans `vercel.json`
- Validation côté client et serveur
- Protection anti-bot avec honeypot
- Sanitisation des données utilisateur

## ♿ Accessibilité

Le site respecte les standards WCAG 2.1 AA/AAA :

- Navigation clavier complète
- Lecteurs d'écran supportés
- Contrastes élevés
- Contrôles de taille de texte
- Messages d'erreur accessibles
- Structure sémantique HTML5

## 🌐 Internationalisation

- Français (défaut) : `/fr`
- Anglais : `/en`
- Toggle dans le header
- URLs localisées
- Métadonnées traduites

## 📈 Performance

Optimisations incluses :

- Images next/image avec lazy loading
- Fonts optimisées avec next/font
- Cache headers configurés
- Code splitting automatique
- Bundle analyzer intégré

## 🤝 Contribution

1. Fork le projet
2. Créez une branche (`git checkout -b feature/amelioration`)
3. Commit vos changements (`git commit -m 'Ajouter fonctionnalité'`)
4. Push vers la branche (`git push origin feature/amelioration`)
5. Créez une Pull Request

## 📄 License

MIT License - voir le fichier [LICENSE](LICENSE) pour plus de détails.

## 🆘 Support

- **Email** : contact@cybernowseniors.ca
- **Téléphone** : +1-514-555-0123
- **Issues** : [GitHub Issues](https://github.com/votre-username/cybernow-seniors/issues)

## 🙏 Remerciements

- [Next.js](https://nextjs.org/) pour le framework
- [shadcn/ui](https://ui.shadcn.com/) pour les composants
- [Lucide](https://lucide.dev/) pour les icônes
- [Tailwind CSS](https://tailwindcss.com/) pour le styling
- Communauté open source pour les outils et librairies

---

**Fait avec ❤️ au Québec pour nos aînés**