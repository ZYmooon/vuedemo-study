<template>
  <div>
    <swiper :options="swiperOption">
      <swiper-slide>
        <img src="https://cdn.pixabay.com/photo/2018/03/14/21/26/crocus-3226433__340.jpg" alt="">
      </swiper-slide>
      <swiper-slide>
        <img src="https://cdn.pixabay.com/photo/2018/03/13/22/53/puzzle-3223941__340.jpg" alt="">
      </swiper-slide>
      <swiper-slide>
        <img src="https://cdn.pixabay.com/photo/2018/03/10/20/26/flowers-3215188__340.jpg" alt="">
      </swiper-slide>  
      <div class="swiper-pagination"  slot="pagination"></div>  
    </swiper>
  </div>
</template>

<script>
  export default{
    name:'swipers',
    data(){
      return{
        swiperOption: {
          autoplay:true,
          pagination: {
            el: '.swiper-pagination',
          }
        }
      }
    }
  }
</script>

<style scoped>
  
</style>