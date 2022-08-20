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
    path: '/projects/uw-plants',
    name: 'uw-plants',
    component: () => import(/* webpackChunkName: "project" */ '../views/ProjectUwPlantsView')
  },
  {
    path: '/projects/galapagos',
    name: 'galapagos',
    component: () => import(/* webpackChunkName: "project" */ '../views/ProjectGalapagosView')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
