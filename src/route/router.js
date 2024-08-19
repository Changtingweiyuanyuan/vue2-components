import Vue from 'vue'
import Router from 'vue-router'
import Intro from '@/pages/intro/Index.vue'
import Demo from '@/pages/demo/Index.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Intro',
      component: Intro,
    },
    {
      path: '/demo',
      name: 'Demo',
      component: Demo,
    },
  ],
})
