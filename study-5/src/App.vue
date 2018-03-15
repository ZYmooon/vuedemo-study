<template>
  <div id="app">
    
    <router-view/>
  </div>
</template>

<script>
import NavList from '@/components/NavList'
export default {
  name: 'App'
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
.active{
    color: red;
  }
</style>
