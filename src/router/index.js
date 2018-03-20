import Vue from 'vue'
import Router from 'vue-router'
import iViewTest from '@/components/iViewTest.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'iViewTest',
      component: iViewTest
    }
  ]
})
