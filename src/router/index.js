import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/home/Home'
import Bottom from '../components/common/Bottom'
import Classify from '../components/Classify/Classify'
import Information from '../components/Information/Information'
import Cart from '../components/Cart/Cart'
import My from '../components/My/My'
import Login from '../components/My/login/Login'
import Register from '../components/My/register/Register'
Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: '首页',
      component: Home,
      meta:{
        keepAlive:true
      }
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
      component:Classify,
      meta:{
        keepAlive:true //此组件需要被缓存
      }
    },
    {
      path:'/information',
      name:'消息',
      component:Information,
      meta:{
        keepAlive:true //此组件需要被缓存
      }
    },
    {
      path:'/cart',
      name:'购物车',
      component:Cart,
      meta:{
        keepAlive:true //此组件需要被缓存
      }
    },
    {
      path:'/my',
      name:'我的',
      component:My,
      meta:{
        keepAlive:true //此组件需要被缓存
      }
    },
    {
      path:'/login',
      name:'Login',
      component:Login
    },
    {
      path:'/register',
      name:'Register',
      component:Register
    }
  ]
})
