<template>
  <div>
      子组件
      <button @click="sendMsg">传递</button>
  </div>
</template>

<script>
export default {
  name:"babay",
  data(){
    return{
      msg:"我是子组件数据"
    }
  },
  props:{
    num:{
      type:Number,
      default:5
    }
  },
  computed:{
    addNum(){
      return this.num + 2
    }
  },
  methods:{
    sendMsg(event){

      //两个参数,参数1:key 参数2:data 
      this.$emit("sendmsg",this.addNum)
    }
  }
}
</script>

<style scoped>

</style>
