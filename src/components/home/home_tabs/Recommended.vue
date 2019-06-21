<template>
    <div class="recommended" slot="recommended">
        <mt-swipe :show-indicators="false">
            <mt-swipe-item>1</mt-swipe-item>
            <mt-swipe-item>2</mt-swipe-item>
            <mt-swipe-item>3</mt-swipe-item>
        </mt-swipe>
    </div>
</template>
<script>
import { Swipe, SwipeItem } from 'mint-ui';

export default {
    name:'recommended',
    components:{
   },
   data(){
       return {
        
       }
   },
 
}
</script>
<style lang="less" scoped>
    .recommended{
        margin-top:0.94rem; 
    }
</style>
