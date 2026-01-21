import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ProjectsView from '@/views/ProjectsView.vue'
import ContactView from '@/views/ContactView.vue'
import VapiView from '@/views/VapiView.vue'
import MetaView from '@/views/MetaView.vue'
import ChatGPTView from '@/views/ChatGPTView.vue'
import BotpressView from '@/views/BotpressView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
    },
    {
      path: '/projects',
      name: 'projects',
      component: ProjectsView,
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView,
    },
    {
      path: '/vapi',
      name: 'vapi',
      component: VapiView,
    },
    {
      path: '/meta',
      name: 'meta',
      component: MetaView,
    },
    {
      path: '/chatgpt',
      name: 'chatgpt',
      component: ChatGPTView,
    },
    {
      path: '/botpress',
      name: 'botpress',
      component: BotpressView,
    },
  ],
})

export default router
