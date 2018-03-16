<template>
  <div>
    <p>我是局外人,看热闹的</p>
    {{getCount}}
    <button @click="add">+</button>
  </div>
</template>
<script>
export default {
  name :'onlooker',
  data(){
    return{
     
    }
  },
  computed:{
    getCount(){
      // return this.$store.state.count;
      return this.$store.getters.getState;
    }
  },
  methods:{
    add(){
      // this.$store.commit("increment")
      this.$store.dispatch('increment')
    }
  }
}
</script>
<style scoped>
p{
  color: red;
  margin-top: 30px;
  font-size: 30px;
}
</style>


