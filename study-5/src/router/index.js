import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Course from '@/components/course'
import Teachers from '@/components/teachers'

import Chinese from '@/components/childPages/chinese'
import Maths from '@/components/childPages/maths'
import Sports from '@/components/childPages/sports'
import Arts from '@/components/childPages/arts'



Vue.use(Router)

export default new Router({
  linkActiveClass:'active',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/course/:count/',
      name: 'course',
      component: Course
    },
    {
      path: '/teachers',
      name: 'teachers',
      component: Teachers,
      //默认进来进入语文老师页面
      redirect:'/Teachers/chinese',
      children:[
        {
          path:'chinese',
          component:Chinese,
        },
        {
          path:'maths',
          component:Maths,
        },       
        {
          path:'sports',
          component:Sports,
        },
        {
          path:'arts',
          component:Arts,
        }
      ]
    }
  ]
})
