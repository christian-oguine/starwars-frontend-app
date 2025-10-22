// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  ssr: true, // ✅ Make sure SSR is enabled
  devtools: { enabled: true },
  nitro: {
    preset: 'netlify'
  },

  app: {
    head: {
      title: 'Star Wars Characters App',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'A Star Wars characters management application built with Nuxt 3 and Pinia.' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      ],
    },
  },  
  
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