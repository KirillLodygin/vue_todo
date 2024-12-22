export default ({
  devtools: { enabled: true },

  modules: [
    '@nuxtjs/tailwindcss',
    'shadcn-nuxt',
    '@nuxtjs/color-mode',
    '@pinia/nuxt',
    ['@nuxtjs/google-fonts', {
      families: {
        Lato: [100, 300],
        Raleway: {
          wght: [100, 400],
          ital: [100]
        },
        Inter: '200..700',
        'Crimson Pro': {
          wght: '200..900',
          ital: '200..700',
        }
      }
    }],
  ],

  shadcn: {
    prefix: 'UI',
    componentDir: './components/ui'
  },

  pinia: {
    storesDirs: ['./store/**']
  },

  compatibilityDate: '2024-12-21',
});