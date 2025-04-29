/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"Space Mono"', 'monospace'],
        chivo: ['Chivo', 'sans-serif'],
        playfair: ['"Playfair Display"', 'serif'],
        jakarta: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
        mint: '#ADEDC2',
        cyan: '#C4F4F9',
        azure: '#63BFF4',
        magenta: '#E949DB',
        // Extended palette with darker/lighter variations
        mintDark: '#8BC7A2',
        mintLight: '#C5F3D5',
        cyanDark: '#9ED6DA',
        cyanLight: '#DBFAFD',
        azureDark: '#4A9DCA',
        azureLight: '#9DD5FA',
        magentaDark: '#BC3BB0',
        magentaLight: '#F286E8',
      },
    },
  },
  plugins: [],
}