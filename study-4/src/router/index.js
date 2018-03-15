import Vue from "vue";
import VueRouter from "vue-router";
import HelloWrold from "../components/HelloWorld";
import Hellozhouyi from "../components/Helloezhouyi";

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: "/",
      component: HelloWrold
    },
    {
      path: "/zhouyi",
      component: Hellozhouyi
    }
  ]
});
