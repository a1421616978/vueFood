import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/flexible'
import Vant from 'vant'
import axios from 'axios'
import './assets/reset.css'
import 'vant/lib/index.css'
import '../font/iconfont.css'
Vue.use(Vant);
Vue.prototype.axios=axios
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
