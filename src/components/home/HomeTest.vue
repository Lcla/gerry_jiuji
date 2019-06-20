<template>
    <div>
        子组件：
        <span>{{childValue}}</span>
        <input type="button" value="点击触发" @click="childClick">
    </div>
</template>
<script>
export default {
    data(){
        return {
            childValue:'我是子组件的数据'
        }
    },
    methods:{
        childClick(){
            // childByValue是在父组件on监听的方法
            // 第二个参数this.childValue是需要传的值
            this.$emit('childByValue',this.childValue);
        }
    }
}
</script>
<style>

</style>


