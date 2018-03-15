<template>
  <div>
    <NavList/>
    <div class="left">
      <ul>
        <li><router-link to="/teachers/chinese">语文老师</router-link></li>
        <li><router-link to="/teachers/maths">数学老师</router-link></li>
        <li><router-link to="/teachers/sports">体育老师</router-link></li>
        <li><router-link to="/teachers/arts">美术老师</router-link></li>
      </ul>
    </div>
    <div class="right">
      <router-view></router-view>
      <p>这里是视图区</p>
    </div>
  </div>
</template>
<script>
import NavList from './NavList'
  export default{
    name:'teachers',
    data(){
      return{
        
      }
    },
    components:{
      NavList
    }
  }
</script>
<style scoped>
.left, .right{
  float: left;
}
.right{
  margin-left: 200px; 
}
p{
  margin-top: 70px;
}
</style>