<template>
  <div>
    父组件
    <input type="text" v-model="num">
    <babay @sendmsg="getMsg" :num="getNum"/>
    <p>{{info}}</p>
  </div>
</template>

<script>
import Babay from "./Babay"
export default {
  name:"dad",
  data(){
    return{
      info:"",
      num: 0
    }
  },
  computed:{
    getNum(){
      return  this.num - 0
    }
  },
  components:{
    Babay
  },
  methods:{
    getMsg(data){
      this.info = data;
    }
  }
}
</script>

<style scoped>

</style>
