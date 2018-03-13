<template>
  <div class="anim">

    <button @click="showHide">过渡</button>
    <transition name="fade">
      <p v-if="show" class="boom">我是过渡效果</p>
    </transition>


    <button @click="showAnim">动画</button>
    <transition name="animX">
      <p v-if="showAnimation">我是动画效果</p>
    </transition>

    <button @click="animLib">动画库</button>
    <transition
      name="libs"
      enter-active-class="animated zoomInRight"
      leave-active-class="animated zoomInLeft"
      >
      <p v-if="aLibs" class="libs">我很炫酷</p>
    </transition>

  </div>
</template>

<script>
 
export default {
  name:"anim",
  data(){
    return{
      show:false,
      showAnimation:false,
      aLibs:false
    }
  }, 
  methods:{
    showHide(){
      this.show = !this.show
    },
    showAnim(){
      this.showAnimation = !this.showAnimation
    },
    animLib(){
      this.aLibs = !this.aLibs
    }
  }

}
</script>

<style scoped>
.anim{
  background: #ccc;
  height: 500px;
}
.fade-enter-active,.fade-leave-active{
  /* transition: opacity 1s; */
  transition: all 1s;
}
.fade-enter,.fade-leave-to{
  /* opacity: 0; */
  transform: translate(100px,0)
}
.fade-enter-to,.fade-leave{
  /* opacity: 1; */
  transform: translate(-100px,0)
}

/* 简写形式
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to  {
  opacity: 0;
}
*/
.animX-enter-active{
  animation: bounce-in 1s ;
}
.animX-leave-active{
   animation: bounce-in 1s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(2.5);
  }
  100% {
    transform: scale(1);
  }
}
/* @keyframes bounce-out {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(2.5);
  }
  100% {
    transform: scale(0);
  }
} */
.libs{
  font-size: 30px;
  letter-spacing: 13px;
  color: aqua;
  margin-top: 120px;
}
.boom{
  margin-top: 60px;
}
p{
  position: absolute;
}
</style>
