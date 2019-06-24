import Vue from 'vue'
import axios from 'axios'
import App from './App'
import router from './router'
import store from './store'
import less from 'less'
// 引入全部组件
import mintUI from 'mint-ui';
import "mint-ui/lib/style.css"
import api from './request/api/index' // 导入api接口
//引入手机端可以看到打印出来的数据
require('./assets/util/vconsole.js')
import formatDate from './assets/util/formatDate'
Vue.use(mintUI);
Vue.use(less)
// 注册为全局过滤器
Vue.filter('formatDate', formatDate)
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
