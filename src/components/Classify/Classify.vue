<template>
  <div class="classify">
    分类
    <button class="button" :class="{disabled: !this.canClick}" @click="countDown">{{content}}</button>
  </div>
</template>
<script>
export default {
  name: "Classify",
  components: {},
  data() {
    return {
      content: "发送验证码", // 按钮里显示的内容
      totalTime: 10, //记录具体倒计时时间
      canClick: true  //添加canClick
    };
  },
  mounted() {},
  methods: {
    countDown() {
      if (!this.canClick) return   //改动的是这两行代码
  this.canClick = false
  this.content = this.totalTime + 's后重新发送'
  let clock = window.setInterval(() => {
    this.totalTime--
    this.content = this.totalTime + 's后重新发送'
      console.log(666)
    if (this.totalTime < 0) {
        console.log(999)
        console.log(clock)
      window.clearInterval(clock)
      this.content = '重新发送验证码'
      this.totalTime = 10
      this.canClick = true   //这里重新开启
    }
      }, 1000);
    }
  }
};
</script>
<style lang="less" scoped>
.disabled{
  background-color: #ddd;
  border-color: #ddd;
  color:#57a3f3;
  cursor: not-allowed;  // 鼠标变化
}
</style>



