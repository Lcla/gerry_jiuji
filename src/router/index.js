import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/home/Home'
import Bottom from '../components/common/Bottom'
import Classify from '../components/Classify/Classify'
import Information from '../components/Information/Information'
import Cart from '../components/Cart/Cart'
import My from '../components/My/My'
Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: '首页',
      component: Home
    },
    // {
    //   path:'/home',
    //   name:'Home',
    //   component: Home
    // },
    {
      path:'/bottom',
      name:'Bottom',
      component:Bottom
    },
    {
      path:'/classify',
      name:'分类',
      component:Classify
    },
    {
      path:'/information',
      name:'消息',
      component:Information
    },
    {
      path:'/cart',
      name:'购物车',
      component:Cart
    },
    {
      path:'/my',
      name:'我的',
      component:My
    }
  ]
})
