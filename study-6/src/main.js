// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import Axios from 'axios'
import { 
     Carousel,
  CarouselItem,
} from 'element-ui';

Vue.use(Carousel)
Vue.use(CarouselItem)
Vue.use(VueAwesomeSwiper)

Vue.config.productionTip = false
Vue.prototype.$axios = Axios
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
