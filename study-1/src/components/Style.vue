<template>
  <div>
    <p :class="{active:isActive, 'demo':Demo}">我的active是true</p>
    <p :class="{active:notActive}">我的active是false</p>

    <p :class="styleObj">检查我的样式和class</p>

    <p :class="[demo1,demo2]">看看我的样式和class</p>
    <ul>
      <li :class="[{active:index%2 !==0},'info']" v-for="(name,index) in names" :key="name">{{name}}</li>
    </ul>

    <p :style="xxx">请看我的样式</p>
  </div>
</template>
<script>
export default {
  name:'style',
  data(){
    return{
      isActive:true,
      notActive:false,
      Demo:true,
      styleObj:{
        active:true,
        'isShow':true
      },
      demo1:'demo1',
      demo2:'demo2',
      names:['老大', '老二', '老三', '老幺'],
      xxx:{
        color:"#888",
        fontSize: "20px" ,
        background:"yellow"      
      }
    }
  }
}
</script>
<style scoped>
ul,li{
  list-style: none;
}
.active{
  color:red;
  font-size: 20px;
  background: #f1f1f1;
}
.isShow{
  border: 1px solid;
}

.demo1{
  margin-top: 20px;
  color:green;
}

</style>
