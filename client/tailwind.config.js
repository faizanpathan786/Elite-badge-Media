/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Geist Sans', 'Inter', 'system-ui', 'sans-serif'],
        headline: ['General Sans', 'system-ui', 'sans-serif'],
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        'hero-sub': 'hsl(var(--hero-sub))',
        card: 'hsl(var(--card))',
        'card-border': 'hsl(var(--card-border))',
        primary: '#8B5CF6',
        'primary-dark': '#7C3AED',
        secondary: '#EC4899',
        gold: '#F59E0B',
      },
      animation: {
        'float': 'float 8s ease-in-out infinite',
        'float-slow': 'float 12s ease-in-out infinite',
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'marquee': 'marquee 20s linear infinite',
      },
      keyframes: {
        float:    { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-24px)' } },
        fadeUp:   { '0%': { opacity: '0', transform: 'translateY(30px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } },
        marquee:  { from: { transform: 'translateX(0%)' }, to: { transform: 'translateX(-50%)' } },
      },
    },
  },
  plugins: [],
}
