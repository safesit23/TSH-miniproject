import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/index.vue'
import Musical from '../views/musical.vue'
import Dashboard from '../views/dashboard.vue'
import MiniGame from '../views/minigame.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Index',
        component: Index,
    },
    {
        path: '/musical',
        name: 'Musical',
        component: Musical,
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: Dashboard
    },
    {
        path: '/bingo',
        name: 'MiniGame',
        component: MiniGame
    }
]

const router = new VueRouter({
    mode: 'history',
    routes,
})

export default router
