import Vue from 'vue'
import VueRouter from 'vue-router'
import Comingsoon from '../views/Comingsoon.vue'
import Testdata from '../views/test.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Comingsoon',
    component: Comingsoon
  },
  {
    path: '/test',
    name: 'Test',
    component: Testdata
  }
]

const router = new VueRouter({
  mode: "history",
  routes
})

export default router
