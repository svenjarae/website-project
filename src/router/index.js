import { createRouter, createWebHistory } from 'vue-router'


const routes = [
  {
    path: '/',
    name: 'svenjaraetzsch',
    component: () => import(/* webpackChunkName: "svenjaraetzsch" */ '../views/SvenjaRaetzsch'),
    meta: {
      breadcrumbs: [
        { label: 'Start', to: '/' },
        // Add more breadcrumbs as needed
      ],
    },
  },
  {
    path: '/projects',
    name: 'projects',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "projects" */ '../views/projects/ProjectsView'),
    meta: {
      breadcrumbs: [
        { label: 'Start', to: '/' },
        { label: '> Projects', to: '/projects' },
      ],
    },
  },
  {
    path: '/projects/sub',
    name: 'sub',
    component: () => import(/* webpackChunkName: "sub" */ '../views/projects/single-project/ProjectSubView'),
    meta: {
      breadcrumbs: [
        { label: 'Start', to: '/' },
        { label: '> Projects', to: '/projects' },
        { label: '> Sub', to: '/projects/sub' },
      ],
    },
  },
  {
    path: '/projects/nocturno',
    name: 'nocturno',
    component: () => import(/* webpackChunkName: "nocturno" */ '../views/projects/single-project/ProjectBuceoNocturnoView'),
    meta: {
      breadcrumbs: [
        { label: 'Start', to: '/' },
        { label: '> Projects', to: '/projects' },
        { label: '> Nocturno', to: '/projects/nocturno' },
      ],
    },
  },
  {
    path: '/projects/taliarte',
    name: 'taliarte',
    component: () => import(/* webpackChunkName: "taliarte" */ '../views/projects/single-project/ProjectTaliarteView'),
    meta: {
      breadcrumbs: [
        { label: 'Start', to: '/' },
        { label: '> Projects', to: '/projects' },
        { label: '> Taliarte', to: '/projects/taliarte' },
      ],
    },
  },
  {
    path: '/projects/gcsealife',
    name: 'gcsealife',
    component: () => import(/* webpackChunkName: "gcsealife" */ '../views/projects/single-project/ProjectGcSealifeView'),
    meta: {
      breadcrumbs: [
        { label: 'Start', to: '/' },
        { label: '> Projects', to: '/projects' },
        { label: '> GC Sealife', to: '/projects/gcsealife' },
      ],
    },
  },
  {
    path: '/projects/galapagos',
    name: 'galapagos',
    component: () => import(/* webpackChunkName: "galapagos" */ '../views/projects/single-project/ProjectGalapagosView'),
    meta: {
      breadcrumbs: [
        { label: 'Start', to: '/' },
        { label: '> Projects', to: '/projects' },
        { label: '> Galapagos', to: '/projects/galapagos' },
      ],
    },
  },
  {
    path: '/projects/onistudio',
    name: 'onistudio',
    component: () => import(/* webpackChunkName: "onistudio" */ '../views/projects/single-project/ProjectOniStudioView'),
    meta: {
      breadcrumbs: [
        { label: 'Start', to: '/' },
        { label: '> Projects', to: '/projects' },
        { label: '> Oni Studio', to: '/projects/onistudio' },
      ],
    },
  },
  {
    path: '/projects/paradise',
    name: 'paradise',
    component: () => import(/* webpackChunkName: "maldives" */ '../views/projects/single-project/ProjectMaldivesView'),
    meta: {
      breadcrumbs: [
        { label: 'Start', to: '/' },
        { label: '> Projects', to: '/projects' },
        { label: '> Paradise', to: '/projects/paradise' },
      ],
    },
  },
  {
    path: '/projects/bird',
    name: 'bird',
    component: () => import(/* webpackChunkName: "bird" */ '../views/projects/single-project/ProjectBirdView'),
    meta: {
      breadcrumbs: [
        { label: 'Start', to: '/' },
        { label: '> Projects', to: '/projects' },
        { label: '> Bird', to: '/projects/bird' },
      ],
    },
  },
  {
    path: '/projects/triangle',
    name: 'triangle',
    component: () => import(/* webpackChunkName: "trip" */ '../views/projects/single-project/ProjectTripView'),
    meta: {
      breadcrumbs: [
        { label: 'Start', to: '/' },
        { label: '> Projects', to: '/projects' },
        { label: '> Triangle', to: '/projects/triangle' },
      ],
    },
  },
  {
    path: '/projects/pixelgrid',
    name: 'pixelgrid',
    component: () => import(/* webpackChunkName: "pixelgrid" */ '../views/projects/single-project/ProjectPixelGridView'),
    meta: {
      breadcrumbs: [
        { label: 'Start', to: '/' },
        { label: '> Projects', to: '/projects' },
        { label: '> Pixelgrid', to: '/projects/pixelgrid' },
      ],
    },
  },
  {
    path: '/who',
    name: 'who',
    component: () => import(/* webpackChunkName: "skills" */ '../views/SkillsView'),
    meta: {
      breadcrumbs: [
        { label: 'Start', to: '/' },
        { label: '> Who', to: '/who' },
      ],
    },
  },
  {
    path: '/philo',
    name: 'philo',
    component: () => import(/* webpackChunkName: "philo" */ '../views/PhiloView'),
    meta: {
      breadcrumbs: [
        { label: 'Start', to: '/' },
        { label: '> Philo', to: '/philo' },
      ],
    },
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
