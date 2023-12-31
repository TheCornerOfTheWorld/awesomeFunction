import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/uploadLargeFile',
      name: 'UploadLargeFile',
      component: () => import('../views/UploadLargeFile.vue')
    },
    {
      path: '/H5Camera',
      name: 'H5Camera',
      component: () => import('../views/H5Camera/index.vue')
    },
    {
      path: '/EffectScope',
      name: 'EffectScope',
      component: () => import('../views/EffectScope/index.vue')
    },
    {
      path: '/CssAnimation',
      name: 'CssAnimation',
      component: () => import('../views/CssAnimation/demo.vue')
    }
  ]
})

export default router
