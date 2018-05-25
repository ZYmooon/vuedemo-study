<template>
<div class="hello">
  <div>
    <ul>
      <li v-for="news in newsData">
        <p>{{news.title}}</p> 
        <img :src="news.thumbnail_pic_s" alt="">
      </li>
    </ul>
  </div>
</div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      newsData: []
    }
  },
  created() {
    this.$axios('/sxtstu/news/juhenews.php', {
      params: {
        type: 'junshi',
        count: 10
      }
    })
      .then(res => {
        console.log(res.data.result.data); 
        this.newsData = res.data.result.data
        //console.log(this.newsData);      
      })
      .catch(error => {
        console.log(error);
      })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
