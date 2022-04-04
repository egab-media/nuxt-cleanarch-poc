// import path from 'path'
import colors from 'vuetify/es5/util/colors'
import { NuxtConfig } from '@nuxt/types'
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')

const config: NuxtConfig = {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - nuxt-cleanarch-poc',
    title: 'nuxt-cleanarch-poc',
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
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  ssr: false,

  rootDir: '.',

  srcDir: 'src/ui',

  modern: 'client',

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/inversify'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/firebase'
  ],

  firebase: {
    config: {
      apiKey: process.env.API_KEY,
      authDomain: process.env.AUTH_DOMAIN,
      projectId: process.env.PROJECT_ID,
      storageBucket: process.env.STORAGE_BUCKET,
      messagingSenderId: process.env.MESSAGING_SENDER_ID,
      appId: process.env.APP_ID,
      measurementId: process.env.MEASUREMENT_ID
    },
    services: {
      auth: {
        emulatorPort: 9099,
        emulatorHost: 'http://localhost'
      },
      firestore: {
        emulatorPort: 8080,
        emulatorHost: 'localhost'
      },
      storage: true,
      functions: {
        location: 'us-central1',
        emulatorPort: 12345,
        emulatorHost: 'http://10.10.10.3'
      }
    }
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/'
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: true,
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
    extend(config) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore "Property 'buildContext' does not exist on type 'NuxtOptionsBuild'"
      // const rootDir = this.buildContext.options.rootDir
      // const joinSrc = (s: string) => path.join(rootDir, 'src', s)

      // if (!config?.resolve?.alias) {
      //   throw new Error('Webpack config aliases not found!')
      // }

      // config.resolve.alias['@modules'] = joinSrc('modules')
      // config.resolve.alias['@shared'] = joinSrc('shared')
      // config.resolve.alias['@ui'] = joinSrc('ui')

      if (!config.resolve) {
        config.resolve = {}
      }
      if (!config.resolve.plugins) {
        config.resolve.plugins = []
      }
      config.resolve.plugins.push(new TsconfigPathsPlugin({ configFile: './tsconfig.json' }))
    }
  }
}

export default config
