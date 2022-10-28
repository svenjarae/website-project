import { createRouter, createWebHistory } from 'vue-router'


const routes = [
  {
    path: '/',
    name: 'svenjaraetzsch',
    component: () => import(/* webpackChunkName: "svenjaraetzsch" */ '../views/SvenjaRaetzsch')
  },
  {
    path: '/projects',
    name: 'projects',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "projects" */ '../views/ProjectsView.vue')
  },
  {
    path: '/projects/taliarte',
    name: 'taliarte',
    component: () => import(/* webpackChunkName: "taliarte" */ '../views/ProjectTaliarteView')
  },
  {
    path: '/projects/gcsealife',
    name: 'gcsealife',
    component: () => import(/* webpackChunkName: "gcsealife" */ '../views/ProjectGcSealifeView')
  },
  {
    path: '/projects/galapagos',
    name: 'galapagos',
    component: () => import(/* webpackChunkName: "galapagos" */ '../views/ProjectGalapagosView')
  },
  {
    path: '/projects/glowingturts',
    name: 'glowingturts',
    component: () => import(/* webpackChunkName: "galapagos" */ '../views/ProjectGlowingTurtsView')
  },
  {
    path: '/projects/onistudio',
    name: 'onistudio',
    component: () => import(/* webpackChunkName: "onistudio" */ '../views/ProjectOniStudioView')
  },
  {
    path: '/projects/paradise',
    name: 'paradise',
    component: () => import(/* webpackChunkName: "maldives" */ '../views/ProjectMaldivesView')
  },
  {
    path: '/projects/animations/bird',
    name: 'bird',
    component: () => import(/* webpackChunkName: "maldives" */ '../views/ProjectBirdView')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

router.afterEach(() => {
  window.scrollTo(0, 0);
});

export default router
