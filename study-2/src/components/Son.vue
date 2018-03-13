<template>
  <div class="son">
    我是儿子:{{title}}
    <p>{{ lifemsg }}</p>
    <p>{{num*num}}</p>
  </div>
</template>

<script>
export default {
  name: 'son',
  data () {
    return {

    }
  },
  props:{
    title:String,
    lifemsg:{
      type:String,
      required:true
    },
    num:{
      type:Number,
      default:2
    }
  }
}
</script>
<style scoped>
.son{
  margin-top: 10px;
  border: 1px solid #000;
}
p{
  margin: 4px;
}
</style>

