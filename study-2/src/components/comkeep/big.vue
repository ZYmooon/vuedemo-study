<template>
  <div class="">
       我是父组件
     <keep-alive>
       <component :is="currentView"></component>  
     </keep-alive>
      <button @click="changeView">切换组件</button>
  </div>
</template>
<script>

import Small1 from './small1'
import Small2 from './small2'
export default {
  name:"big",
  data(){
    return{
      currentView:"Small1",
      flag:true
    }
  },
  components:{
    Small1,
    Small2
  },
  methods:{
    changeView(){
     if(this.flag){
      this.currentView = "Small1";  
      this.flag = false
      }else{
        this.currentView = "Small2";
        this.flag = true
      } 
    }  
  }
}
</script>

<style scoped>

</style>

