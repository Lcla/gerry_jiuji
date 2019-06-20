<template>
    <div class="header">
        <div class="home_header">
            <div class="home_header_top">
                {{city}}
            </div>
             <div class="home_header_nav">
                 <ul>
                     <li v-for="(item,index) in home_header_nav"
                      :key="index" @click="navTab(index)" 
                      :class="home_header_nav_index === index ? home_header_font : ''"
                      >{{item.title}}</li>
                 </ul>
            </div>
            <div class=""></div>
        </div>
    </div>
</template>
<script>
// import HomeTest from './HomeTest';
import { InfiniteScroll } from 'mint-ui';
import getCurrentCityName from '../../common_ditu/getUserLocation';
export default {
    name:'Home',
    components:{
        // HomeTest
        // Bottom
        
   },
   data(){
       return {
         name:'',
         add:0,
         reduce:0,
         list:[
            
         ],
         city:'',
         home_header_nav:'',
         home_header_nav_index:0,
         home_header_font:'home_header_font'
       }
   },
   props:{
       inputCommonList:{
           type:Object,
           default: ()=>{}
       },
       required:true
   },
   created(){
       window.location.href+'?tabs=1'
        this.$route.path+'?tabs=1'
   },
   mounted(){
        //    console.log(this.$store.state.showFooter);
        //    console.log(this.$store.state.changableNum);
        console.log(window.location.href+'?tabs=1');
        console.log(this.$route.path+'?tabs=1');
        console.log(this.inputCommonList)
        window.location.href+'?tabs=1'
        this.$route.path+'?tabs=1'
        this.home_header_nav = this.inputCommonList.data.data.label;
        this.getUserCity();
   },
   methods:{
      getUserCity(){
        //   console.log(getCurrentCityName)
          this.$store.state.city || getCurrentCityName().then((city)=>{
            //   console.log(city)
              this.city =city;
            //   city = city.slice(0,city.length -1)
            //   console.log(city)
            //   this.$store.commit('getCity',city)
          })
      },
      navTab(index){
        console.log(index)
        this.home_header_nav_index = index;
        this.$router.push({path: '/', query: {tabs:this.home_header_nav_index+1}});
      }
   }
}
</script>
<style lang="less" scoped>
    .home_header{
        font-size: 0.24rem;
        height: 0.94rem;
        background: #e10f02 url(//img2.ch999img.com/m/static/assets/bg_M1.8cd0169….png) no-repeat bottom;
        background-size: cover;
        position: fixed;
        top: 0;
        width: 3.75rem;
        transition: all .2s ease;
        z-index: 1;
        .home_header_top{
            background: rgba(0,0,0,.4);
            border-radius: 0.3rem;
            height: 0.34rem;
            padding: 0 0.15rem;
            margin: 0.14rem;
            font-size: 0.18rem;
        }
        .home_header_nav{
           ul{
                display: flex;
                font-size: 0.15rem;
                overflow-x: scroll;
                white-space:nowrap;
                height: 0.3rem;
                li{
                    margin:0 0.10rem;
                    color: #fff;
                    opacity: .8;
                }
                .home_header_font{
                    font-size: 0.16rem;
                    color: #fff;
                    opacity:1;
                    margin-top: -0.01rem;
                }
           }
        }
    }
</style>



