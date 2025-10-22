// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  ssr: true, // ✅ Make sure SSR is enabled
  devtools: { enabled: true },
  
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@pinia/nuxt'
  ],

  googleFonts: {
    families: {
      Poppins: true,
      'Cinzel Decorative': [400, 700]
    },
    display: 'swap',
    download: true
  },
})