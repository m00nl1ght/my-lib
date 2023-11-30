import Vue from 'vue'

import DSButton from '@/components/button/button.vue'

Vue.component('MyButton', DSButton)


function install(Vue, options) {
  if (install.installed) return
  install.installed = true

  if (options && options.proxy) {
    // axios.defaults.baseURL = options.proxy
    // axios.defaults.withCredentials = true
    Vue.prototype.$proxy = options.proxy
  }
}

// Create module definition for Vue.use()
const plugin = {
  install
}

// To auto-install when vue is found
let GlobalVue = null
if (typeof window !== 'undefined') {
  GlobalVue = window.Vue
} else if (typeof global !== 'undefined') {
  GlobalVue = global.Vue
}
if (GlobalVue) {
  GlobalVue.use(plugin)
}

// Default export is library as a whole, registered via Vue.use()
export default plugin