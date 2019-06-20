import Vue from 'vue'
import axios from 'axios'
import App from './App'
import router from './router'
import store from './store'
import less from 'less'
// 引入全部组件
import Mint from 'mint-ui';
import api from './request/api/index' // 导入api接口

Vue.use(Mint);
Vue.use(less)
Vue.prototype.$axios =axios
Vue.prototype.$api = api; // 将api挂载到vue的原型上
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
