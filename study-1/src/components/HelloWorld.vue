<template>
  <div class="hello">
    {{msg}}
    {{1+1}}
    {{'注意!!这里只能出现单行语句'}}
    {{0>10 ? 'yes' : 'no'}}
    <p>{{zhouyi}}</p>
    <p v-html="msg"></p>
    <p v-text="msg"></p>
    <p v-html="hello">{{hello}}</p>
    <p v-text="hello">{{hello}}</p>
    <span v-bind:class="hah">哈哈哈</span>
    <span v-bind:title="hint">提示</span>
    <p>{{message.split('').reverse().join('')}}</p>

    <div>
      <p v-if="show">当show为true,我能被看见</p>
      <p v-else>当show为false,我不能被看见</p>
      <p v-show="show">这个标签一直存在</p>
    </div>

    <div class="list">
      <ul>
        <li v-for="(name,index) in names" v-bind:key="index">{{name}}-{{index}}</li>
      </ul>
      <ul>
        <li v-for="(item,index) in users" :key="index.id"> 
          <span>{{ item.name }}</span>
          <span>{{ item.age }}</span>
        </li>
      </ul>
    </div>  
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'hellow world',
      zhouyi:'我是周逸',
      hello:'<p>我的html和text的区别</p>',
      hah:'ha1',
      hint:'我是提示',
      message:'你看到的这句话是什么',
      show:true,
      names:['Jack', 'Luna', 'Tom'],
      users:[
        {
          id:0,
          name:'老大',
          age:22
        },
        {
          id:1,
          name:'老二',
          age:20
        },
        {
          id:2,
          name:'老幺',
          age:12
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  margin: 0 10px;
}
a {
  color: #42b983;
}
.hello{
  display: block;
}
p{
  color:red;
}
.ha1{
  color: rgba(53, 24, 160, 0.767);
  font-size: 18px;
}
</style>
