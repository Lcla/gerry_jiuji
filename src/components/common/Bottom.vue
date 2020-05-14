<template>
    <div class="bottom">
        <ul>
            <li v-for="(item,index) in list" :key="index" @click="btnBottom(index,item.title)" >
                    <img :src="btnTitle===item.title ? item.imagePath[1]:item.imagePath[0]" alt="" >
                    <div class="bottom_character" :class="btnTitle===item.title ? bottom_color:''">
                        {{item.title}}                    
                    </div>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    data(){
        return {
            list:[],
            bottom_color:'bottom_color',
            tabsIndex:0,
            btnTitle:'',
            }
    },
    created(){
       if(window.location.pathname==this.$router.history.current.path){
            this.btnTitle=this.$router.history.current.name;
        }  
    },
    mounted(){
        this.onLoad();
    },
    updated(){
    },
    methods:{
        onLoad() {      
            var _this = this;
            _this.$api.article.articleDetail( {        
            }).then(res=> {
                // 执行某些操作   
                _this.list = res.data.data.tabBar;  
            },function (err){
                console.log(err)
            })    
        },  
        btnBottom(index,title){
            this.btnTitle = title;
            switch(title){
                case '首页': this.$router.push('/');
                break;
                case '分类': this.$router.push('/classify');
                break;
                case '消息': this.$router.push('/information');
                break;
                case '购物车': this.$router.push('/cart');
                break;
                case '我的': this.$router.push('/my');
                break;
            }
        }
    }
}
</script>
<style lang="less" scoped>
    .bottom{
        width: 100%;
        position: fixed;
        bottom: 0;
        left: 0;
        ul{
            display: flex;
            justify-content: space-around;
            font-size: 0.2rem;
            list-style: none;
            li{
                font-size: 0.12rem;
                img{
                    width: 0.24rem;
                    height: 0.24rem;
                }
                .bottom_color{
                    color: #f21c1c;
                }
            }
        }
    }
</style>


