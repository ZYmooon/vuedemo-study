<template>
  <div class="hello">
    <div>
      <ul>
        <li :v-for="list in lists" >
          <p>{{list.price}}</p>
          <p>{{list.name}}</p>
          <img :src="list.img" alt="">
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "hello",
  data() {
    return {
      lists: null
    };
  },
  created() {
    this.$axios.get("http://rapapi.org/mockjsdata/31645/index/hotLists?",{
      params:{
        pageNum:1,
        pageSize:30
      }
    })
      .then(res => {
        this.lists = res.data.lists;
        console.log(res.data.lists);
      })
      .catch(error => {
        console.log(error);
      });
  }
};
</script>

<style scoped>

</style>
