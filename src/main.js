import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import 'normalize.css'
import '../src/assets/css/abp.css'
import lottie from './components/lottie';

Vue.config.productionTip = false

Vue.component('lottie', lottie)

Vue.prototype.$http = axios
axios.defaults.headers.post['Content-Type'] = 'application/json';

new Vue({
  router,
  store,
  // axios,
  render: h => h(App)
}).$mount('#app')
