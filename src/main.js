import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import Fragment from 'vue-fragment'
import router from './router'

Vue.config.productionTip = false
Vue.use(Fragment.Plugin)

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
