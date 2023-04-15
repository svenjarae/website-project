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
    component: () => import(/* webpackChunkName: "projects" */ '../views/projects/ProjectsView')
  },
  {
    path: '/projects/descents',
    name: 'descents',
    component: () => import(/* webpackChunkName: "descents" */ '../views/projects/single-project/ProjectDescentView')
  },
  {
    path: '/projects/buceo-nocturno',
    name: 'buceo-nocturno',
    component: () => import(/* webpackChunkName: "buceo-nocturno" */ '../views/projects/single-project/ProjectBuceoNocturnoView')
  },
  {
    path: '/projects/taliarte',
    name: 'taliarte',
    component: () => import(/* webpackChunkName: "taliarte" */ '../views/projects/single-project/ProjectTaliarteView')
  },
  {
    path: '/projects/gcsealife',
    name: 'gcsealife',
    component: () => import(/* webpackChunkName: "gcsealife" */ '../views/projects/single-project/ProjectGcSealifeView')
  },
  {
    path: '/projects/galapagos',
    name: 'galapagos',
    component: () => import(/* webpackChunkName: "galapagos" */ '../views/projects/single-project/ProjectGalapagosView')
  },
  {
    path: '/projects/onistudio',
    name: 'onistudio',
    component: () => import(/* webpackChunkName: "onistudio" */ '../views/projects/single-project/ProjectOniStudioView')
  },
  {
    path: '/projects/paradise',
    name: 'paradise',
    component: () => import(/* webpackChunkName: "maldives" */ '../views/projects/single-project/ProjectMaldivesView')
  },
  {
    path: '/projects/animations/bird',
    name: 'bird',
    component: () => import(/* webpackChunkName: "bird" */ '../views/projects/single-project/ProjectBirdView')
  },
  {
    path: '/projects/animations/triangle',
    name: 'triangle',
    component: () => import(/* webpackChunkName: "trip" */ '../views/projects/single-project/ProjectTripView')
  },
  {
    path: '/projects/animations/pixelgrid',
    name: 'pixelgrid',
    component: () => import(/* webpackChunkName: "pixelgrid" */ '../views/projects/single-project/ProjectPixelGridView')
  },
  {
    path: '/skills',
    name: 'skills',
    component: () => import(/* webpackChunkName: "skills" */ '../views/SkillsView')
  },
  {
    path: '/philo',
    name: 'philo',
    component: () => import(/* webpackChunkName: "philo" */ '../views/PhiloView')
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
