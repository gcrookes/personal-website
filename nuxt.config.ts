// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['@/assets/custom.scss', '~/assets/css/main.css'],

  modules: [
      'nuxt-quasar-ui',
      'nuxt-particles',
      '@nuxtjs/supabase',
  ],

  quasar: {
    sassVariables: '@/assets/quasar.variables.sass',
    plugins: [
      'BottomSheet',
      'Dialog',
      'Loading',
      'LoadingBar',
      'Notify',
      'Dark',
    ],
    extras: {
      font: 'roboto-font',
    },
    components: {
      defaults: {
        QBtn: {
          unelevated: true,
        },
      },
    },
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  supabase: {
    redirect: false,
  },

  compatibilityDate: '2024-11-12',
});