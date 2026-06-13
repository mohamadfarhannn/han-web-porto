import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  app: {
    head: {
      htmlAttrs: {
        lang: 'en'
      }
    }
  },
  css: ['~/assets/main.css'],
  modules: ['@nuxt/ui', '@nuxtjs/color-mode', '@nuxt/icon'],
  colorMode: {
    classSuffix: '',
  },
  vite: {
    plugins: [
      tailwindcss() as any,
    ],
  },
  runtimeConfig: {
    public: {
      isMaintenance: process.env.NUXT_PUBLIC_IS_MAINTENANCE === 'true',
      emailjsServiceId: process.env.NUXT_PUBLIC_EMAILJS_SERVICE_ID || '',
      emailjsTemplateId: process.env.NUXT_PUBLIC_EMAILJS_TEMPLATE_ID || '',
      emailjsPublicKey: process.env.NUXT_PUBLIC_EMAILJS_PUBLIC_KEY || '',
    }
  }
})
