# 项目初始化

  - 1、安装vue-cli
    ``npm i -g vue-cli``
-  2、初始化项目
    ``vue init webpack my-project``
 - 3、进入该项目
    cd my-project
 - 4、安装依赖
    ``yarn ``
    或者
    ``npm install``
  5、启动项目
    ``npm run dev``

####项目目录结构
>  index.html：项目根视图
  .postcssrc.js :postcss配置文件
  static: 静态资源文件

####项目文件解析 
  src=>App.vue是根组件
  src=>main.js是入口文件

  一个组件是使用包括三个步骤：
      1、import App from '/App' 通过import引入
      2、template: '<App/>'     加载视图
      3、components: { App }    创建一个组件的名字

      注意：他们的名字需要一一对应

  打开App.vue
      img的src是对应的目录地址，可以找到
      <router-view/>是在src=>router=>index.js文件中找到
      和上面类似，引入

      import Vue from 'vue'
      import VueRouter from 'vue-router'

      Vue.use(VueRouter)
      如果在一个模块化工程中使用它，必须要通过 Vue.use() 明确地安装路由功能

      注意，main.js和路由下的index.js有点区别
        main.js 下
            new Vue({
              el: "#app", //绑定app的根组件
              router,     //路由  这个之前是没有的
              components: { App }, //
              template: "<App/>"  //
            });
# 语法模板
  Vue 组件：
    包含三个部分：
   >  template:视图
      script:逻辑
      style:样式
        注意: 当<style> 标签有 scoped 属性时，它的 CSS 只作用于当前组件中的元素。

    你可以在一个组件中同时使用有作用域和无作用域的样式：
    <style>
    /* 全局样式 */
    </style>
    <style scoped>
    /* 本地样式 */
    </style>
    使用 scoped 后，父组件的样式将不会渗透到子组件中

    如果你希望 scoped 样式中的一个选择器能够作用得“更深”，例如影响子组件，你可以使用 >>> 操作符：
    <style scoped>
    .a >>> .b { /* ... */ }
     </style>

  Mustache:模板
    表现形式：{{语法}}
              {{msg}}
              {{1+1}}
              {{'注意!!这里只能出现单行语句,并且不能作用在html中'}}
              {{0>10 ? 'yes' : 'no'}}

  Vue基本指令：
    v-html: 渲染文本
    v-text：渲染文本
    v-bind: 绑定

  条件渲染:
    v-if:
    v-else:
    v-else-if:
    v-show:

      v-show和v-if的区别:
        1.v-show 不支持 <template> 元素，也不支持 v-else
        2.v-if 是“真正”的条件渲染，因为它会确保在切换过程中条件块内的事件监听器和子组件适当地被销毁和重建。
        v-if 也是惰性的：如果在初始渲染时条件为假，则什么也不做——直到条件第一次变为真时，才会开始渲染条件块。
        相比之下，v-show 就简单得多——不管初始条件是什么，元素总是会被渲染，并且只是简单地基于 CSS 进行切换。
        一般来说，v-if 有更高的切换开销，而 v-show 有更高的初始渲染开销。因此，如果需要非常频繁地切换，则使用 v-show 较好；如果在运行时条件很少改变，则使用 v-if 较好。

        通俗的来说就是: v-show会一直存在html中, 通过切换css样式来显示与否,条件为false,display:none;
                       v-if,当条件为true才会出现在html中,并显示,否则不显示并且不存在于html中

  同级标签不能嵌套: div除外
    false:
          <p>
            <p></p>
          </p>
    true:
          <p>
            <span></span>
          </p>
    可以使用template标签,不会渲染成组件

  列表渲染:
    v-for:
    每个列表都要添加key,不然会出现警告!!!

  事件参数:
  事件修饰符:

      .stop
      .prevent
      .capture
      .self
      .once

  按键修饰符:

      .enter
      .tab
      .delete (捕获“删除”和“退格”键)
      .esc
      .space
      .up
      .down
      .left
      .right
  .exact 修饰符允许你控制由精确的系统修饰符组合触发的事件。


  数组更新检测:
      变异方法:引起视图更新;

          push()
          pop()
          shift()
          unshift()
          splice()
          sort()
          reverse()

      替换数组:不会引起数组的更新
      
  计算属性和观察者:
    computed
    计算属性和methods区别:
      我们可以将同一函数定义为一个方法而不是一个计算属性。两种方式的最终结果确实是完全相同的。然而，不同的是计算属性是基于它们的依赖进行缓存的。计算属性只有在它的相关依赖发生改变时才会重新求值。这就意味着只要 message 还没有发生改变，多次访问 reversedMessage 计算属性会立即返回之前的计算结果，而不必再次执行函数。

      从性能优化来说,计算属性优于methods:
        1.计算属性只有在它的相关依赖发生改变时才会重新求值
        2.多次访问计算属性,算属性会立即返回之前的计算结果，而不必再次执行函数。
        3.methods会每次都会计算

  表单输入和绑定:
    v-model:双向数据绑定
    修饰符:.lazy  .trim   .number  
