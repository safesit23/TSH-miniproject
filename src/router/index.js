import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/index.vue'
import Testdata from '../views/test.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Index',
        component: Index,
    },
    {
        path: '/test',
        name: 'Test',
        component: Testdata,
    },
]

const router = new VueRouter({
    mode: 'history',
    routes,
})

export default router
