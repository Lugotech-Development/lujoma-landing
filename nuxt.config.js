import colors from 'vuetify/es5/util/colors'

export default {
  publicRuntimeConfig: {
    recaptcha: {
      /* reCAPTCHA options */
      hideBadge: true, // Hide badge element (v3 & v2 via size=invisible)
      language: "es",   // Recaptcha language (v2)
      siteKey: '6LfaA28bAAAAAGTG_KRPFotdmNf8RC9CBE45s_c4',    // Site key for requests
      version: "v2",     // Version
      size: "normal"   
    }
  },
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - lujoma',
    title: 'lujoma',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/icon.ico' }
    ]
  },


  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/firebase',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,
  modules: [
    {
      modules: [
        '@nuxtjs/recaptcha',
      ],
    
      recaptcha: {
        hideBadge: false,
        siteKey: "6LcGeGsbAAAAALQnJqFqGpkOjMlshA15f_SqfUkc ",
        version: "v3"
      },
    }
  ],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    '@nuxtjs/recaptcha'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
