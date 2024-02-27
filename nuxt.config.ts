// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    apiSecret: '123',
    public: {
      apiBase: '/api'
    }
  }
  devtools: { enabled: true },
  modules: [
    'nuxt-icons',
    '@pinia/nuxt',
    '@nuxt/image',
    '@vite-pwa/nuxt',
    '@nuxtjs/fontaine',
    '@nuxtjs/html-validator',
  ]
})
