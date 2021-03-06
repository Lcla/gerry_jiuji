/**
 * article模块接口列表
 */

import base from './base'; // 导入接口域名列表
import axios from '../http'; // 导入http中创建的axios实例
// import qs from 'qs'; // 根据需求是否导入qs模块

const article = {    
    // 新闻列表    
    homeHead () {        
        return axios.get(`/api/user/userInfo/v1`);    
    },    
    // bottom   
    articleDetail () {        
        return axios.get(`/api/floors/v1?label=0&page=1&random=0`, {                   
        });    
    },
    // home
    artHomeTabs (label,random) {
        return axios.get(`/api/floors/v1?label=${label}&page=1&random=${random}`,{
        })
    },
    // my我的    
    artMy () {        
        return axios.get(`/api/member/index/v1?v=0.651647111014251`, {});    
    }
    // 其他接口…………
}

export default article;