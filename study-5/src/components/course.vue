<template>
  <div >
    课程:{{$route.params.count}}-{{$route.params.type.name}}
    <button @click="gb">返回上一页</button>
  </div>
</template>
<script>
  export default{
    data(){
      return{
        
      }

    },
    methods:{
     gb(){
      this.$router.go(-1)
     }
    }
  }
</script>
<style >
  
</style>