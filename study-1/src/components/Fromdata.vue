<template>
  <div>
    <input type="text" v-model="msg" placeholder="亲!请输入">
    <p>{{msg }}</p>
  </div>
</template>
<script>
export default {
  name:'fromdata', 
  data(){
    return{
      msg:''
    }
  },
  watch:{
    msg:function(data){
      if(data === '哈哈哈'){
        console.log('哈你妹')
      }
    }
  }
}
</script>
<style scoped>

</style>

