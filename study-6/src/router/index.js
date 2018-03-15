import Vue from 'vue'
import Router from 'vue-router'
// import HelloSwiper from '@/components/HelloSwiper'
import LifeSwiper from "@/components/lifeswiper";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "/",
      name: "LifeSwiper",
      component: LifeSwiper
    }
  ]
});
