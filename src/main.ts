import Vue from 'vue'
import App from './App.vue'

// import myPlugin from '../dist/mylib.module.common.js'

// eslint-disable-next-line
const yourModuleName = require('../dist/mylib.module.common.js');

Vue.config.productionTip = false
Vue.use(yourModuleName);

new Vue({
  render: h => h(App),
}).$mount('#app')
