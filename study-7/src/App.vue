<template>
  <div id="app">
   <Parent/>
   <Onlooker/>
   <!-- <router-view></router-view> -->
  </div>
</template>

<script>
import Parent from './components/child/parent'
import Onlooker from './components/onlooker'
export default {
  name: 'App',
  components:{
    Parent,
    Onlooker
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
