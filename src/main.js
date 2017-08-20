// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import VueResource from 'vue-resource'

import VueSchedule from './modules/VueShedule'
import VueJsonp from './modules/VueJsonp'
import VueSocketIO from './modules/VueSocketIO'
import VueAxios from './modules/VueAxios'
import VueQs from './modules/VueQs'

Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.use(VueResource)
Vue.use(VueSchedule)
Vue.use(VueJsonp)
Vue.use(VueSocketIO)
Vue.use(VueAxios)
Vue.use(VueQs)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {App}
})
