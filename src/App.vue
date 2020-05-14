<template>
  <div id="app">
    <router-view :inputCommonList='this.common_list' v-if="flag"></router-view>
    <Bottom></Bottom>
  </div>
</template>
<script>
import Bottom from '../src/components/common/Bottom.vue'
export default {
  name: "App",
  components: {
    Bottom
  },
  data() {
    return {
      showpath:true,
      list: [],
      common_list:[],
      btnImg: 0,
      bottom_color: "bottom_color",
      flag:false,
      isShow:'',
      isShowName:''
    };
  },
  created() {
    // this.getPath()
  },
  mounted() {
    this.onLoad();
  },
  updated(){
    this.isShow = this.$route.name
  },
  methods: {
    onLoad() {
      var _this = this;
      _this.$api.article.articleDetail({}).then(res => {
          // 执行某些操作
          // console.log(res);
          _this.list = res.data.data.tabBar;
          _this.common_list = res;
          // console.log(_this.common_list)
          this.flag =true;
        },
        function(err) {
          console.log(err);
        }
      );
    },
  }
};
</script>

<style lang="less" scoped>
#app{
  margin-bottom: 45.6px;
}
.bottom {
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  background: #FFFFFF;
  height: 45.6px;
  ul {
    display: flex;
    justify-content: space-around;
    font-size: 0.2rem;
    list-style: none;
    li {
      font-size: 0.12rem;
      img {
        width: 0.24rem;
        height: 0.24rem;
      }
      .bottom_color {
        color: #f21c1c;
      }
    }
  }
}
</style>
