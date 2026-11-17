import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import { NAV_OFFSET } from '@/composables/useSections'
import { getProject, projects } from '@/data/projects'

// Old top-level project URLs (e.g. /vapi) keep working by redirecting to /projects/:slug.
const legacyProjectRedirects = projects.map(({ slug }) => ({
  path: `/${slug}`,
  redirect: { name: 'project', params: { slug } },
}))

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    // Home sections: leave room for the sticky navbar
    if (to.hash) return { el: to.hash, top: NAV_OFFSET, behavior: 'smooth' }
    return { top: 0 }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    // Old page, now a section of the Home
    {
      path: '/about',
      name: 'about',
      redirect: (to) => ({ name: 'home', query: to.query, hash: '#about' }),
    },
    {
      path: '/projects',
      name: 'projects',
      component: () => import('@/views/ProjectsView.vue'),
    },
    {
      path: '/projects/:slug',
      name: 'project',
      component: () => import('@/views/ProjectDetailView.vue'),
    },
    // Old page, now a section of the Home
    {
      path: '/services',
      name: 'services',
      redirect: (to) => ({ name: 'home', query: to.query, hash: '#services' }),
    },
    // Old page, now a section of the Home
    {
      path: '/contact',
      name: 'contact',
      redirect: (to) => ({ name: 'home', query: to.query, hash: '#contact' }),
    },
    ...legacyProjectRedirects,
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: () => import('@/views/NotFoundView.vue'),
    },
  ],
})

// Unknown project slugs show the 404 page. A global guard (not beforeEnter) also
// catches navigation between two project pages, where only the param changes.
router.beforeEach((to) => {
  if (to.name !== 'project' || getProject(to.params.slug)) return true
  return {
    name: 'not-found',
    params: { pathMatch: to.path.substring(1).split('/') },
    query: to.query,
    hash: to.hash,
  }
})

export default router
