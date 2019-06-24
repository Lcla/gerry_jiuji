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
        <span>{{ home_time | formatDate  }} </span>
    </div>
  </div>
</template>
<script>
export default {
  name: "recommended",
  components: {
  },
  data() {
    return {
      swipe_list: [],
      common_list: [],
      service_list:[],
      college_list:[],
      home_time:''
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
    console.log(this.college_list)
    
  },
  mounted() {
    this.swipe_list = this.home_list.data.data.container.floor[0].content
    this.home_time = "1556162941000";
  },
  methods: {
    
    
  }
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
