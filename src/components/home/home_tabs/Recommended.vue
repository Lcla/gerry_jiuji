<template>
  <div class="recommended">
    <!-- 回顶部按钮为一张50*50的图片 -->
    <!-- btnFlag 控制图片显示隐藏 -->
    <!-- backTop 回顶部的方法 -->
    <div class="go-top">
      <img v-if="btnFlag" src="/static/images/news.631f4fc3356569715f192b0173db71da.png" @click="backTop">
    </div>
    <!-- 首焦 -->
    <div class="banner" :data-id="common_list.floor[0].title">
      <mt-swipe class="mt_swipe" :auto="5000">
        <mt-swipe-item v-for="(item,index) in swipe_list" :key="index">
          <a href>
            <img :src="item.imagePath" alt>
          </a>
        </mt-swipe-item>
      </mt-swipe>
    </div>
    <!-- 优势展示 -->
    <div class="floor" :data-id="common_list.floor[1].title">
        <div class="floor-picture">
            <a href>
                <img :src="common_list.floor[1].content[0].imagePath" alt="">
            </a>
        </div>
    </div>
    <!-- 服务图标 -->
    <div class="floor" :data-id="common_list.floor[2].title">
        <div class="floor-picture service_flex">
            <a href v-for="(item,index) in service_list" :key="index">
                <img :src="item.imagePath" alt="">
            </a>
        </div>
    </div>
    <!-- 一小时极速达 -->
    <div class="floor" :data-id="common_list.floor[3].title">
        <div class="floor-picture service_flex college_flex">
            <a href v-for="(item,index) in college_list" :key="index">
                <img :src="item.imagePath" alt="">
            </a>
        </div>
    </div>
    <!-- 订单 -->
    <div class="floor" :data-id="common_list.floor[4].title">
        <span>{{ home_time*1 | formatDate  }} </span>
        <div id="app" v-if="falg">{{`${day} 天 ${hr} : ${min} : ${sec}`}}</div>
        <div id="app" v-if="!falg">已结束</div>
    </div>
    <!-- 新人礼优惠 -->
    <div class="floor" :data-id="common_list.floor[5].title">
        <div class="floor-picture service_flex college_flex">
            <a href v-for="(item,index) in college_list_1" :key="index">
                <img :src="item.imagePath" alt="">
            </a>
        </div>
    </div>
    <!-- 头条 -->
    <div class="floor" :data-id="common_list.floor[6].title">
        <div class="floor-picture headline">
            <div class="headline_left fl">
              <a href="">
                <img src="/static/images/news.631f4fc3356569715f192b0173db71da.png" alt="">
              </a>
            </div>
            <div class="headline_right">
              <van-swipe vertical :autoplay="3000" :show-indicators="false" :touchable="false">
                <a href="" v-for="(item,index) in college_list_2" :key="index">
                  <van-swipe-item><span class="fl" :title="item.title">{{item.title}}</span><img :src="item.picture" alt="" class="fr"></van-swipe-item>
                </a>
              </van-swipe>
            </div>
        </div>
    </div>
    <!-- 安卓新品推荐1 -->
    <div class="floor" :data-id="common_list.floor[7].title">
      <div class="floor-picture new_product">
          <a href="" v-for="(item,index) in college_list_3" :key="index">
           <img :src="item.imagePath" alt="">
          </a>
      </div>
    </div>
    <!-- 安卓新品推荐2 -->
    <div class="floor" :data-id="common_list.floor[8].title">
      <div class="floor-picture new_product1">
          <a href="" v-for="(item,index) in college_list_4" :key="index">
           <img :src="item.imagePath" alt="">
          </a>
      </div>
    </div>
    <!-- 安卓新品推荐3 -->
    <div class="floor" :data-id="common_list.floor[9].title">
      <div class="floor-picture new_product2">
          <a href="" v-for="(item,index) in college_list_5" :key="index">
           <img :src="item.imagePath" alt="">
          </a>
      </div>
    </div>
    <!-- 高度 -->
    <div class="altitude"></div>
    <!-- 标题-为你优选 -->
    <div class="floor" :data-id="common_list.floor[10].title">
      <div class="floor-picture optimization">
           <img v-for="(item,index) in college_list_6" :key="index" :src="item.imagePath" alt="">
      </div>
    </div>
    <!-- 为你优选商品 -->
    <div class="floor floorPreferred" :data-id="college_list_7">
      <div class="floor-picture preferredCommodity">
        <div class="commodityOdd">
          <img src="https://img2.ch999img.com/pic/product/440x440/20180801171051435.jpg.webp" alt="">
          <ul>
            <li>触宝 苹果iPhone 6/6s 2.5D钢化膜</li>
            <li>高清高透 防刮耐磨</li>
            <li>￥99</li>
          </ul>
        </div>
        <div class="commodityOdd">
          <img src="https://img2.ch999img.com/pic/product/440x440/20180801171051435.jpg.webp" alt="">
          <ul>
            <li>触宝 苹果iPhone 6/6s 2.5D钢化膜</li>
            <li>高清高透 防刮耐磨</li>
            <li>￥99</li>
          </ul>
        </div>
        <div class="commodityOdd">
          <img src="https://img2.ch999img.com/pic/product/440x440/20180801171051435.jpg.webp" alt="">
          <ul>
            <li>触宝 苹果iPhone 6/6s 2.5D钢化膜</li>
            <li>高清高透 防刮耐磨</li>
            <li>￥99</li>
          </ul>
        </div>
        <div class="commodityOdd">
          <img src="https://img2.ch999img.com/pic/product/440x440/20180801171051435.jpg.webp" alt="">
          <ul>
            <li>触宝 苹果iPhone 6/6s 2.5D钢化膜</li>
            <li>高清高透 防刮耐磨</li>
            <li>￥99</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {formatDate} from '../../../assets/util/date';
