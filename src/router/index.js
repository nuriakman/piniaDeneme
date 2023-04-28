import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Goster1View from '../views/Goster1View.vue'
import Goster2View from '../views/Goster2View.vue'
import FetchView from '../views/FetchView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/FetchView',
      name: 'FetchView',
      component: FetchView
    },
    {
      path: '/Goster1',
      name: 'Goster1',
      component: Goster1View
    },
    {
      path: '/Goster2',
      name: 'Goster2',
      component: Goster2View
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
