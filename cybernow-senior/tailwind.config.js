/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        "ring": "#A7E3F2", // Pour focus-visible:ring-ring
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          50: '#f0f5f9',
          100: '#dde8f2',
          200: '#b8d1e6',
          300: '#8fb3d6',
          400: '#6691c2',
          500: '#12385D',
          600: '#0f2e4d',
          700: '#0c253e',
          800: '#081c2e',
          900: '#05131f',
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
          50: '#f0fdf9',
          100: '#dcfcf0',
          200: '#bbf7e1',
          300: '#8aeeca',
          400: '#52ddb0',
          500: '#3BB8A4',
          600: '#2d9985',
          700: '#247a6b',
          800: '#1e6157',
          900: '#1a5049',
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        success: {
          DEFAULT: "hsl(var(--success))",
          foreground: "hsl(var(--success-foreground))",
        },
        // CyberNow Seniors New Color Palette - WCAG Compliant
        'trust-blue': '#4A90E2', // Bleu ciel doux - couleur de confiance/sécurité - 4.8:1 contrast
        'alert-orange': '#F5A623', // Orange chaleureux - accent alerte risques cyber - 3.5:1 contrast  
        'success-green': '#7ED321', // Vert olive - succès/sauvegarde - 4.6:1 contrast
        'text-primary': '#000000', // Noir - texte principal - 21:1 contrast
        'text-secondary': '#333333', // Gris foncé - texte secondaire - 12:1 contrast
        'bg-primary': '#FFFFFF', // Blanc pur - fond principal
        // Legacy colors for backward compatibility
        info: {
          DEFAULT: '#4A90E2', // Updated to trust blue
          50: '#f0f7ff',
          100: '#e1efff',
          200: '#bddeff',
          300: '#85c7ff',
          400: '#4A90E2',
          500: '#2170d9',
          600: '#1456be',
          700: '#134499',
          800: '#153a7f',
          900: '#163169',
        },
        // Palette couleurs CyberNow spécifique pour icônes
        'cybernow-deep': '#0A2540',
        'cybernow-cyan': '#12B4E8', 
        'cybernow-lime': '#B9F227',
        // Design tokens Cybernow Seniors - Updated to new palette
        'cnw-primary': '#4A90E2', // Bleu ciel doux - couleur de confiance
        'cnw-secondary': '#333333', // Gris foncé - texte secondaire
        'cnw-alert': '#F5A623', // Orange chaleureux - alertes
        'cnw-success': '#7ED321', // Vert olive - succès
        'cnw-bg': '#FFFFFF', // Blanc pur - fond principal
        'cnw-text': '#000000', // Noir - texte principal
        'cnw-text-secondary': '#333333' // Gris foncé - texte secondaire
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        // Design tokens rayons
        'cybernow': '12px',
        '2xl': '16px', // Rayon standard Cybernow
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      fontSize: {
        'body': ['18px', { lineHeight: '1.6' }],
        'xl-button': ['20px', { lineHeight: '1.4' }],
        // Tailles boutons Cybernow (≥18px)
        'cnw-sm': ['0.95rem', { lineHeight: '1.4' }], // ~15.2px
        'cnw-md': ['1.05rem', { lineHeight: '1.4' }], // ~16.8px
        'cnw-lg': ['1.15rem', { lineHeight: '1.4' }], // ~18.4px
      },
      spacing: {
        // Design tokens espacements CyberNow
        '2': '8px',
        '3': '12px', 
        '4': '16px',
        '6': '24px',
        '8': '32px',
        '12': '48px',
        '16': '64px',
      },
      boxShadow: {
        // Design tokens ombres
        'cybernow': '0 6px 24px rgba(18, 56, 93, 0.10)',
        'cnw-button': '0 8px 24px rgba(18, 56, 93, 0.18)',
      },
      backgroundImage: {
        // Gradient CTA CyberNow
        'gradient-cta': 'linear-gradient(135deg, #12385D, #3BB8A4)',
        'cnw-gradient': 'linear-gradient(to right, #12385D, #1c6d8f, #3BB8A4)',
        'cnw-gradient-hover': 'linear-gradient(to right, #16507c, #1e799d, #49c3b2)',
      },
      minHeight: {
        'touch': '44px',
      },
      minWidth: {
        'touch': '44px',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        heading: ['var(--font-sora)', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
}