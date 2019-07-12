<template>
  <div class="recommended">
    <div class="banner" :data-id="common_list.floor[0].title">
      <mt-swipe class="mt_swipe" :auto="5000">
        <mt-swipe-item v-for="(item,index) in swipe_list" :key="index">
          <a href>
            <img :src="item.imagePath" alt>
          </a>
        </mt-swipe-item>
      </mt-swipe>
    </div>
    <div class="floor" :data-id="common_list.floor[1].title">
        <div class="floor-picture">
            <a href>
                <img :src="common_list.floor[1].content[0].imagePath" alt="">
            </a>
        </div>
    </div>
    <div class="floor" :data-id="common_list.floor[2].title">
        <div class="floor-picture service_flex">
            <a href v-for="(item,index) in service_list" :key="index">
                <img :src="item.imagePath" alt="">
            </a>
        </div>
    </div>
    <div class="floor" :data-id="common_list.floor[3].title">
        <div class="floor-picture service_flex college_flex">
            <a href v-for="(item,index) in college_list" :key="index">
                <img :src="item.imagePath" alt="">
            </a>
        </div>
    </div>
    <div class="floor" :data-id="common_list.floor[4].title">
        <span>{{ home_time*1 | formatDate  }} </span>
        <div id="app" v-if="falg">{{`${day} 天 ${hr} : ${min} : ${sec}`}}</div>
        <div id="app" v-if="!falg">已结束</div>
    </div>
  </div>
</template>
<script>
import {formatDate} from '../../../assets/util/date';
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
      swipe_list: [],
      common_list: [],
      service_list:[],
      college_list:[],
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
    this.common_list = this.home_list.data.data.container
    this.service_list = this.home_list.data.data.container.floor[2].content
    this.college_list = this.home_list.data.data.container.floor[4].content
  },
  mounted() {
    this.swipe_list = this.home_list.data.data.container.floor[0].content
    this.countdown();
  },
  methods: {
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
  }
}
</style>
