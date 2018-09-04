import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home/home'
import List from '@/pages/List/list'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/List',
      name: 'List',
      component: List
    }
  ]
})
