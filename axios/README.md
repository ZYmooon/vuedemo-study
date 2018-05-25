# axios

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


## 关于axios的运用和jsonp跨域

### axios

> ``npm i axios -S``

> mian.js中引入 axios 和 qs,

```
Vue.prototype.$axios = Axios
Vue.prototype.HOST = '/api'
```

> 修改config目录下的index.js文件
```
dev: {
    // Paths
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {},
 }
===>
//更改后
dev: {
    // Paths
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {
      "/api": {
        target: "http://api.douban.com/v2",  //需要访问的地址,以豆瓣为例
        changeOrigin: true,
        pathRewrite: {
          '^/api':''
        }
      }
    },
```

> created()里发起请求

```
created() {
    let url = this.HOST + '/movie/top250';
    this.$axios.get(url, {
      params: {
        count: 10,
        start: 0
      }
    })
      .then(res => {
        console.log(res.data);
      })
      .catch(error => {
        console.log(error);
      })
  }
```

### jsonp跨域

> ``cnpm i -S vue-jsonp``

> 在main.js中导入vue-jsonp
``
import VueJsonp from 'vue-jsonp'
Vue.use(VueJsonp)
``
通过use方法，挂载到vue中
vue.use(VueJsonp)

> 
```
 created() {
    let url = "https:/api.douban.com/v2/movie/in_theaters";
    this.$jsonp(url, {
      params: {
        count: 20,
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
```