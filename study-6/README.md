#element组件的使用
    1.安装
        ``cnpm i element-ui -S``

        安装按需加载的的依赖
        ``cnpm install babel-plugin-component -D``
    2.修改.babelrc文件

          {
              "presets": [
                ["env", {
                  "modules": false,
                  "targets": {
                    "browsers": ["> 1%", "last 2 versions", "not ie <= 8"]
                  }
                }],
                "stage-2"
              ],
              /*--从这里开始是需要修改的,下面是修改好的--*/,
              "plugins": ["transform-vue-jsx", "transform-runtime",["component",[
                    {
                      "libraryName": "element-ui",
                      "styleLibraryName": "theme-chalk"
                    }
                  ]
                ]
              ]
            }
    3.引入
        接下来，如果你只希望引入部分组件，比如 Button 和 Select，那么需要在 main.js 中写入以下内容：
        import { 
            Button,
            Select
        } from 'element-ui';

        Vue.use(Button)
        Vue.use(Select)
    
    4.使用

swiper:写了2个demo,一个死数据,一个是活数据
https://github.com/surmon-china/vue-awesome-swiper
这是官方文档
首先1.安装
    ``cnpm install vue-awesome-swiper --save``
    2.引入到main.js中
    import VueAwesomeSwiper from 'vue-awesome-swiper'

    // require styles
    import 'swiper/dist/css/swiper.css'

    Vue.use(VueAwesomeSwiper, /* { default global options } */)
    3.死数据
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

    活数据,异步加载,需要安装axios依赖
    ``cnpm i axios -S``

    引入
    import Axios from 'axios'
    Vue.prototype.$axios = Axios

    <swiper :options="swiperOption">
      <swiper-slide v-for="(banner,index) in banners" :key="index">
        <img :src="banner.img" alt="">
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>

    banners:[],//新增一个空数

    created(){
      this.$axios.get("http://www.wwtliu.com/sxtstu/blueberrypai/getIndexBanner.php")
      .then(res => {
        this.banners = res.data.banner;
      })
      .catch(error =>{
        console.log(error,"请求失败");
      })
    }