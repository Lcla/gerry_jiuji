<template>
    <div class="bottom">
        <ul>
            <li v-for="(item,index) in list" :key="index" @click="btnBottom(index,item.title)">
                <img :src="btnImg===index ? item.imagePath[1]:item.imagePath[0]" alt="">
                <div class="bottom_character" :class="btnImg===index ? bottom_color:''">
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
            btnImg:0,
            bottom_color:'bottom_color'
            }
    },
    created(){
        
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
                console.log(res) 
                _this.list = res.data.data.tabBar;  
            },function (err){
                console.log(err)
            })    
        },  
        btnBottom(index,title){
            console.log(index)
            this.btnImg = index;
            console.log(title)
            console.log(this.btnImg)
            switch(title){
                case '首页': this.$router.push('/home');
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
            // if(index === 0 ){
            //     this.$router.push({name:'Home'})
            // }else if(index === 1 ){
            //     this.$router.push({name:'Classify'})
            // }else if(index === 2 ){
            //     this.$router.push({name:'Information'})
            // }else if(index === 3 ){
            //     this.$router.push({name:'Cart'})
            // }else if(index === 4 ){
            //     this.$router.push({name:'My'})
            // }
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


