<template>
  <div>
    <ul>
      <li><router-link to="/" exact>首页</router-link></li>
      <!-- <li><router-link to="/Course'">课程</router-link></li> --> 
      <li><router-link :to="{name:'course',params:{count:100,type:obj}}">课程</router-link></li> 
      <li><router-link :to="{path:'/teachers'}">老师</router-link></li>
    
    </ul>
  </div>
</template>
<script>
  export default{
    name:'navlist',
    data(){
      return{
        obj:{
          name:'前端'
        }
      }
    }
  }
</script>
<style scoped>
  div{
    width: 100%;
    height: 50px;
    background: #f1f1f1;
    line-height: 50px;
  }
  ul{
    list-style: none;
  }
  li{
    float: left;
    margin: 0 20px; 
  }
  
</style>