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
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
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
        // Custom brand colors for CyberNow Seniors
        brand: {
          DEFAULT: '#0A2540',
          50: '#f1f6fb',
          100: '#e5eef6',
          200: '#cfdded',
          500: '#0A2540',
          600: '#092135',
          700: '#071c2a',
          800: '#06171f',
          900: '#051215',
        },
        'accent-cyan': {
          DEFAULT: '#00C2FF',
          50: '#f0fbff',
          100: '#e0f7ff',
          200: '#b3edff',
          500: '#00C2FF',
          600: '#00a8e6',
          700: '#008fcc',
          800: '#0076b3',
          900: '#005d99',
        },
        danger: {
          DEFAULT: '#D92D20',
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca',
          500: '#D92D20',
          600: '#c32621',
          700: '#ad1f1c',
          800: '#971917',
          900: '#801412',
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
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
      },
      minHeight: {
        'touch': '44px',
      },
      minWidth: {
        'touch': '44px',
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
}