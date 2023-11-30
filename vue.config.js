const { defineConfig } = require('@vue/cli-service')

let opts = process.env.VUE_APP_PLUGIN_ENABLE
  ? {
      // css: {
      //   extract: false
      // },
      configureWebpack: {
        externals: [
          // /^vuetify\//,
          // {
          //   axios: 'axios',
          //   lodash: 'lodash',
          //   quill: 'quill',
          //   'vue-phone-number-input': 'vue-phone-number-input'
          // }
        ]
      }
    }
  : {}

module.exports = defineConfig({
  transpileDependencies: true,

  configureWebpack: {
    ...opts.configureWebpack
    // plugins: [new BundleAnalyzerPlugin()]
  },
})
