# 📞 Boutons CTA Cybernow Seniors

## Vue d'ensemble

Composants CTA spécialisés utilisant le style moderne avec `data-slot="button"` et classes CSS optimisées. Conçus spécifiquement pour "Appeler maintenant" et "Être rappelé" avec design seniors-friendly.

## 🎯 Style moderne implémenté

### Structure HTML générée
```html
<button 
  data-slot="button" 
  class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-cybernow text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive shadow-cybernow bg-secondary text-secondary-foreground hover:bg-secondary/80 h-14 px-8 py-4 min-h-14 has-[>svg]:px-3 w-full"
>
  <!-- Contenu -->
</button>
```

### Classes CSS modernes utilisées
- **`data-slot="button"`** : Attribut de slot moderne
- **`[&_svg]:pointer-events-none`** : SVG non cliquables
- **`[&_svg:not([class*='size-'])]:size-4`** : Taille auto des icônes
- **`focus-visible:ring-[3px]`** : Ring focus visible
- **`has-[>svg]:px-3`** : Padding adaptatif avec icônes
- **`shadow-cybernow`** : Ombre custom Cybernow

## 🚀 Utilisation

### Import
```tsx
import { CTAButtons, CallButton, CallbackButton } from "@/components/ui/CTAButtons";
```

### Boutons CTA complets
```tsx
<CTAButtons 
  size="lg"
  layout="horizontal" 
  phoneNumber="+15141234567"
  className="max-w-lg mx-auto"
/>
```

### Bouton Appeler seul
```tsx
<CallButton 
  size="lg"
  phoneNumber="+15141234567"
  className="w-full"
>
  Appeler notre équipe
</CallButton>
```

### Bouton Être rappelé seul
```tsx
<CallbackButton 
  size="md"
  onClick={() => openCallbackModal()}
>
  Planifier un rappel
</CallbackButton>
```

## 📐 Propriétés

### CTAButtons
```tsx
interface CTAButtonsProps {
  phoneNumber?: string;        // Numéro à appeler
  className?: string;          // Classes CSS additionnelles
  layout?: "horizontal" | "vertical"; // Disposition
  size?: "sm" | "md" | "lg";  // Taille des boutons
}
```

### CallButton / CallbackButton
```tsx
interface ButtonProps {
  phoneNumber?: string;        // Pour CallButton uniquement
  onClick?: () => void;       // Pour CallbackButton uniquement
  children?: React.ReactNode; // Texte custom
  size?: "sm" | "md" | "lg"; 
  className?: string;
}
```

## 🎨 Variantes visuelles

### Primary (Appeler maintenant)
```css
/* Dégradé Cybernow avec icône colorée */
bg-cnw-gradient text-white shadow-cybernow
hover:bg-cnw-gradient-hover hover:shadow-lg
```

### Secondary (Être rappelé)  
```css
/* Style moderne secondary */
bg-secondary text-secondary-foreground shadow-cybernow
hover:bg-secondary/80
border border-secondary
```

## 🎯 Exemples d'intégration

### Hero Section
```tsx
export function HeroSection() {
  return (
    <section>
      <div className="text-center">
        <h1>Votre protection numérique</h1>
        <p>Accompagnement humain et local</p>
        
        {/* CTA moderne avec data-slot */}
        <CTAButtons 
          size="lg"
          layout="horizontal"
          className="max-w-md mx-auto mt-8"
        />
      </div>
    </section>
  );
}
```

### Section finale CTA
```tsx
export function FinalCTA() {
  return (
    <section className="bg-gradient-cta text-white py-20">
      <div className="text-center">
        <h2>Besoin d'aide dès maintenant ?</h2>
        
        <CTAButtons 
          size="lg"
          layout="horizontal"
          className="max-w-lg mx-auto"
        />
      </div>
    </section>
  );
}
```

### Sidebar ou formulaire
```tsx
<div className="bg-white p-6 rounded-2xl shadow-lg">
  <h3>Contactez-nous</h3>
  <p>Notre équipe est disponible</p>
  
  <CTAButtons 
    size="md"
    layout="vertical"
    className="mt-4"
  />
</div>
```

## ♿ Accessibilité maintenue

✅ **WCAG 2.1 AA** : Contrastes et tailles respectés  
✅ **Focus visible** : Ring de 3px sur focus-visible  
✅ **Touch targets** : Minimum 44×44px (min-h-11)  
✅ **Keyboard nav** : Tab, Enter, Space fonctionnels  
✅ **Screen readers** : Labels et états annoncés  
✅ **ARIA** : Attributes automatiques  

## 🔧 Personnalisation avancée

### Override des styles
```tsx
<CTAButtons 
  className="
    [&_button[data-slot='button']]:bg-red-500 
    [&_button[data-slot='button']]:hover:bg-red-600
  "
/>
```

### Téléphone custom par contexte
```tsx
// Support technique
<CallButton phoneNumber="+15141234567">
  Support technique
</CallButton>

// Urgences
<CallButton 
  phoneNumber="+15149876543"
  className="bg-red-500 hover:bg-red-600"
>
  Urgence cyber
</CallButton>
```

### Callback avec modal
```tsx
function ContactSection() {
  const [showModal, setShowModal] = useState(false);
  
  return (
    <>
      <CallbackButton 
        onClick={() => setShowModal(true)}
        size="lg"
      >
        Être rappelé sous 24h
      </CallbackButton>
      
      {showModal && <CallbackModal onClose={() => setShowModal(false)} />}
    </>
  );
}
```

## 🎨 Classes CSS générées

### Structure complète (exemple)
```html
<button 
  data-slot="button"
  class="
    inline-flex items-center justify-center gap-2 whitespace-nowrap 
    rounded-cybernow text-sm font-medium transition-all
    disabled:pointer-events-none disabled:opacity-50
    [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4
    shrink-0 [&_svg]:shrink-0
    outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]
    aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive
    has-[>svg]:px-3
    shadow-cybernow bg-cnw-gradient text-white 
    hover:bg-cnw-gradient-hover hover:shadow-lg
    h-14 px-8 py-4 min-h-14
  "
>
  <svg class="shrink-0"><!-- ColoredIcon phone --></svg>
  Appeler maintenant
</button>
```

---

**📞 Boutons CTA modernes et accessibles pour Cybernow Seniors !**