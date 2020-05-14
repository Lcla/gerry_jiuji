<template>
    <div class="information">
        <p>FullName: {{fullName}}</p>
        <p>FirstName: <input type="text" v-model="firstName"></p>
        <input v-model="numberClick">{{number_G}}
        <span v-show="showHide">我是一个隐藏的元素</span>
        <span v-text="showText"></span>
        <span v-cloak>{{showText}}</span>
        <button @click.once="clickF()">确定按钮</button>
        <div id='container'></div>
    </div>
</template>
<script>
import $ from 'jquery'

export default {
    name:'Information',
   data(){
       return {
            firstName: 'Dawei',
            lastName: 'Lou',
            fullName: '',
            number_G:1,
            numberClick:'',
            number_J:12,
            showHide:false,
            showText:'一个文字',
            map:null

       }
   },
    watch: {
    firstName(newName, oldName) {
        console.log(newName);
        console.log(oldName);
        
        
      this.fullName = newName + ' ' + this.lastName;
      console.log(this.fullName);
      
    },
    numberClick(newName, oldName){
        this.number_G++
        console.log(this.number_J--);
        
        console.log(newName+this.number_G);
        console.log(oldName);
        
        
    }
  },
   mounted(){
       
    //  $('.van-picker__confirm').on('click',function(){
    //    console.log(123)
    //  })
    this.Gmap();
   },
   methods:{
       clickF(){
           console.log(666);
           
       },
       Gmap(){
           this.map = new AMap.Map('container', {
                    resizeEnable: true,
                    zoom:11,
                    center: [113.864364, 22.570452]
            });
            console.log(map);
            
       }
    //    onConfirm(e){
    //        this.showflag=true
    //        this.shower=false
    //        console.log(e)
    //        this.regiondata= e
    //        this.userregion = this.regiondata[0].name+this.regiondata[1].name+this.regiondata[2].name
    //    }
    
          }
   }
 
</script>
<style lang="less" scoped>
    button{
        width: 200px;
        height: 100px;
    }
    [v-cloak]{
        display: none;
    }
    #container{width:100%;height:300px;}
</style>



