<template>
  <div class="header">
    <div class="home_header">
      <div class="home_header_top">{{city}}</div>
      <div class="home_header_nav">
        <ul>
          <li
            v-for="(item,index) in home_header_nav"
            :key="index"
            @click="navTab(item,index,'select'+(index+1))"
            :class="home_header_nav_index === index ? home_header_font : ''"
            :data-index="index"
          >{{item.title}}</li>
        </ul>
      </div>
    </div>
    <keep-alive>
        <component v-bind:is="tabView"></component>
    </keep-alive>
  </div>
</template>
<script>
// import HomeTest from './HomeTest';
import { InfiniteScroll } from "mint-ui";
import getCurrentCityName from "../../common_ditu/getUserLocation";
import select1 from "./home_tabs/Recommended";
import select2 from "./home_tabs/Limited";
import select3 from "./home_tabs/Spelldeals";
export default {
  name: "Home",
  components: {
    // HomeTest
    // Bottom
    select1,
    select2,
    select3
  },
  data() {
    return {
    tabView : 'select1',
    list: [],
    city: "",
    home_header_nav: "",
    home_header_nav_index: 0,
    home_header_font: "home_header_font",
    random_one: 0,
    reduce: [],
    };
  },
  props: {
    inputCommonList: {
      type: Object,
      default: () => {}
    },
    required: true
  },
  created() {},
  mounted() {
    // var number = '151531731534113132wdaidojaiwojdiajodija';
    // console.log('************'+number.substr(-4))
    //    console.log(this.$store.state.showFooter);
    //    console.log(this.$store.state.changableNum);
    this.home_header_nav = this.inputCommonList.data.data.label;
    this.getUserCity();
    this.random_one = this.$route.query.tabs;
    
    console.log(this.random_one);
    console.log(typeof(this.random_one))
  },
  updated() {
    // this.random_one = this.$route.query.tabs;
    // console.log(this.random_one)
    // this.random_one = this.$route.query.tabs;
    // console.log(this.random_one)
    // // this.reduce =  this.home_header_nav;
    // for(var i=0;i<this.home_header_nav.length;i++){
    //     console.log(this.home_header_nav[i])
    //     this.reduce.push(this.home_header_nav[i].id)
    // }
    // console.log(this.reduce[3]);
    // var random = this.$route.query.tabs;
    // var label = this.reduce[random];
    //  this.$api.article.artHomeTabs(label,random,{
    //         }).then(res => {
    //             // 执行某些操作
    //             // console.log(res);
    //             this.list = res.data.data.tabBar;
    //             this.common_list = res;
    //             this.$router.push({path: '/', query: {tabs:random}});
    //             // console.log(this.common_list)
    //             this.flag =true;
    //             },
    //             function(err) {
    //             console.log(err);
    //             }
    //         );
  },
  methods: {
    getUserCity() {
      //   console.log(getCurrentCityName)
      this.$store.state.city ||
        getCurrentCityName().then(city => {
          //   console.log(city)
          this.city = city;
          //   city = city.slice(0,city.length -1)
          //   console.log(city)
          //   this.$store.commit('getCity',city)
        });
    },
    navTab(item, index,arr) {
      // console.log(index)
      console.log(item);
      console.log(arr)
      this.tabView = arr;
      this.home_header_nav_index = index;
      var random = this.home_header_nav_index + 1;
      var label = item.id;
      // console.log(random)

      this.$api.article.artHomeTabs(label, random, {}).then(
        res => {
          // 执行某些操作
          // console.log(res);
          this.list = res.data.data.tabBar;
          this.common_list = res;
          this.$router.push({ path: "/", query: { tabs: random } });
          // console.log(this.common_list)
          this.flag = true;
        },
        function(err) {
          console.log(err);
        }
      );
    }
  }
};
</script>
<style lang="less" scoped>
.header {
  .home_header {
    font-size: 0.24rem;
    height: 0.94rem;
    background: #e10f02
      url(//img2.ch999img.com/m/static/assets/bg_M1.8cd0169….png) no-repeat
      bottom;
    background-size: cover;
    position: fixed;
    top: 0;
    width: 3.75rem;
    transition: all 0.2s ease;
    z-index: 1;
    .home_header_top {
      background: rgba(0, 0, 0, 0.4);
      border-radius: 0.3rem;
      height: 0.34rem;
      padding: 0 0.15rem;
      margin: 0.14rem;
      font-size: 0.18rem;
    }
    .home_header_nav {
      ul {
        display: flex;
        font-size: 0.15rem;
        overflow-x: scroll;
        white-space: nowrap;
        height: 0.3rem;
        li {
          margin: 0 0.1rem;
          color: #fff;
          opacity: 0.8;
        }
        .home_header_font {
          font-size: 0.16rem;
          color: #fff;
          opacity: 1;
          margin-top: -0.01rem;
        }
      }
    }
  }
}
</style>



