// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/content', '@nuxt/ui', '@nuxt/image'],
  css: ['~/assets/css/main.css'],
  routeRules: {
    '/': { redirect: '/projets' }
  },
  runtimeConfig: {
    public: {
      emailjsServiceId: '',      // Nuxt remplace automatiquement avec NUXT_PUBLIC_EMAILJS_SERVICE_ID
      emailjsTemplateId: '',     // → NUXT_PUBLIC_EMAILJS_TEMPLATE_ID
      emailjsPublicKey: '',      // → NUXT_PUBLIC_EMAILJS_PUBLIC_KEY
    }
  }
})
