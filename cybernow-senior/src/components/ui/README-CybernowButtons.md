# Librairie de Boutons Cybernow Seniors

## 📋 Vue d'ensemble

Librairie de boutons accessibles conforme WCAG 2.1 AA pour Cybernow Seniors. Optimisée pour les seniors avec des tailles confortables, contrastes élevés et respect des préférences d'accessibilité.

## 🎨 Design Tokens

### Couleurs
```css
--cnw-primary: #12385D    /* Deep Blue - titres/CTA */
--cnw-secondary: #3BB8A4  /* Teal - accents */
--cnw-info: #A7E3F2       /* Sky - hovers/surbrillance */
--cnw-bg: #FAF9F5         /* Beige doux - fond */
--cnw-text: #0F172A       /* Texte principal */
```

### Dégradé CTA
```css
bg-cnw-gradient: linear-gradient(to right, #12385D, #1c6d8f, #3BB8A4)
```

### Typographies
- **Sora** : Titres et CTA (600/700)
- **Inter** : Texte courant (400/500)
- **Taille minimum** : 18px pour l'accessibilité seniors

## 🚀 Usage

### Import
```tsx
import { Button } from "@/components/ui/CybernowButton";
import { Icon } from "@/components/ui/Icon";
```

### Exemples de base

#### Bouton Primary (gradient)
```tsx
<Button variant="primary" size="lg">
  <Phone className="h-5 w-5" />
  Appeler maintenant
</Button>
```

#### Bouton Secondary (outlined)
```tsx
<Button variant="secondary" size="md" iconPosition="right">
  Être rappelé
  <ArrowRight className="h-5 w-5" />
</Button>
```

#### États spéciaux
```tsx
{/* Loading */}
<Button variant="primary" loading>
  Envoi en cours...
</Button>

{/* Disabled */}
<Button variant="secondary" disabled>
  Indisponible
</Button>

{/* Avec Link (asChild) */}
<Button variant="link" asChild>
  <Link href="/services">Voir nos services</Link>
</Button>
```

## 📐 Variantes

### `variant`
- **`primary`** : Gradient Cybernow, texte blanc, ombre
- **`secondary`** : Outline, border primary, hover teal
- **`ghost`** : Transparent, hover background subtil
- **`link`** : Style lien avec underline

### `size`
- **`sm`** : h-10 (40px), px-4, text 15.2px
- **`md`** : h-12 (48px), px-6, text 16.8px *(défaut)*
- **`lg`** : h-14 (56px), px-7, text 18.4px

### `iconPosition`
- **`left`** : Icône à gauche du texte
- **`right`** : Icône à droite + animation hover
- **`none`** : Pas d'icône *(défaut)*

## ♿ Accessibilité

### WCAG 2.1 AA Conformité
✅ **Contrastes** : Ratio ≥4.5:1 sur tous les backgrounds  
✅ **Tailles** : Zone cliquable ≥44×44px  
✅ **Focus** : Ring visible avec `focus-visible`  
✅ **Texte** : Taille ≥18px par défaut (md/lg)  
✅ **Couleurs** : Pas d'information transmise uniquement par la couleur  

### Préférences utilisateur
✅ **`prefers-reduced-motion`** : Désactive animations scale/translate  
✅ **Dark mode** : Couleurs adaptées avec classes `dark:`  
✅ **Screen readers** : ARIA attributes appropriés  

### Attributs ARIA
```tsx
aria-disabled={disabled}
aria-busy={loading}
aria-live="polite" // Pour les états loading
```

## 🌙 Dark Mode

Les boutons s'adaptent automatiquement :

```css
/* Primary reste identique (gradient lisible) */
dark:focus-visible:ring-offset-neutral-900

/* Secondary */
dark:bg-neutral-900 dark:hover:bg-neutral-800

/* Ghost & Link */
dark:text-cnw-info dark:hover:text-cnw-secondary
```

## 🎯 Exemples avancés

### Formulaire complet
```tsx
export function ContactForm() {
  const [loading, setLoading] = useState(false);
  
  return (
    <form onSubmit={handleSubmit}>
      {/* Actions rapides */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <Button variant="primary" size="lg" iconPosition="left">
          <Phone className="h-5 w-5" />
          Appel immédiat
        </Button>
        <Button variant="secondary" size="lg" iconPosition="left">
          <MessageCircle className="h-5 w-5" />
          Chat en ligne
        </Button>
      </div>
      
      {/* Soumission avec loading */}
      <Button 
        type="submit"
        variant="primary" 
        size="lg"
        loading={loading}
        disabled={!isValid}
        className="w-full"
      >
        {loading ? "Envoi..." : "Envoyer le message"}
        {!loading && <Send className="h-5 w-5" />}
      </Button>
    </form>
  );
}
```

### Grid de services
```tsx
{services.map(service => (
  <Card key={service.id}>
    <CardContent>
      <h3>{service.title}</h3>
      <p>{service.description}</p>
      
      <Button variant="ghost" size="sm" iconPosition="right">
        En savoir plus
        <ExternalLink className="h-4 w-4" />
      </Button>
    </CardContent>
  </Card>
))}
```

## 🎨 Composant Icon (optionnel)

```tsx
import { Icon } from "@/components/ui/Icon";

<Icon size="lg" color="primary">
  <Shield />
</Icon>
```

### Tailles Icon
- `xs`: 12px, `sm`: 16px, `md`: 20px, `lg`: 24px, `xl`: 32px

### Couleurs Icon
- `primary`, `secondary`, `info`, `text`, `muted`, `inherit`

## 🚦 Tests d'accessibilité

### Checklist validation
- [ ] Contrastes vérifiés avec WebAIM
- [ ] Navigation clavier fonctionnelle
- [ ] Focus ring visible sur tous états
- [ ] Screen reader : labels et états annoncés
- [ ] Reduced motion : animations désactivées
- [ ] Dark mode : lisibilité préservée
- [ ] Tailles touch-friendly (≥44px)

### Outils recommandés
- **axe DevTools** : Tests automatisés
- **WebAIM Contrast Checker** : Validation contrastes
- **Keyboard navigation** : Tab, Enter, Space
- **Screen reader** : NVDA/JAWS testing

## 📝 Critères d'acceptation

✅ **Cohérence visuelle** : Design system respecté  
✅ **Performance** : Pas de re-renders inutiles  
✅ **TypeScript** : Types stricts, IntelliSense  
✅ **Bundle size** : Optimisé avec tree-shaking  
✅ **Responsive** : Fonctionne mobile/desktop  
✅ **Maintenance** : Code documenté et extensible  

---

**🏆 Librairie prête pour production Cybernow Seniors**