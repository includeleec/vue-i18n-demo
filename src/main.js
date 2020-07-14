import Vue from 'vue'
import App from './App.vue'
import { i18n } from './i18n'
import router from './router'
import { Trans } from './plugins/Translation'

import moment from "moment";

Vue.prototype.$i18nRoute = Trans.i18nRoute.bind(Trans)
Vue.prototype.$moment = moment


Vue.config.productionTip = false

new Vue({
  i18n,
  router,
  render: h => h(App)
}).$mount('#app')
