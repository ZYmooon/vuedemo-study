import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Dianji   from "@/components/DianJi"
import Fromdata from '@/components/Fromdata'
import Styles from "@/components/Style";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "/",
      name: "HelloWorld",
      component: HelloWorld
    },
    {
      path: "/",
      name: "Dianji",
      component: Dianji
    },
    {
      path: "/",
      name: "Fromdata",
      component: Fromdata
    },
    {
      path: "/",
      name: "Styles",
      component: Styles
    }
  ]
});
