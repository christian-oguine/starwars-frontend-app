// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    '@nuxt/icon',
    '@nuxt/image'
  ],

  googleFonts: {
    families: {
    'Cinzel Decorative': [400, 700],
    'Lato': [400, 700, 900]
    },
    display: 'swap',
    preconnect: true,
    prefetch: true,
    preload: true,
    download: true
  }
})