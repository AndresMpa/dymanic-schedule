export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxt/image',
    '@vite-pwa/nuxt',
    '@nuxtjs/fontaine',
    '@nuxtjs/html-validator',
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    '@nuxtjs/device',
    'nuxt-og-image'
  ]
})