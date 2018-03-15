<template>
  <div class="navlist">
      <ul>
        <li>
          <!-- <router-link to="/">HelloWorld</router-link> -->
          <!-- <a href="#/">HelloWorld</a> -->
          <!-- <router-link :to="urlData.helloworld">HelloWorld</router-link> -->
          <router-link :to="{path:'/'}">HelloWorld</router-link>
        </li>
        <li>
          <!-- <router-link to="/zhouyi">Helloezhouyi</router-link> -->
          <!-- <a href="#/zhouyi">Helloezhouyi</a> -->
          <!-- <router-link :to="urlData.zhouyi">Helloezhouyi</router-link> -->
          <router-link :to="{path:urlData.zhouyi}">你好,我是周逸</router-link>    
        </li>
      </ul>
  </div>
</template>
<script>
export default {
  name:'navlist',
  data(){
    return{
      urlData:{
        helloworld:'/',
        zhouyi:'/zhouyi'
      }
    }
  }
}
</script>
<style scoped>
ul {
 list-style: none;
}
li{
  display:inline-block;
  margin: 0 20px;
  border: 1px solid #000;
  padding: 5px;
  cursor: pointer;
}

</style>
</style>

