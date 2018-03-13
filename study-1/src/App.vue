<template>
  <div id="app">
    <Styles />
  </div>
</template>

<script>

import HelloWorld from './components/HelloWorld'
import Dianji from './components/DianJi'
import Fromdata from './components/Fromdata'
import Styles from './components/Style'

export default {
  name: 'App',
  components:{
    Dianji,
    HelloWorld,
    Fromdata,
    Styles
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
body{
  background: #ccc;
}
</style>
