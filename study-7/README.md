父子组件之间的交互

复习了路由

main.js 是我们的入口文件，主要作用是初始化vue实例并使用需要的插件,里面配置的 所有组件能直接用 不用再引用了,过study-6可以知道,当我们引用了第三方组件,插件,库的时候,是放在main.js文件夹下的

App.vue是我们的主组件，所有页面都是在App.vue下进行切换的。其实你也可以理解为所有的路由也是App.vue的子组件。

index.html文件入口

src放置组件和入口文件

node_modules为依赖的模块

config中配置了路径端口值等

build中配置了webpack的基本配置、开发环境配置、生产环境配置等
通

## vuex
虽然 Vuex 可以帮助我们管理共享状态，但也附带了更多的概念和框架。这需要对短期和长期效益进行权衡。

如果您不打算开发大型单页应用，使用 Vuex 可能是繁琐冗余的。确实是如此——如果您的应用够简单，您最好不要使用 Vuex。一个简单的 global event bus 就足够您所需了。但是，如果您需要构建是一个中大型单页应用，您很可能会考虑如何更好地在组件外部管理状态，Vuex 将会成为自然而然的选择。

引用 Redux 的作者 Dan Abramov 的话说就是：
Flux 架构就像眼镜：您自会知道什么时候需要它。

## Vuex状态管理

view => (dispatch) Action =>(Commit) Mutations =>(Mutate) State => View
注意:Action不是必需品.如果有异步操作才可能用到Action,否则可以不使用.

Mutation
更改 Vuex 的 store 中的状态的唯一方法是提交 mutation。Vuex 中的 mutation 非常类似于事件：每个 mutation 都有一个字符串的 事件类型 (type) 和 一个 回调函数 (handler)。这个回调函数就是我们实际进行状态更改的地方，并且它会接受 state 作为第一个参数：
const store = new Vuex.Store({
  state: {
    count: 1
  },
  mutations: {
    increment (state) {
      // 变更状态
      state.count++
    }
  }
})

你不能直接调用一个 mutation handler。这个选项更像是事件注册：“当触发一个类型为 increment 的 mutation 时，调用此函数。”要唤醒一个 mutation handler，你需要以相应的 type 调用 store.commit 方法：
store.commit('increment')


Action 类似于 mutation，不同在于：

Action 提交的是 mutation，而不是直接变更状态。
Action 可以包含任意异步操作。