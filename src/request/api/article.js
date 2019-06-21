/**
 * article模块接口列表
 */

import base from './base'; // 导入接口域名列表
import axios from '../http'; // 导入http中创建的axios实例
// import qs from 'qs'; // 根据需求是否导入qs模块

const article = {    
    // 新闻列表    
    articleList () {        
        return axios.get(`${base.sq}/topics`);    
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
    // post提交    
    login (params) {        
        return axios.post(`${base.sq}/accesstoken`, qs.stringify(params));    
    }
    // 其他接口…………
}

export default article;