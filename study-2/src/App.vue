<template>
  <div id="app">
    <!-- <Parent/> -->
    <!-- <Dad /> -->
    <!-- <Parentrabbet/> -->
    <!-- <big/> -->
    <anim/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import Parent from './components/Parent'
import Dad from './components/parentson/Dad'
import Parentrabbet from './components/rabbet/Parentrabbet'
import Big from './components/comkeep/big'
import Anim from './components/anim/anim'

export default {
  name: 'App',
  components:{
    HelloWorld,
    Parent,
    Dad,
    Parentrabbet,
    Big,
    Anim
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
}
</style>
