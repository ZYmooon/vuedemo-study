#一.单文件组成
    1.三个部分:
      1.template   只能存在一个根元素
      2.script     必须导出当前组件,否则外部无法访问,给组件指定一个name,指定data用来绑定数据
      3.style      scoped:样式只在当前组件内生效,局部作用

    2.子父级组件:
        1.引入组件:import Son from './Son'
        2.注入到父级组件:components:{
                          Son:Son
                        }
        3.div根组件中展示: <Son/>

    3.子父级组件交互(通信)
        父 => 子 :
          Pass props: 向下传递，事件向上传递。父组件通过 prop 给子组件下发数据，子组件通过事件给父组件发送消息。

          组件实例的作用域是孤立的。这意味着不能 (也不应该) 在子组件的模板内直接引用父组件的数据。父组件的数据需要通过 prop 才能下发到子组件中。

          首先父亲需要把数据准备好:通过标签的形式给儿子传递

        

        Prop 验证:如果传入的数据不符合要求，Vue 会发出警告。这对于开发给他人使用的组件非常有用。
            props: {
        // 基础类型检测 (`null` 指允许任何类型)
        propA: Number,
        // 可能是多种类型
        propB: [String, Number],
        // 必传且是字符串
        propC: {
          type: String,
          required: true
        },
        // 数值且有默认值
        propD: {
          type: Number,
          default: 100
        },
        // 数组/对象的默认值应当由一个工厂函数返回
        propE: {
          type: Object,
          default: function () {
            return { message: 'hello' }
          }
        },
        // 自定义验证函数
        propF: {
          validator: function (value) {
            return value > 10
          }
        }
      } 
      通俗的来说就是，数据传递类型限制，数据类型验证，多数据类型验证，必选项，默认值

      子 => 父 :
        Event Emit :  
        sendMsg(event){

          //两个参数,参数1:key 参数2:data 
          this.$emit("sendmsg",this.addNum)
        }


  插槽:
      单个插槽:
      具名插槽:
      作用域插槽:slot-scope 数据是子传父
        注意:  2.5.0之前,必须使用到template 上

  动态组件:
  keep-alive:
  什么情况下使用缓存:死数据,不需要实时更新的数据,

#二.CSS过渡与动画
  在 CSS 过渡和动画中自动应用 class
      过渡类名:
          v-enter：进入开始
          v-enter-active：执行过程中
          v-enter-to: 结束动画
          v-leave: 定义离开过渡的开始状态。
          v-leave-active：定义过渡的状态。
          v-leave-to:  离开结束.

  可以配合使用第三方 CSS 动画库，如 Animate.css

  动画会导致回流和重绘:需要让动画脱离文档流

  自定义指令:
      注册一个全局自定义指令 
      Vue.directive('focus', {
      // 当被绑定的元素插入到 DOM 中时……
        inserted: function (el) {
         // 聚焦元素
          el.focus()
       }
      })

      如果想注册局部指令，组件中也接受一个 directives 的选项：
      directives: {
        focus: {
          // 指令的定义
          inserted: function (el) {
            el.focus()
          }
        }
      }