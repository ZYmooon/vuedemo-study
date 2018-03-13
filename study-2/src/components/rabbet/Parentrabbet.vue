<template>
  <div class="father">
      我是父组件
    <child>

        <p slot="header" class="ptest">我是插槽1</p>
     
        <p slot="footer" class="ptest">我是插槽2</p>
  
    </child>

      
  </div>
</template>
<script>

import Child from './Child'
export default {
  name:"father",
  data(){
    return{

    }
  },
  components:{
    Child
  }
}
</script>

<style scoped>

</style>

