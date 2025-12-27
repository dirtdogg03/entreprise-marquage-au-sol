import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // ═══════════════════════════════════════════════════════════════
        // DESIGN SYSTEM "SIGNAL EXPERT"
        // Palette route (jaune vif) + asphalt (slate)
        // ═══════════════════════════════════════════════════════════════

        // Route - Jaune signalisation vif (principal)
        route: {
          50: '#FEFCE8',
          100: '#FEF9C3',
          200: '#FEF08A',
          300: '#FDE047',
          400: '#FACC15',
          500: '#EAB308',   // PRINCIPALE - Jaune route vif
          600: '#CA8A04',
          700: '#A16207',
          800: '#854D0E',
          900: '#713F12',
        },

        // Asphalt - Slate (texte et backgrounds)
        asphalt: {
          50: '#F8FAFC',    // Background clair
          100: '#F1F5F9',
          200: '#E2E8F0',
          300: '#CBD5E1',
          400: '#94A3B8',
          500: '#64748B',
          600: '#475569',
          700: '#334155',
          800: '#1E293B',   // Texte principal
          900: '#0F172A',   // Texte fonce
        },

        // Aliases pour compatibilite
        primary: {
          50: '#FEFCE8',
          100: '#FEF9C3',
          200: '#FEF08A',
          300: '#FDE047',
          400: '#FACC15',
          500: '#EAB308',
          600: '#CA8A04',
          700: '#A16207',
          800: '#854D0E',
          900: '#713F12',
        },
        secondary: {
          50: '#F8FAFC',
          100: '#F1F5F9',
          200: '#E2E8F0',
          300: '#CBD5E1',
          400: '#94A3B8',
          500: '#64748B',
          600: '#475569',
          700: '#334155',
          800: '#1E293B',
          900: '#0F172A',
          950: '#020617',
        },

        // Accent - Orange vif (pour gradients et accents)
        accent: {
          50: '#FFF7ED',
          100: '#FFEDD5',
          200: '#FED7AA',
          300: '#FDBA74',
          400: '#FB923C',
          500: '#F97316',
          600: '#EA580C',
          700: '#C2410C',
          800: '#9A3412',
          900: '#7C2D12',
        },

        // Couleurs semantiques
        success: {
          50: '#F0FDF4',
          500: '#22C55E',
          600: '#15803D',
        },
        danger: {
          50: '#FEF2F2',
          500: '#EF4444',
          600: '#DC2626',
        },
        background: "var(--background)",
        foreground: "var(--foreground)",
      },

      fontFamily: {
        // Signal Expert: Inter (Black 900) + JetBrains Mono
        sans: ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
        display: ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['var(--font-jetbrains)', 'JetBrains Mono', 'monospace'],
      },

      fontSize: {
        // Display sizes with tight line-height for Signal Expert
        'display-xl': ['4.5rem', { lineHeight: '1.05', letterSpacing: '-0.02em', fontWeight: '900' }],
        'display-lg': ['3.75rem', { lineHeight: '1.08', letterSpacing: '-0.02em', fontWeight: '900' }],
        'display-md': ['3rem', { lineHeight: '1.1', letterSpacing: '-0.01em', fontWeight: '900' }],
        'display-sm': ['2.25rem', { lineHeight: '1.15', letterSpacing: '-0.01em', fontWeight: '900' }],
        // Label mono uppercase
        'label': ['0.75rem', { lineHeight: '1', letterSpacing: '0.1em', fontWeight: '500' }],
      },

      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.5s ease-out',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
      },

      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },

      boxShadow: {
        // Signal Expert: Minimal shadows, using prism-border instead
        'soft': '0 1px 3px rgba(0, 0, 0, 0.05)',
        'prism': '8px 8px 0 0 rgba(234, 179, 8, 0.3)',
        'prism-hover': '12px 12px 0 0 rgba(234, 179, 8, 0.4)',
      },

      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        // Grid orthogonal 40x40px
        'grid-signal': `
          linear-gradient(to right, rgba(30, 41, 59, 0.05) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(30, 41, 59, 0.05) 1px, transparent 1px)
        `,
        // Hero pattern - fond sombre avec grille subtile jaune
        'hero-pattern': `
          linear-gradient(to bottom, rgba(15, 23, 42, 0.95), rgba(15, 23, 42, 0.98)),
          linear-gradient(to right, rgba(234, 179, 8, 0.03) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(234, 179, 8, 0.03) 1px, transparent 1px)
        `,
      },

      backgroundSize: {
        'grid-40': '40px 40px',
      },
    },
  },
  plugins: [typography],
};
export default config;
