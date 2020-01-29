import Vue from 'vue'
import Vant from 'vant'
import 'vant/lib/index.css'
import App from './App.vue'
import router from './router'
import pagehead from './components/pagehead'

Vue.config.productionTip = false
Vue.use(Vant);
new Vue({
  router,
  pagehead,
  render: h => h(App)
}).$mount('#xdzs-app')
