import Vue from 'vue';
import axios from 'axios';
import Vuex from 'vuex';
Vue.use(Vuex);
const state = {//要设置的全局访问的state对象
    showFooter:true,
    changableNum: 0,
    // get_list:''
    //要设置初始属性值
};
const getters = {
    //实时监听state值的变化（最新状态）
    isShow(state){
    //方法名随意，主要是来承载变化的showFooter的值
    return state.showFooter
    },
    getchangblenum(){
        //方法名随意，主要是用来承载变化的changeableNum的值
        return state.changableNum
        
    },
//     getTab(){
//         this.$axios.get('/api/floors/v1?label=0&page=1&random=0').then(function(res){
//                         console.log(res)
//                         this.get_list = res.data.data.tabBar;
//                         return state.get_list

//         },function(err){
//             console.log("输入错误")
//         })
//   }
};
const store = new Vuex.Store({
    state:{
        data:[]
    },
    getters
});
export default store;