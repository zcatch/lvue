import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: () => import('@/views/home'),
    },
    {
      path: '/15',
      name: '15',
      component: () => import('@/views/class/15'),
    },
  ],
})
