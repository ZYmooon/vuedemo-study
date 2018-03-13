<template>
  <div class="parent">
    我是爸爸
    <input type="text" v-model="lifemsg">
    <Son :title="msg"  :lifemsg="lifemsg" :num="num"/>
    <button @click="changeMsg">按钮</button>
  </div>
</template>

<script>

import Son from './Son'

export default {
  name: 'parent',
  data () {
    return {
      msg: '我是活的数据',
      lifemsg:"",
      num:1
    }
  },
  components:{
    Son
  },
  methods:{
    changeMsg(event){
      this.msg = '我是修改之后的数据'
    }
  }
}
</script>
<style scoped>
.parent{
  border: 1px solid #000;
  padding: 20px;
}
</style>

