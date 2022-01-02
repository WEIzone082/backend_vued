import Vue from 'vue'
import App from './App.vue'
import router from './router'
// 以下為新增 詳細請參見群組備註
import axios from 'axios'
import vueAxios from 'vue-axios'
import cors from 'cors'


Vue.config.productionTip = false

// cors那個部分我不知道到底有沒有用 先不要管
Vue.use(vueAxios, axios, cors({
  origin:['http://localhost/Vue']
}))
// 讓Axios可供全域使用
Vue.prototype.$axios = axios

new Vue({
  vueAxios,
  axios,
  cors,
  router,
  render: h => h(App),
  beforeMount(){
    Vue.prototype.$bus = this;
  }
}).$mount('#app')
