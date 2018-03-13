<template>
  <div class="child">
      我是子组件
      <slot name="header"></slot>
      <hr/>
      <slot name="footer"></slot>
  </div>
</template>
<script>

export default {
  name:"child",
  data(){
    return{

    }
  }
}
</script>

<style scoped>

</style>
