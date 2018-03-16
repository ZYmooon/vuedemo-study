### vuedemo-study
  里面了学习了vue的基本指令,
  父子组件的相互通信,
  路由跳转,路由嵌套,
  axios异步获取数据
  element组件
  swiper组件
  生命周期,
  vuex
  
  等等,对vue的使用有了大概的了解和认识

#### vue 生命周期:组件实例化从创建到结束的整个过程
      可以通过生命周期解决需求,解决问题
  
    生命周期钩子函数:在不同阶段执行不同的方法

        beforCreat:组件实例化之前执行的函数
        created:组件实例化完毕,但页面还没显示
        beforeMount:组件挂载前,页面仍未展示,但是虚拟DOM已经配置
        mounted:组件挂载后,此方法执行后,页面显示
        beforUpdate:组件更新前,页面仍未更新,但虚拟DOM已经配置
        updated:组件更新,此方法执行后,页面显示
        beforeDestroy:组件销毁前,
        destroyed:组件已经销毁
