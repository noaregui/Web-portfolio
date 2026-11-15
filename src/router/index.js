import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    if (to.hash) return { el: to.hash, behavior: 'smooth' }
    return { top: 0 }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/views/AboutView.vue'),
    },
    {
      path: '/projects',
      name: 'projects',
      component: () => import('@/views/ProjectsView.vue'),
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('@/views/ContactView.vue'),
    },
    {
      path: '/vapi',
      name: 'vapi',
      component: () => import('@/views/VapiView.vue'),
    },
    {
      path: '/meta',
      name: 'meta',
      component: () => import('@/views/MetaView.vue'),
    },
    {
      path: '/chatgpt',
      name: 'chatgpt',
      component: () => import('@/views/ChatGPTView.vue'),
    },
    {
      path: '/botpress',
      name: 'botpress',
      component: () => import('@/views/BotpressView.vue'),
    },
    {
      path: '/nativeappback',
      name: 'nativeappback',
      component: () => import('@/views/NativeAppBackView.vue'),
    },
    {
      path: '/nativeappfront',
      name: 'nativeappfront',
      component: () => import('@/views/NativeAppFrontView.vue'),
    },
  ],
})

export default router
