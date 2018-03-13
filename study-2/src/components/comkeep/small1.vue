<template>
  <div class="small1">
      <p :is="msg">{{msg}}</p>  
      <button @click="changeInfo">改变内容</button>
  </div>
</template>
<script>

export default {
  name:"small1",
  data(){
    return{
      msg:"我是子组件1之前的内容",
      changeText:true
    }
  },
  methods:{
    changeInfo(){
      if(this.changeText){
        this.msg = "我是子组件1之前的内容"
        this.changeText = false
      }else{
        this.msg = "我是改变之后的内容"
        this.changeText = true
      }  
    }
  }
}
</script>

<style scoped>
.small1{
  font-size:20px;
  margin: 10px auto;
  color: red;
  border: 1px solid #000;
  background: #ccc;
  padding: 20px 0;
  width: 300px;
}
</style>

