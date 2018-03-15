<template>
  <div class="ct">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(banner,index) in banners" :key="index">
        <img :src="banner.img" alt="">
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
  export default{
    name:'swipers',
    data(){
      return{
        banners:[],
        swiperOption: {
          autoplay:true,
          pagination: {
            el: '.swiper-pagination',
          }
        }
      }
    },
    created(){
      this.$axios.get("http://www.wwtliu.com/sxtstu/blueberrypai/getIndexBanner.php")
      .then(res => {
        this.banners = res.data.banner;
      })
      .catch(error =>{
        console.log(error,"请求失败");
      })
    }
  }
</script>

<style scoped>
  img{
    width: 500px;
    height: 300px;
  }
</style>