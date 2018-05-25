<template>
  <div class="posturl">
    <div >
    <ul class="row">
      <li class="m-lst" v-for="(value,index) in hotMovie">

        <div>
          <img class="img-responsive center-block" :src="value.images.medium" />
        </div>
        <div class="caption">
          <h4 class="h4 text-center" :title="value.title">{{value.title}}</h4>
          <p class="m-casts">
            <i class="glyphicon glyphicon-user"></i>
            <a class="u-cast" :href="val.alt" v-for="val in value.casts">{{val.name}}</a>
          </p>
          <p class="m-genres">
            <i class="glyphicon glyphicon-tags"></i> 
            <span class="text-danger u-genres" v-for="val in value.genres">{{val}}</span> </p>
          <p class="m-time"><i class="glyphicon glyphicon-time"></i><span class="text-success u-time">{{value.year}}</span>
          </p>
          <p class="text-right"><a href="03-detail.html" class="btn btn-info" @click="link(value.id)">查看详情</a>
          </p>
        </div>
      </li>
    </ul>
  </div>
  </div>
</template>
<script>

export default {
  data() {
    return {
      hotMovie: []
    }
  },
  created() {
    let url = "https:/api.douban.com/v2/movie/in_theaters";
    this.$jsonp(url, {
      params: {
        count: 2,
        start: 0
      }
    })
      .then(res => {
        // console.log(res.data.subjects);
        this.hotMovie = res.subjects
      })
      .catch(error => {
        console.log(error);
      })

  }
}
</script>
<style scoped>
</style>

