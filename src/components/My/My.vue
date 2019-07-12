<template>
  <div class="my" v-if="flos">
    <!-- 我的 -->
    <div class="my_head">
      <i class="iconfont icon-arrowLeft-fill my_top_left l"></i>
      <div class="r">
        设置
        <i class="iconfont icon-18 g_top_set"></i>
      </div>
    </div>
    <div class="bg"></div>
    <div class="member-box">
        <div class="member-info flex flex-align-center">
            <a href="">
                <img :src="my_avatar.data.data.user.avatar" alt="">
            </a>
            <div class="no_login">
                <router-link to="login" tag="a">登陆</router-link>
                <span>|</span>
                <router-link to="register" tag="a">注册</router-link>
            </div>
        </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "My",
  components: {},
  data() {
    return {
        my_avatar:[],
        flos:false
    };
  },
  mounted(){
      this.artMy();
  },
  methods:{
      artMy(){
          var _this = this;
          _this.$api.article.artMy({}).then(res=>{
              _this.my_avatar = res;
              this.flos=true;
          },err=>{
              console.log(err)
          })
      }
  }
};
</script>
<style lang="less" scoped>
.my {
  .my_head {
    height: 0.44rem;
    line-height: 0.44rem;
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    z-index: 8;
    background-color: rgba(0, 0, 0, 0);
    background-image: url(https://img2.ch999img.com/newstatic//1378/8741cf24cb3aca.png);
    font-size: 0.2rem;
    .my_top_left::before {
      font-size: 0.25rem;
      font-weight: bold;
    }
    .g_top_set {
      color: #fff;
      font-size: 0.2rem;
    }
  }
  .bg{
    background-image: url(https://img2.ch999img.com/newstatic//1378/8741cf24cb3aca.png);
    background-size: cover;
    width: 3.75rem;
    height: 0.97rem;
    position: absolute;
    top: 0;
    left: 0;
    background-repeat: no-repeat;
    background-position: top;
  }
  .member-box{
    border-radius: 0.04rem;
    box-shadow: 0 1px 10px 0 rgba(0,0,0,.08);
    background: #fff;
    margin: 0.68rem 0.14rem;
    padding: 0 0.1rem;
    box-sizing: border-box;
    position: relative;
    .member-info{
        padding: 20px 0;
        display: flex;
        a{
            img{
                width: 0.7rem;
                height: 0.7rem;
                border-radius: 100%;
                border: 0.03rem solid #fff;
                box-shadow: 0 0.02rem 0.05rem #ccc;
                margin-right: 0.1rem;
            }
        }
        .no_login{
            padding: 0.3rem 0;
            a{
                padding: 0.05rem;
                font-size: 0.14rem;
            }
        }
    }
  }
}
</style>
