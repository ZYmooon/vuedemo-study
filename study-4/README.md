#### 这次在创建的时候,是没有router文件夹的,router文件夹和index.js文件是自己创建的

 #### 1.安装
  ``cnpm i vue-router -S``
 #### 2.在main.js中引用
  import router from "vue-router"
  Vue.use(router)
#### 3.配置路由文件
  import HelloWrold from "../components/HelloWorld";
  import Hellozhouyi from "../components/Helloezhouyi";

  var router = new VueRouter({
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
  new Vue({
    el: '#app',
    components: { App },
    template: '<App/>',
    router   //新添加的
  })

#### 4新增src=>router文件夹,新增index.js文件
  - 1.import Vue from "vue";
    import VueRouter from "vue-router";
  - 2.var router = new VueRouter({
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
  - 3.改写var router ==>export default
      因为我们需要将它导出去
  - 4.将main.js里的代码删除刚才复制到index.js里的代码
      import Vue from 'vue'
      import App from './App'
      import router from './router'

      Vue.config.productionTip = false

      /* eslint-disable no-new */
      new Vue({
        el: '#app',
        router,
        components: { App },
        template: '<App/>'
      })
    mian.js呈现这个样子

    这样我们就完成了路由的配置,和在init的时候,加载路由一个样子了
    
#### 5.视图加载的位置
  在App.vue的根组件div中引入
    <router-view/>  //可以这么写
    //<router-view></router-view>  也可以这么写

#### 6.跳转(导航)
  - A:<router-link to="/zhouyi">Helloezhouyi</router-link>

- B:渲染成a标签效果 = <a href="#/zhouyi"></a>

    <router-link> 比起写死的 <a href="..."> 
    会好一些，理由如下：
      1.无论是 HTML5 history 模式还是 hash 模式，它的表现行为一致，所以，当你要切换路由模式，或者在 IE9 2.降级使用 hash 模式，无须作任何变动。
      3.在 HTML5 history 模式下，router-link 会守卫点击事件，让浏览器不再重新加载页面。
      当你在 HTML5 history 模式下使用 base 选项之后，所有的 to 属性都不需要写（基路径）了。
      
       [router-link文档](https://router.vuejs.org/zh-cn/api/router-link)

  C:<router-link :to="urlData.helloworld">HelloWorld</router-link> 
      <router-link :to="urlData.zhouyi">Helloezhouyi</router-link>

        export default {
          name:'navlist',
          data(){
            return{
              urlData:{
                helloworld:'/',
                zhouyi:'/zhouyi'
              }
            }
          }
        }

