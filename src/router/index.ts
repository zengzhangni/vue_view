import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Index',
        component: () => import( '../views/Index.vue'),
        children: [
            {
                path: '/hello',
                name: 'Hello',
                component: () => import( '../views/index/Hello.vue')
            },
            {
                path: '/header',
                name: 'Header',
                component: () => import( '../views/index/Header.vue')
            },
            {
                path: '/product',
                name: 'Product',
                component: () => import( '../views/index/Product.vue')
            }
        ]
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import( '../views/Login.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
