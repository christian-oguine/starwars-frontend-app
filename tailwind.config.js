/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue", 
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./composables/**/*.{js,ts}",
    "./utils/**/*.{js,ts}",
    "./app.vue",
    "./error.vue"
  ],
  theme: {
    extend: {
      colors: {
        slate: {
          900: '#22223b',
        },
        graybg: '#e5e7eb',
        offwhite: '#f8f8f8',
        accent: '#e63946',
        gold: '#f4a261',
        coolgray: '#adb5bd',
      },
      fontFamily: {
        cinzel: ['"Cinzel Decorative"', 'serif'],
        poppins: ['"Poppins"', 'sans-serif'],
      },
      container: {
        center: true,
        padding: '2rem',
      },
    },
  },
  plugins: [],
}