import { Swipe, SwipeItem } from 'vant';
export default {
  name: "recommended",
  components: {
  },
  filters: {
      formatDate(time) {
          var date = new Date(time);
          return formatDate(date, 'yyyy-MM-dd hh:mm');
      }
  },
  data() {
    return {
      btnFlag:false,
      swipe_list: [],
      common_list: [],
      service_list:[],
      college_list:[],
      college_list_1:[],
      college_list_2:[],
      college_list_3:[],
      college_list_4:[],
      college_list_5:[],
      college_list_6:[],
      college_list_7:'为你优选商品',
      home_time:'1561425870753',
      day: 0, hr: 0, min: 0, sec: 0,
      falg:true,
      timer: null  // 定时器名称     
    };
  },
  props: {
    home_list: {
      type: Object,
      default: () => {}
    },
    required: true
  },
  created() {
    // console.log(this.home_list);
    this.common_list = this.home_list.data.data.container;
    this.service_list = this.home_list.data.data.container.floor[2].content;
    this.college_list = this.home_list.data.data.container.floor[3].content;
    this.college_list_1 = this.home_list.data.data.container.floor[5].content;
    this.college_list_2 = this.home_list.data.data.container.floor[6].content;
    this.college_list_3 = this.home_list.data.data.container.floor[7].content;
    this.college_list_4 = this.home_list.data.data.container.floor[8].content;
    this.college_list_5 = this.home_list.data.data.container.floor[9].content;
    this.college_list_6 = this.home_list.data.data.container.floor[10].content;
  },
  mounted() {
    this.swipe_list = this.home_list.data.data.container.floor[0].content
    this.countdown();
    // 滚动条
    window.addEventListener('scroll', this.scrollToTop)
  },
  destroyed () {
    window.removeEventListener('scroll', this.scrollToTop)
  },
  methods: {
     // 点击图片回到顶部方法，加计时器是为了过渡顺滑
    backTop () {
        const that = this
        let timer = setInterval(() => {
          let ispeed = Math.floor(-that.scrollTop / 5)
          document.documentElement.scrollTop = document.body.scrollTop = that.scrollTop + ispeed
          if (that.scrollTop === 0) {
            clearInterval(timer)
          }
        }, 16)
    },
 
    // 为了计算距离顶部的高度，当高度大于60显示回顶部图标，小于60则隐藏
    scrollToTop () {
      const that = this
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      that.scrollTop = scrollTop
      if (that.scrollTop > 60) {
        that.btnFlag = true
      } else {
        that.btnFlag = false
      }
    },
    countdown() {
      // setTimeout
     this.timer = setTimeout(function () {
        that.countdown()
      }, 1000)
      // 通过$once来监听定时器，在beforeDestroy钩子可以被清除。
      this.$once('hook:beforeDestroy', () => {            
          clearInterval(this.timer);     
      })
      // clearInterval(this.timer)
      const end = Date.parse(new Date('2019-07-15 12:48'))
      // console.log(end)
      const now = Date.parse(new Date())
      const msec = end - now
      let day = parseInt(msec / 1000 / 60 / 60 / 24)
      let hr = parseInt(msec / 1000 / 60 / 60 % 24)
      let min = parseInt(msec / 1000 / 60 % 60)
      let sec = parseInt(msec / 1000 % 60)
      this.day = day
      this.hr = hr > 9 ? hr : '0' + hr
      this.min = min > 9 ? min : '0' + min
      this.sec = sec > 9 ? sec : '0' + sec
      const that = this
      if(msec <= 0){
        this.falg = false
        clearInterval(this.timer)
      }else{
        this.falg = true
      }
      
    }
  },
  beforeDestroy(){
    clearInterval(this.timer);
    // console.log(this.timer)  
    this.timer = null;    
    }

  // }
};
</script>
<style lang="less" scoped>
.fl{
  float: left;
}
.fr{
  float: right;
}
a{
  color: #333;
}
a:hover{
  color: #333;
}
.recommended {
  margin-top: 0.94rem;
  .banner{
    width: 100%;
    height: 1.875rem;
    padding: 0.08rem 0.15rem;
    box-sizing: border-box;
    background: linear-gradient(#e10f02,#e10f02 70%,#fff 0,#fff);
    a{
        img{
            display: block;
            width: 100%;
            height: 100%;
            border-radius: 0.05rem;
            overflow: hidden;
            background-position: 50%;
            background-repeat: no-repeat;
            background-size: contain;
        }
    }
  }
  .floor{
    width: 3.75rem;
      a{
          width: 3.75rem;
          img{
            width: 100%;
            height: 100%;
          }
      }
      .service_flex{
          display: flex;
      }
      .college_flex{
          
      }
      .headline{
          height: 0.34rem;
          margin: 0.15rem;
          line-height: 0.34rem;
          background: #fde9e9;
          border-radius: 0.5rem;
          .headline_left {
            margin: 0 0.12rem;
            img{
              display: inline-block;
              width: 0.68rem;
              height: 0.15rem;
              vertical-align:middle;
            }
          }
          .headline_right{
             .van-swipe{
              height: 0.34rem;
              border-radius: 0.5rem;
              span{
                width: 1.85rem;
                height: 0.34rem;
                text-overflow:ellipsis;
                overflow-X: hidden;
                white-space:nowrap;
                word-break:keep-all;
              }
              img{
                display: inline-block;
                width: 0.68rem;
                height: 0.34rem;
                overflow: hidden;
                border-radius: 0 0.5rem 0.5rem 0;
                vertical-align:bottom;
              }
            }
          }
         
      }
      .new_product{
        a{
          img{
            width: 25%;
            height: 1.25rem;
          }
        }
        a:first-child{
          img{
             width: 50%;
          }
        }
      }
      .new_product1{
        a{
          img{
            width: 50%;
            height: 1.25rem;
          }
        }
      }
      .new_product2{
        a{
          img{
            width: 50%;
            height: 0.625rem;
          }
        }
      }
      .optimization{
        img{
          width: 100%;
          height: 0.44rem;
        }
      }
      .preferredCommodity{
          padding: 0.1rem;
          width: 6.315rem;
        .commodityOdd{
          display: inline-block;
          width: 1.4rem;
          margin-right: 0.1rem;
          padding: 0.1rem;
          box-shadow: 0 0 0.1rem #e1e1e1;
          border-radius: 0.03rem;
          flex-shrink: 0;
          -webkit-tap-highlight-color: rgba(0,0,0,0);
          white-space:nowrap;
          overflow-x:scroll;
          img{
            width: 1.2rem;
            height: 1.2rem;
            box-sizing: border-box;
            background-position: 50%;
            background-repeat: no-repeat;
            background-size: contain;
            vertical-align: top;
          }
          ul{
            li{
               text-overflow:ellipsis;
                overflow-X: hidden;
                white-space:nowrap;
                word-break:keep-all;
            }
          }
        }
      }
  }
  .floorPreferred{
    overflow: auto;
  }
  .altitude{
    height: 0.1rem;
    background-color: #f5f5f5;
  }
  .go-top{
    position: fixed;
    bottom: 0.6rem;
    right: 0.2rem;
    img{
      width: 0.1rem;
      height: 0.1rem;
    }
  }
}

</style>
