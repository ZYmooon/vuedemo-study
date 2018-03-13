<template>
  <div class="event">
    <ul>
      <li @click.once="getItemInfo(index,$event)" v-for="(name,index) in names" :key="index"> {{name}} </li>
    </ul>
    <input type="text" v-on:keyup.enter="getKeyInfo">
    <button @click="pushArr">增加</button>
    <button @click="popArr">减少</button>
    <button @click.once="getOdd">我要奇数</button>
    <ul>
      <li v-for="num in wantNums">{{num}}</li>
    </ul>
    <div>
      <p>{{msgRE}}</p>
      <p>{{msgRE}}</p>
      <p>{{mothodMsgRE()}}</p>
    </div>
  </div>
</template>
<script>
export default {
  //data中的数据的改变会引起视图的改变  mvvm框架的优势
  data(){
    return{
      names:['老大', '老二', '老幺'],
      nums:[1,2,3,4,5,6,7,8],
      wantNums:[],
      message:'你看到的是什么'
    }
  },
  methods:{
    //事件中的默认参数
    getItemInfo(data,event){
      console.log(this.names[data])
      console.log(event)
    },
    getKeyInfo(event){
      console.log(event)
    },
    pushArr(){
      this.names.push('父亲')
    },
    popArr(){
      this.names.pop('dd')
    },
    getOdd(){
      this.nums.filter(num => {
        if(num%2 !==0){
          this.wantNums.push(num)
        }
      })
    },
    mothodMsgRE(){
      return this.message.split('').reverse().join('')
    }
  },
  computed:{
    msgRE(){
      return this.message.split('').reverse().join('')
    }
  }
}

</script>
<style scoped>
li{
  list-style: none;
}
</style>
